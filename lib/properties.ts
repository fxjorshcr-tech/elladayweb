export type PropertyType = "house" | "lot" | "farm"
export type Agent = "dayana" | "ella"

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
  location: { es: string; en: string }
  mapQuery: string
  title: { es: string; en: string }
  shortDescription: { es: string; en: string }
  description: { es: string[]; en: string[] }
  highlights: { es: string[]; en: string[] }
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
    },
    mapQuery: "El Castillo, La Fortuna, Costa Rica",
    title: {
      es: "Villa moderna con vista al Volcán Arenal",
      en: "Modern villa with Arenal Volcano view",
    },
    shortDescription: {
      es: "Casa contemporánea de 3 habitaciones con vista directa al volcán, piscina infinita y acabados premium.",
      en: "Contemporary 3-bedroom home with direct volcano views, infinity pool, and premium finishes.",
    },
    description: {
      es: [
        "Una propiedad que combina arquitectura contemporánea con la majestuosidad del paisaje. Ubicada en El Castillo, ofrece una vista panorámica e ininterrumpida del Volcán Arenal y el lago.",
        "El diseño abierto integra interior y exterior. La sala principal se abre hacia una terraza con piscina infinita orientada al volcán. Acabados de madera de teca, pisos de porcelanato grande formato y carpintería italiana.",
        "Ideal como residencia principal o alquiler vacacional premium. La zona ya cuenta con propiedades similares facturando entre 250 y 400 USD por noche en temporada alta.",
      ],
      en: [
        "A property that combines contemporary architecture with the majesty of the landscape. Located in El Castillo, it offers panoramic, unobstructed views of the Arenal Volcano and the lake.",
        "The open design integrates indoor and outdoor spaces. The main living area opens onto a terrace with an infinity pool facing the volcano. Teak wood finishes, large-format porcelain floors, and Italian cabinetry.",
        "Ideal as a primary residence or premium vacation rental. The area already features similar properties earning between $250 and $400 per night in high season.",
      ],
    },
    highlights: {
      es: [
        "Vista directa al Volcán Arenal",
        "Piscina infinita climatizada",
        "Paneles solares instalados",
        "Cisterna de agua de 5,000L",
        "Camino asfaltado todo el año",
        "15 minutos al centro de La Fortuna",
      ],
      en: [
        "Direct Arenal Volcano view",
        "Heated infinity pool",
        "Installed solar panels",
        "5,000L water cistern",
        "Paved road year-round access",
        "15 minutes to La Fortuna town",
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
    },
    mapQuery: "Tronadora, Arenal, Costa Rica",
    title: {
      es: "Lote con vista al lago y al volcán",
      en: "Lot with lake and volcano views",
    },
    shortDescription: {
      es: "2,100 m² de tierra con plano catastrado, agua, electricidad y vista doble: lago Arenal y volcán al fondo.",
      en: "2,100 m² of land with surveyed plan, water, electricity, and a double view: Arenal Lake and volcano in the background.",
    },
    description: {
      es: [
        "Una oportunidad única para construir el proyecto de tus sueños. El terreno está plano en la zona de construcción y suavemente inclinado hacia el lago, lo que garantiza una vista despejada.",
        "Servicios públicos llegan hasta el lindero: agua del acueducto rural, electricidad y fibra óptica disponible. Plano catastrado y estudios de suelo recientes incluidos en la documentación.",
        "Tronadora es una de las zonas con mayor revalorización de los últimos cinco años, gracias a su clima fresco, vistas privilegiadas y cercanía a Nuevo Arenal.",
      ],
      en: [
        "A unique opportunity to build your dream project. The land is flat in the building area and gently sloped toward the lake, ensuring an unobstructed view.",
        "Utilities reach the property line: rural aqueduct water, electricity, and fiber internet available. Surveyed plan and recent soil studies included in the documentation.",
        "Tronadora is one of the most appreciating areas of the last five years, thanks to its cool climate, privileged views, and proximity to Nuevo Arenal.",
      ],
    },
    highlights: {
      es: [
        "Plano catastrado al día",
        "Vista al lago y al volcán",
        "Servicios públicos en lindero",
        "Suelo apto para construcción",
        "Acceso por camino público",
        "Clima fresco todo el año",
      ],
      en: [
        "Current surveyed plan",
        "Lake and volcano view",
        "Utilities at property line",
        "Buildable soil verified",
        "Public road access",
        "Cool climate year-round",
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
    },
    mapQuery: "Z-Trece, La Fortuna, San Carlos, Costa Rica",
    title: {
      es: "Finca de 12 hectáreas con río propio",
      en: "12-hectare farm with private river",
    },
    shortDescription: {
      es: "Finca productiva con casa principal, 12 hectáreas, río que cruza la propiedad y potencial eco-turístico.",
      en: "Productive farm with main house, 12 hectares, river crossing the property, and eco-tourism potential.",
    },
    description: {
      es: [
        "Una finca con historia familiar y enorme potencial. 12 hectáreas en producción activa de café y plátano, con áreas de bosque secundario protegido y un río limpio que la cruza de norte a sur.",
        "La casa principal de madera y concreto cuenta con 4 habitaciones, 3 baños y un amplio corredor que mira hacia el Arenal en días despejados. Incluye un beneficio de café y galera para equipo agrícola.",
        "Múltiples vocaciones posibles: continuar la operación agrícola actual, desarrollar un eco-lodge boutique, segregar para venta de lotes, o residencia familiar con producción propia. Permisos municipales en regla.",
      ],
      en: [
        "A farm with family history and enormous potential. 12 hectares in active coffee and plantain production, with protected secondary forest areas and a clean river crossing it from north to south.",
        "The main wood-and-concrete house has 4 bedrooms, 3 bathrooms, and a wide veranda facing the Arenal on clear days. Includes a coffee processing facility and shed for agricultural equipment.",
        "Multiple possible uses: continue current agricultural operation, develop a boutique eco-lodge, subdivide for lot sales, or use as a family residence with self-production. Municipal permits in order.",
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

export const propertyAgents: Record<
  Agent,
  { name: string; role: { es: string; en: string }; whatsapp?: string }
> = {
  dayana: {
    name: "Dayana Sibaja",
    role: { es: "Agente · Cofundadora", en: "Agent · Co-founder" },
  },
  ella: {
    name: "Ella Calero",
    role: { es: "Agente · Cofundadora", en: "Agent · Co-founder" },
  },
}

export function getProperty(slug: string): Property | undefined {
  return properties.find((p) => p.slug === slug)
}

export function formatPrice(usd: number, lang: "es" | "en" = "es"): string {
  const locale = lang === "es" ? "es-CR" : "en-US"
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  }).format(usd)
}
