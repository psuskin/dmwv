import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import NewsContent from "./NewsContent";

export async function generateMetadata({
  params: {},
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations("NewsPage");
  const tMeta = await getTranslations("metadata");

  return {
    metadataBase: new URL(
      process.env.NODE_ENV === "production"
        ? "https://dmwv.de"
        : "http://localhost:3000"
    ),
    title: `${t("title")} | ${tMeta("siteName")}`,
    description: t("subtitle"),
    openGraph: {
      title: `${t("title")} | ${tMeta("siteName")}`,
      description: t("subtitle"),
      images: [
        {
          url: "/images/news-og.jpg",
          width: 1200,
          height: 630,
          alt: t("title"),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${t("title")} | ${tMeta("siteName")}`,
      description: t("subtitle"),
    },
    keywords: [
      "Medical Wellness News",
      "Healthcare Updates",
      "Wellness Industry News",
      "DMWV News",
      "Medical News",
      "Healthcare Insights",
      "Wellness Developments",
      "Industry Updates",
    ],
  };
}

export default function NewsPage() {
  return <NewsContent />;
}
