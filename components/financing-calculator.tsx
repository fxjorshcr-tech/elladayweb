"use client"

import * as React from "react"
import { useLanguage } from "@/lib/i18n/provider"
import {
  formatApproxUsd,
  formatPrice,
  type Currency,
} from "@/lib/properties"

export function FinancingCalculator({
  price,
  currency,
}: {
  price: number
  currency: Currency
}) {
  const { pick, lang } = useLanguage()
  const [downPct, setDownPct] = React.useState(20)
  const [years, setYears] = React.useState(10)
  const [rate, setRate] = React.useState(9)

  const principal = price * (1 - downPct / 100)
  const monthlyRate = rate / 100 / 12
  const months = years * 12
  const monthly =
    monthlyRate === 0
      ? principal / months
      : (principal * monthlyRate) / (1 - Math.pow(1 + monthlyRate, -months))

  const downPayment = price * (downPct / 100)

  return (
    <div className="rounded-sm border border-border bg-brand-cream p-6 md:p-8">
      <h2 className="font-serif text-3xl text-brand-green">
        {pick({
          es: "Calculadora de financiamiento",
          en: "Financing calculator",
          fr: "Calculateur de financement",
          de: "Finanzierungsrechner",
        })}
      </h2>
      <p className="mt-2 text-sm text-muted-foreground">
        {pick({
          es: "Estima tu cuota mensual. Muchas de nuestras propiedades se ofrecen con opción de financiamiento.",
          en: "Estimate your monthly payment. Many of our properties are offered with a financing option.",
          fr: "Estimez votre mensualité. Beaucoup de nos propriétés sont proposées avec une option de financement.",
          de: "Schätzen Sie Ihre monatliche Rate. Viele unserer Immobilien werden mit Finanzierungsmöglichkeit angeboten.",
        })}
      </p>

      <div className="mt-8 space-y-6">
        <Slider
          label={pick({
            es: "Prima (pago inicial)",
            en: "Down payment",
            fr: "Apport initial",
            de: "Anzahlung",
          })}
          valueLabel={`${downPct}% · ${formatPrice(Math.round(downPayment), lang, currency)}`}
          min={0}
          max={80}
          step={5}
          value={downPct}
          onChange={setDownPct}
        />
        <Slider
          label={pick({
            es: "Plazo",
            en: "Term",
            fr: "Durée",
            de: "Laufzeit",
          })}
          valueLabel={`${years} ${pick({ es: "años", en: "years", fr: "ans", de: "Jahre" })}`}
          min={1}
          max={30}
          step={1}
          value={years}
          onChange={setYears}
        />
        <Slider
          label={pick({
            es: "Tasa de interés anual",
            en: "Annual interest rate",
            fr: "Taux d'intérêt annuel",
            de: "Jährlicher Zinssatz",
          })}
          valueLabel={`${rate}%`}
          min={1}
          max={20}
          step={0.5}
          value={rate}
          onChange={setRate}
        />
      </div>

      <div className="mt-8 border-t border-border pt-6">
        <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
          {pick({
            es: "Cuota mensual estimada",
            en: "Estimated monthly payment",
            fr: "Mensualité estimée",
            de: "Geschätzte Monatsrate",
          })}
        </p>
        <p className="mt-2 font-serif text-3xl text-brand-green md:text-4xl">
          {formatPrice(Math.round(monthly), lang, currency)}
          {formatApproxUsd(monthly, currency) && (
            <span className="ml-3 text-base text-muted-foreground">
              {formatApproxUsd(monthly, currency)} USD
            </span>
          )}
        </p>
        <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
          {pick({
            es: "Cálculo aproximado, solo como referencia. Las condiciones reales dependen de cada propiedad y del acuerdo con el vendedor o el banco. Escríbenos y te explicamos las opciones disponibles.",
            en: "Approximate calculation, for reference only. Actual terms depend on each property and the agreement with the seller or bank. Write to us and we'll walk you through the available options.",
            fr: "Calcul approximatif, à titre indicatif seulement. Les conditions réelles dépendent de chaque propriété et de l'accord avec le vendeur ou la banque. Écrivez-nous et nous vous expliquerons les options disponibles.",
            de: "Ungefähre Berechnung, nur zur Orientierung. Die tatsächlichen Konditionen hängen von der jeweiligen Immobilie und der Vereinbarung mit dem Verkäufer oder der Bank ab. Schreiben Sie uns und wir erklären Ihnen die verfügbaren Optionen.",
          })}
        </p>
      </div>
    </div>
  )
}

function Slider({
  label,
  valueLabel,
  min,
  max,
  step,
  value,
  onChange,
}: {
  label: string
  valueLabel: string
  min: number
  max: number
  step: number
  value: number
  onChange: (v: number) => void
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
          {label}
        </label>
        <span className="text-sm text-brand-green">{valueLabel}</span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="mt-3 h-1 w-full cursor-pointer appearance-none rounded-full bg-border accent-brand-gold"
      />
    </div>
  )
}
