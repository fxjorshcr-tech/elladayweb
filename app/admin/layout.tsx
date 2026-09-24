import type { Metadata } from "next"
import Link from "next/link"

import { ADMIN_NAMES, getAdminSession } from "@/lib/admin/auth"
import { logoutAction } from "./actions"

export const metadata: Metadata = {
  title: "Panel de propiedades",
  robots: { index: false, follow: false },
}

export default async function AdminLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const session = await getAdminSession()

  return (
    <div className="min-h-screen bg-brand-bg">
      <header className="border-b border-border bg-brand-cream">
        <div className="container-page flex h-16 items-center justify-between">
          <Link href="/admin" className="flex items-baseline gap-2">
            <span className="font-serif text-xl text-brand-green">
              EllaDay Homes
            </span>
            <span className="text-xs tracking-[0.18em] text-brand-gold uppercase">
              Panel
            </span>
          </Link>
          {session ? (
            <div className="flex items-center gap-4 text-sm">
              <Link
                href="/"
                target="_blank"
                className="hidden text-muted-foreground hover:text-brand-green sm:inline"
              >
                Ver sitio ↗
              </Link>
              <span className="hidden text-muted-foreground sm:inline">
                Hola, {ADMIN_NAMES[session.agent]}
              </span>
              <form action={logoutAction}>
                <button
                  type="submit"
                  className="rounded-full border border-border px-3 py-1.5 text-xs tracking-wide text-brand-green transition-colors hover:bg-muted"
                >
                  Salir
                </button>
              </form>
            </div>
          ) : null}
        </div>
      </header>
      <div className="container-page py-10">{children}</div>
    </div>
  )
}
