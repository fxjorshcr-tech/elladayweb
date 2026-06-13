"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n/provider"
import { properties } from "@/lib/properties"
import { PropertyCard } from "@/components/property-card"
import { FadeIn } from "@/components/fade-in"
import { SITE, whatsappLink } from "@/lib/constants"

const STORAGE = "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos"
const HERO_IMG = `${STORAGE}/Arenal%20Volcano.webp`
const LIFESTYLE_IMG = `${STORAGE}/WhatsApp%20Image%202026-06-13%20at%202.27.56%20PM.jpeg`
const FORTUNA_PRIMARY = `${STORAGE}/arenal-volcano-mountains-sky-costa-rica.webp`
const FORTUNA_SECONDARY =
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=80"

export default function HomePage() {
  const { t, pick } = useLanguage()

  return (
    <>
      <section className="relative -mt-16 flex min-h-[88vh] items-center md:-mt-20">
        <div className="absolute inset-0 -z-10">
          <Image
            src={HERO_IMG}
            alt="Volcán Arenal, La Fortuna"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brand-green/40 via-brand-green/20 to-brand-green/60" />
        </div>

        <div className="container-page py-32 text-white md:py-40">
          <FadeIn>
            <p className="text-[11px] tracking-[0.28em] text-white/90 uppercase">
              {t("hero.eyebrow")}
            </p>
          </FadeIn>
          <FadeIn delay={120}>
            <h1 className="mt-6 max-w-4xl font-serif text-5xl leading-[1.05] text-balance text-white md:text-7xl">
              {t("hero.title")}
            </h1>
          </FadeIn>
          <FadeIn delay={240}>
            <p className="mt-8 max-w-xl text-lg leading-relaxed text-white/85">
              {t("hero.subtitle")}
            </p>
          </FadeIn>
          <FadeIn delay={360}>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link
                href="/properties"
                className="inline-flex items-center rounded-full bg-brand-cream px-7 py-3.5 text-sm tracking-wide text-brand-green transition-colors hover:bg-white"
              >
                {t("hero.ctaProperties")} →
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-white/60 px-7 py-3.5 text-sm tracking-wide text-white transition-colors hover:bg-white/10"
              >
                {t("hero.ctaContact")}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-brand-cream py-20 md:py-24">
        <div className="container-page">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-4">
            <PillarItem
              icon={<HouseIcon />}
              title={t("pillars.one.title")}
              body={t("pillars.one.body")}
            />
            <PillarItem
              icon={<LeafIcon />}
              title={t("pillars.two.title")}
              body={t("pillars.two.body")}
            />
            <PillarItem
              icon={<HandIcon />}
              title={t("pillars.three.title")}
              body={t("pillars.three.body")}
            />
            <PillarItem
              icon={<KeyIcon />}
              title={t("pillars.four.title")}
              body={t("pillars.four.body")}
            />
          </div>
        </div>
      </section>

      <section className="container-page py-24 md:py-32">
        <div className="grid items-center gap-12 md:grid-cols-12 md:gap-16">
          <FadeIn className="md:col-span-7">
            <div className="grid grid-cols-6 gap-3">
              <div className="relative col-span-4 aspect-[4/5] overflow-hidden rounded-sm bg-muted">
                <Image
                  src={FORTUNA_PRIMARY}
                  alt="Volcán Arenal y montañas de La Fortuna"
                  fill
                  sizes="(min-width: 768px) 40vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="col-span-2 flex flex-col gap-3">
                <div className="relative aspect-square overflow-hidden rounded-sm bg-muted">
                  <Image
                    src={FORTUNA_SECONDARY}
                    alt="La Fortuna nature"
                    fill
                    sizes="(min-width: 768px) 20vw, 50vw"
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col justify-center rounded-sm bg-brand-sage p-5 text-brand-cream">
                  <p className="font-serif text-3xl leading-tight md:text-4xl">+1M</p>
                  <p className="mt-2 text-xs tracking-[0.16em] uppercase">
                    {t("fortuna.stats.visitors")}
                  </p>
                </div>
              </div>
            </div>
          </FadeIn>

          <FadeIn delay={120} className="md:col-span-5">
            <p className="text-xs tracking-[0.22em] text-brand-gold uppercase">
              {t("fortuna.eyebrow")}
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-balance text-brand-green md:text-5xl">
              {t("fortuna.title")}
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>{t("fortuna.p1")}</p>
              <p>{t("fortuna.p2")}</p>
              <p>{t("fortuna.p3")}</p>
            </div>
          </FadeIn>
        </div>

        <FadeIn>
          <div className="mt-20 border-t border-border pt-12 md:mt-24">
            <h3 className="font-serif text-3xl text-brand-green md:text-4xl">
              {t("fortuna.why.title")}
            </h3>
            <div className="mt-10 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
              <ReasonItem
                num="01"
                title={t("fortuna.why.r1Title")}
                body={t("fortuna.why.r1")}
              />
              <ReasonItem
                num="02"
                title={t("fortuna.why.r2Title")}
                body={t("fortuna.why.r2")}
              />
              <ReasonItem
                num="03"
                title={t("fortuna.why.r3Title")}
                body={t("fortuna.why.r3")}
              />
              <ReasonItem
                num="04"
                title={t("fortuna.why.r4Title")}
                body={t("fortuna.why.r4")}
              />
            </div>
          </div>
        </FadeIn>

        <FadeIn delay={120}>
          <div className="mt-16 grid grid-cols-2 gap-4 border-t border-border pt-10 md:grid-cols-4">
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
        </FadeIn>
      </section>

      <section className="bg-brand-cream py-24 md:py-32">
        <div className="container-page">
          <FadeIn>
            <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
              <div className="max-w-xl">
                <p className="text-xs tracking-[0.22em] text-brand-gold uppercase">
                  {t("featured.eyebrow")}
                </p>
                <h2 className="mt-4 font-serif text-4xl leading-tight text-balance text-brand-green md:text-5xl">
                  {t("featured.title")}
                </h2>
              </div>
              <Link
                href="/properties"
                className="text-sm tracking-wide text-brand-green underline-offset-4 hover:underline"
              >
                {t("featured.viewAll")} →
              </Link>
            </div>
          </FadeIn>

          <div className="mt-14 grid gap-10 md:grid-cols-3 md:gap-8">
            {properties.map((p, i) => (
              <FadeIn key={p.slug} delay={i * 120}>
                <PropertyCard property={p} priority={i === 0} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      <section className="container-page py-24 md:py-32">
        <div className="grid gap-12 md:grid-cols-2 md:items-center md:gap-20">
          <FadeIn>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-muted">
              <Image
                src={LIFESTYLE_IMG}
                alt="Ella y Dayana, fundadoras de EllaDay Homes"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </FadeIn>
          <FadeIn delay={120}>
            <p className="text-xs tracking-[0.22em] text-brand-gold uppercase">
              {t("agents.eyebrow")}
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-balance text-brand-green md:text-5xl">
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
              <Link
                href="/about"
                className="text-sm tracking-wide text-brand-green underline-offset-4 hover:underline"
              >
                {pick({
                  es: "Conocer más sobre nosotras",
                  en: "More about us",
                  fr: "En savoir plus sur nous",
                  de: "Mehr über uns",
                })}{" "}
                →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-brand-green py-24 text-brand-cream md:py-32">
        <div className="container-narrow text-center">
          <FadeIn>
            <h2 className="font-serif text-4xl leading-tight text-balance md:text-5xl">
              {pick({
                es: "¿Buscas propiedad en La Fortuna?",
                en: "Looking for property in La Fortuna?",
                fr: "Vous cherchez une propriété à La Fortuna ?",
                de: "Suchen Sie eine Immobilie in La Fortuna?",
              })}
            </h2>
            <p className="mt-6 text-brand-cream/80">
              {pick({
                es: "Cuéntanos qué buscas y te mostramos lo que tenemos disponible. Sin compromiso.",
                en: "Tell us what you're looking for and we'll show you what's available. No commitment.",
                fr: "Dites-nous ce que vous cherchez et nous vous montrerons ce qui est disponible. Sans engagement.",
                de: "Sagen Sie uns, was Sie suchen, und wir zeigen Ihnen, was verfügbar ist. Unverbindlich.",
              })}
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a
                href={whatsappLink(
                  pick({
                    es: "Hola, me gustaría hablar con ustedes sobre propiedades en La Fortuna.",
                    en: "Hi, I'd like to talk to you about properties in La Fortuna.",
                    fr: "Bonjour, j'aimerais discuter avec vous des propriétés à La Fortuna.",
                    de: "Hallo, ich würde gern mit Ihnen über Immobilien in La Fortuna sprechen.",
                  })
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-full bg-brand-gold px-7 py-3.5 text-sm tracking-wide text-white transition-colors hover:bg-brand-gold-dark"
              >
                WhatsApp · {SITE.whatsappDisplay}
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full border border-brand-cream/40 px-7 py-3.5 text-sm tracking-wide text-brand-cream transition-colors hover:bg-brand-cream/10"
              >
                {t("contact.title")}
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

function PillarItem({
  icon,
  title,
  body,
}: {
  icon: React.ReactNode
  title: string
  body: string
}) {
  return (
    <div className="flex flex-col items-start gap-4">
      <div className="text-brand-gold">{icon}</div>
      <div>
        <h3 className="font-serif text-xl text-brand-green">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
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
    <div>
      <p className="font-serif text-2xl text-brand-gold">{num}</p>
      <h4 className="mt-3 font-serif text-xl text-brand-green">{title}</h4>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{body}</p>
    </div>
  )
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-serif text-3xl text-brand-green md:text-4xl">{value}</p>
      <p className="mt-1 text-xs tracking-wide text-muted-foreground">{label}</p>
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
      <p className="text-xs tracking-[0.16em] text-brand-gold uppercase">{role}</p>
      <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{bio}</p>
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
      className="h-8 w-8"
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
      className="h-8 w-8"
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
      className="h-8 w-8"
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
      className="h-8 w-8"
    >
      <circle cx="8" cy="12" r="4" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 12h10M18 12v3M21 12v2" />
    </svg>
  )
}
