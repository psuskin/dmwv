"use client";

import React, { useState } from "react";
import { ChevronDown, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import SubHeader from "@/components/SubHeader";
import { useTranslations } from "next-intl";

const MembershipContent = () => {
  const t = useTranslations("membership");
  const [expandedId, setExpandedId] = useState<string>("privatperson");

  const membershipTypes = [
    {
      id: "privatperson",
      title: t("types.privatperson.title"),
      fee: t("types.privatperson.fee"),
    },
    {
      id: "einpersonen",
      title: t("types.einpersonen.title"),
      fee: t("types.einpersonen.fee"),
    },
    {
      id: "betrieb",
      title: t("types.betrieb.title"),
      fee: t("types.betrieb.fee"),
    },
    {
      id: "reiseveranstalter",
      title: t("types.reiseveranstalter.title"),
      fee: t("types.reiseveranstalter.fee"),
    },
    {
      id: "unternehmen",
      title: t("types.unternehmen.title"),
      fee: t("types.unternehmen.fee"),
    },
    {
      id: "verbaende",
      title: t("types.verbaende.title"),
      fee: t("types.verbaende.fee"),
    },
    {
      id: "zertifizierung",
      title: t("types.zertifizierung.title"),
      fee: t("types.zertifizierung.fee"),
    },
  ];

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? "" : id);
  };

  const renderBenefits = (typeId: string) => {
    const benefits = t.raw(`types.${typeId}.benefits`) as Record<
      string,
      string
    >;
    return Object.values(benefits).map((benefit, index) => (
      <li key={index}>{benefit}</li>
    ));
  };

  const renderServices = (typeId: string) => {
    const services = t.raw(`types.${typeId}.services`) as Record<
      string,
      string
    >;
    return Object.values(services).map((service, index) => (
      <li key={index}>{service}</li>
    ));
  };

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
            href: "/verband/mitgliedschaft",
          },
          {
            label: t("breadcrumbs.membership"),
            href: "/verband/mitgliedschaft",
          },
        ]}
      />
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex justify-end space-x-4 mb-12">
            <a
              href="/pdfs/satzung-dmwv.pdf"
              rel="noopener noreferrer"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 transition duration-150 ease-in-out"
            >
              <Download className="mr-2 h-4 w-4" />
              {t("downloads.statute")}
            </a>
            <a
              href="/pdfs/Aufnahmeantrag_DMWV.pdf"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 transition duration-150 ease-in-out"
            >
              <Download className="mr-2 h-4 w-4" />
              {t("downloads.application")}
            </a>
          </div>

          <div className="space-y-6">
            {membershipTypes.map((type) => (
              <div
                key={type.id}
                className="bg-white rounded-lg overflow-hidden"
              >
                <button
                  onClick={() => toggleExpand(type.id)}
                  className="w-full text-left px-6 py-4 flex justify-between items-center focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-opacity-50"
                >
                  <div>
                    <h2 className="text-xl font-semibold text-gray-900">
                      {type.title}
                    </h2>
                    <p className="text-sm text-gray-500 mt-1">
                      {t("annualFee")}: {type.fee}
                    </p>
                  </div>
                  <ChevronDown
                    className={`h-6 w-6 text-gray-500 transform transition-transform duration-200 ${
                      expandedId === type.id ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {expandedId === type.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 py-4 border-t border-gray-200">
                        <p className="text-sm text-gray-600 mb-4">
                          {t(`types.${type.id}.date`)}
                        </p>
                        <p className="mb-4">
                          {t(`types.${type.id}.description`)}
                        </p>
                        {type.id === "betrieb" && (
                          <>
                            <h3 className="text-lg font-semibold mb-2">
                              {t("services")}
                            </h3>
                            <p className="mb-4">
                              {t("types.betrieb.services")}
                            </p>
                          </>
                        )}
                        {type.id === "zertifizierung" ? (
                          <>
                            <h3 className="text-lg font-semibold mb-2">
                              {t("services")}
                            </h3>
                            <ul className="list-disc list-inside space-y-2 mb-4">
                              {renderServices(type.id)}
                            </ul>
                          </>
                        ) : (
                          <>
                            <h3 className="text-lg font-semibold mb-2">
                              {t("benefits")}
                            </h3>
                            <ul className="list-disc list-inside space-y-2 mb-4">
                              {renderBenefits(type.id)}
                            </ul>
                          </>
                        )}
                        {type.id === "unternehmen" && (
                          <p>{t("types.unternehmen.contact")}</p>
                        )}
                        <div className="mt-4">
                          <h3 className="text-lg font-semibold mb-2">
                            {t("convinced")}
                          </h3>
                          <p className="mb-4">{t("sendApplication")}</p>
                          <div className="flex space-x-4">
                            <Button variant="outline" size="sm" asChild>
                              <a
                                href="/pdfs/satzung-dmwv.pdf"
                                rel="noopener noreferrer"
                                className="flex items-center"
                              >
                                <Download className="mr-2 h-4 w-4" />
                                {t("downloads.statute")}
                              </a>
                            </Button>
                            <Button variant="outline" size="sm" asChild>
                              <a
                                href="/pdfs/Aufnahmeantrag_DMWV.pdf"
                                className="flex items-center"
                              >
                                <Download className="mr-2 h-4 w-4" />
                                {t("downloads.application")}
                              </a>
                            </Button>
                          </div>
                        </div>
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

export default MembershipContent;
