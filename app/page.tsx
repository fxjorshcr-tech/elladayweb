"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n/provider"
import { properties } from "@/lib/properties"
import { PropertyCard } from "@/components/property-card"
import { FadeIn } from "@/components/fade-in"
import { SITE, whatsappLink } from "@/lib/constants"

const ARENAL_IMG =
  "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/Arenal%20Volcano.webp"

export default function HomePage() {
  const { t, pick } = useLanguage()

  return (
    <>
      <section className="relative -mt-16 flex min-h-[88vh] items-center md:-mt-20">
        <div className="absolute inset-0 -z-10">
          <Image
            src={ARENAL_IMG}
            alt="Arenal Volcano"
            fill
            priority
            sizes="100vw"
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-black/20 to-black/60" />
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

      <section className="container-page py-24 md:py-32">
        <div className="grid items-center gap-12 md:grid-cols-2 md:gap-20">
          <FadeIn>
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm bg-muted">
              <Image
                src={ARENAL_IMG}
                alt="Arenal Volcano landscape"
                fill
                sizes="(min-width: 768px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <div>
              <p className="text-xs tracking-[0.22em] text-brand-gold uppercase">
                {t("fortuna.eyebrow")}
              </p>
              <h2 className="mt-4 font-serif text-4xl leading-tight text-balance text-brand-green md:text-5xl">
                {t("fortuna.title")}
              </h2>
              <div className="mt-8 space-y-5 text-base leading-relaxed text-muted-foreground">
                <p>{t("fortuna.p1")}</p>
                <p>{t("fortuna.p2")}</p>
              </div>

              <div className="mt-10 grid grid-cols-3 gap-4 border-t border-border pt-8">
                <Stat
                  value={t("fortuna.stats.visitorsValue")}
                  label={t("fortuna.stats.visitors")}
                />
                <Stat
                  value={t("fortuna.stats.growthValue")}
                  label={t("fortuna.stats.growth")}
                />
                <Stat
                  value={t("fortuna.stats.airportValue")}
                  label={t("fortuna.stats.airport")}
                />
              </div>
            </div>
          </FadeIn>
        </div>
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
            <AgentCard
              name="Dayana Sibaja"
              role={t("agents.dayana.role")}
              bio={t("agents.dayana.bio")}
              image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80"
            />
          </FadeIn>
          <FadeIn delay={240}>
            <AgentCard
              name="Ella Calero"
              role={t("agents.ella.role")}
              bio={t("agents.ella.bio")}
              image="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1200&q=80"
            />
          </FadeIn>
        </div>
      </section>

      <section className="bg-brand-green py-24 text-brand-cream md:py-32">
        <div className="container-narrow text-center">
          <FadeIn>
            <h2 className="font-serif text-4xl leading-tight text-balance md:text-5xl">
              {pick({
                es: "¿Listo para encontrar tu lugar en La Fortuna?",
                en: "Ready to find your place in La Fortuna?",
              })}
            </h2>
            <p className="mt-6 text-brand-cream/80">
              {pick({
                es: "Escríbenos hoy. Sin compromiso, sin presión — solo conversamos.",
                en: "Reach out today. No pressure, no commitment — just a conversation.",
              })}
            </p>
            <div className="mt-10 flex flex-wrap justify-center gap-3">
              <a
                href={whatsappLink(
                  pick({
                    es: `Hola, me gustaría hablar con ustedes sobre propiedades en La Fortuna.`,
                    en: `Hi, I'd like to talk to you about properties in La Fortuna.`,
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

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <p className="font-serif text-3xl text-brand-green md:text-4xl">{value}</p>
      <p className="mt-1 text-xs tracking-wide text-muted-foreground">{label}</p>
    </div>
  )
}

function AgentCard({
  name,
  role,
  bio,
  image,
}: {
  name: string
  role: string
  bio: string
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
      </div>
    </article>
  )
}
