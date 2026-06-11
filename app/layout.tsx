import type { Metadata } from "next"
import { Cormorant_Garamond, Inter } from "next/font/google"

import "./globals.css"
import { LanguageProvider } from "@/lib/i18n/provider"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"
import { cn } from "@/lib/utils"
import { SITE } from "@/lib/constants"

const fontSerif = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-serif",
  weight: ["400", "500", "600"],
})

const fontSans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
})

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
        <LanguageProvider>
          <Navbar />
          <main className="pt-16 md:pt-20">{children}</main>
          <Footer />
          <WhatsAppFloat />
        </LanguageProvider>
      </body>
    </html>
  )
}
