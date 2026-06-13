"use client"

import { useLanguage } from "@/lib/i18n/provider"
import { ContactForm } from "@/components/contact-form"
import { FadeIn } from "@/components/fade-in"
import { SITE, whatsappLink } from "@/lib/constants"

export default function ContactPage() {
  const { t, pick } = useLanguage()

  return (
    <section className="container-page py-20 md:py-28">
      <div className="grid gap-16 md:grid-cols-5 md:gap-20">
        <FadeIn className="md:col-span-2">
          <p className="text-xs tracking-[0.22em] text-brand-gold uppercase">
            {t("nav.contact")}
          </p>
          <h1 className="mt-4 font-serif text-5xl leading-tight text-balance text-brand-green md:text-6xl">
            {t("contact.title")}
          </h1>
          <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
            {t("contact.subtitle")}
          </p>

          <div className="mt-12 space-y-6 border-t border-border pt-10">
            <h2 className="text-xs tracking-[0.22em] text-brand-gold uppercase">
              {t("contact.directContact")}
            </h2>

            <ContactLine
              label="WhatsApp"
              value={SITE.whatsappDisplay}
              href={whatsappLink(
                pick({
                  es: "Hola, vengo del sitio EllaDay Homes.",
                  en: "Hi, I'm coming from the EllaDay Homes site.",
                  fr: "Bonjour, je viens du site EllaDay Homes.",
                  de: "Hallo, ich komme von der EllaDay Homes Website.",
                })
              )}
              external
            />
            <ContactLine
              label={pick({
                es: "Ubicación",
                en: "Location",
                fr: "Emplacement",
                de: "Standort",
              })}
              value={SITE.location}
            />
            <ContactLine
              label={pick({
                es: "Horario",
                en: "Hours",
                fr: "Horaires",
                de: "Öffnungszeiten",
              })}
              value={pick({
                es: "Lunes a sábado · 8:00 — 18:00",
                en: "Monday to Saturday · 8:00 AM — 6:00 PM",
                fr: "Du lundi au samedi · 8 h — 18 h",
                de: "Montag bis Samstag · 8:00 — 18:00 Uhr",
              })}
            />
          </div>
        </FadeIn>

        <FadeIn delay={120} className="md:col-span-3">
          <div className="rounded-sm border border-border bg-brand-cream p-8 md:p-12">
            <h2 className="font-serif text-3xl text-brand-green">
              {pick({
                es: "Envíanos un mensaje",
                en: "Send us a message",
                fr: "Envoyez-nous un message",
                de: "Senden Sie uns eine Nachricht",
              })}
            </h2>
            <p className="mt-2 text-sm text-muted-foreground">
              {pick({
                es: "Completa el formulario y lo enviaremos por WhatsApp para responderte cuanto antes.",
                en: "Fill in the form and we'll send it via WhatsApp so we can reply as soon as possible.",
                fr: "Remplissez le formulaire ; nous l'enverrons par WhatsApp pour vous répondre au plus vite.",
                de: "Füllen Sie das Formular aus — wir senden es per WhatsApp, um Ihnen schnellstmöglich zu antworten.",
              })}
            </p>
            <div className="mt-8">
              <ContactForm />
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}

function ContactLine({
  label,
  value,
  href,
  external,
}: {
  label: string
  value: string
  href?: string
  external?: boolean
}) {
  const content = (
    <>
      <p className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
        {label}
      </p>
      <p className="mt-1 text-lg text-brand-green">{value}</p>
    </>
  )

  if (!href) return <div>{content}</div>
  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className="block transition-colors hover:text-brand-gold"
    >
      {content}
    </a>
  )
}
