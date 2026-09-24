import type { Metadata, Viewport } from "next"
import { Fraunces, Inter } from "next/font/google"

import "./globals.css"
import { LanguageProvider } from "@/lib/i18n/provider"
import { SiteChrome } from "@/components/site-chrome"
import { cn } from "@/lib/utils"
import { SITE } from "@/lib/constants"

const fontSerif = Fraunces({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
})

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

export const viewport: Viewport = {
  themeColor: "#eef1e7",
  viewportFit: "cover",
}

export const metadata: Metadata = {
  metadataBase: new URL("https://elladayhome.com"),
  title: {
    default: `${SITE.name} · ${SITE.tagline}`,
    template: `%s · ${SITE.name}`,
  },
  description:
    "Boutique real estate in La Fortuna, Costa Rica. Homes, lots and farms curated by local agents Dayana Sibaja and Ella Calero.",
  openGraph: {
    title: `${SITE.name} · ${SITE.tagline}`,
    description:
      "Boutique real estate in La Fortuna, Costa Rica. Homes, lots and farms curated by local agents.",
    type: "website",
    locale: "es_CR",
    alternateLocale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE.name} · ${SITE.tagline}`,
  },
}

const agencyJsonLd = {
  "@context": "https://schema.org",
  "@type": "RealEstateAgent",
  name: SITE.name,
  description:
    "Boutique real estate agency selling lots, homes and farms in La Fortuna, Costa Rica.",
  url: "https://elladayhome.com",
  telephone: "+50662308356",
  address: {
    "@type": "PostalAddress",
    addressLocality: "La Fortuna",
    addressRegion: "Alajuela",
    addressCountry: "CR",
  },
  areaServed: "La Fortuna, San Carlos, Costa Rica",
  sameAs: [`https://instagram.com/${SITE.instagram}`],
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="es"
      suppressHydrationWarning
      className={cn("antialiased", fontSerif.variable, fontSans.variable)}
    >
      <body className="font-sans">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(agencyJsonLd) }}
        />
        <LanguageProvider>
          <SiteChrome>{children}</SiteChrome>
        </LanguageProvider>
      </body>
    </html>
  )
}
