"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Heart, Shield, Zap } from "lucide-react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

const WelcomeSection: React.FC = () => {
  const t = useTranslations("WelcomeSection");
  const locale = useLocale();

  const stats = [
    { icon: Heart, value: "10,000+", label: "statsClients" },
    { icon: Shield, value: "50+", label: "statsPartners" },
    { icon: Zap, value: "25+", label: "statsYears" },
  ];

  return (
    <section className="bg-white py-16 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden relative">
      {/* Large medical icon background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 z-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="0.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="w-3/4 h-3/4 text-primary-200"
        >
          <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Rest of the component content remains the same */}
        <div className="text-center mb-16">
          <h2 className="text-primary-600 text-lg font-semibold mb-3 tracking-wide uppercase">
            {t("subtitle")}
          </h2>
          <h3 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            {t("title")}
          </h3>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-8 rounded-full"></div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            {t("description")}
          </p>
        </div>

        {/* Stats section */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div key={index} className="p-6 text-center">
              <div className="inline-block p-3 rounded-full bg-primary-100 mb-4 shadow-2xl">
                <stat.icon className="w-8 h-8 text-primary-600" />
              </div>
              <h4 className="text-3xl font-bold text-gray-900 mb-2">
                {stat.value}
              </h4>
              <p className="text-gray-600">{t(stat.label)}</p>
            </div>
          ))}
        </div>

        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-96 rounded-3xl shadow-2xl overflow-hidden">
            <Image
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt={t("imageAlt")}
              layout="fill"
              objectFit="cover"
              className="rounded-3xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-blue-900 to-transparent opacity-60 rounded-3xl"></div>
          </div>
          <div className="space-y-8 flex flex-col">
            <h4 className="text-3xl sm:text-4xl font-bold text-gray-900 leading-tight">
              {t("philosophyTitle")}
            </h4>
            <p className="text-gray-600 text-lg leading-relaxed">
              {t("philosophyDescription")}
            </p>
            <ul className="space-y-4">
              {[
                { icon: Heart, text: "feature1" },
                { icon: Shield, text: "feature2" },
                { icon: Zap, text: "feature3" },
              ].map((feature, index) => (
                <li key={index} className="flex items-center">
                  <div className="bg-primary-100 rounded-full p-3 mr-4 shadow-md">
                    <feature.icon className="w-6 h-6 text-primary-600" />
                  </div>
                  <span className="text-gray-700 text-lg">
                    {t(feature.text)}
                  </span>
                </li>
              ))}
            </ul>
            <div className="flex justify-end mt-6">
              <Link
                href={`/${locale}/medical-wellness`}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-full text-white bg-primary-600 hover:bg-primary-700 transition duration-300 group"
                aria-label={t("learnMoreAriaLabel")}
              >
                {t("learnMore")}
                <ArrowRight
                  className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition-transform duration-300"
                  aria-hidden="true"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;