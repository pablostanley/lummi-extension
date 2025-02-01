import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // Enable CORS for both Chrome extension and browser testing
    const origin = req.headers.origin;
    if (origin) {
        if (origin.startsWith('chrome-extension://') || origin === 'https://lummi-extension.vercel.app') {
            res.setHeader('Access-Control-Allow-Origin', origin);
        }
    } else {
        // For testing directly in the browser
        res.setHeader('Access-Control-Allow-Origin', '*');
    }
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // Handle preflight requests
    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    try {
        const { query } = req.query;
        console.log('Received query:', query);

        if (!query || typeof query !== 'string') {
            return res.status(400).json({ error: 'Query parameter is required' });
        }

        const LUMMI_API_KEY = process.env.LUMMI_API_KEY;
        if (!LUMMI_API_KEY) {
            console.error('API key not found in environment variables');
            return res.status(500).json({ error: 'API key not configured' });
        }

        console.log('Making request to Lummi API...');
        const apiUrl = `https://api.lummi.ai/v1/images?query=${encodeURIComponent(query)}`;
        console.log('Request URL:', apiUrl);

        const response = await fetch(apiUrl, {
            headers: {
                'Authorization': `Bearer ${LUMMI_API_KEY}`,
                'Content-Type': 'application/json',
            },
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Lummi API error:', response.status, errorText);
            return res.status(response.status).json({
                error: 'Lummi API error',
                status: response.status,
                details: errorText
            });
        }

        const data = await response.json();
        console.log('Successfully received response from Lummi API');
        return res.status(200).json(data);
    } catch (error) {
        console.error('Error proxying request:', error);
        return res.status(500).json({
            error: 'Failed to fetch images',
            details: error instanceof Error ? error.message : 'Unknown error'
        });
    }
} 