export type PropertyType = "house" | "lot" | "farm"
export type Agent = "dayana" | "ella"

export type L = { es: string; en: string; fr?: string; de?: string }
export type LArr = { es: string[]; en: string[]; fr?: string[]; de?: string[] }

export type Property = {
  slug: string
  type: PropertyType
  agent: Agent
  priceUSD: number
  bedrooms?: number
  bathrooms?: number
  builtArea?: number
  lotSize: number
  lotUnit: "m2" | "ha"
  location: L
  mapQuery: string
  title: L
  shortDescription: L
  description: LArr
  highlights: LArr
  images: { src: string; alt: string }[]
}

export const properties: Property[] = [
  {
    slug: "villa-vista-arenal",
    type: "house",
    agent: "ella",
    priceUSD: 685000,
    bedrooms: 3,
    bathrooms: 3,
    builtArea: 285,
    lotSize: 1200,
    lotUnit: "m2",
    location: {
      es: "El Castillo, La Fortuna",
      en: "El Castillo, La Fortuna",
      fr: "El Castillo, La Fortuna",
      de: "El Castillo, La Fortuna",
    },
    mapQuery: "El Castillo, La Fortuna, Costa Rica",
    title: {
      es: "Villa moderna con vista al Volcán Arenal",
      en: "Modern villa with Arenal Volcano view",
      fr: "Villa moderne avec vue sur le volcan Arenal",
      de: "Moderne Villa mit Blick auf den Arenal-Vulkan",
    },
    shortDescription: {
      es: "Casa contemporánea de 3 habitaciones con vista directa al volcán, piscina infinita y acabados de primera.",
      en: "Contemporary 3-bedroom home with direct volcano views, infinity pool and premium finishes.",
      fr: "Maison contemporaine de 3 chambres avec vue directe sur le volcan, piscine à débordement et finitions haut de gamme.",
      de: "Modernes 3-Zimmer-Haus mit direktem Vulkanblick, Infinity-Pool und hochwertigen Materialien.",
    },
    description: {
      es: [
        "Casa contemporánea en El Castillo, con vista directa al Volcán Arenal y al lago desde las áreas principales.",
        "El diseño abierto conecta la sala con la terraza y la piscina infinita orientada al volcán. Acabados en madera de teca, porcelanato de gran formato y carpintería italiana.",
        "Funciona como casa de habitación o como alquiler vacacional. Casas parecidas en la zona facturan entre 250 y 400 USD por noche en temporada alta.",
      ],
      en: [
        "Contemporary home in El Castillo, with direct views of the Arenal Volcano and the lake from the main living areas.",
        "The open layout links the living room to the terrace and the infinity pool aimed at the volcano. Teak wood finishes, large-format porcelain floors and Italian cabinetry.",
        "Works as a home or a vacation rental. Similar houses in the area earn $250 to $400 per night in high season.",
      ],
      fr: [
        "Maison contemporaine à El Castillo, avec vue directe sur le volcan Arenal et le lac depuis les pièces principales.",
        "Le plan ouvert relie le salon à la terrasse et à la piscine à débordement orientée vers le volcan. Finitions en teck, grès cérame grand format et menuiseries italiennes.",
        "Elle convient à une résidence principale comme à la location saisonnière. Des maisons semblables dans la zone facturent entre 250 et 400 USD la nuit en haute saison.",
      ],
      de: [
        "Modernes Haus in El Castillo mit direktem Blick auf den Arenal-Vulkan und den See aus den Haupträumen.",
        "Der offene Grundriss verbindet Wohnbereich, Terrasse und Infinity-Pool mit Blick auf den Vulkan. Teakholz, großformatige Feinsteinzeugböden und italienische Einbauten.",
        "Ideal als Wohnsitz oder Ferienvermietung. Vergleichbare Häuser erzielen in der Hauptsaison 250 bis 400 USD pro Nacht.",
      ],
    },
    highlights: {
      es: [
        "Vista directa al Volcán Arenal",
        "Piscina infinita climatizada",
        "Paneles solares instalados",
        "Cisterna de 5,000 L",
        "Camino asfaltado todo el año",
        "15 minutos al centro de La Fortuna",
      ],
      en: [
        "Direct Arenal Volcano view",
        "Heated infinity pool",
        "Solar panels installed",
        "5,000 L water cistern",
        "Paved road access year-round",
        "15 minutes to La Fortuna town",
      ],
      fr: [
        "Vue directe sur le volcan Arenal",
        "Piscine à débordement chauffée",
        "Panneaux solaires installés",
        "Citerne de 5 000 L",
        "Route goudronnée toute l'année",
        "15 minutes du centre de La Fortuna",
      ],
      de: [
        "Direkter Blick auf den Arenal-Vulkan",
        "Beheizter Infinity-Pool",
        "Installierte Solarmodule",
        "Wassertank 5.000 L",
        "Ganzjährig asphaltierter Zugang",
        "15 Minuten ins Zentrum von La Fortuna",
      ],
    },
    images: [
      {
        src: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=2000&q=80",
        alt: "Villa exterior view with pool",
      },
      {
        src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80",
        alt: "Modern living room",
      },
      {
        src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=2000&q=80",
        alt: "Open kitchen",
      },
      {
        src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=2000&q=80",
        alt: "Primary bedroom",
      },
      {
        src: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=80",
        alt: "Terrace with volcano view",
      },
    ],
  },
  {
    slug: "lote-vista-lago",
    type: "lot",
    agent: "ella",
    priceUSD: 145000,
    lotSize: 2100,
    lotUnit: "m2",
    location: {
      es: "Tronadora, Lago Arenal",
      en: "Tronadora, Arenal Lake",
      fr: "Tronadora, lac Arenal",
      de: "Tronadora, Arenal-See",
    },
    mapQuery: "Tronadora, Arenal, Costa Rica",
    title: {
      es: "Lote con vista al lago y al volcán",
      en: "Lot with lake and volcano views",
      fr: "Terrain avec vue sur le lac et le volcan",
      de: "Grundstück mit See- und Vulkanblick",
    },
    shortDescription: {
      es: "2,100 m² con plano catastrado, servicios en lindero y vista doble: lago Arenal y volcán al fondo.",
      en: "2,100 m² with surveyed plan, utilities at the property line and a double view: Arenal Lake and the volcano in the background.",
      fr: "2 100 m² avec plan cadastré, services à la limite et double vue : le lac Arenal et le volcan en arrière-plan.",
      de: "2.100 m² mit Katasterplan, Versorgungsanschlüssen an der Grenze und Doppelblick: Arenal-See und Vulkan im Hintergrund.",
    },
    description: {
      es: [
        "Terreno listo para construir. Es plano en la zona de la casa y se inclina suave hacia el lago, lo que garantiza una vista despejada.",
        "Servicios públicos en el lindero: agua del acueducto rural, electricidad y fibra óptica disponible. Plano catastrado y estudio de suelo reciente en la documentación.",
        "Tronadora es una de las zonas con mayor revalorización en los últimos cinco años. Clima fresco, buenas vistas y cercanía a Nuevo Arenal.",
      ],
      en: [
        "Land ready to build on. It's flat in the building area and slopes gently toward the lake, keeping the view clear.",
        "Utilities at the property line: rural aqueduct water, electricity and fiber internet available. Surveyed plan and recent soil study included in the documentation.",
        "Tronadora is one of the most appreciating areas of the last five years. Cool climate, open views and close to Nuevo Arenal.",
      ],
      fr: [
        "Terrain prêt à construire. Il est plat dans la zone de construction et s'incline doucement vers le lac, gardant la vue dégagée.",
        "Services à la limite : eau de l'aqueduc rural, électricité et fibre optique disponibles. Plan cadastré et étude de sol récente inclus dans le dossier.",
        "Tronadora est l'une des zones avec la plus forte plus-value de ces cinq dernières années. Climat frais, belles vues dégagées et proximité de Nuevo Arenal.",
      ],
      de: [
        "Baureifes Grundstück. Im Baubereich eben, fällt es sanft zum See hin ab, sodass die Aussicht frei bleibt.",
        "Versorgung an der Grundstücksgrenze: Wasser aus dem ländlichen Aquädukt, Strom und Glasfaser verfügbar. Katasterplan und aktuelle Bodenuntersuchung in den Unterlagen.",
        "Tronadora gehört zu den Regionen mit der stärksten Wertentwicklung der letzten fünf Jahre. Kühles Klima, freie Aussicht und Nähe zu Nuevo Arenal.",
      ],
    },
    highlights: {
      es: [
        "Plano catastrado vigente",
        "Vista al lago y al volcán",
        "Servicios públicos en lindero",
        "Suelo apto para construcción",
        "Acceso por camino público",
        "Clima fresco todo el año",
      ],
      en: [
        "Current surveyed plan",
        "Lake and volcano view",
        "Utilities at the property line",
        "Buildable soil confirmed",
        "Public road access",
        "Cool climate year-round",
      ],
      fr: [
        "Plan cadastré à jour",
        "Vue sur le lac et le volcan",
        "Services à la limite de propriété",
        "Sol constructible confirmé",
        "Accès par route publique",
        "Climat frais toute l'année",
      ],
      de: [
        "Aktueller Katasterplan",
        "See- und Vulkanblick",
        "Versorgung an der Grundstücksgrenze",
        "Bebaubarkeit bestätigt",
        "Zufahrt über öffentliche Straße",
        "Ganzjährig kühles Klima",
      ],
    },
    images: [
      {
        src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=80",
        alt: "Lot with lake view",
      },
      {
        src: "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?auto=format&fit=crop&w=2000&q=80",
        alt: "Mountain landscape",
      },
      {
        src: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?auto=format&fit=crop&w=2000&q=80",
        alt: "Sunset over lake",
      },
      {
        src: "https://images.unsplash.com/photo-1501785888041-af3ef285b470?auto=format&fit=crop&w=2000&q=80",
        alt: "Open land view",
      },
    ],
  },
  {
    slug: "finca-rio-fortuna",
    type: "farm",
    agent: "dayana",
    priceUSD: 1250000,
    lotSize: 12,
    lotUnit: "ha",
    builtArea: 180,
    bedrooms: 4,
    bathrooms: 3,
    location: {
      es: "Z-Trece, La Fortuna",
      en: "Z-Trece, La Fortuna",
      fr: "Z-Trece, La Fortuna",
      de: "Z-Trece, La Fortuna",
    },
    mapQuery: "Z-Trece, La Fortuna, San Carlos, Costa Rica",
    title: {
      es: "Finca de 12 hectáreas con río propio",
      en: "12-hectare farm with private river",
      fr: "Finca de 12 hectares avec rivière privée",
      de: "Hof mit 12 Hektar und eigenem Fluss",
    },
    shortDescription: {
      es: "Finca productiva con casa principal, 12 hectáreas, río que la cruza y potencial eco-turístico.",
      en: "Productive farm with main house, 12 hectares, a river crossing the land and eco-tourism potential.",
      fr: "Finca productive avec maison principale, 12 hectares, rivière traversant la propriété et fort potentiel éco-touristique.",
      de: "Produktiver Hof mit Haupthaus, 12 Hektar, einem durchfließenden Fluss und Potenzial für Ökotourismus.",
    },
    description: {
      es: [
        "Finca de 12 hectáreas en producción activa de café y plátano, con áreas de bosque secundario protegido y un río limpio que la cruza de norte a sur.",
        "La casa principal, de madera y concreto, tiene 4 habitaciones, 3 baños y un corredor amplio que mira al Arenal en días despejados. Incluye un beneficio de café y galera para equipo.",
        "Varias vocaciones posibles: seguir la operación agrícola, levantar un eco-lodge boutique, segregar lotes o usarla como casa de habitación con producción propia. Permisos al día.",
      ],
      en: [
        "A 12-hectare farm in active coffee and plantain production, with protected secondary forest and a clean river crossing the land north to south.",
        "The main wood-and-concrete house has 4 bedrooms, 3 bathrooms and a wide veranda facing the Arenal on clear days. Includes a coffee processing facility and equipment shed.",
        "Several possible uses: keep the farm running, build a boutique eco-lodge, subdivide into lots or live there with your own production. Permits up to date.",
      ],
      fr: [
        "Finca de 12 hectares en production active de café et de bananes plantain, avec des zones de forêt secondaire protégée et une rivière propre qui la traverse du nord au sud.",
        "La maison principale, en bois et béton, compte 4 chambres, 3 salles de bain et une large véranda tournée vers l'Arenal par temps clair. Comprend une unité de traitement du café et un hangar à matériel.",
        "Plusieurs vocations possibles : poursuivre l'exploitation, créer un éco-lodge boutique, diviser en terrains ou en faire une résidence avec production propre. Permis à jour.",
      ],
      de: [
        "Hof mit 12 Hektar in aktivem Kaffee- und Bananenanbau, mit geschützten Sekundärwaldflächen und einem sauberen Fluss, der das Grundstück von Nord nach Süd durchquert.",
        "Das Haupthaus aus Holz und Beton hat 4 Schlafzimmer, 3 Bäder und eine weite Veranda mit Blick auf den Arenal an klaren Tagen. Inklusive Kaffeeverarbeitung und Geräteschuppen.",
        "Mehrere Nutzungen möglich: landwirtschaftlicher Betrieb fortführen, ein Boutique-Öko-Lodge errichten, in Grundstücke aufteilen oder als Wohnsitz mit eigener Produktion nutzen. Genehmigungen aktuell.",
      ],
    },
    highlights: {
      es: [
        "12 hectáreas tituladas",
        "Río limpio dentro de la propiedad",
        "Producción activa de café",
        "Casa principal de 4 habitaciones",
        "Bosque secundario protegido",
        "Permisos municipales al día",
      ],
      en: [
        "12 titled hectares",
        "Clean river within the property",
        "Active coffee production",
        "4-bedroom main house",
        "Protected secondary forest",
        "Municipal permits up to date",
      ],
      fr: [
        "12 hectares titrés",
        "Rivière propre sur la propriété",
        "Production de café active",
        "Maison principale 4 chambres",
        "Forêt secondaire protégée",
        "Permis municipaux à jour",
      ],
      de: [
        "12 Hektar mit Titel",
        "Sauberer Fluss auf dem Grundstück",
        "Aktive Kaffeeproduktion",
        "Haupthaus mit 4 Schlafzimmern",
        "Geschützter Sekundärwald",
        "Aktuelle kommunale Genehmigungen",
      ],
    },
    images: [
      {
        src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=2000&q=80",
        alt: "Farm landscape",
      },
      {
        src: "https://images.unsplash.com/photo-1444930694458-01babe71870e?auto=format&fit=crop&w=2000&q=80",
        alt: "Coffee plantation",
      },
      {
        src: "https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=2000&q=80",
        alt: "Country home",
      },
      {
        src: "https://images.unsplash.com/photo-1500076656116-558758c991c1?auto=format&fit=crop&w=2000&q=80",
        alt: "River through property",
      },
      {
        src: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?auto=format&fit=crop&w=2000&q=80",
        alt: "Forest area",
      },
    ],
  },
]

export const propertyAgents: Record<Agent, { name: string; role: L }> = {
  dayana: {
    name: "Dayana Sibaja",
    role: {
      es: "Agente · Cofundadora",
      en: "Agent · Co-founder",
      fr: "Agent · Cofondatrice",
      de: "Maklerin · Mitgründerin",
    },
  },
  ella: {
    name: "Ella Calero",
    role: {
      es: "Agente · Cofundadora",
      en: "Agent · Co-founder",
      fr: "Agent · Cofondatrice",
      de: "Maklerin · Mitgründerin",
    },
  },
}

export function getProperty(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug)
}

export function formatPrice(usd: number, lang: "es" | "en" | "fr" | "de" = "es"): string {
  const locale =
    lang === "es"
      ? "es-CR"
      : lang === "fr"
        ? "fr-FR"
        : lang === "de"
          ? "de-DE"
          : "en-US"
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(usd)
}
