"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n/provider"
import { FadeIn } from "@/components/fade-in"

const ARENAL_IMG =
  "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/Arenal%20Volcano.webp"

export default function AboutPage() {
  const { t, pick } = useLanguage()

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
              src={ARENAL_IMG}
              alt="Arenal landscape"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>
        </FadeIn>
      </section>

      <section className="container-narrow pb-24">
        <FadeIn>
          <h2 className="font-serif text-4xl text-brand-green md:text-5xl">
            {t("about.storyTitle")}
          </h2>
          <div className="mt-8 space-y-6 text-base leading-relaxed text-muted-foreground">
            <p>{t("about.story1")}</p>
            <p>{t("about.story2")}</p>
          </div>
        </FadeIn>
      </section>

      <section className="bg-brand-cream py-24 md:py-32">
        <div className="container-page">
          <FadeIn>
            <h2 className="font-serif text-4xl text-brand-green md:text-5xl">
              {t("about.valuesTitle")}
            </h2>
          </FadeIn>
          <div className="mt-14 grid gap-10 md:grid-cols-3">
            {[
              { title: t("about.value1Title"), body: t("about.value1") },
              { title: t("about.value2Title"), body: t("about.value2") },
              { title: t("about.value3Title"), body: t("about.value3") },
            ].map((v, i) => (
              <FadeIn key={v.title} delay={i * 120}>
                <div className="border-t border-brand-gold pt-6">
                  <h3 className="font-serif text-2xl text-brand-green">{v.title}</h3>
                  <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
                    {v.body}
                  </p>
                </div>
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
            <AgentLong
              name="Dayana Sibaja"
              role={t("agents.dayana.role")}
              bio={t("agents.dayana.bio")}
              extra={pick({
                es: "Bilingüe español-inglés. Especializada en propiedades residenciales y fincas productivas. Apasionada por el desarrollo sostenible y la conservación del patrimonio local.",
                en: "Bilingual Spanish-English. Specialized in residential properties and productive farms. Passionate about sustainable development and conservation of local heritage.",
              })}
              image="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=1200&q=80"
            />
          </FadeIn>
          <FadeIn delay={240}>
            <AgentLong
              name="Ella Calero"
              role={t("agents.ella.role")}
              bio={t("agents.ella.bio")}
              extra={pick({
                es: "Bilingüe español-inglés. Enfocada en inversiones turísticas, lotes de desarrollo y compradores internacionales. Acompaña a sus clientes desde la primera visita hasta la escritura.",
                en: "Bilingual Spanish-English. Focused on tourism investments, development lots and international buyers. Accompanies clients from the first visit through closing.",
              })}
              image="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=1200&q=80"
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
              })}
            </h2>
            <p className="mt-6 text-brand-cream/80">
              {pick({
                es: "Tomemos un café en La Fortuna o conversemos por videollamada — lo que te quede mejor.",
                en: "Let's grab a coffee in La Fortuna or chat on a video call — whatever works for you.",
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
