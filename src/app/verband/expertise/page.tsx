import React from "react";
import Image from "next/image";
import { CheckCircle, Users, Megaphone, Search } from "lucide-react";
import SubHeader from "@/components/SubHeader";

const expertiseAreas = [
  {
    icon: Users,
    title: "Orientierungshilfe und Forum",
    description:
      "Leistet Verbrauchern Orientierungshilfe in einem komplexen Markt und bietet ein Forum für Betreiber, Anbieter und Projektplaner.",
  },
  {
    icon: CheckCircle,
    title: "Qualitätsstandards",
    description:
      "Erstellt Qualitätsstandards basierend auf Forschungsergebnissen der Schulmedizin, Komplementärmedizin und Salutogenese.",
  },
  {
    icon: Megaphone,
    title: "Kommunikation und Förderung",
    description:
      "Kommuniziert mit Institutionen und fördert den Medical-Wellness-Gedanken in der Öffentlichkeit.",
  },
  {
    icon: Search,
    title: "Konsumentenforschung",
    description:
      "Betreibt Konsumentenforschung für die Mitglieder zur Gewinnung wertvoller Einblicke in Markttrends.",
  },
];

const Expertise = () => {
  return (
    <>
      <SubHeader
        title="Unsere Expertise"
        subtitle="Der Deutsche Medical Wellness Verband e.V. (DMWV) - Ihre Interessenvertretung für Medical Wellness"
        backgroundImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Verband", href: "/verband" },
          { label: "Expertise", href: "/verband/expertise" },
        ]}
      />
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
            {expertiseAreas.map((area, index) => (
              <div
                key={index}
                className="bg-gray-50 rounded-lg p-6 hover:shadow-md border transition-shadow duration-300"
              >
                <area.icon className="h-12 w-12 text-primary-600 mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {area.title}
                </h3>
                <p className="text-gray-600">{area.description}</p>
              </div>
            ))}
          </div>

          <div className="mt-16 bg-primary-50 rounded-lg p-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-6">
              Unser Engagement für Exzellenz
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <CheckCircle className="flex-shrink-0 h-6 w-6 text-primary-600 mt-1" />
                <p className="ml-3 text-base text-gray-700">
                  leistet Verbrauchern Orientierungshilfe in einem Markt, der
                  sich aufgrund seines raschen Wachstums wenig transparent
                  präsentiert und der durch die Komplexität seines Angebots den
                  Nichtmediziner leicht überfordert
                </p>
              </li>
              <li className="flex items-start">
                <CheckCircle className="flex-shrink-0 h-6 w-6 text-primary-600 mt-1" />
                <p className="ml-3 text-base text-gray-700">
                  bietet Betreibern, Anbietern und Projektplanern im
                  Medical-Wellness-Markt ein Forum zur Bündelung ihrer
                  Tätigkeiten und zur Abstimmung aktueller Ergebnisse von
                  Forschung und Lehre; dazu dienen u.a. eigene Publikationen
                  sowie Seminare und Schulungen des Verbandes
                </p>
              </li>
              <li className="flex items-start">
                <CheckCircle className="flex-shrink-0 h-6 w-6 text-primary-600 mt-1" />
                <p className="ml-3 text-base text-gray-700">
                  erstellt auf der Basis von Forschungsergebnissen der
                  Schulmedizin, der Komplementärmedizin und der Salutogenese
                  Qualitätsstandards, nach denen Medical-Wellness-Anbieter
                  zertifiziert, Produkte geprüft und Begriffe des Bereichs
                  Medical Wellness geschützt werden
                </p>
              </li>
              <li className="flex items-start">
                <CheckCircle className="flex-shrink-0 h-6 w-6 text-primary-600 mt-1" />
                <p className="ml-3 text-base text-gray-700">
                  nimmt die Kommunikation nach außen zu politischen
                  Institutionen, Behörden und Verbänden wahr
                </p>
              </li>
              <li className="flex items-start">
                <CheckCircle className="flex-shrink-0 h-6 w-6 text-primary-600 mt-1" />
                <p className="ml-3 text-base text-gray-700">
                  fördert den Medical-Wellness-Gedanken in der Öffentlichkeit
                  u.a. durch die Teilnahme in geeigneten Foren und Verbänden
                  sowie durch eigene Marketingmaßnahmen
                </p>
              </li>
              <li className="flex items-start">
                <CheckCircle className="flex-shrink-0 h-6 w-6 text-primary-600 mt-1" />
                <p className="ml-3 text-base text-gray-700">
                  betreibt Konsumentenforschung für die Mitglieder
                </p>
              </li>
            </ul>
          </div>

          <div className="mt-16 flex flex-col md:flex-row items-center justify-between bg-gray-50 rounded-lg p-8">
            <div className="md:w-1/2 mb-8 md:mb-0">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Förderung des Medical Wellness
              </h3>
              <p className="text-gray-600">
                Durch unsere Expertise und unser Engagement streben wir danach,
                den Bereich Medical Wellness voranzubringen, hohe
                Qualitätsstandards sicherzustellen und innovative Ansätze für
                Gesundheit und Wohlbefinden zu fördern.
              </p>
            </div>
            <div className="md:w-1/2 md:pl-8">
              <Image
                src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Medical Wellness"
                width={500}
                height={300}
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Expertise;
