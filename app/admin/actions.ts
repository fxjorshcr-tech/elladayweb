"use server"

import { redirect } from "next/navigation"

import {
  clearSessionCookie,
  createSessionCookie,
  isAdminConfigured,
  requireAdmin,
  verifyPassword,
} from "@/lib/admin/auth"
import {
  PropertyInputSchema,
  SpanishCopySchema,
  type PropertyInput,
} from "@/lib/admin/schema"
import {
  isTranslationConfigured,
  translateCopy,
  type Translations,
} from "@/lib/admin/translate"
import type { L, LArr, Property } from "@/lib/properties"
import {
  adminGetProperty,
  adminSlugTaken,
  propertyToRow,
  revalidateProperties,
} from "@/lib/properties-repo"
import { PROPERTIES_BUCKET, publicStorageUrl, supabaseAdmin } from "@/lib/supabase/server"

export type ActionResult<T = undefined> =
  | { ok: true; data: T }
  | { ok: false; error: string }

function fail(error: unknown): { ok: false; error: string } {
  const message =
    error instanceof Error ? error.message : "Ocurrió un error inesperado"
  return { ok: false, error: message }
}

// ---------------------------------------------------------------------------
// Session
// ---------------------------------------------------------------------------

export type LoginState = { error?: string }

export async function loginAction(
  _prev: LoginState,
  formData: FormData
): Promise<LoginState> {
  if (!isAdminConfigured()) {
    return {
      error:
        "El panel no está configurado. Faltan las claves ADMIN_PASSWORD_DAYANA / ADMIN_PASSWORD_ELLA.",
    }
  }
  const password = String(formData.get("password") ?? "")
  const agent = verifyPassword(password)
  if (!agent) {
    // Slow down brute-force attempts a little.
    await new Promise((r) => setTimeout(r, 700))
    return { error: "Clave incorrecta. Inténtalo de nuevo." }
  }
  await createSessionCookie(agent)
  redirect("/admin")
}

export async function logoutAction() {
  await clearSessionCookie()
  redirect("/admin/login")
}

// ---------------------------------------------------------------------------
// Photos
// ---------------------------------------------------------------------------

/**
 * Mints a short-lived URL the browser uploads a photo to directly, so large
 * files never pass through the Next.js server.
 */
export async function createUploadUrl(
  slug: string,
  fileName: string
): Promise<ActionResult<{ path: string; signedUrl: string; publicUrl: string }>> {
  try {
    await requireAdmin()
    const folder = slug.replace(/[^a-z0-9-]/g, "").slice(0, 80) || "sin-nombre"
    const ext = (fileName.split(".").pop() ?? "jpg").toLowerCase()
    const safeExt = ["jpg", "jpeg", "png", "webp"].includes(ext) ? ext : "jpg"
    const stamp = Date.now().toString(36)
    const rand = Math.random().toString(36).slice(2, 8)
    const path = `${folder}/${stamp}-${rand}.${safeExt}`

    const { data, error } = await supabaseAdmin()
      .storage.from(PROPERTIES_BUCKET)
      .createSignedUploadUrl(path)
    if (error) throw new Error(error.message)

    return {
      ok: true,
      data: { path, signedUrl: data.signedUrl, publicUrl: publicStorageUrl(path) },
    }
  } catch (e) {
    return fail(e)
  }
}

export async function deleteUploadedPhoto(path: string): Promise<ActionResult> {
  try {
    await requireAdmin()
    const { error } = await supabaseAdmin()
      .storage.from(PROPERTIES_BUCKET)
      .remove([path])
    if (error) throw new Error(error.message)
    return { ok: true, data: undefined }
  } catch (e) {
    return fail(e)
  }
}

// ---------------------------------------------------------------------------
// Translation
// ---------------------------------------------------------------------------

export async function translateAction(
  input: unknown
): Promise<ActionResult<Translations>> {
  try {
    await requireAdmin()
    const es = SpanishCopySchema.parse(input)
    const translations = await translateCopy(es)
    return { ok: true, data: translations }
  } catch (e) {
    return fail(e)
  }
}

// ---------------------------------------------------------------------------
// Listings
// ---------------------------------------------------------------------------

function buildLangFields(
  es: PropertyInput["es"],
  tr: Translations | null
): Pick<Property, "title" | "location" | "shortDescription" | "description" | "highlights"> {
  // `pick()` on the public site falls back to English, so when there is no
  // translation yet we mirror the Spanish copy there rather than show blanks.
  const en = tr?.en ?? es
  const l = (key: "title" | "location" | "shortDescription"): L => ({
    es: es[key],
    en: en[key],
    ...(tr ? { fr: tr.fr[key], de: tr.de[key] } : {}),
  })
  const arr = (key: "description" | "highlights"): LArr => ({
    es: es[key],
    en: en[key],
    ...(tr ? { fr: tr.fr[key], de: tr.de[key] } : {}),
  })
  return {
    title: l("title"),
    location: l("location"),
    shortDescription: l("shortDescription"),
    description: arr("description"),
    highlights: arr("highlights"),
  }
}

