"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  ArrowRight,
} from "lucide-react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Footer() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Abonniert:", email);
    setEmail("");
  };

  return (
    <footer className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary-200 to-primary-100">
                DMWV
              </h2>
            </Link>
            <p className="text-sm text-primary-200 leading-relaxed">
              Der Deutsche Medical Wellness Verband e.V. (DMWV) ist der
              Fachverband für Medical Wellness in Deutschland. Wir setzen uns
              für die Qualitätssicherung und Weiterentwicklung von Medical
              Wellness ein. Unser Ziel ist es, Gesundheit, Vitalität und
              Lebensfreude durch die Verbindung von Medizin und Wellness zu
              fördern.
            </p>
            <form onSubmit={handleSubmit} className="space-y-2">
              <h3 className="text-lg font-semibold">Newsletter abonnieren</h3>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder="Ihre E-Mail-Adresse"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="bg-primary-800/50 border-primary-700 text-primary-100 placeholder-primary-400"
                  required
                />
                <Button type="submit" variant="secondary">
                  Abonnieren
                </Button>
              </div>
            </form>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Schnellzugriff</h3>
            <ul className="space-y-3">
              {[
                "Aktuelles",
                "Verband",
                "Zertifizierung",
                "Medical Wellness",
                "Planung",
                "Partner",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-")}`}
                    className="text-primary-200 hover:text-white transition-colors inline-flex items-center group"
                  >
                    <ArrowRight className="mr-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Kontakt</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="mr-2 h-5 w-5 text-primary-300 mt-0.5" />
                <span className="text-sm">Bundesallee 115, 12161 Berlin</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-5 w-5 text-primary-300" />
                <span className="text-sm">+49 30 8973 5139</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-primary-300" />
                <a
                  href="mailto:info@dmwv.de"
                  className="text-sm hover:underline"
                >
                  info@dmwv.de
                </a>
              </li>
            </ul>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-primary-300 hover:text-white transition-colors p-2 bg-primary-800/50 rounded-full hover:bg-primary-700/50"
                >
                  <Icon size={20} />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-lg font-semibold">FAQ</h3>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-sm hover:no-underline">
                  Was ist Medical Wellness?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-primary-200">
                  Medical Wellness ist die synergetische Kooperation von Medizin
                  und Wellness, die in ihrer Kombination einen höheren
                  Gesundheitszustand zu erreichen in der Lage ist. Dabei werden
                  auf Basis eines ganzheitlichen Ansatzes Lebensstil
                  verbessernde Faktoren mit medizinisch-therapeutischen Ansätzen
                  verknüpft.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-sm hover:no-underline">
                  Was sind die Vorteile einer Zertifizierung?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-primary-200">
                  Die Zertifizierung durch den DMWV bietet zahlreiche Vorteile,
                  darunter: Stärkung der Marktposition, Profilierung im Medical
                  Wellness Markt, kompetente betriebswirtschaftliche Beratung,
                  Rabatte bei Fort- und Weiterbildungen, exklusive
                  Internetpräsenz, und Einbindung in exklusive
                  Marketingmaßnahmen des Verbandes für zertifizierte Betriebe.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-sm hover:no-underline">
                  Wie kann ich Mitglied werden?
                </AccordionTrigger>
                <AccordionContent className="text-sm text-primary-200">
                  Der DMWV bietet verschiedene Mitgliedschaftsoptionen an, unter
                  anderem für Privatpersonen, Fachkräfte, Medical Wellness
                  Einrichtungen, Reiseveranstalter, produzierende Unternehmen,
                  Beratungsunternehmen und Institutionen. Die Jahresbeiträge
                  reichen von 250 Euro für Privatpersonen bis zu 1.500 Euro für
                  Reiseveranstalter, mit individuellen Konditionen für größere
                  Unternehmen.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-primary-100">
              &copy; {new Date().getFullYear()} Deutscher Medical Wellness
              Verband. Alle Rechte vorbehalten.
            </p>
            <nav className="flex flex-wrap justify-center gap-4 mt-4 md:mt-0">
              <Link
                href="/impressum"
                className="text-sm text-primary-100 hover:text-white transition-colors"
              >
                Impressum
              </Link>
              <Link
                href="/datenschutz"
                className="text-sm text-primary-100 hover:text-white transition-colors"
              >
                Datenschutz
              </Link>
              <Link
                href="/agb"
                className="text-sm text-primary-100 hover:text-white transition-colors"
              >
                AGB
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
