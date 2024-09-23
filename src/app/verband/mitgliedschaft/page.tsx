"use client";

import React, { useState } from "react";
import { ChevronDown, Download } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import SubHeader from "@/components/SubHeader";

const membershipTypes = [
  {
    id: "privatperson",
    title: "Fördermitgliedschaft Privatperson",
    fee: "250,- Euro",
  },
  {
    id: "einpersonen",
    title: "Berufsbezogene Einpersonen-Fördermitgliedschaft",
    fee: "900,- Euro",
  },
  {
    id: "betrieb",
    title: "Fördermitgliedschaft Medical-Wellness-Betrieb, Spa",
    fee: "1.200,- Euro",
  },
  {
    id: "reiseveranstalter",
    title: "Fördermitgliedschaft für Reiseveranstalter",
    fee: "1.500,- Euro",
  },
  {
    id: "unternehmen",
    title:
      "Fördermitgliedschaft produzierendes Unternehmen & Beratungsunternehmen",
    fee: "auf Anfrage",
  },
  {
    id: "verbaende",
    title: "Fördermitgliedschaften für Verbände, Hochschulen",
    fee: "1.290,- Euro",
  },
  {
    id: "zertifizierung",
    title: "Mitgliedschaft mit Zertifizierung",
    fee: "Siehe Details",
  },
];

