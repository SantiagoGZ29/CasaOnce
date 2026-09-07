import { whatsappLink } from "@/app/data/site";
import { WhatsAppIcon } from "./icons";

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-full px-8 py-4 text-base font-bold uppercase tracking-wide transition-colors duration-300";

export function WhatsAppCTA({ className = "" }: { className?: string }) {
  const href = whatsappLink();

  if (!href) {
    return (
      <span
        aria-disabled="true"
        className={`${baseClasses} cursor-not-allowed bg-[#25D366] text-white opacity-70 ${className}`}
      >
        <WhatsAppIcon aria-hidden="true" className="size-5 shrink-0" />
        Reservar por WhatsApp
      </span>
    );
  }

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseClasses} bg-[#25D366] text-white hover:bg-[#1da851] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] ${className}`}
    >
      <WhatsAppIcon aria-hidden="true" className="size-5 shrink-0" />
      Reservar por WhatsApp
    </a>
  );
}