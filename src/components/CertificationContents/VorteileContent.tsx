import React from "react";
import { CheckCircle, Download } from "lucide-react";

const VorteileContent = () => {
  return (
    <>
      <p className="mb-4">
        Der Deutsche Medical Wellness Verband e.V. (DMWV) versteht sich als die
        Interessenvertretung für Medical Wellness.
      </p>
      <ul className="space-y-2 mb-6">
        <li className="flex items-start">
          <CheckCircle className="mr-2 h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
          <span>
            leistet Verbrauchern Orientierungshilfe in einem Markt, der sich
            aufgrund seines raschen Wachstums wenig transparent präsentiert und
            der durch die Komplexität seines Angebots den Nichtmediziner leicht
            überfordert
          </span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="mr-2 h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
          <span>
            bietet Betreibern, Anbietern und Projektplanern im
            Medical-Wellness-Markt ein Forum zur Bündelung ihrer Tätigkeiten und
            zur Abstimmung aktueller Ergebnisse von Forschung und Lehre; dazu
            dienen u.a. eigene Publikationen sowie Seminare und Schulungen des
            Verbandes
          </span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="mr-2 h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
          <span>
            erstellt auf der Basis von Forschungsergebnissen der Schulmedizin,
            der Komplementärmedizin und der Salutogenese Qualitätsstandards,
            nach denen Medical-Wellness-Anbieter zertifiziert, Produkte geprüft
            und Begriffe des Bereichs Medical Wellness geschützt werden
          </span>
        </li>
        <li className="flex items-start">
          <CheckCircle className="mr-2 h-5 w-5 text-primary-600 flex-shrink-0 mt-0.5" />
          <span>
            nimmt die Kommunikation nach außen zu politischen Institutionen,
            Behörden und Verbänden wahr
          </span>
        </li>
      </ul>
      <div>
        <h3 className="font-semibold mb-2">Downloads</h3>
        <div className="flex flex-wrap gap-4">
          <a
            href="/downloads/Satzung_DMWV.pdf"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 transition duration-150 ease-in-out"
          >
            <Download className="mr-2 h-4 w-4" />
            Satzung DMWV (PDF)
          </a>
          <a
            href="/downloads/Aufnahmeantrag_DMWV.pdf"
            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 transition duration-150 ease-in-out"
          >
            <Download className="mr-2 h-4 w-4" />
            Aufnahmeantrag DMWV (PDF)
          </a>
        </div>
      </div>
    </>
  );
};

export default VorteileContent;
