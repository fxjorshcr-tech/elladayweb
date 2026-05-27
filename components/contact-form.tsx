"use client"

import * as React from "react"
import { useLanguage } from "@/lib/i18n/provider"
import { SITE, whatsappLink } from "@/lib/constants"
import { cn } from "@/lib/utils"

type Props = {
  prefillSubject?: string
  className?: string
}

export function ContactForm({ prefillSubject, className }: Props) {
  const { t, pick, lang } = useLanguage()
  const [status, setStatus] = React.useState<"idle" | "sending" | "success" | "error">(
    "idle"
  )
  const [name, setName] = React.useState("")
  const [email, setEmail] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [message, setMessage] = React.useState("")

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("sending")
    try {
      const subjectBase = pick({
        es: "Consulta desde EllaDay Homes",
        en: "Inquiry from EllaDay Homes",
      })
      const subject = prefillSubject ? `${subjectBase} — ${prefillSubject}` : subjectBase
      const body = [
        `${pick({ es: "Nombre", en: "Name" })}: ${name}`,
        `${pick({ es: "Correo", en: "Email" })}: ${email}`,
        phone ? `${pick({ es: "Teléfono", en: "Phone" })}: ${phone}` : null,
        "",
        message,
      ]
        .filter(Boolean)
        .join("\n")

      const mailto = `mailto:${SITE.email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`
      window.location.href = mailto
      setStatus("success")
    } catch {
      setStatus("error")
    }
  }

  const whatsappMessage = pick({
    es: `Hola, soy ${name || "[nombre]"}.${
      prefillSubject ? ` Estoy interesado/a en: ${prefillSubject}.` : ""
    } ${message}`,
    en: `Hi, I'm ${name || "[name]"}.${
      prefillSubject ? ` I'm interested in: ${prefillSubject}.` : ""
    } ${message}`,
  })

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
          label={t("contact.formEmail")}
          type="email"
          value={email}
          onChange={setEmail}
          required
          autoComplete="email"
        />
      </div>
      <Field
        label={t("contact.formPhone")}
        type="tel"
        value={phone}
        onChange={setPhone}
        autoComplete="tel"
      />
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
          })}
        />
      </div>

      <div className="flex flex-col gap-3 pt-4 sm:flex-row">
        <button
          type="submit"
          disabled={status === "sending"}
          className="inline-flex items-center justify-center rounded-full bg-brand-green px-7 py-3.5 text-sm tracking-wide text-brand-cream transition-colors hover:bg-brand-green-dark disabled:opacity-60"
        >
          {status === "sending"
            ? pick({ es: "Enviando…", en: "Sending…" })
            : t("contact.formSubmit")}
        </button>
        <a
          href={whatsappLink(whatsappMessage)}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center justify-center rounded-full border border-brand-green px-7 py-3.5 text-sm tracking-wide text-brand-green transition-colors hover:bg-brand-green hover:text-brand-cream"
        >
          {t("contact.sendWhatsApp")}
        </a>
      </div>

      {status === "success" && (
        <p className="pt-2 text-sm text-brand-green">{t("contact.formSuccess")}</p>
      )}
      {status === "error" && (
        <p className="pt-2 text-sm text-destructive">{t("contact.formError")}</p>
      )}
      <p className="text-xs text-muted-foreground" aria-hidden={lang ? undefined : true}>
        {pick({
          es: "Al enviar abriremos tu cliente de correo. También puedes escribirnos directo por WhatsApp.",
          en: "Submitting will open your mail client. You can also message us directly on WhatsApp.",
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
