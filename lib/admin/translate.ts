import "server-only"

import Anthropic from "@anthropic-ai/sdk"
import { zodOutputFormat } from "@anthropic-ai/sdk/helpers/zod"
import { z } from "zod"

/** Spanish source text the agents write in the admin form. */
export type SpanishCopy = {
  title: string
  location: string
  shortDescription: string
  description: string[]
  highlights: string[]
}

const LangCopy = z.object({
  title: z.string(),
  location: z.string(),
  shortDescription: z.string(),
  description: z.array(z.string()),
  highlights: z.array(z.string()),
})

const Translations = z.object({
  en: LangCopy,
  fr: LangCopy,
  de: LangCopy,
})

export type Translations = z.infer<typeof Translations>

export function isTranslationConfigured(): boolean {
  return Boolean(process.env.ANTHROPIC_API_KEY)
}

const SYSTEM = `You translate real-estate listings for EllaDay Homes, a boutique agency in La Fortuna, San Carlos, Costa Rica.

Translate the Spanish copy into English, French and German.
- Keep the warm, professional tone of a premium listing; do not add or remove information.
- Keep place names, "La Fortuna", "San Carlos", "Arenal", brand names, numbers, units (m², ha) and currency amounts exactly as written.
- Preserve the paragraph count in "description" and the item count in "highlights" — translate each entry one-to-one.
- "location" is a short place label (e.g. "El Bosque, La Fortuna, San Carlos"); usually it stays identical.
- Use natural, idiomatic phrasing a native speaker would write, e.g. "Lot"/"Terrain"/"Grundstück" for lote, "Farm"/"Finca"/"Finca" for finca.`

/**
 * Generates EN/FR/DE copy from the Spanish source with Claude. Returns the
 * three translations validated against the schema above.
 */
export async function translateCopy(es: SpanishCopy): Promise<Translations> {
  if (!isTranslationConfigured()) {
    throw new Error(
      "La traducción automática no está configurada (falta ANTHROPIC_API_KEY)."
    )
  }
  const client = new Anthropic()

  const response = await client.messages.parse({
    model: "claude-opus-5",
    max_tokens: 16000,
    system: SYSTEM,
    output_config: { effort: "medium", format: zodOutputFormat(Translations) },
    messages: [
      {
        role: "user",
        content: `Translate this listing:\n\n${JSON.stringify(es, null, 2)}`,
      },
    ],
  })

  if (response.stop_reason === "refusal") {
    throw new Error("El modelo no pudo traducir este texto. Intenta de nuevo.")
  }
  const parsed = response.parsed_output
  if (!parsed) {
    throw new Error("La traducción no llegó en el formato esperado. Intenta de nuevo.")
  }
  return parsed
}
