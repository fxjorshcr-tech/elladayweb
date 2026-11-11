"use client"

import * as React from "react"
import { useSearchParams } from "next/navigation"
import { useLanguage } from "@/lib/i18n/provider"
import { priceInCrc, type Property, type PropertyType } from "@/lib/properties"
import { PropertyCard } from "@/components/property-card"
import { FadeIn } from "@/components/fade-in"
import { PageHeader } from "@/components/page-header"
import { whatsappLink } from "@/lib/constants"
import { cn } from "@/lib/utils"

type TypeFilter = "all" | PropertyType
type PriceFilter = "any" | "lt50" | "b50to100" | "gt100"
type BedsFilter = 0 | 1 | 2 | 3 | 4
type Sort = "recent" | "priceAsc" | "priceDesc"

const PRICE_BUCKETS: Record<
  Exclude<PriceFilter, "any">,
  { min: number; max: number }
> = {
  lt50: { min: 0, max: 50_000_000 },
  b50to100: { min: 50_000_000, max: 100_000_000 },
  gt100: { min: 100_000_000, max: Infinity },
}

export function PropertiesClient({ properties }: { properties: Property[] }) {
  const { t, pick } = useLanguage()

  return (
    <>
      <PageHeader
        crumb={t("properties.title")}
        eyebrow={pick({
          es: "Nuestra cartera",
          en: "Our portfolio",
          fr: "Notre portefeuille",
          de: "Unser Portfolio",
        })}
        title={t("properties.title")}
        subtitle={t("properties.subtitle")}
      />
      <section className="container-page pt-10 pb-24 md:pt-14 md:pb-32">
        {/* useSearchParams (hero search deep links) forces this subtree to
            render on the client, so keep the static header above out of it. */}
        <React.Suspense fallback={null}>
          <PropertyExplorer properties={properties} />
        </React.Suspense>
      </section>
    </>
  )
}

