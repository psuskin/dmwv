import React from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import SubHeader from "@/components/SubHeader";

const expertiseAreas = [
  {
    title: "Kommunikation",
    description:
      "Professionelles Marketing und überzeugende Werbung und Öffentlichkeitsarbeit sind auch für Medical Wellness Betriebe von entscheidender Bedeutung. Heute bedarf es einer intensiven und überzeugenden Kommunikation, um Produkte und Dienstleistungen nachhaltig am Markt zu positionieren. Der DMWV bietet Ihnen hier Fullservice an.",
    image:
      "https://images.unsplash.com/photo-1557804506-669a67965ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80",
  },
  {
    title: "Netzwerk",
    description:
      "Zur Unterstützung von Unternehmen, die sich am Medical Wellness Markt positionieren, spezialisieren oder ihre Marktposition ausbauen und sichern wollen, bietet der DMWV ein umfangreiches Kompetenz-Netzwerk an. Hierzu gehört die International Medical Wellness Association und die European Medical Wellness Association. Profitieren Sie von kompetenten Teilnehmern in den Bereichen Marketing, Coaching & Consulting, Forschung & Entwicklung und Gesundheits-Dienstleistungen.",
    image:
      "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1974&q=80",
  },
  {
    title: "Thomas — Wildey — Institut e. V.",
    description:
      "Institut für Klinik- und praxisgekoppelte Grundlagenforschung. Die Motivation von adveda ist: Schul- und Komplementärmedizin zu einer partnerschaftlichen Zusammenarbeit auf Ziel- und lösungsorientierter Basis zu unterstützen. Ein ausbalanciertes Gesundheits- und Bildungssystem hilft, die anstehenden Herausforderungen prozessorientiert zu lösen. Unser Zentrum soll eine Plattform der Vernetzung sein, für Patienten, die heute teilweise mit dem großen Therapie-Angebot von Ärzten, Therapeuten und Heilpraktikern überfordert sind.",
    image:
      "https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
  {
    title: "Adveda",
    description:
      "Die Motivation von adveda ist: Schul- und Komplementärmedizin zu einer partnerschaftlichen Zusammenarbeit auf Ziel- und lösungsorientierter Basis zu unterstützen. Ein ausbalanciertes Gesundheits- und Bildungssystem hilft, die anstehenden Herausforderungen prozessorientiert zu lösen. Unser Zentrum soll eine Plattform der Vernetzung sein, für Patienten, die heute teilweise mit dem großen Therapie-Angebot von Ärzten, Therapeuten und Heilpraktikern überfordert sind.",
    image:
      "https://images.unsplash.com/photo-1631217868264-e5b90bb7e133?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1991&q=80",
  },
  {
    title: "Projekte",
    description:
      'Der DMWV entwickelt kontinuierlich neue Angebote und Dienstleistungen, um die Kompetenzen marktgerecht zu erweitern. Beispiele hierfür sind die Premiummarken "The Leading Medical Wellness Hotels & Resort" und "The Leading Medical Wellness Clinics & Spas" sowie ein Medical Wellness Shop, welcher als optimale Online-Plattform für den Vertrieb ihrer Produkte und Dienstleistungen dient.',
    image:
      "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2069&q=80",
  },
  {
    title: "Wissenschaft",
    description:
      "Unser Bildungsangebot umfasst sowohl arbeitsphysiologische als auch lernpsychologische Gesichtspunkte und bedient sich erfahrungs- und handlungsorientierten Arbeits- und Veranstaltungsformen. Sämtliche Interessen aus dem Gesundheits- und Krankheitsbereich, von betriebswirtschaftlichen Inhalten bis zur Prävention, Gesundheitsförderung und Salutogenese, Personalentwicklung und Qualitätssicherung werden berücksichtigt.",
    image:
      "https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80",
  },
];

const AreasOfExpertise = () => {
  return (
    <>
      <SubHeader
        title="Kompetenzfelder"
        subtitle="Entdecken Sie unsere vielfältigen Bereiche der Expertise"
        backgroundImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Verband", href: "/verband" },
          { label: "Kompetenzfelder", href: "/verband/kompetenzfelder" },
        ]}
      />
      <div className="min-h-screen bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-6 gap-6">
            {expertiseAreas.map((area, index) => (
              <div
                key={index}
                className={`bg-white rounded-lg overflow-hidden transition-all duration-300 hover:shadow-md ${
                  index === 0
                    ? "col-span-6 md:col-span-4"
                    : index === 1
                    ? "col-span-6 md:col-span-2"
                    : index === 2
                    ? "col-span-6 md:col-span-3"
                    : index === 3
                    ? "col-span-6 md:col-span-3"
                    : index === 4
                    ? "col-span-6 md:col-span-2"
                    : "col-span-6 md:col-span-4"
                }`}
              >
                <div
                  className={`relative ${
                    index === 0 ? "aspect-[21/9]" : "aspect-video"
                  }`}
                >
                  <Image
                    src={area.image}
                    alt={area.title}
                    layout="fill"
                    objectFit="cover"
                    className="transition-transform duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                    <h2 className="text-2xl font-bold text-white">
                      {area.title}
                    </h2>
                  </div>
                </div>
                <div className="p-6">
                  <p className="text-gray-600">{area.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-24 bg-white py-16 px-4 sm:px-6 lg:px-8 rounded-lg max-w-7xl mx-auto">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">
              Unser ganzheitlicher Ansatz
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Wir verbinden Expertise aus verschiedenen Bereichen, um innovative
              und effektive Lösungen im Medical Wellness Sektor zu schaffen.
            </p>
            <a
              href="#"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-colors duration-300"
            >
              Kontaktieren Sie uns
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default AreasOfExpertise;
