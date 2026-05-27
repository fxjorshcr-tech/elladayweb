"use client"

import * as React from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

type GalleryImage = { src: string; alt: string }

export function PropertyGallery({ images }: { images: GalleryImage[] }) {
  const [open, setOpen] = React.useState(false)
  const [active, setActive] = React.useState(0)

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

  return (
    <>
      <div className="grid grid-cols-4 grid-rows-2 gap-2 md:gap-3">
        <button
          type="button"
          onClick={() => openAt(0)}
          className="relative col-span-4 row-span-2 aspect-[16/10] overflow-hidden rounded-sm bg-muted md:col-span-2"
        >
          <Image
            src={images[0].src}
            alt={images[0].alt}
            fill
            priority
            sizes="(min-width: 768px) 50vw, 100vw"
            className="object-cover transition-transform duration-700 hover:scale-105"
          />
        </button>
        {images.slice(1, 5).map((img, i) => (
          <button
            key={img.src}
            type="button"
            onClick={() => openAt(i + 1)}
            className={cn(
              "relative col-span-2 aspect-[4/3] overflow-hidden rounded-sm bg-muted md:col-span-1",
              i === 3 && "relative"
            )}
          >
            <Image
              src={img.src}
              alt={img.alt}
              fill
              sizes="(min-width: 768px) 25vw, 50vw"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            {i === 3 && images.length > 5 && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/45 font-serif text-2xl text-white">
                +{images.length - 5}
              </div>
            )}
          </button>
        ))}
      </div>

      {open && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          role="dialog"
          aria-modal="true"
          onClick={() => setOpen(false)}
        >
          <button
            type="button"
            aria-label="Close"
            onClick={() => setOpen(false)}
            className="absolute top-5 right-5 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20"
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

          <button
            type="button"
            aria-label="Previous"
            onClick={(e) => {
              e.stopPropagation()
              prev()
            }}
            className="absolute left-3 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 md:left-8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 6l-6 6 6 6" />
            </svg>
          </button>

          <button
            type="button"
            aria-label="Next"
            onClick={(e) => {
              e.stopPropagation()
              next()
            }}
            className="absolute right-3 z-10 flex h-12 w-12 items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 md:right-8"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-6 w-6"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M9 6l6 6-6 6" />
            </svg>
          </button>

          <div
            className="relative h-[80vh] w-full max-w-6xl"
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

          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xs tracking-[0.18em] text-white/70 uppercase">
            {active + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  )
}
