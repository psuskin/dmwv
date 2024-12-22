import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SubHeader from "@/components/SubHeader";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { metadataConfig } from "@/app/metadata.config";

// Generate metadata
export async function generateMetadata({
  params: {},
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const t = await getTranslations("areasOfExpertise");
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
          url: "/images/areas-of-expertise-og.jpg",
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
      "Medical Wellness Competencies",
      "Healthcare Communication",
      "Medical Network",
      "Thomas Wildey Institute",
      "ADVEDA",
      "Healthcare Projects",
      "Medical Science",
      "German Medical Wellness",
      "Healthcare Research",
      "Wellness Standards",
    ],
  };
}

export default function AreasOfExpertise({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("areasOfExpertise");
  const expertiseAreas = [
    {
      title: t("areas.communication.title"),
      description: t("areas.communication.description"),
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
    },
    {
      title: t("areas.network.title"),
      description: t("areas.network.description"),
      image:
        "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
    },
    {
      title: t("areas.thomasWildey.title"),
      description: t("areas.thomasWildey.description"),
      image:
        "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
    {
      title: t("areas.adveda.title"),
      description: t("areas.adveda.description"),
      image:
        "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1991&q=80",
    },
    {
      title: t("areas.projects.title"),
      description: t("areas.projects.description"),
      image:
        "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
    },
    {
      title: t("areas.science.title"),
      description: t("areas.science.description"),
      image:
        "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    },
  ];

  return (
    <>
      <SubHeader
        title={t("title")}
        subtitle={t("subtitle")}
        backgroundImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        breadcrumbs={[
          { label: t("breadcrumbs.home"), href: "/" },
          {
            label: t("breadcrumbs.association"),
            href: "/verband/kompetenzfelder",
          },
          {
            label: t("breadcrumbs.areasOfExpertise"),
            href: "/verband/kompetenzfelder",
          },
        ]}
      />
      <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-6 gap-6">
            {expertiseAreas.map((area, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md ${
                  index === 0
                    ? "col-span-6 md:col-span-4"
                    : index === 1
                    ? "col-span-6 md:col-span-2"
                    : index === 2
                    ? "col-span-6 md:col-span-3"
                    : index === 3
                    ? "col-span-6 md:col-span-3"
                    : index === 4
                    ? "col-span-6 md:col-span-2"
                    : "col-span-6 md:col-span-4"
                }`}
              >
                <div
                  className={`relative ${
                    index === 0 ? "aspect-[21/9]" : "aspect-video"
                  }`}
                >
                  <Image
                    src={area.image}
                    alt={area.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                    <h2 className="text-2xl font-bold text-white">
                      {area.title}
                    </h2>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-24 bg-white py-16 px-4 sm:px-6 lg:px-8 rounded-lg max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              {t("holisticApproach.title")}
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              {t("holisticApproach.description")}
            </p>
            <a
              href="#"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-primary-600 hover:bg-primary-700 shadow-lg transition-shadow duration-300 transform"
            >
              {t("holisticApproach.contactUs")}
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
