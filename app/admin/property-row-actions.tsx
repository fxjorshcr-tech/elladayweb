"use client"

import * as React from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"

import type { Property } from "@/lib/properties"
import { deletePropertyAction, setFlagsAction } from "./actions"

export function PropertyRowActions({ property }: { property: Property }) {
  const router = useRouter()
  const [busy, setBusy] = React.useState<string | null>(null)
  const [error, setError] = React.useState<string | null>(null)

  const run = async (
    key: string,
    fn: () => Promise<{ ok: boolean; error?: string }>
  ) => {
    setBusy(key)
    setError(null)
    const res = await fn()
    if (!res.ok) setError(res.error ?? "Error")
    setBusy(null)
    router.refresh()
  }

  const id = property.id!

  return (
    <div className="flex flex-none flex-col items-stretch gap-2 sm:items-end">
      <div className="flex flex-wrap gap-2">
        <Link
          href={`/admin/properties/${id}`}
          className="rounded-full border border-border px-3 py-1.5 text-xs tracking-wide text-brand-green transition-colors hover:bg-muted"
        >
          Editar
        </Link>
        <button
          type="button"
          disabled={busy !== null}
          onClick={() =>
            run("published", () =>
              setFlagsAction(id, { published: !property.published })
            )
          }
          className="rounded-full border border-border px-3 py-1.5 text-xs tracking-wide text-brand-green transition-colors hover:bg-muted disabled:opacity-50"
        >
          {busy === "published"
            ? "…"
            : property.published
              ? "Despublicar"
              : "Publicar"}
        </button>
        <button
          type="button"
          disabled={busy !== null}
          onClick={() =>
            run("sold", () => setFlagsAction(id, { sold: !property.sold }))
          }
          className={`rounded-full px-3 py-1.5 text-xs tracking-wide transition-colors disabled:opacity-50 ${
            property.sold
              ? "border border-border text-brand-green hover:bg-muted"
              : "bg-red-600 text-white hover:bg-red-700"
          }`}
        >
          {busy === "sold"
            ? "…"
            : property.sold
              ? "Marcar disponible"
              : "Marcar vendida"}
        </button>
        <button
          type="button"
          disabled={busy !== null}
          onClick={() => {
            if (
              window.confirm(
                `¿Eliminar «${property.title.es}»? Se borrarán también sus fotos. Esta acción no se puede deshacer.`
              )
            ) {
              run("delete", () => deletePropertyAction(id))
            }
          }}
          className="rounded-full px-3 py-1.5 text-xs tracking-wide text-red-700 transition-colors hover:bg-red-50 disabled:opacity-50"
        >
          {busy === "delete" ? "…" : "Eliminar"}
        </button>
      </div>
      {error && <p className="text-xs text-red-700">{error}</p>}
    </div>
  )
}
