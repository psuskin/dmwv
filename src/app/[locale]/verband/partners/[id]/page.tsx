import React from "react";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ExternalLink, Calendar, ArrowLeft } from "lucide-react";
import { partners } from "@/constants/partnersData";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useTranslations } from "next-intl";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { metadataConfig } from "@/app/metadata.config";

export async function generateMetadata({
  params: { id },
}: {
  params: { id: string; locale: string };
}): Promise<Metadata> {
  const t = await getTranslations("partners");
  const tMeta = await getTranslations("metadata");
  const partner = partners.find((p) => p.id === id);

  if (!partner) {
    return {
      title: "Partner Not Found",
    };
  }

  return {
    ...metadataConfig,
    title: `${t(`partnerNames.${partner.id}`)} | ${tMeta("siteName")}`,
    description: t(`partnerDescriptions.${partner.id}`),
    openGraph: {
      title: `${t(`partnerNames.${partner.id}`)} | ${tMeta("siteName")}`,
      description: t(`partnerDescriptions.${partner.id}`),
      images: [
        {
          url: partner.imageUrl,
          width: 1200,
          height: 630,
          alt: t(`partnerNames.${partner.id}`),
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: `${t(`partnerNames.${partner.id}`)} | ${tMeta("siteName")}`,
      description: t(`partnerDescriptions.${partner.id}`),
    },
    keywords: [
      "Medical Wellness Partner",
      "Healthcare Partnership",
      partner.subcategory || partner.category,
      "Medical Network Member",
      "Healthcare Provider",
      "Wellness Industry Partner",
      "German Medical Wellness",
      "Healthcare Collaboration",
      t(`partnerNames.${partner.id}`),
      "DMWV Partner",
    ],
  };
}

export default function PartnerDetails({ params }: { params: { id: string } }) {
  const t = useTranslations("partners");
  const partner = partners.find((p) => p.id === params.id);

  if (!partner) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-4xl min-h-screen">
      <Link
        href="/verband/partners"
        className="text-primary-600 hover:text-primary-700 mb-8 inline-flex items-center transition-colors duration-200"
      >
        <ArrowLeft className="h-4 w-4 mr-2" />
        {t("backToPartners")}
      </Link>

      <Card className="overflow-hidden border-gray-100">
        <div className="md:flex">
          <div className="md:w-1/3 p-8 flex items-center justify-center bg-gray-50">
            <Image
              src={partner.imageUrl}
              alt={t(`partnerNames.${partner.id}`)}
              width={200}
              height={200}
              objectFit="contain"
              className="max-w-full max-h-48"
            />
          </div>
          <div className="p-8 md:w-2/3">
            <CardHeader className="p-0">
              <div className="flex items-center justify-between mb-4">
                <Badge
                  variant="secondary"
                  className="text-sm bg-primary-100 text-primary-700"
                >
                  {t(`subcategories.${partner.subcategory}`) ||
                    t(`categories.${partner.category}`)}
                </Badge>
                {partner.date && (
                  <div className="text-gray-600 flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-2" />
                    {t(`partnerDates.${partner.id}`)}
                  </div>
                )}
              </div>
              <CardTitle className="text-3xl font-bold mb-2 text-gray-800">
                {t(`partnerNames.${partner.id}`)}
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <CardDescription className="text-lg leading-relaxed mt-4 text-gray-600">
                {t(`partnerDescriptions.${partner.id}`)}
              </CardDescription>
            </CardContent>
            <CardFooter className="p-0 mt-6">
              <Button
                className="w-full sm:w-auto bg-primary-600 hover:bg-primary-700 text-white"
                asChild
              >
                <a
                  href={partner.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center"
                >
                  {t("visitWebsite")}
                  <ExternalLink className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </CardFooter>
          </div>
        </div>
      </Card>
    </div>
  );
}
