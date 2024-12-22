import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import CertificationContent from "./CertificationContent";

export async function generateMetadata({
  params: {},
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations("certification");
  const tMeta = await getTranslations("metadata");

  return {
    title: `${t("title")} | ${tMeta("siteName")}`,
    description: t("subtitle"),
    openGraph: {
      title: `${t("title")} | ${tMeta("siteName")}`,
      description: t("subtitle"),
      images: [
        {
          url: "/images/certification-og.jpg",
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
      "Medical Wellness Certification",
      "Healthcare Certification",
      "Wellness Standards",
      "Medical Spa Certification",
      "Healthcare Quality Standards",
      "German Medical Wellness",
    ],
  };
}

export default function CertificationPage() {
  return <CertificationContent />;
}
