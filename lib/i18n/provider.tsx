"use client"

import * as React from "react"
import { dictionary, translate, type DictKey, type Language } from "./dictionary"

type LanguageContextValue = {
  lang: Language
  setLang: (lang: Language) => void
  t: (key: DictKey) => string
  pick: <T>(values: { es: T; en: T }) => T
}

const LanguageContext = React.createContext<LanguageContextValue | null>(null)

const STORAGE_KEY = "elladay-lang"

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLangState] = React.useState<Language>("es")

  React.useEffect(() => {
    const stored = window.localStorage.getItem(STORAGE_KEY) as Language | null
    if (stored === "es" || stored === "en") {
      setLangState(stored)
      document.documentElement.lang = stored
    } else {
      const browser = navigator.language.toLowerCase().startsWith("en") ? "en" : "es"
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
      pick: ({ es, en }) => (lang === "es" ? es : en),
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
