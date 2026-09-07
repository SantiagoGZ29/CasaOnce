"use client";

import { useState, useId } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import type { FaqItem } from "@/app/data/faq";

interface FAQItemProps {
  item: FaqItem;
}

export function FAQItem({ item }: FAQItemProps) {
  const [open, setOpen] = useState(false);
  const baseId = useId();
  const triggerId = `${baseId}-trigger`;
  const panelId = `${baseId}-panel`;

  return (
    <article className="overflow-hidden rounded-2xl border border-black/10 bg-white transition-colors duration-300 hover:border-olive/40">
      <h3>
        <button
          type="button"
          id={triggerId}
          aria-expanded={open}
          aria-controls={panelId}
          onClick={() => setOpen((current) => !current)}
          className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-olive sm:px-6"
        >
          <span className="text-base font-bold text-foreground sm:text-lg">
            {item.question}
          </span>
          <ChevronDown
            aria-hidden="true"
            className={`size-5 shrink-0 text-olive transition-transform duration-300 ${
              open ? "rotate-180" : ""
            }`}
          />
        </button>
      </h3>

      <div
        id={panelId}
        role="region"
        aria-labelledby={triggerId}
        className={`grid transition-all duration-300 ease-in-out ${
          open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
        }`}
      >
        <div className="min-h-0 overflow-hidden">
          <div className="px-5 pb-5 sm:px-6">
            <p className="text-sm leading-relaxed text-foreground/70 sm:text-base">
              {item.answer}
            </p>
            {item.action ? (
              <a
                href={item.action.href}
                {...(item.action.external
                  ? { target: "_blank", rel: "noopener noreferrer" }
                  : {})}
                className="mt-3 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-olive transition-colors hover:text-olive-dark"
              >
                {item.action.label}
                <ArrowRight aria-hidden="true" className="size-4" />
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  );
}