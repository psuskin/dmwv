import React from "react";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import { metadataConfig } from "@/app/metadata.config";

export async function generateMetadata({
  params: {},
}: {
  params: { locale: string };
}): Promise<Metadata> {
  const tMeta = await getTranslations("metadata");

  return {
    ...metadataConfig,
    title: `Impressum | ${tMeta("siteName")}`,
    description:
      "Impressum des Deutschen Medical Wellness Verbands (DMWV). Rechtliche Informationen und Kontaktdaten.",
    robots: "noindex, follow",
    openGraph: {
      title: `Impressum | ${tMeta("siteName")}`,
      description: "Impressum des Deutschen Medical Wellness Verbands (DMWV).",
    },
  };
}

const Impressum = () => {
  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-16 max-w-3xl">
        <h1 className="text-4xl font-bold mb-8 text-primary-800 border-b pb-4">
          Impressum
        </h1>
        <div className="bg-white shadow-md rounded-lg p-8 space-y-6">
          <Section title="Gesetzliche Anbieterkennung">
            <p>
              Deutscher Medical Wellness Verband e.V.
              <br />
              Heideläuferweg 75a
              <br />
              12353 Berlin
              <br />
              Deutschland
            </p>
            <p className="mt-4">
              vertr. d. Lutz Lungwitz
              <br />
              Mobil: +49(177)5032600
              <br />
              Telefon: +49(30)63419445
              <br />
              Fax: +49(30)94873079
              <br />
              E‑Mail: kontakt@dmwv.de
            </p>
            <p className="mt-4">
              Vereinsregister AG Berlin-Charlottenburg, Nr. 24997 Nz
              <br />
              Vorstand i.S.v. § 26 BGB
              <br />
              1. Vorsitzender Lutz Lungwitz
            </p>
          </Section>
          <Section title="Inhaltlich Verantwortlicher gemäß § 55 RStV">
            <p>
              Lutz Lungwitz
              <br />
              Heideläuferweg 75a
              <br />
              12353 Berlin
              <br />
              Deutschland
            </p>
          </Section>
          <Section title="Alternative Streitbeilegung:">
            <p>
              Die Europäische Kommission stellt eine Plattform für die
              außergerichtliche Online-Streitbeilegung (OS-Plattform) bereit,
              aufrufbar unter{" "}
              <a
                href="https://ec.europa.eu/odr"
                className="text-blue-600 hover:underline"
              >
                https://ec.europa.eu/odr
              </a>{" "}
              (
              <a
                href="https://ec.europa.eu/consumers/odr"
                className="text-blue-600 hover:underline"
              >
                https://ec.europa.eu/consumers/odr
              </a>
              ).
            </p>
          </Section>
          <Section>
            <p>
              Wir sind seit 08.03.2018 Mitglied der Initiative
              &quot;FairCommerce&quot;.
              <br />
              Nähere Informationen hierzu finden Sie unter{" "}
              <a
                href="http://www.fair-commerce.de"
                className="text-blue-600 hover:underline"
              >
                www.fair-commerce.de
              </a>
              .
            </p>
          </Section>
        </div>
      </div>
    </div>
  );
};

const Section: React.FC<{ title?: string; children: React.ReactNode }> = ({
  title,
  children,
}) => (
  <section className="space-y-2">
    {title && <h2 className="text-2xl font-semibold text-gray-700">{title}</h2>}
    <div className="text-gray-600">{children}</div>
  </section>
);

export default Impressum;
