import Image from "next/image"
import Link from "next/link"
import { redirect } from "next/navigation"

import { getAdminSession } from "@/lib/admin/auth"
import { formatPrice, type Property } from "@/lib/properties"
import { adminListProperties } from "@/lib/properties-repo"
import { isSupabaseConfigured } from "@/lib/supabase/server"
import { PropertyRowActions } from "./property-row-actions"

export const dynamic = "force-dynamic"

const typeLabel = { house: "Casa", lot: "Lote", farm: "Finca" } as const

export default async function AdminHomePage() {
  const session = await getAdminSession()
  if (!session) redirect("/admin/login")

  if (!isSupabaseConfigured() || !process.env.SUPABASE_SERVICE_ROLE_KEY) {
    return (
      <SetupNotice />
    )
  }

  let list: Property[]
  try {
    list = await adminListProperties()
  } catch (e) {
    return (
      <div className="rounded-md border border-red-200 bg-red-50 p-6 text-sm text-red-800">
        No se pudo leer la tabla <code>properties</code>:{" "}
        {e instanceof Error ? e.message : "error desconocido"}. Revisa que la
        migración SQL se haya ejecutado en Supabase.
      </div>
    )
  }

  const published = list.filter((p) => p.published)
  const drafts = list.filter((p) => !p.published)

  return (
    <div>
      <div className="flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="text-xs tracking-[0.22em] text-brand-gold uppercase">
            Propiedades
          </p>
          <h1 className="mt-3 font-serif text-3xl text-brand-green md:text-4xl">
            {list.length} {list.length === 1 ? "propiedad" : "propiedades"}
          </h1>
          <p className="mt-2 text-sm text-muted-foreground">
            {published.length} publicadas · {drafts.length} en borrador ·{" "}
            {published.filter((p) => p.sold).length} vendidas
          </p>
        </div>
        <Link
          href="/admin/properties/new"
          className="w-full rounded-full bg-brand-green px-6 py-3.5 text-center text-sm tracking-wide text-brand-cream transition-colors hover:bg-brand-green-dark sm:w-auto"
        >
          + Nueva propiedad
        </Link>
      </div>

      {list.length === 0 ? (
        <div className="mt-12 rounded-md border border-dashed border-border p-12 text-center text-muted-foreground">
          Aún no hay propiedades. Crea la primera con el botón «Nueva propiedad».
        </div>
      ) : (
        <ul className="mt-10 divide-y divide-border rounded-md border border-border bg-brand-cream">
          {list.map((p) => (
            <li
              key={p.id}
              className="flex flex-col gap-4 p-4 sm:flex-row sm:items-center"
            >
              <div className="relative h-20 w-28 flex-none overflow-hidden rounded-sm bg-muted">
                {p.images[0] ? (
                  <Image
                    src={p.images[0].src}
                    alt=""
                    fill
                    sizes="112px"
                    className="object-cover"
                  />
                ) : null}
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex flex-wrap items-center gap-2">
                  <Badge tone={p.published ? "green" : "muted"}>
                    {p.published ? "Publicada" : "Borrador"}
                  </Badge>
                  {p.sold && <Badge tone="red">Vendida</Badge>}
                  {!p.sold && p.isNew && <Badge tone="gold">Nueva</Badge>}
                  {!p.sold && p.previousPrice != null && (
                    <Badge tone="gold">Rebajada</Badge>
                  )}
                </div>
                <Link
                  href={`/admin/properties/${p.id}`}
                  className="mt-2 block truncate font-serif text-xl text-brand-green hover:underline"
                >
                  {p.title.es}
                </Link>
                <p className="mt-1 truncate text-sm text-muted-foreground">
                  {typeLabel[p.type]} · {p.location.es} ·{" "}
                  {p.priceOnRequest
                    ? "Precio a consultar"
                    : formatPrice(p.price, "es", p.currency)}
                  {" · "}
                  {p.images.length} foto{p.images.length === 1 ? "" : "s"}
                </p>
              </div>
              <PropertyRowActions property={p} />
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function Badge({
  tone,
  children,
}: {
  tone: "green" | "red" | "gold" | "muted"
  children: React.ReactNode
}) {
  const classes = {
    green: "bg-brand-green text-brand-cream",
    red: "bg-red-600 text-white",
    gold: "bg-brand-gold text-white",
    muted: "bg-muted text-muted-foreground",
  }[tone]
  return (
    <span
      className={`rounded-full px-2.5 py-0.5 text-[10px] font-semibold tracking-[0.16em] uppercase ${classes}`}
    >
      {children}
    </span>
  )
}

function SetupNotice() {
  return (
    <div className="max-w-2xl space-y-4 rounded-md border border-brand-gold/40 bg-brand-cream p-8 text-sm leading-relaxed text-foreground">
      <h1 className="font-serif text-2xl text-brand-green">
        Falta conectar Supabase
      </h1>
      <p>
        Para que el panel pueda guardar propiedades, configura estas variables
        de entorno en Vercel (Settings → Environment Variables) y vuelve a
        desplegar:
      </p>
      <ul className="list-disc space-y-1 pl-5 font-mono text-xs">
        <li>NEXT_PUBLIC_SUPABASE_URL</li>
        <li>NEXT_PUBLIC_SUPABASE_ANON_KEY</li>
        <li>SUPABASE_SERVICE_ROLE_KEY</li>
      </ul>
      <p>
        Luego ejecuta los archivos de <code>supabase/migrations</code> en el
        SQL Editor de Supabase. Los pasos completos están en el README del
        proyecto.
      </p>
    </div>
  )
}
