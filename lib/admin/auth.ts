import "server-only"

import { createHmac, timingSafeEqual } from "node:crypto"
import { cookies } from "next/headers"

import type { Agent } from "@/lib/properties"

export const ADMIN_COOKIE = "elladay_admin"
const SESSION_DAYS = 14

export type AdminSession = { agent: Agent; exp: number }

export const ADMIN_NAMES: Record<Agent, string> = {
  dayana: "Dayana",
  ella: "Ella",
}

// One password per person, kept in environment variables so they never touch
// the repository. Either password unlocks the same panel; we only record who
// is logged in for attribution.
function passwordFor(agent: Agent): string | undefined {
  return agent === "dayana"
    ? process.env.ADMIN_PASSWORD_DAYANA
    : process.env.ADMIN_PASSWORD_ELLA
}

export function isAdminConfigured(): boolean {
  return Boolean(passwordFor("dayana") || passwordFor("ella"))
}

function secret(): string {
  // Explicit secret preferred; otherwise derive one from the passwords so a
  // password change also signs everyone out.
  return (
    process.env.ADMIN_SESSION_SECRET ??
    `${passwordFor("dayana") ?? ""}|${passwordFor("ella") ?? ""}`
  )
}

function safeEqual(a: string, b: string): boolean {
  const ba = Buffer.from(a)
  const bb = Buffer.from(b)
  if (ba.length !== bb.length) return false
  return timingSafeEqual(ba, bb)
}

/** Returns the agent whose password matches, or null. */
export function verifyPassword(input: string): Agent | null {
  const candidate = input.trim()
  if (!candidate) return null
  for (const agent of ["dayana", "ella"] as Agent[]) {
    const expected = passwordFor(agent)
    if (expected && safeEqual(candidate, expected)) return agent
  }
  return null
}

function sign(payload: string): string {
  return createHmac("sha256", secret()).update(payload).digest("base64url")
}

export function encodeSession(session: AdminSession): string {
  const payload = Buffer.from(JSON.stringify(session)).toString("base64url")
  return `${payload}.${sign(payload)}`
}

export function decodeSession(token: string | undefined): AdminSession | null {
  if (!token) return null
  const [payload, signature] = token.split(".")
  if (!payload || !signature) return null
  if (!safeEqual(sign(payload), signature)) return null
  try {
    const session = JSON.parse(
      Buffer.from(payload, "base64url").toString()
    ) as AdminSession
    if (session.exp < Date.now()) return null
    if (session.agent !== "dayana" && session.agent !== "ella") return null
    return session
  } catch {
    return null
  }
}

export async function getAdminSession(): Promise<AdminSession | null> {
  const store = await cookies()
  return decodeSession(store.get(ADMIN_COOKIE)?.value)
}

/** Throws when called outside an authenticated admin session. */
export async function requireAdmin(): Promise<AdminSession> {
  const session = await getAdminSession()
  if (!session) throw new Error("No autorizado. Inicia sesión de nuevo.")
  return session
}

export async function createSessionCookie(agent: Agent) {
  const store = await cookies()
  const exp = Date.now() + SESSION_DAYS * 24 * 60 * 60 * 1000
  store.set(ADMIN_COOKIE, encodeSession({ agent, exp }), {
    httpOnly: true,
    sameSite: "lax",
    secure: process.env.NODE_ENV === "production",
    path: "/",
    expires: new Date(exp),
  })
}

export async function clearSessionCookie() {
  const store = await cookies()
  store.delete(ADMIN_COOKIE)
}
