"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const WelcomeSection: React.FC = () => {
  return (
    <section className="bg-white py-12 sm:py-24 px-4 sm:px-6 lg:px-8 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-primary-600 text-base sm:text-lg font-semibold mb-3 tracking-wide uppercase">
            Willkommen beim
          </h2>
          <h3 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary-800 mb-6 leading-tight">
            Deutscher Medical Wellness Verband
          </h3>
          <div className="w-24 h-1 bg-primary-500 mx-auto mb-6 sm:mb-8 rounded-full"></div>
          <p className="text-base sm:text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Beim Deutschen Medical Wellness Verband sind wir stolz darauf, Ihnen
            die besten Dienstleistungen für Ihre Gesundheit und Ihr Wohlbefinden
            anbieten zu können. Unser Team von Fachleuten widmet sich der Pflege
            und dem Wohlbefinden unserer Kunden mit maßgeschneiderten Lösungen.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="relative h-64 sm:h-96 rounded-2xl">
            <Image
              src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
              alt="Wellness treatment"
              layout="fill"
              objectFit="cover"
              className="rounded-2xl"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary-900 to-transparent opacity-60 rounded-2xl"></div>
          </div>
          <div className="space-y-6 sm:space-y-8">
            <h4 className="text-2xl sm:text-3xl font-semibold text-primary-800 leading-tight">
              Unsere Philosophie
            </h4>
            <p className="text-gray-700 leading-relaxed">
              Wir glauben an einen ganzheitlichen Ansatz zur Gesundheit und zum
              Wohlbefinden. Unsere Dienstleistungen kombinieren traditionelle
              Weisheit mit modernster medizinischer Technologie, um Ihnen die
              bestmögliche Pflege zu bieten.
            </p>
            <ul className="space-y-3 sm:space-y-4 text-gray-700">
              {[
                "Personalisierte Behandlungspläne",
                "Hochqualifizierte Fachkräfte",
                "Modernste Einrichtungen",
              ].map((item, index) => (
                <li key={index} className="flex items-center">
                  <div className="bg-primary-100 rounded-full p-2 mr-4">
                    <svg
                      className="w-6 h-6 text-primary-600"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              href="/medical-wellness"
              className="inline-flex items-center text-primary-600 font-semibold hover:text-primary-700 transition-colors duration-200"
            >
              Mehr erfahren
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WelcomeSection;
