import React from "react";
import { Download } from "lucide-react";

const VorgehensweiseContent = () => {
  return (
    <>
      <p className="mb-4">
        Teilnehmende Betriebe am Zertifizierungsprogramm des Verbandes werden
        anhand von festgelegten Prüfkriterien durch angek�ndigte professionelle
        Tester vom TÜV Rheinland Group überprüft. Die Zertifizierung ist jeweils
        für 3 Jahre gültig.
      </p>
      <p className="mb-4">
        Medical-Wellness-Betriebe werden in folgenden Kategorien zertifiziert:
      </p>
      <ul className="list-disc list-inside space-y-1 mb-4">
        <li>Medical Wellness Klinik</li>
        <li>Medical Wellness Hotel</li>
        <li>Medical Wellness Resort</li>
        <li>Medical Wellness Day Spa/Klinik Centre</li>
        <li>Medical Wellness Destination</li>
      </ul>
      <p className="mb-4">
        Bei der Zertifizierung einer Medical Wellness Destination müssen
        mindestens drei Einzelelemente aus den Kategorien zertifiziert werden.
        Das Zertifizierungsverfahren ist offen und wird nach Prüfkriterien
        durchgeführt,die dem Kandidaten vorher zur Verfügung gestellt werden.
        Die Prüfkriterien sind in vier Hauptbereiche unterteilt:
      </p>
      <ul className="list-disc list-inside space-y-1 mb-4">
        <li>Diagnostik</li>
        <li>Medizinische Umsetzung</li>
        <li>Einrichtung des Medical Wellness Spa</li>
        <li>Hotel-/Klinik-Bereich</li>
      </ul>
      <p className="mb-4">
        Grundlage der Prüfung ist der vom Verband und TÜV Rheinland Group
        definierte Ablauf, den der Medical-Wellness-Kunde grundsätzlich
        durchlaufen soll. Die zu prüfende Einrichtung legt eigenständig fest, in
        welcher Form und wie weit der Betrieb den vorgegebenen Ablauf erfüllt.
      </p>
      <a
        href="/downloads/Vorgehensweise.pdf"
        className="inline-flex items-center mt-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md shadow-sm text-white bg-primary-600 hover:bg-primary-700 transition duration-150 ease-in-out"
      >
        <Download className="mr-2 h-4 w-4" />
        Die Vorgehensweise zur erfolgreichen Zertifizierung zum Download (PDF)
      </a>
    </>
  );
};

export default VorgehensweiseContent;
