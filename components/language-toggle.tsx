"use client"

import { useLanguage } from "@/lib/i18n/provider"
import { LANGUAGES } from "@/lib/i18n/dictionary"
import { cn } from "@/lib/utils"

export function LanguageToggle({
  className,
  tone = "dark",
}: {
  className?: string
  // "light" is for use over dark imagery (transparent navbar, mobile menu).
  tone?: "dark" | "light"
}) {
  const { lang, setLang } = useLanguage()
  return (
    <div
      className={cn(
        "inline-flex items-center gap-0 rounded-full border p-0.5 text-[10px] font-medium tracking-wide backdrop-blur transition-colors duration-500",
        tone === "light"
          ? "border-white/25 bg-white/10"
          : "border-border bg-background/70",
        className
      )}
    >
      {LANGUAGES.map((l) => (
        <button
          key={l.code}
          type="button"
          onClick={() => setLang(l.code)}
          className={cn(
            "rounded-full px-2 py-1 transition-colors duration-300",
            lang === l.code
              ? tone === "light"
                ? "bg-white text-brand-green-dark"
                : "bg-brand-green text-brand-cream"
              : tone === "light"
                ? "text-white/75 hover:text-white"
                : "text-brand-green/70 hover:text-brand-green"
          )}
          aria-pressed={lang === l.code}
        >
          {l.label}
        </button>
      ))}
    </div>
  )
}
