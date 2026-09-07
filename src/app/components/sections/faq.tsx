import { Container } from "@/app/components/layout/ui/container";
import { SectionTitle } from "@/app/components/common/section-title";
import { FAQItem } from "@/app/components/faq/faq-item";
import { faqItems } from "@/app/data/faq";

export function FAQ() {
  return (
    <section
      id="preguntas-frecuentes"
      className="bg-cream"
      aria-labelledby="faq-title"
    >
      <Container>
        <div className="mx-auto max-w-3xl py-16 sm:py-24">
          <SectionTitle
            kicker="Resolvemos tus dudas"
            title="Preguntas frecuentes"
            id="faq-title"
          />

          <div className="mt-12 flex flex-col gap-4">
            {faqItems.map((item) => (
              <FAQItem key={item.question} item={item} />
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}