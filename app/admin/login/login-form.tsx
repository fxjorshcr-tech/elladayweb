"use client"

import * as React from "react"

import { loginAction, type LoginState } from "../actions"

export function LoginForm() {
  const [state, action, pending] = React.useActionState<LoginState, FormData>(
    loginAction,
    {}
  )

  return (
    <form action={action} className="space-y-4">
      <label className="block">
        <span className="text-xs tracking-[0.16em] text-muted-foreground uppercase">
          Clave
        </span>
        <input
          type="password"
          name="password"
          required
          autoFocus
          autoComplete="current-password"
          className="mt-2 w-full rounded-md border border-border bg-white px-4 py-3.5 text-base text-brand-green outline-none focus:border-brand-gold"
        />
      </label>
      {state.error && (
        <p className="rounded-md bg-red-50 px-3 py-2 text-sm text-red-700">
          {state.error}
        </p>
      )}
      <button
        type="submit"
        disabled={pending}
        className="w-full rounded-full bg-brand-green px-5 py-3 text-sm tracking-wide text-brand-cream transition-colors hover:bg-brand-green-dark disabled:opacity-60"
      >
        {pending ? "Entrando…" : "Entrar"}
      </button>
    </form>
  )
}
