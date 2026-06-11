"use client"

import * as React from "react"
import { useLanguage } from "@/lib/i18n/provider"
import { properties, type PropertyType } from "@/lib/properties"
import { PropertyCard } from "@/components/property-card"
import { FadeIn } from "@/components/fade-in"
import { cn } from "@/lib/utils"

type Filter = "all" | PropertyType

export default function PropertiesPage() {
  const { t, pick } = useLanguage()
  const [filter, setFilter] = React.useState<Filter>("all")

  const filtered = React.useMemo(
    () => (filter === "all" ? properties : properties.filter((p) => p.type === filter)),
    [filter]
  )

  const filters: { value: Filter; label: string }[] = [
    { value: "all", label: t("properties.filterAll") },
    { value: "house", label: t("properties.filterHouse") },
    { value: "lot", label: t("properties.filterLot") },
    { value: "farm", label: t("properties.filterFarm") },
  ]

  return (
    <>
      <section className="container-page py-20 md:py-28">
        <FadeIn>
          <p className="text-xs tracking-[0.22em] text-brand-gold uppercase">
            {t("properties.filterAll")} · La Fortuna
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-tight text-balance text-brand-green md:text-6xl">
            {t("properties.title")}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {t("properties.subtitle")}
          </p>
        </FadeIn>

        <FadeIn delay={120}>
          <div className="mt-12 flex flex-wrap gap-2 border-b border-border pb-1">
            {filters.map((f) => (
              <button
                key={f.value}
                type="button"
                onClick={() => setFilter(f.value)}
                className={cn(
                  "relative px-4 py-3 text-sm tracking-wide transition-colors",
                  filter === f.value
                    ? "text-brand-green"
                    : "text-muted-foreground hover:text-brand-green"
                )}
              >
                {f.label}
                {filter === f.value && (
                  <span className="absolute -bottom-px left-0 h-px w-full bg-brand-gold" />
                )}
              </button>
            ))}
          </div>
        </FadeIn>

        <div className="mt-12 grid gap-12 md:grid-cols-2 md:gap-10 lg:grid-cols-3">
          {filtered.map((p, i) => (
            <FadeIn key={p.slug} delay={i * 100}>
              <PropertyCard property={p} priority={i === 0} />
            </FadeIn>
          ))}
        </div>

        {filtered.length === 0 && (
          <p className="py-20 text-center text-muted-foreground">
            {pick({
              es: "Pronto agregaremos más propiedades en esta categoría.",
              en: "We'll add more properties in this category soon.",
              fr: "D'autres propriétés arriveront bientôt dans cette catégorie.",
              de: "Wir fügen bald weitere Immobilien in dieser Kategorie hinzu.",
            })}
          </p>
        )}
      </section>
    </>
  )
}
