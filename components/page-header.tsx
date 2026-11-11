"use client"

import Image from "next/image"
import Link from "next/link"
import { useLanguage } from "@/lib/i18n/provider"
import { cn } from "@/lib/utils"

const DEFAULT_IMG =
  "https://mmlbslwljvmscbgsqkkq.supabase.co/storage/v1/object/public/Fotos/arenal-volcano-mountains-sky-costa-rica.webp"

/**
 * Dark, full-bleed header shared by the inner pages. Sits under the
 * transparent navbar (hence the negative top margin matching <main>'s
 * padding) and animates its copy in on load.
 */
export function PageHeader({
  eyebrow,
  title,
  subtitle,
  image = DEFAULT_IMG,
  imageAlt = "Volcán Arenal, La Fortuna",
  crumb,
  children,
  className,
}: {
  eyebrow?: string
  title: string
  subtitle?: string
  image?: string
  imageAlt?: string
  // Label of the current page for the breadcrumb trail.
  crumb?: string
  children?: React.ReactNode
  className?: string
}) {
  const { t } = useLanguage()

  return (
    <section
      className={cn(
        "grain relative -mt-16 overflow-hidden bg-brand-ink text-white md:-mt-20",
        className
      )}
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority
          sizes="100vw"
          className="ken-burns object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-brand-ink/95 via-brand-ink/75 to-brand-ink/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-brand-ink/70 via-transparent to-brand-ink/40" />
      </div>

      <div className="container-page pt-36 pb-16 md:pt-48 md:pb-24">
        {crumb && (
          <nav
            aria-label="Breadcrumb"
            className="hero-rise text-xs text-white/60"
            style={{ animationDelay: "80ms" }}
          >
            <ol className="flex flex-wrap items-center gap-2">
              <li>
                <Link href="/" className="transition-colors hover:text-white">
                  {t("nav.home")}
                </Link>
              </li>
              <li aria-hidden="true">/</li>
              <li className="text-white/90">{crumb}</li>
            </ol>
          </nav>
        )}
        {eyebrow && (
          <p
            className="hero-rise mt-6 flex items-center gap-3 text-[11px] tracking-[0.28em] text-brand-gold uppercase"
            style={{ animationDelay: "140ms" }}
          >
            <span className="h-px w-8 bg-brand-gold" aria-hidden="true" />
            {eyebrow}
          </p>
        )}
        <h1
          className="hero-rise font-display text-fluid-h1 mt-5 max-w-4xl leading-[1.05] text-balance text-white"
          style={{ animationDelay: "220ms" }}
        >
          {title}
        </h1>
        {subtitle && (
          <p
            className="hero-rise mt-6 max-w-2xl text-base leading-relaxed text-white/80 md:text-lg"
            style={{ animationDelay: "340ms" }}
          >
            {subtitle}
          </p>
        )}
        {children && (
          <div className="hero-rise mt-9" style={{ animationDelay: "460ms" }}>
            {children}
          </div>
        )}
      </div>
    </section>
  )
}
