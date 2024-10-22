import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

// Can be imported from a shared config
export const locales = ['de', 'en', 'es', 'fr', 'it', 'ru', 'ar', 'tr'];

export default getRequestConfig(async ({ locale }) => {
    // Validate that the incoming `locale` parameter is valid
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    if (!locales.includes(locale as any)) notFound();

    return {
        messages: (await import(`@/messages/${locale}.json`)).default
    };
});