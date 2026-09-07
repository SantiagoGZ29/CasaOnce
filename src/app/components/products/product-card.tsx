import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { ProductCategory } from "@/app/data/products";
import { siteConfig } from "@/app/data/site";

export function ProductCard({ category }: { category: ProductCategory }) {
  return (
    <a
      href={category.href ?? siteConfig.menuUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex flex-col overflow-hidden rounded-3xl border border-black/10 bg-white transition-transform duration-300 hover:-translate-y-1 hover:shadow-lg"
      aria-label={`Ver ${category.title} en la carta`}
    >
      <div className="relative aspect-[4/3] w-full overflow-hidden">
        <Image
          src={category.image}
          alt={category.title}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>
      <div className="flex flex-1 flex-col gap-2 p-6">
        <h3 className="text-xl font-bold text-foreground">{category.title}</h3>
        <p className="flex-1 text-sm leading-relaxed text-foreground/70">
          {category.description}
        </p>
        <span className="mt-3 inline-flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-olive transition-colors duration-300 group-hover:text-olive-dark">
          Ver en la carta
          <ArrowRight
            aria-hidden="true"
            className="size-4 transition-transform duration-300 group-hover:translate-x-1"
          />
        </span>
      </div>
    </a>
  );
}