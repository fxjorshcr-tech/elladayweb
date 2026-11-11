"use client"

import * as React from "react"
import Link from "next/link"
import type { Property } from "@/lib/properties"
import { PropertyCard } from "@/components/property-card"
import { ArrowRight, ChevronLeft, ChevronRight } from "@/components/icons"
import { cn } from "@/lib/utils"

/**
 * Horizontal, swipeable row of property cards with arrow controls and a
 * progress rail. Native scroll-snap does the heavy lifting, so touch,
 * trackpad and keyboard all work without extra code.
 */
export function PropertyCarousel({
  properties,
  viewAllLabel,
  header,
}: {
  properties: Property[]
  viewAllLabel: string
  // Rendered to the left of the arrow controls.
  header: React.ReactNode
}) {
  const scroller = React.useRef<HTMLDivElement | null>(null)
  const [progress, setProgress] = React.useState(0)
  const [thumb, setThumb] = React.useState(1)
  const [atStart, setAtStart] = React.useState(true)
  const [atEnd, setAtEnd] = React.useState(false)

  const measure = React.useCallback(() => {
    const el = scroller.current
    if (!el) return
    const max = el.scrollWidth - el.clientWidth
    setProgress(max > 0 ? el.scrollLeft / max : 0)
    setThumb(el.scrollWidth > 0 ? el.clientWidth / el.scrollWidth : 1)
    setAtStart(el.scrollLeft <= 4)
    setAtEnd(el.scrollLeft >= max - 4)
  }, [])

  React.useEffect(() => {
    measure()
    window.addEventListener("resize", measure)
    return () => window.removeEventListener("resize", measure)
  }, [measure, properties.length])

  const step = (dir: 1 | -1) => {
    const el = scroller.current
    if (!el) return
    const card = el.querySelector<HTMLElement>("[data-card]")
    const amount = card ? card.offsetWidth + 24 : el.clientWidth * 0.8
    el.scrollBy({ left: dir * amount, behavior: "smooth" })
  }

  const arrowClass =
    "flex h-12 w-12 items-center justify-center rounded-full border border-brand-green/25 text-brand-green transition-all duration-300 hover:border-brand-green hover:bg-brand-green hover:text-brand-cream disabled:pointer-events-none disabled:opacity-30"

  return (
    <div>
      <div className="container-page flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        {header}
        <div className="hidden items-center gap-2 md:flex">
          <button
            type="button"
            aria-label="Previous"
            onClick={() => step(-1)}
            disabled={atStart}
            className={arrowClass}
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            type="button"
            aria-label="Next"
            onClick={() => step(1)}
            disabled={atEnd}
            className={arrowClass}
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div
        ref={scroller}
        onScroll={measure}
        className="mt-12 no-scrollbar flex snap-x snap-mandatory scroll-px-[var(--gutter)] gap-6 overflow-x-auto scroll-smooth px-[var(--gutter)] pt-2 pb-4 [--gutter:1.5rem] md:[--gutter:2.5rem] xl:[--gutter:max(2.5rem,calc((100vw-80rem)/2+2.5rem))]"
      >
        {properties.map((p, i) => (
          <div
            key={p.slug}
            data-card
            className="w-[80vw] flex-none snap-start sm:w-[44vw] lg:w-[30vw] xl:w-[24.5rem]"
          >
            <PropertyCard property={p} priority={i === 0} />
          </div>
        ))}
        <Link
          href="/properties"
          className="group flex w-[60vw] flex-none snap-start flex-col items-center justify-center gap-5 self-stretch rounded-2xl border border-dashed border-brand-green/30 px-8 text-center transition-colors duration-500 hover:border-brand-green hover:bg-brand-green sm:w-[30vw] xl:w-[20rem]"
          style={{ aspectRatio: "auto" }}
        >
          <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-green text-brand-cream transition-colors duration-500 group-hover:bg-brand-gold">
            <ArrowRight className="h-5 w-5" />
          </span>
          <span className="font-serif text-2xl text-brand-green transition-colors duration-500 group-hover:text-brand-cream">
            {viewAllLabel}
          </span>
        </Link>
      </div>

      <div className="container-page mt-8">
        <div className="relative h-px w-full bg-brand-green/15">
          <div
            className={cn(
              "absolute top-[-1px] h-[3px] rounded-full bg-brand-gold transition-[left] duration-150 ease-out"
            )}
            style={{
              width: `${thumb * 100}%`,
              left: `${progress * (1 - thumb) * 100}%`,
            }}
          />
        </div>
      </div>
    </div>
  )
}
