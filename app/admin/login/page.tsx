import { redirect } from "next/navigation"

import { getAdminSession } from "@/lib/admin/auth"
import { LoginForm } from "./login-form"

export default async function AdminLoginPage() {
  if (await getAdminSession()) redirect("/admin")

  return (
    <div className="mx-auto max-w-sm py-16">
      <p className="text-xs tracking-[0.22em] text-brand-gold uppercase">
        Acceso privado
      </p>
      <h1 className="mt-3 font-serif text-3xl text-brand-green">
        Panel de propiedades
      </h1>
      <p className="mt-3 text-sm text-muted-foreground">
        Ingresa tu clave personal para administrar las propiedades del sitio.
      </p>
      <div className="mt-8">
        <LoginForm />
      </div>
    </div>
  )
}
