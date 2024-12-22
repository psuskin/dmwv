import { MetadataRoute } from 'next';
import { newsData } from '@/constants/newsData';

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = process.env.NODE_ENV === "production"
        ? "https://dmwv.de"
        : "http://localhost:3000";

    // Base routes for each language
    const routes = ['de', 'en'].flatMap((lang) => [
        {
            url: `${baseUrl}/${lang}`,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 1,
        },
        {
            url: `${baseUrl}/${lang}/medical-wellness`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.8,
        },
        {
            url: `${baseUrl}/${lang}/news`,
            lastModified: new Date(),
            changeFrequency: 'daily' as const,
            priority: 0.9,
        },
        {
            url: `${baseUrl}/${lang}/planning`,
            lastModified: new Date(),
            changeFrequency: 'weekly' as const,
            priority: 0.7,
        },
    ]);

    // Add news article routes
    const newsRoutes = newsData.flatMap((news) => ['de', 'en'].map((lang) => ({
        url: `${baseUrl}/${lang}/news/${news.id}`,
        lastModified: new Date(news.date),
        changeFrequency: 'monthly' as const,
        priority: 0.6,
    })));

    return [...routes, ...newsRoutes];
} 