"use client"

import { useLanguage } from "@/lib/i18n/provider"
import { SITE, whatsappLink } from "@/lib/constants"
import { FadeIn } from "@/components/fade-in"
import { WhatsAppIcon } from "@/components/icons"

export function NewsletterCta() {
  const { pick } = useLanguage()

  const subscribeMsg = pick({
    es: "Hola, quiero recibir las nuevas propiedades de EllaDay Homes antes que nadie.",
    en: "Hi, I'd like to receive EllaDay Homes' new listings before anyone else.",
    fr: "Bonjour, je souhaite recevoir les nouvelles propriétés d'EllaDay Homes en avant-première.",
    de: "Hallo, ich möchte die neuen Immobilien von EllaDay Homes als Erster erhalten.",
  })

  return (
    <section className="container-page py-20 md:py-28">
      <FadeIn variant="scale">
        <div className="grain relative overflow-hidden rounded-[2rem] bg-brand-sage px-7 py-14 text-brand-cream md:px-16 md:py-20">
          <div
            className="pointer-events-none absolute -top-24 -right-24 h-80 w-80 rounded-full border border-brand-cream/25"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute -top-10 -right-10 h-80 w-80 rounded-full border border-brand-cream/15"
            aria-hidden="true"
          />
          <div className="relative grid items-end gap-10 md:grid-cols-12">
            <div className="md:col-span-7">
              <p className="flex items-center gap-2.5 text-[11px] tracking-[0.26em] uppercase">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-cream opacity-70" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-brand-cream" />
                </span>
                {pick({
                  es: "Alertas de propiedades",
                  en: "Property alerts",
                  fr: "Alertes propriétés",
                  de: "Immobilien-Alerts",
                })}
              </p>
              <h2 className="font-display text-fluid-h2 mt-5 leading-tight text-balance">
                {pick({
                  es: "Recibe las nuevas propiedades antes que nadie",
                  en: "Get new listings before anyone else",
                  fr: "Recevez les nouvelles propriétés en avant-première",
                  de: "Erhalten Sie neue Immobilien vor allen anderen",
                })}
              </h2>
              <p className="mt-5 max-w-xl text-sm leading-relaxed text-brand-cream/90 md:text-base">
                {pick({
                  es: "Muchas propiedades se venden antes de llegar a los portales. Suscríbete por WhatsApp y te avisamos apenas entra algo nuevo a nuestra cartera.",
                  en: "Many properties sell before they ever reach the listing sites. Subscribe via WhatsApp and we'll let you know the moment something new enters our portfolio.",
                  fr: "Beaucoup de propriétés se vendent avant même d'arriver sur les portails. Abonnez-vous via WhatsApp et nous vous préviendrons dès qu'une nouveauté entre dans notre portefeuille.",
                  de: "Viele Immobilien werden verkauft, bevor sie überhaupt auf den Portalen erscheinen. Abonnieren Sie per WhatsApp und wir informieren Sie, sobald etwas Neues in unser Portfolio kommt.",
                })}
              </p>
            </div>
            <div className="flex flex-col gap-3 md:col-span-5 md:items-end">
              <a
                href={whatsappLink(subscribeMsg)}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-cream w-full md:w-auto"
              >
                <WhatsAppIcon className="h-4 w-4" />
                {pick({
                  es: "Suscribirme por WhatsApp",
                  en: "Subscribe on WhatsApp",
                  fr: "M'abonner sur WhatsApp",
                  de: "Per WhatsApp abonnieren",
                })}
              </a>
              <a
                href={`https://instagram.com/${SITE.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn w-full border border-brand-cream/50 text-brand-cream hover:bg-brand-cream hover:text-brand-green-dark md:w-auto"
              >
                Instagram · @{SITE.instagram}
              </a>
            </div>
          </div>
        </div>
      </FadeIn>
    </section>
  )
}
