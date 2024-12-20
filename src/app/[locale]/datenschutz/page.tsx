"use client";

import React from "react";
import { ChevronRight } from "lucide-react";

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div
    className="mb-10 scroll-m-20"
    id={title.toLowerCase().replace(/\s+/g, "-")}
  >
    <h3 className="text-xl font-semibold text-primary-800 mb-4">{title}</h3>
    <div className="space-y-4 text-gray-600">{children}</div>
  </div>
);

const TableOfContents = ({ sections }: { sections: string[] }) => (
  <div className="bg-gray-50 rounded-lg p-6 mb-8">
    <h3 className="text-lg font-semibold mb-4">Inhaltsverzeichnis</h3>
    <nav className="space-y-2">
      {sections.map((section) => (
        <a
          key={section}
          href={`#${section.toLowerCase().replace(/\s+/g, "-")}`}
          className="flex items-center text-gray-600 hover:text-primary-600 transition-colors"
        >
          <ChevronRight className="h-4 w-4 mr-2" />
          {section}
        </a>
      ))}
    </nav>
  </div>
);

const PrivacyPolicy = () => {
  const sections = [
    "Server-Logfiles",
    "Kundenkonto Bestellungen",
    "Kontakt Bewertungen Newsletter",
    "Zahlungsdienstleister",
    "Cookies",
    "Analyse Werbung Affiliate",
    "Plug-ins",
    "Betroffenenrechte und Speicherdauer",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      {/* Hero Section */}
      <div className="bg-primary-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="flex items-center gap-2 text-sm mb-4">
            <a href="/" className="hover:text-primary-200">
              Home
            </a>
            <ChevronRight className="h-4 w-4" />
            <span>Datenschutz</span>
          </div>
          <h1 className="text-4xl font-bold">Datenschutz</h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-xl shadow-sm p-8">
          <TableOfContents sections={sections} />

          <div className="prose prose-gray max-w-none">
            <h2 className="text-2xl font-semibold text-primary-800 mb-6">
              Datenschutzerklärung
            </h2>

            <div className="text-gray-600 space-y-4 mb-10">
              <p>
                Soweit nachstehend keine anderen Angaben gemacht werden, ist die
                Bereitstellung Ihrer personenbezogenen Daten weder gesetzlich
                oder vertraglich vorgeschrieben, noch für einen
                Vertragsabschluss erforderlich. Sie sind zur Bereitstellung der
                Daten nicht verpflichtet. Eine Nichtbereitstellung hat keine
                Folgen. Dies gilt nur soweit bei den nachfolgenden
                Verarbeitungsvorgängen keine anderweitige Angabe gemacht wird.
              </p>
              <p>
                &quot;Personenbezogene Daten&quot; sind alle Informationen, die
                sich auf eine identifizierte oder identifizierbare natürliche
                Person beziehen.
              </p>
            </div>

            <Section title="Server-Logfiles">
              <p>
                Sie können unsere Webseiten besuchen, ohne Angaben zu Ihrer
                Person zu machen.
              </p>
              <p>
                Bei jedem Zugriff auf unsere Website werden an uns oder unseren
                Webhoster / IT-Dienstleister Nutzungsdaten durch Ihren Internet
                Browser übermittelt und in Protokolldaten (sog. Server-Logfiles)
                gespeichert. Zu diesen gespeicherten Daten gehören z.B. der Name
                der aufgerufenen Seite, Datum und Uhrzeit des Abrufs, die
                IP-Adresse, die übertragene Datenmenge und der anfragende
                Provider. Die Verarbeitung erfolgt auf Grundlage des Art. 6 Abs.
                1 lit. f DSGVO aus unserem überwiegenden berechtigten Interesse
                an der Gewährleistung eines störungsfreien Betriebs unserer
                Website sowie zur Verbesserung unseres Angebotes.
              </p>
            </Section>

            <Section title="Kundenkonto Bestellungen">
              <h4 className="font-semibold mb-2">Kundenkonto</h4>
              <p>
                Bei der Eröffnung eines Kundenkontos erheben wir Ihre
                personenbezogenen Daten in dem dort angegebenen Umfang. Die
                Datenverarbeitung dient dem Zweck, Ihr Einkaufserlebnis zu
                verbessern und die Bestellabwicklung zu vereinfachen. Die
                Verarbeitung erfolgt auf Grundlage des Art. 6 Abs. 1 lit. a
                DSGVO mit Ihrer Einwilligung. Sie können Ihre Einwilligung
                jederzeit durch Mitteilung an uns widerrufen, ohne dass die
                Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf
                erfolgten Verarbeitung berührt wird. Ihr Kundenkonto wird
                anschließend gelöscht.
              </p>
              <h4 className="font-semibold mb-2 mt-4">
                Erhebung, Verarbeitung und Weitergabe personenbezogener Daten
                bei Bestellungen
              </h4>
              <p>
                Bei der Bestellung erheben und verarbeiten wir Ihre
                personenbezogenen Daten nur, soweit dies zur Erfüllung und
                Abwicklung Ihrer Bestellung sowie zur Bearbeitung Ihrer Anfragen
                erforderlich ist. Die Bereitstellung der Daten ist für den
                Vertragsschluss erforderlich. Eine Nichtbereitstellung hat zur
                Folge, dass kein Vertrag geschlossen werden kann. Die
                Verarbeitung erfolgt auf Grundlage des Art. 6 Abs. 1 lit. b
                DSGVO und ist für die Erfüllung eines Vertrags mit Ihnen
                erforderlich.
              </p>
              <p>
                Eine Weitergabe Ihrer Daten erfolgt dabei beispielsweise an die
                von Ihnen gewählten Versandunternehmen und Dropshipping
                Anbieter, Zahlungsdienstleister, Diensteanbieter für die
                Bestellabwicklung und IT-Dienstleister. In allen Fällen beachten
                wir strikt die gesetzlichen Vorgaben. Der Umfang der
                Datenübermittlung beschränkt sich auf ein Mindestmaß.
              </p>
            </Section>

            <Section title="Kontakt Bewertungen Newsletter">
              <h4 className="font-semibold mb-2">
                Erhebung und Verarbeitung bei Nutzung des Kontaktformulars
              </h4>
              <p>
                Bei der Nutzung des Kontaktformulars erheben wir Ihre
                personenbezogenen Daten (Name, E-Mail-Adresse, Nachrichtentext)
                nur in dem von Ihnen zur Verfügung gestellten Umfang. Die
                Datenverarbeitung dient dem Zweck der Kontaktaufnahme. Mit
                Absenden Ihrer Nachricht willigen Sie in die Verarbeitung der
                übermittelten Daten ein. Die Verarbeitung erfolgt auf Grundlage
                des Art. 6 Abs. 1 lit. a DSGVO mit Ihrer Einwilligung.
              </p>
              <p>
                Sie können Ihre Einwilligung jederzeit durch Mitteilung an uns
                widerrufen, ohne dass die Rechtmäßigkeit der aufgrund der
                Einwilligung bis zum Widerruf erfolgten Verarbeitung berührt
                wird. Ihre E-Mail-Adresse nutzen wir nur zur Bearbeitung Ihrer
                Anfrage. Ihre Daten werden anschließend gelöscht, sofern Sie der
                weitergehenden Verarbeitung und Nutzung nicht zugestimmt haben.
              </p>
              <h4 className="font-semibold mb-2 mt-4">Kundenbewertungen</h4>
              <p>
                Wir verarbeiten Ihre Daten zur Abwicklung von Kundenbewertungen.
                Die Verarbeitung erfolgt auf Grundlage des Art. 6 Abs. 1 lit. a
                DSGVO mit Ihrer Einwilligung. Sie können Ihre Einwilligung
                jederzeit durch Mitteilung an uns widerrufen, ohne dass die
                Rechtmäßigkeit der aufgrund der Einwilligung bis zum Widerruf
                erfolgten Verarbeitung berührt wird.
              </p>
              <h4 className="font-semibold mb-2 mt-4">
                Verwendung der E-Mail-Adresse für die Zusendung von Newslettern
              </h4>
              <p>
                Wir nutzen Ihre E-Mail-Adresse unabhängig von der
                Vertragsabwicklung ausschließlich für eigene Werbezwecke zum
                Newsletterversand, sofern Sie dem ausdrücklich zugestimmt haben.
                Die Verarbeitung erfolgt auf Grundlage des Art. 6 Abs. 1 lit. a
                DSGVO mit Ihrer Einwilligung. Sie können die Einwilligung
                jederzeit widerrufen, ohne dass die Rechtmäßigkeit der aufgrund
                der Einwilligung bis zum Widerruf erfolgten Verarbeitung berührt
                wird. Sie können dazu den Newsletter jederzeit unter Nutzung des
                entsprechenden Links im Newsletter oder durch Mitteilung an uns
                abbestellen. Ihre E-Mail-Adresse wird danach aus dem Verteiler
                entfernt.
              </p>
              <p>
                Ihre Daten werden dabei an einen Dienstleister für
                E-Mail-Marketing im Rahmen einer Auftragsverarbeitung
                weitergegeben. Eine Weitergabe an sonstige Dritte erfolgt nicht.
              </p>
              <h4 className="font-semibold mb-2">
                Verwendung der E‑Mail-Adresse für die Zusendung von
                Direktwerbung
              </h4>
              <p>
                Wir nutzen Ihre E‑Mail-Adresse, die wir im Rahmen des Verkaufes
                einer Ware oder Dienstleistung erhalten haben, für die
                elektronische Übersendung von Werbung für eigene Waren oder
                Dienstleistungen, die denen ähnlich sind, die Sie bereits bei
                uns erworben haben, soweit Sie dieser Verwendung nicht
                widersprochen haben. Die Bereitstellung der E-Mail-Adresse ist
                für den Vertragsschluss erforderlich. Eine Nichtbereitstellung
                hat zur Folge, dass kein Vertrag geschlossen werden kann. Die
                Verarbeitung erfolgt auf Grundlage des Art. 6 Abs. 1 lit. f
                DSGVO aus unserem überwiegenden berechtigten Interesse an
                Direktwerbung.{" "}
                <strong>
                  Sie können dieser Verwendung Ihrer E‑Mail-Adresse jederzeit
                  durch Mitteilung an uns widersprechen. Die Kontaktdaten für
                  die Ausübung des Widerspruchs finden Sie im Impressum.
                </strong>{" "}
                Sie können auch den dafür vorgesehenen Link in der Werbe-E-Mail
                nutzen. Hierfür entstehen keine anderen als die
                Übermittlungskosten nach den Basistarifen
              </p>
            </Section>
            <Section title="Zahlungsdienstleister">
              <h4 className="font-semibold mb-2 mt-4">PayPal</h4>
              <p>
                Alle PayPal-Transaktionen unterliegen der
                PayPal-Datenschutzerklärung. Diese finden Sie unter
                https://www.paypal.com/de/webapps/mpp/ua/privacy-full
              </p>
              <h4 className="font-semibold mb-2 mt-4">Amazon Payments</h4>
              <p>
                Wir verwenden auf unserer Website den Zahlungsdienst Amazon
                Payments der Amazon Payments Europe s.c.a. (38 avenue John F.
                Kennedy, L-1855 Luxemburg; &quot;Amazon Payments&quot;).
              </p>
              <p>
                Zur Einbindung dieses Zahlungsdienstes ist es erforderlich, dass
                Amazon Payments beim Aufruf der Website Daten (z.B. IP-Adresse,
                Gerätetyp, Betriebssystem, Browsertyp, Standort Ihres Geräts)
                sammelt, speichert und analysiert. Hierzu können auch Cookies
                eingesetzt werden. Die Cookies ermöglichen die Wiedererkennung
                Ihres Browsers.
              </p>
              <p>
                Diese Datenverarbeitung erfolgt auf Grundlage des Art. 6 Abs. 1
                lit. f DSGVO aus unserem überwiegenden berechtigten Interesse an
                einem kundenorientierten Angebot von verschiedenen Zahlarten.
              </p>
              <p>
                Mit Auswahl und Nutzung von &quot;Amazon Payments&quot; werden
                die zur Zahlungsabwicklung erforderlichen Daten an Amazon
                Payments übermittelt, um den Vertrag mit Ihnen mit der gewählten
                Zahlart erfüllen zu können. Diese Verarbeitung erfolgt auf
                Grundlage des Art. 6 Abs. 1 lit. b DSGVO.
              </p>
              <p>
                Nähere Informationen zur Datenverarbeitung bei Verwendung des
                Zahlungsdienstes Amazon Payments finden Sie in der dazugehörigen
                Datenschutzerklärung hier:
                https://pay.amazon.com/de/help/201212490
              </p>
              <h4 className="font-semibold mb-2 mt-4">
                Nutzung des Klarna Checkouts
              </h4>
              <p>
                Die Checkout-Lösung wird von der Klarna AB (Sveavägen 46, 111 34
                Stockholm, Schweden) zur Verfügung gestellt und nutzt Cookies,
                um Ihnen bei der Nutzung des Checkouts ein ideales, auf Sie
                zugeschnittenes Online-Erlebnis zu ermöglichen. Die Verarbeitung
                erfolgt auf Grundlage des Art. 6 Abs. 1 lit. a DSGVO mit Ihrer
                Einwilligung. Sie können Ihre Einwilligung jederzeit widerrufen,
                ohne dass die Rechtmäßigkeit der aufgrund der Einwilligung bis
                zum Widerruf erfolgten Verarbeitung berührt wird. Sie können
                dazu die Speicherung der Cookies durch die Auswahl
                entsprechender technischer Einstellungen Ihrer Browser-Software
                verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem
                Fall gegebenenfalls nicht sämtliche Funktionen dieser Website
                vollumfänglich werden nutzen können.
              </p>
              <p>
                Eine detaillierte Auflistung der Cookies und eine Erläuterung
                ihres jeweiligen Zwecks finden Sie hier{" "}
                <a
                  href="https://cdn.klarna.com/1.0/shared/content/policy/cookie/de_at/checkout.pdf"
                  className="text-blue-500"
                >
                  https://cdn.klarna.com/1.0/shared/content/policy/cookie/de_at/checkout.pdf
                </a>
                .
              </p>
            </Section>

            <Section title="Cookies">
              <div className="flex flex-col gap-2">
                <p>
                  Unsere Website verwendet Cookies. Cookies sind kleine
                  Textdateien, die im Internetbrowser bzw. vom Internetbrowser
                  auf dem Computersystem eines Nutzers gespeichert werden. Ruft
                  ein Nutzer eine Website auf, so kann ein Cookie auf dem
                  Betriebssystem des Nutzers gespeichert werden. Dieser Cookie
                  enthält eine charakteristische Zeichenfolge, die eine
                  eindeutige Identifizierung des Browsers beim erneuten Aufrufen
                  der Website ermöglicht.
                </p>
                <p>
                  Wir setzen diese Cookies zu dem Zweck ein, unser Angebot
                  nutzerfreundlicher, effektiver und sicherer zu machen. Des
                  Weiteren ermöglichen Cookies unseren Systemen, Ihren Browser
                  auch nach einem Seitenwechsel zu erkennen und Ihnen Services
                  anzubieten. Einige Funktionen unserer Internetseite können
                  ohne den Einsatz von Cookies nicht angeboten werden. Für diese
                  ist es erforderlich, dass der Browser auch nach einem
                  Seitenwechsel wiedererkannt wird.
                </p>
                <p>
                  Die Verarbeitung erfolgt auf Grundlage des Art. 6 Abs. 1 lit.
                  f DSGVO aus unserem überwiegenden berechtigten Interesse an
                  der Gewährleistung der optimalen Funktionalität der Website
                  sowie einer nutzerfreundlichen und effektiven Gestaltung
                  unseres Angebots.
                </p>
                <p>
                  Cookies werden auf Ihrem Rechner gespeichert. Daher haben Sie
                  die volle Kontrolle über die Verwendung von Cookies. Durch die
                  Auswahl entsprechender technischer Einstellungen in Ihrem
                  Internetbrowser können Sie vor dem Setzen von Cookies
                  benachrichtigt werden und über die Annahme einzeln entscheiden
                  sowie die Speicherung der Cookies und Übermittlung der
                  enthaltenen Daten verhindern. Bereits gespeicherte Cookies
                  können jederzeit gelöscht werden. Wir weisen Sie jedoch darauf
                  hin, dass Sie dann gegebenenfalls nicht sämtliche Funktionen
                  dieser Website vollumfänglich werden nutzen können.
                </p>
              </div>

              <div className="flex flex-col gap-2">
                Unter den nachstehenden Links können Sie sich informieren, wie
                Sie die Cookies bei den wichtigsten Browsern verwalten (u.a.
                auch deaktivieren) können:
                <p>
                  Chrome Browser:
                  https://support.google.com/accounts/answer/61416?hl=de
                </p>
                <p>
                  Internet Explorer:
                  https://support.microsoft.com/de-de/help/17442/windows-internet-explorer-delete-manage-cookies
                </p>
                <p>
                  Mozilla Firefox:
                  https://support.mozilla.org/de/kb/cookies-erlauben-und-ablehnen
                </p>
                <p>
                  Safari:
                  https://support.apple.com/de-de/guide/safari/manage-cookies-and-website-data-sfri11471/mac
                </p>
              </div>
            </Section>

            <Section title="Analyse Werbung Affiliate">
              <div>
                Die in diesem Abschnitt nachfolgend dargestellten
                Datenverarbeitungen, insbesondere das Setzen von Cookies,
                erfolgen auf Grundlage des Art. 6 Abs. 1 lit. f DSGVO aus
                unserem überwiegenden berechtigten Interesse:
                <p>
                  - an der bedarfsgerechten und zielgerichteten Gestaltung der
                  Website, bspw. bei Analyse- und Statistik-Tools - die
                  Seitenbesucher zielgerichtet mit interessenbezogener Werbung
                  anzusprechen, bspw. bei Conversion-Tracking - an der
                  Erfolgsmessung der Partnerwerbung und der damit einhergehenden
                  korrekten Abrechnung der Provisionen im Rahmen des
                  Partnerprogramms
                </p>
              </div>

              <p className="mt-4 text-sm font-semibold">
                Sie haben das Recht aus Gründen, die sich aus Ihrer besonderen
                Situation ergeben, jederzeit dieser auf Art. 6 Abs. 1 lit. f
                DSGVO beruhenden Verarbeitungen Sie betreffender
                personenbezogener Daten zu widersprechen.
              </p>
              <h4 className="font-semibold mb-2">
                Verwendung von Google Analytics
              </h4>
              <p>
                Wir verwenden auf unserer Website den Webanalysedienst Google
                Analytics der Google LLC. (1600 Amphitheatre Parkway, Mountain
                View, CA 94043, USA; &quot;Google&quot;).
              </p>
              <p>
                Soweit Sie Ihren gewöhnlichen Aufenthalt im Europäischen
                Wirtschaftsraum oder der Schweiz haben, ist Google Ireland
                Limited (Gordon House, Barrow Street, Dublin 4, Irland) der für
                Ihre Daten zuständige Verantwortliche. Google Ireland Limited
                ist demnach das mit Google verbundene Unternehmen, welches für
                die Verarbeitung Ihrer Daten und die Einhaltung der anwendbaren
                Datenschutzgesetze verantwortlich ist.
              </p>

              <p>
                Die Datenverarbeitung dient dem Zweck der Analyse dieser Website
                und ihrer Besucher. Dazu wird Google im Auftrag des Betreibers
                dieser Website die gewonnenen Informationen benutzen, um Ihre
                Nutzung der Website auszuwerten, um Reports über die
                Websiteaktivitäten zusammenzustellen und um weitere, mit der
                Websitenutzung und der Internetnutzung verbundene
                Dienstleistungen gegenüber dem Websitebetreiber zu erbringen.
                Die im Rahmen von Google Analytics von Ihrem Browser
                übermittelte IP-Adresse wird nicht mit anderen Daten von Google
                zusammengeführt.
              </p>
              <p>
                Google Analytics verwendet Cookies, die eine Analyse der
                Benutzung der Website durch Sie ermöglichen. Die durch die
                Cookies erzeugten Informationen über Ihre Benutzung dieser
                Website werden in der Regel an einen Server von Google in den
                USA übertragen und dort gespeichert. Auf dieser Website ist die
                IP-Anonymisierung aktiviert. Dadurch wird Ihre IP-Adresse von
                Google innerhalb von Mitgliedstaaten der Europäischen Union oder
                in anderen Vertragsstaaten des Abkommens über den Europäischen
                Wirtschaftsraum zuvor gekürzt. Nur in Ausnahmefällen wird die
                volle IP-Adresse an einen Server von Google in den USA
                übertragen und dort gekürzt. Google hat sich nach dem
                US-EU-Datenschutzabkommen “Privacy Shield” zertifiziert und
                damit verpflichtet, die europäischen Datenschutzrichtlinien
                einzuhalten.
              </p>
              <div>
                Sie können die Erfassung der durch das Cookie erzeugten und auf
                Ihre Nutzung der Website bezogenen Daten (inkl. Ihrer
                IP-Adresse) an Google sowie die Verarbeitung dieser Daten durch
                Google verhindern, indem Sie das unter dem folgenden Link
                verfügbare Browser-Plug-in herunterladen und installieren{" "}
                <a
                  href="https://tools.google.com/dlpage/gaoptout?hl=de"
                  className="text-blue-500"
                >
                  https://tools.google.com/dlpage/gaoptout?hl=de
                </a>
                <p className="mt-2">
                  Um die Datenerfassung und ‑speicherung durch Google Analytics
                  geräteübergreifend zu verhindern, können Sie einen
                  Opt-Out-Cookie setzen. Opt-Out-Cookies verhindern die
                  zukünftige Erfassung Ihrer Daten beim Besuch dieser Website.
                  Sie müssen das Opt-Out auf allen genutzten Systemen und
                  Geräten durchführen, damit dies umfassend wirkt. Wenn Sie das
                  Opt-out-Cookie löschen, werden wieder Anfragen an Google
                  übermittelt. Wenn Sie hier klicken, wird das Opt-Out-Cookie
                  gesetzt: Google Analytics deaktivieren.
                </p>
                <p>
                  Nähere Informationen zu Nutzungsbedingungen und Datenschutz
                  finden Sie unter{" "}
                  <a
                    href="https://www.google.com/analytics/terms/de.html"
                    className="text-blue-500"
                  >
                    https://www.google.com/analytics/terms/de.html
                  </a>{" "}
                  bzw. unter
                  <a
                    href="https://www.google.de/intl/de/policies/"
                    className="text-blue-500"
                  >
                    https://www.google.de/intl/de/policies/
                  </a>
                  .
                </p>
              </div>
              <h4 className="font-semibold mb-2 mt-4">
                Verwendung von Mouseflow
              </h4>
              <p>
                Wir verwenden auf unserer Website das Analysetool der Mouseflow
                ApS (Flaesketorvet 68, 1711 Kopenhagen, Dänemark;
                &quot;Mouseflow&quot;).
              </p>
              <p>
                Die Datenverarbeitung dient dem Zweck der Analyse dieser Website
                und ihrer Besucher. Dazu werden Daten zu Marketing- und
                Optimierungszwecken gesammelt und gespeichert. Aus diesen Daten
                können unter einem Pseudonym Nutzungsprofile erstellt werden.
                Hierzu können Cookies eingesetzt werden.
              </p>
              <p>
                Bei dem Webtracking-Tool mouseflow werden zufällig ausgewählte
                einzelne Besuche (nur mit anonymisierter IP-Adresse)
                aufgezeichnet. Hierbei entsteht ein Protokoll der Mausbewegungen
                und Klicks mit der Absicht einzelne Website-Besuche
                stichprobenartig abzuspielen und potentielle Verbesserungen für
                die Website daraus abzuleiten. Die Cookies ermöglichen die
                Wiedererkennung des Internet-Browsers. Die mit den mouseflow
                ‑Technologien erhobenen Daten werden ohne die gesondert erteilte
                Zustimmung des Betroffenen nicht dazu benutzt, den Besucher
                dieser Website persönlich zu identifizieren und nicht mit
                personenbezogenen Daten über den Träger des Pseudonyms
                zusammengeführt.
              </p>
              <p>
                Um die Datenerfassung und ‑speicherung durch Mouseflow
                geräteübergreifend zu verhindern, können Sie hier
                https://www.mouseflow.com/opt-out/ einen Opt-out-Cookie setzen.
                Opt-out-Cookies verhindern die zukünftige Erfassung Ihrer Daten
                beim Besuch dieser Website. Sie müssen das Opt-Out auf allen
                genutzten Systemen und Geräten durchführen, damit dies umfassend
                wirkt. Wenn Sie das Opt-out-Cookie löschen, werden wieder
                Anfragen an Mouseflow übermittelt.
              </p>
              <h4 className="font-semibold mb-2 mt-4">
                Verwendung der Remarketing- oder “Ähnliche Zielgruppen”-Funktion
                von Google
              </h4>
              <p>
                Wir verwenden auf unserer Website die Remarketing- oder
                &quot;Ähnliche Zielgruppen&quot;- Funktion der Google LLC (1600
                Amphitheatre Parkway, Mountain View, CA 94043, USA;
                &quot;Google&quot;).
              </p>
              <p>
                Soweit Sie Ihren gewöhnlichen Aufenthalt im Europäischen
                Wirtschaftsraum oder der Schweiz haben, ist Google Ireland
                Limited (Gordon House, Barrow Street, Dublin 4, Irland) der für
                Ihre Daten zuständige Verantwortliche. Google Ireland Limited
                ist demnach das mit Google verbundene Unternehmen, welches für
                die Verarbeitung Ihrer Daten und die Einhaltung der anwendbaren
                Datenschutzgesetze verantwortlich ist.
              </p>
              <p>
                Die Anwendung dient dem Zweck der Analyse des Besucherverhaltens
                und der Besucherinteressen.
              </p>
              <p>
                Zur Durchführung der Analyse der Websiten-Nutzung, welche die
                Grundlage für die Erstellung der interessenbezogenen
                Werbeanzeigen bildet, setzt Google Cookies ein. Über die Cookies
                werden die Besuche der Website sowie anonymisierte Daten über
                die Nutzung der Website erfasst. Es erfolgt keine Speicherung
                von personenbezogenen Daten der Besucher der Website. Besuchen
                Sie nachfolgend eine andere Website im Google Display-Netzwerk
                werden Ihnen Werbeeinblendungen angezeigt, die mit hoher
                Wahrscheinlichkeit zuvor aufgerufene Produkt- und
                Informationsbereiche berücksichtigen.
              </p>
              <p>
                Ihre Daten werden gegebenenfalls in die USA übermittelt. Google
                hat sich nach dem US-EU-Datenschutzabkommen “Privacy Shield”
                zertifiziert und damit verpflichtet, die europäischen
                Datenschutzrichtlinien einzuhalten.
              </p>
              <p>
                Sie können die Verwendung von Cookies durch Google dauerhaft
                deaktivieren, indem Sie dem nachfolgenden Link folgen und das
                dort bereitgestellte Plug-In herunterladen und installieren:
                <a
                  href="https://support.google.com/ads/answer/7395996?hl=de"
                  className="text-blue-500"
                >
                  https://support.google.com/ads/answer/7395996?hl=de
                </a>
              </p>
              <p>
                Alternativ können Sie die Verwendung von Cookies durch
                Drittanbieter verhindern, indem sie die Deaktivierungsseite der
                Netzwerkwerbeinitiative (Network Advertising Initiative) unter
                <a
                  href="https://www.networkadvertising.org/choices/"
                  className="text-blue-500"
                >
                  https://www.networkadvertising.org/choices/
                </a>{" "}
                aufrufen und die dort genannten weiterführenden Information zum
                Opt-Out umsetzen.
              </p>
              <p>
                Nähere Informationen zu Google Remarketing sowie die
                dazugehörige Datenschutzerklärung finden Sie unter:
                <a
                  href="https://www.google.com/privacy/ads/"
                  className="text-blue-500"
                >
                  https://www.google.com/privacy/ads/
                </a>
              </p>
              <h4 className="font-semibold mb-2 mt-4">
                Verwendung von Google Ads Conversion-Tracking
              </h4>
              <p>
                Wir verwenden auf unserer Website das Online-Werbeprogramm
                &quot;Google Ads&quot; und in diesem Rahmen Conversion-Tracking
                (Besuchsaktionsauswertung). Das Google Conversion Tracking ist
                ein Analysedienst der Google LLC (1600 Amphitheatre Parkway,
                Mountain View, CA 94043, USA; &quot;Google&quot;).
              </p>
              <p>
                Soweit Sie Ihren gewöhnlichen Aufenthalt im Europäischen
                Wirtschaftsraum oder der Schweiz haben, ist Google Ireland
                Limited (Gordon House, Barrow Street, Dublin 4, Irland) der für
                Ihre Daten zuständige Verantwortliche. Google Ireland Limited
                ist demnach das mit Google verbundene Unternehmen, welches für
                die Verarbeitung Ihrer Daten und die Einhaltung der anwendbaren
                Datenschutzgesetze verantwortlich ist.
              </p>
              <p>
                Wenn Sie auf eine von Google geschaltete Anzeige klicken, wird
                ein Cookie für das Conversion-Tracking auf Ihrem Rechner
                abgelegt. Diese Cookies haben eine begrenzte Gültigkeit,
                enthalten keine personenbezogenen Daten und dienen somit nicht
                der persönlichen Identifizierung. Wenn Sie bestimmte Seiten
                unserer Website besuchen und das Cookie noch nicht abgelaufen
                ist, können Google und wir erkennen, dass Sie auf die Anzeige
                geklickt haben und zu dieser Seite weitergeleitet wurden. Jeder
                Google Ads-Kunde erhält ein anderes Cookie. Somit besteht keine
                Möglichkeit, dass Cookies über die Websites von Ads-Kunden
                nachverfolgt werden können.
              </p>
              <p>
                Die Informationen, die mit Hilfe des Conversion-Cookie eingeholt
                werden, dienen dem Zweck Conversion-Statistiken zu erstellen.
                Hierbei erfahren wir die Gesamtanzahl der Nutzer, die auf eine
                unserer Anzeigen geklickt haben und zu einer mit einem
                Conversion-Tracking-Tag versehenen Seite weitergeleitet wurden.
                Wir erhalten jedoch keine Informationen, mit denen sich Nutzer
                persönlich identifizieren lassen. Ihre Daten werden
                gegebenenfalls in die USA übermittelt. Google hat sich nach dem
                US-EU-Datenschutzabkommen „Privacy Shield“ zertifiziert und
                damit verpflichtet, die europäischen Datenschutzrichtlinien
                einzuhalten.
              </p>
              <p>
                Sie können in den Einstellungen für Werbung bei Google für Sie
                personalisierte Werbung deaktivieren. Eine Anleitung dazu finden
                Sie unter
                <a
                  href="https://support.google.com/ads/answer/2662922?hl=de"
                  className="text-blue-500"
                >
                  https://support.google.com/ads/answer/2662922?hl=de
                </a>
              </p>
              <p>
                Alternativ können Sie die Verwendung von Cookies durch
                Drittanbieter verhindern, indem Sie die Deaktivierungsseite der
                Netzwerkwerbeinitiative (Network Advertising Initiative) unter
                <a
                  href="https://www.networkadvertising.org/choices/"
                  className="text-blue-500"
                >
                  https://www.networkadvertising.org/choices/
                </a>{" "}
                aufrufen und die dort genannten weiterführenden Information zum
                Opt-Out umsetzen.
              </p>
              <p>
                Sie werden sodann nicht in die Conversion-Tracking Statistiken
                aufgenommen. Nähere Informationen sowie die Datenschutzerklärung
                von Google finden Sie unter: {}
                <a
                  href="https://www.google.de/policies/privacy/"
                  className="text-blue-500"
                >
                  https://www.google.de/policies/privacy/
                </a>
              </p>
              <h4 className="font-semibold mb-2 mt-4">
                Verwendung von Google AdSense
              </h4>
              <p>
                Wir verwenden auf unserer Website die AdSense-Funktion der
                Google LLC (1600 Amphitheatre Parkway, Mountain View, CA 94043,
                USA; &quot;Google&quot;).
              </p>
              <p>
                Soweit Sie Ihren gewöhnlichen Aufenthalt im Europäischen
                Wirtschaftsraum oder der Schweiz haben, ist Google Ireland
                Limited (Gordon House, Barrow Street, Dublin 4, Irland) der für
                Ihre Daten zuständige Verantwortliche. Google Ireland Limited
                ist demnach das mit Google verbundene Unternehmen, welches für
                die Verarbeitung Ihrer Daten und die Einhaltung der anwendbaren
                Datenschutzgesetze verantwortlich ist.
              </p>
              <p>
                Die Datenverarbeitung dient dem Zweck, Werbeflächen auf der
                Website zu vermieten und auf diesen die Besucher der Website
                zielgerichtet mit interessenbezogener Werbung anzusprechen.
              </p>
              <p>
                Mittels dieser Funktion werden den Besuchern der Website des
                Anbieters personalisierte, interessenbezogene Werbung-Anzeigen
                aus dem Google Display-Netzwerk geschaltet. Dabei verwendet
                Google Cookies, die eine Analyse der Benutzung der Website durch
                Sie ermöglichen.
              </p>
              <p>
                Die durch den Cookie erzeugten Informationen über Ihre Benutzung
                dieser Website werden in der Regel an einen Server von Google in
                den USA übertragen und dort gespeichert. Google wird diese
                Informationen gegebenenfalls an Dritte übertragen, sofern dies
                gesetzlich vorgeschrieben ist oder soweit Dritte diese Daten im
                Auftrag von Google verarbeiten. Google wird in keinem Fall Ihre
                IP-Adresse mit anderen Daten von Google in Verbindung bringen.
                Google hat sich nach dem US-EU-Datenschutzabkommen “Privacy
                Shield” zertifiziert und damit verpflichtet, die europäischen
                Datenschutzrichtlinien einzuhalten.
              </p>
              <p>
                Sie können die Verwendung von Cookies durch Google dauerhaft
                deaktivieren, indem Sie dem nachfolgenden Link folgen und das
                dort bereitgestellte Plug-In herunterladen und installieren:
                <a
                  href="https://support.google.com/ads/answer/7395996?hl=de"
                  className="text-blue-500"
                >
                  https://support.google.com/ads/answer/7395996?hl=de
                </a>
              </p>
              <p>
                Alternativ können Sie die Verwendung von Cookies durch
                Drittanbieter verhindern, indem sie die Deaktivierungsseite der
                Netzwerkwerbeinitiative (Network Advertising Initiative) unter
                <a
                  href="https://www.networkadvertising.org/choices/"
                  className="text-blue-500"
                >
                  https://www.networkadvertising.org/choices/
                </a>{" "}
                aufrufen und die dort genannten weiterführenden Information zum
                Opt-Out umsetzen.
              </p>
              <p>
                Nähere Informationen sowie die Datenschutzerklärung von Google
                finden Sie unter:
                <a
                  href="https://www.google.com/policies/technologies/ads/"
                  className="text-blue-500"
                >
                  https://www.google.com/policies/technologies/ads/
                </a>
                ,
                <a
                  href="https://www.google.de/policies/privacy/"
                  className="text-blue-500"
                >
                  https://www.google.de/policies/privacy/
                </a>
              </p>

              <h4 className="font-semibold mb-2 mt-4">
                Verwendung des ADCELL Partnerprogramms
              </h4>
              <p>
                Wir nutzen das Partnerprogramm &quot;ADCELL&quot; der Firstlead
                GmbH (Rosenfelder Str. 15–16, 10315 Berlin; &quot;ADCELL&quot;).
              </p>
              <p>
                Wenn Sie auf eine mit Partnerlink versehene Anzeige klicken,
                wird von ADCELL ein Cookie für das Conversion-Tracking auf Ihrem
                Rechner abgelegt. Die Cookies dienen dem Zweck der korrekten
                Abrechnung im Rahmen des Partnerprogramms durch Erfassung des
                Erfolgs eines Werbemittels. Durch die Cookies wird erkannt, dass
                Sie auf die Anzeige geklickt haben und die Herkunft der
                Bestellung beim Werbenden kann nachvollzogen werden. Außerdem
                verwendet ADCELL so genannte Trackingpixel. Durch diese lassen
                sich Informationen wie der Besucherverkehr auf den Seiten
                auswerten.
              </p>
              <p>
                Die durch Cookies und Trackingpixel erzeugten Informationen über
                die Benutzung dieser Website (einschließlich der IP-Adresse) und
                Auslieferung von Werbeformaten werden an einen Server von ADCELL
                übertragen und dort gespeichert. Unter anderem kann ADCELL
                erkennen, dass der Partnerlink auf dieser Website geklickt
                wurde. ADCELL kann diese (anonymisierten) Informationen unter
                bestimmten Umständen an Vertragspartner weitergeben, jedoch
                werden Daten wie bspw. die IP-Adresse nicht mit anderen
                gespeicherten Daten zusammengeführt.
              </p>
              <p>
                Sie können das Tracking durch ADCELL hier
                <a
                  href="https://www.adcell.de/datenschutz"
                  className="text-blue-500"
                >
                  https://www.adcell.de/datenschutz
                </a>{" "}
                deaktivieren. Sie werden sodann nicht in die Conversion-Tracking
                Statistiken aufgenommen.
              </p>
              <p>
                Sie können die Speicherung von Cookies durch die Auswahl
                entsprechender technischer Einstellungen Ihrer Browser-Software
                verhindern; wir weisen Sie jedoch darauf hin, dass Sie in diesem
                Fall gegebenenfalls nicht sämtliche Funktionen dieser Website
                vollumfänglich werden nutzen können.
              </p>
              <h4 className="font-semibold mb-2 mt-4">
                Verwendung des Amazon Partnerprogramms
              </h4>
              <p>
                Wir nutzen das Partnerprogramm &quot;AmazonPartnerNet&quot; der
                Amazon EU S.a.r.l. (5 Rue Plaetis, L‑2338 Luxemburg;
                &quot;Amazon&quot;).
              </p>
              <p>
                Wir haben auf unserer Website Werbeanzeigen als Links zu
                Angeboten auf verschiedenen Amazon-Webseiten eingerichtet.
                Amazon verwendet Cookies. Die Cookies dienen dem Zweck der
                korrekten Abrechnung im Rahmen des Partnerprogramms. Durch die
                Cookies kann Amazon feststellen, dass Sie auf einen Anzeige-Link
                geklickt haben und kann die Herkunft der Bestellung, die über
                den Werbe-Link generiert wurde, nachvollziehen. Sie können die
                Speicherung von Cookies durch die Auswahl entsprechender
                technischer Einstellungen Ihrer Browser-Software verhindern; wir
                weisen Sie jedoch darauf hin, dass Sie in diesem Fall
                gegebenenfalls nicht sämtliche Funktionen dieser Website
                vollumfänglich werden nutzen können. Sie werden sodann nicht in
                die Conversion-Tracking Statistiken aufgenommen.
              </p>
              <p>
                Die Datenschutzerklärung mit ausführlichen Informationen zur
                Verwendung der Daten durch Amazon finden Sie unter
                <a
                  href="https://www.amazon.de/gp/help/customer/display.html/ref=footer_privacy?ie=UTF8&nodeId=3312401"
                  className="text-blue-500"
                >
                  https://www.amazon.de/gp/help/customer/display.html/ref=footer_privacy?ie=UTF8&nodeId=3312401
                </a>
              </p>
            </Section>

            <Section title="Plug-ins">
              <h4 className="font-semibold mb-2">
                Verwendung von Social Plug-ins mittels &quot;Shariff&quot;
              </h4>
              <p>
                Wir verwenden auf unserer Website Plug-ins sozialer Netzwerke.
                Damit Sie die Kontrolle über Ihre Daten behalten, nutzen wir die
                datenschutzsichere &quot;Shariff&quot;-Schaltflächen. Ohne Ihre
                ausdrückliche Zustimmung werden keine Verknüpfungen zu den
                Servern der sozialen Netzwerke hergestellt und folglich keine
                Daten übermittelt.
              </p>
              <p>
                &quot;Shariff&quot; ist eine Entwicklung der Spezialisten der
                Computerzeitschrift c&apos;t. Es ermöglicht mehr Privatsphäre im
                Netz und ersetzt die üblichen &quot;Share&quot;-Buttons der
                sozialen Netzwerke. Mehr Informationen zum Shariff-Projekt
                finden Sie hier
                <a
                  href="https://www.heise.de/ct/artikel/Shariff-Social-Media-Buttons-mit-Datenschutz-2467514.html"
                  className="text-blue-500"
                >
                  https://www.heise.de/ct/artikel/Shariff-Social-Media-Buttons-mit-Datenschutz-2467514.html
                </a>
                . Wenn Sie die Buttons anklicken erscheint ein Popup-Fenster, in
                dem Sie sich mit Ihren Daten beim jeweiligen Anbieter einloggen
                können. Erst nach diesem aktiven Login durch Sie wird eine
                direkte Verbindung zu den sozialen Netzwerken hergestellt.
              </p>
              <p>
                Durch Ihr Login geben Sie Ihre Zustimmung zur Übertragung Ihrer
                Daten an den jeweiligen Social Media Anbieter. Hierbei werden
                u.a. sowohl Ihre IP-Adresse als auch die Information, welche
                unserer Seiten Sie besucht haben übermittelt. Sollten Sie
                gleichzeitig mit einem oder mehrerer Ihrer sozialen Netzwerk
                Konten verbunden sein, werden die gesammelten Informationen auch
                Ihren entsprechenden Profilen zugeordnet. Diese Zuordnung können
                Sie nur dadurch verhindern, dass Sie sich vor dem Besuch unserer
                Website und vor Aktivierung der Schaltflächen aus Ihren Social
                Media Konten ausloggen. Nachstehend benannte soziale Netzwerke
                sind mittels der &quot;Shariff&quot;-Funktion eingebunden.
              </p>
              <p>
                Nähere Informationen zu Umfang und Zweck der Erhebung und
                Nutzung der Daten sowie über Ihre diesbezüglichen Rechte und
                Möglichkeiten zum Schutz Ihrer Privatsphäre finden Sie in den
                verlinkten Datenschutzhinweisen der Anbieter.
              </p>
              <p>
                Facebook der Facebook Inc. (1601 S. California Ave, Palo Alto,
                CA 94304, USA) https://www.facebook.com/policy.php
              </p>
              <p>
                Twitter der Twitter Inc. (1355 Market Street, Suite 900, San
                Francisco, CA 94107, USA) https://twitter.com/privacy
              </p>
              <p>
                Pinterest der Pinterest Inc. (635 High Street, Palo Alto, CA,
                94301, USA) https://about.pinterest.com/de/privacy-policy
              </p>

              <h4 className="font-semibold mb-2 mt-4">
                Verwendung von YouTube
              </h4>
              <p>
                Wir verwenden auf unserer Website die Funktion zur Einbettung
                von YouTube-Videos der Google Ireland Limited (Gordon House,
                Barrow Street, Dublin 4, Irland; &quot;YouTube&quot;).YouTube
                ist ein mit der Google LLC (1600 Amphitheatre Parkway, Mountain
                View, CA 94043, USA; &quot;Google&quot;) verbundenes
                Unternehmen. Die Funktion zeigt bei YouTube hinterlegte Videos
                in einem iFrame auf der Website an. Dabei ist die Option
                „Erweiterter Datenschutzmodus&quot; aktiviert. Dadurch werden
                von YouTube keine Website an. Dabei ist die Option
                &quot;Erweiterter Datenschutzmodus&quot; aktiviert. Dadurch
                werden von YouTube keine Informationen über die Besucher der
                Website gespeichert. Erst wenn Sie sich ein Video ansehen,
                werden Informationen darüber an YouTube übermittelt und dort
                gespeichert. Ihre Daten werden übermittelt und dort gespeichert.
                Ihre Daten werden gegebenenfalls in die USA übermittelt. Google
                hat sich nach dem US-EU-Datenschutzabkommen &quot;Privacy
                Shield&quot; zertifiziert und damit verpflichtet, die
                europäischen Datenschutzrichtlinien einzuhalten.
              </p>
              <p>
                Nähere Informationen zur Erhebung und Nutzung der Daten durch
                YouTube und Google, über Ihre diesbezüglichen Rechte und
                Möglichkeiten zum Schutz Ihrer Privatsphäre finden Sie in den
                Datenschutzhinweisen von YouTube
                (https://www.youtube.com/t/privacy).
              </p>

              <h4 className="font-semibold mb-2 mt-4">Verwendung von Vimeo</h4>
              <p>
                Wir verwenden auf unserer Website Plug-ins der Vimeo Inc. (555
                West 18th Street New York, New York 10011, USA;
                &quot;Vimeo&quot;) zur Einbindung von Videos des Portals
                &quot;Vimeo&quot;.
              </p>
              <p>
                Wenn Sie mit einem solchen Plug-in versehene Seiten unserer
                Website aufrufen, wird eine Verbindung zu den Servern von Vimeo
                hergestellt und dabei das Plug-in durch Mitteilung an Ihren
                Browser auf der Seite dargestellt. Hierdurch wird an die Server
                von Vimeo sowohl Ihre IP-Adresse als auch die Information,
                welche unserer Seiten Sie besucht haben, übermittelt.
              </p>
              <p>
                Sind Sie dabei bei Vimeo eingeloggt, ordnet Vimeo diese
                Information Ihrem persönlichen Benutzerkonto zu. Bei der Nutzung
                der Plug-in-Funktionen (z.B. durch Start eines Videos durch
                Betätigung des entsprechenden Buttons) werden auch diese
                Informationen Ihrem Vimeo-Konto zugeordnet.
              </p>
              <p>
                Ihre Daten werden gegebenenfalls in die USA übermittelt. Vimeo
                hat sich nach dem US-EU-Datenschutzabkommen &quot;Privacy
                Shield&quot; zertifiziert und damit verpflichtet, die
                europäischen Datenschutzrichtlinien einzuhalten.
              </p>
              <p>
                Die Verarbeitung erfolgt auf Grundlage des Art. 6 Abs. 1 lit. f
                DSGVO aus dem berechtigten Interesse von Vimeo an Marktanalyse
                sowie daran seine Dienste bedarfsgerecht und zielgerichtet zu
                verbessern. Wenn Sie nicht möchten, dass Vimeo die gesammelten
                Informationen unmittelbar Ihrem Vimeo-Konto zuordnet, müssen Sie
                sich vor dem Besuch unserer Website bei Vimeo ausloggen.
              </p>
              <p>
                Nähere Informationen zu Zweck und Umfang der Erhebung sowie zur
                weiter gehenden Nutzung und Verarbeitung der Daten durch Vimeo
                sowie über Ihre diesbezüglichen Rechte und Möglichkeiten zum
                Schutz Ihrer Privatsphäre finden Sie in den Datenschutzhinweisen
                von Vimeo: https://vimeo.com/privacy
              </p>

              <h4 className="font-semibold mb-2 mt-4">
                Verwendung von GoogleMaps
              </h4>
              <p>
                Wir verwenden auf unserer Website die Funktion zur Einbettung
                von GoogleMaps-Karten der Google LLC (1600 Amphitheatre Parkway,
                Mountain View, CA 94043, USA; &quot;Google&quot;).
              </p>
              <p>
                Soweit Sie Ihren gewöhnlichen Aufenthalt im Europäischen
                Wirtschaftsraum oder der Schweiz haben, ist Google Ireland
                Limited (Gordon House, Barrow Street, Dublin 4, Irland) der für
                Ihre Daten zuständige Verantwortliche. Google Ireland Limited
                ist demnach das mit Google verbundene Unternehmen, welches für
                die Verarbeitung Ihrer Daten und die Einhaltung der anwendbaren
                Datenschutzgesetze verantwortlich ist.
              </p>
              <p>
                Die Funktion ermöglicht die visuelle Darstellung von
                geographischen Informationen und interaktiven Landkarten. Dabei
                werden von Google bei Aufrufen der Seiten, in die
                GoogleMaps-Karten eingebunden sind, auch Daten der Besucher der
                Websites erhoben, verarbeitet und genutzt.
              </p>
              <p>
                Ihre Daten werden dabei gegebenenfalls auch in die USA
                übermittelt. Google hat sich nach dem US-EU-Datenschutzabkommen
                &quot;Privacy Shield&quot; zertifiziert und damit verpflichtet,
                die europäischen Datenschutzrichtlinien einzuhalten.
              </p>
              <p>
                Die Verarbeitung erfolgt auf Grundlage des Art. 6 Abs. 1 lit. f
                DSGVO aus dem berechtigten Interesse an der bedarfsgerechten und
                zielgerichteten Gestaltung unserer Website.
              </p>
              <p>
                Nähere Informationen zur Erhebung und Nutzung der Daten durch
                Google finden Sie in den Datenschutzhinweisen von Google unter
                https://www.google.com/privacypolicy.html. Dort haben Sie auch
                im Datenschutzcenter die Möglichkeit Ihre Einstellungen zu
                verändern, so dass Sie Ihre von Google verarbeiteten Daten
                verwalten und schützen können.
              </p>

              <h4 className="font-semibold mb-2 mt-4">
                Verwendung von Google reCAPTCHA
              </h4>
              <p>
                Wir verwenden auf unserer Website den Dienst reCAPTCHA der
                Google LLC (1600 Amphitheatre Parkway, Mountain View, CA 94043,
                USA; &quot;Google&quot;).
              </p>
              <p>
                Soweit Sie Ihren gewöhnlichen Aufenthalt im Europäischen
                Wirtschaftsraum oder der Schweiz haben, ist Google Ireland
                Limited (Gordon House, Barrow Street, Dublin 4, Irland) der für
                Ihre Daten zuständige Verantwortliche. Google Ireland Limited
                ist demnach das mit Google verbundene Unternehmen, welches für
                die Verarbeitung Ihrer Daten und die Einhaltung der anwendbaren
                Datenschutzgesetze verantwortlich ist. Die Abfrage dient dem
                Zweck der Unterscheidung der Eingabe durch einen Menschen oder
                durch automatisierte, maschinelle Verarbeitung. Dazu wird Ihre
                Eingabe an Google übermittelt und dort weiterverwendet.
                Zusätzlich werden die IP-Adresse und gegebenenfalls weitere von
                Google für den Dienst reCAPTCHA benötigte Daten an Google
                übertragen. Diese Daten werden von Google innerhalb der
                Europäischen Union verarbeitet und gegebenenfalls auch in die
                USA übermittelt. Google hat sich nach dem
                US-EU-Datenschutzabkommen &quot;Privacy Shield&quot;
                zertifiziert und damit verpflichtet, die europäischen
                Datenschutzrichtlinien einzuhalten.
              </p>
              <p>
                Die Verarbeitung erfolgt auf Grundlage des Art. 6 Abs. 1 lit. f
                DSGVO aus dem berechtigten Interesse unsere Website vor
                automatisierter Ausspähung, Missbrauch und SPAM zu schützen.
              </p>
              <p>
                Nähere Informationen zu Google reCAPTCHA sowie die dazugehörige
                Datenschutzerklärung finden Sie unter:
                https://www.google.com/recaptcha/intro/android.html sowie
                https://www.google.com/privacy.
              </p>
            </Section>

            <Section title="Betroffenenrechte und Speicherdauer">
              <h4 className="font-semibold mb-2">Dauer der Speicherung</h4>
              <p>
                Nach vollständiger Vertragsabwicklung werden die Daten zunächst
                für die Dauer der Gewährleistungsfrist, danach unter
                Berücksichtigung gesetzlicher, insbesondere steuer- und
                handelsrechtlicher Aufbewahrungsfristen gespeichert und dann
                nach Fristablauf gelöscht, sofern Sie der weitergehenden
                Verarbeitung und Nutzung nicht zugestimmt haben.
              </p>

              <h4 className="font-semibold mb-2 mt-4">
                Rechte der betroffenen Person
              </h4>
              <p>
                Ihnen stehen bei Vorliegen der gesetzlichen Voraussetzungen
                folgende Rechte nach Artt. 15 bis 20 DSGVO zu: Recht auf
                Auskunft, auf Berichtigung, auf Löschung, auf Einschränkung der
                Verarbeitung, auf Datenübertragbarkeit.
              </p>
              <p>
                Außerdem steht Ihnen nach Art. 21 Abs. 1 DSGVO ein
                Widerspruchsrecht gegen die Verarbeitungen zu, die auf Art. 6
                Abs. 1 f DSGVO beruhen, sowie gegen die Verarbeitung zum Zwecke
                von Direktwerbung.
              </p>
              <p>
                Kontaktieren Sie uns auf Wunsch. Die Kontaktdaten finden Sie in
                unserem Impressum.
              </p>

              <h4 className="font-semibold mb-2 mt-4">
                Beschwerderecht bei der Aufsichtsbehörde
              </h4>
              <p>
                Sie haben gemäß Art. 77 DSGVO das Recht, sich bei der
                Aufsichtsbehörde zu beschweren, wenn Sie der Ansicht sind, dass
                die Verarbeitung Ihrer personenbezogenen Daten nicht rechtmäßig
                erfolgt.
              </p>

              <h4 className="font-semibold mb-2 mt-4">Widerspruchsrecht</h4>
              <p>
                Beruhen die hier aufgeführten personenbezogenen
                Datenverarbeitungen auf Grundlage unseres berechtigten
                Interesses nach Art. 6 Abs. 1 lit. f DSGVO, haben Sie das Recht
                aus Gründen, die sich aus Ihrer besonderen Situation ergeben,
                jederzeit diesen Verarbeitungen mit Wirkung für die Zukunft zu
                widersprechen. Nach erfolgtem Widerspruch wird die Verarbeitung
                der betroffenen Daten beendet, es sei denn, wir können zwingende
                schutzwürdige Gründe für die Verarbeitung nachweisen, die Ihren
                Interessen, Rechten und Freiheiten überwiegen, oder wenn die
                Verarbeitung der Geltendmachung, Ausübung oder Verteidigung von
                Rechtsansprüchen dient.
              </p>
              <p>
                Erfolgt die personenbezogene Datenverarbeitung zu Zwecken der
                Direktwerbung, können Sie dieser Verarbeitung jederzeit durch
                Mitteilung an uns widersprechen. Nach erfolgtem Widerspruch
                beenden wir die Verarbeitung der betroffenen Daten zum Zwecke
                der Direktwerbung.
              </p>
            </Section>

            <div className="mt-12 pt-8 border-t border-gray-200">
              <p className="text-sm text-gray-500">
                Letzte Aktualisierung: 19.11.2018
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
