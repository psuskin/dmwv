"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, MapPin, Search } from "lucide-react";
import SubHeader from "@/components/SubHeader";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

const AllPartnersPage = () => {
  const t = useTranslations("AllWellnessHotels");
  const allHotels = [
    {
      id: "centrovital",
      name: t("AllHotels.centrovital.name"),
      location: t("AllHotels.centrovital.location"),
      description: t("AllHotels.centrovital.description"),
      image:
        "https://www.centrovital-berlin.de/fileadmin/_processed_/1/3/csm_Aussenansicht_Neuendorfer_Strasse_2_C_98af5c60c9.jpg",
      rating: 4.8,
      features: ["Spa", "Sportclub", "Ayurveda", "Pool"],
      link: "https://www.centrovital-berlin.de/",
    },
    {
      id: "ensana",
      name: t("AllHotels.ensana.name"),
      location: t("AllHotels.ensana.location"),
      description: t("AllHotels.ensana.description"),
      image:
        "https://europeanspas.eu/wp-content/uploads/2023/01/marianske-lazne-ensana-hotels.jpeg",
      rating: 4.9,
      features: [
        "Thermal Spas",
        "Medical Treatments",
        "Natural Healing",
        "Wellness Programs",
        "Health Retreats",
      ],
      link: "https://ensanahotels.com/en",
    },
    {
      id: "biohotelEggensberger",
      name: t("AllHotels.biohotelEggensberger.name"),
      location: t("AllHotels.biohotelEggensberger.location"),
      description: t("AllHotels.biohotelEggensberger.description"),
      image:
        "https://www.eggensberger.de/(cms)/media/resize/size=1920x1080%2Cscale=crop%2Cquality=70%2Cinterlace=1/2765679",
      rating: 4.8,
      features: [
        "Organic certified",
        "Medical wellness",
        "Kneipp therapy",
        "Garden SPA",
        "E-mobility",
        "Organic restaurant",
      ],
      link: "https://www.eggensberger.de/",
    },
    {
      id: "hotelElbresidenz",
      name: t("AllHotels.hotelElbresidenz.name"),
      location: t("AllHotels.hotelElbresidenz.location"),
      description: t("AllHotels.hotelElbresidenz.description"),
      image: "/images/hotel4.png",
      rating: 4.9,
      features: [
        "Toskana Therme",
        "Aurora Spa",
        "Gourmet Restaurant",
        "Wellness Park",
        "Fitness Center",
        "River View",
      ],
      link: "https://toskanaworld.net/hotels-de/hotel-bad-schandau/",
    },
    {
      id: "oceano",
      name: t("AllHotels.oceano.name"),
      location: t("AllHotels.oceano.location"),
      description: t("AllHotels.oceano.description"),
      image:
        "https://admin.oceano.de/wp-content/uploads/2024/05/oceano-health-spa-hotel-pool-3-1024x576.jpg",
      rating: 4.9,
      features: [
        "F.X. Mayr Center",
        "Infinity Pool",
        "Health Programs",
        "Ocean View Rooms",
        "Natural Swimming Pool",
        "Yoga Center",
      ],
      link: "https://oceano.de/en/",
    },
    {
      id: "rondane",
      name: t("AllHotels.rondane.name"),
      location: t("AllHotels.rondane.location"),
      description: t("AllHotels.rondane.description"),
      image:
        "https://www.rondane-fjellstue.no/wp-content/uploads/2024/07/86A0889-HDR-min.jpg",
      rating: 4.8,
      features: [
        "Mountain Location",
        "Spa & Pool",
        "Mindfulness Center",
        "Culinary Excellence",
        "Ski Facilities",
        "E-bike Rental",
      ],
      link: "https://rondane.no/",
    },
    {
      id: "hotelFlamingo",
      name: t("AllHotels.hotelFlamingo.name"),
      location: t("AllHotels.hotelFlamingo.location"),
      description: t("AllHotels.hotelFlamingo.description"),
      image:
        "https://albena.bg/image/MTQ0NzUuanBnLzk1MC82MDgvMS80Lzg1Ly8v/paradiseblue.jpg",
      rating: 4.9,
      features: [
        "Blue Flag Beach",
        "Luxury SPA",
        "Gourmet Dining",
        "Eco Resort",
        "Natural Reserve",
        "Water Sports",
      ],
      link: "https://albena.bg/en",
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");
  const locale = useLocale();

  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = Array.from(
    new Set(allHotels.flatMap((hotel) => hotel.features))
  ).sort();

  const filteredHotels = allHotels.filter((hotel) => {
    const matchesSearch =
      hotel.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hotel.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      hotel.description.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      selectedCategory === "all" || hotel.features.includes(selectedCategory);

    return matchesSearch && matchesCategory;
  });

  return (
    <div>
      <SubHeader
        title={t("title")}
        subtitle={t("subtitle")}
        backgroundImage="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        breadcrumbs={[
          { label: t("home"), href: `/` },
          { label: t("partners"), href: `/${locale}/partners` },
        ]}
      />
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 text-primary-800">
          {t("title")}
        </h1>

        <div className="mb-8 sm:mb-12">
          <div className="flex flex-col sm:flex-row gap-4 max-w-3xl mx-auto">
            <div className="relative flex-grow">
              <input
                type="text"
                placeholder={t("searchPlaceholder")}
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-3 border border-primary-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300 pl-12 text-sm sm:text-base"
              />
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-primary-400" />
            </div>
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-3 border border-primary-200 rounded-full focus:outline-none focus:ring-2 focus:ring-primary-500 transition-all duration-300 text-sm sm:text-base bg-white"
            >
              <option value="all">{t("all")}</option>
              {categories.map((category) => (
                <option key={category} value={category}>
                  {category}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredHotels.map((hotel) => (
            <div
              key={hotel.id}
              className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
            >
              <div className="relative h-64">
                <Image
                  src={hotel.image}
                  alt={hotel.name}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full px-3 py-1 flex items-center">
                  <Star className="text-yellow-400 mr-1 h-4 w-4" />
                  <span className="font-semibold text-primary-800">
                    {hotel.rating.toFixed(1)}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-bold text-primary-700 mb-2">
                  {hotel.name}
                </h2>
                <p className="flex items-center text-primary-500 mb-3">
                  <MapPin className="mr-1 h-4 w-4" /> {hotel.location}
                </p>
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {hotel.description}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {hotel.features.map((feature, index) => (
                    <span
                      key={index}
                      className="bg-primary-100 text-primary-700 text-sm px-3 py-1 rounded-full"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <button
                  className="w-full bg-primary-500 hover:bg-primary-600 text-white py-2 rounded-lg transition-colors duration-300"
                  onClick={() => window.open(hotel.link, "_blank")}
                  aria-label={`Learn more about ${hotel.name}`}
                >
                  {t("learnMore")}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AllPartnersPage;
