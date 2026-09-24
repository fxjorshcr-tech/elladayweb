"use client"

import { usePathname } from "next/navigation"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { WhatsAppFloat } from "@/components/whatsapp-float"

/**
 * Public-site navigation, footer and WhatsApp bubble. Hidden on the admin
 * panel, which has its own minimal chrome.
 */
export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()
  if (pathname?.startsWith("/admin")) {
    return <main>{children}</main>
  }
  return (
    <>
      <Navbar />
      <main className="pt-16 md:pt-20">{children}</main>
      <Footer />
      <WhatsAppFloat />
    </>
  )
}
