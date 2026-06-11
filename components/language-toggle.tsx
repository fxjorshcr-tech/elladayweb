"use client"

import { useLanguage } from "@/lib/i18n/provider"
import { LANGUAGES } from "@/lib/i18n/dictionary"
import { cn } from "@/lib/utils"

export function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang } = useLanguage()
  return (
    <div
      className={cn(
        "inline-flex items-center gap-0 rounded-full border border-border bg-background/70 p-0.5 text-[10px] font-medium tracking-wide backdrop-blur",
        className
      )}
    >
      {LANGUAGES.map((l) => (
        <button
          key={l.code}
          type="button"
          onClick={() => setLang(l.code)}
          className={cn(
            "rounded-full px-2 py-1 transition-colors",
            lang === l.code
              ? "bg-brand-green text-brand-cream"
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
