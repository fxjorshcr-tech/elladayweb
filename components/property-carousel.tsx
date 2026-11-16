"use client"

import * as React from "react"
import Link from "next/link"
import type { Property } from "@/lib/properties"
import { PropertyCard } from "@/components/property-card"
import { ArrowRight, ChevronLeft, ChevronRight } from "@/components/icons"
import { cn } from "@/lib/utils"

// Mouse travel (px) before a press is treated as a drag instead of a click.
const DRAG_THRESHOLD = 6

/**
 * Horizontal row of property cards.
 *
 * Phones and small tablets: the row bleeds to the screen edge with the next
 * card peeking in, and is swiped natively (scroll-snap).
 * Desktop: the row stays inside the page container showing whole cards, with
 * arrow buttons on both edges and click-and-drag for mouse users, who have no
 * other way to scroll a hidden-scrollbar row sideways.
 */
export function PropertyCarousel({
  properties,
  viewAllLabel,
  header,
}: {
  properties: Property[]
  viewAllLabel: string
  header: React.ReactNode
}) {
  const scroller = React.useRef<HTMLDivElement | null>(null)
  const [progress, setProgress] = React.useState(0)
  const [thumb, setThumb] = React.useState(1)
  const [atStart, setAtStart] = React.useState(true)
  const [atEnd, setAtEnd] = React.useState(false)
  const [dragging, setDragging] = React.useState(false)

  const drag = React.useRef({
    active: false,
    moved: false,
    startX: 0,
    startLeft: 0,
  })
  // Set when a drag ends so the click that follows doesn't open a listing.
  const suppressClick = React.useRef(false)

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

  // Left offsets the row can rest at: one per card, capped at the end.
  const stops = React.useCallback(() => {
    const el = scroller.current
    if (!el) return []
    const max = el.scrollWidth - el.clientWidth
    const origin = el.querySelector<HTMLElement>("[data-slide]")?.offsetLeft ?? 0
    return Array.from(el.querySelectorAll<HTMLElement>("[data-slide]")).map(
      (slide) => Math.min(slide.offsetLeft - origin, max)
    )
  }, [])

  const step = (dir: 1 | -1) => {
    const el = scroller.current
    if (!el) return
    const points = stops()
    const current = el.scrollLeft
    const target =
      dir === 1
        ? points.find((x) => x > current + 4)
        : [...points].reverse().find((x) => x < current - 4)
    if (target == null) return
    el.scrollTo({ left: target, behavior: "smooth" })
  }

  const onPointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (e.pointerType !== "mouse" || e.button !== 0) return
    const el = scroller.current
    if (!el) return
    drag.current = {
      active: true,
      moved: false,
      startX: e.clientX,
      startLeft: el.scrollLeft,
    }
  }

  const onPointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    const d = drag.current
    const el = scroller.current
    if (!d.active || !el) return
    const dx = e.clientX - d.startX
    if (!d.moved) {
      if (Math.abs(dx) < DRAG_THRESHOLD) return
      d.moved = true
      setDragging(true)
      el.setPointerCapture(e.pointerId)
    }
    el.scrollLeft = d.startLeft - dx
  }

  const endDrag = (e: React.PointerEvent<HTMLDivElement>) => {
    const d = drag.current
    const el = scroller.current
    if (!d.active || !el) return
    d.active = false
    if (!d.moved) return
    suppressClick.current = true
    // A click only follows when the press and release share a target; clear
    // the flag shortly after so a later, genuine click is never swallowed.
    window.setTimeout(() => {
      suppressClick.current = false
    }, 0)
    if (el.hasPointerCapture(e.pointerId)) el.releasePointerCapture(e.pointerId)

    // Settle on the nearest card, biased in the direction of the drag.
    const travelled = el.scrollLeft - d.startLeft
    const points = stops()
    const bias = Math.sign(travelled) * el.clientWidth * 0.08
    const aim = el.scrollLeft + bias
    const target = points.reduce(
      (best, x) => (Math.abs(x - aim) < Math.abs(best - aim) ? x : best),
      points[0] ?? 0
    )
    el.scrollTo({ left: target, behavior: "smooth" })
    setDragging(false)
  }

  const arrowClass =
    "absolute top-[calc(var(--slide-w)*0.625+0.5rem)] z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full border border-brand-brown/10 bg-brand-cream text-brand-brown shadow-[0_14px_34px_-14px_rgba(35,23,17,0.55)] transition-all duration-300 ease-out hover:bg-brand-brown hover:text-brand-cream md:flex"

  return (
    <div className="container-page">
      <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
        {header}
        <Link
          href="/properties"
          className="group hidden flex-none items-center gap-2.5 pb-2 text-sm tracking-wide text-brand-brown md:inline-flex"
        >
          <span className="link-draw">{viewAllLabel}</span>
          <ArrowRight className="h-4 w-4 transition-transform duration-500 ease-out group-hover:translate-x-1" />
        </Link>
      </div>

      {/* --slide-w is the width of one card, shared by the cards themselves
          and by the arrows (which sit at the vertical middle of the photo). */}
      <div className="@container relative mt-12 [--gap:1.5rem] [--slide-w:80cqw] sm:[--slide-w:44cqw] md:[--slide-w:calc((100cqw-var(--gap))/2)] lg:[--slide-w:calc((100cqw-var(--gap)*2)/3)]">
        <div
          ref={scroller}
          onScroll={measure}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onDragStart={(e) => e.preventDefault()}
          onClickCapture={(e) => {
            if (!suppressClick.current) return
            suppressClick.current = false
            e.preventDefault()
            e.stopPropagation()
          }}
          className={cn(
            "no-scrollbar -mx-6 flex gap-[var(--gap)] overflow-x-auto px-6 pt-2 pb-4 md:-mx-3 md:px-3",
            // Snapping and smooth scrolling fight a live drag, so both are
            // off while the mouse is steering.
            dragging
              ? "cursor-grabbing select-none"
              : "snap-x snap-mandatory scroll-px-6 scroll-smooth md:scroll-px-3 md:cursor-grab"
          )}
        >
          {properties.map((p, i) => (
            <div
              key={p.slug}
              data-slide
              className="w-[var(--slide-w)] flex-none snap-start"
            >
              <PropertyCard property={p} priority={i === 0} />
            </div>
          ))}
          <Link
            href="/properties"
            data-slide
            className="group flex w-[60cqw] flex-none snap-start flex-col items-center justify-center gap-5 self-stretch rounded-2xl border border-dashed border-brand-brown/30 px-8 text-center transition-colors duration-500 hover:border-brand-brown hover:bg-brand-brown sm:w-[var(--slide-w)]"
          >
            <span className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-brown text-brand-cream transition-colors duration-500 group-hover:bg-brand-gold">
              <ArrowRight className="h-5 w-5" />
            </span>
            <span className="font-serif text-2xl text-brand-brown transition-colors duration-500 group-hover:text-brand-cream">
              {viewAllLabel}
            </span>
          </Link>
        </div>

        <button
          type="button"
          aria-label="Previous"
          onClick={() => step(-1)}
          disabled={atStart}
          className={cn(
            arrowClass,
            "left-0 -translate-x-1/2",
            atStart && "pointer-events-none opacity-0"
          )}
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          type="button"
          aria-label="Next"
          onClick={() => step(1)}
          disabled={atEnd}
          className={cn(
            arrowClass,
            "right-0 translate-x-1/2",
            atEnd && "pointer-events-none opacity-0"
          )}
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>

      <div className="relative mt-8 h-px w-full bg-brand-brown/15">
        <div
          className="absolute top-[-1px] h-[3px] rounded-full bg-brand-gold transition-[left] duration-150 ease-out"
          style={{
            width: `${thumb * 100}%`,
            left: `${progress * (1 - thumb) * 100}%`,
          }}
        />
      </div>
    </div>
  )
}
