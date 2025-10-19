import { unstable_setRequestLocale } from "next-intl/server";
import React from "react";
import KontactClient from "./KontactClient";

interface PageProps {
  params: {
    locale: string;
  };
}

const KontactPage = ({ params: { locale } }: PageProps) => {
  unstable_setRequestLocale(locale);

  return <KontactClient />;
};

export function generateStaticParams() {
  return [{ locale: "en" }, { locale: "de" }];
}

export default KontactPage;
