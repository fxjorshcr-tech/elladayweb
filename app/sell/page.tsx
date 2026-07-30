import type { Metadata } from "next"
import { SellClient } from "./sell-client"

export const metadata: Metadata = {
  title: "Vende tu propiedad · Sell your property",
  description:
    "¿Quieres vender tu lote, casa o finca en La Fortuna y la Zona Norte? Publicamos tu propiedad, la promocionamos y te acompañamos hasta el cierre. Sin costo inicial.",
  alternates: { canonical: "/sell" },
  openGraph: {
    title: "Vende tu propiedad · EllaDay Homes",
    description:
      "Publicamos tu lote, casa o finca en La Fortuna, la promocionamos y te acompañamos hasta el cierre.",
    url: "/sell",
    type: "website",
  },
}

export default function SellPage() {
  return <SellClient />
}
