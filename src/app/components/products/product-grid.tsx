import type { ProductCategory } from "@/app/data/products";
import { ProductCard } from "./product-card";
import { Reveal } from "@/app/components/common/reveal";

interface ProductGridProps {
  categories: ProductCategory[];
}

export function ProductGrid({ categories }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
      {categories.map((category, index) => (
        <Reveal
          key={category.id}
          variant="up"
          delay={Math.min(index * 90, 360)}
          className="h-full"
        >
          <ProductCard category={category} />
        </Reveal>
      ))}
    </div>
  );
}