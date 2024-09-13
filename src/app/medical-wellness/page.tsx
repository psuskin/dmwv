"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ExternalLink } from "lucide-react";
import SubHeader from "@/components/SubHeader";
import Image from "next/image";

const sections = [
  { id: "begriff", title: "Begriff" },
  { id: "kernbereiche", title: "Kernbereiche" },
  { id: "markt", title: "Marktpotenzial und aktuelle Entwicklung" },
  { id: "gesundheitskarte", title: "Gesundheitskarte" },
  { id: "hotels", title: "The Leading Medical Wellness Hotels & Resorts" },
  { id: "clinics", title: "The Leading Medical Wellness Clinics & Spas" },
];

const MedicalWellness = () => {
  const [activeSection, setActiveSection] = useState<string>("begriff");

  const toggleSection = (id: string) => {
    setActiveSection(activeSection === id ? "" : id);
  };

  return (
    <>
      <SubHeader
        title="Medical Wellness"
        subtitle="Entdecken Sie die Vorteile von Medical Wellness für Ihre Gesundheit und Ihr Wohlbefinden"
        backgroundImage="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Medical Wellness", href: "/medical-wellness" },
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
                      <div className="p-4 border-t-2 border-primary-300 ">
                        {section.id === "begriff" && (
                          <div className="space-y-4">
                            <p>
                              Die Definition des Begriffs Medical Wellness&apos;
                              befindet sich gegenwärtig in einem dynamischen und
                              vielschichtigen Prozess, der auch durch
                              internationale Entwicklungen beeinflusst wird. Der
                              Verband hat deshalb eine umfassende,
                              wissenschaftliche Definition entwickelt, die
                              diesem Konzept sowie dem Zertifizierungsprozess
                              des Verbandes zugrunde liegt.
                            </p>
                            <h3 className="text-lg font-semibold">
                              Die aktuelle Definition von &quot;Medical
                              Wellness&quot;
                            </h3>
                            <p>
                              Die wichtigsten Verbände der Branche haben sich
                              auf dem 1. Medical Wellness Kongress 2007 in
                              Berlin auf eine Definition geeinigt.
                            </p>
                            <blockquote className="border-l-4 border-primary-500 pl-4 italic">
                              „Medical Wellness beinhaltet
                              gesundheitswissenschaftlich begleitete Maßnahmen
                              zur nachhaltigen Verbesserung der Lebensqualität
                              und des subjektiven Gesundheitsempfindens durch
                              eigenverantwortliche Prävention und
                              Gesundheitsförderung sowie der Motivation zu einem
                              gesundheitsbewussten Lebensstil&quot;.
                            </blockquote>
                            <p>
                              Die neue Medical-Wellness-Definition wird getragen
                              unter anderem vom Deutschen Tourismusverband, dem
                              Deutschen Medical Wellness Verband, sowie dem
                              Deutschen Heilbäderverband und dem Deutschen
                              Turnerbund.
                            </p>
                            <h3 className="text-lg font-semibold">
                              Medical Wellness nach Prof. Dr. T. Esch
                            </h3>
                            <p>
                              &quot;Medical Wellness&quot; bezeichnet einen
                              mehrdimensionalen, dynamisch-systematischen
                              Prozess in Richtung der aktiven Herstellung eines
                              ganzheitlichen individuellen Wohlbefindens im
                              Kontext wissenschaftlich gesicherter
                              gesundheitsfördernder bzw. medizinischer Faktoren.
                              Jene Faktoren basieren auf biopsychosozialen
                              Bedürfnissen, den „Motivatoren&quot;, welche die
                              Individuen mit Hilfe von wirksamkeitsevidenten
                              Behandlungen oder Verhaltensweisen zu befriedigen
                              suchen. Dabei steht die Realisierung eines
                              gesundheitsfördernden Lebensstils unter Nutzung
                              von individueller Ressource, Kompetenz und
                              Eigenverantwortung im Sinne einer angewandten
                              Prävention oder &apos;integrierten
                              Gesundheitsförderung&apos; im Vordergrund.
                              Therapeutische Maßnahmen zum angestrebten
                              Ausgleich einzelner Faktoren und Bedürfnisse sowie
                              zur Verwirklichung von subjektiver Gesundheit,
                              Salutogenese und Wohlgefühl werden zumeist in
                              professionellen Medical-Wellness-Zentren, Kliniken
                              oder hotelartigen Einrichtungen in Zusammenarbeit
                              mit entsprechenden medizinisch geleiteten und
                              wissenschaftlich fundierten Therapieabteilungen
                              angeboten.
                            </p>
                          </div>
                        )}
                        {section.id === "kernbereiche" && (
                          <div className="space-y-4">
                            <p>
                              Im DMWV werden die gesundheitsfördernden
                              Aktivitäten in vier Kernbereiche der Medical
                              Wellness unterteilt, die vor allem der Prävention
                              dienen. Medical Wellness stellt in der Anwendung
                              eine Verknüpfung dar von seriösen medizinischen
                              Wellness-Leistungen mit Wellness-Angeboten im
                              touristischen Rahmen. Der Begriff grenzt damit
                              Leistungen und Produkte aus, die sich nur im
                              Bereich Wellness oder Tourismus ohne den Aspekt
                              der Gesundheitspflege definieren.
                            </p>
                            <h3 className="text-lg font-semibold">Navigator</h3>
                            <p>
                              Im Zentrum stehen also die Diagnostik, die
                              Salutogenese sowie die aktive Einstellung des
                              eigenen Lebens auf gesundheitsfördernde
                              Verhaltensweisen. Voraussetzung für deren Gelingen
                              ist die grundsätzliche Bereitschaft zum
                              eigenverantwortlichen Handeln. Damit können
                              individuell bestehende Ressourcen durch Stärkung
                              der positiven, gesundheitsfördernden Potenziale
                              aktiviert werden. Dieses wiederum setzt die
                              Bereitschaft zur Teilnahme an Gesundheitsbildung
                              voraus: Die Bereitschaft zu einem lebenslangen
                              Prozess mit dem Ziel der Gesundheitspflege durch
                              einen gesundheitsorientierten Lebensstil.
                            </p>
                            <Image
                              src="/images/kern.gif"
                              width={500}
                              height={500}
                              alt="kern"
                            />
                          </div>
                        )}
                        {section.id === "markt" && (
                          <div className="space-y-4">
                            <p>
                              Seit vielen Jahren übersteigt der Anteil der
                              Ausgaben der Gesetzlichen Krankenversicherer (GKV)
                              die 6%-Grenze des Bruttoinlands Produktes nur
                              unwesentlich. Ca. 4% des Bruttoinlands-Produktes
                              werden bereits heute für private
                              Gesundheitsausgaben (2. Gesundheitsmarkt)
                              aufgewendet mit deutlich steigender Tendenz.
                            </p>
                            <p>
                              Das dauerhaft begrenzte Budget der solidarisch
                              finanzierten GKV, hohe Arbeitslosigkeit, eine
                              demografische Entwicklung hin zu einer alternden
                              Gesellschaft und eine hohe Zahl an chronisch
                              Kranken wird dazu führen, dass sich die
                              Gesundheitsausgaben des Ersten Gesundheitsmarktes
                              (GKV) auf Kernleistungen konzentrieren müssen.
                              Folglich wird dem Selbstzahlermarkt (u. a.
                              Selbstbehalte oder private Zusatzversicherungen)
                              eine wachsende Bedeutung zukommen.
                            </p>
                            <p>
                              Das Institut für Freizeitwirtschaft in München
                              wagt folgende Prognosen: Die Anzahl der Reisenden
                              in Deutschland im Bereich des Health-Care-Urlaubs
                              wird sich von 2002 bis 2010 um 46% erhöhen. Dies
                              entspricht über 2 Mio. Reisende pro Jahr (2002
                              knapp 1,4 Mio. Reisende). Die übrigen Formen des
                              Gesundheitstourismus&apos; (Anti-Aging-Urlaub,
                              Wellness-Urlaub, Beauty-Urlaub) verfügen bereits
                              jetzt über ein starkes Wachstum. Der Anteil des
                              Health-Care-Urlaubs wird 2010 fast die Hälfte
                              (48,3%) aller Gesundheitsreisen ausmachen. Die
                              Gesamtausgaben deutscher Haushalte für alle
                              Gesundheitsreisen nehmen bis 2010 auf 3,7 Mrd.
                              Euro zu.
                            </p>
                            <p>
                              Sogar der US-amerikanische Medical Spa-Markt wird
                              2006 ein Umsatzvolumen von über 400 Mio. US-Dollar
                              erreichen und bis dahin ein jährliches
                              Umsatzwachstum von 10,1% verzeichnen (Feedback
                              Research Services).
                            </p>
                            <p>
                              Anti-Aging-Maßnahmen gehören zu den zentralen
                              Wachstumsfeldern im Bereich von Gesundheit und
                              Freizeit. Das gilt für die USA (Feedback Research
                              Services) wie auch für Europa (Institut für
                              Freizeitwirtschaft). Hier soll dieses Marktsegment
                              im Zeitraum von 2002 bis 2010 um 2.500% wachsen.
                            </p>
                          </div>
                        )}
                        {section.id === "gesundheitskarte" && (
                          <div className="space-y-4">
                            <h3 className="text-lg font-semibold">
                              Der Anfang für ein gesundes Leben
                            </h3>
                            <p className="text-xl font-semibold text-primary-600">
                              Für nur 1 Euro im Monat machen Sie mehr für Ihre
                              Gesundheit!
                            </p>
                            <p>
                              Mit der Medical Wellness Gesundheitskarte bieten
                              wir Ihnen eine professionelle Orientierungshilfe
                              im zweiten Gesundheitsmarkt, die Sie mit aktuellen
                              Informationen, Entwicklungen, Tendenzen, Tipps und
                              Angeboten rund um das Thema Gesundheit und Medical
                              Wellness versorgt. Darüber hinaus erfreuen Sie
                              sich zahlreicher Rabatte und Preisvorteilen
                              unserer Medical Wellness Partner.
                            </p>
                            <p>
                              Wir haben für Sie exklusive Leistungspartner der
                              Segmente Medical Wellness, Wellness & Beauty,
                              Reisen, Apothekenartikel, Geschenke,
                              Events/Veranstaltungen ausgewählt, und stellen
                              Ihnen zusätzlich zahlreiche weitere „bonus &
                              more&quot; Partner zur Verfügung. Die Unternehmen
                              „bonus & more&quot; als auch der TÜV Card Services
                              gehören zu unseren Kooperationspartnern.
                            </p>
                            <p>
                              Möchten auch Sie als Medical Wellness Einrichtung
                              die Vorzüge der Medical Wellness Gesundheitskarte
                              anbieten, dann bitten wir um Anfrage auf
                              gesundheitskarte@dmwv.de oder rufen Sie an unter
                              +49 (0)30 81873–333.
                            </p>
                          </div>
                        )}
                        {section.id === "hotels" && (
                          <div className="space-y-4">
                            <Image
                              src="/images/imhr.jpg"
                              width={500}
                              height={500}
                              alt="kern"
                            />
                            <h3 className="text-lg font-semibold">Navigator</h3>
                            <p>
                              &quot;The Leading Medical Wellness Hotels &
                              Resorts&quot; ist eine international eingetragene
                              Premiummarke mit der Zielsetzung führende Medical
                              Wellness Hotels und Resorts unter einem Dach
                              zusammenzuführen und somit eine Hotelkooperation
                              zu bilden, die aktiv den Markt des
                              Gesundheitstourismus gestaltet.
                            </p>
                            <p>
                              &quot;The Leading Medical Wellness Hotels &
                              Resorts&quot; in Kooperation mit dem Deutschen
                              Medical Wellness Verband e. V. verstehen sich als
                              Beratungs-, Vermarktungs- und
                              Positionierungsdienstleister für Medical Wellness
                              Hotels & Resorts.
                            </p>
                            <p>
                              Unser Portfolio vereint medizinisches Wissen,
                              qualitativ hochwertige Dienstleistungen sowie eine
                              Infrastruktur.
                            </p>
                            <p>
                              Wir bieten Orientierungshilfe bezüglich der
                              professionellen, geprüften und
                              qualitätsgesicherten Medical Wellness
                              Dienstleistungen mit nachhaltigem Effekt und
                              verantwortungsvoller medizinischer Betreuung.
                            </p>
                            <p>
                              Gesundheitsreisende können sich auf eine
                              Wohlfühlatmosphäre und Exklusivität unserer
                              Hotelpartner verlassen.
                            </p>
                            <a
                              href="https://www.leading-medical-target="
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-primary-600 hover:underline"
                            >
                              The Leading Medical Wellness Hotels & Resorts
                              <ExternalLink className="ml-1 h-4 w-4" />
                            </a>
                          </div>
                        )}
                        {section.id === "clinics" && (
                          <div className="space-y-4">
                            <Image
                              src="/images/lmwc.jpg"
                              width={500}
                              height={500}
                              alt="lmwc"
                            />
                            <h3 className="text-lg font-semibold">Navigator</h3>
                            <p>
                              Die weltweit eingetragene und aktive Premiummarke
                              „The Leading Medical Wellness Clinics & Spas&quot;
                              hat sich zum Ziel gesetzt führende Medical
                              Wellness Clinics & Spas unter ihrem Dach zusammen
                              zu führen und aktiv diesen Gesundheitsmarkt zu
                              gestalten.
                            </p>
                            <p>
                              „The Leading Medical Wellness Clinics & Spas&quot;
                              bringt Medical Wellness mit Kliniken zusammen und
                              ist eine Orientierungshilfe für Patienten, die
                              sich bei der Auswahl der Klinik sicher sein
                              wollen.
                            </p>
                            <p>
                              So bietet die Marke dem Gast eine
                              Orientierungshilfe bezüglich der professionellen,
                              geprüften und qualitätsgesicherten Medical
                              Wellness Dienstleistungen mit nachhaltigem Effekt
                              und verantwortungsvoller medizinischer Betreuung.
                            </p>
                            <p>
                              Gesundheitsreisende können sich auf eine
                              Wohlfühlatmosphäre und Exklusivität unserer
                              Klinikpartner verlassen.
                            </p>
                            <a
                              href="https://www.leading-medical-wellness.com"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-primary-600 hover:underline"
                            >
                              The Leading Medical Wellness Clinics & Spas
                              <ExternalLink className="ml-1 h-4 w-4" />
                            </a>
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

export default MedicalWellness;
