import React from "react";
import Image from "next/image";
import { Award, Globe } from "lucide-react";
import SubHeader from "@/components/SubHeader";

const Kooperation = () => {
  return (
    <>
      <SubHeader
        title="Kooperation"
        subtitle="Unsere Partnerschaften und Netzwerke für Medical Wellness"
        backgroundImage="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Verband", href: "/verband" },
          { label: "Kooperation", href: "/verband/kooperation" },
        ]}
      />
      <div className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                Die Kompetenz-Netzwerke
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Zur Absicherung der Marke „Medical Wellness&quot; wird der
                Verband die Ergebnisse von Grundlagenarbeit zum Thema
                systematisch bündeln, um eine klare, nachhaltige Definition der
                Marke zu gewährleisten. Über geeignete Kompetenz Netzwerke wird
                die Einbindung externer Fachbereiche sichergestellt.
              </p>
              <p className="text-lg text-gray-600">
                Ähnliches erreicht der Verband durch Mitgliedschaften in
                ausgesuchten Gremien und Foren. Das trifft insbesondere auf die
                von der Bundesregierung beabsichtigte Stärkung des Bereichs
                Prävention zu.
              </p>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                alt="Kompetenz-Netzwerke"
                layout="fill"
                objectFit="cover"
              />
            </div>
          </div>

          <div className="bg-gray-50 rounded-xl p-8 mb-16">
            <div className="flex items-center mb-6">
              <Award className="h-12 w-12 text-primary-600 mr-4" />
              <h3 className="text-2xl font-bold text-gray-900">
                Zertifizierung und Reputation
              </h3>
            </div>
            <p className="text-lg text-gray-600 mb-6">
              Es wird angestrebt, für den Verband eine Reputation zu erreichen,
              die die Auszeichnung &quot;Zertifiziert/geprüft durch den
              DMWV&quot; zu einer allseits respektierten Markenauszeichnung
              macht.
            </p>
            <p className="text-lg text-gray-600">
              Dazu wurde eine Kooperation mit TÜV Rheinland Group für die
              Zertifizierung von Medical-Wellness-Anbietern vereinbart. Bei den
              nach der Deutschen Hotelklassifizierung des DEHOGA (Deutscher
              Hotel- und Gaststättenverband) klassifizierten Betrieben übernimmt
              der DMWV die Einstufung. Er kann daher auf eine eigene Prüfung
              dieses Betriebes in den von der Deutschen Hotelklassifizierung
              abgedeckten Bereichen verzichten.
            </p>
          </div>

          <div className="flex items-center justify-center bg-primary-50 rounded-xl p-8">
            <Globe className="h-12 w-12 text-primary-600 mr-4" />
            <p className="text-xl font-semibold text-gray-900">
              Der DMWV ist Mitglied der International Medical Wellness
              Association (IMWA).
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Kooperation;
