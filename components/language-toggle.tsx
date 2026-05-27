"use client"

import { useLanguage } from "@/lib/i18n/provider"
import { cn } from "@/lib/utils"

export function LanguageToggle({ className }: { className?: string }) {
  const { lang, setLang } = useLanguage()
  return (
    <div
      className={cn(
        "inline-flex items-center gap-0 rounded-full border border-border bg-background p-0.5 text-xs font-medium tracking-wide",
        className
      )}
    >
      <button
        type="button"
        onClick={() => setLang("es")}
        className={cn(
          "rounded-full px-2.5 py-1 transition-colors",
          lang === "es"
            ? "bg-brand-green text-brand-cream"
            : "text-muted-foreground hover:text-foreground"
        )}
        aria-pressed={lang === "es"}
      >
        ES
      </button>
      <button
        type="button"
        onClick={() => setLang("en")}
        className={cn(
          "rounded-full px-2.5 py-1 transition-colors",
          lang === "en"
            ? "bg-brand-green text-brand-cream"
            : "text-muted-foreground hover:text-foreground"
        )}
        aria-pressed={lang === "en"}
      >
        EN
      </button>
    </div>
  )
}
