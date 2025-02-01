import { VercelRequest, VercelResponse } from '@vercel/node';
import fetch from 'node-fetch';
import * as cheerio from 'cheerio';

const CLIENT_ID = '1idqPQHGdjsMFy8NwQT';
const ICON_SIZE = 400;

function cleanDomain(url: string): string {
    const domain = new URL(url).hostname;
    // Remove www. prefix if present
    return domain.replace(/^www\./, '');
}

async function getBrandfetchIcon(domain: string): Promise<string | null> {
    try {
        // Use direct CDN URL with size parameters
        const cdnUrl = `https://cdn.brandfetch.io/${domain}/w/${ICON_SIZE}/h/${ICON_SIZE}?c=${CLIENT_ID}`;
        console.log('Trying Brandfetch CDN:', cdnUrl);
        const response = await fetch(cdnUrl);
        if (response.ok) {
            return cdnUrl;
        }

        // If that fails, try Clearbit as backup
        const clearbitUrl = `https://logo.clearbit.com/${domain}`;
        console.log('Trying Clearbit CDN:', clearbitUrl);
        const clearbitResponse = await fetch(clearbitUrl);
        if (clearbitResponse.ok) {
            return clearbitUrl;
        }

        console.log('All logo attempts failed for:', domain);
        return null;
    } catch (error) {
        console.error('Error fetching icon:', error);
        return null;
    }
}

async function getFallbackIcon(url: string): Promise<string | null> {
    try {
        const response = await fetch(url);
        const html = await response.text();
        const $ = cheerio.load(html);

        // Try apple-touch-icon first (usually highest quality)
        const appleTouchIcon = $('link[rel="apple-touch-icon"]').attr('href') ||
            $('link[rel="apple-touch-icon-precomposed"]').attr('href');
        if (appleTouchIcon) {
            const iconUrl = new URL(appleTouchIcon, url).href;
            console.log('Found apple-touch-icon:', iconUrl);
            const iconResponse = await fetch(iconUrl);
            if (iconResponse.ok) {
                return iconUrl;
            }
        }

        // Try regular favicon
        const favicon = $('link[rel="icon"]').attr('href') ||
            $('link[rel="shortcut icon"]').attr('href');
        if (favicon) {
            const iconUrl = new URL(favicon, url).href;
            console.log('Found favicon:', iconUrl);
            const iconResponse = await fetch(iconUrl);
            if (iconResponse.ok) {
                return iconUrl;
            }
        }

        // Try default favicon.ico
        const defaultFavicon = new URL('/favicon.ico', url).href;
        console.log('Trying default favicon:', defaultFavicon);
        const defaultResponse = await fetch(defaultFavicon);
        if (defaultResponse.ok) {
            return defaultFavicon;
        }

        return null;
    } catch (error) {
        console.error('Error fetching fallback icon:', error);
        return null;
    }
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
    // Enable CORS
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    if (req.method === 'OPTIONS') {
        return res.status(200).end();
    }

    const { url } = req.query;

    if (!url || typeof url !== 'string') {
        return res.status(400).json({ error: 'URL is required' });
    }

    try {
        // Clean the domain for icon fetching
        const domain = cleanDomain(url);
        console.log('Fetching icon for domain:', domain);

        // Try Brandfetch first
        const brandfetchIcon = await getBrandfetchIcon(domain);
        if (brandfetchIcon) {
            console.log('Found Brandfetch icon:', brandfetchIcon);
            return res.status(200).json({
                title: domain,
                icon: brandfetchIcon
            });
        }

        // If Brandfetch fails, try fallback methods
        console.log('Brandfetch failed, trying fallback methods');
        const fallbackIcon = await getFallbackIcon(url);

        return res.status(200).json({
            title: domain,
            icon: fallbackIcon || null
        });
    } catch (error) {
        console.error('Error fetching metadata:', error);
        return res.status(500).json({ error: 'Failed to fetch metadata' });
    }
} 