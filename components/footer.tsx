"use client"

import Link from "next/link"
import { SITE, whatsappLink } from "@/lib/constants"
import { useLanguage } from "@/lib/i18n/provider"
import { ArrowUpRight, WhatsAppIcon } from "@/components/icons"

export function Footer() {
  const { t, pick } = useLanguage()
  const year = new Date().getFullYear()

  const links = [
    { href: "/", label: t("nav.home") },
    { href: "/properties", label: t("nav.properties") },
    { href: "/guide", label: t("nav.guide") },
    { href: "/sell", label: t("nav.sell") },
    { href: "/about", label: t("nav.about") },
    { href: "/contact", label: t("nav.contact") },
  ]

  return (
    <footer className="grain relative overflow-hidden bg-brand-ink text-brand-cream">
      <div className="container-page grid gap-12 pt-20 pb-14 md:grid-cols-12 md:gap-8 md:pt-24">
        <div className="md:col-span-5">
          <p className="font-serif text-3xl text-brand-cream">{SITE.name}</p>
          <p className="mt-1.5 text-[11px] tracking-[0.18em] text-brand-gold uppercase">
            {SITE.tagline}
          </p>
          <p className="mt-6 max-w-sm text-sm leading-relaxed text-brand-cream/65">
            {t("footer.tagline")}
          </p>
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
            className="mt-8 inline-flex items-center gap-2.5 rounded-full border border-brand-cream/25 px-6 py-3 text-sm tracking-wide text-brand-cream transition-colors duration-300 hover:border-brand-gold hover:bg-brand-gold hover:text-white"
          >
            <WhatsAppIcon className="h-4 w-4" />
            {SITE.whatsappDisplay}
          </a>
        </div>

        <div className="md:col-span-3 md:col-start-7">
          <h4 className="font-sans text-xs tracking-[0.18em] text-brand-gold uppercase">
            {t("footer.explore")}
          </h4>
          <ul className="mt-5 space-y-3 text-sm">
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="link-draw text-brand-cream/80 transition-colors hover:text-white"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="md:col-span-3">
          <h4 className="font-sans text-xs tracking-[0.18em] text-brand-gold uppercase">
            {t("footer.contact")}
          </h4>
          <ul className="mt-5 space-y-3 text-sm text-brand-cream/80">
            <li>{SITE.location}</li>
            <li>
              {pick({
                es: "Lunes a sábado · 8:00 — 18:00",
                en: "Monday to Saturday · 8 AM — 6 PM",
                fr: "Du lundi au samedi · 8 h — 18 h",
                de: "Montag bis Samstag · 8 — 18 Uhr",
              })}
            </li>
            <li>
              <a
                href={`https://instagram.com/${SITE.instagram}`}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-1.5 transition-colors hover:text-white"
              >
                <span className="link-draw">Instagram · @{SITE.instagram}</span>
                <ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Oversized wordmark */}
      <p
        aria-hidden="true"
        className="pointer-events-none px-4 pb-[0.22em] text-center font-serif leading-none tracking-tight whitespace-nowrap text-brand-cream/[0.06] select-none"
        style={{ fontSize: "clamp(3rem, 12.6vw, 13rem)" }}
      >
        {SITE.name}
      </p>

      <div className="border-t border-white/10">
        <div className="container-page flex flex-col items-start justify-between gap-3 py-6 text-xs text-brand-cream/55 md:flex-row md:items-center md:pr-20">
          <p>
            © {year} {SITE.name}. {t("footer.rights")}
          </p>
          <button
            type="button"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="group inline-flex items-center gap-2 tracking-[0.16em] uppercase transition-colors hover:text-white"
          >
            {pick({
              es: "Volver arriba",
              en: "Back to top",
              fr: "Haut de page",
              de: "Nach oben",
            })}
            <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/20 transition-all duration-300 group-hover:-translate-y-0.5 group-hover:border-brand-gold group-hover:bg-brand-gold">
              <ArrowUpRight className="h-3 w-3 -rotate-45" />
            </span>
          </button>
        </div>
      </div>
    </footer>
  )
}
