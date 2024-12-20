"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  ChevronDown, 
  Download, 
  Award,
  ClipboardCheck,
  FileCheck,
  CheckCircle,
  ArrowRight
} from "lucide-react";
import SubHeader from "@/components/SubHeader";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Card } from "@/components/ui/card";

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div className="space-y-4">
    <h3 className="text-lg sm:text-xl font-semibold text-gray-800 flex items-center gap-2">
      <div className="h-1.5 w-1.5 rounded-full bg-primary-500" />
      {title}
    </h3>
    <div className="text-gray-600 leading-relaxed">{children}</div>
  </div>
);

const Certification = () => {
  const t = useTranslations("certification");
  const [activeSection, setActiveSection] = useState<string>("benefits");

  const sections = [
    { 
      id: "benefits", 
      title: t("sections.benefits"),
      icon: <Award className="w-6 h-6 text-primary-600" />,
      bgClass: "bg-blue-50"
    },
    { 
      id: "criteria", 
      title: t("sections.criteria"),
      icon: <ClipboardCheck className="w-6 h-6 text-primary-600" />,
      bgClass: "bg-green-50"
    },
    { 
      id: "requirements", 
      title: t("sections.requirements"),
      icon: <CheckCircle className="w-6 h-6 text-primary-600" />,
      bgClass: "bg-amber-50"
    },
    { 
      id: "procedure", 
      title: t("sections.procedure"),
      icon: <FileCheck className="w-6 h-6 text-primary-600" />,
      bgClass: "bg-purple-50"
    },
  ];

  const toggleSection = (id: string) => {
    setActiveSection(activeSection === id ? "" : id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <SubHeader
        title={t("title")}
        subtitle={t("subtitle")}
        backgroundImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3"
        breadcrumbs={[
          { label: t("home"), href: "/" },
          { label: t("certification"), href: "/zertifizierung" },
        ]}
      />

      <div className="container mx-auto px-4 py-12 sm:py-20">
        <div className="grid gap-6 max-w-5xl mx-auto">
          {sections.map((section) => (
            <Card
              key={section.id}
              className={`overflow-hidden border shadow-sm hover:shadow-md transition-all duration-300 ${
                activeSection === section.id ? 'ring-2 ring-primary-500/20' : ''
              }`}
            >
              <button
                onClick={() => toggleSection(section.id)}
                className={`w-full flex items-center justify-between p-6 text-left focus:outline-none rounded-lg
                  ${section.bgClass} transition-colors duration-300`}
              >
                <div className="flex items-center gap-4">
                  <div className="p-2 bg-white rounded-lg shadow-sm">
                    {section.icon}
                  </div>
                  <h2 className="text-xl font-semibold text-gray-800">
                    {section.title}
                  </h2>
                </div>
                <ChevronDown
                  className={`h-5 w-5 text-gray-400 transition-transform duration-300 ${
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
                    transition={{ duration: 0.2 }}
                  >
                    <div className="border-t border-gray-100">
                      <ScrollArea className="relative h-[500px] sm:h-[600px]" type="always">
                        <div className="p-6 space-y-8 pr-6">
                          {section.id === "benefits" && (
                            <div className="space-y-8">
                              <div className="prose max-w-none">
                                <p className="text-gray-600 leading-relaxed">
                                  {t("benefits.intro1")}
                                </p>
                                <p className="text-gray-600 leading-relaxed">
                                  {t("benefits.intro2")}
                                </p>
                              </div>

                              <div className="grid gap-4 sm:grid-cols-2">
                                {["item1", "item2", "item3", "item4"].map((item) => (
                                  <div
                                    key={item}
                                    className="flex items-start gap-3 p-4 bg-blue-50/50 rounded-lg
                                      hover:bg-blue-50 transition-colors duration-300"
                                  >
                                    <CheckCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                                    <span className="text-gray-700">
                                      {t(`benefits.list.${item}`)}
                                    </span>
                                  </div>
                                ))}
                              </div>

                              <div className="bg-gray-50 rounded-lg p-6">
                                <h3 className="text-lg font-semibold text-gray-800 mb-4 flex items-center gap-2">
                                  <Download className="w-5 h-5 text-primary-600" />
                                  {t("benefits.downloads")}
                                </h3>
                                <div className="flex flex-col sm:flex-row gap-3">
                                  {[
                                    {
                                      href: "/pdfs/satzung-dmwv.pdf",
                                      label: t("benefits.statute"),
                                    },
                                    {
                                      href: "/pdfs/Aufnahmeantrag_DMWV.pdf",
                                      label: t("benefits.application"),
                                    },
                                  ].map((download) => (
                                    <a
                                      key={download.href}
                                      href={download.href}
                                      className="group inline-flex items-center justify-center px-4 py-2 rounded-md
                                        text-sm font-medium text-white bg-primary-500 hover:bg-primary-600
                                        transition-colors"
                                    >
                                      <Download className="mr-2 h-4 w-4" />
                                      {download.label}
                                      <ArrowRight className="ml-2 h-4 w-4 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                                    </a>
                                  ))}
                                </div>
                              </div>
                            </div>
                          )}

                          {section.id === "criteria" && (
                            <div className="space-y-8">
                              <Section title={t("criteria.qm.title")}>
                                <p>{t("criteria.qm.content")}</p>
                              </Section>
                              
                              <Section title={t("criteria.specific.title")}>
                                <p>{t("criteria.specific.content")}</p>
                              </Section>
                              
                              <Section title={t("criteria.hotel.title")}>
                                <p>{t("criteria.hotel.content")}</p>
                                <ul className="mt-4 space-y-2 list-disc pl-5">
                                  {t.raw("criteria.hotel.list").map((item: string, index: number) => (
                                    <li key={index}>{item}</li>
                                  ))}
                                </ul>
                                <p className="mt-4">{t("criteria.hotel.conclusion")}</p>
                              </Section>

                              <div className="bg-green-50/50 rounded-lg p-6">
                                <h4 className="font-semibold mb-4">{t("criteria.contact.intro")}</h4>
                                <address className="not-italic space-y-1 text-gray-600">
                                  {t("criteria.contact.address")}<br />
                                  {t("criteria.contact.street")}<br />
                                  {t("criteria.contact.city")}<br /><br />
                                  {t("criteria.contact.phone")}<br />
                                  {t("criteria.contact.email")}
                                </address>
                                <p className="mt-4">{t("criteria.contact.outro")}</p>
                              </div>
                            </div>
                          )}

                          {section.id === "requirements" && (
                            <div className="space-y-8">
                              <div className="prose max-w-none">
                                <p>{t("requirements.intro")}</p>
                              </div>

                              <Section title={t("requirements.navigator.title")}>
                                <p>{t("requirements.navigator.content")}</p>
                              </Section>

                              <Section title={t("requirements.doctor.title")}>
                                <p>{t("requirements.doctor.content1")}</p>
                                <p className="mt-4">{t("requirements.doctor.content2")}</p>
                              </Section>

                              <div className="flex justify-center">
                                <Image
                                  src="/images/Voraussetzung.jpg"
                                  width={300}
                                  height={300}
                                  alt="Requirements"
                                  className="rounded-lg shadow-md"
                                />
                              </div>
                            </div>
                          )}

                          {section.id === "procedure" && (
                            <div className="space-y-8">
                              <div className="prose max-w-none">
                                <p>{t("procedure.intro")}</p>
                                <p className="mt-4">{t("procedure.categories.intro")}</p>
                              </div>

                              <div className="bg-purple-50/50 rounded-lg p-6">
                                <ul className="space-y-3">
                                  {t.raw("procedure.categories.list").map((item: string, index: number) => (
                                    <li key={index} className="flex items-start gap-3">
                                      <CheckCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <p>{t("procedure.categories.destination")}</p>
                              <p>{t("procedure.process.intro")}</p>

                              <div className="bg-purple-50/50 rounded-lg p-6">
                                <ul className="space-y-3">
                                  {t.raw("procedure.process.list").map((item: string, index: number) => (
                                    <li key={index} className="flex items-start gap-3">
                                      <CheckCircle className="w-5 h-5 text-primary-600 mt-1 flex-shrink-0" />
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              </div>

                              <p>{t("procedure.basis")}</p>

                              <a
                                href="/pdfs/Vorgehensweise_Zertifizierung.pdf"
                                className="group inline-flex items-center text-primary-600 hover:text-primary-700"
                              >
                                <Download className="mr-2 h-5 w-5" />
                                {t("procedure.download")}
                                <ArrowRight className="ml-2 h-5 w-5 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all" />
                              </a>
                            </div>
                          )}
                        </div>
                      </ScrollArea>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Certification;
