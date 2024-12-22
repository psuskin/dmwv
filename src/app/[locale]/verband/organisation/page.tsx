import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import OrganisationContent from "./OrganisationContent";
import { metadataConfig } from "@/app/metadata.config";

export async function generateMetadata({
  params: {},
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations("organisation");
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
          url: "/images/organisation-og.jpg",
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
      "DMWV Organization",
      "Medical Wellness Team",
      "Healthcare Leadership",
      "Medical Board Members",
      "Wellness Experts",
      "Healthcare Management",
      "Medical Quality Team",
      "Wellness Development",
      "Healthcare Training",
      "German Medical Association",
    ],
  };
}

export default function OrganisationPage() {
  return <OrganisationContent />;
}
