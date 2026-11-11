"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export type RevealVariant = "up" | "left" | "right" | "scale" | "clip" | "fade"

type FadeInProps = {
  children: React.ReactNode
  className?: string
  delay?: number
  variant?: RevealVariant
  as?: keyof React.JSX.IntrinsicElements
}

/**
 * Reveals its children the first time they scroll into view. `variant`
 * picks the entrance (see the `.reveal` rules in globals.css); "clip" is
 * meant for image frames and wipes the picture in from the top.
 */
export function FadeIn({
  children,
  className,
  delay = 0,
  variant = "up",
  as: Tag = "div",
}: FadeInProps) {
  const ref = React.useRef<HTMLElement | null>(null)
  const [visible, setVisible] = React.useState(false)

  React.useEffect(() => {
    const node = ref.current
    if (!node) return
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setVisible(true)
            obs.unobserve(e.target)
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -48px 0px" }
    )
    obs.observe(node)
    return () => obs.disconnect()
  }, [])

  const Component = Tag as React.ElementType
  return (
    <Component
      ref={ref}
      data-variant={variant}
      data-visible={visible}
      className={cn("reveal", className)}
      style={{ transitionDelay: visible ? `${delay}ms` : undefined }}
    >
      {children}
    </Component>
  )
}
