import type { ProductCategory } from "@/app/data/products";
import { ProductCard } from "./product-card";

interface ProductGridProps {
  categories: ProductCategory[];
}

export function ProductGrid({ categories }: ProductGridProps) {
  return (
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-8">
      {categories.map((category) => (
        <ProductCard key={category.id} category={category} />
      ))}
    </div>
  );
}