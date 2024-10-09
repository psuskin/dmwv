import React from "react";
import Image from "next/image";
import { CheckCircle, Users, Megaphone, Search } from "lucide-react";
import SubHeader from "@/components/SubHeader";
import { useTranslations } from "next-intl";
import { unstable_setRequestLocale } from "next-intl/server";

export default function ExpertisePage({
  params: { locale },
}: {
  params: { locale: string };
}) {
  unstable_setRequestLocale(locale);
  const t = useTranslations("expertise");

  const expertiseAreas = [
    {
      icon: Users,
      title: t("areas.orientation.title"),
      description: t("areas.orientation.description"),
    },
    {
      icon: CheckCircle,
      title: t("areas.standards.title"),
      description: t("areas.standards.description"),
    },
    {
      icon: Megaphone,
      title: t("areas.communication.title"),
      description: t("areas.communication.description"),
    },
    {
      icon: Search,
      title: t("areas.research.title"),
      description: t("areas.research.description"),
    },
  ];

  const commitmentList = t.raw("commitment.list") as Record<string, string>;

  return (
    <>
      <SubHeader
        title={t("title")}
        subtitle={t("subtitle")}
        backgroundImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        breadcrumbs={[
          { label: t("breadcrumbs.home"), href: "/" },
          { label: t("breadcrumbs.association"), href: "/verband/expertise" },
          { label: t("breadcrumbs.expertise"), href: "/verband/expertise" },
        ]}
      />
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {expertiseAreas.map((area, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-md border transition-shadow duration-300"
              >
                <area.icon className="h-12 w-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {area.title}
                </h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-primary-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              {t("commitment.title")}
            </h3>
            <ul className="space-y-4">
              {Object.entries(commitmentList).map(([key, item]) => (
                <li key={key} className="flex items-start">
                  <CheckCircle className="flex-shrink-0 h-6 w-6 text-primary-600 mt-1" />
                  <p className="ml-3 text-base text-gray-700">{item}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-16 flex flex-col md:flex-row items-center justify-between bg-gray-50 rounded-lg p-8">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {t("promotion.title")}
              </h3>
              <p className="text-gray-600">{t("promotion.description")}</p>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <Image
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Medical Wellness"
                width={500}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
