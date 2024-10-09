import { NextIntlClientProvider } from "next-intl";
import { getMessages, unstable_setRequestLocale } from "next-intl/server";
import "../globals.css";
import Navbar from "@/components/Home/Navbar";
import Footer from "@/components/Home/Footer";
import { locales } from "../../../i18n";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import { Messages } from "@/types/MetaMessages";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  let messages: Messages;
  try {
    messages = (await getMessages({ locale })) as Messages;
  } catch (error) {
    console.error(`Failed to load messages for locale ${locale}:`, error);
    return {
      title: "German Medical Wellness Association",
      description: "Default Description",
    };
  }

  const metadata = messages.metadata;

  if (!metadata) {
    console.error("Metadata is missing in messages");
    return {
      title: "German Medical Wellness Association",
      description: "Default Description",
    };
  }

  return {
    title: {
      default: metadata.defaultTitle,
      template: `%s | ${metadata.defaultTitle}`,
    },
    description: metadata.description,
    keywords: metadata.keywords,
    openGraph: {
      title: metadata.ogTitle,
      description: metadata.ogDescription,
      url: `https://dmwv.de/${locale}`,
      siteName: metadata.siteName,
      locale: locale,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: metadata.twitterTitle,
      description: metadata.twitterDescription,
      site: "@dmwv",
      creator: "@dmwv",
    },
    alternates: {
      canonical: `https://dmwv.de/${locale}`,
      languages: {
        "en-US": `https://dmwv.de/en`,
        "de-DE": `https://dmwv.de/de`,
      },
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

export default async function LocaleLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {

  // Set the request locale
  unstable_setRequestLocale(locale);
  // Check if the locale is valid
  if (!locales.includes(locale)) {
    notFound();
  }

  let messages: Messages;
  try {
    messages = (await getMessages({ locale })) as Messages;
  } catch (error) {
    console.error(`Failed to load messages for locale ${locale}:`, error);
    notFound();
  }

  return (
    <html lang={locale} className="h-full">
      <body
        className={`h-full bg-background text-foreground ${inter.className}`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <div className="flex flex-col min-h-screen">
            <Navbar />
            <main className="flex-grow">{children}</main>
            <Footer />
          </div>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
