import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import MembershipContent from "./MembershipContent";
import { metadataConfig } from "@/app/metadata.config";

export async function generateMetadata({
  params: {},
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations("membership");
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
          url: "/images/membership-og.jpg",
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
      "DMWV Membership",
      "Medical Wellness Association",
      "Healthcare Membership",
      "Medical Network",
      "Wellness Certification",
      "Healthcare Professional Network",
      "Medical Wellness Standards",
      "German Medical Association",
      "Healthcare Partnership",
      "Medical Wellness Community",
    ],
  };
}

export default function MembershipPage() {
  return <MembershipContent />;
}
