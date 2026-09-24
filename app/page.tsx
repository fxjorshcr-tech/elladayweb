import { getPublishedProperties, getZones } from "@/lib/properties-repo"
import { HomeClient } from "./home-client"

export default async function HomePage() {
  const [properties, zones] = await Promise.all([
    getPublishedProperties(),
    getZones(),
  ])
  return <HomeClient properties={properties} zones={zones} />
}
