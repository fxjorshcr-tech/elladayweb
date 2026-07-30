"use client"

import * as React from "react"
import { useLanguage } from "@/lib/i18n/provider"

export function ShareButtons({ title }: { title: string }) {
  const { pick } = useLanguage()
  const [copied, setCopied] = React.useState(false)

  const getUrl = () =>
    typeof window === "undefined" ? "" : window.location.href

  const shareWhatsApp = () => {
    const text = `${title} — ${getUrl()}`
    window.open(
      `https://wa.me/?text=${encodeURIComponent(text)}`,
      "_blank",
      "noopener,noreferrer"
    )
  }

  const shareFacebook = () => {
    window.open(
      `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(getUrl())}`,
      "_blank",
      "noopener,noreferrer"
    )
  }

  const copyLink = async () => {
    try {
      await navigator.clipboard.writeText(getUrl())
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // Clipboard unavailable (http / old browser): fall back to native share.
      if (navigator.share) navigator.share({ title, url: getUrl() })
    }
  }

  const btnClass =
    "inline-flex items-center gap-2 rounded-full border border-border px-4 py-2 text-xs tracking-wide text-brand-green transition-colors hover:border-brand-gold hover:text-brand-gold"

  return (
    <div className="flex flex-wrap items-center gap-2">
      <span className="mr-1 text-xs tracking-[0.16em] text-muted-foreground uppercase">
        {pick({ es: "Compartir", en: "Share", fr: "Partager", de: "Teilen" })}
      </span>
      <button type="button" onClick={shareWhatsApp} className={btnClass}>
        <WhatsAppIcon />
        WhatsApp
      </button>
      <button type="button" onClick={shareFacebook} className={btnClass}>
        <FacebookIcon />
        Facebook
      </button>
      <button type="button" onClick={copyLink} className={btnClass}>
        <LinkIcon />
        {copied
          ? pick({ es: "¡Copiado!", en: "Copied!", fr: "Copié !", de: "Kopiert!" })
          : pick({
              es: "Copiar enlace",
              en: "Copy link",
              fr: "Copier le lien",
              de: "Link kopieren",
            })}
      </button>
    </div>
  )
}

function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
      <path d="M12 2a10 10 0 00-8.6 15.1L2 22l5-1.3A10 10 0 1012 2zm0 18.2a8.2 8.2 0 01-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1112 20.2zm4.6-6.1c-.3-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1-.2.3-.7.8-.8 1-.1.2-.3.2-.5.1a6.7 6.7 0 01-3.3-2.9c-.2-.4.2-.4.6-1.2.1-.2 0-.4 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 00-.7.3 2.9 2.9 0 00-.9 2.1c0 1.2.9 2.4 1 2.6a11.1 11.1 0 004.2 3.7c1.6.7 2.2.7 3 .6a2.5 2.5 0 001.6-1.1c.2-.6.2-1 .1-1.1l-.4-.2z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-3.5 w-3.5">
      <path d="M22 12a10 10 0 10-11.6 9.9v-7h-2.5V12h2.5V9.8c0-2.5 1.5-3.9 3.8-3.9 1.1 0 2.2.2 2.2.2v2.5h-1.3c-1.2 0-1.6.8-1.6 1.6V12h2.8l-.4 2.9h-2.4v7A10 10 0 0022 12z" />
    </svg>
  )
}

function LinkIcon() {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      className="h-3.5 w-3.5"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13.2 10.8a4 4 0 010 5.6l-2.8 2.8a4 4 0 01-5.6-5.6l1.6-1.6M10.8 13.2a4 4 0 010-5.6l2.8-2.8a4 4 0 015.6 5.6l-1.6 1.6"
      />
    </svg>
  )
}
