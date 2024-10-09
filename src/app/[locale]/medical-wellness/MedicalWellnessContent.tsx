"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";
import SubHeader from "@/components/SubHeader";
import Image from "next/image";
import { useTranslations } from "next-intl";

const MedicalWellnessContent = () => {
  const t = useTranslations("medicalWellness");
  const [activeSection, setActiveSection] = useState<string>("begriff");

  const sections = [
    { id: "begriff", title: t("sections.begriff.title") },
    { id: "kernbereiche", title: t("sections.kernbereiche.title") },
    { id: "markt", title: t("sections.markt.title") },
    { id: "gesundheitskarte", title: t("sections.gesundheitskarte.title") },
    { id: "hotels", title: t("sections.hotels.title") },
    { id: "clinics", title: t("sections.clinics.title") },
  ];

  const toggleSection = (id: string) => {
    setActiveSection(activeSection === id ? "" : id);
  };

  return (
    <>
      <SubHeader
        title={t("title")}
        subtitle={t("subtitle")}
        backgroundImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        breadcrumbs={[
          { label: t("breadcrumbs.home"), href: "/" },
          {
            label: t("breadcrumbs.medicalWellness"),
            href: "/medical-wellness",
          },
        ]}
      />

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="space-y-4">
            {sections.map((section) => (
              <div key={section.id} className="bg-white rounded-lg">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between p-4 text-left focus:outline-none bg-white rounded-t-lg"
                >
                  <h2 className="text-xl font-semibold text-gray-800">
                    {section.title}
                  </h2>
                  <ChevronDown
                    className={`h-6 w-6 text-gray-600 transition-transform duration-300 ${
                      activeSection === section.id ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {activeSection === section.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 border-t-2 border-primary-300">
                        {section.id === "begriff" && (
                          <div className="space-y-4">
                            <p>{t("sections.begriff.intro")}</p>
                            <h3 className="text-lg font-semibold">
                              {t("sections.begriff.currentDefinition")}
                            </h3>
                            <blockquote className="border-l-4 border-primary-500 pl-4 italic">
                              {t("sections.begriff.definitionText")}
                            </blockquote>
                            <p>{t("sections.begriff.supportedBy")}</p>
                            <h3 className="text-lg font-semibold">
                              {t("sections.begriff.eschTitle")}
                            </h3>
                            <p>{t("sections.begriff.eschText")}</p>
                          </div>
                        )}

                        {section.id === "kernbereiche" && (
                          <div className="space-y-4">
                            <p>{t("sections.kernbereiche.intro")}</p>
                            <h3 className="text-lg font-semibold">
                              {t("sections.kernbereiche.navigator")}
                            </h3>
                            <p>{t("sections.kernbereiche.diagnosticsText")}</p>
                            <Image
                              src="/images/kern.gif"
                              width={500}
                              height={500}
                              alt="kern"
                            />
                          </div>
                        )}

                        {section.id === "markt" && (
                          <div className="space-y-4">
                            <p>{t("sections.markt.gkvInfo")}</p>
                            <p>{t("sections.markt.marketGrowth1")}</p>
                            <p>{t("sections.markt.marketGrowth2")}</p>
                            <p>{t("sections.markt.marketGrowth3")}</p>
                            <p>{t("sections.markt.marketGrowth4")}</p>
                          </div>
                        )}

                        {section.id === "gesundheitskarte" && (
                          <div className="space-y-4">
                            <h3 className="text-lg font-semibold">
                              {t("sections.gesundheitskarte.subtitle")}
                            </h3>
                            <p className="text-xl font-semibold text-primary-600">
                              {t("sections.gesundheitskarte.priceTag")}
                            </p>
                            <p>{t("sections.gesundheitskarte.description1")}</p>
                            <p>{t("sections.gesundheitskarte.description2")}</p>
                            <p>{t("sections.gesundheitskarte.description3")}</p>
                          </div>
                        )}
                        {section.id === "hotels" && (
                          <div className="space-y-4">
                            <Image
                              src="/images/imhr.jpg"
                              width={500}
                              height={500}
                              alt="hotels"
                            />
                            <h3 className="text-lg font-semibold">
                              {t("sections.hotels.subtitle")}
                            </h3>
                            <p>{t("sections.hotels.description")}</p>
                            <p>{t("sections.hotels.description2")}</p>
                            <p>{t("sections.hotels.description3")}</p>
                            <a
                              href="https://www.leading-medical-target="
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-primary-600 hover:underline"
                            >
                              The Leading Medical Wellness Hotels & Resorts
                              <ExternalLink className="ml-1 h-4 w-4" />
                            </a>
                          </div>
                        )}

                        {section.id === "clinics" && (
                          <div className="space-y-4">
                            <Image
                              src="/images/lmwc.jpg"
                              width={500}
                              height={500}
                              alt="clinics"
                            />
                            <h3 className="text-lg font-semibold">
                              {t("sections.clinics.subtitle")}
                            </h3>
                            <p>{t("sections.clinics.description1")}</p>
                            <p>{t("sections.clinics.description2")}</p>
                            <p>{t("sections.clinics.description3")}</p>
                          </div>
                        )}
                        <a
                          href="https://www.leading-medical-wellness.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center text-primary-600 hover:underline mt-3"
                        >
                          The Leading Medical Wellness Clinics & Spas
                          <ExternalLink className="ml-1 h-4 w-4" />
                        </a>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MedicalWellnessContent;
