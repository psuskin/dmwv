/* eslint-disable @typescript-eslint/no-explicit-any */

export const GA_ID = "G-XXXXXXXXXX";

// Initialize Google Analytics
export const initGA = () => {
    window.dataLayer = window.dataLayer || [];
    function gtag(...args: any[]) {
        window.dataLayer.push(args);
    }
    gtag("js", new Date());
    gtag("config", GA_ID);
};

// Track page views
export const pageview = (url: string) => {
    window.gtag("config", GA_ID, {
        page_path: url,
    });
};

// Track events
export const event = ({ action, category, label, value }: {
    action: string;
    category: string;
    label: string;
    value?: number;
}) => {
    window.gtag("event", action, {
        event_category: category,
        event_label: label,
        value: value,
    });
}; 