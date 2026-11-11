"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/lib/i18n/provider"
import { LanguageToggle } from "@/components/language-toggle"
import { ArrowUpRight, WhatsAppIcon } from "@/components/icons"
import { cn } from "@/lib/utils"
import { SITE, whatsappLink } from "@/lib/constants"

// Pages that open with a dark, full-bleed header: the bar starts transparent
// with light text there and turns solid once the visitor scrolls.
const DARK_HERO_PATHS = [
  "/",
  "/properties",
  "/guide",
  "/sell",
  "/about",
  "/contact",
]

export function Navbar() {
  const pathname = usePathname()
  const { t, pick } = useLanguage()
  const [open, setOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)
  const [hidden, setHidden] = React.useState(false)
  const progressRef = React.useRef<HTMLDivElement | null>(null)

  React.useEffect(() => {
    let lastY = window.scrollY
    let raf = 0
    const update = () => {
      raf = 0
      const y = window.scrollY
      setScrolled(y > 24)
      // Hide while reading down the page, bring it back on any scroll up.
      if (y > 480 && y > lastY + 4) setHidden(true)
      else if (y < lastY - 4 || y <= 480) setHidden(false)
      lastY = y
      const max = document.documentElement.scrollHeight - window.innerHeight
      if (progressRef.current) {
        progressRef.current.style.transform = `scaleX(${max > 0 ? Math.min(y / max, 1) : 0})`
      }
    }
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update)
    }
    update()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => {
      window.removeEventListener("scroll", onScroll)
      cancelAnimationFrame(raf)
    }
  }, [pathname])

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : ""
    return () => {
      document.body.style.overflow = ""
    }
  }, [open])

  const links = [
    { href: "/", label: t("nav.home") },
    { href: "/properties", label: t("nav.properties") },
    { href: "/guide", label: t("nav.guide") },
    { href: "/sell", label: t("nav.sell") },
    { href: "/about", label: t("nav.about") },
    { href: "/contact", label: t("nav.contact") },
  ]

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href)

  const overHero = DARK_HERO_PATHS.includes(pathname) && !scrolled && !open
  const light = overHero || open

  const whatsappMsg = pick({
    es: "Hola, me gustaría hablar con ustedes sobre propiedades en La Fortuna.",
    en: "Hi, I'd like to talk to you about properties in La Fortuna.",
    fr: "Bonjour, j'aimerais discuter avec vous des propriétés à La Fortuna.",
    de: "Hallo, ich würde gern mit Ihnen über Immobilien in La Fortuna sprechen.",
  })

  return (
    <>
      <header
        className={cn(
          "fixed top-0 right-0 left-0 z-40 pt-[env(safe-area-inset-top)] transition-[transform,background-color,border-color,box-shadow] duration-500 ease-out",
          hidden && !open ? "-translate-y-full" : "translate-y-0",
          open
            ? "border-b border-white/10 bg-brand-ink"
            : overHero
              ? "border-b border-white/10 bg-transparent"
              : "border-b border-border/70 bg-brand-cream/90 shadow-[0_8px_30px_-18px_rgba(28,41,33,0.35)] backdrop-blur-xl"
        )}
      >
        <div className="container-page flex h-16 items-center justify-between md:h-20">
          <Link href="/" className="group flex flex-col leading-none">
            <span
              className={cn(
                "font-serif text-xl tracking-tight transition-colors duration-500 md:text-2xl",
                light ? "text-white" : "text-brand-green"
              )}
            >
              {SITE.name}
            </span>
            <span
              className={cn(
                "mt-0.5 text-[9px] tracking-[0.14em] whitespace-nowrap uppercase transition-colors duration-500 sm:text-[10px] sm:tracking-[0.18em] md:text-[11px]",
                light ? "text-white/70" : "text-brand-gold"
              )}
            >
              La Fortuna · Costa Rica
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {links.map((link) => {
              const active = isActive(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  aria-current={active ? "page" : undefined}
                  className={cn(
                    "group/link relative py-2 text-sm tracking-wide transition-colors duration-300",
                    light
                      ? active
                        ? "text-white"
                        : "text-white/75 hover:text-white"
                      : active
                        ? "text-brand-green"
                        : "text-brand-green/70 hover:text-brand-green"
                  )}
                >
                  {link.label}
                  <span
                    className={cn(
                      "absolute bottom-0 left-0 h-px w-full origin-left bg-brand-gold transition-transform duration-500 ease-out",
                      active
                        ? "scale-x-100"
                        : "scale-x-0 group-hover/link:scale-x-100"
                    )}
                  />
                </Link>
              )
            })}
            <LanguageToggle tone={light ? "light" : "dark"} />
            <a
              href={whatsappLink(whatsappMsg)}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                "hidden items-center gap-2 rounded-full px-5 py-2.5 text-sm tracking-wide transition-all duration-300 xl:inline-flex",
                light
                  ? "bg-white text-brand-green-dark hover:bg-brand-gold hover:text-white"
                  : "bg-brand-green text-brand-cream hover:bg-brand-green-dark"
              )}
            >
              <WhatsAppIcon className="h-4 w-4" />
              {pick({
                es: "Hablemos",
                en: "Let's talk",
                fr: "Parlons-en",
                de: "Sprechen wir",
              })}
            </a>
          </nav>

          <div className="flex items-center gap-3 lg:hidden">
            <LanguageToggle tone={light ? "light" : "dark"} />
            <button
              type="button"
              aria-label="Menu"
              aria-expanded={open}
              onClick={() => setOpen((s) => !s)}
              className={cn(
                "relative flex h-10 w-10 items-center justify-center rounded-full border transition-colors duration-300",
                light
                  ? "border-white/30 text-white"
                  : "border-border text-brand-green"
              )}
            >
              <span
                className={cn(
                  "absolute h-px w-4 bg-current transition-transform duration-300",
                  open ? "rotate-45" : "-translate-y-[5px]"
                )}
              />
              <span
                className={cn(
                  "absolute h-px w-4 bg-current transition-opacity duration-200",
                  open && "opacity-0"
                )}
              />
              <span
                className={cn(
                  "absolute h-px w-4 bg-current transition-transform duration-300",
                  open ? "-rotate-45" : "translate-y-[5px]"
                )}
              />
            </button>
          </div>
        </div>

        {/* Reading progress */}
        <div
          ref={progressRef}
          aria-hidden="true"
          className={cn(
            "absolute bottom-[-1px] left-0 h-[2px] w-full origin-left scale-x-0 bg-brand-gold transition-opacity duration-300",
            open && "opacity-0"
          )}
        />
      </header>

      {/* Mobile menu: full-screen sheet with staggered links */}
      <div
        className={cn(
          "grain fixed inset-0 z-30 bg-brand-ink text-brand-cream transition-[opacity,visibility] duration-500 lg:hidden",
          open ? "visible opacity-100" : "invisible opacity-0"
        )}
        aria-hidden={!open}
      >
        <div className="flex h-full flex-col overflow-y-auto px-6 pt-[calc(env(safe-area-inset-top)+5.5rem)] pb-[max(2rem,env(safe-area-inset-bottom))]">
          <nav className="flex flex-col">
            {links.map((link, i) => {
              const active = isActive(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  tabIndex={open ? 0 : -1}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex items-baseline justify-between border-b border-white/10 py-4 transition-[opacity,transform] duration-700 ease-out",
                    open
                      ? "translate-y-0 opacity-100"
                      : "translate-y-6 opacity-0"
                  )}
                  style={{
                    transitionDelay: open ? `${120 + i * 60}ms` : "0ms",
                  }}
                >
                  <span
                    className={cn(
                      "font-serif text-3xl",
                      active ? "text-brand-gold" : "text-brand-cream"
                    )}
                  >
                    {link.label}
                  </span>
                  <span className="text-xs tracking-[0.2em] text-white/40">
                    0{i + 1}
                  </span>
                </Link>
              )
            })}
          </nav>

          <div
            className={cn(
              "mt-auto space-y-4 pt-10 transition-[opacity,transform] duration-700 ease-out",
              open ? "translate-y-0 opacity-100" : "translate-y-6 opacity-0"
            )}
            style={{ transitionDelay: open ? "520ms" : "0ms" }}
          >
            <a
              href={whatsappLink(whatsappMsg)}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={open ? 0 : -1}
              className="flex w-full items-center justify-center gap-2 rounded-full bg-brand-gold px-6 py-4 text-sm tracking-wide text-white"
            >
              <WhatsAppIcon className="h-4 w-4" />
              WhatsApp · {SITE.whatsappDisplay}
            </a>
            <a
              href={`https://instagram.com/${SITE.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              tabIndex={open ? 0 : -1}
              className="flex items-center justify-center gap-1.5 text-xs tracking-[0.18em] text-white/60 uppercase"
            >
              Instagram · @{SITE.instagram}
              <ArrowUpRight className="h-3 w-3" />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
