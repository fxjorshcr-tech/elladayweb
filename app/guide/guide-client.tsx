"use client"

import Link from "next/link"
import { useLanguage } from "@/lib/i18n/provider"
import { FadeIn } from "@/components/fade-in"
import { FaqAccordion, type FaqItem } from "@/components/faq-accordion"
import { SITE, whatsappLink } from "@/lib/constants"

export function GuideClient() {
  const { pick, t } = useLanguage()

  const steps = [
    {
      title: pick({
        es: "Elige la propiedad y visítala",
        en: "Choose the property and visit it",
        fr: "Choisissez la propriété et visitez-la",
        de: "Wählen Sie die Immobilie und besichtigen Sie sie",
      }),
      body: pick({
        es: "Revisa nuestra cartera, cuéntanos qué buscas y coordinamos una visita. Te acompañamos personalmente y te contamos lo bueno y lo no tan bueno de cada opción.",
        en: "Browse our portfolio, tell us what you're looking for and we'll set up a visit. We go with you personally and tell you the good — and the not so good — of each option.",
        fr: "Parcourez notre portefeuille, dites-nous ce que vous cherchez et nous organiserons une visite. Nous vous accompagnons personnellement et vous disons le bon — et le moins bon — de chaque option.",
        de: "Sehen Sie sich unser Portfolio an, sagen Sie uns, was Sie suchen, und wir vereinbaren eine Besichtigung. Wir begleiten Sie persönlich und nennen Ihnen die Vor- und Nachteile jeder Option.",
      }),
    },
    {
      title: pick({
        es: "Haz una oferta",
        en: "Make an offer",
        fr: "Faites une offre",
        de: "Machen Sie ein Angebot",
      }),
      body: pick({
        es: "Te ayudamos a negociar un precio justo con datos reales de la zona. Muchas de nuestras propiedades son negociables y algunas ofrecen financiamiento del vendedor.",
        en: "We help you negotiate a fair price using real market data from the area. Many of our properties are negotiable and some offer seller financing.",
        fr: "Nous vous aidons à négocier un prix juste avec des données réelles de la zone. Beaucoup de nos propriétés sont négociables et certaines offrent un financement par le vendeur.",
        de: "Wir helfen Ihnen, mit echten Marktdaten aus der Region einen fairen Preis zu verhandeln. Viele unserer Immobilien sind verhandelbar und einige bieten Verkäuferfinanzierung.",
      }),
    },
    {
      title: pick({
        es: "Estudio legal (due diligence)",
        en: "Legal review (due diligence)",
        fr: "Étude juridique (due diligence)",
        de: "Rechtliche Prüfung (Due Diligence)",
      }),
      body: pick({
        es: "Un abogado-notario verifica en el Registro Nacional que la propiedad esté libre de gravámenes, revisa el plano catastrado y confirma el uso de suelo. Trabajamos con notarios de confianza en la zona.",
        en: "A notary-lawyer verifies at the National Registry that the property is free of liens, reviews the registered survey map (plano catastrado) and confirms zoning. We work with trusted notaries in the area.",
        fr: "Un avocat-notaire vérifie au Registre National que la propriété est libre de charges, examine le plan cadastral (plano catastrado) et confirme le zonage. Nous travaillons avec des notaires de confiance dans la région.",
        de: "Ein Notar-Anwalt prüft im Nationalregister, dass die Immobilie lastenfrei ist, kontrolliert den Katasterplan (plano catastrado) und bestätigt die Flächennutzung. Wir arbeiten mit vertrauenswürdigen Notaren der Region.",
      }),
    },
    {
      title: pick({
        es: "Firma de la escritura",
        en: "Signing the deed",
        fr: "Signature de l'acte",
        de: "Unterzeichnung der Urkunde",
      }),
      body: pick({
        es: "La compraventa se formaliza ante notario público con la escritura de traspaso. Si no puedes estar en Costa Rica, se puede firmar con un poder especial.",
        en: "The sale is formalized before a notary public with the transfer deed. If you can't be in Costa Rica, it can be signed with a special power of attorney.",
        fr: "La vente est formalisée devant notaire avec l'acte de transfert. Si vous ne pouvez pas être au Costa Rica, il est possible de signer avec une procuration spéciale.",
        de: "Der Kauf wird vor einem Notar mit der Übertragungsurkunde formalisiert. Wenn Sie nicht in Costa Rica sein können, ist die Unterzeichnung mit einer Spezialvollmacht möglich.",
      }),
    },
    {
      title: pick({
        es: "Inscripción y entrega",
        en: "Registration and handover",
        fr: "Enregistrement et remise",
        de: "Eintragung und Übergabe",
      }),
      body: pick({
        es: "El notario inscribe la propiedad a tu nombre en el Registro Nacional. Los costos de cierre (impuestos, timbres y honorarios) rondan el 3.5–4% del valor. Después te acompañamos con agua, luz y lo que necesites para instalarte.",
        en: "The notary registers the property in your name at the National Registry. Closing costs (taxes, stamps and fees) are around 3.5–4% of the value. Afterwards we help you with water, electricity and whatever you need to settle in.",
        fr: "Le notaire enregistre la propriété à votre nom au Registre National. Les frais de clôture (impôts, timbres et honoraires) représentent environ 3,5–4 % de la valeur. Ensuite, nous vous aidons avec l'eau, l'électricité et tout ce qu'il faut pour vous installer.",
        de: "Der Notar trägt die Immobilie auf Ihren Namen im Nationalregister ein. Die Abschlusskosten (Steuern, Gebühren und Honorare) liegen bei etwa 3,5–4 % des Wertes. Danach helfen wir Ihnen mit Wasser, Strom und allem, was Sie zum Einleben brauchen.",
      }),
    },
  ]

  const faqs: FaqItem[] = [
    {
      question: pick({
        es: "¿Pueden los extranjeros comprar propiedad en Costa Rica?",
        en: "Can foreigners buy property in Costa Rica?",
        fr: "Les étrangers peuvent-ils acheter au Costa Rica ?",
        de: "Können Ausländer in Costa Rica Immobilien kaufen?",
      }),
      answer: pick({
        es: "Sí. Los extranjeros tienen los mismos derechos de propiedad que los costarricenses, sin necesidad de residencia. Solo necesitas un pasaporte válido. La única excepción son las concesiones en la zona marítimo-terrestre, que no aplican en La Fortuna.",
        en: "Yes. Foreigners have the same property rights as Costa Ricans, with no residency required. All you need is a valid passport. The only exception is maritime zone concessions, which don't apply in La Fortuna.",
        fr: "Oui. Les étrangers ont les mêmes droits de propriété que les Costariciens, sans besoin de résidence. Il vous suffit d'un passeport valide. La seule exception concerne les concessions de la zone maritime, qui ne s'appliquent pas à La Fortuna.",
        de: "Ja. Ausländer haben dieselben Eigentumsrechte wie Costa-Ricaner, ohne dass ein Aufenthaltsstatus nötig ist. Sie brauchen nur einen gültigen Reisepass. Die einzige Ausnahme sind Konzessionen in der Meereszone, die in La Fortuna keine Rolle spielen.",
      }),
    },
    {
      question: pick({
        es: "¿Cuánto tarda el proceso de compra?",
        en: "How long does the buying process take?",
        fr: "Combien de temps dure le processus d'achat ?",
        de: "Wie lange dauert der Kaufprozess?",
      }),
      answer: pick({
        es: "Normalmente entre 30 y 60 días desde la oferta aceptada: el estudio legal toma una o dos semanas y la inscripción en el Registro Nacional unas semanas más. Una compra de contado sencilla puede cerrarse incluso más rápido.",
        en: "Usually 30 to 60 days from the accepted offer: the legal review takes one to two weeks and registration at the National Registry a few more weeks. A simple cash purchase can close even faster.",
        fr: "Généralement de 30 à 60 jours à partir de l'offre acceptée : l'étude juridique prend une à deux semaines et l'enregistrement au Registre National quelques semaines de plus. Un achat comptant simple peut se conclure encore plus vite.",
        de: "In der Regel 30 bis 60 Tage ab Annahme des Angebots: die rechtliche Prüfung dauert ein bis zwei Wochen, die Eintragung im Nationalregister einige Wochen mehr. Ein einfacher Barkauf kann noch schneller abgeschlossen werden.",
      }),
    },
    {
      question: pick({
        es: "¿Cuáles son los costos de cierre?",
        en: "What are the closing costs?",
        fr: "Quels sont les frais de clôture ?",
        de: "Wie hoch sind die Abschlusskosten?",
      }),
      answer: pick({
        es: "Entre impuesto de traspaso (1.5%), timbres de registro (~0.85%) y honorarios notariales (1–1.5%), los costos totales rondan el 3.5–4% del valor de la propiedad. Por costumbre, comprador y vendedor suelen compartirlos por partes iguales, aunque es negociable.",
        en: "Between the transfer tax (1.5%), registry stamps (~0.85%) and notary fees (1–1.5%), total costs are around 3.5–4% of the property value. By custom, buyer and seller usually split them equally, though this is negotiable.",
        fr: "Entre l'impôt de transfert (1,5 %), les timbres d'enregistrement (~0,85 %) et les honoraires de notaire (1–1,5 %), les frais totaux avoisinent 3,5–4 % de la valeur de la propriété. Par usage, acheteur et vendeur les partagent à parts égales, mais c'est négociable.",
        de: "Mit Übertragungssteuer (1,5 %), Registergebühren (~0,85 %) und Notarhonoraren (1–1,5 %) liegen die Gesamtkosten bei etwa 3,5–4 % des Immobilienwerts. Üblicherweise teilen sich Käufer und Verkäufer diese Kosten, das ist aber verhandelbar.",
      }),
    },
    {
      question: pick({
        es: "¿Qué es el plano catastrado?",
        en: "What is the 'plano catastrado'?",
        fr: "Qu'est-ce que le « plano catastrado » ?",
        de: "Was ist der „plano catastrado“?",
      }),
      answer: pick({
        es: "Es el plano oficial de la propiedad inscrito en el Catastro Nacional: define los linderos, el área exacta y la ubicación del terreno. Toda compraventa segura se hace contra un plano catastrado vigente que coincida con lo inscrito en el Registro. Nosotras lo verificamos en cada propiedad que publicamos.",
        en: "It's the property's official survey map registered at the National Cadastre: it defines the boundaries, exact area and location of the land. Every safe purchase is made against a current registered map that matches what's recorded at the Registry. We verify it for every property we list.",
        fr: "C'est le plan officiel de la propriété inscrit au Cadastre National : il définit les limites, la superficie exacte et l'emplacement du terrain. Tout achat sûr se fait sur la base d'un plan cadastral en vigueur qui correspond à ce qui est inscrit au Registre. Nous le vérifions pour chaque propriété publiée.",
        de: "Es ist der offizielle Lageplan der Immobilie, eingetragen im Nationalkataster: Er definiert die Grenzen, die genaue Fläche und die Lage des Grundstücks. Jeder sichere Kauf erfolgt auf Basis eines gültigen Katasterplans, der mit dem Registereintrag übereinstimmt. Wir prüfen ihn bei jeder gelisteten Immobilie.",
      }),
    },
    {
      question: pick({
        es: "¿Hay financiamiento disponible?",
        en: "Is financing available?",
        fr: "Un financement est-il disponible ?",
        de: "Gibt es Finanzierungsmöglichkeiten?",
      }),
      answer: pick({
        es: "Varias de nuestras propiedades se ofrecen con financiamiento directo del vendedor, con prima y plazo negociables — una gran ventaja para extranjeros, porque los bancos locales rara vez prestan a no residentes. En cada propiedad indicamos si existe la opción, y puedes usar la calculadora de la página de detalle para estimar tu cuota.",
        en: "Several of our properties are offered with direct seller financing, with negotiable down payment and term — a big advantage for foreigners, since local banks rarely lend to non-residents. Each listing states whether the option exists, and you can use the calculator on the detail page to estimate your payment.",
        fr: "Plusieurs de nos propriétés sont proposées avec un financement direct par le vendeur, avec apport et durée négociables — un grand avantage pour les étrangers, car les banques locales prêtent rarement aux non-résidents. Chaque annonce indique si l'option existe, et vous pouvez utiliser le calculateur de la page de détail pour estimer votre mensualité.",
        de: "Mehrere unserer Immobilien werden mit direkter Verkäuferfinanzierung angeboten, mit verhandelbarer Anzahlung und Laufzeit — ein großer Vorteil für Ausländer, da lokale Banken selten an Nichtansässige verleihen. Jedes Inserat gibt an, ob die Option besteht, und mit dem Rechner auf der Detailseite können Sie Ihre Rate schätzen.",
      }),
    },
    {
      question: pick({
        es: "¿Puedo comprar sin estar en Costa Rica?",
        en: "Can I buy without being in Costa Rica?",
        fr: "Puis-je acheter sans être au Costa Rica ?",
        de: "Kann ich kaufen, ohne in Costa Rica zu sein?",
      }),
      answer: pick({
        es: "Sí. Podemos mostrarte la propiedad por videollamada, y la firma puede hacerse mediante un poder especial otorgado en un consulado de Costa Rica o apostillado en tu país. Muchos de nuestros clientes extranjeros cierran su compra a distancia.",
        en: "Yes. We can show you the property by video call, and the signing can be done through a special power of attorney granted at a Costa Rican consulate or apostilled in your country. Many of our foreign clients close their purchase remotely.",
        fr: "Oui. Nous pouvons vous montrer la propriété en visioconférence, et la signature peut se faire par procuration spéciale accordée dans un consulat du Costa Rica ou apostillée dans votre pays. Beaucoup de nos clients étrangers concluent leur achat à distance.",
        de: "Ja. Wir können Ihnen die Immobilie per Videoanruf zeigen, und die Unterzeichnung kann über eine Spezialvollmacht erfolgen, die in einem costa-ricanischen Konsulat erteilt oder in Ihrem Land apostilliert wird. Viele unserer ausländischen Kunden schließen ihren Kauf aus der Ferne ab.",
      }),
    },
  ]

  return (
    <>
      <section className="container-page py-20 md:py-28">
        <FadeIn>
          <p className="text-xs tracking-[0.22em] text-brand-gold uppercase">
            {t("nav.guide")}
          </p>
          <h1 className="mt-4 max-w-3xl font-display text-fluid-h1 leading-tight text-balance text-brand-green">
            {pick({
              es: "Cómo comprar propiedad en Costa Rica",
              en: "How to buy property in Costa Rica",
              fr: "Comment acheter une propriété au Costa Rica",
              de: "So kaufen Sie eine Immobilie in Costa Rica",
            })}
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {pick({
              es: "Comprar aquí es más sencillo de lo que parece — extranjeros incluidos. Esta guía resume el proceso, los trámites y los costos, para que compres con seguridad y sin sorpresas.",
              en: "Buying here is simpler than it looks — foreigners included. This guide covers the process, the paperwork and the costs, so you can buy safely and without surprises.",
              fr: "Acheter ici est plus simple qu'il n'y paraît — étrangers inclus. Ce guide résume le processus, les démarches et les coûts, pour acheter en toute sécurité et sans surprises.",
              de: "Hier zu kaufen ist einfacher, als es aussieht — auch für Ausländer. Dieser Ratgeber fasst den Ablauf, die Formalitäten und die Kosten zusammen, damit Sie sicher und ohne Überraschungen kaufen.",
            })}
          </p>
        </FadeIn>

        <FadeIn delay={120}>
          <div className="mt-16 border-t border-border pt-12">
            <h2 className="font-serif text-3xl text-brand-green md:text-4xl">
              {pick({
                es: "El proceso, paso a paso",
                en: "The process, step by step",
                fr: "Le processus, étape par étape",
                de: "Der Ablauf, Schritt für Schritt",
              })}
            </h2>
            <div className="mt-10 grid gap-10 md:grid-cols-2 lg:grid-cols-3">
              {steps.map((step, i) => (
                <div key={step.title}>
                  <p className="font-serif text-2xl text-brand-gold">
                    {String(i + 1).padStart(2, "0")}
                  </p>
                  <h3 className="mt-3 font-serif text-xl text-brand-green">
                    {step.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {step.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </FadeIn>
      </section>

      <section className="bg-brand-cream py-20 md:py-24">
        <div className="container-narrow">
          <FadeIn>
            <p className="text-xs tracking-[0.22em] text-brand-gold uppercase">
              FAQ
            </p>
            <h2 className="mt-4 font-display text-fluid-h2 leading-tight text-balance text-brand-green">
              {pick({
                es: "Preguntas frecuentes",
                en: "Frequently asked questions",
                fr: "Questions fréquentes",
                de: "Häufige Fragen",
              })}
            </h2>
            <div className="mt-10">
              <FaqAccordion items={faqs} />
            </div>
          </FadeIn>
        </div>
      </section>

      <section className="container-narrow py-20 text-center md:py-24">
        <FadeIn>
          <h2 className="font-display text-fluid-h2 leading-tight text-balance text-brand-green">
            {pick({
              es: "¿Tienes otra pregunta?",
              en: "Have another question?",
              fr: "Une autre question ?",
              de: "Noch eine Frage?",
            })}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-muted-foreground">
            {pick({
              es: "Escríbenos por WhatsApp y te la respondemos sin compromiso. También podemos revisar juntos las propiedades disponibles.",
              en: "Message us on WhatsApp and we'll answer it, no strings attached. We can also go over the available properties together.",
              fr: "Écrivez-nous sur WhatsApp et nous vous répondrons sans engagement. Nous pouvons aussi passer en revue les propriétés disponibles ensemble.",
              de: "Schreiben Sie uns auf WhatsApp und wir beantworten sie unverbindlich. Wir können auch gemeinsam die verfügbaren Immobilien durchgehen.",
            })}
          </p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <a
              href={whatsappLink(
                pick({
                  es: "Hola, tengo una pregunta sobre el proceso de compra en Costa Rica.",
                  en: "Hi, I have a question about the buying process in Costa Rica.",
                  fr: "Bonjour, j'ai une question sur le processus d'achat au Costa Rica.",
                  de: "Hallo, ich habe eine Frage zum Kaufprozess in Costa Rica.",
                })
              )}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-full bg-brand-green px-7 py-3.5 text-sm tracking-wide text-brand-cream transition-colors hover:bg-brand-green-dark"
            >
              WhatsApp · {SITE.whatsappDisplay}
            </a>
            <Link
              href="/properties"
              className="inline-flex items-center rounded-full border border-border px-7 py-3.5 text-sm tracking-wide text-brand-green transition-colors hover:border-brand-gold"
            >
              {t("hero.ctaProperties")} →
            </Link>
          </div>
        </FadeIn>
      </section>
    </>
  )
}
