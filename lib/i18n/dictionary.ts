export type Language = "es" | "en" | "fr" | "de"

export const LANGUAGES: { code: Language; label: string }[] = [
  { code: "es", label: "ES" },
  { code: "en", label: "EN" },
  { code: "fr", label: "FR" },
  { code: "de", label: "DE" },
]

export const dictionary = {
  nav: {
    home: { es: "Inicio", en: "Home", fr: "Accueil", de: "Start" },
    properties: {
      es: "Propiedades",
      en: "Properties",
      fr: "Propriétés",
      de: "Immobilien",
    },
    about: { es: "Nosotras", en: "About", fr: "À propos", de: "Über uns" },
    contact: { es: "Contacto", en: "Contact", fr: "Contact", de: "Kontakt" },
  },
  hero: {
    eyebrow: {
      es: "Agencia de bienes raíces",
      en: "Real estate agency",
      fr: "Agence immobilière",
      de: "Immobilienagentur",
    },
    title: {
      es: "Lotes, casas y fincas en La Fortuna",
      en: "Lots, homes and farms in La Fortuna",
      fr: "Terrains, maisons et fincas à La Fortuna",
      de: "Grundstücke, Häuser und Höfe in La Fortuna",
    },
    subtitle: {
      es: "Somos Dayana y Ella, agentes locales. Te ayudamos a encontrar la propiedad que buscas y te acompañamos durante todo el proceso de compra.",
      en: "We're Dayana and Ella, local agents. We help you find the property you're looking for and guide you through the whole buying process.",
      fr: "Nous sommes Dayana et Ella, agentes locales. Nous vous aidons à trouver la propriété que vous cherchez et vous accompagnons tout au long de l'achat.",
      de: "Wir sind Dayana und Ella, Maklerinnen aus der Region. Wir helfen Ihnen, die passende Immobilie zu finden, und begleiten Sie durch den gesamten Kaufprozess.",
    },
    ctaProperties: {
      es: "Ver propiedades",
      en: "View properties",
      fr: "Voir les propriétés",
      de: "Immobilien ansehen",
    },
    ctaContact: {
      es: "Hablar con nosotras",
      en: "Talk to us",
      fr: "Discuter avec nous",
      de: "Mit uns sprechen",
    },
  },
  pillars: {
    one: {
      title: {
        es: "Propiedades exclusivas",
        en: "Exclusive properties",
        fr: "Propriétés exclusives",
        de: "Exklusive Immobilien",
      },
      body: {
        es: "Manejamos una cartera propia con opciones que no siempre llegan a los portales públicos.",
        en: "We manage our own portfolio, with options that don't always reach public listing sites.",
        fr: "Nous gérons notre propre portefeuille, avec des options qui n'arrivent pas toujours sur les portails publics.",
        de: "Wir führen ein eigenes Portfolio mit Angeboten, die nicht immer auf öffentlichen Portalen erscheinen.",
      },
    },
    two: {
      title: {
        es: "Ubicaciones privilegiadas",
        en: "Privileged locations",
        fr: "Emplacements privilégiés",
        de: "Bevorzugte Lagen",
      },
      body: {
        es: "Cada propiedad la elegimos pensando en vista, acceso, comunidad y entorno natural.",
        en: "Every property is chosen with view, access, community and surroundings in mind.",
        fr: "Chaque propriété est choisie en pensant à la vue, l'accès, la communauté et l'environnement.",
        de: "Jede Immobilie wählen wir mit Blick auf Aussicht, Zugang, Gemeinschaft und Umgebung.",
      },
    },
    three: {
      title: {
        es: "Asesoría personalizada",
        en: "Personal guidance",
        fr: "Accompagnement personnalisé",
        de: "Persönliche Beratung",
      },
      body: {
        es: "Te acompañamos en cada paso: visita, abogado, escritura y mudanza.",
        en: "We walk with you every step: viewing, lawyer, deed and move-in.",
        fr: "Nous vous accompagnons à chaque étape : visite, notaire, acte et installation.",
        de: "Wir begleiten Sie bei jedem Schritt: Besichtigung, Notar, Urkunde und Einzug.",
      },
    },
    four: {
      title: {
        es: "Conocimiento local",
        en: "Local knowledge",
        fr: "Connaissance locale",
        de: "Ortskenntnis",
      },
      body: {
        es: "Somos de La Fortuna. Conocemos los precios reales de la zona, los trámites y a la gente.",
        en: "We're from La Fortuna. We know the area's real prices, the paperwork and the people.",
        fr: "Nous sommes de La Fortuna. Nous connaissons les prix réels de la zone, les démarches et les gens.",
        de: "Wir kommen aus La Fortuna. Wir kennen die tatsächlichen Preise, die Abläufe und die Menschen vor Ort.",
      },
    },
  },
  fortuna: {
    eyebrow: { es: "La Fortuna", en: "La Fortuna", fr: "La Fortuna", de: "La Fortuna" },
    title: {
      es: "Vivir e invertir al pie del Volcán Arenal",
      en: "Living and investing at the foot of the Arenal Volcano",
      fr: "Vivre et investir au pied du volcan Arenal",
      de: "Leben und investieren am Fuße des Arenal-Vulkans",
    },
    p1: {
      es: "En los últimos veinte años, La Fortuna pasó de ser un pueblo agrícola a uno de los destinos turísticos más importantes de Costa Rica. Las aguas termales, las cascadas, los parques nacionales y el Volcán Arenal atraen a más de un millón de visitantes al año.",
      en: "Over the last twenty years, La Fortuna went from an agricultural town to one of Costa Rica's most important tourism destinations. Hot springs, waterfalls, national parks and the Arenal Volcano bring in over a million visitors a year.",
      fr: "En vingt ans, La Fortuna est passée d'un village agricole à l'une des destinations touristiques les plus importantes du Costa Rica. Les sources chaudes, les cascades, les parcs nationaux et le volcan Arenal attirent plus d'un million de visiteurs par an.",
      de: "In den letzten zwanzig Jahren wurde aus dem Landwirtschaftsort La Fortuna eines der wichtigsten Reiseziele Costa Ricas. Heiße Quellen, Wasserfälle, Nationalparks und der Vulkan Arenal ziehen jährlich mehr als eine Million Besucher an.",
    },
    p2: {
      es: "Esa demanda convirtió a la zona en un mercado inmobiliario estable: los alquileres vacacionales mantienen buena ocupación, la oferta hotelera sigue creciendo y cada año llegan más extranjeros a instalarse. Comprar en La Fortuna es invertir en una zona con demanda comprobada.",
      en: "That demand turned the area into a stable real estate market: vacation rentals keep good occupancy, the hotel offering keeps growing and more foreigners settle here every year. Buying in La Fortuna means investing in an area with proven demand.",
      fr: "Cette demande a fait de la région un marché immobilier stable : les locations saisonnières gardent un bon taux d'occupation, l'offre hôtelière continue de croître et chaque année davantage d'étrangers viennent s'y installer. Acheter à La Fortuna, c'est investir dans une zone à la demande prouvée.",
      de: "Diese Nachfrage hat die Region zu einem stabilen Immobilienmarkt gemacht: Ferienunterkünfte sind gut ausgelastet, das Hotelangebot wächst weiter und jedes Jahr lassen sich mehr Ausländer hier nieder. Wer in La Fortuna kauft, investiert in eine Region mit nachgewiesener Nachfrage.",
    },
    p3: {
      es: "Además del turismo, La Fortuna es un buen lugar para vivir. Tiene escuelas, clínicas, bancos y restaurantes, y se vive con tranquilidad, a pocos minutos de ríos, cataratas y parques nacionales.",
      en: "Beyond tourism, La Fortuna is a good place to live. It has schools, clinics, banks and restaurants, and life is quiet, just minutes from rivers, waterfalls and national parks.",
      fr: "Au-delà du tourisme, La Fortuna est un bon endroit où vivre. On y trouve des écoles, des cliniques, des banques et des restaurants, et la vie y est tranquille, à quelques minutes des rivières, des cascades et des parcs nationaux.",
      de: "Abgesehen vom Tourismus ist La Fortuna ein guter Ort zum Leben. Es gibt Schulen, Kliniken, Banken und Restaurants, und das Leben ist ruhig, nur wenige Minuten von Flüssen, Wasserfällen und Nationalparks entfernt.",
    },
    why: {
      title: {
        es: "¿Por qué invertir aquí?",
        en: "Why invest here",
        fr: "Pourquoi investir ici",
        de: "Warum hier investieren",
      },
      r1Title: {
        es: "Turismo consolidado",
        en: "Established tourism",
        fr: "Tourisme établi",
        de: "Etablierter Tourismus",
      },
      r1: {
        es: "El Arenal aparece en los itinerarios internacionales desde hace más de 30 años. La demanda es estable y se mantiene durante todo el año.",
        en: "The Arenal has been on international itineraries for over 30 years. Demand is stable and holds up year-round.",
        fr: "L'Arenal figure sur les itinéraires internationaux depuis plus de 30 ans. La demande est stable et se maintient toute l'année.",
        de: "Der Arenal steht seit über 30 Jahren auf internationalen Reiserouten. Die Nachfrage ist stabil und hält das ganze Jahr an.",
      },
      r2Title: {
        es: "Renta vacacional alta",
        en: "Strong vacation income",
        fr: "Rendement locatif fort",
        de: "Hohe Mieteinnahmen",
      },
      r2: {
        es: "Casas bien ubicadas facturan entre 200 y 400 USD por noche en temporada, con ocupaciones del 60–80%.",
        en: "Well-located homes earn between $200 and $400 per night in season, with 60–80% occupancy.",
        fr: "Les maisons bien situées rapportent entre 200 et 400 USD la nuit en saison, avec 60–80 % d'occupation.",
        de: "Gut gelegene Häuser erzielen in der Saison 200 bis 400 USD pro Nacht bei 60–80 % Auslastung.",
      },
      r3Title: {
        es: "Plusvalía constante",
        en: "Steady appreciation",
        fr: "Plus-value constante",
        de: "Stetige Wertsteigerung",
      },
      r3: {
        es: "Los lotes con vista al volcán o al lago han subido entre 7 y 10% anual en los últimos cinco años.",
        en: "Lots with volcano or lake views have risen 7–10% per year over the last five years.",
        fr: "Les terrains avec vue sur le volcan ou le lac ont pris 7 à 10 % par an ces cinq dernières années.",
        de: "Grundstücke mit Vulkan- oder Seeblick sind in den letzten fünf Jahren jährlich um 7 bis 10 % gestiegen.",
      },
      r4Title: {
        es: "Conexión fácil",
        en: "Easy connection",
        fr: "Bonne accessibilité",
        de: "Gute Anbindung",
      },
      r4: {
        es: "Dos horas y media al aeropuerto de San José, una hora al aeropuerto de Liberia y carretera asfaltada en buen estado.",
        en: "Two and a half hours to San José airport, one hour to Liberia airport, paved roads in good shape.",
        fr: "Deux heures trente de l'aéroport de San José, une heure de celui de Liberia, routes goudronnées en bon état.",
        de: "Zweieinhalb Stunden bis zum Flughafen San José, eine Stunde nach Liberia, Asphaltstraßen in gutem Zustand.",
      },
    },
    stats: {
      visitors: {
        es: "Visitantes anuales",
        en: "Annual visitors",
        fr: "Visiteurs par an",
        de: "Besucher pro Jahr",
      },
      visitorsValue: { es: "+1M", en: "+1M", fr: "+1M", de: "+1M" },
      growth: {
        es: "Crecimiento turístico",
        en: "Tourism growth",
        fr: "Croissance touristique",
        de: "Tourismuswachstum",
      },
      growthValue: { es: "8% anual", en: "8% / yr", fr: "8 % / an", de: "8 % p.a." },
      airport: { es: "Aeropuerto SJO", en: "SJO Airport", fr: "Aéroport SJO", de: "Flughafen SJO" },
      airportValue: { es: "2.5 h", en: "2.5 hr", fr: "2 h 30", de: "2,5 Std" },
      appreciation: {
        es: "Plusvalía anual",
        en: "Yearly appreciation",
        fr: "Plus-value annuelle",
        de: "Jährliche Wertsteigerung",
      },
      appreciationValue: { es: "7–10%", en: "7–10%", fr: "7–10 %", de: "7–10 %" },
    },
  },
  agents: {
    eyebrow: {
      es: "Las agentes",
      en: "The agents",
      fr: "Les agents",
      de: "Die Maklerinnen",
    },
    title: {
      es: "Dayana y Ella, de La Fortuna",
      en: "Dayana and Ella, from La Fortuna",
      fr: "Dayana et Ella, de La Fortuna",
      de: "Dayana und Ella, aus La Fortuna",
    },
    intro: {
      es: "Las dos crecieron en La Fortuna y conocen la zona, los precios y a la gente. Por eso muchas veces saben de propiedades antes de que salgan al mercado.",
      en: "Both grew up in La Fortuna and know the area, the prices and the people. That's why they often hear about properties before they reach the market.",
      fr: "Toutes deux ont grandi à La Fortuna et connaissent la région, les prix et les gens. C'est pourquoi elles entendent souvent parler des propriétés avant leur mise sur le marché.",
      de: "Beide sind in La Fortuna aufgewachsen und kennen die Gegend, die Preise und die Menschen. Deshalb erfahren sie oft von Immobilien, bevor diese auf den Markt kommen.",
    },
    dayana: {
      role: {
        es: "Agente · Cofundadora",
        en: "Agent · Co-founder",
        fr: "Agent · Cofondatrice",
        de: "Maklerin · Mitgründerin",
      },
      bio: {
        es: "Dayana se especializa en casas familiares y fincas productivas. Creció en el campo y conoce de primera mano el trabajo con la tierra y los animales.",
        en: "Dayana specializes in family homes and productive farms. She grew up in the countryside and knows the work with land and animals first-hand.",
        fr: "Dayana est spécialisée dans les maisons familiales et les fincas productives. Elle a grandi à la campagne et connaît de première main le travail de la terre et des animaux.",
        de: "Dayana ist auf Familienhäuser und produktive Höfe spezialisiert. Sie ist auf dem Land aufgewachsen und kennt die Arbeit mit Boden und Tieren aus erster Hand.",
      },
    },
    ella: {
      role: {
        es: "Agente · Cofundadora",
        en: "Agent · Co-founder",
        fr: "Agent · Cofondatrice",
        de: "Maklerin · Mitgründerin",
      },
      bio: {
        es: "Ella se especializa en inversiones turísticas y lotes para desarrollar. Es bilingüe y acompaña a compradores extranjeros durante todo el proceso, desde la visita hasta la escritura.",
        en: "Ella specializes in tourism investments and lots to develop. She's bilingual and guides foreign buyers through the whole process, from the visit to the deed.",
        fr: "Ella est spécialisée dans les investissements touristiques et les terrains à développer. Bilingue, elle accompagne les acheteurs étrangers tout au long du processus, de la visite à l'acte.",
        de: "Ella ist auf Tourismusinvestitionen und Baugrundstücke spezialisiert. Sie ist zweisprachig und begleitet ausländische Käufer durch den gesamten Prozess, von der Besichtigung bis zur Urkunde.",
      },
    },
  },
  featured: {
    eyebrow: {
      es: "Propiedades destacadas",
      en: "Featured properties",
      fr: "Propriétés en vedette",
      de: "Ausgewählte Immobilien",
    },
    title: {
      es: "Nuestra selección actual",
      en: "Our current selection",
      fr: "Notre sélection actuelle",
      de: "Unsere aktuelle Auswahl",
    },
    viewAll: {
      es: "Ver todas las propiedades",
      en: "View all properties",
      fr: "Voir toutes les propriétés",
      de: "Alle Immobilien ansehen",
    },
  },
  properties: {
    title: {
      es: "Propiedades",
      en: "Properties",
      fr: "Propriétés",
      de: "Immobilien",
    },
    subtitle: {
      es: "Conocemos personalmente cada propiedad que publicamos. Si alguna te interesa, escríbenos y coordinamos una visita.",
      en: "We personally know every property we list. If one interests you, write to us and we'll set up a visit.",
      fr: "Nous connaissons personnellement chaque propriété publiée. Si l'une d'elles vous intéresse, écrivez-nous et nous organiserons une visite.",
      de: "Wir kennen jede gelistete Immobilie persönlich. Wenn Sie eine interessiert, schreiben Sie uns und wir vereinbaren eine Besichtigung.",
    },
    filterAll: { es: "Todas", en: "All", fr: "Toutes", de: "Alle" },
    filterHouse: { es: "Casas", en: "Houses", fr: "Maisons", de: "Häuser" },
    filterLot: { es: "Lotes", en: "Lots", fr: "Terrains", de: "Grundstücke" },
    filterFarm: { es: "Fincas", en: "Farms", fr: "Fincas", de: "Höfe" },
    bedrooms: {
      es: "Habitaciones",
      en: "Bedrooms",
      fr: "Chambres",
      de: "Schlafzimmer",
    },
    bathrooms: { es: "Baños", en: "Bathrooms", fr: "Salles de bain", de: "Bäder" },
    area: {
      es: "Área construida",
      en: "Built area",
      fr: "Surface bâtie",
      de: "Wohnfläche",
    },
    lotSize: {
      es: "Tamaño del lote",
      en: "Lot size",
      fr: "Surface du terrain",
      de: "Grundstücksgröße",
    },
    type: { es: "Tipo", en: "Type", fr: "Type", de: "Typ" },
    location: { es: "Ubicación", en: "Location", fr: "Emplacement", de: "Lage" },
    price: { es: "Precio", en: "Price", fr: "Prix", de: "Preis" },
    viewDetails: {
      es: "Ver detalles",
      en: "View details",
      fr: "Voir les détails",
      de: "Details ansehen",
    },
    description: { es: "Descripción", en: "Description", fr: "Description", de: "Beschreibung" },
    highlights: {
      es: "Aspectos destacados",
      en: "Highlights",
      fr: "Points forts",
      de: "Highlights",
    },
    inquire: {
      es: "Consultar esta propiedad",
      en: "Inquire about this property",
      fr: "Demander des informations",
      de: "Anfrage zu dieser Immobilie",
    },
    scheduleVisit: {
      es: "Agendar una visita",
      en: "Schedule a visit",
      fr: "Planifier une visite",
      de: "Besichtigung vereinbaren",
    },
    listedBy: {
      es: "Listada por",
      en: "Listed by",
      fr: "Présentée par",
      de: "Angeboten von",
    },
    map: {
      es: "Ubicación aproximada",
      en: "Approximate location",
      fr: "Localisation approximative",
      de: "Ungefähre Lage",
    },
    gallery: { es: "Galería", en: "Gallery", fr: "Galerie", de: "Galerie" },
    backToProperties: {
      es: "Volver a propiedades",
      en: "Back to properties",
      fr: "Retour aux propriétés",
      de: "Zurück zu Immobilien",
    },
  },
  about: {
    title: {
      es: "Sobre EllaDay Homes",
      en: "About EllaDay Homes",
      fr: "À propos d'EllaDay Homes",
      de: "Über EllaDay Homes",
    },
    subtitle: {
      es: "Una agencia de bienes raíces fundada por dos mujeres de La Fortuna.",
      en: "A real estate agency founded by two women from La Fortuna.",
      fr: "Une agence immobilière fondée par deux femmes de La Fortuna.",
      de: "Eine Immobilienagentur, gegründet von zwei Frauen aus La Fortuna.",
    },
    storyTitle: {
      es: "Nuestra historia",
      en: "Our story",
      fr: "Notre histoire",
      de: "Unsere Geschichte",
    },
    story1: {
      es: "EllaDay Homes se dedica a la venta de lotes, casas y fincas en La Fortuna de San Carlos. Crecimos aquí, conocemos la zona y trabajamos solo con propiedades que hemos visitado y revisado nosotras mismas.",
      en: "EllaDay Homes sells lots, homes and farms in La Fortuna de San Carlos. We grew up here, we know the area, and we only work with properties we've visited and checked ourselves.",
      fr: "EllaDay Homes vend des terrains, des maisons et des fincas à La Fortuna de San Carlos. Nous avons grandi ici, nous connaissons la région et nous ne travaillons qu'avec des propriétés que nous avons visitées et vérifiées nous-mêmes.",
      de: "EllaDay Homes verkauft Grundstücke, Häuser und Höfe in La Fortuna de San Carlos. Wir sind hier aufgewachsen, kennen die Region und arbeiten nur mit Immobilien, die wir selbst besichtigt und geprüft haben.",
    },
    story2: {
      es: "Empezamos la agencia porque vimos que mucha gente compraba mal: sin información clara, con precios inflados o con trámites a medias. Nuestro trabajo es que compres bien, con datos reales, papeles en orden y acompañamiento durante todo el proceso.",
      en: "We started the agency because we saw many people buying badly: without clear information, with inflated prices or half-done paperwork. Our job is to help you buy well, with real data, papers in order and support through the whole process.",
      fr: "Nous avons créé l'agence parce que nous voyions beaucoup de gens mal acheter : sans information claire, à des prix gonflés ou avec des démarches incomplètes. Notre travail est que vous achetiez bien, avec des données réelles, des documents en règle et un accompagnement tout au long du processus.",
      de: "Wir haben die Agentur gegründet, weil wir sahen, dass viele Menschen schlecht kauften: ohne klare Informationen, zu überhöhten Preisen oder mit unvollständigen Unterlagen. Unsere Aufgabe ist, dass Sie gut kaufen: mit echten Daten, geordneten Papieren und Begleitung während des gesamten Prozesses.",
    },
    story3: {
      es: "Más que propiedades, creamos oportunidades y nuevos comienzos.",
      en: "More than properties, we create opportunities and new beginnings.",
      fr: "Plus que des propriétés, nous créons des opportunités et de nouveaux départs.",
      de: "Mehr als Immobilien — wir schaffen Chancen und neue Anfänge.",
    },
    essenceTitle: {
      es: "La esencia de la marca",
      en: "Brand essence",
      fr: "L'essence de la marque",
      de: "Markenessenz",
    },
    essenceIntro: {
      es: "Vendemos propiedades, pero el criterio para elegirlas es siempre el mismo: buena ubicación, precio justo y un entorno donde se pueda vivir bien. Estas son las ideas que guían nuestro trabajo:",
      en: "We sell properties, but the criteria for choosing them never change: good location, fair price and a setting where you can live well. These are the ideas that guide our work:",
      fr: "Nous vendons des propriétés, mais les critères pour les choisir restent les mêmes : bon emplacement, prix juste et un cadre où l'on peut bien vivre. Voici les idées qui guident notre travail :",
      de: "Wir verkaufen Immobilien, aber die Kriterien bei der Auswahl bleiben dieselben: gute Lage, fairer Preis und ein Umfeld, in dem man gut leben kann. Diese Ideen leiten unsere Arbeit:",
    },
    essenceItems: {
      one: { es: "Tranquilidad", en: "Peace", fr: "Tranquillité", de: "Ruhe" },
      two: { es: "Naturaleza", en: "Nature", fr: "Nature", de: "Natur" },
      three: {
        es: "Inversión inteligente",
        en: "Smart investment",
        fr: "Investissement réfléchi",
        de: "Kluge Investition",
      },
      four: {
        es: "Estilo de vida",
        en: "Lifestyle",
        fr: "Art de vivre",
        de: "Lebensstil",
      },
      five: {
        es: "Vida en La Fortuna",
        en: "Life in La Fortuna",
        fr: "La vie à La Fortuna",
        de: "Leben in La Fortuna",
      },
    },
    valuesTitle: {
      es: "Nuestros valores",
      en: "Our values",
      fr: "Nos valeurs",
      de: "Unsere Werte",
    },
    values: {
      trust: {
        title: { es: "Confianza", en: "Trust", fr: "Confiance", de: "Vertrauen" },
        body: {
          es: "Somos transparentes y honestas en cada parte del proceso, de principio a fin.",
          en: "We are transparent and honest at every step, from start to finish.",
          fr: "Nous sommes transparentes et honnêtes à chaque étape, du début à la fin.",
          de: "Wir sind in jedem Schritt transparent und ehrlich, von Anfang bis Ende.",
        },
      },
      closeness: {
        title: {
          es: "Cercanía",
          en: "Closeness",
          fr: "Proximité",
          de: "Nähe",
        },
        body: {
          es: "Respondemos rápido y explicamos cada paso con claridad, sin tecnicismos innecesarios.",
          en: "We respond quickly and explain each step clearly, without unnecessary jargon.",
          fr: "Nous répondons vite et expliquons chaque étape clairement, sans jargon inutile.",
          de: "Wir antworten schnell und erklären jeden Schritt klar, ohne unnötigen Fachjargon.",
        },
      },
      elegance: {
        title: {
          es: "Elegancia",
          en: "Elegance",
          fr: "Élégance",
          de: "Eleganz",
        },
        body: {
          es: "Mostramos cada propiedad con una imagen moderna, limpia y cuidada al detalle.",
          en: "Every property is shown with a modern, clean image and care for every detail.",
          fr: "Chaque propriété est présentée avec une image moderne, épurée et soignée dans le détail.",
          de: "Jede Immobilie zeigen wir mit modernem, klarem Bild und Liebe zum Detail.",
        },
      },
      nature: {
        title: {
          es: "Naturaleza",
          en: "Nature",
          fr: "Nature",
          de: "Natur",
        },
        body: {
          es: "Conectamos casas y lotes con la belleza natural de La Fortuna. Es lo que hace especial cada propiedad.",
          en: "We connect homes and lots with the natural beauty of La Fortuna. It's what makes each property special.",
          fr: "Nous relions maisons et terrains à la beauté naturelle de La Fortuna. C'est ce qui rend chaque propriété spéciale.",
          de: "Wir verbinden Häuser und Grundstücke mit der Naturschönheit von La Fortuna. Das macht jede Immobilie besonders.",
        },
      },
      commitment: {
        title: {
          es: "Compromiso",
          en: "Commitment",
          fr: "Engagement",
          de: "Engagement",
        },
        body: {
          es: "Buscamos la mejor opción para cada persona o familia, no la que se vende más rápido.",
          en: "We look for the best option for each person or family, not the one that sells fastest.",
          fr: "Nous cherchons la meilleure option pour chaque personne ou famille, pas la plus rapide à vendre.",
          de: "Wir suchen die beste Option für jede Person oder Familie — nicht die, die sich am schnellsten verkauft.",
        },
      },
      growth: {
        title: {
          es: "Crecimiento",
          en: "Growth",
          fr: "Croissance",
          de: "Wachstum",
        },
        body: {
          es: "Acompañamos a nuestros clientes a invertir bien y construir futuro en la zona.",
          en: "We help our clients invest well and build a future in the area.",
          fr: "Nous aidons nos clients à investir judicieusement et à bâtir un avenir dans la région.",
          de: "Wir helfen unseren Kundinnen und Kunden, klug zu investieren und Zukunft in der Region aufzubauen.",
        },
      },
    },
    missionTitle: { es: "Misión", en: "Mission", fr: "Mission", de: "Mission" },
    mission: {
      es: "Ayudar a las personas a encontrar el lugar adecuado para vivir o invertir en La Fortuna, con propiedades bien seleccionadas y un acompañamiento cercano y confiable.",
      en: "Help people find the right place to live or invest in La Fortuna, with well-selected properties and close, reliable support.",
      fr: "Aider chacun à trouver le bon endroit pour vivre ou investir à La Fortuna, avec des propriétés bien sélectionnées et un accompagnement proche et fiable.",
      de: "Menschen helfen, den richtigen Ort zum Leben oder Investieren in La Fortuna zu finden, mit gut ausgewählten Immobilien und einer nahen, verlässlichen Begleitung.",
    },
    visionTitle: { es: "Visión", en: "Vision", fr: "Vision", de: "Vision" },
    vision: {
      es: "Ser la agencia de referencia en la zona norte de Costa Rica, reconocida por la calidad de sus propiedades y la seriedad de su trabajo.",
      en: "Be the go-to agency in Costa Rica's northern zone, known for the quality of its properties and the seriousness of its work.",
      fr: "Être l'agence de référence dans la zone nord du Costa Rica, reconnue pour la qualité de ses propriétés et le sérieux de son travail.",
      de: "Die führende Agentur in Costa Ricas Nordregion sein, bekannt für die Qualität ihrer Immobilien und die Seriosität ihrer Arbeit.",
    },
    animalsTitle: {
      es: "También por los animales",
      en: "And for the animals",
      fr: "Et pour les animaux",
      de: "Auch für die Tiere",
    },
    animals1: {
      es: "Dayana y Ella crecieron rodeadas de animales: perros de la casa, caballos en el potrero, gallinas, gatos que llegaban solos. Hoy ese cariño sigue ahí. En su vida diaria cuidan rescatados y apoyan refugios locales.",
      en: "Dayana and Ella grew up surrounded by animals: dogs in the house, horses in the field, chickens, cats that just showed up. That love is still there. Today they care for rescues and support local shelters.",
      fr: "Dayana et Ella ont grandi entourées d'animaux : chiens à la maison, chevaux au pré, poules, chats arrivés tout seuls. Cet amour est resté. Aujourd'hui elles s'occupent d'animaux recueillis et soutiennent des refuges locaux.",
      de: "Dayana und Ella wuchsen umgeben von Tieren auf: Hunde im Haus, Pferde auf der Koppel, Hühner, Katzen, die einfach kamen. Diese Zuneigung ist geblieben. Heute kümmern sie sich um Tiere aus dem Tierschutz und unterstützen lokale Heime.",
    },
    animals2: {
      es: "Por eso, cuando mostramos una propiedad, también nos fijamos en lo que importa para las mascotas: patios cerrados, espacio para correr y comunidades donde son bienvenidas.",
      en: "That's why, when we show a property, we also look at what matters for pets: enclosed yards, room to run and neighborhoods where they're welcome.",
      fr: "C'est pourquoi, lorsque nous montrons une propriété, nous regardons aussi ce qui compte pour les animaux : cours fermées, de l'espace pour courir et des voisinages où ils sont les bienvenus.",
      de: "Deshalb achten wir beim Zeigen einer Immobilie auch auf das, was für Haustiere zählt: eingezäunte Grundstücke, Platz zum Laufen und Nachbarschaften, in denen sie willkommen sind.",
    },
  },
  contact: {
    title: {
      es: "Conversemos",
      en: "Let's talk",
      fr: "Parlons-en",
      de: "Sprechen wir",
    },
    subtitle: {
      es: "Escríbenos por WhatsApp, correo o el formulario. Te respondemos en menos de 24 horas.",
      en: "Reach out via WhatsApp, email or the form. We reply within 24 hours.",
      fr: "Écrivez-nous par WhatsApp, e-mail ou le formulaire. Nous répondons en moins de 24 heures.",
      de: "Schreiben Sie uns per WhatsApp, E-Mail oder Formular. Wir antworten innerhalb von 24 Stunden.",
    },
    formName: { es: "Nombre", en: "Name", fr: "Nom", de: "Name" },
    formEmail: {
      es: "Correo electrónico",
      en: "Email",
      fr: "E-mail",
      de: "E-Mail",
    },
    formPhone: {
      es: "Teléfono (opcional)",
      en: "Phone (optional)",
      fr: "Téléphone (facultatif)",
      de: "Telefon (optional)",
    },
    formMessage: { es: "Mensaje", en: "Message", fr: "Message", de: "Nachricht" },
    formSubmit: {
      es: "Enviar mensaje",
      en: "Send message",
      fr: "Envoyer le message",
      de: "Nachricht senden",
    },
    formSuccess: {
      es: "¡Gracias! Te contactamos pronto.",
      en: "Thank you! We'll be in touch soon.",
      fr: "Merci ! Nous vous contactons bientôt.",
      de: "Danke! Wir melden uns bald.",
    },
    formError: {
      es: "Hubo un problema. Intenta de nuevo o escríbenos por WhatsApp.",
      en: "Something went wrong. Please try again or message us on WhatsApp.",
      fr: "Un problème est survenu. Réessayez ou écrivez-nous sur WhatsApp.",
      de: "Etwas ist schiefgelaufen. Versuchen Sie es erneut oder schreiben Sie uns per WhatsApp.",
    },
    directContact: {
      es: "Contacto directo",
      en: "Direct contact",
      fr: "Contact direct",
      de: "Direkter Kontakt",
    },
    sendWhatsApp: {
      es: "Enviar WhatsApp",
      en: "Send WhatsApp",
      fr: "Envoyer un WhatsApp",
      de: "WhatsApp senden",
    },
    sendEmail: {
      es: "Enviar email",
      en: "Send email",
      fr: "Envoyer un e-mail",
      de: "E-Mail senden",
    },
  },
  footer: {
    tagline: {
      es: "Venta de lotes, casas y fincas en La Fortuna, Costa Rica.",
      en: "Lots, homes and farms for sale in La Fortuna, Costa Rica.",
      fr: "Terrains, maisons et fincas à vendre à La Fortuna, Costa Rica.",
      de: "Grundstücke, Häuser und Höfe zum Verkauf in La Fortuna, Costa Rica.",
    },
    explore: {
      es: "Explorar",
      en: "Explore",
      fr: "Explorer",
      de: "Entdecken",
    },
    contact: { es: "Contacto", en: "Contact", fr: "Contact", de: "Kontakt" },
    rights: {
      es: "Todos los derechos reservados.",
      en: "All rights reserved.",
      fr: "Tous droits réservés.",
      de: "Alle Rechte vorbehalten.",
    },
  },
  common: {
    learnMore: {
      es: "Conocer más",
      en: "Learn more",
      fr: "En savoir plus",
      de: "Mehr erfahren",
    },
    fromPrice: { es: "Desde", en: "From", fr: "À partir de", de: "Ab" },
  },
} as const

type Dict = typeof dictionary
type DeepPath<T, P extends string = ""> = T extends {
  es: string
  en: string
  fr: string
  de: string
}
  ? P
  : {
      [K in keyof T]: K extends string
        ? DeepPath<T[K], P extends "" ? K : `${P}.${K}`>
        : never
    }[keyof T]

export type DictKey = DeepPath<Dict>

export function translate(key: DictKey, lang: Language): string {
  const parts = key.split(".")
  let node: unknown = dictionary
  for (const part of parts) {
    if (typeof node === "object" && node !== null && part in node) {
      node = (node as Record<string, unknown>)[part]
    } else {
      return key
    }
  }
  if (typeof node === "object" && node !== null) {
    const obj = node as Record<string, string>
    if (lang in obj) return obj[lang]
    if ("en" in obj) return obj.en
    if ("es" in obj) return obj.es
  }
  return key
}
