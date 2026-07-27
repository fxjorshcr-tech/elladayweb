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

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Product",
    name: property.title.es,
    description: property.shortDescription.es,
    image: property.images.map((img) => img.src),
    ...(property.priceOnRequest
      ? {}
      : {
          offers: {
            "@type": "Offer",
            price: property.price,
            priceCurrency: property.currency,
            availability: "https://schema.org/InStock",
          },
        }),
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
