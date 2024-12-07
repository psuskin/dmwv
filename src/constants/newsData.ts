export type Locale = "de" | "en" | "es" | "fr" | "it" | "ru" | "ar" | "tr";

export type LocalizedString = {
    [key in Locale]: string;
};

export interface NewsItem {
    id: number;
    title: LocalizedString;
    excerpt: LocalizedString;
    date: string;
    category: LocalizedString;
    image: string;
}

export const newsData: NewsItem[] = [
    {
        id: 1,
        title: {
            de: "Neue Zertifizierungsstandards für Wellness-Hotels veröffentlicht",
            en: "New Certification Standards for Wellness Hotels Published",
            fr: "Nouveaux standards de certification pour les hôtels de bien-être publiés",
            it: "Nuovi standard di certificazione per gli hotel del benessere pubblicati",
            es: "Nuevos estándares de certificación para hoteles de bienestar publicados",
            ru: "Новые стандарты сертификации для велнес-отелей опубликованы",
            tr: "Wellness otelleri için yeni sertifikasyon standartları yayınlandı",
            ar: "نشر معايير شهادة جديدة لفنادق العافية"
        },
        excerpt: {
            de: "Der Verband hat aktualisierte Richtlinien zur Qualitätssicherung in Wellness-Einrichtungen herausgegeben. Diese neuen Standards basieren auf den neuesten wissenschaftlichen Erkenntnissen und legen besonderen Wert auf Nachhaltigkeit und Umweltschutz. Zertifizierte Einrichtungen müssen nachweisen, dass sie umweltfreundliche Praktiken anwenden und ressourcenschonend arbeiten. Die Richtlinien umfassen auch Anforderungen an regelmäßige Personalschulungen und den Einsatz von biologisch abbaubaren Produkten.",
            en: "The association has issued updated guidelines for quality assurance in wellness facilities. These new standards are based on the latest scientific findings and place special emphasis on sustainability and environmental protection. Certified facilities must demonstrate environmentally friendly practices and resource-efficient operations. The guidelines also include requirements for regular staff training and the use of biodegradable products.",
            fr: "L'association a publié des directives actualisées pour l'assurance qualité dans les établissements de bien-être. Ces nouvelles normes sont basées sur les dernières découvertes scientifiques et mettent l'accent sur la durabilité et la protection de l'environnement. Les établissements certifiés doivent démontrer des pratiques respectueuses de l'environnement et des opérations économes en ressources.",
            it: "L'associazione ha pubblicato linee guida aggiornate per la garanzia della qualità nelle strutture del benessere. Questi nuovi standard si basano sulle più recenti scoperte scientifiche e pongono particolare enfasi sulla sostenibilità e la protezione ambientale. Le strutture certificate devono dimostrare pratiche ecologiche e operazioni efficienti nell'uso delle risorse.",
            es: "La asociación ha publicado directrices actualizadas para el aseguramiento de la calidad en instalaciones de bienestar. Estos nuevos estándares se basan en los últimos hallazgos científicos y ponen especial énfasis en la sostenibilidad y la protección ambiental. Las instalaciones certificadas deben demostrar prácticas ambientalmente amigables y operaciones eficientes en recursos.",
            ru: "Ассоциация выпустила обновленные рекомендации по обеспечению качества в велнес-учреждениях. Эти новые стандарты основаны на последних научных данных и уделяют особое внимание устойчивому развитию и защите окружающей среды. Сертифицированные учреждения должны демонстрировать экологически чистые практики и эффективное использование ресурсов.",
            tr: "Dernek, wellness tesislerinde kalite güvencesi için güncellenmiş kılavuzlar yayınladı. Bu yeni standartlar, en son bilimsel bulgulara dayanmakta ve sürdürülebilirlik ile çevre korumasına özel önem vermektedir. Sertifikalı tesisler, çevre dostu uygulamalar ve kaynak verimli operasyonlar göstermelidir.",
            ar: "أصدرت الجمعية إرشادات محدثة لضمان الجودة في مرافق العافية. تستند هذه المعايير الجديدة إلى أحدث النتائج العلمية وتولي اهتماماً خاصاً للاستدامة وحماية البيئة. يجب على المرافق المعتمدة إظهار الممارسات الصديقة للبيئة وعمليات كفاءة الموارد."
        },
        date: "2023-05-15",
        category: {
            de: "Standards",
            en: "Standards",
            fr: "Normes",
            it: "Standard",
            es: "Estándares",
            ru: "Стандарты",
            tr: "Standartlar",
            ar: "المعايير"
        },
        image: "https://images.prestigeonline.com/wp-content/uploads/sites/8/2022/06/18182551/IMG_8853-1308x900.jpg"
    },
    {
        id: 2,
        title: {
            de: "Innovatives Spa-Konzept in Baden-Baden eröffnet",
            en: "Innovative Spa Concept Opens in Baden-Baden",
            fr: "Concept de spa innovant ouvert à Baden-Baden",
            it: "Concept spa innovativo aperto a Baden-Baden",
            es: "Concepto de spa innovador abierto en Baden-Baden",
            ru: "Инновационный концепт спа в Баден-Бадене открыт",
            tr: "Baden-Baden'de yeni, duruşturucu bir spa konsepti açıldı",
            ar: "تم افتتاح مفهوم سب جديد في باذنبادن"
        },
        excerpt: {
            de: "Ein neues, hochmodernes Spa in Baden-Baden verbindet traditionelle Heilmethoden mit Spitzentechnologie. Das innovative Konzept basiert auf einer Kombination aus jahrhundertealten Heiltraditionen und den neuesten wissenschaftlichen Erkenntnissen. Gäste können hier eine Vielzahl von Behandlungen genießen, die speziell auf ihre individuellen Bedürfnisse abgestimmt sind. Das Spa bietet neben klassischen Massagen und Schönheitsbehandlungen auch modernste Therapien an, die auf den Erkenntnissen der modernen Medizin basieren. Besonders hervorzuheben ist das breite Angebot an personalisierten Wellness-Programmen, die auf die spezifischen gesundheitlichen Herausforderungen der Gäste zugeschnitten sind. Das neue Spa setzt zudem auf Nachhaltigkeit: Alle verwendeten Produkte sind umweltfreundlich und basieren auf natürlichen Inhaltsstoffen. Auch bei der Gestaltung der Räumlichkeiten wurde auf eine ökologische Bauweise geachtet. Die Innenräume strahlen eine beruhigende Atmosphäre aus, die es den Gästen ermöglicht, vollkommen zu entspannen und den Alltagsstress hinter sich zu lassen.",
            en: "A new, state-of-the-art spa in Baden-Baden combines traditional healing methods with cutting-edge technology. The innovative concept is based on a combination of centuries-old healing traditions and the latest scientific findings. Guests can enjoy a variety of treatments here that are specifically tailored to their individual needs. In addition to classic massages and beauty treatments, the spa also offers state-of-the-art therapies based on the findings of modern medicine. Particularly noteworthy is the wide range of personalized wellness programs tailored to the specific health challenges of the guests. The new spa also focuses on sustainability: All products used are environmentally friendly and based on natural ingredients. Ecological construction methods were also used in the design of the premises. The interior spaces exude a calming atmosphere that allows guests to completely relax and leave everyday stress behind.",
            fr: "Un nouveau, hautement moderne spa à Baden-Baden combine les méthodes traditionnelles de guérison avec la technologie de pointe. Le concept innovant est basé sur une combinaison d'anciennes traditions de guérison et des dernières découvertes scientifiques. Les clients peuvent profiter ici d'une variété de soins qui sont spécifiquement adaptés à leurs besoins individuels. Le spa propose également des thérapies modernes qui sont basées sur les découvertes de la médecine moderne. Il est particulièrement remarquable la large gamme de programmes de bien-être personnalisés qui sont adaptés aux défis de santé spécifiques des clients. Le nouveau spa met également l'accent sur la durabilité : tous les produits utilisés sont écologiques et sont basés sur des ingrédients naturels. Des méthodes de construction écologiques ont également été utilisées dans la conception des locaux. Les espaces intérieurs émettent une atmosphère apaisante qui permet aux clients de se détendre complètement et de laisser le stress quotidien derrière eux.",
            it: "Un nuovo, stato dell'arte spa a Baden-Baden combina metodi di guarigione tradizionali con tecnologia punta. Il concept innovativo si basa su una combinazione di tradizioni di guarigione di secoli e le più recenti scoperte scientifiche. I clienti possono godersi qui una varietà di trattamenti che sono specificamente adattati ai loro bisogni individuali. Il spa offre inoltre terapie state-of-the-art basate sulle scoperte della medicina moderna. È particolarmente notevole la vasta gamma di programmi di benessere personalizzati che sono adattati ai problemi di salute specifici dei clienti. Il nuovo spa mette inoltre l'accento sulla durabilità: tutti i prodotti utilizzati sono ecologici e sono basati su ingredienti naturali. Sono stati utilizzati anche metodi di costruzione ecologici nella progettazione degli spazi. Gli spazi interni esaltano un'atmosfera rilassante che permette ai clienti di rilassarsi completamente e lasciare il stress quotidiano dietro di loro.",
            es: "Un nuevo, estado del arte spa en Baden-Baden combina métodos de guía tradicional con tecnología punta. El concepto innovador se basa en una combinación de tradiciones de guía de siglos y las últimas descubrimientos científicos. Los clientes pueden disfrutar aquí de una variedad de tratamientos que son específicamente adaptados a sus necesidades individuales. El spa también ofrece terapias state-of-the-art basadas en las descubrimientos de la medicina moderna. Es particularmente destacable la amplia gama de programas de bienestar personalizados que están adaptados a los desafíos de salud específicos de los clientes. El nuevo spa también se centra en la durabilidad: todos los productos utilizados son ecológicos y están basados en ingredientes naturales. Se han utilizado también métodos de construcción ecológica en la diseño de los espacios. Los espacios interiores exhalan una atmósfera relajante que permite a los clientes relajarse completamente y dejar el estrés diario detrás de ellos.",
            ru: "Новое, современное спа в Баден-Бадене объединяет традиционные методы лечения с высокотехнологичными технологиями. Инновационный концепт основан на комбинации вековых традиций лечения и последних научных открытий. Гости могут насладиться здесь разнообразием лечений, которые специально адаптированы к индивидуальным потребностям клиентов. Спа предлагает не только классические массажи и косметические процедуры, но и современные терапии, основанные на открытиях современной медицины. Особое внимание уделяется широкому ассортименту персонализированных программ здоровья, адаптированных к конкретным проблемам здоровья клиентов. Новый спа также фокусируется на долговечности: все используемые продукты экологические и основаны на естественных ингредиентах. Также использовались экологические строительные методы при проектировании помещений. Внутренние пространства испускают успокаивающую атмосферу, которая позволяет клиентам полностью расслабиться и оставить за собой повседневный стресс.",
            tr: "Baden-Baden'de yeni, duruşturucu bir spa konsepti, eski iyileştirme yöntemleri ile güçlü teknolojiyi birleştiriyor. İnovatif kavram, yüzyıllık iyileştirme gelenlikleri ile en son bilimsel keşiflerin birleşimi üzerine kuruluyor. Müşteriler burada, özel ihtiyaçlarına uygun birçok tedavi deneyimi yaşayabilirler. Spa, sıkça kullanılan masajlar ve güzellik ihtiyaçlarına ek olarak modern terapiler sunuyor. Bu terapiler, modern tıp keşiflerine dayanıyor. Özellikle ilgi çekici, müşterilerin ihtiyaçlarına uygun özel iyileştirme programlarının geniş aralığı. Yeni spa, aynı zamanda sürdürülebilirlik üzerine odaklanıyor: tüm ürünler kullanılan, doğal bileşenler üzerine kuruluyor. Yapılan inşaat yöntemleri de, mekanların tasarımında doğal yöntemler kullanılarak koruma sağlanıyor. İç mekanların, müşterilerin tamamen rahat olmasına ve günlük stresin arkasına bırakılmasına izin veren rahatlatıcı atmosferi yayıyor.",
            ar: "تم افتتاح مفهوم سب جديد في باذنبادن يجمع بين الطرق التقليدية للعلاج وتكنولوجيا التقنية. المفهوم الابتكاري يعتمد على تجميع التقاليد القديمة للعلاج وأحدث الاكتشافات العلمية. يمكن للزوار الاستمتاع هنا بمجموعة من العلاجات التي تناسب احتياجات الزبائن الفردية. يقدم السب في الوقت نفسه علاجات حالية التكنولوجيا التي تعتمد على الاكتشافات العلمية الحديثة. هو ملاحظ خاص بشكل كبير في المجموعة الواسعة من البرامج المخصصة للصحة المخصصة لاحتياجات الزبائن. يركز السب الجديد أيضًا على التحمل: جميع المنتجات المستخدمة هي عالجية طبيعية وتعتمد على المكونات الطبيعية. تم استخدام أيضًا طرق البناء البيئية في تصميم المساحات. المساحات الداخلية تنبعث من جو الراحة الذي يسمح للزبائن بالتمتع بالراحة الكاملة والتخلص من الإجهاد اليومي."
        },
        date: "2023-05-10",
        category: {
            de: "Neueröffnungen",
            en: "New Openings",
            fr: "Nouvelles ouvertures",
            it: "Nuove aperture",
            es: "Nuevas aperturas",
            ru: "Новые открытия",
            tr: "Yeni açılımlar",
            ar: "إطلاق عمليات جديدة"
        },
        image: "https://www.marimnhealth.org/wp-content/uploads/2017/10/95f5c0378bf916d0f779287d3146950f35ac3e57.jpg"
    },
    {
        id: 3,
        title: {
            de: "Deutscher Medical Wellness Verband kündigt Jahreskonferenz an",
            en: "German Medical Wellness Association Announces Annual Conference",
            fr: "Association allemande de médecine du bien-être annonce sa conférence annuelle",
            it: "Associazione tedesca di medicina del benessere annuncia la sua conferenza annuale",
            es: "Asociación alemana de medicina del bienestar anuncia su conferencia anual",
            ru: "Немекая медицинская ассоциация здоровья и благополучия объявляет о своей годовой конференции",
            tr: "Alman Medical Wellness Derneği, yıllık konferansı duyuruyor",
            ar: "جمعية طبيبية الميزانية الصحية الألمانية تعلن عن مؤتمرها السنوي"
        },
        excerpt: {
            de: "Die diesjährige Konferenz des Deutschen Medical Wellness Verbands steht ganz im Zeichen nachhaltiger Wellness-Praktiken. Experten aus aller Welt werden zusammenkommen, um die neuesten Entwicklungen in der Medical Wellness-Branche zu diskutieren und innovative Lösungen zu präsentieren. Ein Schwerpunkt der diesjährigen Konferenz wird die Integration nachhaltiger Praktiken in den Alltag sein. Dabei geht es nicht nur um umweltfreundliche Produkte und Dienstleistungen, sondern auch um den bewussten Umgang mit Ressourcen und die Förderung einer ganzheitlichen Gesundheit. Teilnehmer der Konferenz werden in verschiedenen Workshops und Vorträgen die Möglichkeit haben, sich über die neuesten Trends und Herausforderungen in der Branche auszutauschen. Besondere Aufmerksamkeit wird in diesem Jahr dem Thema Digitalisierung gewidmet. Die Veranstalter sind der Meinung, dass die Digitalisierung auch im Wellness-Bereich neue Chancen bietet, um den Menschen den Zugang zu Gesundheitsdienstleistungen zu erleichtern.",
            en: "This year's conference of the German Medical Wellness Association is all about sustainable wellness practices. Experts from around the world will come together to discuss the latest developments in the medical wellness industry and present innovative solutions. A focus of this year's conference will be the integration of sustainable practices into everyday life. This is not just about environmentally friendly products and services, but also about the conscious use of resources and the promotion of holistic health. Participants of the conference will have the opportunity to exchange ideas about the latest trends and challenges in the industry in various workshops and lectures. Special attention will be paid to the topic of digitalization this year. The organizers believe that digitalization also offers new opportunities in the wellness sector to make it easier for people to access health services.",
            fr: "La conférence annuelle de l'Association allemande de médecine du bien-être est tout entièrement axée sur les pratiques de bien-être durables. Des experts du monde entier se réuniront pour discuter des dernières évolutions dans le secteur de la médecine du bien-être et présenter des solutions innovantes. Un point focal de cette conférence sera l'intégration des pratiques durables dans la vie quotidienne. Ce n'est pas seulement sur les produits et services écologiques et les services de santé qui est centré, mais aussi sur l'utilisation consciente des ressources et le développement d'une santé holistique. Les participants de la conférence auront l'opportunité d'échanger des idées sur les derniers tendances et défis du secteur dans divers ateliers et conférences. Une attention particulière sera portée sur le sujet de la digitalisation cette année. Les organisateurs croient que la digitalisation offre également de nouvelles opportunités dans le secteur du bien-être pour rendre plus facile l'accès aux services de santé.",
            it: "La conferenza annuale dell'Associazione tedesca di medicina del benessere è tutta dedicata alle pratiche di benessere sostenibili. Gli esperti di tutto il mondo si riuniranno per discutere le ultime evoluzioni nel settore della medicina del benessere e presentare soluzioni innovative. Un punto focale della conferenza quest'anno sarà l'integrazione delle pratiche sostenibili nella vita quotidiana. Non si tratta solo di prodotti e servizi ecologici e servizi di salute, ma anche di utilizzo consapevole delle risorse e promozione di una salute holistica. I partecipanti alla conferenza avranno l'opportunità di scambiare idee sui trend più recenti e i problemi del settore in vari ateliers e lezioni. Una particolare attenzione sarà rivolta al tema della digitalizzazione quest'anno. Gli organizzatori credono che la digitalizzazione offra anche nuove opportunità nel settore del benessere per rendere più facile l'accesso ai servizi di salute.",
            es: "La conferencia anual de la Asociación alemana de medicina del bienestar está dedicada a las prácticas de bienestar sostenibles. Los expertos del mundo entero se reunirán para discutir las últimas evoluciones en el sector de la medicina del bienestar y presentar soluciones innovadoras. Un punto focal de esta conferencia este año será la integración de prácticas sostenibles en la vida cotidiana. No solo se trata de productos y servicios ecológicos y servicios de salud, sino también del uso consciente de recursos y promoción de una salud holística. Los participantes de la conferencia tendrán la oportunidad de intercambiar ideas sobre los últimos tendencias y desafíos del sector en varios talleres y lecciones. Una atención particular se centrará en el tema de la digitalización este año. Los organizadores creen que la digitalización también ofrece nuevas oportunidades en el sector del bienestar para facilitar el acceso a los servicios de salud.",
            ru: "Годовая конференция Немецкой медицинской ассоциации здоровья и благополучия полностью посвящена устойчивым практикам здоровья и благополучия. Эксперты со всего мира собираются, чтобы обсудить последние разработки в области медицины здоровья и предложить инновационные решения. Фокус этого года будет на интеграции устойчивых практик в повседневную жизнь. Это не только о экологических продуктах и услугах, но и о сознательном использовании ресурсов и продвижении всестороннего здоровья. Участники конференции получат возможность обмениваться идеями о последних трендах и проблемах отрасли в различных мастерских и лекциях. Особое внимание будет уделено теме цифровизации этого года. Организаторы считают, что цифровизация также предлагает новые возможности в сфере здравоохранения, чтобы сделать доступными услуги здравоохранения для людей.",
            tr: "Alman Medical Wellness Derneği'nin yıllık konferansı, sürdürülebilirlik için yapılan pratiklerin önemine vurgu yapıyor. Dünya gençinden gelen uzmanlar, tıp zihin iyi yaşam pratikleri sektöründe meydana gelen son gelişmeleri ve yenilikçi çözümleri tartışacak ve sunacak. Bu yılın konferansının odak noktası, sürdürülebilir pratiklerin günlük hayata entegrasyonu olacak. Bu, sadece çevresel dostu ürünler ve hizmetler değil, aynı zamanda kaynakların bilinçli kullanımı ve gençlik için sağlık için bir yolculuk olacak. Konferans katılımcıları, sektörde meydana gelen son trendler ve sorunlar hakkında fikir alışverişi yapabilecek. Bu yılın odak noktası, dijitalizasyon olacak. Organizatörler, dijitalizasyonun aynı zamanda sağlık sektöründe de yeni fırsatlar sunabileceğini düşünüyor.",
            ar: "مؤتمر سنوي لجمعية طبيبية الميزانية الصحية الألمانية يتمحور حول الممارسات المستدامة للصحة والرفاهية. خبراء من جميع أنحاء العالم سيأتون ليناقش التطورات الأخيرة في صناعة الصحة والرفاهية الطبية ويقدمون حلولًا جديدة. سيكون التركيز هذا العام على دمج الممارسات المستدامة في الحياة اليومية. هذا لا يتعلق فقط بالمنتجات والخدمات البيئية والخدمات الصحية، بل أيضًا عن الاستفادة من الموارد بشكل معقول وترويج الصحة الشاملة. سيكون لدى المشاركين في المؤتمر الفرصة لتبادل الأفكار حول التغيرات الأخيرة والتحديات في الصناعة عبر مختلفة المهارات والدروس. إنتبهار خاص لهذا العام سيكون على التطوير الرقمي. المنظمون يعتقدون أن التطوير الرقمي يوفر أيضًا فرص جديدة في مجال الصحة لتسهيل الوصول إلى خدمات الصحة للأشخاص."
        },
        date: "2023-05-05",
        category: {
            de: "Veranstaltungen",
            en: "Events",
            fr: "Événements",
            it: "Eventi",
            es: "Eventos",
            ru: "Мероприятия",
            tr: "Etkinlikler",
            ar: "أحداث"
        },
        image: "https://voyagela.com/wp-content/uploads/2017/08/personal_photo-124-1000x600.jpg"
    },
    {
        id: 4,
        title: {
            de: "Neue Zertifizierungsstandards für Wellness-Hotels veröffentlicht",
            en: "New Certification Standards for Wellness Hotels Published",
            fr: "Nouveaux standards de certification pour les hôtels de bien-être publiés",
            it: "Nuovi standardi di certificazione per i hotel di benessere pubblicati",
            es: "Nuevos estándares de certificación para hoteles de bienestar publicados",
            ru: "Новые стандарты сертификации для отелей здоровья и благополучия опубликованы",
            tr: "Yeni sertifikasyon standartları wellness otelleri için yayınlandı",
            ar: "معايير جديدة للتصنيف للفنادق المريحة نشرت"
        },
        excerpt: {
            de: "Der Verband hat aktualisierte Richtlinien zur Qualitätssicherung in Wellness-Einrichtungen herausgegeben. Diese neuen Zertifizierungsstandards sollen sicherstellen, dass Gäste von Wellness-Hotels und -Einrichtungen eine gleichbleibend hohe Qualität der Dienstleistungen erwarten können. Die überarbeiteten Standards basieren auf den neuesten wissenschaftlichen Erkenntnissen und berücksichtigen die aktuellen Entwicklungen im Bereich Wellness und Gesundheit. Besonderes Augenmerk wurde auf die Themen Nachhaltigkeit und Umweltschutz gelegt. So müssen zertifizierte Einrichtungen nachweisen, dass sie umweltfreundliche Praktiken anwenden und ressourcenschonend arbeiten. Auch der Einsatz von biologisch abbaubaren Produkten und die Reduzierung von Plastikabfällen spielen eine wichtige Rolle bei der Zertifizierung. Die neuen Richtlinien legen zudem fest, dass das Personal in zertifizierten Wellness-Einrichtungen regelmäßig geschult werden muss, um den Gästen die bestmögliche Betreuung zu bieten.",
            en: "The association has issued updated guidelines for quality assurance in wellness facilities. These new certification standards are designed to ensure that guests of wellness hotels and facilities can expect consistently high-quality services. The revised standards are based on the latest scientific findings and take into account current developments in the field of wellness and health. Special attention has been paid to the topics of sustainability and environmental protection. Certified facilities must demonstrate that they apply environmentally friendly practices and work in a resource-conserving manner. The use of biodegradable products and the reduction of plastic waste also play an important role in certification. The new guidelines also stipulate that staff in certified wellness facilities must be regularly trained to provide guests with the best possible care.",
            fr: "L'association a publié des directives mises à jour pour l'assurance qualité dans les installations de bien-être. Ces nouveaux standards de certification visent à garantir que les clients des hôtels de bien-être et des installations peuvent s'attendre à des services de haute qualité constants. Les standards révisés sont basés sur les dernières découvertes scientifiques et tiennent compte des développements actuels dans le domaine du bien-être et de la santé. Une attention particulière a été portée aux thèmes de la durabilité et de la protection de l'environnement. Les installations certifiées doivent démontrer qu'elles appliquent des pratiques respectueuses de l'environnement et travaillent dans une optique de conservation des ressources. L'utilisation de produits biodégradables et la réduction des déchets plastiques jouent également un rôle important dans la certification. Les nouvelles directives stipulent également que le personnel des installations de bien-être certifiées doit être régulièrement formé pour offrir aux clients les meilleurs soins possibles.",
            it: "L'associazione ha pubblicato linee guida aggiornate per la garanzia della qualità nelle strutture di benessere. Questi nuovi standard di certificazione sono progettati per garantire che gli ospiti degli hotel e delle strutture di benessere possano aspettarsi servizi di alta qualità costante. Gli standard rivisti si basano sulle ultime scoperte scientifiche e tengono conto degli sviluppi attuali nel campo del benessere e della salute. È stata prestata particolare attenzione ai temi della sostenibilità e della protezione ambientale. Le strutture certificate devono dimostrare di applicare pratiche rispettose dell'ambiente e di lavorare in un'ottica di conservazione delle risorse. L'uso di prodotti biodegradabili e la riduzione dei rifiuti di plastica svolgono anche un ruolo importante nella certificazione. Le nuove linee guida stabiliscono anche che il personale delle strutture di benessere certificate deve essere regolarmente formato per offrire agli ospiti le migliori cure possibili.",
            es: "La asociación ha emitido directrices actualizadas para garantizar la calidad en las instalaciones de bienestar. Estos nuevos estándares de certificación están diseñados para garantizar que los huéspedes de hoteles e instalaciones de bienestar puedan esperar servicios de alta calidad de forma constante. Los estándares revisados se basan en los últimos hallazgos científicos y tienen en cuenta los desarrollos actuales en el campo del bienestar y la salud. Se ha prestado especial atención a los temas de sostenibilidad y protección ambiental. Las instalaciones certificadas deben demostrar que aplican prácticas respetuosas con el medio ambiente y trabajan de manera que conserven los recursos. El uso de productos biodegradables y la reducción de los desechos plásticos también juegan un papel importante en la certificación. Las nuevas directrices también estipulan que el personal de las instalaciones de bienestar certificadas debe recibir formación regular para brindar a los huéspedes la mejor atención posible.",
            ru: "Ассоциация выпустила обновленные руководящие принципы обеспечения качества в велнес-учреждениях. Эти новые стандарты сертификации разработаны для того, чтобы обеспечить гостям велнес-отелей и заведений постоянно высокое качество обслуживания. Пересмотренные стандарты основаны на последних научных открытиях и учитывают текущие разработки в области велнеса и здоровья. Особое внимание уделено вопросам устойчивого развития и охраны окружающей среды. Сертифицированные заведения должны продемонстрировать, что они применяют экологически чистые практики и работают с учетом сохранения ресурсов. Важную роль в сертификации также играет использование биоразлагаемых продуктов и сокращение пластиковых отходов. Новые руководящие принципы также предусматривают регулярное обучение персонала сертифицированных велнес-заведений для обеспечения наилучшего ухода за гостями.",
            tr: "Dernek, wellness tesislerinde kalite güvencesi için güncellenmiş yönergeler yayınladı. Bu yeni sertifikasyon standartları, wellness otelleri ve tesislerinin konuklarına tutarlı bir şekilde yüksek kaliteli hizmetler sunmalarını sağlamak için tasarlandı. Gözden geçirilmiş standartlar, en son bilimsel bulgulara dayanmaktadır ve wellness ve sağlık alanındaki mevcut gelişmeleri dikkate alır. Sürdürülebilirlik ve çevre koruma konularına özel önem verilmiştir. Sertifikalı tesisler, çevre dostu uygulamaları benimsediklerini ve kaynakları koruyarak çalıştıklarını göstermek zorundadır. Biyolojik olarak parçalanabilir ürünlerin kullanımı ve plastik atıkların azaltılması da sertifikasyonda önemli bir rol oynamaktadır. Yeni yönergeler ayrıca, sertifikalı wellness tesislerindeki personelin misafirlere en iyi hizmeti sunabilmeleri için düzenli olarak eğitilmesi gerektiğini belirtmektedir.",
            ar: "أصدرت الجمعية إرشادات محدثة لضمان الجودة في منشآت الرفاهية. تهدف هذه المعايير الجديدة إلى ضمان أن يتوقع ضيوف الفنادق ومنشآت الرفاهية جودة عالية بشكل دائم. تعتمد المعايير المحدثة على أحدث النتائج العلمية وتراعي التطورات الحالية في مجال الصحة والرفاهية. تم التركيز بشكل خاص على موضوعات الاستدامة وحماية البيئة. يجب على المنشآت المعتمدة إثبات أنها تطبق ممارسات صديقة للبيئة وتعمل بطرق تحافظ على الموارد. كما أن استخدام المنتجات القابلة للتحلل الحيوي وتقليل النفايات البلاستيكية يلعب دوراً مهماً في الحصول على الشهادات. وتنص الإرشادات الجديدة أيضًا على أن يتم تدريب العاملين في منشآت الرفاهية المعتمدة بانتظام لضمان تقديم أفضل رعاية للضيوف."
        },
        date: "2023-04-28",
        category: {
            de: "Standards",
            en: "Standards",
            fr: "Normes",
            it: "Standard",
            es: "Normas",
            ru: "Стандарты",
            tr: "Standartlar",
            ar: "المعايير"
        },
        image: "https://www.citycarephuket.com/_data/_Citycare/upload/home/team-1.jpg"
    },
    {
        id: 5,
        title: {
            de: "Innovative Therapieansätze zur Stressbewältigung vorgestellt",
            en: "Innovative Therapy Approaches for Stress Management Introduced",
            fr: "Approches thérapeutiques innovantes pour la gestion du stress présentées",
            it: "Presentati approcci terapeutici innovativi per la gestione dello stress",
            es: "Se presentan enfoques terapéuticos innovadores para la gestión del estrés",
            ru: "Представлены инновационные терапевтические подходы для управления стрессом",
            tr: "Stres yönetimi için yenilikçi terapi yaklaşımları tanıtıldı",
            ar: "طرح نهج علاجية مبتكرة لإدارة التوتر"
        },
        excerpt: {
            de: "Experten haben auf einer Konferenz neue Ansätze zur Stressbewältigung vorgestellt, die auf den neuesten Forschungsergebnissen im Bereich der Psychologie und Neurowissenschaften basieren. Diese Ansätze kombinieren traditionelle therapeutische Methoden mit modernen Technologien wie Virtual Reality und Achtsamkeits-Apps. Ziel ist es, den Betroffenen Werkzeuge an die Hand zu geben, um Stress besser zu bewältigen und ihre Lebensqualität nachhaltig zu verbessern. Besondere Aufmerksamkeit gilt auch der Rolle der Ernährung und Bewegung bei der Stressbewältigung.",
            en: "Experts have introduced new approaches to stress management at a recent conference, based on the latest research in psychology and neuroscience. These approaches combine traditional therapeutic methods with modern technologies like virtual reality and mindfulness apps. The goal is to provide individuals with tools to better manage stress and improve their quality of life. Special attention is also being given to the role of diet and exercise in stress management.",
            fr: "Des experts ont présenté de nouvelles approches pour la gestion du stress lors d'une conférence, basées sur les dernières recherches en psychologie et neurosciences. Ces approches combinent des méthodes thérapeutiques traditionnelles avec des technologies modernes comme la réalité virtuelle et les applications de pleine conscience. L'objectif est de fournir aux individus des outils pour mieux gérer le stress et améliorer leur qualité de vie. Une attention particulière est également accordée au rôle de l'alimentation et de l'exercice dans la gestion du stress.",
            it: "Gli esperti hanno presentato nuovi approcci alla gestione dello stress in una recente conferenza, basati sulle ultime ricerche in psicologia e neuroscienze. Questi approcci combinano metodi terapeutici tradizionali con tecnologie moderne come la realtà virtuale e le app di consapevolezza. L'obiettivo è fornire agli individui strumenti per gestire meglio lo stress e migliorare la qualità della vita. Particolare attenzione è riservata anche al ruolo della dieta e dell'esercizio fisico nella gestione dello stress.",
            es: "Expertos han presentado nuevos enfoques para la gestión del estrés en una reciente conferencia, basados en las investigaciones más recientes en psicología y neurociencia. Estos enfoques combinan métodos terapéuticos tradicionales con tecnologías modernas como la realidad virtual y aplicaciones de atención plena. El objetivo es proporcionar a las personas herramientas para gestionar mejor el estrés y mejorar su calidad de vida. También se está prestando especial atención al papel de la dieta y el ejercicio en la gestión del estrés.",
            ru: "Эксперты представили новые подходы к управлению стрессом на недавней конференции, основанные на последних исследованиях в области психологии и нейронаук. Эти подходы сочетают традиционные терапевтические методы с современными технологиями, такими как виртуальная реальность и приложения для осознанности. Цель заключается в том, чтобы предоставить людям инструменты для лучшего управления стрессом и улучшения качества жизни. Особое внимание также уделяется роли диеты и физических упражнений в управлении стрессом.",
            tr: "Uzmanlar, yakın zamanda yapılan bir konferansta, psikoloji ve sinirbilim alanındaki en son araştırmalara dayanan yeni stres yönetimi yaklaşımlarını tanıttı. Bu yaklaşımlar, geleneksel terapötik yöntemleri sanal gerçeklik ve farkındalık uygulamaları gibi modern teknolojilerle birleştiriyor. Amaç, bireylere stresi daha iyi yönetmeleri ve yaşam kalitelerini artırmaları için araçlar sağlamaktır. Ayrıca, stres yönetiminde beslenme ve egzersizin rolüne özel önem verilmektedir.",
            ar: "قدّم الخبراء في مؤتمر حديث نهجًا جديدة لإدارة التوتر، تعتمد على أحدث الأبحاث في علم النفس وعلم الأعصاب. تجمع هذه الأساليب بين الطرق العلاجية التقليدية والتقنيات الحديثة مثل الواقع الافتراضي وتطبيقات اليقظة الذهنية. الهدف هو تزويد الأفراد بأدوات للتعامل مع التوتر بشكل أفضل وتحسين نوعية حياتهم. كما يتم إيلاء اهتمام خاص لدور النظام الغذائي والتمارين الرياضية في إدارة التوتر."
        },
        date: "2023-06-12",
        category: {
            de: "Gesundheit",
            en: "Health",
            fr: "Santé",
            it: "Salute",
            es: "Salud",
            ru: "Здоровье",
            tr: "Sağlık",
            ar: "الصحة"
        },
        image: "https://images.ctfassets.net/hrltx12pl8hq/28ECAQiPJZ78hxatLTa7Ts/2f695d869736ae3b0de3e56ceaca3958/free-nature-images.jpg?fit=fill&w=1200&h=630"
    },

    {
        id: 6,
        title: {
            de: "Weltkongress für integrative Medizin diskutiert über Zukunft der Gesundheitsversorgung",
            en: "World Congress on Integrative Medicine Discusses Future of Healthcare",
            fr: "Le Congrès mondial sur la médecine intégrative discute de l'avenir des soins de santé",
            it: "Congresso mondiale sulla medicina integrativa discute il futuro dell'assistenza sanitaria",
            es: "Congreso mundial sobre medicina integrativa discute el futuro de la atención médica",
            ru: "Мировой конгресс по интегративной медицине обсуждает будущее здравоохранения",
            tr: "Dünya Entegratif Tıp Kongresi, sağlık hizmetlerinin geleceğini tartışıyor",
            ar: "المؤتمر العالمي للطب التكاملي يناقش مستقبل الرعاية الصحية"
        },
        excerpt: {
            de: "Der diesjährige Weltkongress für integrative Medizin hat eine Vielzahl von Fachleuten aus den Bereichen Medizin, Naturheilkunde und alternative Therapien zusammengebracht, um über die Zukunft der Gesundheitsversorgung zu diskutieren. Die Konferenz konzentrierte sich auf die wachsende Bedeutung von integrativen Ansätzen, die sowohl konventionelle medizinische Behandlungen als auch alternative und ganzheitliche Methoden kombinieren, um eine umfassendere und individuellere Gesundheitsversorgung zu bieten. Zu den Hauptthemen gehörten die Rolle der Prävention bei chronischen Erkrankungen, die Integration von digitalen Technologien zur Unterstützung der Patientenbehandlung und die wachsende Nachfrage nach natürlichen Heilmitteln und personalisierten Therapien. Ein besonderer Fokus lag auf der Notwendigkeit, Patientenzentrierung und Ganzheitlichkeit stärker in die konventionelle Medizin zu integrieren. Mehrere Redner betonten, dass die Zukunft der Gesundheitsversorgung eine engere Zusammenarbeit zwischen traditionellen medizinischen Fachkräften und Experten für alternative Heilmethoden erfordern wird. Neben den Vorträgen gab es interaktive Workshops, in denen die Teilnehmer die Möglichkeit hatten, praktische Ansätze zur Anwendung integrativer Medizin zu erlernen. Viele Teilnehmer äußerten ihre Begeisterung über die Möglichkeit, von international renommierten Experten zu lernen und neue Netzwerke in der integrativen Medizin aufzubauen.",
            en: "This year's World Congress on Integrative Medicine brought together a diverse range of professionals from the fields of medicine, naturopathy, and alternative therapies to discuss the future of healthcare. The conference focused on the growing importance of integrative approaches that combine conventional medical treatments with alternative and holistic methods to provide more comprehensive and individualized healthcare. Key topics included the role of prevention in managing chronic diseases, the integration of digital technologies to support patient care, and the rising demand for natural remedies and personalized therapies. A particular emphasis was placed on the need to incorporate patient-centeredness and holism more prominently into conventional medicine. Several speakers highlighted that the future of healthcare will require closer collaboration between traditional medical practitioners and experts in alternative healing methods. In addition to the talks, there were interactive workshops where attendees had the chance to learn practical approaches to applying integrative medicine. Many participants expressed their excitement about the opportunity to learn from internationally renowned experts and to build new networks in the field of integrative medicine.",
            fr: "Le Congrès mondial de médecine intégrative de cette année a réuni un large éventail de professionnels des domaines de la médecine, de la naturopathie et des thérapies alternatives pour discuter de l'avenir des soins de santé. La conférence s'est concentrée sur l'importance croissante des approches intégratives qui combinent des traitements médicaux conventionnels avec des méthodes alternatives et holistiques pour offrir des soins de santé plus complets et personnalisés. Les sujets clés comprenaient le rôle de la prévention dans la gestion des maladies chroniques, l'intégration des technologies numériques pour soutenir les soins aux patients et la demande croissante de remèdes naturels et de thérapies personnalisées. Un accent particulier a été mis sur la nécessité d'incorporer davantage de centrage sur le patient et de globalité dans la médecine conventionnelle. Plusieurs orateurs ont souligné que l'avenir des soins de santé nécessitera une collaboration plus étroite entre les praticiens de la médecine traditionnelle et les experts en méthodes de guérison alternatives. En plus des conférences, il y avait des ateliers interactifs où les participants ont eu la possibilité d'apprendre des approches pratiques de l'application de la médecine intégrative. De nombreux participants ont exprimé leur enthousiasme à l'idée d'apprendre des experts de renommée internationale et de construire de nouveaux réseaux dans le domaine de la médecine intégrative.",
            it: "Il Congresso mondiale sulla medicina integrativa di quest'anno ha riunito una vasta gamma di professionisti provenienti dai settori della medicina, della naturopatia e delle terapie alternative per discutere del futuro dell'assistenza sanitaria. La conferenza si è concentrata sull'importanza crescente degli approcci integrativi che combinano trattamenti medici convenzionali con metodi alternativi e olistici per fornire un'assistenza sanitaria più completa e personalizzata. I temi principali includevano il ruolo della prevenzione nella gestione delle malattie croniche, l'integrazione delle tecnologie digitali per supportare l'assistenza ai pazienti e la crescente domanda di rimedi naturali e terapie personalizzate. Particolare enfasi è stata posta sulla necessità di integrare maggiormente la centralità del paziente e l'olismo nella medicina convenzionale. Diversi relatori hanno sottolineato che il futuro dell'assistenza sanitaria richiederà una collaborazione più stretta tra i medici tradizionali e gli esperti in metodi di guarigione alternativi. Oltre alle conferenze, c'erano workshop interattivi in cui i partecipanti hanno avuto l'opportunità di imparare approcci pratici all'applicazione della medicina integrativa. Molti partecipanti hanno espresso il loro entusiasmo per l'opportunità di apprendere da esperti di fama internazionale e di costruire nuove reti nel campo della medicina integrativa.",
            es: "El Congreso Mundial sobre Medicina Integrativa de este año reunió a una diversa gama de profesionales de los campos de la medicina, la naturopatía y las terapias alternativas para discutir el futuro de la atención médica. La conferencia se centró en la creciente importancia de los enfoques integrativos que combinan tratamientos médicos convencionales con métodos alternativos y holísticos para proporcionar una atención médica más integral e individualizada. Los temas clave incluyeron el papel de la prevención en la gestión de enfermedades crónicas, la integración de tecnologías digitales para apoyar la atención al paciente y la creciente demanda de remedios naturales y terapias personalizadas. Se hizo hincapié en la necesidad de incorporar más el enfoque en el paciente y el enfoque holístico en la medicina convencional. Varios oradores destacaron que el futuro de la atención médica requerirá una colaboración más estrecha entre los médicos tradicionales y los expertos en métodos de curación alternativos. Además de las charlas, hubo talleres interactivos donde los asistentes tuvieron la oportunidad de aprender enfoques prácticos para aplicar la medicina integrativa. Muchos participantes expresaron su entusiasmo por la oportunidad de aprender de expertos internacionales y construir nuevas redes en el campo de la medicina integrativa.",
            ru: "На Всемирном конгрессе по интегративной медицине этого года собрались самые разные специалисты из области медицины, натуропатии и альтернативных терапий, чтобы обсудить будущее здравоохранения. Конференция была посвящена растущей важности интегративных подходов, которые сочетают традиционные медицинские методы лечения с альтернативными и целостными методами для обеспечения более комплексного и индивидуального подхода к здоровью. Ключевые темы включали роль профилактики в управлении хроническими заболеваниями, интеграцию цифровых технологий для поддержки ухода за пациентами и растущий спрос на натуральные средства и персонализированные методы лечения. Особое внимание было уделено необходимости большего включения пациент-центрированных и целостных подходов в традиционную медицину. Несколько докладчиков подчеркнули, что будущее здравоохранения потребует более тесного сотрудничества между традиционными врачами и специалистами по альтернативным методам лечения. Помимо лекций, были проведены интерактивные мастер-классы, на которых участники могли освоить практические подходы к применению интегративной медицины. Многие участники выразили восторг по поводу возможности учиться у международно признанных экспертов и наладить новые связи в области интегративной медицины.",
            tr: "Bu yılki Dünya Entegratif Tıp Kongresi, tıbbın, naturopati ve alternatif terapilerin çeşitli alanlarından gelen uzmanları sağlık hizmetlerinin geleceğini tartışmak için bir araya getirdi. Konferans, geleneksel tıbbi tedavileri alternatif ve bütünsel yöntemlerle birleştirerek daha kapsamlı ve bireyselleştirilmiş sağlık hizmetleri sunmayı amaçlayan entegre yaklaşımların artan önemine odaklandı. Ana konular arasında kronik hastalıkların yönetiminde önleyici tedbirlerin rolü, hasta bakımını desteklemek için dijital teknolojilerin entegrasyonu ve doğal ilaçlar ve kişiselleştirilmiş terapiler için artan talep vardı. Konuşmacılar, geleneksel tıp uzmanları ile alternatif tedavi yöntemleri uzmanları arasında daha yakın işbirliği yapılması gerektiğini vurguladı. Konuşmaların yanı sıra, katılımcıların entegratif tıbbın uygulanmasına yönelik pratik yaklaşımları öğrenebilecekleri interaktif atölyeler düzenlendi. Birçok katılımcı, uluslararası üne sahip uzmanlardan öğrenme ve entegratif tıp alanında yeni ağlar kurma fırsatından duydukları heyecanı dile getirdi.",
            ar: "جمع مؤتمر هذا العام حول الطب التكاملي مجموعة متنوعة من المهنيين في مجالات الطب والعلاج الطبيعي والعلاجات البديلة لمناقشة مستقبل الرعاية الصحية. ركز المؤتمر على الأهمية المتزايدة للنهج التكاملية التي تجمع بين العلاجات الطبية التقليدية والأساليب البديلة والشاملة لتقديم رعاية صحية أكثر شمولية وتفردًا. تضمنت الموضوعات الرئيسية دور الوقاية في إدارة الأمراض المزمنة، ودمج التقنيات الرقمية لدعم رعاية المرضى، والطلب المتزايد على العلاجات الطبيعية والعلاجات الشخصية. تم التركيز بشكل خاص على الحاجة إلى إدماج التركيز على المريض والشمولية بشكل أكبر في الطب التقليدي. أكد العديد من المتحدثين أن مستقبل الرعاية الصحية سيتطلب تعاونًا أوثق بين الممارسين الطبيين التقليديين وخبراء العلاج البديل. بالإضافة إلى المحاضرات، كانت هناك ورش عمل تفاعلية حيث أتيحت للحضور فرصة تعلم الأساليب العملية لتطبيق الطب التكاملي. أعرب العديد من المشاركين عن حماسهم لفرصة التعلم من الخبراء الدوليين وبناء شبكات جديدة في مجال الطب التكاملي."
        },
        date: "2023-09-25",
        category: {
            de: "Gesundheit",
            en: "Health",
            fr: "Santé",
            it: "Salute",
            es: "Salud",
            ru: "Здоровье",
            tr: "Sağlık",
            ar: "الصحة"
        },
        image: "https://gratisography.com/wp-content/uploads/2024/03/gratisography-funflower-800x525.jpg"
    }


    // {
    //     id: 5,
    //     title: {
    //         de: "Trend-Report: Digitale Wellness-Angebote im Aufschwung",
    //         en: "Trend Report: Digital Wellness Offerings on the Rise"
    //     },
    //     excerpt: {
    //         de: "Eine aktuelle Analyse zeigt, dass digitale Wellness-Dienste in den letzten Jahren einen enormen Aufschwung erlebt haben. Dieser Trend lässt sich auf verschiedene Faktoren zurückführen. Zum einen haben die Auswirkungen der COVID-19-Pandemie dazu geführt, dass Menschen vermehrt nach alternativen Wegen gesucht haben, um ihre Gesundheit und ihr Wohlbefinden zu fördern, ohne physisch in ein Spa oder Wellness-Center gehen zu müssen. Zum anderen ermöglichen digitale Wellness-Angebote eine größere Flexibilität, da sie zu jeder Zeit und an jedem Ort genutzt werden können. Die Analyse ergab, dass vor allem Yoga- und Meditations-Apps sowie digitale Fitnesskurse stark nachgefragt werden. Diese Dienste bieten den Nutzern die Möglichkeit, ihre körperliche und geistige Gesundheit im eigenen Zuhause zu verbessern. Dabei profitieren sie von individuell zugeschnittenen Programmen, die auf ihre Bedürfnisse und Ziele abgestimmt sind.",
    //         en: "A recent analysis shows that digital wellness services have experienced a tremendous upswing in recent years. This trend can be attributed to various factors. On the one hand, the effects of the COVID-19 pandemic have led people to increasingly look for alternative ways to promote their health and well-being without having to physically go to a spa or wellness center. On the other hand, digital wellness offerings allow for greater flexibility as they can be used at any time and place. The analysis found that yoga and meditation apps, as well as digital fitness courses, are particularly in demand. These services offer users the opportunity to improve their physical and mental health in their own homes. They benefit from individually tailored programs that are aligned with their needs and goals."
    //     },
    //     date: "2023-04-20",
    //     category: {
    //         de: "Trends",
    //         en: "Trends"
    //     },
    //     image: "https://www.germany.travel/media/redaktion/erleben_geniessen_content/heilbaeder_und_kurorte/Sellin_Seebruecke_am_Baltischen_Meer.jpg"
    // },
    // {
    //     id: 6,
    //     title: {
    //         de: "Wellness-Tourismus in Deutschland erreicht Rekordhoch",
    //         en: "Wellness Tourism in Germany Reaches Record High"
    //     },
    //     excerpt: {
    //         de: "Der Wellness-Tourismus in Deutschland verzeichnet derzeit ein beeindruckendes Wachstum und hat ein neues Rekordhoch erreicht. Aktuelle Zahlen belegen, dass immer mehr Menschen nach Wellness-Erlebnissen suchen, um dem hektischen Alltag zu entfliehen und sich körperlich und geistig zu erholen. Der Anstieg ist nicht nur auf die wachsende Beliebtheit von Wellness-Aufenthalten zurückzuführen, sondern auch auf das vielfältige Angebot, das Wellness-Hotels und Resorts in Deutschland bieten. Besonders beliebt sind Einrichtungen, die traditionelle Heilmethoden mit modernen Wellness-Angeboten kombinieren. Deutschland hat sich in den letzten Jahren zu einem der führenden Wellness-Destinationen entwickelt, und viele internationale Gäste schätzen die hohe Qualität der Dienstleistungen. Der Wellness-Tourismus umfasst eine Vielzahl von Angeboten, darunter klassische Spa-Behandlungen, Detox-Programme, Yoga-Retreats und medizinische Wellness-Dienste.",
    //         en: "Wellness tourism in Germany is currently experiencing impressive growth and has reached a new record high. Current figures show that more and more people are seeking wellness experiences to escape the hectic everyday life and recover physically and mentally. The increase is not only due to the growing popularity of wellness stays, but also to the diverse range of offerings that wellness hotels and resorts in Germany provide. Particularly popular are facilities that combine traditional healing methods with modern wellness offerings. Germany has developed into one of the leading wellness destinations in recent years, and many international guests appreciate the high quality of services. Wellness tourism encompasses a variety of offerings, including classic spa treatments, detox programs, yoga retreats, and medical wellness services."
    //     },
    //     date: "2023-04-15",
    //     category: {
    //         de: "Statistiken",
    //         en: "Statistics"
    //     },
    //     image: "https://www.clavisconsultancy.com/wp-content/uploads/2023/08/medikal-wellness-ve-saglik-bilinci.jpg.webp"
    // }
]
