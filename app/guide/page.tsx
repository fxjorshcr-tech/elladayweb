import type { Metadata } from "next"
import { GuideClient } from "./guide-client"

export const metadata: Metadata = {
  title: "Guía del comprador · Buyer's Guide",
  description:
    "Cómo comprar propiedad en Costa Rica: pasos, trámites, plano catastrado, costos de cierre y financiamiento. Guía para compradores locales y extranjeros en La Fortuna.",
  alternates: { canonical: "/guide" },
  openGraph: {
    title: "Guía del comprador · EllaDay Homes",
    description:
      "Cómo comprar propiedad en Costa Rica: pasos, trámites, costos de cierre y financiamiento en La Fortuna.",
    url: "/guide",
    type: "website",
  },
}

export default function GuidePage() {
  return <GuideClient />
}
