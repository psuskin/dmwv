"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import { useLocale, useTranslations } from "next-intl";

const WellnessHotels: React.FC = () => {
  const [activeHotel, setActiveHotel] = useState(0);
  const t = useTranslations("WellnessHotels");
  const locale = useLocale();

  const hotels = [
    {
      name: t("hotels.centrovital.name"),
      location: t("hotels.centrovital.location"),
      image:
        "https://www.centrovital-berlin.de/fileadmin/_processed_/1/3/csm_Aussenansicht_Neuendorfer_Strasse_2_C_98af5c60c9.jpg",
      rating: 4.8,
      features: [
        t("features.spa"),
        t("features.sportClub"),
        t("features.yoga"),
      ],
    },
    {
      name: t("hotels.ensana.name"),
      location: t("hotels.ensana.location"),
      image:
        "https://europeanspas.eu/wp-content/uploads/2023/01/marianske-lazne-ensana-hotels.jpeg",
      rating: 4.9,
      features: [
        t("features.medicalTreatments"),
        t("features.naturalHealing"),
        t("features.wellnessPrograms"),
        t("features.healthRetreats"),
      ],
    },
    {
      name: t("hotels.biohotelEggensberger.name"),
      location: t("hotels.biohotelEggensberger.location"),
      image:
        "https://www.eggensberger.de/(cms)/media/resize/size=1920x1080%2Cscale=crop%2Cquality=70%2Cinterlace=1/2765679",
      rating: 4.7,
      features: [
        t("features.organicCertified"),
        t("features.medicalTreatments"),
        t("features.naturalHealing"),
        t("features.wellnessPrograms"),
        t("features.healthRetreats"),
      ],
    },
    {
      name: t("hotels.hotelElbresidenz.name"),
      location: t("hotels.hotelElbresidenz.location"),
      image: "/images/hotel4.png",
      rating: 4.9,
      features: [
        t("features.thermalSpa"),
        t("features.medicalTreatments"),
        t("features.naturalHealing"),
        t("features.wellnessPrograms"),
        t("features.healthRetreats"),
      ],
    },
  ];

  return (
    <section
      className="bg-primary-50 py-16 px-4 sm:px-6 lg:px-8 relative"
      aria-labelledby="wellness-hotels-title"
    >
      {/* Medical-themed background pattern */}
      <div className="absolute inset-0 z-0 opacity-[0.015]">
        <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%">
          <defs>
            <pattern
              id="medical-pattern"
              x="0"
              y="0"
              width="40"
              height="40"
              patternUnits="userSpaceOnUse"
            >
              <path d="M20 0v40M0 20h40" stroke="#000" strokeWidth="1" />
              <circle cx="20" cy="20" r="8" fill="#000" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#medical-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-12">
          <h2 className="text-primary-600 text-lg sm:text-xl lg:text-2xl font-semibold mb-3 tracking-wide uppercase">
            {t("exclusiveExperiences")}
          </h2>
          <h3
            id="wellness-hotels-title"
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-primary-800 mb-6 leading-tight"
          >
            {t("ourPartners")}
          </h3>
          <div
            className="w-24 h-1 bg-primary-500 mx-auto mb-6 sm:mb-8 rounded-full"
            aria-hidden="true"
          ></div>
          <p className="text-lg sm:text-xl lg:text-2xl text-primary-600 max-w-3xl mx-auto">
            {t("discoverHotels")}
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3 space-y-4">
            {hotels.map((hotel, index) => (
              <button
                key={index}
                className={`p-4 rounded-lg cursor-pointer transition-all duration-300 w-full text-left ${
                  activeHotel === index
                    ? "bg-primary-600 shadow-inner border border-primary-200 text-white"
                    : "bg-white hover:bg-primary-50 border border-primary-200 text-primary-800"
                }`}
                onClick={() => setActiveHotel(index)}
                aria-pressed={activeHotel === index}
              >
                <h4
                  className={`text-xl font-semibold mb-1 ${
                    activeHotel === index ? "text-white" : "text-primary-800"
                  }`}
                >
                  {hotel.name}
                </h4>
                <div
                  className={`flex items-center text-lg ${
                    activeHotel === index ? "text-white" : "text-primary-600"
                  }`}
                >
                  <MapPin className="w-5 h-5 mr-1" aria-hidden="true" />
                  {hotel.location}
                </div>
              </button>
            ))}
          </div>

          <div className="lg:w-2/3">
            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="relative h-72 sm:h-96">
                <Image
                  src={hotels[activeHotel].image}
                  alt={`Bild von ${hotels[activeHotel].name}`}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full px-3 py-1 flex items-center">
                  <Star
                    className="w-5 h-5 text-yellow-400 mr-1"
                    aria-hidden="true"
                  />
                  <span className="font-semibold text-lg">
                    {hotels[activeHotel].rating}
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <h4 className="text-2xl sm:text-3xl font-bold text-primary-800 mb-2">
                  {hotels[activeHotel].name}
                </h4>
                <p className="text-primary-600 mb-4 text-xl">
                  {hotels[activeHotel].location}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {hotels[activeHotel].features.map((feature, index) => (
                    <span
                      key={index}
                      className="bg-primary-500 text-white px-3 py-1 rounded-full text-lg"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-end">
          <Link
            href={`/${locale}/wellness-partners`}
            className="group bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300 inline-flex items-center text-lg"
            aria-label={t("viewAllPartnersAriaLabel")}
          >
            {t("viewAllPartners")}
            <ArrowRight
              className="ml-2 h-6 w-6 transition-transform duration-300 group-hover:translate-x-1"
              aria-hidden="true"
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WellnessHotels;