const Mitgliedschaft = () => {
  const [expandedId, setExpandedId] = useState<string>("privatperson");

  const toggleExpand = (id: string) => {
    setExpandedId(expandedId === id ? "" : id);
  };

  return (
    <>
      <SubHeader
        title="Mitgliedschaft"
        subtitle="Entdecken Sie die Vorteile einer Mitgliedschaft im DMWV"
        backgroundImage="https://images.unsplash.com/photo-1576091160550-2173dba999ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Verband", href: "/verband/mitgliedschaft" },
          { label: "Mitgliedschaft", href: "/verband/mitgliedschaft" },
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
              Satzung DMWV (PDF)
            </a>
            <a
              href="/pdfs/Aufnahmeantrag_DMWV.pdf"
              className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 transition duration-150 ease-in-out"
            >
              <Download className="mr-2 h-4 w-4" />
              Aufnahmeantrag DMWV (PDF)
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
                      Jahresbeitrag: {type.fee}
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
                        {type.id === "privatperson" && (
                          <>
                            <p className="text-sm text-gray-600 mb-4">
                              26. Feb. 2019
                            </p>
                            <p className="mb-4">
                              Jede Privatperson, die sich grundsätzlich mit den
                              Prinzipien und ideellen Werten des Verbandes
                              verbunden fühlt und fortlaufend aus erster Hand
                              über das Thema Medical Wellness informiert werden
                              möchte, kann Fördermitglied werden. Damit
                              profitiert das Mitglied von den definierten
                              Vorteilen der Mitgliedschaft.
                            </p>
                            <h3 className="text-lg font-semibold mb-2">
                              Vorteile
                            </h3>
                            <ul className="list-disc list-inside space-y-2 mb-4">
                              <li>
                                Sicherheit bei der Auswahl von Medical Wellness
                                Produkten oder Dienstleistungen
                              </li>
                              <li>
                                Vergünstigungen bei Dienstleistungen und
                                Produkten unserer Mitglieder
                              </li>
                              <li>
                                Professionelle, medizinische Einzelberatung
                              </li>
                              <li>Erstellung eines persönlichen Profils</li>
                              <li>
                                Teilnahme an Projekten, Veranstaltungen und
                                Schulungen des Verbandes
                              </li>
                            </ul>
                          </>
                        )}
                        {type.id === "einpersonen" && (
                          <>
                            <p className="text-sm text-gray-600 mb-4">
                              26. Feb. 2019
                            </p>
                            <p className="mb-4">
                              Die berufsbezogene
                              Einpersonen-Fördermitgliedschaft steht
                              grundsätzlich jedem offen, der im Bereich der
                              Medizin tätig ist.
                            </p>
                            <h3 className="text-lg font-semibold mb-2">
                              Vorteile
                            </h3>
                            <ul className="list-disc list-inside space-y-2 mb-4">
                              <li>
                                Stärkung der Marktposition durch Auftritt unter
                                einer professionellen Dachmarke
                              </li>
                              <li>Profilierung im Medical Wellness Markt</li>
                              <li>
                                Vermittlung von Qualität und Glaubwürdigkeit
                              </li>
                              <li>
                                Regelmäßiger Newsletter zu aktuellen
                                Entwicklungen
                              </li>
                              <li>
                                Integration in die Marketingmaßnahmen des
                                Verbandes
                              </li>
                            </ul>
                          </>
                        )}
                        {type.id === "betrieb" && (
                          <>
                            <p className="text-sm text-gray-600 mb-4">
                              26. Feb. 2019
                            </p>
                            <p className="mb-4">
                              Medical-Wellness-Betriebe, die Medical Wellness im
                              Sinne des Verbandes anbieten, haben die
                              Möglichkeit, Fördermitglied des Verbandes zu
                              werden.
                            </p>
                            <h3 className="text-lg font-semibold mb-2">
                              Leistungen
                            </h3>
                            <p className="mb-4">
                              Die Fördermitgliedschaft dient als Einstieg zu
                              einer späteren Zertifizierung. Bei Teilnahme am
                              Zertifizierungsverfahren werden alle notwendigen
                              Unterlagen zur Verfügung gestellt.
                            </p>
                            <h3 className="text-lg font-semibold mb-2">
                              Vorteile
                            </h3>
                            <ul className="list-disc list-inside space-y-2 mb-4">
                              <li>Stärkung der Marktposition</li>
                              <li>Profilierung im Medical Wellness Markt</li>
                              <li>
                                Vermittlung von Qualität und Glaubwürdigkeit
                              </li>
                              <li>Regelmäßiger Newsletter</li>
                              <li>
                                Integration in Marketingmaßnahmen des Verbandes
                              </li>
                            </ul>
                          </>
                        )}
                        {type.id === "reiseveranstalter" && (
                          <>
                            <p className="text-sm text-gray-600 mb-4">
                              4. Mai. 2011
                            </p>
                            <h3 className="text-lg font-semibold mb-2">
                              Vorteile
                            </h3>
                            <ul className="list-disc list-inside space-y-2 mb-4">
                              <li>Stärkung der Marktposition</li>
                              <li>Profilierung im Medical Wellness Markt</li>
                              <li>
                                Vermittlung von Qualität und Glaubwürdigkeit
                              </li>
                              <li>Zugang zum Medical Wellness Netzwerk</li>
                              <li>Regelmäßiger Newsletter</li>
                              <li>
                                Integration in Marketingmaßnahmen des Verbandes
                              </li>
                            </ul>
                          </>
                        )}
                        {type.id === "unternehmen" && (
                          <>
                            <p className="text-sm text-gray-600 mb-4">
                              26. Feb. 2019
                            </p>
                            <p className="mb-4">
                              Für produzierende Unternehmen im Medical Wellness
                              Bereich und Beratungsunternehmen.
                            </p>
                            <h3 className="text-lg font-semibold mb-2">
                              Vorteile
                            </h3>
                            <ul className="list-disc list-inside space-y-2 mb-4">
                              <li>Stärkung der Marktposition</li>
                              <li>Profilierung im Medical Wellness Markt</li>
                              <li>
                                Vermittlung von Qualität und Glaubwürdigkeit
                              </li>
                              <li>Regelmäßiger Newsletter</li>
                              <li>
                                Integration in Marketingmaßnahmen des Verbandes
                              </li>
                            </ul>
                            <p>
                              Bitte telefonisch melden unter: +49 (0) 30 81873
                              310
                            </p>
                          </>
                        )}
                        {type.id === "verbaende" && (
                          <>
                            <p className="text-sm text-gray-600 mb-4">
                              26. Feb. 2019
                            </p>
                            <p className="mb-4">
                              Für Verbände bzw. Hochschulen, die Medical
                              Wellness im Sinne des Verbandes unterstützen.
                            </p>
                            <h3 className="text-lg font-semibold mb-2">
                              Vorteile
                            </h3>
                            <ul className="list-disc list-inside space-y-2 mb-4">
                              <li>Stärkung der Marktposition</li>
                              <li>Profilierung im Medical Wellness Markt</li>
                              <li>
                                Vermittlung von Qualität und Glaubwürdigkeit
                              </li>
                              <li>Zugang zum Medical Wellness Netzwerk</li>
                              <li>Regelmäßiger Newsletter</li>
                              <li>
                                Integration in Marketingmaßnahmen des Verbandes
                              </li>
                            </ul>
                          </>
                        )}
                        {type.id === "zertifizierung" && (
                          <>
                            <p className="text-sm text-gray-600 mb-4">
                              26. Feb. 2019
                            </p>
                            <p className="mb-4">
                              Zertifizierte Medical Wellness Betriebe firmieren
                              unter dem Logo &quot;Empfohlen vom DMWV&quot; in
                              allen Kommunikations- und Marketingmaßnahmen des
                              Verbandes.
                            </p>
                            <h3 className="text-lg font-semibold mb-2">
                              Leistungen
                            </h3>
                            <ul className="list-disc list-inside space-y-2 mb-4">
                              <li>
                                Verwendung des geschützten Logos für
                                zertifizierte Mitglieder
                              </li>
                              <li>
                                Profilierung durch Erhalt und Aushang der
                                Plakette
                              </li>
                              <li>Kompetente Betriebsberatung und Schulung</li>
                              <li>
                                Vergünstigungen bei Schulungen und
                                Weiterbildungen
                              </li>
                              <li>Exklusive Internetpräsenz</li>
                              <li>Regelmäßiger Newsletter</li>
                              <li>Teilnahme an Cross-Marketing-Aktionen</li>
                              <li>Exklusives Networking</li>
                              <li>
                                Integration in exklusive Marketingmaßnahmen
                              </li>
                            </ul>
                          </>
                        )}
                        <div className="mt-4">
                          <h3 className="text-lg font-semibold mb-2">
                            Haben wir Sie überzeugt?
                          </h3>
                          <p className="mb-4">
                            Dann senden Sie uns den Aufnahmeantrag für eine
                            Fördermitgliedschaft im DMWV e.V. gerne per Fax oder
                            auch als E‑Mail.
                          </p>
                          <div className="flex space-x-4">
                            <Button variant="outline" size="sm" asChild>
                              <a
                                href="/pdfs/satzung-dmwv.pdf"
                                rel="noopener noreferrer"
                                className="flex items-center"
                              >
                                <Download className="mr-2 h-4 w-4" />
                                Satzung DMWV (PDF)
                              </a>
                            </Button>
                            <Button variant="outline" size="sm" asChild>
                              <a
                                href="/pdfs/Aufnahmeantrag_DMWV.pdf"
                                className="flex items-center"
                              >
                                <Download className="mr-2 h-4 w-4" />
                                Aufnahmeantrag DMWV (PDF)
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

export default Mitgliedschaft;
