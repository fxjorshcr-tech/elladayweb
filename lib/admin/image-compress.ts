// Browser-only helper: shrinks phone/WhatsApp photos before upload so pages
// stay fast and storage stays cheap. Output is always JPEG.

const MAX_EDGE = 2000
const QUALITY = 0.84

function loadImage(file: File): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const url = URL.createObjectURL(file)
    const img = new Image()
    img.onload = () => {
      URL.revokeObjectURL(url)
      resolve(img)
    }
    img.onerror = () => {
      URL.revokeObjectURL(url)
      reject(new Error(`No se pudo leer la imagen ${file.name}`))
    }
    img.src = url
  })
}

export async function compressImage(file: File): Promise<Blob> {
  // Anything that isn't a raster image we can decode is rejected up front.
  if (!file.type.startsWith("image/")) {
    throw new Error(`${file.name} no es una imagen`)
  }

  const img = await loadImage(file)
  const scale = Math.min(1, MAX_EDGE / Math.max(img.width, img.height))
  const width = Math.round(img.width * scale)
  const height = Math.round(img.height * scale)

  const canvas = document.createElement("canvas")
  canvas.width = width
  canvas.height = height
  const ctx = canvas.getContext("2d")
  if (!ctx) throw new Error("El navegador no soporta la compresión de imágenes")
  ctx.drawImage(img, 0, 0, width, height)

  const blob = await new Promise<Blob | null>((resolve) =>
    canvas.toBlob(resolve, "image/jpeg", QUALITY)
  )
  if (!blob) throw new Error(`No se pudo comprimir ${file.name}`)

  // If compression didn't help (already small JPEG), keep the original.
  return blob.size < file.size || file.type !== "image/jpeg" ? blob : file
}

export function slugify(input: string): string {
  return input
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "")
    .slice(0, 80)
}
