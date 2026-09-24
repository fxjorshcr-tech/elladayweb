"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { useLanguage } from "@/lib/i18n/provider"
import type { L, PropertyType } from "@/lib/properties"

const typeOptions: { value: PropertyType; label: { es: string; en: string; fr: string; de: string } }[] = [
  { value: "house", label: { es: "Casas", en: "Houses", fr: "Maisons", de: "Häuser" } },
  { value: "lot", label: { es: "Lotes", en: "Lots", fr: "Terrains", de: "Grundstücke" } },
  { value: "farm", label: { es: "Fincas", en: "Farms", fr: "Fincas", de: "Höfe" } },
]

// `zones`: unique locations from the published listings, keyed by Spanish name.
export function HeroSearch({ zones }: { zones: [string, L][] }) {
  const router = useRouter()
  const { t, pick } = useLanguage()
  const [type, setType] = React.useState("")
  const [zone, setZone] = React.useState("")

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const params = new URLSearchParams()
    if (type) params.set("type", type)
    if (zone) params.set("zone", zone)
    const qs = params.toString()
    router.push(qs ? `/properties?${qs}` : "/properties")
  }

  const selectClass =
    "w-full appearance-none rounded-full border border-white/25 bg-white/10 px-5 py-3 pr-10 text-sm text-white outline-none backdrop-blur transition-colors focus:border-brand-gold [&>option]:text-brand-green-dark"

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col gap-3 rounded-2xl border border-white/20 bg-white/10 p-4 backdrop-blur-md sm:rounded-full sm:p-2 md:flex-row md:items-center"
    >
      <div className="relative flex-1">
        <label className="sr-only">{t("search.lookingFor")}</label>
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className={selectClass}
        >
          <option value="">
            {t("search.lookingFor")} · {t("search.allTypes")}
          </option>
          {typeOptions.map((o) => (
            <option key={o.value} value={o.value}>
              {pick(o.label)}
            </option>
          ))}
        </select>
        <Chevron />
      </div>
      <div className="relative flex-1">
        <label className="sr-only">{t("search.where")}</label>
        <select
          value={zone}
          onChange={(e) => setZone(e.target.value)}
          className={selectClass}
        >
          <option value="">
            {t("search.where")} · {t("search.allZones")}
          </option>
          {zones.map(([key, loc]) => (
            <option key={key} value={key}>
              {pick(loc)}
            </option>
          ))}
        </select>
        <Chevron />
      </div>
      <button
        type="submit"
        className="inline-flex items-center justify-center gap-2 rounded-full bg-brand-gold px-7 py-3 text-sm tracking-wide text-white transition-colors hover:bg-brand-gold-dark"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          className="h-4 w-4"
        >
          <circle cx="11" cy="11" r="7" />
          <path strokeLinecap="round" d="M20 20l-3.5-3.5" />
        </svg>
        {t("search.searchBtn")}
      </button>
    </form>
  )
}

function Chevron() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="pointer-events-none absolute top-1/2 right-4 h-4 w-4 -translate-y-1/2 text-white/70"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
    </svg>
  )
}
