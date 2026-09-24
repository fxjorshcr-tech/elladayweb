"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

import { slugify } from "@/lib/admin/image-compress"
import type { ListingStatus, PropertyInput } from "@/lib/admin/schema"
import type { Translations } from "@/lib/admin/translate"
import type { Agent, Property, PropertyImage } from "@/lib/properties"
import { savePropertyAction, translateAction } from "./actions"
import { PhotoUploader } from "./photo-uploader"

type FormState = {
  slug: string
  slugTouched: boolean
  type: PropertyInput["type"]
  agent: Agent
  status: ListingStatus
  price: string
  currency: PropertyInput["currency"]
  negotiable: boolean
  priceOnRequest: boolean
  previousPrice: string
  bedrooms: string
  bathrooms: string
  builtArea: string
  lotSize: string
  lotUnit: "m2" | "ha"
  mapQuery: string
  title: string
  location: string
  shortDescription: string
  description: string
  highlights: string
  translations: Translations | null
  images: PropertyImage[]
}

function fromProperty(p: Property | undefined, defaultAgent: Agent): FormState {
  const hasTranslations = Boolean(p?.title.fr && p?.title.de)
  return {
    slug: p?.slug ?? "",
    slugTouched: Boolean(p),
    type: p?.type ?? "lot",
    agent: p?.agent ?? defaultAgent,
    status: p?.sold ? "sold" : p?.isNew ? "new" : "available",
    price: p && !p.priceOnRequest && p.price > 0 ? String(p.price) : "",
    currency: p?.currency ?? "CRC",
    negotiable: Boolean(p?.negotiable),
    priceOnRequest: Boolean(p?.priceOnRequest),
    previousPrice: p?.previousPrice != null ? String(p.previousPrice) : "",
    bedrooms: p?.bedrooms != null ? String(p.bedrooms) : "",
    bathrooms: p?.bathrooms != null ? String(p.bathrooms) : "",
    builtArea: p?.builtArea != null ? String(p.builtArea) : "",
    lotSize: p?.lotSize != null ? String(p.lotSize) : "",
    lotUnit: p?.lotUnit ?? "m2",
    mapQuery: p?.mapQuery ?? "",
    title: p?.title.es ?? "",
    location: p?.location.es ?? "",
    shortDescription: p?.shortDescription.es ?? "",
    description: p?.description.es.join("\n\n") ?? "",
    highlights: p?.highlights.es.join("\n") ?? "",
    translations:
      p && hasTranslations
        ? {
            en: pickLang(p, "en"),
            fr: pickLang(p, "fr"),
            de: pickLang(p, "de"),
          }
        : null,
    images: p?.images ?? [],
  }
}

function pickLang(p: Property, lang: "en" | "fr" | "de") {
  return {
    title: p.title[lang] ?? "",
    location: p.location[lang] ?? "",
    shortDescription: p.shortDescription[lang] ?? "",
    description: p.description[lang] ?? [],
    highlights: p.highlights[lang] ?? [],
  }
}

// Accepts "40000000", "40.000.000", "₡40,000,000" or "2.5" and returns a number.
const num = (s: string): number | null => {
  let t = s.replace(/[^\d.,]/g, "").replace(/,/g, ".")
  if (!t) return null
  const dots = t.split(".").length - 1
  // Several separators, or one followed by exactly three digits: thousands.
  if (dots > 1 || /\.\d{3}$/.test(t)) t = t.replace(/\./g, "")
  const n = Number(t)
  return Number.isFinite(n) ? n : null
}

const splitParagraphs = (s: string) =>
  s.split(/\n\s*\n/).map((x) => x.replace(/\s*\n\s*/g, " ").trim())
const splitLines = (s: string) => s.split("\n").map((x) => x.trim())

