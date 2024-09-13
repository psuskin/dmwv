import React from "react";

const KriterienContent = () => {
  return (
    <>
      <h3 className="text-lg font-semibold mb-2">
        1. Das Qualitätsmanagementsystem (QM)
      </h3>
      <p className="mb-4">
        In den zu zertifizierenden Unternehmen sollte ein
        Qualitätsmanagementsystem vorhanden sein, welches im Wesentlichen den
        Anforderungen der DIN EN ISO 9001: 2000 entspricht. Diese Norm stellt
        den Stand des Wissens zur Zeit dar, wenn es um die Organisation eines
        Unternehmens geht. Sollte dieses QM-System nicht vorhanden sein, kann
        der DMWV e.V. mit den interessierten Betrieben Wege zur Erlangung
        aufzeigen und umsetzen. Diese branchenneutralen Anforderungen werden auf
        die gesundheitliche Ausrichtung eines Medical Wellness Unternehmens
        adaptiert, so dass dieser Standard dann die Basis der
        DMWV-Zertifizierungen darstellt.
      </p>

      <h3 className="text-lg font-semibold mb-2">
        2. Spezifische Anforderungen
      </h3>
      <p className="mb-4">
        Diese Anforderungen wurden nicht neu entwickelt, sondern der DMWV e.V.
        bedient sich bereits vorhandener und etablierter Lösungen.
        Beispielsweise im Hotelsegment bestehen sie aus einer Kombination der 4
        Sterne-Anforderungen sowie der 3‑W-Kriterien. Weiterhin müssen die
        Unternehmen noch spezifische Medical Wellness-Kriterien erfüllen.
      </p>

      <h3 className="text-lg font-semibold mb-2">
        3. Medical Wellness Anforderungen am Beispiel eines Hotels
      </h3>
      <p className="mb-4">
        Auch in diesem Bereich wurden, wo es zweckmäßig erscheint, zusätzliche
        Anforderungen pro Kategorie erarbeitet. Als Beispiel hier die
        Anforderungen an ein Medical Wellness Hotel:
      </p>
      <ul className="list-decimal list-inside space-y-1 mb-4">
        <li>
          Definition eines Geltungsbereiches unter ärztlicher Leitung. Dieser
          muss einen wesentlichen Teil des Behandlungsangebotes im Medical Spa
          umfassen.
        </li>
        <li>
          Die ärztliche Leitung muss von mindestens einem approbierten Arzt mit
          relevanter Fachrichtung ausgeübt werden.
        </li>
        {/* Add the rest of the list items here */}
      </ul>
      <p className="mb-4">
        Das Unternehmen muss sowohl in der Gesamtpunktzahl als auch in den
        einzelnen Kategorien mind. 70 % der möglichen Punkte erreichen.
      </p>
      <p className="mb-4">
        Produkte werden durch den DMWV e.V. nach einem ebenfalls
        standardisierten System geprüft und zertifiziert.
      </p>
      <p>
        Interessierte Betriebe und Einrichtungen können sich gerne für weitere
        Informationen an den
      </p>
      <address className="mt-2">
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
    </>
  );
};

export default KriterienContent;
