import React from "react";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { Home, ArrowRight, Frown } from "lucide-react";

export default function NotFound() {
  const t = useTranslations("NotFound");

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary-50 to-background flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full space-y-8 text-center">
        <div className="space-y-4">
          <Frown className="mx-auto h-24 w-24 text-primary-300" />
          <h1 className="text-6xl font-bold text-primary-600">404</h1>
          <h2 className="mt-2 text-3xl font-semibold text-primary-800">
            {t("title")}
          </h2>
          <p className="mt-2 text-lg text-primary-600">{t("description")}</p>
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-8">
          <Link
            href="/"
            className="inline-flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-full text-primary-foreground bg-primary-500 hover:bg-primary-600 transition duration-300"
          >
            <Home className="w-5 h-5 mr-2" />
            {t("homeButton")}
          </Link>
          <Link
            href="/kontakt"
            className="group inline-flex items-center justify-center px-5 py-3 border border-primary-600 text-base font-medium rounded-full text-primary-600 bg-background hover:bg-primary-50 transition duration-300"
          >
            {t("contactButton")}
            <ArrowRight className="ml-2 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>
    </div>
  );
}
