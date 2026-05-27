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
      es: "Bienes raíces en La Fortuna",
      en: "Real estate in La Fortuna",
      fr: "Immobilier à La Fortuna",
      de: "Immobilien in La Fortuna",
    },
    title: {
      es: "Más que propiedades, nuevos comienzos",
      en: "More than properties — new beginnings",
      fr: "Plus que des propriétés, de nouveaux départs",
      de: "Mehr als Immobilien — neue Anfänge",
    },
    subtitle: {
      es: "Dayana y Ella son de La Fortuna y conocen la zona como pocas. Te acompañamos a encontrar el lote, la casa o la finca donde empieza tu próxima historia.",
      en: "Dayana and Ella are from La Fortuna and know the area like few do. We'll help you find the lot, home or farm where your next story begins.",
      fr: "Dayana et Ella sont originaires de La Fortuna et connaissent la région comme peu d'autres. Nous vous aidons à trouver le terrain, la maison ou la finca où commence votre prochaine histoire.",
      de: "Dayana und Ella stammen aus La Fortuna und kennen die Gegend wie kaum jemand sonst. Wir begleiten Sie zum Grundstück, Haus oder Hof, an dem Ihre nächste Geschichte beginnt.",
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
        es: "Una cartera curada con opciones que muchas veces no llegan a portales públicos.",
        en: "A curated portfolio with options that rarely reach public listings.",
        fr: "Un portefeuille curé avec des options qui n'arrivent rarement aux portails publics.",
        de: "Ein kuratiertes Portfolio mit Optionen, die selten auf öffentlichen Portalen erscheinen.",
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
        es: "Tu hogar, nuestra pasión",
        en: "Your home, our passion",
        fr: "Votre maison, notre passion",
        de: "Ihr Zuhause, unsere Leidenschaft",
      },
      body: {
        es: "Nos tomamos personal cada propiedad. Si la mostramos, es porque también la elegiríamos.",
        en: "We take every property personally. If we show it, it's because we'd choose it too.",
        fr: "Nous prenons chaque propriété à cœur. Si nous la montrons, c'est que nous la choisirions aussi.",
        de: "Wir nehmen jede Immobilie persönlich. Wenn wir sie zeigen, würden wir sie auch selbst wählen.",
      },
    },
  },
  fortuna: {
    eyebrow: { es: "La Fortuna", en: "La Fortuna", fr: "La Fortuna", de: "La Fortuna" },
    title: {
      es: "Donde el Arenal cambia la vida que imaginas",
      en: "Where the Arenal reshapes the life you imagine",
      fr: "Là où l'Arenal change la vie que vous imaginez",
      de: "Wo der Arenal das Leben verändert, das Sie sich vorstellen",
    },
    p1: {
      es: "La Fortuna se transformó. Lo que hace dos décadas era un pueblo agrícola tranquilo, hoy es uno de los destinos turísticos más importantes de Costa Rica. Aguas termales, cascadas, parques nacionales y el icónico Volcán Arenal atraen a más de un millón de visitantes al año.",
      en: "La Fortuna transformed. What was a quiet agricultural town two decades ago is now one of Costa Rica's leading tourism destinations. Hot springs, waterfalls, national parks and the iconic Arenal Volcano draw over a million visitors each year.",
      fr: "La Fortuna s'est transformée. Ce qui était un paisible village agricole il y a vingt ans est aujourd'hui l'une des principales destinations touristiques du Costa Rica. Sources chaudes, cascades, parcs nationaux et l'emblématique volcan Arenal attirent plus d'un million de visiteurs par an.",
      de: "La Fortuna hat sich gewandelt. Was vor zwei Jahrzehnten ein ruhiger Landwirtschaftsort war, ist heute eines der wichtigsten Reiseziele Costa Ricas. Heiße Quellen, Wasserfälle, Nationalparks und der ikonische Vulkan Arenal ziehen jährlich über eine Million Besucher an.",
    },
    p2: {
      es: "Esa demanda sostenida convirtió a la zona en un mercado inmobiliario sólido: alquileres vacacionales con buena ocupación, hospitalidad en crecimiento y una comunidad de extranjeros que sigue eligiendo establecerse aquí. Comprar en La Fortuna es invertir en una región con motor propio.",
      en: "That steady demand turned the area into a solid real estate market: vacation rentals with strong occupancy, growing hospitality and an expat community that keeps choosing to settle here. Buying in La Fortuna means investing in a region with its own engine.",
      fr: "Cette demande soutenue a fait de la région un marché immobilier solide : locations saisonnières au bon taux d'occupation, hôtellerie en croissance et une communauté d'expatriés qui continue de s'y installer. Acheter à La Fortuna, c'est investir dans une région qui avance par elle-même.",
      de: "Diese anhaltende Nachfrage hat die Region zu einem stabilen Immobilienmarkt gemacht: Ferienunterkünfte mit hoher Auslastung, wachsende Hotellerie und eine internationale Gemeinschaft, die sich weiterhin hier niederlässt. Wer in La Fortuna kauft, investiert in eine Region mit eigenem Motor.",
    },
    p3: {
      es: "Pero La Fortuna no es solo un destino: es un lugar para vivir. Clima fresco gracias a la altura, gente cercana, escuelas, clínicas, restaurantes y una vida tranquila a minutos de la naturaleza más impresionante del país.",
      en: "But La Fortuna isn't only a destination — it's a place to live. Cool climate thanks to its elevation, warm people, schools, clinics, restaurants and quiet days minutes away from the country's most striking nature.",
      fr: "Mais La Fortuna n'est pas qu'une destination : c'est un lieu où l'on vit. Climat frais grâce à l'altitude, gens chaleureux, écoles, cliniques, restaurants et journées paisibles à quelques minutes de la nature la plus impressionnante du pays.",
      de: "Doch La Fortuna ist nicht nur ein Ziel — es ist ein Ort zum Leben. Kühles Klima dank der Höhenlage, herzliche Menschen, Schulen, Kliniken, Restaurants und ruhige Tage nur wenige Minuten von der eindrucksvollsten Natur des Landes entfernt.",
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
        es: "El Arenal lleva más de 30 años en los itinerarios internacionales. No es un boom: es una demanda madura.",
        en: "The Arenal has been on international itineraries for over 30 years. Not a boom — a mature demand.",
        fr: "L'Arenal figure sur les itinéraires internationaux depuis plus de 30 ans. Pas un effet de mode : une demande mature.",
        de: "Der Arenal steht seit über 30 Jahren auf internationalen Reiseplänen. Kein Boom — gereifte Nachfrage.",
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
      es: "Crecieron al pie del Arenal. Conocen a las familias, las fincas y los caminos viejos. Esa cercanía nos abre puertas que están cerradas para el resto.",
      en: "They grew up at the foot of the Arenal. They know the families, the farms and the old back roads. That closeness opens doors that stay closed for everyone else.",
      fr: "Elles ont grandi au pied de l'Arenal. Elles connaissent les familles, les fincas et les vieux chemins. Cette proximité nous ouvre des portes restées fermées aux autres.",
      de: "Sie wuchsen am Fuße des Arenal auf. Sie kennen die Familien, die Höfe und die alten Wege. Diese Nähe öffnet uns Türen, die anderen verschlossen bleiben.",
    },
    dayana: {
      role: {
        es: "Agente · Cofundadora",
        en: "Agent · Co-founder",
        fr: "Agent · Cofondatrice",
        de: "Maklerin · Mitgründerin",
      },
      bio: {
        es: "Dayana se mueve mejor en casas familiares y fincas con tierra productiva. Su pasión por el campo y los animales se nota apenas la conoces.",
        en: "Dayana is at her best with family homes and productive farms. Her love for the countryside and animals shows the moment you meet her.",
        fr: "Dayana se sent à l'aise avec les maisons familiales et les fincas productives. Sa passion pour la campagne et les animaux se voit dès la première rencontre.",
        de: "Dayana ist in ihrem Element bei Familienhäusern und produktiven Höfen. Ihre Liebe zum Land und zu Tieren zeigt sich vom ersten Moment an.",
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
        es: "Ella se especializa en inversiones turísticas y lotes con potencial. Su red de contactos y trato bilingüe hacen mucho más simple el proceso para compradores de fuera.",
        en: "Ella focuses on tourism investments and lots with development potential. Her network and bilingual service make the process much simpler for buyers from abroad.",
        fr: "Ella se consacre aux investissements touristiques et aux terrains à fort potentiel. Son réseau et son service bilingue facilitent grandement la démarche pour les acheteurs étrangers.",
        de: "Ella konzentriert sich auf Tourismusinvestitionen und Grundstücke mit Entwicklungspotenzial. Ihr Netzwerk und ihr zweisprachiger Service machen den Prozess für ausländische Käufer deutlich einfacher.",
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
      es: "Una selección hecha a mano",
      en: "A hand-picked selection",
      fr: "Une sélection faite à la main",
      de: "Eine handverlesene Auswahl",
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
      es: "Cada propiedad la elegimos nosotras. Si está aquí, es porque vale la pena venir a verla.",
      en: "Each property is chosen by us. If it's here, it's worth coming to see.",
      fr: "Chaque propriété est choisie par nous. Si elle figure ici, elle mérite la visite.",
      de: "Jede Immobilie wählen wir selbst. Wenn sie hier steht, lohnt sich der Besuch.",
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
      es: "Cada propiedad cuenta una historia. La nuestra empezó por amor a esta zona y a la gente que la habita.",
      en: "Every property tells a story. Ours started with love for this land and the people who live here.",
      fr: "Chaque propriété raconte une histoire. La nôtre a commencé par amour pour cette terre et ses habitants.",
      de: "Jede Immobilie erzählt eine Geschichte. Unsere begann mit der Liebe zu diesem Land und den Menschen hier.",
    },
    storyTitle: {
      es: "Nuestra historia",
      en: "Our story",
      fr: "Notre histoire",
      de: "Unsere Geschichte",
    },
    story1: {
      es: "En EllaDay Homes creemos que cada propiedad cuenta una historia. Nos dedicamos a la venta de lotes, casas y propiedades únicas en La Fortuna de San Carlos, conectando a las personas con espacios rodeados de naturaleza, tranquilidad y buenas oportunidades de inversión.",
      en: "At EllaDay Homes we believe every property tells a story. We focus on the sale of lots, homes and unique properties in La Fortuna de San Carlos, connecting people with places surrounded by nature, peace and real investment opportunities.",
      fr: "Chez EllaDay Homes, nous croyons que chaque propriété raconte une histoire. Nous nous consacrons à la vente de terrains, de maisons et de propriétés uniques à La Fortuna de San Carlos, reliant les personnes à des lieux entourés de nature, de calme et de vraies opportunités d'investissement.",
      de: "Bei EllaDay Homes glauben wir, dass jede Immobilie eine Geschichte erzählt. Wir konzentrieren uns auf den Verkauf von Grundstücken, Häusern und einzigartigen Immobilien in La Fortuna de San Carlos und verbinden Menschen mit Orten voller Natur, Ruhe und echten Investitionsmöglichkeiten.",
    },
    story2: {
      es: "Nuestra marca nace de las ganas de ayudar a la gente a encontrar más que un terreno o una casa: un lugar donde construir sueños, crear recuerdos y disfrutar del estilo de vida que regala esta esquina de Costa Rica. Trabajamos con cercanía, transparencia y una mirada moderna del mercado.",
      en: "Our brand was born from the wish to help people find more than a piece of land or a house — a place to build dreams, make memories and enjoy the lifestyle this corner of Costa Rica gives. We work with closeness, transparency and a modern view of the market.",
      fr: "Notre marque est née de l'envie d'aider chacun à trouver plus qu'un terrain ou une maison : un lieu pour bâtir des rêves, créer des souvenirs et profiter du style de vie qu'offre ce coin du Costa Rica. Nous travaillons avec proximité, transparence et une vision moderne du marché.",
      de: "Unsere Marke entstand aus dem Wunsch, Menschen mehr als nur ein Grundstück oder Haus zu schenken — einen Ort, an dem Träume entstehen, Erinnerungen wachsen und der Lebensstil dieses Winkels von Costa Rica spürbar wird. Wir arbeiten mit Nähe, Transparenz und einem modernen Blick auf den Markt.",
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
      es: "EllaDay Homes no solo vende propiedades. Vende tranquilidad, naturaleza, inversión inteligente, estilo de vida y sueños en La Fortuna. Lujo natural, cercanía humana y modernidad.",
      en: "EllaDay Homes doesn't only sell properties. It sells peace, nature, smart investment, lifestyle and dreams in La Fortuna. Natural luxury, human closeness, modern care.",
      fr: "EllaDay Homes ne vend pas que des propriétés. Nous vendons de la tranquillité, de la nature, des investissements intelligents, un art de vivre et des rêves à La Fortuna. Luxe naturel, proximité humaine et modernité.",
      de: "EllaDay Homes verkauft nicht nur Immobilien. Wir verkaufen Ruhe, Natur, kluge Investitionen, Lebensgefühl und Träume in La Fortuna. Natürlicher Luxus, menschliche Nähe und Modernität.",
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
        es: "Sueños en La Fortuna",
        en: "Dreams in La Fortuna",
        fr: "Rêves à La Fortuna",
        de: "Träume in La Fortuna",
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
          es: "Cada persona que nos escribe se siente acompañada y escuchada de verdad.",
          en: "Every person who reaches out feels genuinely accompanied and heard.",
          fr: "Chaque personne qui nous contacte se sent réellement accompagnée et écoutée.",
          de: "Jede Person, die uns schreibt, fühlt sich wirklich begleitet und gehört.",
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
      es: "Ayudar a las personas a encontrar el lugar perfecto para vivir, invertir o empezar una nueva historia, ofreciendo propiedades únicas con atención cercana, moderna y confiable.",
      en: "Help people find the perfect place to live, invest or start a new story, offering unique properties with close, modern and trustworthy service.",
      fr: "Aider chacun à trouver le lieu idéal pour vivre, investir ou écrire une nouvelle histoire, en proposant des propriétés uniques avec un accompagnement proche, moderne et fiable.",
      de: "Menschen helfen, den perfekten Ort zum Leben, Investieren oder Neuanfangen zu finden — mit einzigartigen Immobilien und einer nahen, modernen und verlässlichen Betreuung.",
    },
    visionTitle: { es: "Visión", en: "Vision", fr: "Vision", de: "Vision" },
    vision: {
      es: "Convertirnos en una marca reconocida en Costa Rica por conectar a las personas con propiedades extraordinarias, en armonía con la naturaleza y el estilo de vida que sueñan.",
      en: "Become a recognized brand in Costa Rica for connecting people with extraordinary properties, in harmony with nature and the lifestyle they dream of.",
      fr: "Devenir une marque reconnue au Costa Rica pour avoir relié des personnes à des propriétés extraordinaires, en harmonie avec la nature et le style de vie dont elles rêvent.",
      de: "Eine in Costa Rica anerkannte Marke werden, die Menschen mit außergewöhnlichen Immobilien verbindet — im Einklang mit der Natur und dem Lebensstil, von dem sie träumen.",
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
      es: "Por eso cuando mostramos una propiedad, también pensamos en los que caminan en cuatro patas: patios cerrados, espacios para correr, comunidades amigables con mascotas. Una buena casa también lo es para los que viven en ella sin hablar.",
      en: "That's why when we show a property, we also think about those who walk on four legs: enclosed yards, space to run, pet-friendly neighborhoods. A good home is also good for those who live in it without speaking.",
      fr: "C'est pourquoi, lorsque nous montrons une propriété, nous pensons aussi à ceux qui marchent sur quatre pattes : cours fermées, espace pour courir, voisinages accueillants pour les animaux. Une bonne maison l'est aussi pour ceux qui y vivent sans parler.",
      de: "Deshalb denken wir bei jeder Immobilie auch an die auf vier Pfoten: eingezäunte Grundstücke, Platz zum Rennen, tierfreundliche Nachbarschaften. Ein gutes Zuhause ist auch ein gutes Zuhause für die, die nicht sprechen können.",
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
      es: "Hubo un problema. Intentá de nuevo o escríbenos por WhatsApp.",
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
      es: "Bienes raíces con esencia natural en La Fortuna, Costa Rica.",
      en: "Real estate with natural essence in La Fortuna, Costa Rica.",
      fr: "Immobilier à l'essence naturelle à La Fortuna, Costa Rica.",
      de: "Immobilien mit natürlicher Essenz in La Fortuna, Costa Rica.",
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
