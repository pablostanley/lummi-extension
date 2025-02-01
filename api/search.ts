import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

    // Handle preflight request
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    const { query } = req.query;

    if (!query) {
        return res.status(400).json({ error: 'Query parameter is required' });
    }

    try {
        console.log('Making search request for query:', query);
        const apiUrl = `https://api.lummi.ai/v1/images/search?query=${encodeURIComponent(query as string)}`;

        const response = await fetch(apiUrl, {
            headers: {
                'Authorization': `Bearer ${process.env.LUMMI_API_KEY}`
            }
        });

        if (!response.ok) {
            throw new Error(`Lummi API error: ${response.status}`);
        }

        const data = await response.json();
        console.log('Received response from Lummi API:', {
            query,
            totalResults: data.data?.length || 0
        });

        return res.status(200).json(data);
    } catch (error) {
        console.error('Error in search API:', error);
        return res.status(500).json({ error: 'Failed to fetch images from Lummi API' });
    }
} 