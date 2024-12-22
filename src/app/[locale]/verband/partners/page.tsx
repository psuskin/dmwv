import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import PartnersContent from "./PartnersContent";
import { metadataConfig } from "@/app/metadata.config";

export async function generateMetadata({
  params: {},
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations("partners");
  const tMeta = await getTranslations("metadata");

  return {
    ...metadataConfig,
    title: `${t("title")} | ${tMeta("siteName")}`,
    description: t("subtitle"),
    openGraph: {
      title: `${t("title")} | ${tMeta("siteName")}`,
      description: t("subtitle"),
      images: [
        {
          url: "/images/partners-og.jpg",
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
      "DMWV Partners",
      "Medical Wellness Partners",
      "Healthcare Partnerships",
      "Wellness Network",
      "Medical Cooperation",
      "Healthcare Providers",
      "Wellness Industry Partners",
      "Medical Network",
      "Healthcare Collaboration",
      "German Medical Partners",
    ],
  };
}

export default function PartnersPage() {
  return <PartnersContent />;
}
