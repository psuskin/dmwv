"use client";

import Script from "next/script";
import { useEffect } from "react";
import { initGA, pageview } from "@/lib/analytics";
import { usePathname } from "next/navigation";

const GA_ID = "G-2HWQM05FN2";

export function GoogleAnalytics() {
  const pathname = usePathname();

  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (consent === "all") {
      initGA();
      pageview(pathname);
    }
  }, [pathname]);

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
        strategy="afterInteractive"
      />
      <Script id="google-analytics" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${GA_ID}', {
            page_path: window.location.pathname,
          });
        `}
      </Script>
    </>
  );
}
