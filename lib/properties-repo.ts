import "server-only"

import { revalidatePath, revalidateTag, unstable_cache } from "next/cache"

import {
  staticProperties,
  type Agent,
  type Currency,
  type L,
  type LArr,
  type Property,
  type PropertyImage,
  type PropertyType,
} from "@/lib/properties"
import {
  isSupabaseConfigured,
  supabaseAdmin,
  supabasePublic,
} from "@/lib/supabase/server"

export const PROPERTIES_TAG = "properties"

/** Shape of a row in the `properties` table. */
export type PropertyRow = {
  id: string
  slug: string
  type: PropertyType
  agent: Agent
  published: boolean
  price: number
  currency: Currency
  negotiable: boolean
  price_on_request: boolean
  sold: boolean
  is_new: boolean
  previous_price: number | null
  bedrooms: number | null
  bathrooms: number | null
  built_area: number | null
  lot_size: number | null
  lot_unit: "m2" | "ha" | null
  location: L
  map_query: string
  title: L
  short_description: L
  description: LArr
  highlights: LArr
  images: PropertyImage[]
  sort_order: number
  created_by: Agent | null
  created_at: string
  updated_at: string
}

export function rowToProperty(row: PropertyRow): Property {
  return {
    id: row.id,
    slug: row.slug,
    type: row.type,
    agent: row.agent,
    published: row.published,
    createdAt: row.created_at,
    updatedAt: row.updated_at,
    createdBy: row.created_by ?? undefined,
    price: Number(row.price),
    currency: row.currency,
    negotiable: row.negotiable || undefined,
    priceOnRequest: row.price_on_request || undefined,
    sold: row.sold || undefined,
    isNew: row.is_new || undefined,
    previousPrice: row.previous_price != null ? Number(row.previous_price) : undefined,
    bedrooms: row.bedrooms ?? undefined,
    bathrooms: row.bathrooms != null ? Number(row.bathrooms) : undefined,
    builtArea: row.built_area != null ? Number(row.built_area) : undefined,
    lotSize: row.lot_size != null ? Number(row.lot_size) : undefined,
    lotUnit: row.lot_unit ?? undefined,
    location: row.location,
    mapQuery: row.map_query,
    title: row.title,
    shortDescription: row.short_description,
    description: row.description,
    highlights: row.highlights,
    images: row.images ?? [],
  }
}

export function propertyToRow(
  p: Omit<Property, "id" | "createdAt" | "updatedAt">
): Omit<PropertyRow, "id" | "created_at" | "updated_at" | "sort_order"> {
  return {
    slug: p.slug,
    type: p.type,
    agent: p.agent,
    published: p.published ?? false,
    price: p.price,
    currency: p.currency,
    negotiable: Boolean(p.negotiable),
    price_on_request: Boolean(p.priceOnRequest),
    sold: Boolean(p.sold),
    is_new: Boolean(p.isNew),
    previous_price: p.previousPrice ?? null,
    bedrooms: p.bedrooms ?? null,
    bathrooms: p.bathrooms ?? null,
    built_area: p.builtArea ?? null,
    lot_size: p.lotSize ?? null,
    lot_unit: p.lotUnit ?? null,
    location: p.location,
    map_query: p.mapQuery,
    title: p.title,
    short_description: p.shortDescription,
    description: p.description,
    highlights: p.highlights,
    images: p.images,
    created_by: p.createdBy ?? null,
  }
}

const ORDER = [
  { column: "sort_order", ascending: true },
  { column: "created_at", ascending: false },
] as const

async function fetchPublished(): Promise<Property[]> {
  if (!isSupabaseConfigured()) return staticProperties
  const { data, error } = await supabasePublic()
    .from("properties")
    .select("*")
    .eq("published", true)
    .order(ORDER[0].column, { ascending: ORDER[0].ascending })
    .order(ORDER[1].column, { ascending: ORDER[1].ascending })
  if (error) {
    console.error("[properties] failed to load listings:", error.message)
    return staticProperties
  }
  return (data as PropertyRow[]).map(rowToProperty)
}

/**
 * Published listings for the public site. Cached until an admin publishes
 * a change (see revalidateProperties) or an hour passes.
 */
export const getPublishedProperties = unstable_cache(
  fetchPublished,
  ["published-properties"],
  { tags: [PROPERTIES_TAG], revalidate: 3600 }
)

export async function getPublishedProperty(
  slug: string
): Promise<Property | undefined> {
  const list = await getPublishedProperties()
  return list.find((p) => p.slug === slug)
}

/** Unique zones from the published listings, keyed by their Spanish name. */
export async function getZones(): Promise<[string, L][]> {
  const list = await getPublishedProperties()
  const map = new Map<string, L>()
  for (const p of list) {
    if (!map.has(p.location.es)) map.set(p.location.es, p.location)
  }
  return Array.from(map.entries())
}

// ---------------------------------------------------------------------------
// Admin (service role, uncached)
// ---------------------------------------------------------------------------

export async function adminListProperties(): Promise<Property[]> {
  const { data, error } = await supabaseAdmin()
    .from("properties")
    .select("*")
    .order(ORDER[0].column, { ascending: ORDER[0].ascending })
    .order(ORDER[1].column, { ascending: ORDER[1].ascending })
  if (error) throw new Error(error.message)
  return (data as PropertyRow[]).map(rowToProperty)
}

export async function adminGetProperty(id: string): Promise<Property | null> {
  const { data, error } = await supabaseAdmin()
    .from("properties")
    .select("*")
    .eq("id", id)
    .maybeSingle()
  if (error) throw new Error(error.message)
  return data ? rowToProperty(data as PropertyRow) : null
}

export async function adminSlugTaken(
  slug: string,
  exceptId?: string
): Promise<boolean> {
  let query = supabaseAdmin().from("properties").select("id").eq("slug", slug)
  if (exceptId) query = query.neq("id", exceptId)
  const { data, error } = await query.limit(1)
  if (error) throw new Error(error.message)
  return (data?.length ?? 0) > 0
}

/** Purge every cached page that shows listings. */
export function revalidateProperties() {
  revalidateTag(PROPERTIES_TAG, "max")
  revalidatePath("/", "layout")
}
