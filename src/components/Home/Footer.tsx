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
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";

export default function Footer() {
  const [email, setEmail] = useState("");
  const t = useTranslations("Footer");
  const locale = useLocale();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    console.log("Subscribed:", email);
    setEmail("");
  };

  const menuItems = t.raw("menuItems");

  return (
    <footer className="bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="space-y-6">
            <Link href="/" className="inline-block">
              <h2 className="text-4xl font-bold text-white">DMWV</h2>
            </Link>
            <p className="text-lg text-white leading-relaxed">
              {t("description")}
            </p>
            <form onSubmit={handleSubmit} className="space-y-2">
              <h3 className="text-xl font-semibold">{t("newsletterTitle")}</h3>
              <div className="flex space-x-2">
                <Input
                  type="email"
                  placeholder={t("emailPlaceholder")}
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="border-primary-100 text-white placeholder-white text-lg"
                  required
                />
                <Button type="submit" variant="secondary" className="text-lg">
                  {t("subscribe")}
                </Button>
              </div>
            </form>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold">{t("quickLinks")}</h3>
            <ul className="space-y-3">
              {menuItems.map((item: { name: string; href: string }) => (
                <li key={item.name}>
                  <Link
                    href={`/${locale}${item.href}`}
                    className="text-white hover:text-primary-200 transition-colors inline-flex items-center group text-lg"
                  >
                    <ArrowRight className="mr-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                    {item.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold">{t("contact")}</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin
                  className="mr-2 h-6 w-6 text-white mt-0.5"
                  aria-hidden="true"
                />
                <span className="text-lg">{t("address")}</span>
              </li>
              <li className="flex items-center">
                <Phone className="mr-2 h-6 w-6 text-white" aria-hidden="true" />
                <span className="text-lg">{t("phone")}</span>
              </li>
              <li className="flex items-center">
                <Mail className="mr-2 h-5 w-5 text-white" />
                <a
                  href="mailto:info@dmwv.de"
                  className="text-lg hover:underline"
                >
                  {t("email")}
                </a>
              </li>
            </ul>
            <div className="flex space-x-4">
              {[Facebook, Twitter, Instagram, Linkedin].map((Icon, index) => (
                <a
                  key={index}
                  href="#"
                  className="text-white hover:text-primary-200 transition-colors p-2 bg-primary-800/50 rounded-full hover:bg-primary-700/50"
                >
                  <Icon size={24} />
                </a>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <h3 className="text-xl font-semibold">{t("aboutUs")}</h3>
            <p className="text-lg text-white leading-relaxed">
              {t("aboutUsDescription")}
            </p>
            <Link
              href="/verband/organisation"
              className="inline-flex items-center text-white hover:text-primary-200 transition-colors group text-lg"
            >
              {t("learnMore")}
              <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-primary-700">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-white">
              {t("copyright", { year: new Date().getFullYear() })}
            </p>
            <nav className="flex flex-wrap justify-center gap-4 mt-4 md:mt-0">
              <Link
                href={`/${locale}/impressum`}
                className="text-sm text-white hover:text-primary-200 transition-colors"
              >
                {t("imprint")}
              </Link>
              <Link
                href={`/${locale}/datenschutz`}
                className="text-sm text-white hover:text-primary-200 transition-colors"
              >
                {t("privacy")}
              </Link>
              <Link
                href={`/${locale}/agb`}
                className="text-sm text-white hover:text-primary-200 transition-colors"
              >
                {t("terms")}
              </Link>
            </nav>
          </div>
        </div>
      </div>
    </footer>
  );
}
