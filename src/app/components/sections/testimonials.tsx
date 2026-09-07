import { Container } from "@/app/components/layout/ui/container";
import { SectionTitle } from "@/app/components/common/section-title";
import { CTAButton } from "@/app/components/common/cta-button";
import { Reveal } from "@/app/components/common/reveal";
import { testimonials } from "@/app/data/testimonials";
import { siteConfig } from "@/app/data/site";
import { TestimonialCard } from "@/app/components/testimonials/testimonial-card";
import { ReviewCarousel } from "@/app/components/testimonials/review-carousel";
import { GoogleIcon, RatingStars } from "@/app/components/common/icons";

export function Testimonials() {
  const { reviewsRating, reviewsCount, reviewsUrl } = siteConfig;

  return (
    <section
      id="testimonios"
      className="bg-white"
      aria-labelledby="testimonios-title"
    >
      <Container>
        <div className="py-16 sm:py-24">
          <SectionTitle
            kicker="Confianza"
            title="Lo dicen nuestros clientes"
            description="Opiniones reales de clientes en Google"
            id="testimonios-title"
          />

          <Reveal variant="up" className="mt-8 flex justify-center">
            <a
              href={reviewsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 rounded-full border border-black/10 bg-neutral-50 px-5 py-2.5 transition-colors hover:border-olive/40 hover:bg-white"
            >
              <GoogleIcon aria-hidden="true" className="size-5" />
              <span className="text-lg font-extrabold text-foreground">
                {reviewsRating.toFixed(1).replace(".", ",")}
              </span>
              <RatingStars value={reviewsRating} />
              <span className="text-sm text-foreground/60">
                {reviewsCount} opiniones en Google
              </span>
              <span className="sr-only">
                Ver opiniones de Casa Once en Google
              </span>
            </a>
          </Reveal>

          <Reveal variant="up" delay={120} className="mt-10">
            <ReviewCarousel
              slides={testimonials.map((testimonial, index) => (
                <TestimonialCard key={index} testimonial={testimonial} />
              ))}
            />
          </Reveal>

          <Reveal
            variant="up"
            delay={80}
            className="mt-12 flex flex-col items-center gap-4 text-center"
          >
            <p className="text-sm text-foreground/60">
              ¿Nos visitaste? Ayúdanos a seguir creciendo con tu opinión.
            </p>
            <CTAButton
              href={reviewsUrl}
              external
              variant="outline"
              className="normal-case tracking-normal"
            >
              <GoogleIcon aria-hidden="true" className="size-4" />
              Deja tu reseña en Google
            </CTAButton>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}