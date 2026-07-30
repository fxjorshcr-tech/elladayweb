import type { Metadata } from "next"
import { notFound } from "next/navigation"

import { getProperty, properties } from "@/lib/properties"
import { PropertyDetailClient } from "./property-detail-client"

type Params = { slug: string }

export function generateStaticParams(): Params[] {
  return properties.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<Params>
}): Promise<Metadata> {
  const { slug } = await params
  const property = getProperty(slug)
  if (!property) return {}

  const title = property.title.es
  const description = property.shortDescription.es
  const image = property.images[0]?.src
  const url = `/properties/${slug}`

  return {
    title,
    description,
    alternates: { canonical: url },
    openGraph: {
      title,
      description,
      url,
      type: "website",
      locale: "es_CR",
      images: image ? [{ url: image }] : undefined,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: image ? [image] : undefined,
    },
  }
}

export default async function PropertyDetailPage({
  params,
}: {
  params: Promise<Params>
}) {
  const { slug } = await params
  const property = getProperty(slug)
  if (!property) notFound()

  const url = `https://elladayhome.com/properties/${slug}`

  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Product",
        name: property.title.es,
        description: property.shortDescription.es,
        image: property.images.map((img) => img.src),
        url,
        ...(property.priceOnRequest
          ? {}
          : {
              offers: {
                "@type": "Offer",
                price: property.price,
                priceCurrency: property.currency,
                availability: property.sold
                  ? "https://schema.org/SoldOut"
                  : "https://schema.org/InStock",
                url,
              },
            }),
      },
      {
        "@type": "RealEstateListing",
        name: property.title.es,
        description: property.shortDescription.es,
        url,
        image: property.images[0]?.src,
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            name: "Inicio",
            item: "https://elladayhome.com",
          },
          {
            "@type": "ListItem",
            position: 2,
            name: "Propiedades",
            item: "https://elladayhome.com/properties",
          },
          {
            "@type": "ListItem",
            position: 3,
            name: property.title.es,
            item: url,
          },
        ],
      },
    ],
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PropertyDetailClient property={property} />
    </>
  )
}
