"use client"

import { useLanguage } from "@/lib/i18n/provider"
import { SITE, whatsappLink } from "@/lib/constants"
import { FadeIn } from "@/components/fade-in"

export function NewsletterCta() {
  const { pick } = useLanguage()

  const subscribeMsg = pick({
    es: "Hola, quiero recibir las nuevas propiedades de EllaDay Homes antes que nadie.",
    en: "Hi, I'd like to receive EllaDay Homes' new listings before anyone else.",
    fr: "Bonjour, je souhaite recevoir les nouvelles propriétés d'EllaDay Homes en avant-première.",
    de: "Hallo, ich möchte die neuen Immobilien von EllaDay Homes als Erster erhalten.",
  })

  return (
    <section className="bg-brand-sage py-20 text-brand-cream md:py-24">
      <div className="container-narrow text-center">
        <FadeIn>
          <p className="text-[11px] tracking-[0.28em] uppercase opacity-80">
            {pick({
              es: "Alertas de propiedades",
              en: "Property alerts",
              fr: "Alertes propriétés",
              de: "Immobilien-Alerts",
            })}
          </p>
          <h2 className="mt-4 font-display text-fluid-h2 leading-tight text-balance">
            {pick({
              es: "Recibe las nuevas propiedades antes que nadie",
              en: "Get new listings before anyone else",
              fr: "Recevez les nouvelles propriétés en avant-première",
              de: "Erhalten Sie neue Immobilien vor allen anderen",
            })}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-sm leading-relaxed opacity-90 md:text-base">
            {pick({
              es: "Muchas propiedades se venden antes de llegar a los portales. Suscríbete por WhatsApp y te avisamos apenas entra algo nuevo a nuestra cartera.",
              en: "Many properties sell before they ever reach the listing sites. Subscribe via WhatsApp and we'll let you know the moment something new enters our portfolio.",
              fr: "Beaucoup de propriétés se vendent avant même d'arriver sur les portails. Abonnez-vous via WhatsApp et nous vous préviendrons dès qu'une nouveauté entre dans notre portefeuille.",
              de: "Viele Immobilien werden verkauft, bevor sie überhaupt auf den Portalen erscheinen. Abonnieren Sie per WhatsApp und wir informieren Sie, sobald etwas Neues in unser Portfolio kommt.",
            })}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={whatsappLink(subscribeMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-brand-cream px-7 py-3.5 text-sm tracking-wide text-brand-green transition-colors hover:bg-white"
            >
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
              className="inline-flex items-center rounded-full border border-brand-cream/50 px-7 py-3.5 text-sm tracking-wide text-brand-cream transition-colors hover:bg-brand-cream/10"
            >
              Instagram · @{SITE.instagram}
            </a>
          </div>
        </FadeIn>
      </div>
    </section>
  )
}
