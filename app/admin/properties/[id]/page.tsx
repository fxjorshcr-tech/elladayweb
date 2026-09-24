import { notFound, redirect } from "next/navigation"

import { getAdminSession } from "@/lib/admin/auth"
import { isTranslationConfigured } from "@/lib/admin/translate"
import { adminGetProperty } from "@/lib/properties-repo"
import { PropertyForm } from "../../property-form"

export const dynamic = "force-dynamic"

export default async function EditPropertyPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const session = await getAdminSession()
  if (!session) redirect("/admin/login")

  const { id } = await params
  const property = await adminGetProperty(id)
  if (!property) notFound()

  return (
    <PropertyForm
      property={property}
      defaultAgent={session.agent}
      translationEnabled={isTranslationConfigured()}
    />
  )
}
