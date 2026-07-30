"use client"

import * as React from "react"
import { cn } from "@/lib/utils"

export type FaqItem = { question: string; answer: string }

export function FaqAccordion({ items }: { items: FaqItem[] }) {
  const [open, setOpen] = React.useState<number | null>(0)

  return (
    <div className="divide-y divide-border border-y border-border">
      {items.map((item, i) => {
        const isOpen = open === i
        return (
          <div key={item.question}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-5 text-left"
            >
              <span className="font-serif text-lg text-brand-green md:text-xl">
                {item.question}
              </span>
              <span
                className={cn(
                  "flex h-8 w-8 flex-none items-center justify-center rounded-full border border-border text-brand-gold transition-transform duration-300",
                  isOpen && "rotate-45"
                )}
                aria-hidden="true"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  className="h-4 w-4"
                >
                  <path strokeLinecap="round" d="M12 5v14M5 12h14" />
                </svg>
              </span>
            </button>
            <div
              className={cn(
                "grid transition-[grid-template-rows] duration-300 ease-out",
                isOpen ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
              )}
            >
              <div className="overflow-hidden">
                <p className="pb-6 pr-10 text-sm leading-relaxed text-muted-foreground md:text-base">
                  {item.answer}
                </p>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  )
}