export function PropertyForm({
  property,
  defaultAgent,
  translationEnabled,
}: {
  property?: Property
  defaultAgent: Agent
  translationEnabled: boolean
}) {
  const router = useRouter()
  const [form, setForm] = React.useState<FormState>(() =>
    fromProperty(property, defaultAgent)
  )
  const [saving, setSaving] = React.useState<"draft" | "publish" | null>(null)
  const [translating, setTranslating] = React.useState(false)
  const [error, setError] = React.useState<string | null>(null)
  const [notice, setNotice] = React.useState<string | null>(null)
  const [showTranslations, setShowTranslations] = React.useState(false)

  const set = <K extends keyof FormState>(key: K, value: FormState[K]) =>
    setForm((f) => ({ ...f, [key]: value }))

  // Any change to the Spanish copy invalidates the generated translations so
  // the site never shows stale text in other languages.
  const setCopy = (
    key: "title" | "location" | "shortDescription" | "description" | "highlights",
    value: string
  ) =>
    setForm((f) => ({
      ...f,
      [key]: value,
      translations: null,
      slug:
        key === "title" && !f.slugTouched ? slugify(value) : f.slug,
    }))

  const spanishCopy = () => ({
    title: form.title,
    location: form.location,
    shortDescription: form.shortDescription,
    description: splitParagraphs(form.description),
    highlights: splitLines(form.highlights),
  })

  const buildInput = (published: boolean): PropertyInput => ({
    id: property?.id,
    slug: form.slug,
    type: form.type,
    agent: form.agent,
    status: form.status,
    published,
    price: form.priceOnRequest ? 0 : (num(form.price) ?? 0),
    currency: form.currency,
    negotiable: form.negotiable,
    priceOnRequest: form.priceOnRequest,
    previousPrice: num(form.previousPrice),
    bedrooms: num(form.bedrooms),
    bathrooms: num(form.bathrooms),
    builtArea: num(form.builtArea),
    lotSize: num(form.lotSize),
    lotUnit: form.lotUnit,
    mapQuery: form.mapQuery,
    es: spanishCopy(),
    translations: form.translations,
    images: form.images,
  })

  const save = async (published: boolean) => {
    setSaving(published ? "publish" : "draft")
    setError(null)
    setNotice(null)
    const res = await savePropertyAction(buildInput(published))
    if (!res.ok) {
      setError(res.error)
      setSaving(null)
      return
    }
    setNotice(
      published
        ? `Publicada. Ya está visible en /properties/${res.data.slug}${
            res.data.translated ? " (traducida automáticamente)." : "."
          }`
        : "Borrador guardado."
    )
    router.push("/admin")
    router.refresh()
  }

  const translate = async () => {
    setTranslating(true)
    setError(null)
    const res = await translateAction(spanishCopy())
    if (!res.ok) setError(res.error)
    else {
      set("translations", res.data)
      setShowTranslations(true)
    }
    setTranslating(false)
  }

  const showHouseFields = form.type === "house"

  return (
    <div className="mx-auto max-w-4xl">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <Link
            href="/admin"
            className="text-xs tracking-wide text-muted-foreground hover:text-brand-green"
          >
            ← Volver a la lista
          </Link>
          <h1 className="mt-3 font-serif text-3xl text-brand-green md:text-4xl">
            {property ? "Editar propiedad" : "Nueva propiedad"}
          </h1>
        </div>
        {property?.published && (
          <Link
            href={`/properties/${property.slug}`}
            target="_blank"
            className="text-sm text-brand-green underline underline-offset-4"
          >
            Ver en el sitio ↗
          </Link>
        )}
      </div>

      <form
        className="mt-10 space-y-10"
        onSubmit={(e) => {
          e.preventDefault()
          void save(true)
        }}
      >
        {/* Basics */}
        <Section title="Lo básico">
          <div className="grid gap-5 sm:grid-cols-3">
            <Field label="Tipo">
              <select
                value={form.type}
                onChange={(e) => set("type", e.target.value as FormState["type"])}
                className={inputClass}
              >
                <option value="lot">Lote</option>
                <option value="house">Casa</option>
                <option value="farm">Finca</option>
              </select>
            </Field>
            <Field label="Estado">
              <select
                value={form.status}
                onChange={(e) => set("status", e.target.value as ListingStatus)}
                className={inputClass}
              >
                <option value="available">Disponible</option>
                <option value="new">Nueva (etiqueta «Nuevo»)</option>
                <option value="sold">Vendida</option>
              </select>
            </Field>
            <Field label="Agente">
              <select
                value={form.agent}
                onChange={(e) => set("agent", e.target.value as Agent)}
                className={inputClass}
              >
                <option value="dayana">Dayana</option>
                <option value="ella">Ella</option>
              </select>
            </Field>
          </div>

          <Field label="Título" hint="Ej.: Lote con vista al volcán en El Bosque, La Fortuna">
            <input
              value={form.title}
              onChange={(e) => setCopy("title", e.target.value)}
              className={inputClass}
              required
            />
          </Field>

          <div className="grid gap-5 sm:grid-cols-2">
            <Field label="Ubicación" hint="Barrio, distrito, cantón">
              <input
                value={form.location}
                onChange={(e) => setCopy("location", e.target.value)}
                className={inputClass}
                placeholder="El Bosque, La Fortuna, San Carlos"
                required
              />
            </Field>
            <Field
              label="Enlace (slug)"
              hint={`Dirección de la página: /properties/${form.slug || "…"}`}
            >
              <input
                value={form.slug}
                onChange={(e) =>
                  setForm((f) => ({
                    ...f,
                    slug: slugify(e.target.value),
                    slugTouched: true,
                  }))
                }
                className={inputClass}
                required
              />
            </Field>
          </div>

          <Field
            label="Búsqueda para el mapa (opcional)"
            hint="Texto que se envía a Google Maps. Si lo dejas vacío usamos la ubicación."
          >
            <input
              value={form.mapQuery}
              onChange={(e) => set("mapQuery", e.target.value)}
              className={inputClass}
              placeholder="El Bosque, La Fortuna, San Carlos, Alajuela, Costa Rica"
            />
          </Field>
        </Section>

        {/* Price */}
        <Section title="Precio">
          <label className="flex items-center gap-3 text-sm">
            <input
              type="checkbox"
              checked={form.priceOnRequest}
              onChange={(e) => set("priceOnRequest", e.target.checked)}
              className="h-4 w-4 accent-brand-green"
            />
            Precio a consultar (no se muestra un monto)
          </label>
          {!form.priceOnRequest && (
            <div className="grid gap-5 sm:grid-cols-3">
              <Field label="Moneda">
                <select
                  value={form.currency}
                  onChange={(e) =>
                    set("currency", e.target.value as FormState["currency"])
                  }
                  className={inputClass}
                >
                  <option value="CRC">Colones (₡)</option>
                  <option value="USD">Dólares ($)</option>
                </select>
              </Field>
              <Field label="Precio">
                <input
                  inputMode="numeric"
                  value={form.price}
                  onChange={(e) => set("price", e.target.value)}
                  className={inputClass}
                  placeholder="40000000"
                  required
                />
              </Field>
              <Field
                label="Precio anterior (opcional)"
                hint="Si lo llenas se muestra la etiqueta «Rebajado»"
              >
                <input
                  inputMode="numeric"
                  value={form.previousPrice}
                  onChange={(e) => set("previousPrice", e.target.value)}
                  className={inputClass}
                />
              </Field>
              <label className="flex items-center gap-3 text-sm sm:col-span-3">
                <input
                  type="checkbox"
                  checked={form.negotiable}
                  onChange={(e) => set("negotiable", e.target.checked)}
                  className="h-4 w-4 accent-brand-green"
                />
                Precio negociable
              </label>
            </div>
          )}
        </Section>

        {/* Specs */}
        <Section title="Características">
          <div className="grid gap-5 sm:grid-cols-4">
            <Field label="Tamaño del terreno">
              <input
                inputMode="decimal"
                value={form.lotSize}
                onChange={(e) => set("lotSize", e.target.value)}
                className={inputClass}
                placeholder="5000"
              />
            </Field>
            <Field label="Unidad">
              <select
                value={form.lotUnit}
                onChange={(e) => set("lotUnit", e.target.value as "m2" | "ha")}
                className={inputClass}
              >
                <option value="m2">m²</option>
                <option value="ha">hectáreas</option>
              </select>
            </Field>
            {showHouseFields && (
              <>
                <Field label="Habitaciones">
                  <input
                    inputMode="numeric"
                    value={form.bedrooms}
                    onChange={(e) => set("bedrooms", e.target.value)}
                    className={inputClass}
                  />
                </Field>
                <Field label="Baños">
                  <input
                    inputMode="decimal"
                    value={form.bathrooms}
                    onChange={(e) => set("bathrooms", e.target.value)}
                    className={inputClass}
                  />
                </Field>
                <Field label="Construcción (m²)">
                  <input
                    inputMode="decimal"
                    value={form.builtArea}
                    onChange={(e) => set("builtArea", e.target.value)}
                    className={inputClass}
                  />
                </Field>
              </>
            )}
          </div>
        </Section>

        {/* Copy */}
        <Section
          title="Textos (en español)"
          description={
            translationEnabled
              ? "Escribe solo en español. Al publicar, el inglés, francés y alemán se generan automáticamente."
              : "Escribe en español. La traducción automática no está configurada, así que el sitio mostrará el texto en español en los demás idiomas."
          }
        >
          <Field label="Resumen corto" hint="1–2 frases. Aparece en la tarjeta y en Google.">
            <textarea
              value={form.shortDescription}
              onChange={(e) => setCopy("shortDescription", e.target.value)}
              rows={2}
              className={inputClass}
              required
            />
          </Field>
          <Field
            label="Descripción completa"
            hint="Separa los párrafos con una línea en blanco."
          >
            <textarea
              value={form.description}
              onChange={(e) => setCopy("description", e.target.value)}
              rows={8}
              className={inputClass}
              required
            />
          </Field>
          <Field label="Destacados" hint="Uno por línea. Ej.: Agua disponible">
            <textarea
              value={form.highlights}
              onChange={(e) => setCopy("highlights", e.target.value)}
              rows={5}
              className={inputClass}
            />
          </Field>

          {translationEnabled && (
            <div className="rounded-md border border-border bg-white/60 p-4 text-sm">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <p className="text-muted-foreground">
                  {form.translations
                    ? "Traducciones listas (EN · FR · DE)."
                    : "Sin traducciones todavía. Se generarán al publicar, o puedes revisarlas antes."}
                </p>
                <div className="flex gap-2">
                  {form.translations && (
                    <button
                      type="button"
                      onClick={() => setShowTranslations((v) => !v)}
                      className="rounded-full border border-border px-3 py-1.5 text-xs text-brand-green hover:bg-muted"
                    >
                      {showTranslations ? "Ocultar" : "Ver traducciones"}
                    </button>
                  )}
                  <button
                    type="button"
                    disabled={translating || !form.title || !form.shortDescription}
                    onClick={() => void translate()}
                    className="rounded-full bg-brand-gold px-3 py-1.5 text-xs text-white hover:bg-brand-gold-dark disabled:opacity-50"
                  >
                    {translating
                      ? "Traduciendo…"
                      : form.translations
                        ? "Volver a traducir"
                        : "Traducir ahora"}
                  </button>
                </div>
              </div>
              {showTranslations && form.translations && (
                <div className="mt-4 grid gap-4 md:grid-cols-3">
                  {(["en", "fr", "de"] as const).map((lang) => (
                    <div key={lang} className="space-y-2">
                      <p className="text-xs tracking-[0.16em] text-brand-gold uppercase">
                        {lang}
                      </p>
                      <p className="font-medium text-brand-green">
                        {form.translations![lang].title}
                      </p>
                      <p className="text-muted-foreground">
                        {form.translations![lang].shortDescription}
                      </p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          )}
        </Section>

        {/* Photos */}
        <Section title="Fotos">
          <PhotoUploader
            images={form.images}
            onChange={(update) =>
              setForm((f) => ({ ...f, images: update(f.images) }))
            }
            slug={form.slug}
            alt={form.title}
          />
        </Section>

        {error && (
          <p className="rounded-md bg-red-50 px-4 py-3 text-sm text-red-700">
            {error}
          </p>
        )}
        {notice && (
          <p className="rounded-md bg-brand-green/10 px-4 py-3 text-sm text-brand-green">
            {notice}
          </p>
        )}

        <div className="sticky bottom-0 -mx-4 flex flex-wrap items-center justify-end gap-3 border-t border-border bg-brand-bg/95 px-4 py-4 backdrop-blur sm:mx-0 sm:px-0">
          <button
            type="button"
            disabled={saving !== null}
            onClick={() => void save(false)}
            className="rounded-full border border-border px-5 py-3 text-sm tracking-wide text-brand-green transition-colors hover:bg-muted disabled:opacity-50"
          >
            {saving === "draft" ? "Guardando…" : "Guardar borrador"}
          </button>
          <button
            type="submit"
            disabled={saving !== null}
            className="rounded-full bg-brand-green px-7 py-3 text-sm tracking-wide text-brand-cream transition-colors hover:bg-brand-green-dark disabled:opacity-50"
          >
            {saving === "publish"
              ? translationEnabled && !form.translations
                ? "Traduciendo y publicando…"
                : "Publicando…"
              : property?.published
                ? "Guardar y publicar cambios"
                : "Publicar"}
          </button>
        </div>
      </form>
    </div>
  )
}

const inputClass =
  "mt-2 w-full rounded-md border border-border bg-white px-3.5 py-2.5 text-sm text-brand-green outline-none transition-colors focus:border-brand-gold"

function Section({
  title,
  description,
  children,
}: {
  title: string
  description?: string
  children: React.ReactNode
}) {
  return (
    <section className="rounded-md border border-border bg-brand-cream p-6 md:p-8">
      <h2 className="font-serif text-2xl text-brand-green">{title}</h2>
      {description && (
        <p className="mt-2 text-sm text-muted-foreground">{description}</p>
      )}
      <div className="mt-6 space-y-5">{children}</div>
    </section>
  )
}

function Field({
  label,
  hint,
  children,
}: {
  label: string
  hint?: string
  children: React.ReactNode
}) {
  return (
    <label className="block">
      <span className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
        {label}
      </span>
      {children}
      {hint && <span className="mt-1.5 block text-xs text-muted-foreground">{hint}</span>}
    </label>
  )
}
