import "server-only"

import { createClient, type SupabaseClient } from "@supabase/supabase-js"

// Project URL is public (it is already baked into every photo URL).
export const SUPABASE_URL =
  process.env.NEXT_PUBLIC_SUPABASE_URL ??
  "https://mmlbslwljvmscbgsqkkq.supabase.co"

export const PROPERTIES_BUCKET = "properties"

/** True when the site can read listings from the database. */
export function isSupabaseConfigured(): boolean {
  return Boolean(
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ||
      process.env.SUPABASE_SERVICE_ROLE_KEY
  )
}

let anonClient: SupabaseClient | null = null
let adminClient: SupabaseClient | null = null

/**
 * Read-only client for the public site. Row Level Security only exposes
 * published listings to it.
 */
export function supabasePublic(): SupabaseClient {
  if (anonClient) return anonClient
  const key =
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY ??
    process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!key) throw new Error("Supabase is not configured")
  anonClient = createClient(SUPABASE_URL, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  })
  return anonClient
}

/**
 * Service-role client used only inside admin server actions. It bypasses RLS,
 * so it must never be imported from client components.
 */
export function supabaseAdmin(): SupabaseClient {
  if (adminClient) return adminClient
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY
  if (!key) throw new Error("SUPABASE_SERVICE_ROLE_KEY is not configured")
  adminClient = createClient(SUPABASE_URL, key, {
    auth: { persistSession: false, autoRefreshToken: false },
  })
  return adminClient
}

export function publicStorageUrl(path: string): string {
  return `${SUPABASE_URL}/storage/v1/object/public/${PROPERTIES_BUCKET}/${path
    .split("/")
    .map(encodeURIComponent)
    .join("/")}`
}
