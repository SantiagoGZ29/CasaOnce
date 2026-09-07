import { Container } from "@/app/components/layout/ui/container";
import { CTAButton } from "@/app/components/common/cta-button";
import { Reveal } from "@/app/components/common/reveal";
import { ReelEmbed } from "@/app/components/instagram/reel-embed";
import { MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/app/data/site";

export function Location() {
  return (
    <section
      id="como-llegar"
      className="bg-white"
      aria-labelledby="como-llegar-title"
    >
      <Container>
        <div className="grid items-center gap-12 py-16 sm:py-24 lg:grid-cols-2 lg:gap-16">
          <Reveal variant="right">
            <div className="text-center lg:text-left">
            <p className="font-script text-4xl leading-tight text-olive">
              Te esperamos
            </p>
            <h2
              id="como-llegar-title"
              className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
            >
              Ven a visitarnos
            </h2>

            <div className="mt-8 space-y-4">
              <div className="flex items-start justify-center gap-3 lg:justify-start">
                <MapPin
                  aria-hidden="true"
                  className="mt-0.5 size-5 shrink-0 text-olive"
                />
                <p className="text-base font-medium text-foreground sm:text-lg">
                  {siteConfig.address}
                </p>
              </div>
              <div className="flex items-center justify-center gap-3 lg:justify-start">
                <Clock
                  aria-hidden="true"
                  className="mt-0.5 size-5 shrink-0 text-olive"
                />
                <p className="text-base text-foreground/80 sm:text-lg">
                  {siteConfig.schedule}
                </p>
              </div>
            </div>

            <p className="mt-6 text-sm leading-relaxed text-foreground/60">
              Estamos en el corazón de Puerto Montt. Si vienes por primera vez,
              este reel te muestra el camino desde la plaza.
            </p>

            <div className="mt-8">
              <CTAButton
                href={siteConfig.googleMapsUrl}
                external
                variant="solid"
                size="lg"
                className="w-full sm:w-auto"
              >
                Abrir en Google Maps
              </CTAButton>
            </div>
          </div>
          </Reveal>

          <Reveal variant="left" delay={150}>
            <ReelEmbed />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}