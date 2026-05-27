export const SITE = {
  name: "EllaDay Homes",
  tagline: "Real Estate in La Fortuna",
  whatsapp: "50664020005",
  whatsappDisplay: "+506 6402-0005",
  email: "contacto@elladayhome.com",
  instagram: "elladayhomes",
  location: "La Fortuna, San Carlos, Costa Rica",
} as const

export const whatsappLink = (message?: string) => {
  const base = `https://wa.me/${SITE.whatsapp}`
  if (!message) return base
  return `${base}?text=${encodeURIComponent(message)}`
}
