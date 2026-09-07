import Image from "next/image";
import { Container } from "@/app/components/layout/ui/container";
import { CTAButton } from "@/app/components/common/cta-button";
import { MapPin, Clock } from "lucide-react";
import { siteConfig } from "@/app/data/site";

export function Hero() {
  return (
    <section
      id="inicio"
      className="bg-cream"
      aria-labelledby="hero-title"
    >
      <Container>
        <div className="grid items-center gap-10 py-14 sm:py-20 lg:grid-cols-2 lg:gap-16">
          {/* Imagen */}
          <div className="relative w-full">
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] shadow-xl lg:aspect-[5/4]">
              <Image
                src={siteConfig.heroImage}
                alt={siteConfig.heroImageAlt}
                fill
                priority
                sizes="(min-width: 1024px) 50vw, 100vw"
                className="object-cover"
              />
            </div>
          </div>

          {/* Texto */}
          <div className="text-center lg:text-left">
            <p className="font-script text-4xl leading-tight text-olive sm:text-5xl">
              {siteConfig.tagline}
            </p>

            <h1
              id="hero-title"
              className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-foreground sm:text-5xl lg:text-6xl"
            >
              {siteConfig.heroHeadline}
            </h1>

            <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-foreground/70 sm:text-lg lg:mx-0">
              {siteConfig.heroSubtext}
            </p>

            <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row sm:items-center lg:justify-start">
              <CTAButton
                href={siteConfig.menuUrl}
                external
                size="lg"
                className="w-full sm:w-auto"
              >
                Ver carta
              </CTAButton>
              <CTAButton
                href="/#como-llegar"
                variant="outline"
                size="lg"
                className="w-full sm:w-auto"
              >
                Cómo llegar
              </CTAButton>
            </div>

            <dl className="mt-9 flex flex-col items-center justify-center gap-3 text-sm text-foreground/80 sm:flex-row sm:flex-wrap sm:gap-x-8 lg:justify-start">
              <div className="flex items-center gap-2">
                <Clock aria-hidden="true" className="size-4 shrink-0 text-olive" />
                <dt className="sr-only">Horario</dt>
                <dd>{siteConfig.schedule}</dd>
              </div>
              <div className="flex items-center gap-2">
                <MapPin aria-hidden="true" className="size-4 shrink-0 text-olive" />
                <dt className="sr-only">Dirección</dt>
                <dd>{siteConfig.address}</dd>
              </div>
            </dl>
          </div>
        </div>
      </Container>
    </section>
  );
}