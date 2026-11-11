import { cn } from "@/lib/utils"

/**
 * Endless horizontal ticker. The list is rendered twice and the track
 * slides by exactly half its width, so the loop is seamless.
 */
export function Marquee({
  items,
  className,
  duration = 45,
}: {
  items: string[]
  className?: string
  duration?: number
}) {
  if (items.length === 0) return null
  // Short lists are repeated so the track always overflows the viewport.
  const repeat = Math.max(1, Math.ceil(12 / items.length))
  const row = Array.from({ length: repeat }, () => items).flat()

  return (
    <div className={cn("marquee overflow-hidden", className)}>
      <div
        className="marquee-track"
        style={{ "--marquee-duration": `${duration}s` } as React.CSSProperties}
      >
        {[0, 1].map((copy) => (
          <ul
            key={copy}
            aria-hidden={copy === 1}
            className="flex flex-none items-center"
          >
            {row.map((item, i) => (
              <li key={`${item}-${i}`} className="flex items-center">
                <span className="px-7 font-serif text-xl whitespace-nowrap italic md:px-10 md:text-2xl">
                  {item}
                </span>
                <span className="text-brand-gold" aria-hidden="true">
                  ✦
                </span>
              </li>
            ))}
          </ul>
        ))}
      </div>
    </div>
  )
}
