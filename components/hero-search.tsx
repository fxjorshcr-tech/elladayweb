"use client"

import * as React from "react"
import { useRouter } from "next/navigation"
import { useLanguage } from "@/lib/i18n/provider"
import type { L, PropertyType } from "@/lib/properties"

const typeOptions: {
  value: PropertyType
  label: { es: string; en: string; fr: string; de: string }
}[] = [
  {
    value: "house",
    label: { es: "Casas", en: "Houses", fr: "Maisons", de: "Häuser" },
  },
  {
    value: "lot",
    label: { es: "Lotes", en: "Lots", fr: "Terrains", de: "Grundstücke" },
  },
  {
    value: "farm",
    label: { es: "Fincas", en: "Farms", fr: "Fincas", de: "Höfe" },
  },
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
    "w-full cursor-pointer appearance-none truncate bg-transparent pr-7 text-[15px] text-brand-green-dark outline-none"

  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col rounded-3xl bg-brand-cream/95 p-2 shadow-[0_30px_80px_-30px_rgba(0,0,0,0.6)] ring-1 ring-white/40 backdrop-blur-xl md:flex-row md:items-stretch md:rounded-full"
    >
      <label className="group relative flex-1 cursor-pointer rounded-2xl px-5 py-2.5 transition-colors duration-300 hover:bg-white md:rounded-full md:px-7 md:py-3">
        <span className="block text-[10px] font-medium tracking-[0.2em] text-brand-gold-dark uppercase">
          {t("search.lookingFor")}
        </span>
        <span className="relative mt-0.5 block">
          <select
            value={type}
            onChange={(e) => setType(e.target.value)}
            className={selectClass}
          >
            <option value="">{t("search.allTypes")}</option>
            {typeOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {pick(o.label)}
              </option>
            ))}
          </select>
          <Chevron />
        </span>
      </label>

      <span
        className="mx-5 h-px bg-border md:mx-0 md:my-3 md:h-auto md:w-px"
        aria-hidden="true"
      />

      <label className="group relative flex-1 cursor-pointer rounded-2xl px-5 py-2.5 transition-colors duration-300 hover:bg-white md:rounded-full md:px-7 md:py-3">
        <span className="block text-[10px] font-medium tracking-[0.2em] text-brand-gold-dark uppercase">
          {t("search.where")}
        </span>
        <span className="relative mt-0.5 block">
          <select
            value={zone}
            onChange={(e) => setZone(e.target.value)}
            className={selectClass}
          >
            <option value="">{t("search.allZones")}</option>
            {zones.map(([key, loc]) => (
              <option key={key} value={key}>
                {pick(loc)}
              </option>
            ))}
          </select>
          <Chevron />
        </span>
      </label>

      <button type="submit" className="btn btn-green mt-2 md:mt-0 md:px-9">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.6"
          className="h-4 w-4"
          aria-hidden="true"
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
      className="pointer-events-none absolute top-1/2 right-0 h-4 w-4 -translate-y-1/2 text-brand-green/60 transition-transform duration-300 group-hover:translate-y-[-35%]"
      aria-hidden="true"
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 9l6 6 6-6" />
    </svg>
  )
}
