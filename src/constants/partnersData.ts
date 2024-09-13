export interface Partner {
    id: string;
    name: string;
    category: string;
    subcategory?: string;
    date?: string;
    description: string;
    imageUrl: string;
    url: string;
}

export const partners: Partner[] = [
    {
        id: "akademie-der-gesundheit",
        name: "Akademie der Gesundheit",
        category: "Branche A bis Z",
        subcategory: "Bildung",
        date: "7. Mrz. 2019",
        description: "Die staatlich anerkannte Akademie der Gesundheit Berlin/ Brandenburg e. V. mit Sitz in Berlin-Buch, Eberswalde und Bad Saarow ist eine der größten privaten Bildungsunternehmen für das Gesundheits- und Sozialwesen in Deutschland. Die Akademie betreibt gegenwärtig ein Zentrum Berufliche Ausbildung mit 12 anerkannten Ausbildungsberufen und ein Zentrum Berufliche Weiterbildung. Insgesamt werden durch das Mitarbeiterteam der Akademie 1050 Bildungsteilnehmer begleitet.",
        imageUrl: "/images/p1.png",
        url: "https://www.gesundheit-akademie.de/"
    },
    {
        id: "baltic-college",
        name: "Baltic College",
        category: "Branche A bis Z",
        subcategory: "Bildung",
        date: "7. Mrz. 2019",
        description: "Das Baltic College ist die erste Hochschule für Management, Hotellerie, Tourismus und Gesundheitstourismus in privater Trägerschaft in Mecklenburg-Vorpommern. Gegründet im Jahre 2001 bietet die junge und dynamische Hochschule ihren Studenten die Möglichkeit, ein anspruchsvolles Studium zu absolvieren und sich auf eine verantwortungsvolle Position in Wirtschaft und Gesellschaft vorzubereiten.",
        imageUrl: "/images/p2.png",  
        url: "https://web.archive.org/web/20120919221234/http://www.baltic-college.de/"
    },
    {
        id: "baz",
        name: "BAZ",
        category: "Branche A bis Z",
        subcategory: "Bildung",
        date: "7. Mrz. 2019",
        description: "Mehr als 2500 hervorgebrachte Absolventen, das ist die Bilanz, die das BAZ Hamburg seit 1986 vorzuweisen hat und ist somit das mit Abstand erfolgreichste Fortbildungsinstitut für Pharma- referenten in Norddeutschland.",
        imageUrl: "/images/p3.png",  
        url: "https://www.baz-hamburg.de/"
    },
    {
        id: "best-sabel-hochschule",
        name: "Best-Sabel Hochschule",
        category: "Branche A bis Z",
        subcategory: "Bildung",
        date: "7. Mrz. 2019",
        description: "Das Studium an der BEST-Sabel-Hochschule Berlin verbindet die Vorteile eines privaten Studiums mit dem Studienabschluss einer staatlichen Hochschule, dem internationalen und akkreditierten Bachelor of Arts (B.A.). International ausgerichtet, aktuell und praxisnah vermitteln die Bachelor-Studiengänge die wichtigen Grundlagen für eine berufliche Karriere im Management international agierender Unternehmen und Konzerne.",
        imageUrl: "/images/p4.png",  
        url: "https://www.best-sabel.de/Hochschule/BEST-Sabel-Fachhochschule_Berlin.php"
    },
    {
        id: "pingou-vital",
        name: "Pingou Vital",
        category: "Branche A bis Z",
        subcategory: "Bildung",
        date: "7. Mrz. 2019",
        description: "Das energetische GesundheitsCentrum pingou vital bietet auf Basis der chinesischen Fünf-Elemente- Lehre individuell abgestimmte Behandlungs- programme zu den Themenbereichen 'Gesundheit und Wohlbefinden' wie auch 'Vitalität bis ins hohe Alter'.",
        imageUrl: "/images/p5.png",      
        url: "https://www.gazette-berlin.de/pingou-vital/"
    },
    {
        id: "sofi-goettingen",
        name: "Das Soziologische Forschungsinstitut Göttingen",
        category: "Branche A bis Z",
        subcategory: "Bildung",
        date: "7. Mrz. 2019",
        description: "Das Soziologische Forschungsinstitut Göttingen (SOFI) wurde im Jahr 1968 als nichtkommerzielles, universitätsnahes Institut gegründet. Die Rechtsform ist ein eingetragener gemeinnütziger Verein. Die Ziele des Instituts werden durch das Wissenschaftsverständnis einer angewandten Grundlagenforschung bestimmt.",
        imageUrl: "/images/p6.png",  
        url: "https://www.sofi-goettingen.de/"
    },
    {
        id: "physiotherapie-schule-ortenau",
        name: "Staatl. anerkannte Physiotherapie-Schule Ortenau gGmbH",
        category: "Branche A bis Z",
        subcategory: "Bildung",
        date: "7. Mrz. 2019",
        description: "Zusammenarbeit mit französischen Kollegen in zahlreichen Kliniken des Elsasses. In der dörflichen Gemeinde Eckartsweier profitieren wir von der idyllischen, ländlichen Umgebung. Es ist unser Anliegen den Schülern ein fundiertes theoretisches Wissen und praktisches Können zu vermitteln sowie das Persönlichkeitsbild des Physiotherapeuten zu prägen.",
        imageUrl: "/placeholder.svg?height=100&width=100",
        url: "https://www.kg-schule.de/"
    },
    {
        id: "chi-spa",
        name: "CHI SPA",
        category: "Branche A bis Z",
        subcategory: "Dienstleistung",
        date: "7. Mrz. 2019",
        description: "Zwischen Werbellinsee und Grimnitzsee in der Schorfheide nahe Berlin befindet sich 'chi spa' Wellness — Schönheit — Gesundheit. Hier wird ganzheitliche Gesundheitsprävention in Verbindung mit Wellness, Pflege und Schönheit angeboten.",
        imageUrl: "/images/p8.png",  
        url: "https://www.chi-spa-wellness.de/"
    },
    {
        id: "dermatocosmetics",
        name: "dermatocosmetics",
        category: "Branche A bis Z",
        subcategory: "Dienstleistung",
        date: "7. Mrz. 2019",
        description: "Hinter dem Institut dermatocosmetics für Perfect Skin und Medical Wellness steht die angesehene Dermatologische Praxis von Dr. Dagmar Ludolph-Hauser und Kollegen. Hautmedizinisches Fachwissen auf State of the Art liegt den modernen Behandlungsmethoden im Institut zugrunde.",
        imageUrl: "/images/p9.png",
        url: "https://www.dermatologie-bayern.de/"
    },
    {
        id: "dewea",
        name: "dewea",
        category: "Branche A bis Z",
        subcategory: "Dienstleistung",
        date: "7. Mrz. 2019",
        description: "Fullservice zu vernünftigen Konditionen zu bieten ist das Anliegen der Deutschen Werbeagentur dewea. Der kleine Kern aus qualifizierten und motivierten Mitarbeitern, die je nach Anforderung auf eine Vielzahl an freien Partnern sowie ausgewiesenen Spezialisten zurückgreifen, gestattet dewea maßgeschneiderte Lösungen anzubieten und dabei die Kosten niedrig zu halten.",
        imageUrl: "/placeholder.svg?height=100&width=100",
        url: "https://www.dewea.de/"
    },
    {
        id: "ibs-mentaltraining",
        name: "Das IBS-Mentaltraining",
        category: "Branche A bis Z",
        subcategory: "Dienstleistung",
        description: "Das Metaziel des IBS-Mentaltrainings ist die Förderung der Emotionalen Stabilität in allen Lebensbereichen. Mentales Training als Ergänzung zum praktischen Training ist vor allem im Sport schon lange ein Begriff. Die Techniken wie etwa die entspannte Konzentration, das Visualisieren und die Selbstgesprächskontrolle lassen sich in allen Lebensbereichen anwenden.",
        imageUrl: "/images/p11.png",
        url: "https://www.ibs-mentaltraining.com/"
    },
    {
        id: "omron",
        name: "OMRON",
        category: "Branche A bis Z",
        subcategory: "Einzelhandel",
        date: "7. Mrz. 2019",
        description: "Wenn es um intelligente wie praktische Medizintechnik geht, steht das internationale Technologie-Unternehmen OMRON an vorderster Stelle. Seit Jahrzehnten ist OMRON Vorreiter in Sachen medizin-technischer Geräte.",
        imageUrl: "/images/omron_02.jpg",
        url: "https://www.omron-medizintechnik.de/"
    },
    {
        id: "centrovital",
        name: "centrovital",
        category: "Branche A bis Z",
        subcategory: "Hotellerie",
        date: "7. Mrz. 2019",
        description: "Hotel centrovital Berlin vereint Medical Wellness, Therme, Tagungen und Fitnessstudio am Spandauer See. Das Gesundheitszentrum bietet ganzheitliche Behandlungsprogramme aus klassischen und alternativen Heilmethoden an. Ambulante Reha, Physiotherapie, Kardiologie, medizinische Kräftigungstherapie und Ernährungsberatung vervollständigen das Angebot.",
        imageUrl: "/images/centro.png",
        url: "https://www.centrovital-berlin.de/"
    },
    {
        id: "dmz",
        name: "DMZ",
        category: "Branche A bis Z",
        subcategory: "Klinik",
        date: "7. Mrz. 2019",
        description: "Das Deutsche Medizinische Zentrum DMZ mit Kur, Reha und Gesundheitsangeboten am Toten Meer in Israel ist die Vertragsklinik der Deutschen Krankenkassen, Deutschen Rentenversicherung Mitteldeutschland sowie anderen Landesversicherungsanstalten. Durch ständige Erweiterung des medizinischen und therapeutischen Angebotes und ständigen Beiträgen zur Qualitätssicherung konnte das DMZ ein modernes Therapiezentrum mit einem ganzheitlichen Therapiekonzept schaffen.",
        imageUrl: "/images/dmz.png",
        url: "https://www.dmz-klinik.de/"
    },
    {
        id: "innosenso",
        name: "Innosenso",
        category: "Branche A bis Z",
        subcategory: "Dienstleistung",
        date: "7. Mrz. 2019",
        description: "Die Innosenso Unternehmensberatung für Elektrobiologie hat sich auf die Beratung, Planung und Durchführung elektrobiologischer Gesundheitsschutzmaßnahmen im Bereich Elektrosmogreduzierung spezialisiert. Für die Hotellerie sowie für Gesundheitszentren, Privatkliniken und Boardinghäuser setzt Innosenso mit dem innovativen Gesundheitsschutzkonzept Sensual Living — Gesünder Leben, Wohnen & Arbeiten wichtige Akzente im Wachstumsmarkt Wellness und legt damit einen Meilenstein in Sachen Nachhaltigkeit im Tourismus.",
        imageUrl: "/images/p12.png",
        url: "https://www.dmwv.de/verband/innosenso/"
    },
    {
        id: "liviwell",
        name: "liviwell",
        category: "Branche A bis Z",
        subcategory: "Dienstleistung",
        date: "7. Mrz. 2019",
        description: "Der Tätigkeitsbereich des Unternehmens liviwell liegt darin, moderne Technologien mit den persönlichen Anforderungen einer gesunden und ausgewogenen Ernährung zu verbinden. Das hieraus entstandene Konzept aus CRS® Stoffwechselanalyse und maßgeschneiderten Mikronährstoffen bilden hier die Basis. Ziel ist es, eine kostengünstige Analysemethode anzubieten und die daraus resultierenden Bedürfnisse jedes Einzelnen mit ausgesuchten Vitalstoffen zu unterstützen.",
        imageUrl: "/images/p13.png",
        url: "https://www.liviwell.de/"
    },
    {
        id: "medical-wellness-management",
        name: "Medical Wellness Management Gesellschaft mbH",
        category: "Branche A bis Z",
        subcategory: "Dienstleistung",
        date: "7. Mrz. 2019",
        description: "Die MWM Medical Wellness Management GmbH bindet die DMWV Beiräte aus den Bereichen Medizin, Wellness, Architektur & Planung, Personalentwicklung & Schulung, Qualitätssysteme, Marketing & Vertrieb, Öffentlichkeitsarbeit, Betriebswirtschaft und Beratung innerhalb der eigenen neutralen Handlungsplattform in akquirierte Aufträge ein. Ergänzt werden diese Kompetenzträger durch eigene Ressourcen der MWM und bei Bedarf durch weitere externe Spezialisten.",
        imageUrl: "/images/p14.png",
        url: "https://www.mwmg.de/"
    },
    {
        id: "physiotherapie-lorch",
        name: "Physiotherapie Lorch",
        category: "Branche A bis Z",
        subcategory: "Dienstleistung",
        date: "7. Mrz. 2019",
        description: "Das Zentrum für Physiotherapie Lorch ist eine Fachpraxis spezialisiert auf Physiotherapie, Medical Wellness, Rehabilitation und Prävention.",
        imageUrl: "/images/p15.png",
        url: "https://www.physiotherapie-lorch.de/cms/pages/referenzen.php"
    },

    {
        id: "tuv-rheinland-group",
        name: "TÜV Rheinland Group",
        category: "Branche A bis Z",
        subcategory: "Dienstleistung",
        date: "7. Mrz. 2019",
        description: "Als internationaler Dienstleistungskonzern dokumentiert TÜV Rheinland Group die Sicherheit und Qualität von neuen und bestehenden Produkten, Systemen und Dienstleistungen.",
        imageUrl: "/images/p16.png",
        url: "https://www.tuv.com/de/tourismus_1.html"
    },
    {
        id: "vitadom",
        name: "Vitadom",
        category: "Branche A bis Z",
        subcategory: "Dienstleistung",
        date: "7. Mrz. 2019",
        description: "Seit mehr als 20 Jahre plant und baut Vitadom erfolgreiche Wellnessanlagen in Hotel‑, SPA- und Gesundheitsimmobilien. Dabei ist die Wellnessbranche bis heute immer einem stetigem Wandel und einer kontinuierlichen Entwicklung unterworfen. Auf die individuellen Kundenwünsche reagiert Vitadom deshalb mit innovativen Ideen, fundiertem Spezialwissen und strukturierter Arbeitsweise.",
        imageUrl: "/images/p17.png",
        url: "https://www.vitadom-wellness.de/"
    },
    {
        id: "wedicon",
        name: "WEDICON",
        category: "Branche A bis Z",
        subcategory: "Dienstleistung",
        date: "7. Mrz. 2019",
        description: "WEDICON beschäftigt sich intensiv mit nichtinvasiven Behandlungsmethoden und natürlichen Mikronährstoffen, um die Selbstheilungskräfte des Körpers zu stimulieren. Dabei sieht WEDICON über den traditionellen Gesundheitsmarkt hinaus und bildet den Brückenschlag zwischen angewandter Schul- und Alternativmedizin zum Wohle des Menschen. Mit einer einzigartigen Kombination aus effizienten medizinischen Anwendungen und natürlichen Produkten unterstützt Sie WEDICON dabei, mehr Harmonie und Lebensqualität zu erlangen.",
        imageUrl: "/images/p18.png",
        url: "https://www.wedicon.de/"
    },
    {
        id: "yorktest",
        name: "Yorktest",
        category: "Branche A bis Z",
        subcategory: "Dienstleistung",
        date: "7. Mrz. 2019",
        description: "Wenn gesundes Essen krank macht… Nahrungsmittelunverträglichkeiten (NMU) gehören zu den weitverbreitetsten Auslösern für eine Vielzahl von Beschwerden, die unser Wohlbefinden beeinträchtigen. Laut neuesten wissenschaftlichen Erkenntnissen leidet jeder fünfte Mitteleuropäer unter einer NMU. Yorktest bietet durch das 2‑Stufen-System die Möglichkeit, vorab durch den Test: FoodSCAN Indicator das Vorhandensein einer NMU zu bestätigen oder auszuschliessen und empfiehlt die Tests: FoodSCAN Totality oder FoodSCAN Qualitybei positivem Resultat des Tests Indicator.",
        imageUrl: "/images/p19.png",
        url: "https://www.yorktest.at/"
    },
    {
        id: "hohenbalance",
        name: "Höhenbalance",
        category: "Branche A bis Z",
        subcategory: "Dienstleistung",
        date: "7. Mrz. 2019",
        description: "Höhentraining — Künstliche Berge in Sport und Therapie! Die Höhenbalance AG als europäischer Marktführer im Bereich Höhentrainingskonzepte bietet für ihre Kunden die bestmögliche Technologie. Dies ermöglicht die enge Zusammenarbeit mit mehreren Zulieferfirmen (Hypoxico, b‑cat, Alto2Lab und go2altitude), die unterschiedliche Höhentrainingssysteme anbieten. Das interdisziplinäres Team unter der med.-wissensch. Leitung von Prof. Dr. Hermann Buhl betreut Klienten in den Bereichen Prävention und Therapie sowie Sportler und Alpinsportler, die für den nächsten Wettkampf oder das nächste Trekking trainieren. Höhenbalance überzeugt mit modernsten diagnostischen Verfahren für den Sport und hochaktuellen Methoden im Bereich Übergewicht und anderen Zivilisationserkrankungen.",
        imageUrl: "/images/p20.png",
        url: "https://www.hoehenbalance.de/"
    },
    {
        id: "dr-illing-partner",
        name: "dr. illing & partner",
        category: "Branche A bis Z",
        subcategory: "Dienstleistung",
        date: "7. Mrz. 2019",
        description: "Unabhängig vom Erfolg und von der Dauer des Bestehens des Unternehmens ergibt sich irgendwann die Notwendigkeit, etwas zu verändern. Dabei kann es um eine Erweiterungsinvestition gehen, um eine neue Marktausrichtung (Repositionierung) oder schlichtweg um eine IST-Analyse des gegenwärtigen Zustands, um daraus Handlungsbedarf für die Zukunft zu erkennen. In diesen Situationen kommen die Firmen TDC und prof. fh dr. illing & partner zum Einsatz.",
        imageUrl: "/images/p21.png",
        url: "https://www.spatourism.de/"
    },
    {
        id: "premedion",
        name: "Premedion",
        category: "Branche A bis Z",
        subcategory: "Dienstleistung",
        date: "7. Mrz. 2019",
        description: "Premedion ist der Spezialist für umfassende Beratung, maßgeschneiderte Entwicklung sowie professionelle Umsetzung von Projekten und Konzepten in den Bereichen Health & SPA Business. Sie ist Teil der Unternehmensgruppe Deutsche Seereederei und Mehrheitsbeteiligte am Medizinischen PräventionsCentrum Hamburg (MPCH).",
        imageUrl: "/images/p22.png",
        url: "https://www.premedion.de/"
    },
    {
        id: "pacific-wings-consulting",
        name: "pacific wings consulting",
        category: "Branche A bis Z",
        subcategory: "Dienstleistung",
        date: "7. Mrz. 2019",
        description: "Spezialisiert auf Beratungsleistungen in der Touristik, bietet pacicfic wings consulting Unterstützung und Hilfe für Tourismusdestinationen, Hotels und Reiseveranstalter an. In einem mehr und mehr dynamischen Marktumfeld ist Service Qualität, Credit Management und die Entwicklung sowie Ausbildung von Mitarbeitern einer der wichtigsten Faktoren, um am Markt erfolgreich bestehen zu können. Pacific wings consulting bietet Ihnen ein breites Angebot an Werkzeugen und Möglichkeiten, um Ihren Marktauftritt zu verbessern.",
        imageUrl: "/images/p23.png",
        url: "https://www.pacific-wings-consulting.de/"
    },
    {
        id: "quality-spa",
        name: "Quality SPA",
        category: "Branche A bis Z",
        subcategory: "Dienstleistung",
        date: "7. Mrz. 2019",
        description: "QUALITY SPA erstellt Betriebs- sowie Planungskonzepte für Wellness‑, Spa- und Gesundheitsbetriebe und unterstützen in allen baulichen wie auch betriebswirtschaftlichen Entwicklungsphasen.",
        imageUrl: "/images/p24.png",
        url: "https://www.quality-spa.com/"
    },
    {
        id: "thv-gruppe",
        name: "THV-Gruppe",
        category: "Branche A bis Z",
        subcategory: "Dienstleistung",
        date: "7. Mrz. 2019",
        description: "Zur THV-Gruppe gehören die THV Versicherungsmakler GmbH, die Paetau Sports Versicherungs-makler GmbH und die THS Services Versicherungsvermittlung GmbH. Alle drei Unternehmen sind im Auftrag ihrer Kunden professionell mit allen Fragen der Risikoerkennung und Risikoabsicherung beschäftigt. Zu ihren Leistungen zählen: Analyse, Beratung und Optimierung bestehender Versicherungsverträge, neue innovative Versicherungslösungen, nachhaltiges Vertrags- und Schadenmanagement, IT- und Outsourcing-Lösungen.",
        imageUrl: "/images/p25.png",
        url: "https://www.thv-gruppe.com/Hotelkonzepte"
    },
    {
        id: "unternehmensberatung-klaus-dribbusch",
        name: "Unternehmensberatung Klaus Dribbusch",
        category: "Branche A bis Z",
        subcategory: "Dienstleistung",
        date: "7. Mrz. 2019",
        description: "Die Unternehmensberatung Klaus Dribbusch mit den Themenschwerpunkten Unternehmensplanung & Controlling sowie Dokumentenmanagement & Vorgangsbearbeitung berät und unterstützt Sie zu allen Fragen der wirtschaftlichen Betriebsführung Ihres Unternehmens oder Ihrer Einrichtung.",
        imageUrl: "/images/p26.png",
        url: "https://www.dribbusch.de/"
    },
    {
        id: "thalgo",
        name: "Thalgo",
        category: "Branche A bis Z",
        subcategory: "Dienstleistung",
        date: "7. Mrz. 2019",
        description: "THALGO ist eine weltweit agierende Gruppe, in 85 Ländern präsent und zu einem Synonym für Qualität und Authentizität in meerbasierten Behandlungen und Produkten geworden. Das Unternehmen forscht, entwickelt, testet und produziert an seinem Hauptsitz in Roquebrune-sur-Argens an der Côte d'Azur und erobert durch permanente Innovationen weitere Märkte.",
        imageUrl: "/images/p27.png",
        url: "https://www.thalgo.de/"
    },
    {
        id: "progenom",
        name: "ProGenom",
        category: "Branche A bis Z",
        subcategory: "Dienstleistung",
        date: "7. Mrz. 2019",
        description: "In einem Netzwerk mit renommierten Medizinern, Naturwissenschaftlern, Humangenetikern,  Molekularbiologen und unter Anwendung der neuesten wissenschaftlichen Erkenntnisse präventiv-medizinischer Testsysteme bietet ProGenom Genanalysen in den medizinischen Abteilungen  ihrer Medical-Wellness-Partnerhotels und bei Partnerärzten an. Genetischen Entwicklungen erlaubt immer mehr, eine persönliche & individuelle Gesundheitsstrategie zu entwickeln, die in völligem Gegensatz zu sogenannten allgemeinen Gesundheitsratschlägen steht.",
        imageUrl: "/images/p28.png",
        url: "https://www.progenom.com/"
    },
    {
        id: "healomed",
        name: "Healomed",
        category: "Branche A bis Z",
        subcategory: "Dienstleistung",
        date: "7. Mrz. 2019",
        description: "Wir, die Firma Healomed GmbH mit Sitz in München, sind ein international tätiges Unternehmen und haben uns auf den Vertrieb von Medizinprodukten und insbesondere, von Magnet Impulsgeräten spezialisiert. Als Generalinporteur des PEMF-100 Elektromagnetfeld Generators der Firma PEMF Systems Incoperated, sind wir für den Vertrieb des PEMF-100 in Deutschland, Österreich und der Schweiz zuständig.",
        imageUrl: "/images/p29.png",
        url: "https://www.healomed.de/"
    },
    {
        id: "terme-dobrna",
        name: "Terme Dobrna",
        category: "Branche A bis Z",
        subcategory: "Dienstleistung",
        date: "7. Mrz. 2019",
        description: "Terme Dobrna, das älteste slowenische Heilbad mit einer Tradition über 600 Jahre, ist ein gegenwärtiges und dynamisches touristisches Zentrum. Die Tradition zeigt sich in der Gegenwart. Dobrna ist zum gewählten Treffpunkt der Gäste und Besucher geworden, die einen Kur‑, Wellness- oder aktiven Urlaub in unberühter Natur suchen. In den Thermen Dobrna haben wir drei heilende Naturfaktoren, die vom Gesundheitsministerium der Republik Slowenien anerkannt wurden: heilendes Thermalwasser mit der Quelltemperatur von 35 bis 36,5 C, organische und anorganische Peloide und Torf, angenehmes Klima.",
        imageUrl: "/images/p30.png",
        url: "https://www.terme-dobrna.si/de/"
    },

    {
        id: "pino-gmbh",
        name: "Pino GmbH",
        category: "Branche A bis Z",
        subcategory: "Einzelhandel",
        date: "7. Mrz. 2019",
        description:
            "Seit 1904 macht sich die Fa. PINO die Heilkräfte der Natur zunutze und steht nun schon über 100 Jahre professionellen Anwendern als verlässlicher Partner zur Seite. In enger Zusammenarbeit mit Medizinern und Therapeuten werden ständig neue Produkte entwickelt. Seit vielen Jahren ist PINO erfolgreicher Anbieter von Wellness Produkten, welche von Aromamassageölen über ein großes Bäder Sortiment bis zu Hot Stones- und Bienenwachs- Treatments reichen. Die neueste Entwicklung ist die Nature Line Serie, ein hochwertiges Spa-Sortiment aus 100% natürlichen Inhaltsstoffen, ohne Mineralöle und ohne synthetische Zusatzstoffe.",
        imageUrl: "/images/p31.png",
        url: "https://www.pinoshop.de/"
    },
    {
        id: "salt-of-life-international-ag",
        name: "Salt of Life International AG",
        category: "Branche A bis Z",
        subcategory: "Einzelhandel",
        date: "7. Mrz. 2019",
        description:
            "Die FREELAXX FLOATING Anlagen sind das neueste Produkt der SALT OF LIFE TECHNOLOGY GMBH, die zur Schweizer SALT OF LIFE AG gehört. Seit über 15 Jahren entwickeln Unternehmen der SALT OF LIFE AG praxisnahe Anwendungen im Bereich der Bade-/Licht-Therapien für chronisch Hautkranke.",
        imageUrl: "/images/p32.png",
        url: "https://www.freelaxx.com/5.html"
    },
    {
        id: "schupp-gmbh",
        name: "Schupp GmbH & Co KG",
        category: "Branche A bis Z",
        subcategory: "Einzelhandel",
        date: "7. Mrz. 2019",
        description:
            "Als Komplettanbieter in den Bereichen Physiotherapie, Medizinische Trainingstherapie und Wellness bietet Ihnen Schupp GmbH & Co KG alles, was Sie für eine erfolgreiche Behandlung benötigen: Von der Einrichtung wie Liegen, MTT-Geräte oder Rotlichtstrahler über Präparate wie Massagemittel, Fango und Badezusätze bis hin zur Praxisorganisation mit Terminplanern sowie Patientenkarteikarten.",
        imageUrl: "/images/p33.png",
        url: "https://www.schupp-gmbh.de/"
    },
    {
        id: "deagecosmetics",
        name: "deageCOSMETICS",
        category: "Branche A bis Z",
        subcategory: "Einzelhandel",
        date: "7. Mrz. 2019",
        description:
            "deageCOSMETICS — gegen die Zeichen der Zeit — steht für modernste, natürliche Kosmetik-Kreationen und ist ein Garant für Qualität und Entwicklungs-Know-How. Das Sortiment basiert auf Resultate jahrelanger intensiver Forschungen und ist speziell auf individuelle Bedürfnisse abgestimmt.",
        imageUrl: "/images/p34.png",
        url: "https://www.deagecosmetics.com/"
    },
    {
        id: "his-solution",
        name: "HIS-Solution",
        category: "Branche A bis Z",
        subcategory: "Einzelhandel",
        date: "7. Mrz. 2019",
        description:
            "Als marktführendes deutsches Unternehmen bietet HIS-Solution eines der modernsten individuell zusammenstellbaren Software-Systeme für die Terminplanung im Bereich SPA-Vital-Beauty-Wellness.",
        imageUrl: "/images/p35.png",
        url: "https://www.his-solution.de/"
    },
    {
        id: "vibb-fit-medical-gmbh",
        name: "Vibb-FIT-Medical GmbH",
        category: "Branche A bis Z",
        subcategory: "Einzelhandel",
        date: "7. Mrz. 2019",
        description:
            "Die vibb-FIT-medical GmbH stellt Ihren Kunden, Gästen oder Patienten Vibrationsgeräte zur Verfügung und bietet Ihnen damit die Chance zu mehr Gesundheit, Fitness, Wohlbefinden und Schönheit. Wie auch jeder Mensch unterschiedlich ist, mit unterschiedlichen Bedürnissen und Anforderungen, so individuell muss auch Ihre Vibrations-Wellness-Insel gestaltet sein.",
        imageUrl: "/images/p36.png",
        url: "https://www.vibb-fit.com/"
    },
    {
        id: "purity-factor",
        name: "Purity Factor",
        category: "Branche A bis Z",
        subcategory: "Einzelhandel",
        date: "7. Mrz. 2019",
        description:
            "Purity Factor ist eine Vertriebsplattform für TriSerum®, einer 30-Tage Komplett-Aufbaukur zur dauerhaften Anti-Faltenbehandlung, die wie ein natürlicher Jungbrunnen wirkt. Es besteht aus den wohl begehrtesten Inhaltsstoffen der Kosmetikindustrie: Hyaluron, Collagen und Aminosäuren.",
        imageUrl: "/images/p37.png",
        url: "https://www.purityfactor.com/"
    },
    {
        id: "svg",
        name: "SVG Medizinsysteme GmbH & Co. KG",
        category: "Branche A bis Z",
        subcategory: "Einzelhandel",
        date: "7. Mrz. 2019",
        description:
            "Seit der Firmengründung im Jahre 1997 besteht bei der SVG Medizinsysteme GmbH & Co. KG der Grundsatz, durch starke Leistung und besten Service zu begeistern. Als mittlerweile einer der führenden Komplettanbieter im deutschsprachigen Raum sind ständig über 2.000 Artikel im Angebot, viele davon direkt ab Lager verfügbar.",
        imageUrl: "/images/p38.png",
        url: "https://www.svggermany.de/"
    },
    {
        id: "danubius-health-spa",
        name: "Danubius Health Spa",
        category: "Branche A bis Z",
        subcategory: "Hotellerie",
        date: "7. Mrz. 2019",
        description:
            "Willkommen bei Danubius, Europas grösstem und erfahrenstem Thermalhotel-Betreiber! Wir haben uns und unsere therapeutischen sowie Wellness-Dienstleistungen auf die heilenden und entspannenden Wirkungen der natürlichen Ressourcen der Erde spezialisiert. Investieren Sie in Ihre Gesundheit und besuchen Sie eins unserer luxuriösen Thermalhotels.",
        imageUrl: "/images/p39.png",
        url: "https://www.danubiushotels.com/de/gesundheit_und_wellness/medical_wellness"
    },
    {
        id: "hotel-eggensberger",
        name: "Hotel Eggensberger",
        category: "Branche A bis Z",
        subcategory: "Hotellerie",
        date: "7. Mrz. 2019",
        description:
            "Das Hotel Eggensberger ist der erste TÜV-zertifizierte Medical-Wellness-Betrieb Deutschlands. Bio- und Wellnesshotel, Therapiezentrum sowie ISO 9001:2000 Zertifizierung hieraus resultieren die mehrdimensionalen, dynamisch-systematischen Prozesse, die der Herstellung eines ganzheitlichen individuellen Wohlbefindens im Kontext mit wissenschaftlich gesicherten gesundheitsfördernden bzw. medizinischen Faktoren einhergehen.",
        imageUrl: "/images/p40.png",
        url: "https://www.eggensberger.de/"
    },
    {
        id: "hotel-elbresidenz-bad-schandau",
        name: "Hotel Elbresidenz Bad Schandau",
        category: "Branche A bis Z",
        subcategory: "Hotellerie",
        date: "7. Mrz. 2019",
        description:
            "Wer Natur und Kultur in der Sächsischen Schweiz sowie in den anliegenden Städten genießen möchte, sollte Bad Schandau besuchen. Eine bezaubernde Landschaft für Naturliebhaber, kulturelle Vielfalt aller Genre und Entspannung pur. Wahlweise kombinierbar mit medizinischer Prävention.",
        imageUrl: "/images/p41.png",
        url: "https://www.elbresidenz-bad-schandau.de/"
    },
    {
        id: "hotel-monchgut-auf-rugen",
        name: "Hotel Mönchgut auf Rügen",
        category: "Branche A bis Z",
        subcategory: "Hotellerie",
        date: "7. Mrz. 2019",
        description:
            "Das neu eröffnete Kur- und Wellnesshotel liegt eingebettet in die Anlage des Waldhotels, umgeben von einer Parklandschaft mit über 15.000 Rosen, herrlichem Blick auf die Ostsee und direktem Zugang zur Bernsteinpromenade.",
        imageUrl: "/images/p42.png",
        url: "https://hotel-wellness-ruegen.de/"
    },
    {
        id: "oceano-vitality-hotel",
        name: "OCÉANO Vitality Hotel & Medical Spa",
        category: "Branche A bis Z",
        subcategory: "Hotellerie",
        date: "7. Mrz. 2019",
        description:
            "Im grünen, ruhigen Norden Teneriffas, im kleinen Fischerdorf Punta del Hidalgo, befindet sich das privat geführte OCÉANO Vitality Hotel & Medical Spa, das erste zertifizierte Medical Wellness Hotel in Spanien. Der direkte Blick auf die Weiten des Ozeans und die traumhaften Sonnenuntergänge sind von jedem Zimmer aus zu bewundern.",
        imageUrl: "/images/p43.png",
        url: "https://www.oceano.de/"
    },
    {
        id: "rondane-spa-hoytjellshotell",
        name: "Rondane Spa Höytjellshotell",
        category: "Branche A bis Z",
        subcategory: "Hotellerie",
        date: "7. Mrz. 2019",
        description:
            "Rondane Spa mit seiner einzigartigen Lage an der Pforte zum Rondane Nationalpark bietet von Wanderungen im Gebirge bis zu Rafting in wilden Gebirgsflüssen. Der hoteleigene Wellness-Bereich ist der perfekte Abschluss nach den Erlebnissen.",
        imageUrl: "/images/p44.png",
        url: "https://www.rondane.no/"
    },
    {
        id: "santiburi-golf-resort",
        name: "Santiburi Golf & Ocean Resort",
        category: "Branche A bis Z",
        subcategory: "Hotellerie",
        date: "7. Mrz. 2019",
        description:
            "Santiburi ist eine exklusive Villenanlage am 3 km langen Privat-Strand, am malerischen Mae Nam Beach. Klassische Thai-Architektur in einem einzigartigen Botanischen Garten – ein „The Leading Small Hotels of the World”.",
        imageUrl: "/images/p45.png",
        url: "https://www.santiburi-resort.de/"
    },
    {
        id: "sirona",
        name: "Sirona",
        category: "Branche A bis Z",
        subcategory: "Hotellerie",
        date: "7. Mrz. 2019",
        description:
            "Der internationale Verein für Balneologie und Tourismus „SIRONA” ist auf Investitionsprojekte, Bau und Management von Wohn- und Hotelbalneokomplexen spezialisiert, mit einem Programm für Balneotherapie und Bergtourismus.",
        imageUrl: "/images/p46.png",
        url: "https://www.sirona-hotels.de/"
    },
    {
        id: "medizinisches-zentrum-albena",
        name: "Medizinisches Zentrum Albena",
        category: "Branche A bis Z",
        subcategory: "Hotellerie",
        date: "7. Mrz. 2019",
        description:
            "Das Seebad Albena an der bulgarischen Schwarzmeerküste bietet 14.900 Betten in 43 Hotels und 5 Villen-Anlagen, dazu über 100 Restaurants, Spa & Wellnesszentren, sowie zahlreiche Sport- und Unterhaltungsmöglichkeiten.",
        imageUrl: "/images/p47.png",
        url: "https://www.albena.bg/en"
    },
    {
        id: "parkhotel-sulzhayn",
        name: "Parkhotel Sülzhayn",
        category: "Branche A bis Z",
        subcategory: "Hotellerie",
        date: "7. Mrz. 2019",
        description:
            "Das Parkhotel Sülzhayn liegt im Kurort Sülzhayn am Südrand des Harzes. Umgeben von Mischwäldern und Bergwiesen bietet es eine ideale Umgebung für Erholung und Aktivurlaub, mit vielen Ausflugszielen in der Nähe.",
        imageUrl: "/images/p48.png",
        url: "https://www.parkhotel-suelzhayn.de/"
    },
    {
        id: "dr-wahlmann-und-dr-griesse",
        name: "Dr. Wahlmann und Dr. Grieße",
        category: "Branche A bis Z",
        subcategory: "Klinik",
        date: "7. Mrz. 2019",
        description:
            "Dr. Wahlmann und Partner sind ausgewiesene Spezialisten und Innovationsführer in den unterschiedlichsten Bereichen der Zahnheilkunde sowie der Zahnästhetik und kosmetischen Zahnmedizin.",
        imageUrl: "/images/p49.png",
        url: "https://www.wahlmannundgriesse.de/"
    },
    {
        id: "zentrum-fuer-sportmedizin",
        name: "Zentrum für Sportmedizin",
        category: "Branche A bis Z",
        subcategory: "Medizin",
        date: "7. Mrz. 2019",
        description:
            "Sie möchten wissen wie es um Ihre Gesundheit & Fitness steht? Möchten Sie Ihr Training optimieren oder sportlich etwas für Ihre Gesundheit tun? Das Zentrum für Sportmedizin hat in jedem Fall das richtige Angebot für Sie.",
        imageUrl: "/images/p50.png",
        url: "https://www.zentrum-fuer-sportmedizin.de/index.php"
    },
    {
        id: "johannesbad-unternehmensgruppe",
        name: "Johannesbad Unternehmensgruppe",
        category: "Branche A bis Z",
        subcategory: "Medizin",
        date: "7. Mrz. 2019",
        description:
            "Die Johannesbad Unternehmensgruppe ist mit neun Standorten in drei europäischen Ländern ein erfolgreicher Anbieter von medizinischen und gesundheitsorientierten Dienstleistungen. Mit knapp 1.300 Mitarbeitern zählt der Konzern zu den größten im Gesundheitsbereich.",
        imageUrl: "/images/p51.png",
        url: "https://www.johannesbad.de/"
    },
    {
        id: "thueringen-kliniken",
        name: "Thüringen-Kliniken",
        category: "Branche A bis Z",
        subcategory: "Medizin",
        date: "7. Mrz. 2019",
        description:
            "Die Thüringen-Kliniken “Georgius-Agricola” Saalfeld-Rudolstadt GmbH versteht sich als Krankenhaus der Schwerpunktversorgung. Seit 1991 befindet sich das Unternehmen in der Rechtsform einer GmbH, deren alleiniger Gesellschafter der Landkreis Saalfeld-Rudolstadt ist. Die Thüringen-Kliniken Saalfeld-Rudolstadt GmbH zählt zum akademischen Lehrkrankenhaus der Friedrich-Schiller-Universität Jena.",
        imageUrl: "/images/p52.png",
        url: "https://www.thueringen-kliniken.de/saalfeld/index_saalfeld.htm"
    },
    {
        id: "michels-kliniken",
        name: "Michels Kliniken: Menschen dienen – Gesundheit fördern",
        category: "Branche A bis Z",
        subcategory: "Medizin",
        date: "7. Mrz. 2019",
        description:
            "In unseren Rehabilitationskliniken im Raum Sachsen, Berlin-Brandenburg und Niedersachsen bieten wir Rehabilitationsleistungen in den Fächern Neurologie, Orthopädie, Kardiologie, Pneumologie, Dermatologie, Pädiatrie und Psychosomatik an.",
        imageUrl: "/images/p53.png",
        url: "https://www.michelskliniken.de/"
    }, {
        id: "internationale-praevention-organisation",
        name: "Internationale Prävention Organisation e. V.",
        category: "Branche A bis Z",
        subcategory: "Netzwerk",
        date: "7. Mrz. 2019",
        description:
            "1992 gegründet — ist die IPO mittlerweile das größte unabhängige gemeinnützige Netzwerk für Gesundheitskommunikation in Europa. Höchste Bedeutung hat die fachübergreifende Kompetenz zur Darstellung wichtiger Themenkomplexe im Gesundheitsmarkt. Schwerpunkt bildet die Herstellung verschiedener Plattformen zur Darstellung wichtiger Entwicklungen in Gesundheitspolitik, Medizin, Wissenschaft und Volkswirtschaft. Für den Strukturwechsel im Gesundheitswesen – hin zur klaren Gesundheitswirtschaft – entwickelt die IPO zukunftsorientierte Lösungsansätze für alle Partner.",
        imageUrl: "/images/p54.png",
        url: "https://www.internationale-praevention-organisation.org/"
    },
    {
        id: "berufsverband-deutscher-praeventologinnen-und-praeventologen",
        name: "Berufsverband Deutscher Präventologinnen und Präventologen",
        category: "Branche A bis Z",
        subcategory: "Netzwerk",
        date: "7. Mrz. 2019",
        description:
            "Der Berufsverband Deutscher Präventologinnen und Präventologen e.V. ist ein Netzwerk von Menschen, die sich für Prävention und Gesundheitsförderung einsetzen. Präventologinnen und Präventologen sind couragierte Pioniere für ein neues Denken und Handeln im Umgang mit den Gesundheitsproblemen unserer Zeit wie auch unserer Gesellschaft.",
        imageUrl: "/images/p55.png",
        url: "https://www.praeventologe.de/"
    },
    {
        id: "proventika",
        name: "Proventika",
        category: "Branche A bis Z",
        subcategory: "Netzwerk",
        date: "7. Mrz. 2019",
        description:
            "Die Proventika Akademie hat sich zum Ziel gesetzt, die neuen Erkenntnisse der Hirnforschung, der Neurowissenschaften und der Neuromedizin interessierten Medizinern, Medizinischen Fachangestellten, Coaches und Trainern praxisrelevant zu vermitteln. Dazu wurden in Zusammenarbeit mit dem Deutschen Institut für Integrative Neuromedizin e.V. (DINM) Lehrinhalte und Curricula entwickelt, die zu einer qualifizierten Umsetzung der Integrativen Stressberatung und Stressmedizin, des Integrativen Stress- und Neurocoachings in der ärztlichen und beruflichen Tätigkeit befähigen.",
        imageUrl: "/images/p56.png",
        url: "https://www.proventika.de/"
    },
    {
        id: "thomas-wildey-institut",
        name: "Thomas — Wildey — Institut e. V.",
        category: "Branche A bis Z",
        subcategory: "Netzwerk",
        date: "7. Mrz. 2019",
        description:
            "Institut für Klinik- und praxisgekoppelte Grundlagenforschung. Im Jahre 1977 wurde das Thomas-Wildey-Institut von Dr. Karl Daxl in München gegründet, der sein Wirken neuen Wegen in der Medizin gewidmet hat. Das TWI darf mittlerweile zahlreiche Ärzte, Institutionen, Forschungseinrichtungen und Personen aus den unterschiedlichsten medizinischen, wirtschaftlichen, sozialen, gesellschaftlichen und politischen Richtungen und Gruppierungen zu seinen Mitgliedern zählen, die alle ihren jeweiligen Beitrag leisten, die Zukunft unserer Gesellschaft humanverträglich in der Medizin weiter zu entwickeln.",
        imageUrl: "/images/p57.png",
        url: "https://www.twi-institut.at/"
    },
    {
        id: "mediplus-reisen",
        name: "Mediplus Reisen",
        category: "Branche A bis Z",
        subcategory: "Reisen",
        date: "7. Mrz. 2019",
        description:
            "Mediplus Reisen verbindet durch sein einzigartiges Konzept Urlaub und Gesundheit zu einem ganzheitlichen Reiseerlebnis für Körper, Geist und Seele.",
        imageUrl: "/images/p58.png",
        url: "https://www.mediplusreisen.de/?agenturnr=70446"
    },
    {
        id: "shanghai-jin-jiang-tours",
        name: "Shanghai Jin Jiang Tours Co. Ltd.",
        category: "Branche A bis Z",
        subcategory: "Reisen",
        date: "7. Mrz. 2019",
        description:
            "Shanghai China International Travel Service Co., Ltd wurde 1994 gegründet. Seitdem ist die CITS B‑Aktien auf der Shanghai Stock Exchange gelistet. Das Unternehmen zählt zu den größten professionellen Reisedienstleister in China.",
        imageUrl: "/placeholder.svg?height=100&width=100",
        url: ""
    },
    {
        id: "tourvital",
        name: "TourVital",
        category: "Branche A bis Z",
        subcategory: "Reisen",
        date: "7. Mrz. 2019",
        description:
            "TOUR VITAL ist der Spezialist für ärztlich begleitete Reisen weltweit. Über 400 Ärzte sind jährlich mit unseren Gästen unterwegs. Ausgesuchte Kur- und Wellnessreisen, Fluss- und Hochseekreuzfahrten, Langzeiturlaube und Städtereisen runden das Angebot ab.",
        imageUrl: "/images/p59.png",
        url: "https://www.tourvital.de/"
    }
];

export const categories = [
    "Branche A bis Z",
    "Unternehmen von A bis Z"
];

export const subcategories = [
    "Bildung",
    "Dienstleistung",
    "Einzelhandel",
    "Hotellerie",
    "Klinik",
    "Medizin",
    "Reisen",
];