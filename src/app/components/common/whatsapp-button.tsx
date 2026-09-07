"use client";

import { whatsappLink, siteConfig } from "@/app/data/site";
import { WhatsAppIcon } from "./icons";

const baseClasses =
  "fixed bottom-[calc(env(safe-area-inset-bottom)+1.25rem)] right-5 z-[60] flex h-14 items-center justify-center gap-2 rounded-full px-5 text-sm font-bold uppercase tracking-wide text-white shadow-lg";

export function WhatsAppButton() {
  const href = whatsappLink();

  if (!href) {
    return (
      <button
        type="button"
        disabled
        aria-label="Reservar por WhatsApp, disponible próximamente"
        title="Reservas por WhatsApp disponibles próximamente"
        className={`${baseClasses} w-14 justify-center bg-[#25D366] opacity-80 sm:w-auto sm:px-6`}
      >
        <WhatsAppIcon aria-hidden="true" className="size-6 shrink-0" />
        <span className="hidden sm:inline">Reservar por WhatsApp</span>
      </button>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Reservar por WhatsApp (${siteConfig.instagramHandle})`}
      className={`${baseClasses} w-16 bg-[#25D366] hover:bg-[#1da851] hover:shadow-xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] sm:w-auto sm:px-6`}
    >
      <WhatsAppIcon aria-hidden="true" className="size-6 shrink-0" />
      <span className="hidden sm:inline">Reservar por WhatsApp</span>
    </a>
  );
}