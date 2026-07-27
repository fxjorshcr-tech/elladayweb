export const SITE = {
  name: "EllaDay Homes",
  tagline: "Real Estate in La Fortuna",
  whatsapp: "50662308356",
  whatsappDisplay: "+506 6230-8356",
  instagram: "elladayhomes",
  location: "La Fortuna, San Carlos, Costa Rica",
} as const

export const whatsappLink = (message?: string) => {
  const base = `https://wa.me/${SITE.whatsapp}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}
