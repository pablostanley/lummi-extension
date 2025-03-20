import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Accept');
    res.setHeader('Content-Type', 'application/json');

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
                'Authorization': `Bearer ${process.env.LUMMI_API_KEY}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        });

        if (!response.ok) {
            const errorText = await response.text();
            console.error('Lummi API error:', {
                status: response.status,
                body: errorText
            });
            return res.status(response.status).json({
                error: 'Lummi API error',
                status: response.status,
                details: errorText
            });
        }

        const contentType = response.headers.get('content-type');
        if (!contentType?.includes('application/json')) {
            const text = await response.text();
            console.error('Non-JSON response from Lummi API:', {
                contentType,
                text: text.substring(0, 200)
            });
            return res.status(500).json({
                error: 'Invalid response from Lummi API',
                details: 'Response was not JSON'
            });
        }

        const data = await response.json();

        // Validate the response structure
        if (!data || !Array.isArray(data.data)) {
            console.error('Invalid response structure from Lummi API:', data);
            return res.status(500).json({
                error: 'Invalid response structure',
                details: 'Response did not contain valid data array'
            });
        }

        console.log('Received response from Lummi API:', {
            query,
            totalResults: data.data.length
        });

        return res.status(200).json(data);
    } catch (error) {
        console.error('Error in search handler:', error);
        return res.status(500).json({
            error: 'Internal server error',
            details: error instanceof Error ? error.message : 'Unknown error'
        });
    }
} 