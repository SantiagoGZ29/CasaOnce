import { Container } from "@/app/components/layout/ui/container";
import { SectionTitle } from "@/app/components/common/section-title";
import { CTAButton } from "@/app/components/common/cta-button";
import { ProductGrid } from "@/app/components/products/product-grid";
import { productCategories } from "@/app/data/products";
import { siteConfig } from "@/app/data/site";

export function Products() {
  return (
    <section id="productos" className="bg-cream" aria-labelledby="productos-title">
      <Container>
        <div className="py-16 sm:py-24">
          <SectionTitle
            kicker="Nuestra carta"
            title="Descubre nuestra carta"
            description="Las categorías que preparamos para ti, con ese sabor casero que nos caracteriza."
            id="productos-title"
          />

          <div className="mt-12">
            <ProductGrid categories={productCategories} />
          </div>

          <div className="mt-12 text-center">
            <CTAButton href={siteConfig.menuUrl} external size="lg">
              Ver carta
            </CTAButton>
          </div>
        </div>
      </Container>
    </section>
  );
}