/* eslint-disable @typescript-eslint/no-explicit-any */
export function generateOrganizationSchema() {
    return {
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "German Medical Wellness Association",
        url: "https://dmwv.de",
        logo: "https://dmwv.de/images/logo.png",
        sameAs: [
            "https://www.facebook.com/DMWV",
            "https://twitter.com/DMWV",
            "https://www.linkedin.com/company/dmwv",
        ],
        contactPoint: {
            "@type": "ContactPoint",
            telephone: "+49-XXX-XXXXXX",
            contactType: "customer service",
            availableLanguage: ["English", "German"],
        },
    };
}

export function generateNewsArticleSchema(article: any, locale: string) {
    return {
        "@context": "https://schema.org",
        "@type": "NewsArticle",
        headline: article.title[locale],
        image: [article.image],
        datePublished: article.date,
        dateModified: article.date,
        author: {
            "@type": "Organization",
            name: "German Medical Wellness Association",
        },
    };
} 