"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Star, MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";

const hotels = [
  {
    name: "Wellness Resort Sonnenberg",
    location: "Baden-Baden",
    image:
      "https://images.adsttc.com/media/images/5bd1/b78a/f197/ccd6/5300/0162/newsletter/DPA_DukeStudentWellness_14.jpg?1540470656",
    rating: 4.8,
    features: ["Spa", "Pool", "Yoga"],
  },
  {
    name: "Spa Hotel Schwarzwald",
    location: "Freiburg",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.9,
    features: ["Massage", "Sauna", "Fitness"],
  },
  {
    name: "Gesundheitszentrum Bodensee",
    location: "Konstanz",
    image:
      "https://www.hksinc.com/wp-content/uploads/2023/04/Confidential-Wellness-Center-body-scaled.jpg",
    rating: 4.7,
    features: ["Therapie", "Ernährung", "Meditation"],
  },
  {
    name: "Vitalhotel Alpenblick",
    location: "Garmisch-Partenkirchen",
    image:
      "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
    rating: 4.9,
    features: ["Bergblick", "Wandern", "Wellness"],
  },
];

const WellnessHotels: React.FC = () => {
  const [activeHotel, setActiveHotel] = useState(0);

  return (
    <section className="bg-primary-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-primary-800 mb-2">
            Unsere Vertragspartner
          </h2>
          <p className="text-lg text-primary-600">
            Exklusive Wellness Hotels für Ihre Gesundheit
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          <div className="lg:w-1/3 space-y-4">
            {hotels.map((hotel, index) => (
              <div
                key={index}
                className={`p-4 rounded-lg cursor-pointer transition-all duration-300 ${
                  activeHotel === index
                    ? "bg-primary-100 shadow-inner border border-primary-200"
                    : "bg-white hover:bg-primary-50 border border-primary-200"
                }`}
                onClick={() => setActiveHotel(index)}
              >
                <h3 className="text-lg font-semibold text-primary-800 mb-1">
                  {hotel.name}
                </h3>
                <div className="flex items-center text-primary-500 text-sm">
                  <MapPin className="w-4 h-4 mr-1" />
                  {hotel.location}
                </div>
              </div>
            ))}
          </div>

          <div className="lg:w-2/3">
            <div className="bg-white rounded-2xl overflow-hidden">
              <div className="relative h-72 sm:h-96">
                <Image
                  src={hotels[activeHotel].image}
                  alt={hotels[activeHotel].name}
                  layout="fill"
                  objectFit="cover"
                />
                <div className="absolute top-4 right-4 bg-white bg-opacity-90 rounded-full px-3 py-1 flex items-center">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span className="font-semibold">
                    {hotels[activeHotel].rating}
                  </span>
                </div>
              </div>
              <div className="p-6 sm:p-8">
                <h3 className="text-2xl sm:text-3xl font-bold text-primary-800 mb-2">
                  {hotels[activeHotel].name}
                </h3>
                <p className="text-primary-600 mb-4 text-lg">
                  {hotels[activeHotel].location}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {hotels[activeHotel].features.map((feature, index) => (
                    <span
                      key={index}
                      className="bg-primary-100 text-primary-600 px-3 py-1 rounded-full text-sm sm:text-base"
                    >
                      {feature}
                    </span>
                  ))}
                </div>
                <a
                  href="#"
                  className="group inline-flex items-center text-primary-500 hover:text-primary-00 transition-colors duration-300 text-lg"
                >
                  Mehr erfahren
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-end">
          <Link
            href="/partners"
            className="group bg-primary-500 hover:bg-primary-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300 inline-flex items-center"
          >
            Alle Partner anzeigen
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default WellnessHotels;
