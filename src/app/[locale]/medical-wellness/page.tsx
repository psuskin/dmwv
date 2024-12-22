import { unstable_setRequestLocale } from "next-intl/server";
import MedicalWellnessContent from "./MedicalWellnessContent";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { metadataConfig } from "@/app/metadata.config";

export default function MedicalWellnessPage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);

  return <MedicalWellnessContent />;
}

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

// Generate metadata
export async function generateMetadata({
  params: {},
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations("medicalWellness");
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
          url: "/images/medical-wellness-og.jpg",
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
  };
}