export async function savePropertyAction(
  raw: unknown
): Promise<ActionResult<{ id: string; slug: string; translated: boolean }>> {
  try {
    const session = await requireAdmin()
    const parsed = PropertyInputSchema.safeParse(raw)
    if (!parsed.success) {
      const first = parsed.error.issues[0]
      return { ok: false, error: first?.message ?? "Revisa los campos del formulario" }
    }
    const input = parsed.data

    if (input.images.length === 0) {
      return { ok: false, error: "Sube al menos una foto de la propiedad." }
    }
    if (!input.priceOnRequest && input.price <= 0) {
      return {
        ok: false,
        error: "Indica el precio o marca la opción «Precio a consultar».",
      }
    }
    if (await adminSlugTaken(input.slug, input.id)) {
      return {
        ok: false,
        error: "Ya existe otra propiedad con ese enlace (slug). Cámbialo.",
      }
    }

    // Translate automatically when publishing without translations.
    let translations = input.translations
    let translated = false
    if (!translations && input.published && isTranslationConfigured()) {
      translations = await translateCopy(input.es)
      translated = true
    }

    const alt = input.es.title
    const property: Omit<Property, "id" | "createdAt" | "updatedAt"> = {
      slug: input.slug,
      type: input.type,
      agent: input.agent,
      published: input.published,
      createdBy: session.agent,
      price: input.priceOnRequest ? 0 : input.price,
      currency: input.currency,
      negotiable: input.negotiable && !input.priceOnRequest,
      priceOnRequest: input.priceOnRequest,
      sold: input.status === "sold",
      isNew: input.status === "new",
      previousPrice:
        input.previousPrice && input.previousPrice > input.price
          ? input.previousPrice
          : undefined,
      bedrooms: input.bedrooms ?? undefined,
      bathrooms: input.bathrooms ?? undefined,
      builtArea: input.builtArea ?? undefined,
      lotSize: input.lotSize ?? undefined,
      lotUnit: input.lotSize != null ? input.lotUnit : undefined,
      mapQuery: input.mapQuery || `${input.es.location}, Costa Rica`,
      images: input.images.map((img) => ({ ...img, alt: img.alt || alt })),
      ...buildLangFields(input.es, translations),
    }

    const row = propertyToRow(property)
    const db = supabaseAdmin()
    let id = input.id

    if (id) {
      const existing = await adminGetProperty(id)
      if (!existing) return { ok: false, error: "La propiedad ya no existe." }
      // Keep the original author; only update the row.
      const { created_by: _ignored, ...update } = row
      void _ignored
      const { error } = await db.from("properties").update(update).eq("id", id)
      if (error) throw new Error(error.message)
      // Remove photos that were dropped from the gallery.
      const kept = new Set(property.images.map((i) => i.path).filter(Boolean))
      const orphans = existing.images
        .map((i) => i.path)
        .filter((p): p is string => Boolean(p) && !kept.has(p))
      if (orphans.length) {
        await db.storage.from(PROPERTIES_BUCKET).remove(orphans)
      }
    } else {
      const { data, error } = await db
        .from("properties")
        .insert(row)
        .select("id")
        .single()
      if (error) throw new Error(error.message)
      id = (data as { id: string }).id
    }

    revalidateProperties()
    return { ok: true, data: { id: id!, slug: input.slug, translated } }
  } catch (e) {
    return fail(e)
  }
}

export async function setFlagsAction(
  id: string,
  flags: Partial<{ published: boolean; sold: boolean; is_new: boolean }>
): Promise<ActionResult> {
  try {
    await requireAdmin()
    const update: Record<string, boolean> = { ...flags }
    // A sold listing is never "new" and vice versa.
    if (flags.sold) update.is_new = false
    if (flags.is_new) update.sold = false
    const { error } = await supabaseAdmin()
      .from("properties")
      .update(update)
      .eq("id", id)
    if (error) throw new Error(error.message)
    revalidateProperties()
    return { ok: true, data: undefined }
  } catch (e) {
    return fail(e)
  }
}

export async function deletePropertyAction(id: string): Promise<ActionResult> {
  try {
    await requireAdmin()
    const existing = await adminGetProperty(id)
    if (!existing) return { ok: true, data: undefined }
    const db = supabaseAdmin()
    const paths = existing.images
      .map((i) => i.path)
      .filter((p): p is string => Boolean(p))
    if (paths.length) await db.storage.from(PROPERTIES_BUCKET).remove(paths)
    const { error } = await db.from("properties").delete().eq("id", id)
    if (error) throw new Error(error.message)
    revalidateProperties()
    return { ok: true, data: undefined }
  } catch (e) {
    return fail(e)
  }
}

export async function reorderAction(ids: string[]): Promise<ActionResult> {
  try {
    await requireAdmin()
    const db = supabaseAdmin()
    await Promise.all(
      ids.map((id, index) =>
        db.from("properties").update({ sort_order: index }).eq("id", id)
      )
    )
    revalidateProperties()
    return { ok: true, data: undefined }
  } catch (e) {
    return fail(e)
  }
}
