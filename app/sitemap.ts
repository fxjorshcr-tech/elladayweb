import type { MetadataRoute } from "next"
import { properties } from "@/lib/properties"

const BASE = "https://elladayhome.com"

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    { url: BASE, changeFrequency: "weekly", priority: 1 },
    { url: `${BASE}/properties`, changeFrequency: "weekly", priority: 0.9 },
    { url: `${BASE}/guide`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/sell`, changeFrequency: "monthly", priority: 0.6 },
    { url: `${BASE}/about`, changeFrequency: "monthly", priority: 0.5 },
    { url: `${BASE}/contact`, changeFrequency: "monthly", priority: 0.5 },
  ]

  const propertyRoutes: MetadataRoute.Sitemap = properties.map((p) => ({
    url: `${BASE}/properties/${p.slug}`,
    changeFrequency: "weekly",
    priority: 0.8,
  }))

  return [...staticRoutes, ...propertyRoutes]
}
