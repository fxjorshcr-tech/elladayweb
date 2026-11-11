"use client"

import * as React from "react"
import { createPortal } from "react-dom"
import Image from "next/image"
import { blurDataURL } from "@/lib/blur"
import { useLanguage } from "@/lib/i18n/provider"
import { CameraIcon, ChevronLeft, ChevronRight } from "@/components/icons"
import { cn } from "@/lib/utils"

type GalleryImage = { src: string; alt: string }

export function PropertyGallery({ images }: { images: GalleryImage[] }) {
  const { pick } = useLanguage()
  const [open, setOpen] = React.useState(false)
  const [active, setActive] = React.useState(0)
  // Slide currently centred in the phone carousel.
  const [slide, setSlide] = React.useState(0)
  const thumbs = React.useRef<HTMLDivElement | null>(null)

  const openAt = (i: number) => {
    setActive(i)
    setOpen(true)
  }

  const next = React.useCallback(
    () => setActive((i) => (i + 1) % images.length),
    [images.length]
  )
  const prev = React.useCallback(
    () => setActive((i) => (i - 1 + images.length) % images.length),
    [images.length]
  )

  const touchStartX = React.useRef<number | null>(null)
  const onTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX
  }
  const onTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current == null) return
    const dx = e.changedTouches[0].clientX - touchStartX.current
    if (Math.abs(dx) > 40) {
      if (dx < 0) next()
      else prev()
    }
    touchStartX.current = null
  }

  React.useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false)
      if (e.key === "ArrowRight") next()
      if (e.key === "ArrowLeft") prev()
    }
    window.addEventListener("keydown", onKey)
    document.body.style.overflow = "hidden"
    return () => {
      window.removeEventListener("keydown", onKey)
      document.body.style.overflow = ""
    }
  }, [open, next, prev])

  // Keep the active thumbnail in view inside the lightbox strip.
  React.useEffect(() => {
    if (!open) return
    const strip = thumbs.current
    const el = strip?.firstElementChild?.children[active] as
      | HTMLElement
      | undefined
    if (!strip || !el) return
    strip.scrollTo({
      left: el.offsetLeft - strip.clientWidth / 2 + el.clientWidth / 2,
      behavior: "smooth",
    })
  }, [active, open])

  const allPhotosLabel = pick({
    es: `Ver las ${images.length} fotos`,
    en: `View all ${images.length} photos`,
    fr: `Voir les ${images.length} photos`,
    de: `Alle ${images.length} Fotos ansehen`,
  })

  const tiles = images.slice(1, 5)

  return (
    <>
      {/* Phones: full-bleed swipeable carousel */}
      <div className="relative -mx-6 md:hidden">
        <div
          className="no-scrollbar flex snap-x snap-mandatory overflow-x-auto"
          onScroll={(e) => {
            const el = e.currentTarget
            setSlide(Math.round(el.scrollLeft / el.clientWidth))
          }}
        >
          {images.map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => openAt(i)}
              className="relative aspect-[4/3] w-full flex-none snap-center bg-muted"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                priority={i === 0}
                loading={i === 0 ? undefined : "lazy"}
                placeholder="blur"
                blurDataURL={blurDataURL}
                sizes="100vw"
                className="object-cover"
              />
            </button>
          ))}
        </div>
        <div className="pointer-events-none absolute right-4 bottom-4 inline-flex items-center gap-1.5 rounded-full bg-brand-ink/70 px-3 py-1.5 text-xs tracking-wide text-white backdrop-blur">
          <CameraIcon className="h-3.5 w-3.5" />
          {Math.min(slide + 1, images.length)} / {images.length}
        </div>
      </div>

      {/* Tablet and up: editorial mosaic */}
      <div className="relative hidden md:block">
        <div
          className={cn(
            "grid h-[58vh] max-h-[640px] min-h-[420px] gap-3 overflow-hidden rounded-3xl",
            tiles.length >= 4
              ? "grid-cols-4 grid-rows-2"
              : tiles.length >= 2
                ? "grid-cols-3 grid-rows-2"
                : tiles.length === 1
                  ? "grid-cols-2"
                  : "grid-cols-1"
          )}
        >
          <button
            type="button"
            onClick={() => openAt(0)}
            className={cn(
              "group relative overflow-hidden bg-muted",
              tiles.length >= 2 && "col-span-2 row-span-2"
            )}
          >
            <Image
              src={images[0].src}
              alt={images[0].alt}
              fill
              priority
              placeholder="blur"
              blurDataURL={blurDataURL}
              sizes="(min-width: 768px) 50vw, 100vw"
              className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
            />
          </button>
          {(tiles.length >= 4
            ? tiles
            : tiles.slice(0, tiles.length >= 2 ? 2 : 1)
          ).map((img, i) => (
            <button
              key={img.src}
              type="button"
              onClick={() => openAt(i + 1)}
              className="group relative overflow-hidden bg-muted"
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                placeholder="blur"
                blurDataURL={blurDataURL}
                sizes="(min-width: 768px) 25vw, 50vw"
                className="object-cover transition-transform duration-[1400ms] ease-out group-hover:scale-105"
              />
              <span className="absolute inset-0 bg-brand-ink/0 transition-colors duration-500 group-hover:bg-brand-ink/15" />
            </button>
          ))}
        </div>
        {images.length > 1 && (
          <button
            type="button"
            onClick={() => openAt(0)}
            className="absolute right-5 bottom-5 inline-flex items-center gap-2 rounded-full bg-brand-cream/95 px-5 py-2.5 text-sm tracking-wide text-brand-green-dark shadow-lg backdrop-blur transition-all duration-300 hover:bg-white hover:shadow-xl"
          >
            <CameraIcon />
            {allPhotosLabel}
          </button>
        )}
      </div>

      {/* Portalled to <body> so no animated ancestor can trap the overlay. */}
      {open &&
        createPortal(
          <div
            className="fixed inset-0 z-50 flex animate-in flex-col bg-brand-ink/[0.97] duration-300 fade-in"
            role="dialog"
            aria-modal="true"
            onClick={() => setOpen(false)}
          >
            <div className="flex items-center justify-between px-5 py-4 text-white md:px-8">
              <p className="text-xs tracking-[0.2em] text-white/70 uppercase tabular-nums">
                {active + 1} / {images.length}
              </p>
              <button
                type="button"
                aria-label="Close"
                onClick={() => setOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-white/20"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  className="h-5 w-5"
                >
                  <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
                </svg>
              </button>
            </div>

            <div
              className="relative min-h-0 flex-1"
              onTouchStart={onTouchStart}
              onTouchEnd={onTouchEnd}
            >
              <div
                key={active}
                className="absolute inset-x-4 inset-y-0 animate-in duration-500 fade-in zoom-in-[0.985] md:inset-x-24"
                onClick={(e) => e.stopPropagation()}
              >
                <Image
                  src={images[active].src}
                  alt={images[active].alt}
                  fill
                  sizes="100vw"
                  className="object-contain"
                  priority
                />
              </div>

              <button
                type="button"
                aria-label="Previous"
                onClick={(e) => {
                  e.stopPropagation()
                  prev()
                }}
                className="absolute top-1/2 left-3 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-gold md:left-8 md:flex"
              >
                <ChevronLeft className="h-6 w-6" />
              </button>
              <button
                type="button"
                aria-label="Next"
                onClick={(e) => {
                  e.stopPropagation()
                  next()
                }}
                className="absolute top-1/2 right-3 z-10 hidden h-12 w-12 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition-colors hover:bg-brand-gold md:right-8 md:flex"
              >
                <ChevronRight className="h-6 w-6" />
              </button>
            </div>

            <div
              ref={thumbs}
              className="relative no-scrollbar flex-none overflow-x-auto px-5 py-4 md:px-8"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="mx-auto flex w-max gap-2">
                {images.map((img, i) => (
                  <button
                    key={img.src}
                    type="button"
                    aria-label={`${i + 1}`}
                    onClick={() => setActive(i)}
                    className={cn(
                      "relative h-14 w-20 flex-none overflow-hidden rounded-lg transition-all duration-300 md:h-16 md:w-24",
                      i === active
                        ? "opacity-100 ring-2 ring-brand-gold"
                        : "opacity-45 hover:opacity-80"
                    )}
                  >
                    <Image
                      src={img.src}
                      alt=""
                      fill
                      sizes="96px"
                      loading="lazy"
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>,
          document.body
        )}
    </>
  )
}
