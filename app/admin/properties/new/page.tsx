import { redirect } from "next/navigation"

import { getAdminSession } from "@/lib/admin/auth"
import { isTranslationConfigured } from "@/lib/admin/translate"
import { PropertyForm } from "../../property-form"

export default async function NewPropertyPage() {
  const session = await getAdminSession()
  if (!session) redirect("/admin/login")

  return (
    <PropertyForm
      defaultAgent={session.agent}
      translationEnabled={isTranslationConfigured()}
    />
  )
}
