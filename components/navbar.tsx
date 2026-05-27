"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { useLanguage } from "@/lib/i18n/provider"
import { LanguageToggle } from "@/components/language-toggle"
import { cn } from "@/lib/utils"
import { SITE } from "@/lib/constants"

export function Navbar() {
  const pathname = usePathname()
  const { t } = useLanguage()
  const [open, setOpen] = React.useState(false)
  const [scrolled, setScrolled] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  React.useEffect(() => {
    setOpen(false)
  }, [pathname])

  const links = [
    { href: "/", label: t("nav.home") },
    { href: "/properties", label: t("nav.properties") },
    { href: "/about", label: t("nav.about") },
    { href: "/contact", label: t("nav.contact") },
  ]

  return (
    <header
      className={cn(
        "fixed top-0 right-0 left-0 z-40 transition-all duration-300",
        scrolled || open
          ? "border-b border-border bg-background/95 backdrop-blur"
          : "bg-transparent"
      )}
    >
      <div className="container-page flex h-16 items-center justify-between md:h-20">
        <Link href="/" className="group flex flex-col leading-none">
          <span className="font-serif text-xl tracking-tight text-brand-green md:text-2xl">
            {SITE.name}
          </span>
          <span className="mt-0.5 text-[10px] tracking-[0.18em] text-brand-gold uppercase md:text-[11px]">
            La Fortuna · Costa Rica
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => {
            const active =
              link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)
            return (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "relative text-sm tracking-wide transition-colors",
                  active
                    ? "text-brand-green"
                    : "text-muted-foreground hover:text-brand-green"
                )}
              >
                {link.label}
                {active && (
                  <span className="absolute -bottom-1.5 left-1/2 h-px w-6 -translate-x-1/2 bg-brand-gold" />
                )}
              </Link>
            )
          })}
          <LanguageToggle />
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageToggle />
          <button
            type="button"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((s) => !s)}
            className="flex h-9 w-9 items-center justify-center rounded-full border border-border text-brand-green"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              className="h-4 w-4"
            >
              {open ? (
                <path strokeLinecap="round" d="M6 6l12 12M6 18L18 6" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <div className="border-t border-border bg-background md:hidden">
          <nav className="container-page flex flex-col py-4">
            {links.map((link) => {
              const active =
                link.href === "/" ? pathname === "/" : pathname.startsWith(link.href)
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={cn(
                    "py-3 text-base tracking-wide",
                    active ? "text-brand-green" : "text-muted-foreground"
                  )}
                >
                  {link.label}
                </Link>
              )
            })}
          </nav>
        </div>
      )}
    </header>
  )
}
