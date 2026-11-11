"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

/**
 * Moves its child slightly slower/faster than the page scroll. `speed` is
 * the fraction of the viewport-relative offset applied (0.1–0.2 reads as
 * depth without feeling gimmicky). Skipped on small screens and when the
 * visitor prefers reduced motion.
 */
export function Parallax({
  children,
  className,
  speed = 0.12,
}: {
  children: React.ReactNode
  className?: string
  speed?: number
}) {
  const outer = React.useRef<HTMLDivElement | null>(null)
  const inner = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    const el = outer.current
    const target = inner.current
    if (!el || !target) return
    const enabled =
      window.matchMedia("(min-width: 768px)").matches &&
      !window.matchMedia("(prefers-reduced-motion: reduce)").matches
    if (!enabled) return

    let raf = 0
    const update = () => {
      raf = 0
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      if (rect.bottom < -200 || rect.top > vh + 200) return
      const centerOffset = rect.top + rect.height / 2 - vh / 2
      target.style.transform = `translate3d(0, ${(-centerOffset * speed).toFixed(1)}px, 0)`
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    window.addEventListener("resize", onScroll)
    return () => {
      window.removeEventListener("scroll", onScroll)
      window.removeEventListener("resize", onScroll)
      cancelAnimationFrame(raf)
    }
  }, [speed])

  return (
    <div ref={outer} className={cn(className)}>
      <div ref={inner} className="h-full w-full will-change-transform">
        {children}
      </div>
    </div>
  )
}
