"use client"

import Link from "next/link"
import { SITE, whatsappLink } from "@/lib/constants"
import { useLanguage } from "@/lib/i18n/provider"

export function Footer() {
  const { t, pick } = useLanguage()
  const year = new Date().getFullYear()

  return (
    <footer className="mt-32 border-t border-border bg-brand-cream">
      <div className="container-page grid gap-12 py-16 md:grid-cols-3 md:gap-8">
        <div>
          <p className="font-serif text-2xl text-brand-green">{SITE.name}</p>
          <p className="mt-1 text-[11px] tracking-[0.18em] text-brand-gold uppercase">
            {SITE.tagline}
          </p>
          <p className="mt-6 max-w-xs text-sm leading-relaxed text-muted-foreground">
            {t("footer.tagline")}
          </p>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.18em] text-brand-gold uppercase">
            {t("footer.explore")}
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/" className="text-foreground hover:text-brand-gold">
                {t("nav.home")}
              </Link>
            </li>
            <li>
              <Link
                href="/properties"
                className="text-foreground hover:text-brand-gold"
              >
                {t("nav.properties")}
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-foreground hover:text-brand-gold">
                {t("nav.about")}
              </Link>
            </li>
            <li>
              <Link href="/contact" className="text-foreground hover:text-brand-gold">
                {t("nav.contact")}
              </Link>
            </li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs tracking-[0.18em] text-brand-gold uppercase">
            {t("footer.contact")}
          </h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <a
                href={whatsappLink(
                  pick({
                    es: "Hola, me gustaría más información sobre sus propiedades.",
                    en: "Hi, I'd like more information about your properties.",
                    fr: "Bonjour, j'aimerais plus d'informations sur vos propriétés.",
                    de: "Hallo, ich hätte gern mehr Informationen zu Ihren Immobilien.",
                  })
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground hover:text-brand-gold"
              >
                WhatsApp · {SITE.whatsappDisplay}
              </a>
            </li>
            <li className="text-muted-foreground">{SITE.location}</li>
          </ul>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container-page flex flex-col items-start justify-between gap-2 py-6 text-xs text-muted-foreground md:flex-row md:items-center">
          <p>
            © {year} {SITE.name}. {t("footer.rights")}
          </p>
          <a
            href={`https://instagram.com/${SITE.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-brand-gold"
          >
            Instagram · @{SITE.instagram}
          </a>
        </div>
      </div>
    </footer>
  )
}
