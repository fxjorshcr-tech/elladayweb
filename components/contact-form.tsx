"use client"

import * as React from "react"
import { useLanguage } from "@/lib/i18n/provider"
import { whatsappLink } from "@/lib/constants"
import { cn } from "@/lib/utils"

type Props = {
  prefillSubject?: string
  className?: string
}

export function ContactForm({ prefillSubject, className }: Props) {
  const { t, pick } = useLanguage()
  const [name, setName] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [message, setMessage] = React.useState("")

  const labelPhone = pick({
    es: "Teléfono",
    en: "Phone",
    fr: "Téléphone",
    de: "Telefon",
  })

  const whatsappMessage = pick({
    es: `Hola, soy ${name || "[nombre]"}.${
      prefillSubject ? ` Me interesa: ${prefillSubject}.` : ""
    }${phone ? ` ${labelPhone}: ${phone}.` : ""} ${message}`,
    en: `Hi, I'm ${name || "[name]"}.${
      prefillSubject ? ` I'm interested in: ${prefillSubject}.` : ""
    }${phone ? ` ${labelPhone}: ${phone}.` : ""} ${message}`,
    fr: `Bonjour, je suis ${name || "[nom]"}.${
      prefillSubject ? ` Je m'intéresse à : ${prefillSubject}.` : ""
    }${phone ? ` ${labelPhone}: ${phone}.` : ""} ${message}`,
    de: `Hallo, ich bin ${name || "[Name]"}.${
      prefillSubject ? ` Ich interessiere mich für: ${prefillSubject}.` : ""
    }${phone ? ` ${labelPhone}: ${phone}.` : ""} ${message}`,
  })

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    window.open(whatsappLink(whatsappMessage), "_blank", "noopener,noreferrer")
  }

  return (
    <form onSubmit={onSubmit} className={cn("space-y-5", className)}>
      <div className="grid gap-5 md:grid-cols-2">
        <Field
          label={t("contact.formName")}
          value={name}
          onChange={setName}
          required
          autoComplete="name"
        />
        <Field
          label={t("contact.formPhone")}
          type="tel"
          value={phone}
          onChange={setPhone}
          autoComplete="tel"
        />
      </div>
      <div className="space-y-2">
        <label className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
          {t("contact.formMessage")}
        </label>
        <textarea
          required
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          rows={5}
          className="w-full resize-none border-b border-border bg-transparent py-3 text-base outline-none transition-colors placeholder:text-muted-foreground focus:border-brand-gold"
          placeholder={pick({
            es: "Cuéntanos qué buscas...",
            en: "Tell us what you're looking for...",
            fr: "Dites-nous ce que vous cherchez…",
            de: "Erzählen Sie, was Sie suchen…",
          })}
        />
      </div>

      <div className="pt-4">
        <button
          type="submit"
          className="inline-flex items-center justify-center rounded-full bg-brand-green px-7 py-3.5 text-sm tracking-wide text-brand-cream transition-colors hover:bg-brand-green-dark"
        >
          {t("contact.sendWhatsApp")}
        </button>
      </div>

      <p className="text-xs text-muted-foreground">
        {pick({
          es: "Al enviar se abrirá WhatsApp con tu mensaje listo para enviarnos.",
          en: "Submitting will open WhatsApp with your message ready to send us.",
          fr: "L'envoi ouvrira WhatsApp avec votre message prêt à nous être envoyé.",
          de: "Beim Senden öffnet sich WhatsApp mit Ihrer fertigen Nachricht an uns.",
        })}
      </p>
    </form>
  )
}

function Field({
  label,
  value,
  onChange,
  type = "text",
  required,
  autoComplete,
}: {
  label: string
  value: string
  onChange: (v: string) => void
  type?: string
  required?: boolean
  autoComplete?: string
}) {
  return (
    <div className="space-y-2">
      <label className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
        {label}
      </label>
      <input
        type={type}
        value={value}
        required={required}
        autoComplete={autoComplete}
        onChange={(e) => onChange(e.target.value)}
        className="w-full border-b border-border bg-transparent py-3 text-base outline-none transition-colors focus:border-brand-gold"
      />
    </div>
  )
}
