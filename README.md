# EllaDay Homes

Sitio web de EllaDay Homes (Next.js 16 + Tailwind) con un panel de
administración en `/admin` para que Dayana y Ella publiquen y gestionen las
propiedades sin tocar código.

## Cómo funciona

- **Propiedades** viven en la tabla `properties` de Supabase. El sitio público
  lee solo las publicadas; el panel ve todo (publicadas y borradores).
- **Fotos** se suben desde el navegador directo al bucket público `properties`
  de Supabase Storage (comprimidas antes de subir), usando URLs firmadas que
  emite el servidor. Nunca pasan por Vercel.
- **Idiomas**: las agentes escriben en español. Al publicar, el inglés, francés
  y alemán se generan con Claude (Anthropic API) y se guardan junto a la
  propiedad. Si se edita el texto en español, se vuelve a traducir.
- **Publicar** guarda en la base de datos y purga la caché del sitio
  (`revalidatePath`), así que el cambio se ve en segundos sin redeploy.
- **Acceso**: una clave por persona (`ADMIN_PASSWORD_DAYANA`,
  `ADMIN_PASSWORD_ELLA`). La sesión es una cookie firmada de 14 días.
- Si Supabase no está configurado, el sitio muestra las propiedades del
  archivo `lib/properties.ts` como respaldo.

## Puesta en marcha (una sola vez)

1. **Supabase → SQL Editor**: pega y ejecuta, en orden,
   `supabase/migrations/0001_properties.sql` (tabla, políticas y bucket) y
   `supabase/migrations/0002_seed_properties.sql` (las 9 propiedades
   actuales). Ambos se pueden re-ejecutar sin problema.
2. **Supabase → Project Settings → API**: copia `anon public` y
   `service_role`.
3. **Anthropic Console** (console.anthropic.com): crea una API key para la
   traducción automática.
4. **Vercel → Project → Settings → Environment Variables**: agrega las
   variables de `.env.example` (URL y claves de Supabase, las dos claves del
   panel y `ANTHROPIC_API_KEY`). Guarda y haz **Redeploy**.
5. Entra a `https://elladayhome.com/admin` con tu clave.

## Uso del panel

- **Nueva propiedad** → llena tipo, estado (Disponible / Nueva / Vendida),
  precio (₡ o $, negociable, a consultar, precio anterior para «Rebajado»),
  medidas, textos en español y fotos. **Publicar** la deja en línea;
  **Guardar borrador** la deja oculta.
- En la lista, cada propiedad tiene botones de **Editar**, **Publicar /
  Despublicar**, **Marcar vendida / disponible** y **Eliminar** (borra
  también sus fotos).
- La primera foto es la portada; se puede reordenar con las flechas o el ★.

## Desarrollo

```bash
cp .env.example .env.local   # y llena las variables
npm install
npm run dev
```

`npm run typecheck`, `npm run lint` y `npm run build` antes de subir cambios.
Si cambias `lib/properties.ts`, regenera el seed con
`node scripts/generate-seed.mjs`.