function PropertyExplorer({ properties }: { properties: Property[] }) {
  const { t, pick } = useLanguage()
  const searchParams = useSearchParams()

  const typeParam = searchParams.get("type")
  const zoneParam = searchParams.get("zone")

  const [type, setType] = React.useState<TypeFilter>(
    typeParam === "house" || typeParam === "lot" || typeParam === "farm"
      ? typeParam
      : "all"
  )
  const [zone, setZone] = React.useState<string>(zoneParam ?? "")
  const [price, setPrice] = React.useState<PriceFilter>("any")
  const [beds, setBeds] = React.useState<BedsFilter>(0)
  const [sort, setSort] = React.useState<Sort>("recent")

  // Unique zones from the current listings, keyed by their Spanish name.
  const zones = React.useMemo(() => {
    const map = new Map<string, Property["location"]>()
    for (const p of properties) {
      if (!map.has(p.location.es)) map.set(p.location.es, p.location)
    }
    return Array.from(map.entries())
  }, [properties])

  const filtered = React.useMemo(() => {
    let list = properties.filter((p) => {
      if (type !== "all" && p.type !== type) return false
      if (zone && p.location.es !== zone) return false
      if (price !== "any") {
        if (p.priceOnRequest) return false
        const crc = priceInCrc(p)
        const { min, max } = PRICE_BUCKETS[price]
        if (crc < min || crc >= max) return false
      }
      if (beds > 0 && (p.bedrooms == null || p.bedrooms < beds)) return false
      return true
    })
    if (sort !== "recent") {
      list = [...list].sort((a, b) => {
        // Quote-on-request listings always go last when sorting by price.
        if (a.priceOnRequest !== b.priceOnRequest)
          return a.priceOnRequest ? 1 : -1
        const diff = priceInCrc(a) - priceInCrc(b)
        return sort === "priceAsc" ? diff : -diff
      })
    }
    return list
  }, [properties, type, zone, price, beds, sort])

  const typeFilters: { value: TypeFilter; label: string }[] = [
    { value: "all", label: t("properties.filterAll") },
    { value: "house", label: t("properties.filterHouse") },
    { value: "lot", label: t("properties.filterLot") },
    { value: "farm", label: t("properties.filterFarm") },
  ]

  const priceLabels: Record<Exclude<PriceFilter, "any">, string> = {
    lt50: pick({
      es: "Hasta ₡50M",
      en: "Up to ₡50M",
      fr: "Jusqu'à ₡50M",
      de: "Bis ₡50M",
    }),
    b50to100: "₡50M – ₡100M",
    gt100: pick({
      es: "Más de ₡100M",
      en: "Over ₡100M",
      fr: "Plus de ₡100M",
      de: "Über ₡100M",
    }),
  }

  const bedsLabel = (n: number) =>
    `${n}+ ${pick({ es: "hab.", en: "bd", fr: "ch.", de: "Zi." })}`

  const hasActiveFilters =
    type !== "all" || zone !== "" || price !== "any" || beds > 0

  const clearAll = () => {
    setType("all")
    setZone("")
    setPrice("any")
    setBeds(0)
  }

  const chips: { label: string; onRemove: () => void }[] = []
  if (type !== "all")
    chips.push({
      label: typeFilters.find((f) => f.value === type)?.label ?? type,
      onRemove: () => setType("all"),
    })
  if (zone) {
    const loc = zones.find(([key]) => key === zone)?.[1]
    chips.push({
      label: loc ? pick(loc) : zone,
      onRemove: () => setZone(""),
    })
  }
  if (price !== "any")
    chips.push({ label: priceLabels[price], onRemove: () => setPrice("any") })
  if (beds > 0)
    chips.push({ label: bedsLabel(beds), onRemove: () => setBeds(0) })

  const counterText = pick({
    es: `Mostrando ${filtered.length} de ${properties.length} propiedades`,
    en: `Showing ${filtered.length} of ${properties.length} properties`,
    fr: `${filtered.length} propriétés sur ${properties.length}`,
    de: `${filtered.length} von ${properties.length} Immobilien`,
  })

  const selectClass =
    "w-full cursor-pointer appearance-none rounded-full border border-border bg-brand-cream/60 px-5 py-2.5 pr-10 text-sm text-brand-green outline-none transition-colors duration-300 hover:border-brand-green/50 hover:bg-brand-cream focus:border-brand-gold sm:w-auto"

  return (
    <>
      <FadeIn>
        <div className="-mx-6 no-scrollbar flex gap-2 overflow-x-auto px-6 md:mx-0 md:flex-wrap md:px-0">
          {typeFilters.map((f) => {
            const count =
              f.value === "all"
                ? properties.length
                : properties.filter((p) => p.type === f.value).length
            const active = type === f.value
            // Don't offer a category with nothing in it.
            if (count === 0 && !active) return null
            return (
              <button
                key={f.value}
                type="button"
                onClick={() => setType(f.value)}
                aria-pressed={active}
                className={cn(
                  "inline-flex flex-none items-center gap-2.5 rounded-full border px-5 py-2.5 text-sm tracking-wide transition-all duration-300",
                  active
                    ? "border-brand-green bg-brand-green text-brand-cream shadow-[0_12px_24px_-14px_rgba(28,41,33,0.7)]"
                    : "border-border bg-brand-cream/60 text-brand-green hover:border-brand-green/50 hover:bg-brand-cream"
                )}
              >
                {f.label}
                <span
                  className={cn(
                    "rounded-full px-2 py-0.5 text-[11px] tabular-nums transition-colors duration-300",
                    active
                      ? "bg-brand-cream/20 text-brand-cream"
                      : "bg-brand-green/10 text-brand-green/80"
                  )}
                >
                  {count}
                </span>
              </button>
            )
          })}
        </div>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
          <SelectWrap>
            <select
              value={zone}
              onChange={(e) => setZone(e.target.value)}
              className={selectClass}
              aria-label={t("properties.location")}
            >
              <option value="">{t("search.allZones")}</option>
              {zones.map(([key, loc]) => (
                <option key={key} value={key}>
                  {pick(loc)}
                </option>
              ))}
            </select>
          </SelectWrap>
          <SelectWrap>
            <select
              value={price}
              onChange={(e) => setPrice(e.target.value as PriceFilter)}
              className={selectClass}
              aria-label={t("properties.price")}
            >
              <option value="any">{t("search.anyPrice")}</option>
              <option value="lt50">{priceLabels.lt50}</option>
              <option value="b50to100">{priceLabels.b50to100}</option>
              <option value="gt100">{priceLabels.gt100}</option>
            </select>
          </SelectWrap>
          <SelectWrap>
            <select
              value={beds}
              onChange={(e) => setBeds(Number(e.target.value) as BedsFilter)}
              className={selectClass}
              aria-label={t("properties.bedrooms")}
            >
              <option value={0}>{t("properties.bedrooms")}</option>
              {[1, 2, 3, 4].map((n) => (
                <option key={n} value={n}>
                  {bedsLabel(n)}
                </option>
              ))}
            </select>
          </SelectWrap>
          <div className="sm:ml-auto">
            <SelectWrap>
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value as Sort)}
                className={selectClass}
                aria-label="Sort"
              >
                <option value="recent">{t("search.sortRecent")}</option>
                <option value="priceAsc">{t("search.sortPriceAsc")}</option>
                <option value="priceDesc">{t("search.sortPriceDesc")}</option>
              </select>
            </SelectWrap>
          </div>
        </div>

        <div className="mt-6 flex flex-wrap items-center gap-2 border-t border-border pt-6">
          <p className="mr-2 text-sm text-muted-foreground">{counterText}</p>
          {chips.map((chip) => (
            <button
              key={chip.label}
              type="button"
              onClick={chip.onRemove}
              className="inline-flex items-center gap-1.5 rounded-full bg-brand-green/10 px-3 py-1 text-xs tracking-wide text-brand-green transition-colors hover:bg-brand-green/20"
            >
              {chip.label}
              <span aria-hidden="true">×</span>
            </button>
          ))}
          {hasActiveFilters && (
            <button
              type="button"
              onClick={clearAll}
              className="text-xs tracking-wide text-muted-foreground underline underline-offset-4 hover:text-brand-green"
            >
              {t("search.clearFilters")}
            </button>
          )}
        </div>
      </FadeIn>

      {/* Re-keyed on every filter change so the new result set animates in. */}
      <div
        key={`${type}|${zone}|${price}|${beds}|${sort}`}
        className="grid-enter mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3"
      >
        {filtered.map((p, i) => (
          <div
            key={p.slug}
            style={{ animationDelay: `${Math.min(i, 8) * 70}ms` }}
          >
            <PropertyCard property={p} priority={i < 3} />
          </div>
        ))}
      </div>

      {filtered.length === 0 && (
        <div className="mx-auto max-w-md rounded-3xl border border-dashed border-brand-green/30 px-8 py-16 text-center">
          <p className="font-serif text-2xl text-brand-green">
            {pick({
              es: "No encontramos propiedades con esos filtros.",
              en: "We couldn't find properties with those filters.",
              fr: "Aucune propriété ne correspond à ces filtres.",
              de: "Keine Immobilien mit diesen Filtern gefunden.",
            })}
          </p>
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
            {pick({
              es: "Escríbenos: muchas propiedades aún no están publicadas.",
              en: "Write to us: many properties aren't listed yet.",
              fr: "Écrivez-nous : de nombreuses propriétés ne sont pas encore publiées.",
              de: "Schreiben Sie uns: Viele Immobilien sind noch nicht veröffentlicht.",
            })}
          </p>
          <div className="mt-7 flex flex-col justify-center gap-3 sm:flex-row">
            <button
              type="button"
              onClick={clearAll}
              className="btn btn-outline-dark"
            >
              {t("search.clearFilters")}
            </button>
            <a
              href={whatsappLink(
                pick({
                  es: "Hola, busco una propiedad en La Fortuna y no la encontré en el sitio.",
                  en: "Hi, I'm looking for a property in La Fortuna and couldn't find it on the site.",
                  fr: "Bonjour, je cherche une propriété à La Fortuna et je ne l'ai pas trouvée sur le site.",
                  de: "Hallo, ich suche eine Immobilie in La Fortuna und habe sie auf der Website nicht gefunden.",
                })
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-green"
            >
              WhatsApp
            </a>
          </div>
        </div>
      )}
    </>
  )
}

function SelectWrap({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.6"
        className="pointer-events-none absolute top-1/2 right-3.5 h-3.5 w-3.5 -translate-y-1/2 text-muted-foreground"
        aria-hidden="true"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
      </svg>
    </div>
  )
}
