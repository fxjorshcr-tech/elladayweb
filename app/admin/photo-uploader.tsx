"use client"

import * as React from "react"
import Image from "next/image"

import { compressImage } from "@/lib/admin/image-compress"
import type { PropertyImage } from "@/lib/properties"
import { createUploadUrl, deleteUploadedPhoto } from "./actions"

type UploadItem = {
  key: string
  name: string
  status: "compressing" | "uploading" | "error"
  error?: string
}

export function PhotoUploader({
  images,
  onChange,
  slug,
  alt,
}: {
  images: PropertyImage[]
  // Functional updater so concurrent uploads never overwrite each other.
  onChange: (update: (prev: PropertyImage[]) => PropertyImage[]) => void
  slug: string
  alt: string
}) {
  const [uploads, setUploads] = React.useState<UploadItem[]>([])
  const [dragging, setDragging] = React.useState(false)
  const inputRef = React.useRef<HTMLInputElement>(null)
  // Paths uploaded during this editing session that are not yet saved; those
  // can be removed from storage immediately when the user discards them.
  const unsaved = React.useRef(new Set<string>())

  const patchUpload = (key: string, patch: Partial<UploadItem>) =>
    setUploads((list) =>
      list.map((u) => (u.key === key ? { ...u, ...patch } : u))
    )

  const handleFiles = async (files: FileList | File[]) => {
    const list = Array.from(files).filter((f) => f.type.startsWith("image/"))
    if (list.length === 0) return

    await Promise.all(
      list.map(async (file) => {
        const key = `${file.name}-${Date.now()}-${Math.random()}`
        setUploads((u) => [
          ...u,
          { key, name: file.name, status: "compressing" },
        ])
        try {
          const blob = await compressImage(file)
          patchUpload(key, { status: "uploading" })

          const res = await createUploadUrl(slug || "nueva", file.name)
          if (!res.ok) throw new Error(res.error)

          const put = await fetch(res.data.signedUrl, {
            method: "PUT",
            headers: { "Content-Type": blob.type || "image/jpeg" },
            body: blob,
          })
          if (!put.ok) {
            throw new Error(`La subida falló (${put.status})`)
          }

          unsaved.current.add(res.data.path)
          const next: PropertyImage = {
            src: res.data.publicUrl,
            alt,
            path: res.data.path,
          }
          onChange((prev) => [...prev, next])
          setUploads((u) => u.filter((x) => x.key !== key))
        } catch (e) {
          patchUpload(key, {
            status: "error",
            error: e instanceof Error ? e.message : "Error al subir",
          })
        }
      })
    )
  }

  const remove = async (index: number) => {
    const img = images[index]
    onChange((prev) => prev.filter((i) => i.src !== img.src))
    if (img.path && unsaved.current.has(img.path)) {
      unsaved.current.delete(img.path)
      await deleteUploadedPhoto(img.path)
    }
  }

  const move = (index: number, dir: -1 | 1) => {
    const target = index + dir
    if (target < 0 || target >= images.length) return
    onChange((prev) => {
      const next = [...prev]
      const [item] = next.splice(index, 1)
      next.splice(target, 0, item)
      return next
    })
  }

  const makeCover = (index: number) => {
    if (index === 0) return
    onChange((prev) => {
      const next = [...prev]
      const [item] = next.splice(index, 1)
      return [item, ...next]
    })
  }

  return (
    <div className="space-y-4">
      <div
        onDragOver={(e) => {
          e.preventDefault()
          setDragging(true)
        }}
        onDragLeave={() => setDragging(false)}
        onDrop={(e) => {
          e.preventDefault()
          setDragging(false)
          void handleFiles(e.dataTransfer.files)
        }}
        onClick={() => inputRef.current?.click()}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") inputRef.current?.click()
        }}
        className={`cursor-pointer rounded-md border-2 border-dashed p-8 text-center transition-colors ${
          dragging
            ? "border-brand-gold bg-brand-gold/10"
            : "border-border bg-white/60 hover:border-brand-gold"
        }`}
      >
        <p className="font-serif text-lg text-brand-green">
          Arrastra las fotos aquí o haz clic para elegirlas
        </p>
        <p className="mt-1 text-xs text-muted-foreground">
          JPG, PNG o WebP. Se comprimen automáticamente antes de subirse. La
          primera foto es la portada.
        </p>
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          multiple
          className="hidden"
          onChange={(e) => {
            if (e.target.files) void handleFiles(e.target.files)
            e.target.value = ""
          }}
        />
      </div>

      {uploads.length > 0 && (
        <ul className="space-y-1 text-xs">
          {uploads.map((u) => (
            <li
              key={u.key}
              className={`flex items-center justify-between rounded-md px-3 py-2 ${
                u.status === "error" ? "bg-red-50 text-red-700" : "bg-muted"
              }`}
            >
              <span className="truncate">{u.name}</span>
              <span className="ml-3 flex-none">
                {u.status === "compressing" && "Comprimiendo…"}
                {u.status === "uploading" && "Subiendo…"}
                {u.status === "error" && (
                  <>
                    {u.error}{" "}
                    <button
                      type="button"
                      className="underline"
                      onClick={() =>
                        setUploads((l) => l.filter((x) => x.key !== u.key))
                      }
                    >
                      cerrar
                    </button>
                  </>
                )}
              </span>
            </li>
          ))}
        </ul>
      )}

      {images.length > 0 && (
        <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
          {images.map((img, i) => (
            <li
              key={img.src}
              className="group relative overflow-hidden rounded-md border border-border bg-muted"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={img.src}
                  alt={img.alt}
                  fill
                  sizes="(min-width: 768px) 25vw, 50vw"
                  className="object-cover"
                />
              </div>
              {i === 0 && (
                <span className="absolute top-2 left-2 rounded-full bg-brand-green px-2 py-0.5 text-[10px] font-semibold tracking-[0.16em] text-brand-cream uppercase">
                  Portada
                </span>
              )}
              <div className="flex items-center justify-between gap-1 bg-brand-cream p-1.5 text-xs">
                <div className="flex gap-1">
                  <IconBtn
                    label="Mover antes"
                    disabled={i === 0}
                    onClick={() => move(i, -1)}
                  >
                    ←
                  </IconBtn>
                  <IconBtn
                    label="Mover después"
                    disabled={i === images.length - 1}
                    onClick={() => move(i, 1)}
                  >
                    →
                  </IconBtn>
                  {i !== 0 && (
                    <IconBtn label="Usar como portada" onClick={() => makeCover(i)}>
                      ★
                    </IconBtn>
                  )}
                </div>
                <button
                  type="button"
                  onClick={() => void remove(i)}
                  className="rounded px-2 py-1 text-red-700 hover:bg-red-50"
                  aria-label="Quitar foto"
                >
                  Quitar
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

function IconBtn({
  label,
  onClick,
  disabled,
  children,
}: {
  label: string
  onClick: () => void
  disabled?: boolean
  children: React.ReactNode
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled}
      aria-label={label}
      title={label}
      className="rounded px-2 py-1 text-brand-green hover:bg-muted disabled:opacity-30"
    >
      {children}
    </button>
  )
}
