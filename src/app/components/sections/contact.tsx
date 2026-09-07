import { Container } from "@/app/components/layout/ui/container";
import { CTAButton } from "@/app/components/common/cta-button";
import { WhatsAppCTA } from "@/app/components/common/whatsapp-cta";
import { InstagramIcon } from "@/app/components/common/icons";
import { MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/app/data/site";

export function Contact() {
  return (
    <section id="contacto" className="bg-white" aria-labelledby="contacto-title">
      <Container>
        <div className="mx-auto max-w-2xl py-16 text-center sm:py-24">
          <p className="font-script text-4xl leading-tight text-olive">
            Contáctanos
          </p>
          <h2
            id="contacto-title"
            className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
          >
            ¿Nos vemos en Casa Once?
          </h2>

          <div className="mt-10 rounded-3xl border border-black/10 bg-cream p-8 sm:p-10">
            <ul className="space-y-5">
              <li className="flex items-center justify-center gap-3">
                <MapPin aria-hidden="true" className="size-5 shrink-0 text-olive" />
                <span className="text-base font-medium text-foreground sm:text-lg">
                  {siteConfig.address}
                </span>
              </li>
              <li className="flex items-center justify-center gap-3">
                <Clock aria-hidden="true" className="size-5 shrink-0 text-olive" />
                <span className="text-base text-foreground/80 sm:text-lg">
                  {siteConfig.schedule}
                </span>
              </li>
              <li className="flex items-center justify-center gap-3">
                <InstagramIcon aria-hidden="true" className="size-5 shrink-0 text-olive" />
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-base font-semibold text-foreground transition-colors hover:text-olive sm:text-lg"
                >
                  {siteConfig.instagramHandle}
                </a>
              </li>
            </ul>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <CTAButton
                href={siteConfig.instagramUrl}
                external
                variant="outline"
                size="lg"
                icon={<InstagramIcon aria-hidden="true" className="size-5" />}
              >
                Instagram
              </CTAButton>
              <WhatsAppCTA />
            </div>

            {!siteConfig.whatsappNumber ? (
              <p className="mt-4 text-xs text-foreground/50">
                Reservas por WhatsApp disponibles próximamente.
              </p>
            ) : null}
          </div>
        </div>
      </Container>
    </section>
  );
}