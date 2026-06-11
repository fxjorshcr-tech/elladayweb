"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n/provider"
import { FadeIn } from "@/components/fade-in"

const HERO_IMG =
  "https://images.unsplash.com/photo-1505691938895-1758d7feb511?auto=format&fit=crop&w=2400&q=80"
const ANIMALS_IMG =
  "https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?auto=format&fit=crop&w=2000&q=80"
const STORY_IMG =
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=2000&q=80"

export default function AboutPage() {
  const { t, pick } = useLanguage()

  const valueKeys = [
    "trust",
    "closeness",
    "elegance",
    "nature",
    "commitment",
    "growth",
  ] as const

  return (
    <>
      <section className="container-page py-20 md:py-28">
        <FadeIn>
          <p className="text-xs tracking-[0.22em] text-brand-gold uppercase">
            {t("nav.about")}
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-tight text-balance text-brand-green md:text-6xl">
            {t("about.title")}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {t("about.subtitle")}
          </p>
        </FadeIn>
      </section>

      <section className="container-page pb-24">
        <FadeIn>
          <div className="relative aspect-[16/9] overflow-hidden rounded-sm bg-muted">
            <Image
              src={HERO_IMG}
              alt="Home with lush surroundings"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
        </FadeIn>
      </section>

      <section className="container-page pb-24">
        <div className="grid gap-12 md:grid-cols-12 md:gap-16">
          <FadeIn className="md:col-span-7">
            <h2 className="font-serif text-4xl text-brand-green md:text-5xl">
              {t("about.storyTitle")}
            </h2>
            <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
              <p>{t("about.story1")}</p>
              <p>{t("about.story2")}</p>
              <p className="font-serif text-2xl text-brand-green italic md:text-3xl">
                {t("about.story3")}
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={120} className="md:col-span-5">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-muted">
              <Image
                src={STORY_IMG}
                alt="Living space in La Fortuna"
                fill
                sizes="(min-width: 768px) 40vw, 100vw"
                className="object-cover"
              />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="bg-brand-cream py-24 md:py-28">
        <div className="container-page">
          <FadeIn>
            <p className="text-xs tracking-[0.22em] text-brand-gold uppercase">
              {pick({ es: "Esencia", en: "Essence", fr: "Essence", de: "Essenz" })}
            </p>
            <h2 className="mt-4 max-w-3xl font-serif text-4xl leading-tight text-balance text-brand-green md:text-5xl">
              {t("about.essenceTitle")}
            </h2>
            <p className="mt-6 max-w-3xl text-base leading-relaxed text-muted-foreground">
              {t("about.essenceIntro")}
            </p>
          </FadeIn>

          <FadeIn delay={100}>
            <div className="mt-12 flex flex-wrap gap-3">
              {(
                [
                  "essenceItems.one",
                  "essenceItems.two",
                  "essenceItems.three",
                  "essenceItems.four",
                  "essenceItems.five",
                ] as const
              ).map((k) => (
                <span
                  key={k}
                  className="inline-flex items-center rounded-full border border-brand-sage bg-background px-5 py-2 text-sm tracking-wide text-brand-green"
                >
                  {t(`about.${k}` as const)}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="container-page py-24 md:py-28">
        <FadeIn>
          <h2 className="font-serif text-4xl text-brand-green md:text-5xl">
            {t("about.valuesTitle")}
          </h2>
        </FadeIn>
        <div className="mt-14 grid gap-10 md:grid-cols-2 md:gap-x-16 lg:grid-cols-3">
          {valueKeys.map((k, i) => (
            <FadeIn key={k} delay={i * 80}>
              <div className="border-t border-brand-gold pt-6">
                <h3 className="font-serif text-2xl text-brand-green">
                  {t(`about.values.${k}.title` as const)}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {t(`about.values.${k}.body` as const)}
                </p>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      <section className="container-page pb-24">
        <div className="grid gap-12 md:grid-cols-2 md:gap-16">
          <FadeIn>
            <div className="rounded-sm bg-brand-sage p-10 text-brand-cream md:p-14">
              <p className="text-xs tracking-[0.22em] text-brand-cream/80 uppercase">
                {t("about.missionTitle")}
              </p>
              <p className="mt-6 font-serif text-2xl leading-relaxed md:text-3xl">
                {t("about.mission")}
              </p>
            </div>
          </FadeIn>
          <FadeIn delay={120}>
            <div className="rounded-sm bg-brand-green p-10 text-brand-cream md:p-14">
              <p className="text-xs tracking-[0.22em] text-brand-cream/80 uppercase">
                {t("about.visionTitle")}
              </p>
              <p className="mt-6 font-serif text-2xl leading-relaxed md:text-3xl">
                {t("about.vision")}
              </p>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="container-page pb-24 md:pb-32">
        <div className="grid gap-12 md:grid-cols-12 md:items-center md:gap-16">
          <FadeIn className="md:col-span-6">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-muted">
              <Image
                src={ANIMALS_IMG}
                alt="Dog in nature"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </FadeIn>
          <FadeIn delay={120} className="md:col-span-6">
            <p className="text-xs tracking-[0.22em] text-brand-gold uppercase">
              {pick({
                es: "Algo personal",
                en: "Something personal",
                fr: "Quelque chose de personnel",
                de: "Etwas Persönliches",
              })}
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-balance text-brand-green md:text-5xl">
              {t("about.animalsTitle")}
            </h2>
            <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
              <p>{t("about.animals1")}</p>
              <p>{t("about.animals2")}</p>
            </div>
            <div className="mt-8 flex items-center gap-3 text-sm text-brand-green">
              <PawIcon />
              <span className="tracking-wide">
                {pick({
                  es: "Pet-friendly",
                  en: "Pet-friendly",
                  fr: "Acceptent les animaux",
                  de: "Tierfreundlich",
                })}
              </span>
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="container-page py-24 md:py-32">
        <FadeIn>
          <div className="mx-auto max-w-2xl text-center">
            <p className="text-xs tracking-[0.22em] text-brand-gold uppercase">
              {t("agents.eyebrow")}
            </p>
            <h2 className="mt-4 font-serif text-4xl leading-tight text-balance text-brand-green md:text-5xl">
              {t("agents.title")}
            </h2>
            <p className="mt-6 text-base leading-relaxed text-muted-foreground">
              {t("agents.intro")}
            </p>
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-16">
          <FadeIn delay={120}>
            <AgentLong
              name="Dayana Sibaja"
              role={t("agents.dayana.role")}
              bio={t("agents.dayana.bio")}
              extra={pick({
                es: "Bilingüe español-inglés. Atiende sobre todo propiedades residenciales y fincas, y conoce bien los trámites de compra en la zona.",
                en: "Bilingual Spanish-English. She mainly handles residential properties and farms, and knows the local buying process well.",
                fr: "Bilingue espagnol-anglais. Elle s'occupe surtout des biens résidentiels et des fincas, et connaît bien les démarches d'achat dans la région.",
                de: "Zweisprachig Spanisch-Englisch. Sie betreut vor allem Wohnimmobilien und Höfe und kennt die Kaufabläufe in der Region gut.",
              })}
              image="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/elladay/Day.png"
            />
          </FadeIn>
          <FadeIn delay={240}>
            <AgentLong
              name="Ella Calero"
              role={t("agents.ella.role")}
              bio={t("agents.ella.bio")}
              extra={pick({
                es: "Bilingüe español-inglés. Se enfoca en inversión turística y lotes, y acompaña a sus clientes desde la primera visita hasta el cierre.",
                en: "Bilingual Spanish-English. She focuses on tourism investment and lots, and works with her clients from the first visit to closing.",
                fr: "Bilingue espagnol-anglais. Elle se concentre sur l'investissement touristique et les terrains, et suit ses clients de la première visite à la signature.",
                de: "Zweisprachig Spanisch-Englisch. Sie konzentriert sich auf Tourismusinvestitionen und Grundstücke und begleitet ihre Kunden von der ersten Besichtigung bis zum Abschluss.",
              })}
              image="https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/elladay/Ella.png"
            />
          </FadeIn>
        </div>
      </section>

      <section className="bg-brand-green py-24 text-brand-cream md:py-28">
        <div className="container-narrow text-center">
          <FadeIn>
            <h2 className="font-serif text-4xl leading-tight text-balance md:text-5xl">
              {pick({
                es: "¿Quieres conocernos?",
                en: "Want to meet us?",
                fr: "Envie de nous rencontrer ?",
                de: "Möchten Sie uns kennenlernen?",
              })}
            </h2>
            <p className="mt-6 text-brand-cream/80">
              {pick({
                es: "Podemos reunirnos en La Fortuna o hacer una videollamada, como te quede mejor.",
                en: "We can meet in La Fortuna or do a video call, whatever works best for you.",
                fr: "Nous pouvons nous voir à La Fortuna ou faire un appel vidéo, comme cela vous arrange.",
                de: "Wir können uns in La Fortuna treffen oder einen Videoanruf machen, ganz wie es Ihnen passt.",
              })}
            </p>
            <div className="mt-10">
              <Link
                href="/contact"
                className="inline-flex items-center rounded-full bg-brand-gold px-7 py-3.5 text-sm tracking-wide text-white transition-colors hover:bg-brand-gold-dark"
              >
                {t("contact.title")} →
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

function AgentLong({
  name,
  role,
  bio,
  extra,
  image,
}: {
  name: string
  role: string
  bio: string
  extra: string
  image: string
}) {
  return (
    <article className="group">
      <div className="relative aspect-[3/4] overflow-hidden rounded-sm bg-muted">
        <Image
          src={image}
          alt={name}
          fill
          sizes="(min-width: 768px) 50vw, 100vw"
          className="object-cover grayscale transition-all duration-700 group-hover:scale-105 group-hover:grayscale-0"
        />
      </div>
      <div className="mt-6 space-y-3">
        <h3 className="font-serif text-3xl text-brand-green">{name}</h3>
        <p className="text-xs tracking-[0.16em] text-brand-gold uppercase">{role}</p>
        <p className="text-sm leading-relaxed text-muted-foreground">{bio}</p>
        <p className="text-sm leading-relaxed text-muted-foreground">{extra}</p>
      </div>
    </article>
  )
}

function PawIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="currentColor"
      className="h-5 w-5 text-brand-gold"
      aria-hidden="true"
    >
      <ellipse cx="6" cy="10" rx="1.8" ry="2.4" />
      <ellipse cx="10" cy="6" rx="1.8" ry="2.4" />
      <ellipse cx="14" cy="6" rx="1.8" ry="2.4" />
      <ellipse cx="18" cy="10" rx="1.8" ry="2.4" />
      <path d="M12 11c3 0 6 2.5 6 5.5 0 1.7-1.3 3-3 3-1 0-1.7-.4-2.3-.8-.4-.3-.7-.5-.7-.5s-.3.2-.7.5c-.6.4-1.3.8-2.3.8-1.7 0-3-1.3-3-3 0-3 3-5.5 6-5.5z" />
    </svg>
  )
}
