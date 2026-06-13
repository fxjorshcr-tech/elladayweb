export type PropertyType = "house" | "lot" | "farm"
export type Agent = "dayana" | "ella"

export type L = { es: string; en: string; fr?: string; de?: string }
export type LArr = { es: string[]; en: string[]; fr?: string[]; de?: string[] }

export type Currency = "USD" | "CRC"

export type Property = {
  slug: string
  type: PropertyType
  agent: Agent
  price: number
  currency: Currency
  negotiable?: boolean
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

// Real photos served from the public Supabase Storage bucket "Casa1 ELLADAY".
const CASA1_BUCKET =
  "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Casa1%20ELLADAY"

const casa1Image = (file: string, alt: string) => ({
  // encodeURIComponent turns spaces into %20 while leaving "(" / ")" intact,
  // matching the bucket's public URL pattern (e.g. "exterior18 (2).jpeg").
  src: `${CASA1_BUCKET}/${encodeURIComponent(file)}`,
  alt,
})

export const properties: Property[] = [
  {
    slug: "casa-rio-el-carmen-san-ramon",
    type: "house",
    agent: "ella",
    price: 150000000,
    currency: "CRC",
    negotiable: true,
    builtArea: 124,
    lotSize: 2997,
    lotUnit: "m2",
    location: {
      es: "El Carmen de Peñas Blancas, San Ramón",
      en: "El Carmen de Peñas Blancas, San Ramón",
      fr: "El Carmen de Peñas Blancas, San Ramón",
      de: "El Carmen de Peñas Blancas, San Ramón",
    },
    mapQuery: "El Carmen de Peñas Blancas, San Ramón, Alajuela, Costa Rica",
    title: {
      es: "Casa con río propio en El Carmen de Peñas Blancas",
      en: "House with its own river in El Carmen de Peñas Blancas",
      fr: "Maison avec rivière privée à El Carmen de Peñas Blancas",
      de: "Haus mit eigenem Fluss in El Carmen de Peñas Blancas",
    },
    shortDescription: {
      es: "Lote de 2.997 m² con casa de 124 m², terraza, bodega, amplias zonas verdes y un río dentro de la propiedad. Tranquilidad y naturaleza en San Ramón.",
      en: "2,997 m² lot with a 124 m² house, terrace, storage room, large green areas and a river within the property. Peace and nature in San Ramón.",
      fr: "Terrain de 2 997 m² avec maison de 124 m², terrasse, débarras, vastes espaces verts et une rivière sur la propriété. Tranquillité et nature à San Ramón.",
      de: "2.997 m² Grundstück mit 124 m² Haus, Terrasse, Lagerraum, weitläufigen Grünflächen und einem Fluss auf dem Grundstück. Ruhe und Natur in San Ramón.",
    },
    description: {
      es: [
        "Se vende propiedad en El Carmen de Peñas Blancas, San Ramón, Alajuela.",
        "Lote de 2.997 m² y casa de 124 m² de construcción. Tiene terraza, bodega, amplias zonas verdes y un río dentro de la propiedad.",
        "Ideal para quienes buscan tranquilidad, espacio y contacto con la naturaleza.",
      ],
      en: [
        "Property for sale in El Carmen de Peñas Blancas, San Ramón, Alajuela.",
        "A 2,997 m² lot and a 124 m² house. It has a terrace, a storage room, large green areas and a river within the property.",
        "Ideal for those seeking tranquility, space and contact with nature.",
      ],
      fr: [
        "Propriété à vendre à El Carmen de Peñas Blancas, San Ramón, Alajuela.",
        "Terrain de 2 997 m² et maison de 124 m². Elle dispose d'une terrasse, d'un débarras, de vastes espaces verts et d'une rivière sur la propriété.",
        "Idéale pour ceux qui recherchent tranquillité, espace et contact avec la nature.",
      ],
      de: [
        "Immobilie zum Verkauf in El Carmen de Peñas Blancas, San Ramón, Alajuela.",
        "Grundstück mit 2.997 m² und ein Haus mit 124 m² Wohnfläche. Es verfügt über eine Terrasse, einen Lagerraum, weitläufige Grünflächen und einen Fluss auf dem Grundstück.",
        "Ideal für alle, die Ruhe, Platz und Naturnähe suchen.",
      ],
    },
    highlights: {
      es: [
        "Lote de 2.997 m²",
        "Casa de 124 m² de construcción",
        "Río dentro de la propiedad",
        "Terraza",
        "Bodega",
        "Amplias zonas verdes",
      ],
      en: [
        "2,997 m² lot",
        "124 m² of construction",
        "River within the property",
        "Terrace",
        "Storage room",
        "Large green areas",
      ],
      fr: [
        "Terrain de 2 997 m²",
        "124 m² construits",
        "Rivière sur la propriété",
        "Terrasse",
        "Débarras",
        "Vastes espaces verts",
      ],
      de: [
        "Grundstück mit 2.997 m²",
        "124 m² Wohnfläche",
        "Fluss auf dem Grundstück",
        "Terrasse",
        "Lagerraum",
        "Weitläufige Grünflächen",
      ],
    },
    images: [
      casa1Image("exteriorpnamoramico.jpeg", "Vista panorámica de la propiedad"),
      casa1Image("exterior.jpeg", "Vista exterior de la casa"),
      casa1Image("exterior1.jpeg", "Vista exterior de la propiedad"),
      casa1Image("exterior2.jpeg", "Vista exterior de la propiedad"),
      casa1Image("exterior3.jpeg", "Vista exterior de la propiedad"),
      casa1Image("exterior4.jpeg", "Vista exterior de la propiedad"),
      casa1Image("exterior5.jpeg", "Vista exterior de la propiedad"),
      casa1Image("exterior6.jpeg", "Vista exterior de la propiedad"),
      casa1Image("exterior7.jpeg", "Vista exterior de la propiedad"),
      casa1Image("exterior8.jpeg", "Vista exterior de la propiedad"),
      casa1Image("exterior9.jpeg", "Vista exterior de la propiedad"),
      casa1Image("exetrior10.jpeg", "Vista exterior de la propiedad"),
      casa1Image("exterior11.jpeg", "Vista exterior de la propiedad"),
      casa1Image("exterior12.jpeg", "Vista exterior de la propiedad"),
      casa1Image("exterior13.jpeg", "Vista exterior de la propiedad"),
      casa1Image("exterior14.jpeg", "Vista exterior de la propiedad"),
      casa1Image("exetrior15.jpeg", "Vista exterior de la propiedad"),
      casa1Image("exterior16.jpeg", "Vista exterior de la propiedad"),
      casa1Image("exterior17.jpeg", "Vista exterior de la propiedad"),
      casa1Image("exterior18.jpeg", "Vista exterior de la propiedad"),
      casa1Image("exterior18 (2).jpeg", "Vista exterior de la propiedad"),
      casa1Image("exterior20.jpeg", "Vista exterior de la propiedad"),
      casa1Image("exertrir19.jpeg", "Vista exterior de la propiedad"),
      casa1Image("exetrioriro.jpeg", "Vista exterior de la propiedad"),
      casa1Image("rio.jpeg", "Río dentro de la propiedad"),
      casa1Image("rio2.jpeg", "Río dentro de la propiedad"),
      casa1Image("interior1.jpeg", "Interior de la casa"),
      casa1Image("interior2.jpeg", "Interior de la casa"),
      casa1Image("interior3.jpeg", "Interior de la casa"),
      casa1Image("interior4.jpeg", "Interior de la casa"),
      casa1Image("interior5.jpeg", "Interior de la casa"),
      casa1Image("interior6.jpeg", "Interior de la casa"),
      casa1Image("interior7.jpeg", "Interior de la casa"),
      casa1Image("accesorio.jpeg", "Bodega y áreas complementarias"),
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

export function formatPrice(
  amount: number,
  lang: "es" | "en" | "fr" | "de" = "es",
  currency: Currency = "USD"
): string {
  // Costa Rican colón: keep the ₡ symbol and dot thousands separators
  // consistent across every language (ICU output varies by locale).
  if (currency === "CRC") {
    return `₡${amount.toLocaleString("de-DE")}`
  }
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
  }).format(amount)
}
