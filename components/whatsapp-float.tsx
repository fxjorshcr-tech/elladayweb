"use client"

import * as React from "react"
import { usePathname } from "next/navigation"
import { SITE, whatsappLink } from "@/lib/constants"
import { useLanguage } from "@/lib/i18n/provider"
import { WhatsAppIcon } from "@/components/icons"
import { cn } from "@/lib/utils"

export function WhatsAppFloat() {
  const { pick } = useLanguage()
  const pathname = usePathname()
  const [shown, setShown] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setShown(window.scrollY > 320)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const message = pick({
    es: `Hola, vi su sitio ${SITE.name} y me gustaría más información.`,
    en: `Hi, I saw your site ${SITE.name} and would like more information.`,
    fr: `Bonjour, j'ai vu votre site ${SITE.name} et j'aimerais plus d'informations.`,
    de: `Hallo, ich habe Ihre Seite ${SITE.name} gesehen und hätte gern mehr Informationen.`,
  })
  const label = pick({
    es: "Escríbenos por WhatsApp",
    en: "Message us on WhatsApp",
    fr: "Écrivez-nous sur WhatsApp",
    de: "Schreiben Sie uns auf WhatsApp",
  })

  // Listing pages have their own sticky contact bar on phones.
  const onListing = /^\/properties\/.+/.test(pathname)

  return (
    <a
      href={whatsappLink(message)}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={cn(
        "group fixed right-5 bottom-[max(1.25rem,env(safe-area-inset-bottom))] z-40 items-center transition-[opacity,transform] duration-500 ease-out",
        onListing ? "hidden md:flex" : "flex",
        shown
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      )}
    >
      <span className="mr-3 hidden translate-x-2 rounded-full bg-brand-ink px-4 py-2 text-xs tracking-wide whitespace-nowrap text-brand-cream opacity-0 shadow-lg transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100 md:block">
        {label}
      </span>
      <span className="pulse-ring relative isolate flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_10px_30px_-8px_rgba(37,211,102,0.7)] transition-transform duration-300 group-hover:scale-105">
        <WhatsAppIcon className="h-7 w-7" />
      </span>
    </a>
  )
}
