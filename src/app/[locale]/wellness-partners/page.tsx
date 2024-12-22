import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import WellnessPartnersContent from "./WellnessPartnersContent";

export async function generateMetadata({
  params: {},
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations("AllWellnessHotels");
  const tMeta = await getTranslations("metadata");

  return {
    title: `${t("title")} | ${tMeta("siteName")}`,
    description: t("subtitle"),
    openGraph: {
      title: `${t("title")} | ${tMeta("siteName")}`,
      description: t("subtitle"),
      images: [
        {
          url: "/images/wellness-partners-og.jpg",
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

export default function WellnessPartnersPage() {
  return <WellnessPartnersContent />;
}
