"use client"

import * as React from "react"
import { useLanguage } from "@/lib/i18n/provider"
import { FadeIn } from "@/components/fade-in"
import { whatsappLink } from "@/lib/constants"
import { cn } from "@/lib/utils"

export function SellClient() {
  const { pick, t } = useLanguage()

  const benefits = [
    {
      title: pick({
        es: "Compradores reales",
        en: "Real buyers",
        fr: "Acheteurs réels",
        de: "Echte Käufer",
      }),
      body: pick({
        es: "Recibimos consultas todas las semanas de compradores locales y extranjeros que buscan propiedad en la zona.",
        en: "Every week we hear from local and foreign buyers looking for property in the area.",
        fr: "Chaque semaine, des acheteurs locaux et étrangers nous contactent à la recherche d'une propriété dans la région.",
        de: "Jede Woche melden sich lokale und ausländische Käufer bei uns, die eine Immobilie in der Region suchen.",
      }),
    },
    {
      title: pick({
        es: "Promoción profesional",
        en: "Professional marketing",
        fr: "Promotion professionnelle",
        de: "Professionelle Vermarktung",
      }),
      body: pick({
        es: "Fotos cuidadas, publicación en nuestra página en cuatro idiomas y difusión en redes sociales y WhatsApp.",
        en: "Careful photos, a listing on our four-language website and promotion on social media and WhatsApp.",
        fr: "Des photos soignées, une annonce sur notre site en quatre langues et une diffusion sur les réseaux sociaux et WhatsApp.",
        de: "Sorgfältige Fotos, ein Inserat auf unserer viersprachigen Website und Verbreitung über soziale Medien und WhatsApp.",
      }),
    },
    {
      title: pick({
        es: "Sin costo inicial",
        en: "No upfront cost",
        fr: "Sans frais initiaux",
        de: "Ohne Vorabkosten",
      }),
      body: pick({
        es: "Solo cobramos comisión cuando la propiedad se vende. Te acompañamos con el precio, los papeles y el cierre.",
        en: "We only charge a commission when the property sells. We help you with pricing, paperwork and closing.",
        fr: "Nous ne facturons une commission que lorsque la propriété est vendue. Nous vous aidons pour le prix, les documents et la clôture.",
        de: "Wir berechnen nur eine Provision, wenn die Immobilie verkauft wird. Wir unterstützen Sie bei Preis, Unterlagen und Abschluss.",
      }),
    },
  ]

  return (
    <>
      <section className="container-page py-20 md:py-28">
        <FadeIn>
          <p className="text-xs tracking-[0.22em] text-brand-gold uppercase">
            {t("nav.sell")}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-fluid-h1 leading-tight text-balance text-brand-green">
            {pick({
              es: "Vende tu propiedad con nosotras",
              en: "Sell your property with us",
              fr: "Vendez votre propriété avec nous",
              de: "Verkaufen Sie Ihre Immobilie mit uns",
            })}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {pick({
              es: "¿Tienes un lote, casa o finca en La Fortuna o la Zona Norte? Cuéntanos sobre tu propiedad y te contactamos para valorarla y publicarla.",
              en: "Do you own a lot, home or farm in La Fortuna or the Northern Zone? Tell us about your property and we'll get in touch to appraise and list it.",
              fr: "Vous possédez un terrain, une maison ou une finca à La Fortuna ou dans la Zone Nord ? Parlez-nous de votre propriété et nous vous contacterons pour l'évaluer et la publier.",
              de: "Sie besitzen ein Grundstück, ein Haus oder eine Finca in La Fortuna oder der Nordzone? Erzählen Sie uns von Ihrer Immobilie und wir melden uns zur Bewertung und Veröffentlichung.",
            })}
          </p>
        </FadeIn>

        <FadeIn delay={120}>
          <div className="mt-14 grid gap-8 border-t border-border pt-12 md:grid-cols-3">
            {benefits.map((b, i) => (
              <div key={b.title}>
                <p className="font-serif text-2xl text-brand-gold">
                  {String(i + 1).padStart(2, "0")}
                </p>
                <h3 className="mt-3 font-serif text-xl text-brand-green">
                  {b.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>

        <div className="mt-16 grid gap-12 md:grid-cols-2 md:gap-16">
          <FadeIn>
            <h2 className="font-serif text-3xl text-brand-green">
              {pick({
                es: "Cuéntanos sobre tu propiedad",
                en: "Tell us about your property",
                fr: "Parlez-nous de votre propriété",
                de: "Erzählen Sie uns von Ihrer Immobilie",
              })}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              {pick({
                es: "Completa el formulario y se abrirá WhatsApp con tu información lista para enviarnos. Te respondemos en menos de 24 horas.",
                en: "Fill out the form and WhatsApp will open with your information ready to send. We reply within 24 hours.",
                fr: "Remplissez le formulaire et WhatsApp s'ouvrira avec vos informations prêtes à envoyer. Nous répondons sous 24 heures.",
                de: "Füllen Sie das Formular aus und WhatsApp öffnet sich mit Ihren Angaben zum Absenden. Wir antworten innerhalb von 24 Stunden.",
              })}
            </p>
            <div className="mt-8">
              <SellForm />
            </div>
          </FadeIn>

          <FadeIn delay={120}>
            <div className="rounded-sm border border-border bg-brand-cream p-6 md:p-8">
              <h3 className="font-serif text-2xl text-brand-green">
                {pick({
                  es: "Lo que nos ayuda a vender más rápido",
                  en: "What helps us sell faster",
                  fr: "Ce qui nous aide à vendre plus vite",
                  de: "Was uns hilft, schneller zu verkaufen",
                })}
              </h3>
              <ul className="mt-6 space-y-3 text-sm leading-relaxed text-muted-foreground">
                {[
                  pick({
                    es: "Plano catastrado y escritura al día",
                    en: "Up-to-date survey map and deed",
                    fr: "Plan cadastral et acte à jour",
                    de: "Aktueller Katasterplan und Urkunde",
                  }),
                  pick({
                    es: "Fotos recientes (nosotras podemos tomarlas)",
                    en: "Recent photos (we can take them)",
                    fr: "Photos récentes (nous pouvons les prendre)",
                    de: "Aktuelle Fotos (wir können sie machen)",
                  }),
                  pick({
                    es: "Precio realista según la zona — te ayudamos a definirlo",
                    en: "A realistic price for the area — we help you set it",
                    fr: "Un prix réaliste pour la zone — nous vous aidons à le fixer",
                    de: "Ein realistischer Preis für die Gegend — wir helfen bei der Festlegung",
                  }),
                  pick({
                    es: "Detalles de agua, luz y accesos",
                    en: "Details on water, electricity and access",
                    fr: "Détails sur l'eau, l'électricité et les accès",
                    de: "Angaben zu Wasser, Strom und Zufahrt",
                  }),
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span
                      className="mt-2 h-px w-4 flex-none bg-brand-gold"
                      aria-hidden="true"
                    />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        </div>
      </section>
    </>
  )
}

function SellForm() {
  const { pick, t } = useLanguage()
  const [name, setName] = React.useState("")
  const [phone, setPhone] = React.useState("")
  const [type, setType] = React.useState("")
  const [location, setLocation] = React.useState("")
  const [price, setPrice] = React.useState("")
  const [details, setDetails] = React.useState("")

  const typeOptions = [
    { value: "lot", label: pick({ es: "Lote", en: "Lot", fr: "Terrain", de: "Grundstück" }) },
    { value: "house", label: pick({ es: "Casa", en: "House", fr: "Maison", de: "Haus" }) },
    { value: "farm", label: pick({ es: "Finca", en: "Farm", fr: "Finca", de: "Finca" }) },
    { value: "other", label: pick({ es: "Otro", en: "Other", fr: "Autre", de: "Sonstiges" }) },
  ]

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const typeLabel = typeOptions.find((o) => o.value === type)?.label ?? type
    const msg = pick({
      es: `Hola, quiero vender mi propiedad.\n• Nombre: ${name}\n• Teléfono: ${phone}\n• Tipo: ${typeLabel}\n• Ubicación: ${location}${price ? `\n• Precio esperado: ${price}` : ""}\n• Detalles: ${details}`,
      en: `Hi, I'd like to sell my property.\n• Name: ${name}\n• Phone: ${phone}\n• Type: ${typeLabel}\n• Location: ${location}${price ? `\n• Expected price: ${price}` : ""}\n• Details: ${details}`,
      fr: `Bonjour, je souhaite vendre ma propriété.\n• Nom : ${name}\n• Téléphone : ${phone}\n• Type : ${typeLabel}\n• Emplacement : ${location}${price ? `\n• Prix espéré : ${price}` : ""}\n• Détails : ${details}`,
      de: `Hallo, ich möchte meine Immobilie verkaufen.\n• Name: ${name}\n• Telefon: ${phone}\n• Typ: ${typeLabel}\n• Lage: ${location}${price ? `\n• Preisvorstellung: ${price}` : ""}\n• Details: ${details}`,
    })
    window.open(whatsappLink(msg), "_blank", "noopener,noreferrer")
  }

  const inputClass =
    "w-full border-b border-border bg-transparent py-3 text-base outline-none transition-colors placeholder:text-muted-foreground focus:border-brand-gold"
  const labelClass =
    "text-xs tracking-[0.16em] text-muted-foreground uppercase"

  return (
    <form onSubmit={onSubmit} className="space-y-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <label className={labelClass}>{t("contact.formName")}</label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            autoComplete="name"
            className={inputClass}
          />
        </div>
        <div className="space-y-2">
          <label className={labelClass}>
            {pick({ es: "Teléfono", en: "Phone", fr: "Téléphone", de: "Telefon" })}
          </label>
          <input
            required
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            autoComplete="tel"
            className={inputClass}
          />
        </div>
      </div>
      <div className="grid gap-5 md:grid-cols-2">
        <div className="space-y-2">
          <label className={labelClass}>{t("properties.type")}</label>
          <select
            required
            value={type}
            onChange={(e) => setType(e.target.value)}
            className={cn(inputClass, "appearance-none")}
          >
            <option value="" disabled>
              {pick({ es: "Selecciona…", en: "Select…", fr: "Sélectionnez…", de: "Auswählen…" })}
            </option>
            {typeOptions.map((o) => (
              <option key={o.value} value={o.value}>
                {o.label}
              </option>
            ))}
          </select>
        </div>
        <div className="space-y-2">
          <label className={labelClass}>{t("properties.location")}</label>
          <input
            required
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder={pick({
              es: "Ej: La Fortuna, San Carlos",
              en: "E.g. La Fortuna, San Carlos",
              fr: "Ex. : La Fortuna, San Carlos",
              de: "Z. B. La Fortuna, San Carlos",
            })}
            className={inputClass}
          />
        </div>
      </div>
      <div className="space-y-2">
        <label className={labelClass}>
          {pick({
            es: "Precio esperado (opcional)",
            en: "Expected price (optional)",
            fr: "Prix espéré (facultatif)",
            de: "Preisvorstellung (optional)",
          })}
        </label>
        <input
          value={price}
          onChange={(e) => setPrice(e.target.value)}
          placeholder="₡ / $"
          className={inputClass}
        />
      </div>
      <div className="space-y-2">
        <label className={labelClass}>
          {pick({
            es: "Detalles de la propiedad",
            en: "Property details",
            fr: "Détails de la propriété",
            de: "Details zur Immobilie",
          })}
        </label>
        <textarea
          required
          value={details}
          onChange={(e) => setDetails(e.target.value)}
          rows={4}
          placeholder={pick({
            es: "Tamaño, agua, luz, accesos, estado…",
            en: "Size, water, electricity, access, condition…",
            fr: "Superficie, eau, électricité, accès, état…",
            de: "Größe, Wasser, Strom, Zufahrt, Zustand…",
          })}
          className={cn(inputClass, "resize-none")}
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
    </form>
  )
}
