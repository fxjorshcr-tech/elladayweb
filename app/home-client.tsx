"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n/provider"
import type { L, Property } from "@/lib/properties"
import { FadeIn } from "@/components/fade-in"
import { HeroSearch } from "@/components/hero-search"
import { CountUp } from "@/components/count-up"
import { Marquee } from "@/components/marquee"
import { Parallax } from "@/components/parallax"
import { PropertyCarousel } from "@/components/property-carousel"
import { NewsletterCta } from "@/components/newsletter-cta"
import { ArrowRight, WhatsAppIcon } from "@/components/icons"
import { SITE, whatsappLink } from "@/lib/constants"

const STORAGE =
  "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos"
const HERO_IMG = `${STORAGE}/Arenal%20Volcano.webp`
const LIFESTYLE_IMG = `${STORAGE}/WhatsApp%20Image%202026-06-13%20at%202.27.56%20PM.jpeg`
const FORTUNA_PRIMARY = `${STORAGE}/arenal-volcano-mountains-sky-costa-rica.webp`
const FORTUNA_SECONDARY =
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80"

export function HomeClient({
  properties,
  zones,
}: {
  properties: Property[]
  zones: [string, L][]
}) {
  const { t, pick } = useLanguage()

  const available = properties.filter((p) => !p.sold).length

  // "El Bosque, La Fortuna, San Carlos" → "El Bosque": short place names for
  // the ticker, without repeats.
  const places = Array.from(
    new Set(zones.map(([, loc]) => pick(loc).split(",")[0].trim()))
  )
  const tickerItems = [
    "La Fortuna",
    ...places.filter((p) => p !== "La Fortuna"),
    pick({
      es: "Volcán Arenal",
      en: "Arenal Volcano",
      fr: "Volcan Arenal",
      de: "Vulkan Arenal",
    }),
    pick({ es: "Casas", en: "Homes", fr: "Maisons", de: "Häuser" }),
    pick({ es: "Lotes", en: "Lots", fr: "Terrains", de: "Grundstücke" }),
    pick({ es: "Fincas", en: "Farms", fr: "Fincas", de: "Höfe" }),
  ]

  const heroWords = t("hero.title").split(" ")

  const steps = [
    {
      title: pick({
        es: "Cuéntanos qué buscas",
        en: "Tell us what you're after",
        fr: "Dites-nous ce que vous cherchez",
        de: "Sagen Sie uns, was Sie suchen",
      }),
      body: pick({
        es: "Zona, presupuesto y tipo de propiedad. Te mostramos lo que encaja, sin compromiso.",
        en: "Area, budget and type of property. We show you what fits, with no commitment.",
        fr: "Secteur, budget et type de bien. Nous vous montrons ce qui correspond, sans engagement.",
        de: "Lage, Budget und Art der Immobilie. Wir zeigen Ihnen unverbindlich, was passt.",
      }),
    },
    {
      title: pick({
        es: "Visita las propiedades",
        en: "Visit the properties",
        fr: "Visitez les propriétés",
        de: "Besichtigen Sie die Immobilien",
      }),
      body: pick({
        es: "Te acompañamos en persona o por videollamada y te contamos lo bueno y lo no tan bueno de cada opción.",
        en: "We go with you in person or by video call and tell you the good and the not-so-good of each option.",
        fr: "Nous vous accompagnons sur place ou en visio et vous disons le bon et le moins bon de chaque option.",
        de: "Wir begleiten Sie vor Ort oder per Videoanruf und nennen Ihnen die Stärken und Schwächen jeder Option.",
      }),
    },
    {
      title: pick({
        es: "Oferta y estudio legal",
        en: "Offer and legal review",
        fr: "Offre et vérification juridique",
        de: "Angebot und rechtliche Prüfung",
      }),
      body: pick({
        es: "Te ayudamos a negociar y un abogado-notario verifica la propiedad en el Registro Nacional.",
        en: "We help you negotiate, and an attorney-notary verifies the property at the National Registry.",
        fr: "Nous vous aidons à négocier et un avocat-notaire vérifie la propriété au Registre national.",
        de: "Wir helfen beim Verhandeln, und ein Anwalt-Notar prüft die Immobilie im Nationalregister.",
      }),
    },
    {
      title: pick({
        es: "Firma y entrega",
        en: "Signing and handover",
        fr: "Signature et remise",
        de: "Unterzeichnung und Übergabe",
      }),
      body: pick({
        es: "Escritura ante notario, inscripción a tu nombre y apoyo para que te instales.",
        en: "Deed before a notary, registration in your name and help getting settled.",
        fr: "Acte devant notaire, inscription à votre nom et aide pour votre installation.",
        de: "Notarielle Urkunde, Eintragung auf Ihren Namen und Hilfe beim Einleben.",
      }),
    },
  ]

  const whatsappMsg = pick({
    es: "Hola, me gustaría hablar con ustedes sobre propiedades en La Fortuna.",
    en: "Hi, I'd like to talk to you about properties in La Fortuna.",
    fr: "Bonjour, j'aimerais discuter avec vous des propriétés à La Fortuna.",
    de: "Hallo, ich würde gern mit Ihnen über Immobilien in La Fortuna sprechen.",
  })

  return (
    <>
      {/* ------------------------------------------------------------ Hero */}
      <section className="grain relative -mt-16 flex min-h-[100svh] flex-col overflow-hidden bg-brand-ink md:-mt-20">
        <div className="absolute inset-0 -z-10">
          <Parallax speed={-0.18} className="absolute inset-0">
            <Image
              src={HERO_IMG}
              alt="Volcán Arenal, La Fortuna"
              fill
              priority
              sizes="100vw"
              className="ken-burns object-cover"
            />
          </Parallax>
          <div className="absolute inset-0 bg-gradient-to-r from-brand-ink/85 via-brand-ink/45 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/90 via-transparent to-brand-ink/50" />
        </div>

        <div className="container-page flex flex-1 flex-col justify-center pt-28 pb-8 text-white md:pt-40 md:pb-12">
          <p className="eyebrow hero-rise" style={{ animationDelay: "100ms" }}>
            {t("hero.eyebrow")}
            <span className="hidden sm:inline">· La Fortuna, Costa Rica</span>
          </p>
          <h1 className="font-display text-fluid-hero mt-5 max-w-5xl leading-[1.02] text-white md:mt-7">
            {heroWords.map((word, i) => (
              <span key={i}>
                <span className="word-mask">
                  <span style={{ animationDelay: `${200 + i * 90}ms` }}>
                    {word}
                  </span>
                </span>{" "}
              </span>
            ))}
          </h1>
          <p
            className="hero-rise mt-5 max-w-xl text-base leading-relaxed text-white/85 md:mt-8 md:text-lg"
            style={{ animationDelay: "750ms" }}
          >
            {t("hero.subtitle")}
          </p>
          <div
            className="hero-rise mt-7 max-w-3xl md:mt-10"
            style={{ animationDelay: "900ms" }}
          >
            <HeroSearch zones={zones} />
          </div>
          <div
            className="hero-rise mt-5 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm md:mt-7"
            style={{ animationDelay: "1050ms" }}
          >
            <Link
              href="/properties"
              className="group inline-flex items-center gap-2.5 text-white"
            >
              <span className="link-draw">{t("hero.ctaProperties")}</span>
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-white/40 transition-all duration-300 group-hover:border-brand-gold group-hover:bg-brand-gold">
                <ArrowRight className="h-3.5 w-3.5" />
              </span>
            </Link>
            <a
              href={whatsappLink(whatsappMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 text-white/80 transition-colors hover:text-white"
            >
              <WhatsAppIcon className="h-4 w-4" />
              <span className="link-draw">{t("hero.ctaContact")}</span>
            </a>
          </div>
        </div>

        {/* Facts bar */}
        <div
          className="hero-rise border-t border-white/15 text-white"
          style={{ animationDelay: "1200ms" }}
        >
          <div className="container-page flex items-center justify-between gap-6 py-4 md:py-6">
            <dl className="grid flex-1 grid-cols-3 gap-4 md:flex md:flex-none md:gap-14">
              <HeroFact
                value={String(available)}
                label={pick({
                  es: "Propiedades disponibles",
                  en: "Properties available",
                  fr: "Propriétés disponibles",
                  de: "Verfügbare Immobilien",
                })}
              />
              <HeroFact
                value={String(zones.length)}
                label={pick({
                  es: "Zonas de la región",
                  en: "Areas in the region",
                  fr: "Secteurs de la région",
                  de: "Lagen in der Region",
                })}
              />
              <HeroFact
                value="4"
                label={pick({
                  es: "Idiomas de atención",
                  en: "Languages spoken",
                  fr: "Langues d'accueil",
                  de: "Sprachen im Service",
                })}
              />
            </dl>
            <a
              href="#descubre"
              className="hidden items-center gap-4 text-[11px] tracking-[0.24em] text-white/70 uppercase transition-colors hover:text-white md:flex"
            >
              {pick({
                es: "Descubre",
                en: "Discover",
                fr: "Découvrir",
                de: "Entdecken",
              })}
              <span className="scroll-cue relative block h-10 w-px overflow-hidden bg-white/20 text-brand-gold" />
            </a>
          </div>
        </div>
      </section>

      {/* ---------------------------------------------------------- Ticker */}
      <Marquee
        items={tickerItems}
        className="bg-brand-green-dark py-5 text-brand-cream/90"
      />

      {/* --------------------------------------------------------- Pillars */}
      <section
        id="descubre"
        className="scroll-mt-24 bg-brand-cream py-20 md:py-28"
      >
        <div className="container-page">
          <div className="grid gap-px overflow-hidden rounded-3xl bg-border sm:grid-cols-2 lg:grid-cols-4">
            {[
              { icon: <HouseIcon />, key: "one" as const },
              { icon: <LeafIcon />, key: "two" as const },
              { icon: <HandIcon />, key: "three" as const },
              { icon: <KeyIcon />, key: "four" as const },
            ].map((pillar, i) => (
              <FadeIn
                key={pillar.key}
                delay={i * 110}
                className="h-full bg-brand-cream"
              >
                <PillarItem
                  num={`0${i + 1}`}
                  icon={pillar.icon}
                  title={t(`pillars.${pillar.key}.title`)}
                  body={t(`pillars.${pillar.key}.body`)}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ La Fortuna */}
      <section className="container-page py-24 md:py-36">
        <div className="grid items-center gap-14 md:grid-cols-12 md:gap-16">
          <div className="md:col-span-7">
            <div className="grid grid-cols-6 gap-3 md:gap-4">
              <FadeIn
                variant="clip"
                className="relative col-span-4 aspect-[4/5] overflow-hidden rounded-2xl bg-muted"
              >
                <Parallax
                  speed={0.08}
                  className="absolute inset-x-0 -inset-y-[8%]"
                >
                  <Image
                    src={FORTUNA_PRIMARY}
                    alt="Volcán Arenal y montañas de La Fortuna"
                    fill
                    sizes="(min-width: 768px) 40vw, 100vw"
                    className="object-cover"
                  />
                </Parallax>
              </FadeIn>
              <div className="col-span-2 flex flex-col gap-3 md:gap-4">
                <FadeIn
                  variant="clip"
                  delay={150}
                  className="relative aspect-square overflow-hidden rounded-2xl bg-muted"
                >
                  <Image
                    src={FORTUNA_SECONDARY}
                    alt="La Fortuna nature"
                    fill
                    sizes="(min-width: 768px) 20vw, 50vw"
                    className="object-cover"
                  />
                </FadeIn>
                <FadeIn
                  variant="scale"
                  delay={300}
                  className="flex flex-1 flex-col justify-end rounded-2xl bg-brand-green p-5 text-brand-cream"
                >
                  <p className="font-serif text-4xl leading-none md:text-5xl">
                    <CountUp value={t("fortuna.stats.visitorsValue")} />
                  </p>
                  <p className="mt-3 text-[10px] tracking-[0.16em] text-brand-cream/80 uppercase md:text-xs">
                    {t("fortuna.stats.visitors")}
                  </p>
                </FadeIn>
              </div>
            </div>
          </div>

          <FadeIn variant="right" delay={120} className="md:col-span-5">
            <p className="eyebrow">{t("fortuna.eyebrow")}</p>
            <h2 className="font-display text-fluid-h2 mt-5 leading-tight text-balance text-brand-green">
              {t("fortuna.title")}
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>{t("fortuna.p1")}</p>
              <p>{t("fortuna.p2")}</p>
              <p>{t("fortuna.p3")}</p>
            </div>
          </FadeIn>
        </div>

        <div className="mt-24 md:mt-32">
          <FadeIn>
            <h3 className="font-serif text-3xl text-brand-green md:text-4xl">
              {t("fortuna.why.title")}
            </h3>
          </FadeIn>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {(["r1", "r2", "r3", "r4"] as const).map((r, i) => (
              <FadeIn key={r} delay={i * 110} className="h-full">
                <ReasonItem
                  num={`0${i + 1}`}
                  title={t(`fortuna.why.${r}Title`)}
                  body={t(`fortuna.why.${r}`)}
                />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* ----------------------------------------------------------- Stats */}
      <section className="grain relative overflow-hidden bg-brand-green-dark py-16 text-brand-cream md:py-20">
        <div className="container-page grid grid-cols-2 gap-y-10 md:grid-cols-4 md:divide-x md:divide-white/15">
          <Stat
            value={t("fortuna.stats.visitorsValue")}
            label={t("fortuna.stats.visitors")}
          />
          <Stat
            value={t("fortuna.stats.growthValue")}
            label={t("fortuna.stats.growth")}
          />
          <Stat
            value={t("fortuna.stats.appreciationValue")}
            label={t("fortuna.stats.appreciation")}
          />
          <Stat
            value={t("fortuna.stats.airportValue")}
            label={t("fortuna.stats.airport")}
          />
        </div>
      </section>

      {/* -------------------------------------------------------- Featured */}
      <section className="overflow-hidden bg-brand-cream py-24 md:py-32">
        <FadeIn>
          <PropertyCarousel
            properties={properties.slice(0, 8)}
            viewAllLabel={t("featured.viewAll")}
            header={
              <div className="max-w-xl">
                <p className="eyebrow">{t("featured.eyebrow")}</p>
                <h2 className="font-display text-fluid-h2 mt-5 leading-tight text-balance text-brand-green">
                  {t("featured.title")}
                </h2>
              </div>
            }
          />
        </FadeIn>
      </section>

      {/* --------------------------------------------------------- Process */}
      <section className="container-page py-24 md:py-36">
        <FadeIn>
          <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
            <div className="max-w-xl">
              <p className="eyebrow">
                {pick({
                  es: "El proceso",
                  en: "The process",
                  fr: "Le processus",
                  de: "Der Ablauf",
                })}
              </p>
              <h2 className="font-display text-fluid-h2 mt-5 leading-tight text-balance text-brand-green">
                {pick({
                  es: "Comprar aquí, paso a paso",
                  en: "Buying here, step by step",
                  fr: "Acheter ici, étape par étape",
                  de: "Hier kaufen, Schritt für Schritt",
                })}
              </h2>
            </div>
            <Link href="/guide" className="btn btn-outline-dark">
              {pick({
                es: "Ver la guía completa",
                en: "Read the full guide",
                fr: "Lire le guide complet",
                de: "Zum vollständigen Ratgeber",
              })}
              <ArrowRight className="btn-arrow" />
            </Link>
          </div>
        </FadeIn>

        <ol className="relative mt-16 grid gap-10 md:grid-cols-4 md:gap-8">
          <FadeIn
            variant="fade"
            className="absolute top-6 right-0 left-0 hidden h-px bg-gradient-to-r from-brand-gold via-brand-gold/40 to-transparent md:block"
          >
            <span />
          </FadeIn>
          {steps.map((step, i) => (
            <FadeIn
              as="li"
              key={step.title}
              delay={i * 140}
              className="relative"
            >
              <span className="relative z-10 flex h-12 w-12 items-center justify-center rounded-full border border-brand-gold bg-background font-serif text-lg text-brand-gold-dark">
                {i + 1}
              </span>
              <h3 className="mt-6 font-serif text-2xl text-brand-green">
                {step.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {step.body}
              </p>
            </FadeIn>
          ))}
        </ol>
      </section>

      {/* ---------------------------------------------------------- Agents */}
      <section className="bg-brand-cream py-24 md:py-36">
        <div className="container-page grid gap-14 md:grid-cols-2 md:items-center md:gap-20">
          <div className="relative">
            <div
              className="absolute -right-4 -bottom-4 hidden h-full w-full rounded-2xl border border-brand-gold/60 md:block"
              aria-hidden="true"
            />
            <FadeIn
              variant="clip"
              className="relative aspect-[4/5] overflow-hidden rounded-2xl bg-muted"
            >
              <Image
                src={LIFESTYLE_IMG}
                alt="Ella y Dayana, fundadoras de EllaDay Homes"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </FadeIn>
          </div>
          <FadeIn variant="right" delay={120}>
            <p className="eyebrow">{t("agents.eyebrow")}</p>
            <h2 className="font-display text-fluid-h2 mt-5 leading-tight text-balance text-brand-green">
              {t("agents.title")}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {t("agents.intro")}
            </p>
            <div className="mt-10 space-y-8">
              <AgentMini
                name="Dayana Sibaja"
                role={t("agents.dayana.role")}
                bio={t("agents.dayana.bio")}
              />
              <AgentMini
                name="Ella Calero"
                role={t("agents.ella.role")}
                bio={t("agents.ella.bio")}
              />
            </div>
            <div className="mt-10">
              <Link href="/about" className="btn btn-outline-dark">
                {pick({
                  es: "Conocer más sobre nosotras",
                  en: "More about us",
                  fr: "En savoir plus sur nous",
                  de: "Mehr über uns",
                })}
                <ArrowRight className="btn-arrow" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <NewsletterCta />

      {/* ------------------------------------------------------- Final CTA */}
      <section className="grain relative overflow-hidden bg-brand-ink py-28 text-brand-cream md:py-40">
        <div className="absolute inset-0 -z-10">
          <Parallax speed={-0.12} className="absolute inset-x-0 -inset-y-[15%]">
            <Image
              src={FORTUNA_PRIMARY}
              alt=""
              fill
              sizes="100vw"
              className="object-cover"
            />
          </Parallax>
          <div className="absolute inset-0 bg-brand-ink/80" />
        </div>
        <div className="container-narrow text-center">
          <FadeIn>
            <p className="eyebrow eyebrow-center">
              {pick({
                es: "Hablemos",
                en: "Let's talk",
                fr: "Parlons-en",
                de: "Sprechen wir",
              })}
            </p>
            <h2 className="font-display text-fluid-h1 mt-6 leading-[1.05] text-balance text-white">
              {pick({
                es: "¿Buscas propiedad en La Fortuna?",
                en: "Looking for property in La Fortuna?",
                fr: "Vous cherchez une propriété à La Fortuna ?",
                de: "Suchen Sie eine Immobilie in La Fortuna?",
              })}
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-brand-cream/80 md:text-lg">
              {pick({
                es: "Cuéntanos qué buscas y te mostramos lo que tenemos disponible. Sin compromiso.",
                en: "Tell us what you're looking for and we'll show you what's available. No commitment.",
                fr: "Dites-nous ce que vous cherchez et nous vous montrerons ce qui est disponible. Sans engagement.",
                de: "Sagen Sie uns, was Sie suchen, und wir zeigen Ihnen, was verfügbar ist. Unverbindlich.",
              })}
            </p>
            <div className="mt-10 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={whatsappLink(whatsappMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-gold"
              >
                <WhatsAppIcon className="h-4 w-4" />
                WhatsApp · {SITE.whatsappDisplay}
              </a>
              <Link href="/contact" className="btn btn-outline-light">
                {t("contact.title")}
                <ArrowRight className="btn-arrow" />
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

function HeroFact({ value, label }: { value: string; label: string }) {
  return (
    <div className="flex flex-col gap-1 md:flex-row md:items-center md:gap-3">
      <dd className="font-serif text-3xl leading-none text-white md:text-4xl">
        <CountUp value={value} duration={1600} />
      </dd>
      <dt className="max-w-[7rem] text-[10px] leading-snug tracking-[0.14em] text-white/65 uppercase md:text-[11px]">
        {label}
      </dt>
    </div>
  )
}

function PillarItem({
  num,
  icon,
  title,
  body,
}: {
  num: string
  icon: React.ReactNode
  title: string
  body: string
}) {
  return (
    <div className="group flex h-full flex-col gap-8 p-8 transition-colors duration-500 hover:bg-white md:p-9">
      <div className="flex items-start justify-between">
        <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-green/8 text-brand-green transition-all duration-500 group-hover:-translate-y-1 group-hover:bg-brand-green group-hover:text-brand-cream">
          {icon}
        </div>
        <span className="font-serif text-sm text-brand-gold">{num}</span>
      </div>
      <div>
        <h3 className="font-serif text-xl text-brand-green">{title}</h3>
        <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
          {body}
        </p>
      </div>
    </div>
  )
}

function ReasonItem({
  num,
  title,
  body,
}: {
  num: string
  title: string
  body: string
}) {
  return (
    <div className="group relative h-full overflow-hidden rounded-2xl border border-border bg-brand-cream/60 p-7 transition-all duration-500 hover:-translate-y-1 hover:border-brand-gold/60 hover:bg-brand-cream hover:shadow-[0_24px_50px_-30px_rgba(28,41,33,0.45)]">
      <span
        className="absolute top-0 left-0 h-[3px] w-full origin-left scale-x-0 bg-brand-gold transition-transform duration-700 ease-out group-hover:scale-x-100"
        aria-hidden="true"
      />
      <p className="font-serif text-4xl text-brand-gold/70 transition-colors duration-500 group-hover:text-brand-gold">
        {num}
      </p>
      <h4 className="mt-5 font-serif text-xl text-brand-green">{title}</h4>
      <p className="mt-2.5 text-sm leading-relaxed text-muted-foreground">
        {body}
      </p>
    </div>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="px-2 text-center md:px-8">
      <p className="font-serif text-5xl leading-none text-brand-cream md:text-6xl">
        <CountUp value={value} />
      </p>
      <p className="mt-4 text-[11px] tracking-[0.18em] text-brand-cream/65 uppercase">
        {label}
      </p>
    </div>
  )
}

function AgentMini({
  name,
  role,
  bio,
}: {
  name: string
  role: string
  bio: string
}) {
  return (
    <div className="border-l-2 border-brand-gold pl-5">
      <h3 className="font-serif text-2xl text-brand-green">{name}</h3>
      <p className="mt-0.5 text-xs tracking-[0.16em] text-brand-gold-dark uppercase">
        {role}
      </p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
        {bio}
      </p>
    </div>
  )
}

function HouseIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 11l9-7 9 7v9a1 1 0 01-1 1h-5v-7h-6v7H4a1 1 0 01-1-1v-9z"
      />
    </svg>
  )
}

function LeafIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M5 21c0-10 5-16 16-16-1 9-6 16-16 16zM5 21c4-4 7-7 11-9"
      />
    </svg>
  )
}

function HandIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      className="h-6 w-6"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3v4M12 7c-2 0-3 1-3 3v6a4 4 0 004 4h2a4 4 0 004-4v-4M12 7c2 0 3 1 3 3M9 10v5M6 12v3"
      />
    </svg>
  )
}

function KeyIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.2"
      className="h-6 w-6"
    >
      <circle cx="8" cy="12" r="4" />
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 12h10M18 12v3M21 12v2"
      />
    </svg>
  )
}
