"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Download } from "lucide-react";
import SubHeader from "@/components/SubHeader";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ScrollArea } from "@/components/ui/scroll-area";

const Certification = () => {
  const t = useTranslations("certification");
  const [activeSection, setActiveSection] = useState<string>("benefits");

  const sections = [
    { id: "benefits", title: t("sections.benefits") },
    { id: "criteria", title: t("sections.criteria") },
    { id: "requirements", title: t("sections.requirements") },
    { id: "procedure", title: t("sections.procedure") },
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
          { label: t("home"), href: "/" },
          { label: t("certification"), href: "/zertifizierung" },
        ]}
      />

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-6 sm:py-12">
          <div className="space-y-4">
            {sections.map((section) => (
              <div key={section.id} className="bg-white rounded-lg shadow-sm">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between p-4 text-left focus:outline-none bg-white rounded-t-lg"
                >
                  <h2 className="text-xl sm:text-2xl font-semibold text-gray-800">
                    {section.title}
                  </h2>
                  <ChevronDown
                    className={`h-5 w-5 text-gray-600 transition-transform duration-300 ${
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
                      <ScrollArea className="h-[60vh] sm:h-auto">
                        <div className="p-4 border-t-2 border-primary-300">
                          {section.id === "benefits" && (
                            <div className="space-y-4">
                              <p className="text-base sm:text-lg">
                                {t("benefits.intro1")}
                              </p>
                              <p className="text-base sm:text-lg">
                                {t("benefits.intro2")}
                              </p>
                              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
                                <li>{t("benefits.list.item1")}</li>
                                <li>{t("benefits.list.item2")}</li>
                                <li>{t("benefits.list.item3")}</li>
                                <li>{t("benefits.list.item4")}</li>
                              </ul>
                              <div className="space-y-4">
                                <div className="space-y-4">
                                  <h3 className="text-lg sm:text-xl font-semibold text-gray-800">
                                    {t("benefits.downloads")}
                                  </h3>
                                  <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                    <a
                                      href="/pdfs/satzung-dmwv.pdf"
                                      rel="noopener noreferrer"
                                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 transition duration-150 ease-in-out w-full sm:w-auto"
                                    >
                                      <Download className="mr-2 h-4 w-4" />
                                      {t("benefits.statute")}
                                    </a>
                                    <a
                                      href="/pdfs/Aufnahmeantrag_DMWV.pdf"
                                      className="inline-flex items-center justify-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 transition duration-150 ease-in-out w-full sm:w-auto"
                                    >
                                      <Download className="mr-2 h-4 w-4" />
                                      {t("benefits.application")}
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          )}
                          {section.id === "criteria" && (
                            <div className="space-y-4">
                              <h3 className="text-lg sm:text-xl font-semibold">
                                {t("criteria.qm.title")}
                              </h3>
                              <p className="text-base sm:text-lg">
                                {t("criteria.qm.content")}
                              </p>
                              <h3 className="text-lg sm:text-xl font-semibold">
                                {t("criteria.specific.title")}
                              </h3>
                              <p className="text-base sm:text-lg">
                                {t("criteria.specific.content")}
                              </p>
                              <h3 className="text-lg sm:text-xl font-semibold">
                                {t("criteria.hotel.title")}
                              </h3>
                              <p className="text-base sm:text-lg">
                                {t("criteria.hotel.content")}
                              </p>
                              <ol className="list-decimal pl-5 space-y-2 text-sm sm:text-base">
                                {t
                                  .raw("criteria.hotel.list")
                                  .map((item: string, index: number) => (
                                    <li key={index}>{item}</li>
                                  ))}
                              </ol>
                              <p className="text-base sm:text-lg">
                                {t("criteria.hotel.conclusion")}
                              </p>
                              <p className="text-base sm:text-lg">
                                {t("criteria.contact.intro")}
                              </p>
                              <address className="not-italic text-sm sm:text-base">
                                {t("criteria.contact.address")}
                                <br />
                                {t("criteria.contact.street")}
                                <br />
                                {t("criteria.contact.city")}
                                <br />
                                <br />
                                {t("criteria.contact.phone")}
                                <br />
                                {t("criteria.contact.email")}
                              </address>
                              <p className="text-base sm:text-lg">
                                {t("criteria.contact.outro")}
                              </p>
                            </div>
                          )}
                          {section.id === "requirements" && (
                            <div className="space-y-4">
                              <p className="text-base sm:text-lg">
                                {t("requirements.intro")}
                              </p>
                              <h3 className="text-base sm:text-lg font-semibold">
                                {t("requirements.navigator.title")}
                              </h3>
                              <p className="text-base sm:text-lg">
                                {t("requirements.navigator.content")}
                              </p>
                              <h3 className="text-base sm:text-lg font-semibold">
                                {t("requirements.doctor.title")}
                              </h3>
                              <p className="text-base sm:text-lg">
                                {t("requirements.doctor.content1")}
                              </p>
                              <p className="text-base sm:text-lg">
                                {t("requirements.doctor.content2")}
                              </p>
                              <div className="flex justify-center">
                                <Image
                                  src="/images/Voraussetzung.jpg"
                                  width={300}
                                  height={300}
                                  alt="Requirements"
                                  className="rounded-lg"
                                />
                              </div>
                            </div>
                          )}
                          {section.id === "procedure" && (
                            <div className="space-y-4">
                              <p className="text-base sm:text-lg">
                                {t("procedure.intro")}
                              </p>
                              <p className="text-base sm:text-lg">
                                {t("procedure.categories.intro")}
                              </p>
                              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
                                {t
                                  .raw("procedure.categories.list")
                                  .map((item: string, index: number) => (
                                    <li key={index}>{item}</li>
                                  ))}
                              </ul>
                              <p className="text-base sm:text-lg">
                                {t("procedure.categories.destination")}
                              </p>
                              <p className="text-base sm:text-lg">
                                {t("procedure.process.intro")}
                              </p>
                              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-base">
                                {t
                                  .raw("procedure.process.list")
                                  .map((item: string, index: number) => (
                                    <li key={index}>{item}</li>
                                  ))}
                              </ul>
                              <p className="text-base sm:text-lg">
                                {t("procedure.basis")}
                              </p>
                              <div className="flex items-center space-x-2">
                                <Download className="flex-shrink-0 h-5 w-5 text-primary-700" />
                                <a
                                  href="/pdfs/Vorgehensweise_Zertifizierung.pdf"
                                  className="text-primary-600 hover:underline text-base sm:text-lg"
                                >
                                  {t("procedure.download")}
                                </a>
                              </div>
                            </div>
                          )}
                        </div>
                      </ScrollArea>
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

export default Certification;
