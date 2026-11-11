"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/i18n/provider"
import { formatApproxUsd, formatPrice, type Property } from "@/lib/properties"
import { PropertyGallery } from "@/components/property-gallery"
import { PropertyCard } from "@/components/property-card"
import { ContactForm } from "@/components/contact-form"
import { FadeIn } from "@/components/fade-in"
import { ShareButtons } from "@/components/share-buttons"
import { FinancingCalculator } from "@/components/financing-calculator"
import {
  AreaIcon,
  ArrowRight,
  BathIcon,
  BedIcon,
  HomeAreaIcon,
  PinIcon,
  WhatsAppIcon,
} from "@/components/icons"
import { SITE, whatsappLink } from "@/lib/constants"

const typeLabels = {
  house: { es: "Casa", en: "House", fr: "Maison", de: "Haus" },
  lot: { es: "Lote", en: "Lot", fr: "Terrain", de: "Grundstück" },
  farm: { es: "Finca", en: "Farm", fr: "Finca", de: "Hof" },
} as const

export function PropertyDetailClient({
  property,
  related = [],
}: {
  property: Property
  // Other published listings to suggest at the bottom of the page.
  related?: Property[]
}) {
  const { t, pick, lang } = useLanguage()

  const sizeLabel =
    property.lotSize == null
      ? null
      : property.lotUnit === "ha"
        ? `${property.lotSize} ${pick({
            es: "hectáreas",
            en: "hectares",
            fr: "hectares",
            de: "Hektar",
          })}`
        : `${property.lotSize.toLocaleString("de-DE")} m²`

  const mapSrc = `https://www.google.com/maps?q=${encodeURIComponent(
    property.mapQuery
  )}&output=embed`

  const propertyTitle = pick(property.title)
  const whatsappMsg = pick({
    es: `Hola, me interesa la propiedad "${propertyTitle}". ¿Podemos conversar?`,
    en: `Hi, I'm interested in the property "${propertyTitle}". Can we talk?`,
    fr: `Bonjour, la propriété "${propertyTitle}" m'intéresse. Pouvons-nous en discuter ?`,
    de: `Hallo, ich interessiere mich für die Immobilie "${propertyTitle}". Können wir sprechen?`,
  })

  const descriptionList = pick<readonly string[]>({
    es: property.description.es,
    en: property.description.en,
    fr: property.description.fr,
    de: property.description.de,
  })
  const highlightsList = pick<readonly string[]>({
    es: property.highlights.es,
    en: property.highlights.en,
    fr: property.highlights.fr,
    de: property.highlights.de,
  })

  const priceLabel = property.priceOnRequest
    ? t("common.priceOnRequest")
    : formatPrice(property.price, lang, property.currency)
  const approxUsd = property.priceOnRequest
    ? null
    : formatApproxUsd(property.price, property.currency)

  const specs = [
    property.bedrooms != null && {
      icon: <BedIcon className="h-5 w-5" />,
      label: t("properties.bedrooms"),
      value: property.bedrooms.toString(),
    },
    property.bathrooms != null && {
      icon: <BathIcon className="h-5 w-5" />,
      label: t("properties.bathrooms"),
      value: property.bathrooms.toString(),
    },
    property.builtArea != null && {
      icon: <HomeAreaIcon className="h-5 w-5" />,
      label: t("properties.area"),
      value: `${property.builtArea} m²`,
    },
    sizeLabel != null && {
      icon: <AreaIcon className="h-5 w-5" />,
      label: t("properties.lotSize"),
      value: sizeLabel,
    },
  ].filter(Boolean) as { icon: React.ReactNode; label: string; value: string }[]

  const badge = property.sold ? (
    <span className="inline-block rounded-md bg-red-600 px-4 py-1.5 text-sm font-bold tracking-[0.2em] text-white uppercase shadow-md">
      {t("common.sold")}
    </span>
  ) : property.previousPrice != null ? (
    <span className="inline-block rounded-full bg-brand-gold px-3 py-1 text-[10px] font-semibold tracking-[0.18em] text-white uppercase shadow-md">
      {t("common.reducedBadge")}
    </span>
  ) : property.isNew ? (
    <span className="inline-flex items-center gap-1.5 rounded-full bg-brand-green px-3 py-1 text-[10px] font-semibold tracking-[0.18em] text-brand-cream uppercase shadow-md">
      <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-brand-gold" />
      {t("common.newBadge")}
    </span>
  ) : null

  return (
    <>
      <section className="container-page pt-8 pb-28 md:pt-12 md:pb-32">
        <nav
          aria-label="Breadcrumb"
          className="hero-rise text-xs text-muted-foreground"
        >
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link
                href="/"
                className="transition-colors hover:text-brand-green"
              >
                {t("nav.home")}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href="/properties"
                className="transition-colors hover:text-brand-green"
              >
                {t("properties.title")}
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="max-w-[16rem] truncate text-brand-green sm:max-w-none">
              {propertyTitle}
            </li>
          </ol>
        </nav>

        <div
          className="hero-rise mt-8 flex flex-wrap items-end justify-between gap-x-10 gap-y-6"
          style={{ animationDelay: "100ms" }}
        >
          <div className="max-w-3xl">
            <div className="flex flex-wrap items-center gap-3">
              <span className="rounded-full border border-brand-green/25 px-3 py-1 text-[10px] font-medium tracking-[0.18em] text-brand-green uppercase">
                {pick(typeLabels[property.type])}
              </span>
              {badge}
            </div>
            <h1 className="font-display text-fluid-h1 mt-5 leading-[1.05] text-balance text-brand-green">
              {propertyTitle}
            </h1>
            <p className="mt-4 flex items-center gap-2 text-sm text-muted-foreground">
              <PinIcon className="flex-none text-brand-gold-dark" />
              {pick(property.location)}
            </p>
          </div>
          <div className="md:text-right">
            {!property.priceOnRequest && (
              <p className="text-[11px] tracking-[0.18em] text-muted-foreground uppercase">
                {t("common.fromPrice")}
              </p>
            )}
            {!property.priceOnRequest && property.previousPrice != null && (
              <p className="mt-1 text-sm text-muted-foreground line-through">
                {formatPrice(property.previousPrice, lang, property.currency)}
              </p>
            )}
            <p className="mt-1 font-serif text-4xl leading-none text-brand-green md:text-5xl">
              {priceLabel}
            </p>
            {(approxUsd ||
              (!property.priceOnRequest && property.negotiable)) && (
              <p className="mt-2 text-sm text-muted-foreground">
                {approxUsd && <>{approxUsd} USD</>}
                {approxUsd && property.negotiable && " · "}
                {!property.priceOnRequest &&
                  property.negotiable &&
                  t("common.negotiable")}
              </p>
            )}
          </div>
        </div>

        <div
          className="hero-rise mt-8 md:mt-10"
          style={{ animationDelay: "220ms" }}
        >
          <PropertyGallery images={property.images} />
        </div>

        <div className="mt-6 flex flex-wrap items-center justify-between gap-4">
          <ShareButtons title={propertyTitle} />
        </div>

        <div className="mt-12 grid gap-16 lg:grid-cols-3 lg:gap-14">
          <div className="lg:col-span-2">
            {specs.length > 0 && (
              <FadeIn>
                <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                  {specs.map((spec) => (
                    <Spec key={spec.label} {...spec} />
                  ))}
                </div>
              </FadeIn>
            )}

            <FadeIn delay={80}>
              <div className={specs.length > 0 ? "mt-14" : undefined}>
                <h2 className="font-serif text-3xl text-brand-green">
                  {t("properties.description")}
                </h2>
                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground md:text-[17px]">
                  {descriptionList.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={120}>
              <div className="mt-14">
                <h2 className="font-serif text-3xl text-brand-green">
                  {t("properties.highlights")}
                </h2>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {highlightsList.map((h) => (
                    <li
                      key={h}
                      className="flex items-center gap-3.5 rounded-xl border border-border bg-brand-cream/60 px-4 py-3.5 text-sm text-foreground transition-colors duration-300 hover:border-brand-gold/60 hover:bg-brand-cream"
                    >
                      <span
                        className="flex h-6 w-6 flex-none items-center justify-center rounded-full bg-brand-green text-brand-cream"
                        aria-hidden="true"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          className="h-3 w-3"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 12.5l4.5 4.5L19 7.5"
                          />
                        </svg>
                      </span>
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={160}>
              <div className="mt-14">
                <h2 className="font-serif text-3xl text-brand-green">
                  {t("properties.map")}
                </h2>
                <p className="mt-2 flex items-center gap-2 text-sm text-muted-foreground">
                  <PinIcon className="flex-none text-brand-gold-dark" />
                  {pick(property.location)}
                </p>
                <div className="mt-6 aspect-video overflow-hidden rounded-2xl border border-border bg-muted">
                  <iframe
                    title="map"
                    src={mapSrc}
                    width="100%"
                    height="100%"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-full w-full border-0"
                  />
                </div>
              </div>
            </FadeIn>

            {!property.sold && !property.priceOnRequest && (
              <FadeIn delay={200}>
                <div className="mt-14">
                  <FinancingCalculator
                    price={property.price}
                    currency={property.currency}
                  />
                </div>
              </FadeIn>
            )}
          </div>

          <aside className="lg:col-span-1">
            <div className="sticky top-28">
              <FadeIn variant="right">
                <div className="overflow-hidden rounded-3xl border border-border bg-brand-cream shadow-[0_30px_60px_-40px_rgba(28,41,33,0.5)]">
                  <div className="grain relative bg-brand-green-dark p-7 text-brand-cream">
                    <p className="text-[11px] tracking-[0.18em] text-brand-cream/70 uppercase">
                      {property.priceOnRequest
                        ? pick(typeLabels[property.type])
                        : t("common.fromPrice")}
                    </p>
                    <p className="mt-2 font-serif text-3xl leading-tight">
                      {priceLabel}
                    </p>
                    {approxUsd && (
                      <p className="mt-1 text-sm text-brand-cream/75">
                        {approxUsd} USD
                      </p>
                    )}
                    <a
                      href={whatsappLink(whatsappMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-gold mt-6 w-full"
                    >
                      <WhatsAppIcon className="h-4 w-4" />
                      WhatsApp · {SITE.whatsappDisplay}
                    </a>
                    <p className="mt-3 text-center text-xs text-brand-cream/65">
                      {pick({
                        es: "Escríbenos por WhatsApp y con gusto te atendemos.",
                        en: "Message us on WhatsApp and we'll be glad to help.",
                        fr: "Écrivez-nous sur WhatsApp, nous serons ravis de vous aider.",
                        de: "Schreiben Sie uns auf WhatsApp, wir helfen Ihnen gern.",
                      })}
                    </p>
                  </div>

                  <div className="p-7">
                    <h3 className="font-serif text-2xl text-brand-green">
                      {t("properties.inquire")}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground">
                      {pick({
                        es: "Cuéntanos sobre ti y te respondemos en menos de 24 horas.",
                        en: "Tell us a bit about you and we'll reply within 24 hours.",
                        fr: "Parlez-nous un peu de vous, nous répondons sous 24 heures.",
                        de: "Erzählen Sie uns etwas über sich — wir antworten innerhalb von 24 Stunden.",
                      })}
                    </p>
                    <div className="mt-6">
                      <ContactForm prefillSubject={propertyTitle} />
                    </div>
                  </div>
                </div>
              </FadeIn>
            </div>
          </aside>
        </div>
      </section>

      {related.length > 0 && (
        <section className="bg-brand-cream py-20 md:py-28">
          <div className="container-page">
            <FadeIn>
              <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
                <div>
                  <p className="eyebrow">
                    {pick({
                      es: "Sigue explorando",
                      en: "Keep exploring",
                      fr: "Continuez à explorer",
                      de: "Weiter entdecken",
                    })}
                  </p>
                  <h2 className="font-display text-fluid-h2 mt-5 leading-tight text-brand-green">
                    {pick({
                      es: "También te puede interesar",
                      en: "You may also like",
                      fr: "Vous aimerez aussi",
                      de: "Das könnte Sie auch interessieren",
                    })}
                  </h2>
                </div>
                <Link href="/properties" className="btn btn-outline-dark">
                  {t("featured.viewAll")}
                  <ArrowRight className="btn-arrow" />
                </Link>
              </div>
            </FadeIn>
            <div className="mt-12 grid gap-x-8 gap-y-14 sm:grid-cols-2 lg:grid-cols-3">
              {related.map((p, i) => (
                <FadeIn key={p.slug} delay={i * 120}>
                  <PropertyCard property={p} />
                </FadeIn>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Phones: price and WhatsApp always one tap away */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-brand-cream/95 pb-[env(safe-area-inset-bottom)] shadow-[0_-12px_30px_-18px_rgba(28,41,33,0.45)] backdrop-blur-xl md:hidden">
        <div className="flex items-center justify-between gap-4 px-5 py-3">
          <div className="min-w-0">
            <p className="truncate font-serif text-xl leading-tight text-brand-green">
              {priceLabel}
            </p>
            {approxUsd && (
              <p className="text-xs text-muted-foreground">{approxUsd} USD</p>
            )}
          </div>
          <a
            href={whatsappLink(whatsappMsg)}
            target="_blank"
            rel="noopener noreferrer"
            className="btn flex-none bg-[#25D366] px-6 py-3 font-medium text-white"
          >
            <WhatsAppIcon className="h-4 w-4" />
            WhatsApp
          </a>
        </div>
      </div>
    </>
  )
}

function Spec({
  icon,
  label,
  value,
}: {
  icon: React.ReactNode
  label: string
  value: string
}) {
  return (
    <div className="rounded-2xl border border-border bg-brand-cream/60 p-5 transition-colors duration-300 hover:border-brand-gold/60 hover:bg-brand-cream">
      <span className="text-brand-gold-dark">{icon}</span>
      <p className="mt-4 font-serif text-2xl leading-none text-brand-green">
        {value}
      </p>
      <p className="mt-2 text-[11px] tracking-[0.16em] text-muted-foreground uppercase">
        {label}
      </p>
    </div>
  )
}
