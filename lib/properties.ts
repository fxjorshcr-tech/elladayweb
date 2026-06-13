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
  lotSize?: number
  lotUnit?: "m2" | "ha"
  location: L
  mapQuery: string
  title: L
  shortDescription: L
  description: LArr
  highlights: LArr
  images: { src: string; alt: string }[]
}

// Real photos served from the project's public Supabase Storage buckets.
// encodeURIComponent turns spaces into %20 while leaving "(" / ")" intact,
// matching the bucket's public URL pattern (e.g. "exterior18 (2).jpeg").
const PUBLIC_STORAGE =
  "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public"

const bucketImage =
  (bucket: string) =>
  (file: string, alt: string) => ({
    src: `${PUBLIC_STORAGE}/${encodeURIComponent(bucket)}/${encodeURIComponent(file)}`,
    alt,
  })

const casa1Image = bucketImage("Casa1 ELLADAY")
const casa2Image = bucketImage("casa2")

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
        "Se vende propiedad en El Carmen de Peñas Blancas, San Ramón, Alajuela, una zona tranquila de montaña rodeada de naturaleza y con un clima fresco y agradable durante todo el año.",
        "El terreno es un lote de 2.997 m² e incluye una casa de 124 m² de construcción. Cuenta con una terraza para disfrutar del entorno, una bodega para almacenamiento, amplias zonas verdes y un río que corre dentro de la propiedad.",
        "Es un lugar ideal para quienes buscan tranquilidad, espacio y un contacto real con la naturaleza, ya sea como casa de habitación, casa de descanso o como una inversión en una de las zonas más verdes de San Ramón.",
      ],
      en: [
        "Property for sale in El Carmen de Peñas Blancas, San Ramón, Alajuela, a quiet mountain area surrounded by nature and with a cool, pleasant climate all year round.",
        "The land is a 2,997 m² lot and includes a 124 m² house. It has a terrace to enjoy the surroundings, a storage room, large green areas and a river that runs through the property.",
        "It's an ideal place for those seeking tranquility, space and a real connection with nature, whether as a home, a weekend retreat or an investment in one of the greenest areas of San Ramón.",
      ],
      fr: [
        "Propriété à vendre à El Carmen de Peñas Blancas, San Ramón, Alajuela, une zone de montagne paisible, entourée de nature et au climat frais et agréable toute l'année.",
        "Le terrain est un lot de 2 997 m² et comprend une maison de 124 m². Elle dispose d'une terrasse pour profiter du cadre, d'un débarras, de vastes espaces verts et d'une rivière qui traverse la propriété.",
        "C'est un endroit idéal pour ceux qui recherchent tranquillité, espace et un vrai contact avec la nature, que ce soit comme résidence, comme maison de repos ou comme investissement dans l'une des zones les plus verdoyantes de San Ramón.",
      ],
      de: [
        "Immobilie zum Verkauf in El Carmen de Peñas Blancas, San Ramón, Alajuela, einer ruhigen Berggegend, umgeben von Natur und mit einem frischen, angenehmen Klima das ganze Jahr über.",
        "Das Grundstück umfasst 2.997 m² und ein Haus mit 124 m² Wohnfläche. Es verfügt über eine Terrasse, um die Umgebung zu genießen, einen Lagerraum, weitläufige Grünflächen und einen Fluss, der über das Grundstück fließt.",
        "Ein idealer Ort für alle, die Ruhe, Platz und echten Kontakt zur Natur suchen — ob als Wohnsitz, als Wochenenddomizil oder als Investition in einer der grünsten Gegenden von San Ramón.",
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
      casa1Image("exetrior10.jpeg", "Vista exterior de la propiedad"),
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
  {
    slug: "casa-amueblada-chachagua",
    type: "house",
    agent: "ella",
    price: 250000000,
    currency: "CRC",
    negotiable: true,
    bedrooms: 3,
    bathrooms: 2,
    location: {
      es: "Chachagua Centro, San Ramón",
      en: "Chachagua Centro, San Ramón",
      fr: "Chachagua Centro, San Ramón",
      de: "Chachagua Centro, San Ramón",
    },
    mapQuery: "Chachagua, San Ramón, Alajuela, Costa Rica",
    title: {
      es: "Casa amueblada con piscina en Chachagua Centro",
      en: "Furnished house with pool in Chachagua Centro",
      fr: "Maison meublée avec piscine à Chachagua Centro",
      de: "Möbliertes Haus mit Pool in Chachagua Centro",
    },
    shortDescription: {
      es: "Hermosa propiedad amueblada en Chachagua Centro: casa súper amplia, totalmente cerrada y lista para habitar, con 3 habitaciones, 2 baños y piscina.",
      en: "Beautiful furnished property in Chachagua Centro: a very spacious house, fully enclosed and move-in ready, with 3 bedrooms, 2 bathrooms and a pool.",
      fr: "Belle propriété meublée à Chachagua Centro : maison très spacieuse, entièrement clôturée et prête à habiter, avec 3 chambres, 2 salles de bain et piscine.",
      de: "Schöne möblierte Immobilie in Chachagua Centro: ein sehr geräumiges Haus, komplett umzäunt und bezugsfertig, mit 3 Schlafzimmern, 2 Bädern und Pool.",
    },
    description: {
      es: [
        "Se vende hermosa propiedad amueblada en Chachagua Centro, en una zona cómoda y bien ubicada, rodeada de la tranquilidad y el verde característicos de la región.",
        "La casa es súper amplia, está totalmente cerrada y se entrega lista para habitar. Cuenta con 3 habitaciones, 2 baños y una piscina para disfrutar del clima durante todo el año.",
        "Se vende completamente amueblada y totalmente cerrada, lo que brinda mayor privacidad y seguridad. Es ideal tanto para vivir como para una casa de descanso o inversión, ya que está lista para usar desde el primer día.",
      ],
      en: [
        "Beautiful furnished property for sale in Chachagua Centro, in a convenient, well-located area surrounded by the calm and greenery typical of the region.",
        "The house is very spacious, fully enclosed and delivered move-in ready. It has 3 bedrooms, 2 bathrooms and a pool to enjoy the climate all year round.",
        "It is sold completely furnished and fully enclosed, offering greater privacy and security. It's ideal as a home, a weekend retreat or an investment, since it is ready to use from day one.",
      ],
      fr: [
        "Belle propriété meublée à vendre à Chachagua Centro, dans un secteur pratique et bien situé, entouré du calme et de la verdure typiques de la région.",
        "La maison est très spacieuse, entièrement clôturée et livrée prête à habiter. Elle compte 3 chambres, 2 salles de bain et une piscine pour profiter du climat toute l'année.",
        "Elle est vendue entièrement meublée et totalement clôturée, ce qui offre davantage d'intimité et de sécurité. Idéale comme résidence, maison de repos ou investissement, car elle est prête à l'emploi dès le premier jour.",
      ],
      de: [
        "Schöne möblierte Immobilie zum Verkauf in Chachagua Centro, in einer praktischen, gut gelegenen Gegend, umgeben von der für die Region typischen Ruhe und dem vielen Grün.",
        "Das Haus ist sehr geräumig, komplett umzäunt und wird bezugsfertig übergeben. Es verfügt über 3 Schlafzimmer, 2 Bäder und einen Pool, um das Klima das ganze Jahr über zu genießen.",
        "Es wird komplett möbliert und vollständig umzäunt verkauft, was mehr Privatsphäre und Sicherheit bietet. Ideal als Wohnsitz, Wochenenddomizil oder Investition, da es vom ersten Tag an nutzbar ist.",
      ],
    },
    highlights: {
      es: [
        "3 habitaciones",
        "2 baños",
        "Piscina",
        "Se vende amueblada",
        "Propiedad totalmente cerrada",
        "Lista para habitar",
      ],
      en: [
        "3 bedrooms",
        "2 bathrooms",
        "Pool",
        "Sold furnished",
        "Fully enclosed property",
        "Move-in ready",
      ],
      fr: [
        "3 chambres",
        "2 salles de bain",
        "Piscine",
        "Vendue meublée",
        "Propriété entièrement clôturée",
        "Prête à habiter",
      ],
      de: [
        "3 Schlafzimmer",
        "2 Bäder",
        "Pool",
        "Möbliert verkauft",
        "Komplett umzäuntes Grundstück",
        "Bezugsfertig",
      ],
    },
    images: [
      casa2Image("WhatsApp Image 2026-06-13 at 11.48.55 AM.jpeg", "Casa amueblada en Chachagua Centro"),
      casa2Image("WhatsApp Image 2026-06-13 at 11.48.55 AM (1).jpeg", "Casa amueblada en Chachagua Centro"),
      casa2Image("WhatsApp Image 2026-06-13 at 11.48.55 AM (2).jpeg", "Casa amueblada en Chachagua Centro"),
      casa2Image("WhatsApp Image 2026-06-13 at 11.48.55 AM (3).jpeg", "Casa amueblada en Chachagua Centro"),
      casa2Image("WhatsApp Image 2026-06-13 at 11.48.55 AM (4).jpeg", "Casa amueblada en Chachagua Centro"),
      casa2Image("WhatsApp Image 2026-06-13 at 11.48.56 AM.jpeg", "Casa amueblada en Chachagua Centro"),
      casa2Image("WhatsApp Image 2026-06-13 at 11.48.56 AM (1).jpeg", "Casa amueblada en Chachagua Centro"),
      casa2Image("WhatsApp Image 2026-06-13 at 11.48.56 AM (2).jpeg", "Casa amueblada en Chachagua Centro"),
      casa2Image("WhatsApp Image 2026-06-13 at 11.48.56 AM (3).jpeg", "Casa amueblada en Chachagua Centro"),
      casa2Image("WhatsApp Image 2026-06-13 at 11.48.56 AM (4).jpeg", "Casa amueblada en Chachagua Centro"),
      casa2Image("WhatsApp Image 2026-06-13 at 11.48.56 AM (5).jpeg", "Casa amueblada en Chachagua Centro"),
      casa2Image("WhatsApp Image 2026-06-13 at 11.48.56 AM (6).jpeg", "Casa amueblada en Chachagua Centro"),
      casa2Image("WhatsApp Image 2026-06-13 at 11.48.56 AM (7).jpeg", "Casa amueblada en Chachagua Centro"),
      casa2Image("WhatsApp Image 2026-06-13 at 11.48.56 AM (8).jpeg", "Casa amueblada en Chachagua Centro"),
      casa2Image("WhatsApp Image 2026-06-13 at 11.48.57 AM.jpeg", "Casa amueblada en Chachagua Centro"),
      casa2Image("WhatsApp Image 2026-06-13 at 11.48.57 AM (1).jpeg", "Casa amueblada en Chachagua Centro"),
      casa2Image("WhatsApp Image 2026-06-13 at 11.48.57 AM (2).jpeg", "Casa amueblada en Chachagua Centro"),
      casa2Image("WhatsApp Image 2026-06-13 at 11.48.57 AM (3).jpeg", "Casa amueblada en Chachagua Centro"),
      casa2Image("WhatsApp Image 2026-06-13 at 11.48.57 AM (4).jpeg", "Casa amueblada en Chachagua Centro"),
      casa2Image("WhatsApp Image 2026-06-13 at 11.48.57 AM (5).jpeg", "Casa amueblada en Chachagua Centro"),
      casa2Image("WhatsApp Image 2026-06-13 at 11.48.57 AM (6).jpeg", "Casa amueblada en Chachagua Centro"),
      casa2Image("WhatsApp Image 2026-06-13 at 11.48.57 AM (7).jpeg", "Casa amueblada en Chachagua Centro"),
      casa2Image("WhatsApp Image 2026-06-13 at 11.48.57 AM (8).jpeg", "Casa amueblada en Chachagua Centro"),
      casa2Image("WhatsApp Image 2026-06-13 at 11.48.58 AM.jpeg", "Casa amueblada en Chachagua Centro"),
      casa2Image("WhatsApp Image 2026-06-13 at 11.48.58 AM (1).jpeg", "Casa amueblada en Chachagua Centro"),
      casa2Image("WhatsApp Image 2026-06-13 at 11.48.58 AM (2).jpeg", "Casa amueblada en Chachagua Centro"),
      casa2Image("WhatsApp Image 2026-06-13 at 11.48.58 AM (3).jpeg", "Casa amueblada en Chachagua Centro"),
      casa2Image("WhatsApp Image 2026-06-13 at 11.48.59 AM.jpeg", "Casa amueblada en Chachagua Centro"),
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
