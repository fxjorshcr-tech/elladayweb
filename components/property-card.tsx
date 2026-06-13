"use client"

import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n/provider"
import { formatPrice, type Property } from "@/lib/properties"
import { cn } from "@/lib/utils"

const typeLabels = {
  house: { es: "Casa", en: "House", fr: "Maison", de: "Haus" },
  lot: { es: "Lote", en: "Lot", fr: "Terrain", de: "Grundstück" },
  farm: { es: "Finca", en: "Farm", fr: "Finca", de: "Hof" },
} as const

export function PropertyCard({
  property,
  priority = false,
  className,
}: {
  property: Property
  priority?: boolean
  className?: string
}) {
  const { lang, t, pick } = useLanguage()
  const sizeLabel =
    property.lotUnit === "ha"
      ? `${property.lotSize} ${pick({ es: "ha", en: "ha", fr: "ha", de: "ha" })}`
      : `${property.lotSize.toLocaleString()} m²`

  return (
    <Link
      href={`/properties/${property.slug}`}
      className={cn("group block", className)}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-muted">
        <Image
          src={property.images[0].src}
          alt={property.images[0].alt}
          fill
          priority={priority}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 rounded-full bg-background/90 px-3 py-1 text-[10px] tracking-[0.18em] text-brand-green uppercase backdrop-blur">
          {pick(typeLabels[property.type])}
        </div>
        <div className="absolute right-0 bottom-0 left-0 bg-gradient-to-t from-black/50 to-transparent p-5 text-white">
          <p className="font-serif text-xl leading-tight">
            {formatPrice(property.price, lang, property.currency)}
            {property.negotiable && (
              <span className="ml-2 text-xs tracking-wide opacity-80">
                · {t("common.negotiable")}
              </span>
            )}
          </p>
        </div>
      </div>

      <div className="mt-5 space-y-2">
        <p className="text-xs tracking-[0.16em] text-brand-gold uppercase">
          {pick(property.location)}
        </p>
        <h3 className="font-serif text-2xl text-brand-green transition-colors group-hover:text-brand-gold">
          {pick(property.title)}
        </h3>
        <div className="flex flex-wrap gap-x-5 gap-y-1 pt-1 text-sm text-muted-foreground">
          {property.bedrooms != null && (
            <span>
              {property.bedrooms}{" "}
              {pick({ es: "hab", en: "bd", fr: "ch", de: "Zi" })}
            </span>
          )}
          {property.bathrooms != null && (
            <span>
              {property.bathrooms}{" "}
              {pick({ es: "baños", en: "ba", fr: "sdb", de: "Bd" })}
            </span>
          )}
          <span>{sizeLabel}</span>
        </div>
        <p className="pt-2 text-sm leading-relaxed text-muted-foreground">
          {pick(property.shortDescription)}
        </p>
        <p className="pt-3 text-sm tracking-wide text-brand-green underline-offset-4 group-hover:underline">
          {t("properties.viewDetails")} →
        </p>
      </div>
    </Link>
  )
}
