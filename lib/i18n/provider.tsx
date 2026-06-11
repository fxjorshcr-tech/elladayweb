"use client"

import * as React from "react"
import { dictionary, translate, type DictKey, type Language } from "./dictionary"

type LangValues<T> = { es: T; en: T; fr?: T; de?: T }

type LanguageContextValue = {
  lang: Language
  setLang: (lang: Language) => void
  t: (key: DictKey) => string
  pick: <T>(values: LangValues<T>) => T
}

const LanguageContext = React.createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = "elladay-lang"
const VALID_LANGS: Language[] = ["es", "en", "fr", "de"]

function detectBrowserLang(): Language {
  if (typeof navigator === "undefined") return "es"
  const code = navigator.language.toLowerCase().slice(0, 2)
  return (VALID_LANGS as string[]).includes(code) ? (code as Language) : "es"
}

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = React.useState<Language>("es")

  React.useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Language | null
    if (stored && (VALID_LANGS as string[]).includes(stored)) {
      setLangState(stored)
      document.documentElement.lang = stored
    } else {
      const browser = detectBrowserLang()
      setLangState(browser)
      document.documentElement.lang = browser
    }
  }, [])

  const setLang = React.useCallback((next: Language) => {
    setLangState(next)
    window.localStorage.setItem(STORAGE_KEY, next)
    document.documentElement.lang = next
  }, [])

  const value = React.useMemo<LanguageContextValue>(
    () => ({
      lang,
      setLang,
      t: (key) => translate(key, lang),
      pick: <T,>(values: LangValues<T>): T => {
        const v = values[lang]
        if (v !== undefined) return v
        return values.en
      },
    }),
    [lang, setLang]
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = React.useContext(LanguageContext)
  if (!ctx) throw new Error("useLanguage must be used within LanguageProvider")
  return ctx
}

export { dictionary }
