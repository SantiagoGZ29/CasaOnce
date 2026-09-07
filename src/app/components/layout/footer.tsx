import Image from "next/image";
import { Container } from "@/app/components/layout/ui/container";
import { InstagramIcon, WhatsAppIcon } from "@/app/components/common/icons";
import { MapPin, Clock, ExternalLink } from "lucide-react";
import { whatsappLink, siteConfig } from "@/app/data/site";

export function Footer() {
  const waLink = whatsappLink();

  return (
    <footer className="bg-olive-dark text-white/85">
      <Container>
        <div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <div className="flex items-center gap-3">
              <div className="relative size-14 shrink-0 overflow-hidden rounded-full bg-white">
                <Image
                  src="/images/logo/logo.jpg"
                  alt="Logo de Casa Once"
                  fill
                  sizes="56px"
                  className="object-contain"
                />
              </div>
              <div>
                <p className="text-xl font-extrabold text-white">
                  {siteConfig.name}
                </p>
                <p className="font-script text-2xl leading-none text-white/90">
                  {siteConfig.tagline}
                </p>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-white">
              Visítanos
            </h2>
            <ul className="mt-4 space-y-3 text-sm leading-relaxed">
              <li className="flex items-start gap-2">
                <MapPin aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-white/60" />
                <span>{siteConfig.address}</span>
              </li>
              <li className="flex items-start gap-2">
                <Clock aria-hidden="true" className="mt-0.5 size-4 shrink-0 text-white/60" />
                <span>{siteConfig.schedule}</span>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-white">
              Carta
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={siteConfig.menuUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  Ver nuestra carta online
                  <ExternalLink aria-hidden="true" className="size-3.5 text-white/60" />
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h2 className="text-sm font-bold uppercase tracking-widest text-white">
              Contáctanos
            </h2>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 transition-colors hover:text-white"
                >
                  <InstagramIcon aria-hidden="true" className="size-4 text-white/70" />
                  {siteConfig.instagramHandle}
                </a>
              </li>
              <li>
                {waLink ? (
                  <a
                    href={waLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 transition-colors hover:text-white"
                  >
                    <WhatsAppIcon aria-hidden="true" className="size-4 text-white/70" />
                    WhatsApp
                  </a>
                ) : (
                  <span className="inline-flex items-center gap-2">
                    <WhatsAppIcon aria-hidden="true" className="size-4 text-white/50" />
                    WhatsApp · próximamente
                  </span>
                )}
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col items-center justify-between gap-3 border-t border-white/15 py-6 text-xs text-white/60 sm:flex-row">
          <p>
            © {new Date().getFullYear()} {siteConfig.name}. Todos los derechos
            reservados.
          </p>
          <p className="font-script text-lg text-white/70">
            {siteConfig.tagline}
          </p>
        </div>
      </Container>
    </footer>
  );
}