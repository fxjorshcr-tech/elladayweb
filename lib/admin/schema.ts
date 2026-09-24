import { z } from "zod"

// Shared between the admin form (client) and the server actions.

const optionalNumber = z
  .union([z.number(), z.null(), z.undefined()])
  .transform((v) => (v == null || Number.isNaN(v) ? null : v))

const nonEmptyLines = z
  .array(z.string())
  .transform((arr) => arr.map((s) => s.trim()).filter(Boolean))

export const SpanishCopySchema = z.object({
  title: z.string().trim().min(3, "El título es obligatorio"),
  location: z.string().trim().min(2, "La ubicación es obligatoria"),
  shortDescription: z
    .string()
    .trim()
    .min(10, "Escribe un resumen corto (mínimo 10 caracteres)"),
  description: nonEmptyLines.refine(
    (a) => a.length > 0,
    "Escribe al menos un párrafo de descripción"
  ),
  highlights: nonEmptyLines,
})

const LangCopySchema = z.object({
  title: z.string(),
  location: z.string(),
  shortDescription: z.string(),
  description: z.array(z.string()),
  highlights: z.array(z.string()),
})

export const TranslationsSchema = z.object({
  en: LangCopySchema,
  fr: LangCopySchema,
  de: LangCopySchema,
})

export const ImageSchema = z.object({
  src: z.string().url(),
  alt: z.string(),
  path: z.string().optional(),
})

export const STATUS_VALUES = ["available", "new", "sold"] as const
export type ListingStatus = (typeof STATUS_VALUES)[number]

export const PropertyInputSchema = z.object({
  id: z.string().uuid().optional(),
  slug: z
    .string()
    .trim()
    .min(3, "El enlace (slug) es obligatorio")
    .regex(/^[a-z0-9-]+$/, "El enlace solo puede tener letras, números y guiones"),
  type: z.enum(["house", "lot", "farm"]),
  agent: z.enum(["dayana", "ella"]),
  status: z.enum(STATUS_VALUES),
  published: z.boolean(),
  price: z.number().min(0),
  currency: z.enum(["USD", "CRC"]),
  negotiable: z.boolean(),
  priceOnRequest: z.boolean(),
  previousPrice: optionalNumber,
  bedrooms: optionalNumber,
  bathrooms: optionalNumber,
  builtArea: optionalNumber,
  lotSize: optionalNumber,
  lotUnit: z.enum(["m2", "ha"]),
  mapQuery: z.string().trim(),
  es: SpanishCopySchema,
  translations: TranslationsSchema.nullable(),
  images: z.array(ImageSchema),
})

export type PropertyInput = z.input<typeof PropertyInputSchema>
export type ParsedPropertyInput = z.output<typeof PropertyInputSchema>
