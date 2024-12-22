import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    const baseUrl = process.env.NODE_ENV === "production"
        ? "https://www.dmwv.de"
        : "http://localhost:3000";

    return {
        rules: {
            userAgent: '*',
            allow: '/',
            disallow: [
                '/private/',
                '/admin/',
                '/api/',
                '/*?*',
                '/tmp/',
                '/*.pdf',
            ],
        },
        sitemap: `${baseUrl}/sitemap.xml`,
        host: baseUrl,
    };
} 