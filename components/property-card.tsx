"use client"

import * as React from "react"
import Link from "next/link"
import Image from "next/image"
import { useLanguage } from "@/lib/i18n/provider"
import { formatApproxUsd, formatPrice, type Property } from "@/lib/properties"
import { blurDataURL } from "@/lib/blur"
import {
  AreaIcon,
  ArrowUpRight,
  BathIcon,
  BedIcon,
  CameraIcon,
  PinIcon,
} from "@/components/icons"
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
  // The second photo is only requested once the visitor shows interest, then
  // cross-fades in while hovering.
  const [peek, setPeek] = React.useState(false)
  const [peekLoaded, setPeekLoaded] = React.useState(false)

  const sizeLabel =
    property.lotSize == null
      ? null
      : property.lotUnit === "ha"
        ? `${property.lotSize} ha`
        : `${property.lotSize.toLocaleString("de-DE")} m²`

  const second = property.images[1]
  const approxUsd = property.priceOnRequest
    ? null
    : formatApproxUsd(property.price, property.currency)

  return (
    <Link
      href={`/properties/${property.slug}`}
      onMouseEnter={() => setPeek(true)}
      onFocus={() => setPeek(true)}
      className={cn("group block", className)}
    >
      <div className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted shadow-[0_1px_2px_rgba(28,41,33,0.08)] transition-[box-shadow,transform] duration-500 ease-out group-hover:-translate-y-1.5 group-hover:shadow-[0_30px_60px_-30px_rgba(28,41,33,0.55)]">
        <Image
          src={property.images[0].src}
          alt={property.images[0].alt}
          fill
          priority={priority}
          placeholder="blur"
          blurDataURL={blurDataURL}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className={cn(
            "object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-[1.07]",
            property.sold && "grayscale-[35%]"
          )}
        />
        {second && peek && (
          <Image
            src={second.src}
            alt={second.alt}
            fill
            sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
            onLoad={() => setPeekLoaded(true)}
            className={cn(
              "hidden object-cover opacity-0 transition-[opacity,transform] duration-700 ease-out group-hover:scale-[1.07] md:block",
              peekLoaded && "group-hover:opacity-100",
              property.sold && "grayscale-[35%]"
            )}
          />
        )}

        <div className="absolute inset-x-0 bottom-0 h-3/5 bg-gradient-to-t from-brand-ink/85 via-brand-ink/25 to-transparent" />
        {property.sold && <div className="absolute inset-0 bg-brand-ink/25" />}

        <div className="absolute top-4 left-4 flex items-center gap-1.5">
          <span className="rounded-full bg-brand-cream/95 px-3 py-1 text-[10px] font-medium tracking-[0.18em] text-brand-green-dark uppercase backdrop-blur">
            {pick(typeLabels[property.type])}
          </span>
          {property.images.length > 1 && (
            <span className="inline-flex items-center gap-1 rounded-full bg-brand-ink/55 px-2.5 py-1 text-[10px] font-medium tracking-wide text-white backdrop-blur">
              <CameraIcon className="h-3 w-3" />
              {property.images.length}
            </span>
          )}
        </div>

        {property.sold ? (
          <div className="absolute top-4 right-4 rotate-3 rounded-md bg-red-600 px-4 py-1.5 text-sm font-bold tracking-[0.2em] text-white uppercase shadow-lg ring-1 ring-white/25">
            {t("common.sold")}
          </div>
        ) : property.previousPrice != null ? (
          <div className="absolute top-4 right-4 rounded-full bg-brand-gold px-3 py-1 text-[10px] font-semibold tracking-[0.18em] text-white uppercase shadow-md">
            {t("common.reducedBadge")}
          </div>
        ) : property.isNew ? (
          <div className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full bg-brand-green px-3 py-1 text-[10px] font-semibold tracking-[0.18em] text-brand-cream uppercase shadow-md">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-gold" />
            {t("common.newBadge")}
          </div>
        ) : null}

        <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5 text-white">
          <div className="min-w-0">
            <p className="font-serif text-2xl leading-tight">
              {property.priceOnRequest
                ? t("common.priceOnRequest")
                : formatPrice(property.price, lang, property.currency)}
            </p>
            {(approxUsd ||
              (!property.priceOnRequest && property.negotiable)) && (
              <p className="mt-1 text-xs tracking-wide text-white/80">
                {approxUsd && <>{approxUsd} USD</>}
                {approxUsd && property.negotiable && " · "}
                {!property.priceOnRequest &&
                  property.negotiable &&
                  t("common.negotiable")}
              </p>
            )}
          </div>
          <span
            aria-hidden="true"
            className="flex h-11 w-11 flex-none items-center justify-center rounded-full bg-white/15 text-white ring-1 ring-white/30 backdrop-blur transition-all duration-500 ease-out group-hover:bg-brand-gold group-hover:ring-brand-gold md:translate-y-3 md:opacity-0 md:group-hover:translate-y-0 md:group-hover:opacity-100"
          >
            <ArrowUpRight className="h-4 w-4" />
          </span>
        </div>
      </div>

      <div className="mt-5">
        <p className="flex items-center gap-1.5 text-[11px] tracking-[0.16em] text-brand-gold-dark uppercase">
          <PinIcon className="h-3.5 w-3.5 flex-none" />
          <span className="truncate">{pick(property.location)}</span>
        </p>
        <h3 className="mt-2.5 font-serif text-[1.35rem] leading-snug text-brand-green transition-colors duration-300 group-hover:text-brand-green-dark">
          <span className="link-draw">{pick(property.title)}</span>
        </h3>
        {(property.bedrooms != null ||
          property.bathrooms != null ||
          sizeLabel) && (
          <div className="mt-3.5 flex flex-wrap items-center gap-x-4 gap-y-1.5 text-sm text-brand-green/80">
            {property.bedrooms != null && (
              <span className="inline-flex items-center gap-1.5">
                <BedIcon className="text-brand-gold-dark" />
                {property.bedrooms}{" "}
                {pick({ es: "hab", en: "bd", fr: "ch", de: "Zi" })}
              </span>
            )}
            {property.bathrooms != null && (
              <span className="inline-flex items-center gap-1.5">
                <BathIcon className="text-brand-gold-dark" />
                {property.bathrooms}{" "}
                {pick({ es: "baños", en: "ba", fr: "sdb", de: "Bd" })}
              </span>
            )}
            {sizeLabel && (
              <span className="inline-flex items-center gap-1.5">
                <AreaIcon className="text-brand-gold-dark" />
                {sizeLabel}
              </span>
            )}
          </div>
        )}
        <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-muted-foreground">
          {pick(property.shortDescription)}
        </p>
      </div>
    </Link>
  )
}
