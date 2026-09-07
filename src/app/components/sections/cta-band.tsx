import { Container } from "@/app/components/layout/ui/container";
import { CTAButton } from "@/app/components/common/cta-button";
import { Reveal } from "@/app/components/common/reveal";
import { siteConfig } from "@/app/data/site";

export function CTABand() {
  return (
    <section className="bg-olive" aria-labelledby="cta-band-title">
      <Container>
        <Reveal variant="up">
          <div className="flex flex-col items-center gap-6 py-14 text-center sm:py-16 lg:flex-row lg:justify-between lg:text-left">
          <div className="max-w-2xl">
            <h2
              id="cta-band-title"
              className="font-script text-4xl leading-tight text-white sm:text-5xl"
            >
              ¿Ya se te antojó?
            </h2>
            <p className="mt-3 text-base leading-relaxed text-white/85 sm:text-lg">
              Revisa nuestra carta y descubre todo lo que tenemos preparado
              para ti.
            </p>
          </div>
          <CTAButton
            href={siteConfig.menuUrl}
            external
            variant="light"
            size="lg"
            className="w-full shrink-0 sm:w-auto"
          >
            Ver carta
          </CTAButton>
        </div>
        </Reveal>
      </Container>
    </section>
  );
}