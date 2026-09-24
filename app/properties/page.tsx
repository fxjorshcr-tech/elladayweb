import type { Metadata } from "next"

import { getPublishedProperties } from "@/lib/properties-repo"
import { PropertiesClient } from "./properties-client"

export const metadata: Metadata = {
  title: "Propiedades en La Fortuna",
  description:
    "Lotes, casas y fincas en venta en La Fortuna y San Carlos, Costa Rica.",
  alternates: { canonical: "/properties" },
}

export default async function PropertiesPage() {
  const properties = await getPublishedProperties()
  return <PropertiesClient properties={properties} />
}
