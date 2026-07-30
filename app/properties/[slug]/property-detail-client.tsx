"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/i18n/provider"
import { formatApproxUsd, formatPrice, type Property } from "@/lib/properties"
import { PropertyGallery } from "@/components/property-gallery"
import { ContactForm } from "@/components/contact-form"
import { FadeIn } from "@/components/fade-in"
import { ShareButtons } from "@/components/share-buttons"
import { FinancingCalculator } from "@/components/financing-calculator"
import { SITE, whatsappLink } from "@/lib/constants"

const typeLabels = {
  house: { es: "Casa", en: "House", fr: "Maison", de: "Haus" },
  lot: { es: "Lote", en: "Lot", fr: "Terrain", de: "Grundstück" },
  farm: { es: "Finca", en: "Farm", fr: "Finca", de: "Hof" },
} as const

export function PropertyDetailClient({ property }: { property: Property }) {
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

  return (
    <>
      <section className="container-page py-12 md:py-16">
        <FadeIn>
          <nav aria-label="Breadcrumb" className="text-xs text-muted-foreground">
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="hover:text-brand-green">
                  {t("nav.home")}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li>
                <Link href="/properties" className="hover:text-brand-green">
                  {t("properties.title")}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="max-w-[16rem] truncate text-brand-green sm:max-w-none">
                {propertyTitle}
              </li>
            </ol>
          </nav>
        </FadeIn>

        <FadeIn delay={80}>
          <div className="mt-8 flex flex-wrap items-end justify-between gap-6">
            <div className="max-w-3xl">
              <p className="text-xs tracking-[0.22em] text-brand-gold uppercase">
                {pick(typeLabels[property.type])} · {pick(property.location)}
              </p>
              <h1 className="mt-4 font-display text-fluid-h1 leading-tight text-balance text-brand-green">
                {pick(property.title)}
              </h1>
            </div>
            <div className="text-right">
              {property.sold && (
                <span className="mb-2 inline-block rounded-md bg-red-600 px-4 py-1.5 text-sm font-bold tracking-[0.2em] text-white uppercase shadow-md">
                  {t("common.sold")}
                </span>
              )}
              {!property.sold && property.previousPrice != null && (
                <span className="mb-2 inline-block rounded-full bg-brand-gold px-3 py-1 text-[10px] font-semibold tracking-[0.18em] text-white uppercase shadow-md">
                  {t("common.reducedBadge")}
                </span>
              )}
              {!property.sold &&
                property.previousPrice == null &&
                property.isNew && (
                  <span className="mb-2 inline-block rounded-full bg-brand-green px-3 py-1 text-[10px] font-semibold tracking-[0.18em] text-brand-cream uppercase shadow-md">
                    {t("common.newBadge")}
                  </span>
                )}
              {!property.priceOnRequest && (
                <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
                  {t("common.fromPrice")}
                </p>
              )}
              {!property.priceOnRequest && property.previousPrice != null && (
                <p className="mt-1 text-sm text-muted-foreground line-through">
                  {formatPrice(property.previousPrice, lang, property.currency)}
                </p>
              )}
              <p className="mt-1 font-serif text-3xl text-brand-green md:text-4xl">
                {property.priceOnRequest
                  ? t("common.priceOnRequest")
                  : formatPrice(property.price, lang, property.currency)}
              </p>
              {!property.priceOnRequest &&
                formatApproxUsd(property.price, property.currency) && (
                  <p className="mt-1 text-sm text-muted-foreground">
                    {formatApproxUsd(property.price, property.currency)} USD
                  </p>
                )}
              {!property.priceOnRequest && property.negotiable && (
                <p className="mt-1 text-xs tracking-[0.16em] text-muted-foreground uppercase">
                  {t("common.negotiable")}
                </p>
              )}
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={120}>
          <div className="mt-6">
            <ShareButtons title={propertyTitle} />
          </div>
        </FadeIn>

        <div className="mt-10">
          <PropertyGallery images={property.images} />
        </div>

        <div className="mt-16 grid gap-16 md:grid-cols-3">
          <div className="md:col-span-2">
            <FadeIn>
              <div className="grid grid-cols-2 gap-y-6 border-y border-border py-8 md:grid-cols-4">
                {property.bedrooms != null && (
                  <Spec
                    label={t("properties.bedrooms")}
                    value={property.bedrooms.toString()}
                  />
                )}
                {property.bathrooms != null && (
                  <Spec
                    label={t("properties.bathrooms")}
                    value={property.bathrooms.toString()}
                  />
                )}
                {property.builtArea != null && (
                  <Spec
                    label={t("properties.area")}
                    value={`${property.builtArea} m²`}
                  />
                )}
                {sizeLabel && (
                  <Spec label={t("properties.lotSize")} value={sizeLabel} />
                )}
              </div>
            </FadeIn>

            <FadeIn delay={80}>
              <div className="mt-12">
                <h2 className="font-serif text-3xl text-brand-green">
                  {t("properties.description")}
                </h2>
                <div className="mt-6 space-y-5 text-base leading-relaxed text-muted-foreground">
                  {descriptionList.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </div>
            </FadeIn>

            <FadeIn delay={120}>
              <div className="mt-12">
                <h2 className="font-serif text-3xl text-brand-green">
                  {t("properties.highlights")}
                </h2>
                <ul className="mt-6 grid gap-3 sm:grid-cols-2">
                  {highlightsList.map((h) => (
                    <li
                      key={h}
                      className="flex items-start gap-3 text-sm text-foreground"
                    >
                      <span
                        className="mt-2 h-px w-4 flex-none bg-brand-gold"
                        aria-hidden="true"
                      />
                      {h}
                    </li>
                  ))}
                </ul>
              </div>
            </FadeIn>

            <FadeIn delay={160}>
              <div className="mt-12">
                <h2 className="font-serif text-3xl text-brand-green">
                  {t("properties.map")}
                </h2>
                <p className="mt-2 text-sm text-muted-foreground">
                  {pick(property.location)}
                </p>
                <div className="mt-6 aspect-video overflow-hidden rounded-sm border border-border">
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
                <div className="mt-12">
                  <FinancingCalculator
                    price={property.price}
                    currency={property.currency}
                  />
                </div>
              </FadeIn>
            )}
          </div>

          <aside className="md:col-span-1">
            <div className="sticky top-28 space-y-8">
              <FadeIn>
                <div className="rounded-sm border border-border bg-brand-cream p-6">
                  <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
                    {pick({
                      es: "Contacto",
                      en: "Contact",
                      fr: "Contact",
                      de: "Kontakt",
                    })}
                  </p>
                  <p className="mt-3 font-serif text-2xl text-brand-green">
                    {SITE.whatsappDisplay}
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {pick({
                      es: "Escríbenos por WhatsApp y con gusto te atendemos.",
                      en: "Message us on WhatsApp and we'll be glad to help.",
                      fr: "Écrivez-nous sur WhatsApp, nous serons ravis de vous aider.",
                      de: "Schreiben Sie uns auf WhatsApp, wir helfen Ihnen gern.",
                    })}
                  </p>

                  <div className="mt-6 space-y-3">
                    <a
                      href={whatsappLink(whatsappMsg)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex w-full items-center justify-center rounded-full bg-brand-green px-5 py-3 text-sm tracking-wide text-brand-cream transition-colors hover:bg-brand-green-dark"
                    >
                      WhatsApp · {SITE.whatsappDisplay}
                    </a>
                  </div>
                </div>
              </FadeIn>

              <FadeIn delay={120}>
                <div>
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
              </FadeIn>
            </div>
          </aside>
        </div>
      </section>
    </>
  )
}

function Spec({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
        {label}
      </p>
      <p className="mt-1 font-serif text-2xl text-brand-green">{value}</p>
    </div>
  )
}
