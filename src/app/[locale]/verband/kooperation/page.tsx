import React from "react";
import Image from "next/image";
import { Award, Globe } from "lucide-react";
import SubHeader from "@/components/SubHeader";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function Kooperation({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("cooperation");

  return (
    <>
      <SubHeader
        title={t("title")}
        subtitle={t("subtitle")}
        backgroundImage="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        breadcrumbs={[
          { label: t("breadcrumbs.home"), href: "/" },
          { label: t("breadcrumbs.association"), href: "/verband/kooperation" },
          { label: t("breadcrumbs.cooperation"), href: "/verband/kooperation" },
        ]}
      />
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                {t("competenceNetworks.title")}
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                {t("competenceNetworks.description1")}
              </p>
              <p className="text-lg text-gray-600">
                {t("competenceNetworks.description2")}
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt={t("competenceNetworks.imageAlt")}
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 mb-16">
            <div className="flex items-center mb-6">
              <Award className="h-12 w-12 text-primary-600 mr-4" />
              <h3 className="text-2xl font-bold text-gray-900">
                {t("certification.title")}
              </h3>
            </div>
            <p className="text-lg text-gray-600 mb-6">
              {t("certification.description1")}
            </p>
            <p className="text-lg text-gray-600">
              {t("certification.description2")}
            </p>
          </div>

          <div className="flex items-center justify-center bg-primary-50 rounded-xl p-8">
            <Globe className="h-12 w-12 text-primary-600 mr-4" />
            <p className="text-xl font-semibold text-gray-900">{t("imwa")}</p>
          </div>
        </div>
      </div>
    </>
  );
}
