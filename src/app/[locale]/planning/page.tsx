import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PlanningContent from "./PlanningContent";

export async function generateMetadata({
  params: {  },
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations("planning");
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
          url: "/images/planning-og.jpg",
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
      "Medical Wellness Events",
      "Healthcare Conferences",
      "Wellness Symposiums",
      "Medical Congress Planning",
      "Healthcare Workshops",
      "Medical Training Events",
      "Wellness Seminars",
      "Healthcare Event Calendar",
      "Medical Professional Meetings",
      "DMWV Events",
    ],
  };
}

export default function PlanningPage() {
  return <PlanningContent />;
}
