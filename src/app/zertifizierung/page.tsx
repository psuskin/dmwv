"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Download } from "lucide-react";
import SubHeader from "@/components/SubHeader";
import Image from "next/image";

const sections = [
  { id: "vorteile", title: "Vorteile durch Zertifizierung" },
  { id: "kriterien", title: "Kriterien zur Zertifizierung" },
  { id: "voraussetzungen", title: "Voraussezungen für die Zeritifizierung" },
  { id: "vorgehensweise", title: "Vorgehensweise" },
];

const Certification = () => {
  const [activeSection, setActiveSection] = useState<string>("vorteile");

  const toggleSection = (id: string) => {
    setActiveSection(activeSection === id ? "" : id);
  };

  return (
    <>
      <SubHeader
        title="Zertifizierung"
        subtitle="Entdecken Sie die Vorteile der Zertifizierung für Ihren Medical Wellness Betrieb"
        backgroundImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Zertifizierung", href: "/zertifizierung" },
        ]}
      />

      <div className="min-h-screen bg-gray-50">
        <div className="container mx-auto px-4 py-12">
          <div className="space-y-4">
            {sections.map((section) => (
              <div key={section.id} className="bg-white rounded-lg">
                <button
                  onClick={() => toggleSection(section.id)}
                  className="w-full flex items-center justify-between p-4 text-left focus:outline-none bg-white rounded-t-lg"
                >
                  <h2 className="text-xl font-semibold text-gray-800">
                    {section.title}
                  </h2>
                  <ChevronDown
                    className={`h-6 w-6 text-gray-600 transition-transform duration-300 ${
                      activeSection === section.id ? "transform rotate-180" : ""
                    }`}
                  />
                </button>
                <AnimatePresence>
                  {activeSection === section.id && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="p-4 border-t-2 border-primary-300">
                        {section.id === "vorteile" && (
                          <div className="space-y-6">
                            <div className="space-y-4">
                              <p>
                                Zertifizierte Medical Wellness Betriebe
                                firmieren unter dem Logo von TÜV Rheinland Group
                                in allen Kommunikations- und Marketingmaßnahmen
                                des Verbandes.
                              </p>
                              <p>
                                Der Deutsche Medical Wellness Verband e.V.
                                (DMWV) versteht sich als die
                                Interessenvertretung für Medical Wellness.
                              </p>
                              <ul className="list-disc pl-5 space-y-2">
                                <li>
                                  leistet Verbrauchern Orientierungshilfe in
                                  einem Markt, der sich aufgrund seines raschen
                                  Wachstums wenig transparent präsentiert und
                                  der durch die Komplexität seines Angebots den
                                  Nichtmediziner leicht überfordert
                                </li>
                                <li>
                                  bietet Betreibern, Anbietern und
                                  Projektplanern im Medical-Wellness-Markt ein
                                  Forum zur Bündelung ihrer Tätigkeiten und zur
                                  Abstimmung aktueller Ergebnisse von Forschung
                                  und Lehre; dazu dienen u.a. eigene
                                  Publikationen sowie Seminare und Schulungen
                                  des Verbandes
                                </li>
                                <li>
                                  erstellt auf der Basis von
                                  Forschungsergebnissen der Schulmedizin, der
                                  Komplementärmedizin und der Salutogenese
                                  Qualitätsstandards, nach denen
                                  Medical-Wellness-Anbieter zertifiziert,
                                  Produkte geprüft und Begriffe des Bereichs
                                  Medical Wellness geschützt werden
                                </li>
                                <li>
                                  nimmt die Kommunikation nach außen zu
                                  politischen Institutionen, Behörden und
                                  Verbänden wahr
                                </li>
                              </ul>
                            </div>
                            <div className="space-y-4">
                              <h3 className="text-lg font-semibold">
                                Downloads
                              </h3>
                              <div className="flex flex-wrap gap-4">
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
                            </div>
                          </div>
                        )}
                        {section.id === "kriterien" && (
                          <div className="space-y-4">
                            <h3 className="text-lg font-semibold">
                              1. Das Qualitätsmanagementsystem (QM)
                            </h3>
                            <p>
                              In den zu zertifizierenden Unternehmen sollte ein
                              Qualitätsmanagementsystem vorhanden sein, welches
                              im Wesentlichen den Anforderungen der DIN EN ISO
                              9001: 2000 entspricht. Diese Norm stellt den Stand
                              des Wissens zur Zeit dar, wenn es um die
                              Organisation eines Unternehmens geht. Sollte
                              dieses QM-System nicht vorhanden sein, kann der
                              DMWV e.V. mit den interessierten Betrieben Wege
                              zur Erlangung aufzeigen und umsetzen. Diese
                              branchenneutralen Anforderungen werden auf die
                              gesundheitliche Ausrichtung eines Medical Wellness
                              Unternehmens adaptiert, so dass dieser Standard
                              dann die Basis der DMWV-Zertifizierungen
                              darstellt.
                            </p>
                            <h3 className="text-lg font-semibold">
                              2. Spezifische Anforderungen
                            </h3>
                            <p>
                              Diese Anforderungen wurden nicht neu entwickelt,
                              sondern der DMWV e.V. bedient sich bereits
                              vorhandener und etablierter Lösungen.
                              Beispielsweise im Hotelsegment bestehen sie aus
                              einer Kombination der 4 Sterne-Anforderungen sowie
                              der 3‑W-Kriterien. Weiterhin müssen die
                              Unternehmen noch spezifische Medical
                              Wellness-Kriterien erfüllen.
                            </p>
                            <h3 className="text-lg font-semibold">
                              3. Medical Wellness Anforderungen am Beispiel
                              eines Hotels
                            </h3>
                            <p>
                              Auch in diesem Bereich wurden, wo es zweckmäßig
                              erscheint, zusätzliche An- forderungen pro
                              Kategorie erarbeitet. Als Beispiel hier die
                              Anforderungen an ein Medical Wellness Hotel:
                            </p>
                            <ol className="list-decimal pl-5 space-y-2">
                              <li>
                                Definition eines Geltungsbereiches unter
                                ärztlicher Leitung. Dieser muss einen
                                wesentlichen Teil des Behandlungsangebotes im
                                Medical Spa umfassen.
                              </li>
                              <li>
                                Die ärztliche Leitung muss von mindestens einem
                                approbierten Arzt mit relevanter Fachrichtung
                                ausgeübt werden.
                              </li>
                              <li>
                                Der/die Arzt/e muss/müssen den Schwerpunkt ihrer
                                beruflichen Tätigkeit im Hotel ausüben.
                              </li>
                              <li>
                                Darüber hinaus muss mindestens ein Therapeut (z.
                                B. Physiotherapie) mit einschlägiger Ausbildung
                                Vollzeit im Hotel beschäftigt sein.
                              </li>
                              <li>
                                Es muss für die Zeiten der Abwesenheit des
                                Arztes ein ärztlicher Bereitschaftsdienst im
                                Hotel oder in unmittelbarer Nähe verfügbar sein.
                              </li>
                              <li>
                                Beim Wechsel in medizinische Fachrichtungen
                                außerhalb des Hotels ist der Transfer der
                                Teilnehmer bezogenen Daten sichergestellt.
                              </li>
                              <li>
                                Ein schriftlicher Abschlussbericht muss
                                vorliegen.
                              </li>
                              <li>
                                Bei der Anwendung komplementärmedizinischer
                                Therapien muss eine Offenlegung erfolgen, auf
                                welcher Wirkungsbasis die Anwendung beruht.
                              </li>
                              <li>
                                Die Anwendungen im Medical Spa–Bereich basieren
                                auf standardisierten Untersuchungsbögen und
                                Therapieplänen.
                              </li>
                              <li>
                                Die Untersuchungs- und Behandlungsräume verfügen
                                über moderne Ausstattung und vermitteln
                                medizinische Kompetenz ohne Klinikatmosphäre.
                              </li>
                              <li>
                                Die Betrieb erfüllt die Voraussetzungen
                                <ol type="a" className="pl-5">
                                  <li>zur Dokumentation der Ergebnisse,</li>
                                  <li>
                                    um Empfehlungen zur Fortsetzung des
                                    Erlernten zu vermitteln (Ernährungsplan,
                                    Bewegungsplan, gesunder Lebensstil, Verweis
                                    auf Internet-Seiten).
                                  </li>
                                </ol>
                              </li>
                              <li>
                                Der Betrieb verfügt über einen Arzt, der den
                                dringend empfohlenen medizinischen Eingangscheck
                                sicherstellt.
                              </li>
                              <li>
                                Der Betrieb stellt sicher, dass generell eine
                                Leistungsdiagnostik bei Gastpatienten vor einem
                                Bewegungs- und/oder Fitnessprogramm durchgeführt
                                wird.
                              </li>
                              <li>
                                Der Gast erhält auf Wunsch eine schriftliche
                                Auswertung seiner Leistung/Leistungsveränderung
                                mit Empfehlungen für zu Hause.
                              </li>
                            </ol>
                            <p>
                              Das Unternehmen muss sowohl in der Gesamtpunktzahl
                              als auch in den einzelnen Kategorien mind. 70 %
                              der möglichen Punkte erreichen.
                            </p>
                            <p>
                              Produkte werden durch den DMWV e.V. nach einem
                              ebenfalls standardisierten System geprüft und
                              zertifiziert.
                            </p>
                            <p>
                              Interessierte Betriebe und Einrichtungen können
                              sich gerne für weitere Informationen an den
                            </p>
                            <address className="not-italic">
                              Deutschen Medical Wellness Verband e.V.
                              <br />
                              Eichenstr. 3b
                              <br />
                              12435 Berlin
                              <br />
                              <br />
                              Tel: 030 / 81873-310
                              <br />
                              E-Mail: kontakt@dmwv.de
                            </address>
                            <p>wenden.</p>
                          </div>
                        )}
                        {section.id === "voraussetzungen" && (
                          <div className="space-y-4">
                            <p>
                              Voraussetzung für die Zertifizierung eines
                              Medical-Wellness-Betriebes durch den Verband ist
                              die Bereitschaft zur Teilnahme am
                              Zertifizierungsprogramm nach den Prüfkriterien des
                              Verbandes und TÜV Rheinland Group. Die
                              Zertifizierung nach dem Medical Wellness Quality
                              Standard (TÜV Rheinland/DMWV) erfolgt somit
                              unabhängig vom Verband.
                            </p>
                            <h3 className="text-lg font-semibold">
                              &quot;Navigator&quot;
                            </h3>
                            <p>
                              Unabdingbare Voraussetzung für die Wahrnehmung von
                              Medial-Wellness-Leistungen im Sinne des Verbandes
                              ist die Integration eines Arztes in den Betrieb
                              der jeweiligen Einrichtung. Dieser Arzt trägt im
                              DMWV die Bezeichnung &quot;Navigator&quot;, um
                              seine Rolle im Umgang mit den gesunden Gästen, die
                              die jeweilige Medical-Wellness-Einrichtung in
                              Anspruch nehmen, deutlich zu machen.
                            </p>
                            <h3 className="text-lg font-semibold">Der Arzt</h3>
                            <p>
                              Aus der untenstehende Abbildung wird die zentrale
                              Rolle des Navigators deutlich. Das bedeutet, dass
                              bei einer Zertifizierung einer Medical
                              Wellness-Einrichtung das Gesamtergebnis sehr stark
                              von der Wahrnehmung dieser Rolle durch den
                              Navigator/Arzt abhängt.
                            </p>
                            <p>
                              Aus der Abbildung wird ebenso deutlich, dass der
                              Diagnostikbereich, der Unterbringungsbereich und
                              der Bereich der medizinischen Umsetzung nicht
                              notwendigerweise eine infrastrukturelle Einheit
                              bilden müssen.
                            </p>
                            <Image
                              src="/images/Voraussetzung.jpg"
                              width={500}
                              height={500}
                              alt="Voraussetzung"
                            />
                          </div>
                        )}
                        {section.id === "vorgehensweise" && (
                          <div className="space-y-4">
                            <p>
                              Teilnehmende Betriebe am Zertifizierungsprogramm
                              des Verbandes werden anhand von festgelegten
                              Prüfkriterien durch angekündigte professionelle
                              Tester vom TÜV Rheinland Group überprüft. Die
                              Zertifizierung ist jeweils für 3 Jahre gültig.
                            </p>
                            <p>
                              Medical-Wellness-Betriebe werden in folgenden
                              Kategorien zertifiziert:
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                              <li>Medical Wellness Klinik</li>
                              <li>Medical Wellness Hotel</li>
                              <li>Medical Wellness Resort</li>
                              <li>Medical Wellness Day Spa/Klinik Centre</li>
                              <li>Medical Wellness Destination.</li>
                            </ul>
                            <p>
                              Bei der Zertifizierung einer Medical Wellness
                              Destination müssen mindestens drei Einzelelemente
                              aus den Kategorien zertifiziert werden. Das Z
                              ertifizierungsverfahren ist offen und wird nach
                              Prüfkriterien durchgeführt,die dem Kandidaten
                              vorher zur Verfügung gestellt werden. Die
                              Prüfkriterien sind in vier Hauptbereiche
                              unterteilt:
                            </p>
                            <ul className="list-disc pl-5 space-y-2">
                              <li>Diagnostik</li>
                              <li>Medizinische Umsetzung</li>
                              <li>Einrichtung des Medical Wellness Spa</li>
                              <li>Hotel-/Klinik-Bereich</li>
                            </ul>
                            <p>
                              Grundlage der Prüfung ist der vom Verband und TÜV
                              Rheinland Group definierte Ablauf, den der
                              Medical-Wellness-Kunde grundsätzlich durchlaufen
                              soll. Die zu prüfende Einrichtung legt
                              eigenständig fest, in welcher Form und wie weit
                              der Betrieb den vorgegebenen Ablauf erfüllt. Nur
                              diese Elemente werden in die Prüfung
                              miteinbezogen. Im Prüfbericht werden die
                              ausstehenden oder nicht erfüllten Elemente des
                              Prozess bewertet und in einer Gesamtbewertung
                              subsumiert, die auf der vom Verband zu
                              verleihenden Plakette erscheint.
                            </p>
                            <div className="flex items-center space-x-2">
                              <Download className="h-5 w-5 text-primary-700" />
                              <a
                                href="/pdfs/Vorgehensweise_Zertifizierung.pdf"
                                className="text-primary-600 hover:underline"
                              >
                                Die Vorgehensweise zur erfolgreichen
                                Zertifizierung zum Download (PDF)
                              </a>
                            </div>
                          </div>
                        )}
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

export default Certification;
