"use client"

import * as React from "react"

// Animates the first number found in `value` from 0 when the element
// scrolls into view, keeping any prefix/suffix ("+1M", "7–10%", "2.5 h").
export function CountUp({
  value,
  className,
  duration = 1400,
}: {
  value: string
  className?: string
  duration?: number
}) {
  const ref = React.useRef<HTMLSpanElement | null>(null)
  const match = value.match(/(\d+(?:[.,]\d+)?)/)
  const [display, setDisplay] = React.useState(match ? "0" : value)
  const [done, setDone] = React.useState(!match)

  React.useEffect(() => {
    const node = ref.current
    if (!node || !match) return

    const target = parseFloat(match[1].replace(",", "."))
    const decimals = match[1].includes(".") || match[1].includes(",") ? 1 : 0
    const prefix = value.slice(0, match.index)
    const suffix = value.slice((match.index ?? 0) + match[1].length)

    let raf = 0
    const obs = new IntersectionObserver(
      (entries) => {
        if (!entries.some((e) => e.isIntersecting)) return
        obs.disconnect()
        const start = performance.now()
        const tick = (now: number) => {
          const t = Math.min((now - start) / duration, 1)
          const eased = 1 - Math.pow(1 - t, 3)
          const current = (target * eased).toFixed(decimals)
          setDisplay(`${prefix}${current}${suffix}`)
          if (t < 1) {
            raf = requestAnimationFrame(tick)
          } else {
            setDisplay(value)
            setDone(true)
          }
        }
        raf = requestAnimationFrame(tick)
      },
      { threshold: 0.4 }
    )
    obs.observe(node)
    return () => {
      obs.disconnect()
      cancelAnimationFrame(raf)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [value, duration])

  return (
    <span ref={ref} className={className}>
      {done ? value : display}
    </span>
  )
}
