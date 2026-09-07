import { Quote, Check } from "lucide-react";
import type { Testimonial } from "@/app/data/testimonials";
import { GoogleIcon, Stars } from "@/app/components/common/icons";

export function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  const { quote, author, date, rating, source } = testimonial;
  const isGoogle = source === "google";

  return (
    <figure className="flex h-full flex-col rounded-3xl border border-black/10 bg-cream p-6 sm:p-8">
      <div className="flex items-center justify-between gap-3">
        <Quote aria-hidden="true" className="size-8 -scale-x-100 text-olive/40" />
        {typeof rating === "number" && <Stars count={rating} />}
      </div>

      <blockquote className="mt-4 flex-1 text-base leading-relaxed text-foreground/80">
        “{quote}”
      </blockquote>

      <figcaption className="mt-6 space-y-1.5">
        <div className="flex items-center justify-between gap-2">
          <span className="text-sm font-bold text-olive">{author}</span>
          {isGoogle && (
            <span className="inline-flex shrink-0 items-center gap-1 rounded-full bg-neutral-100 px-2 py-0.5 text-[11px] font-medium text-neutral-500">
              <GoogleIcon className="size-3.5" />
              Opinión de Google
            </span>
          )}
        </div>
        {date && (
          <p className="flex items-center gap-1 text-xs text-foreground/50">
            <Check aria-hidden="true" className="size-3.5 text-olive/70" />
            {date}
          </p>
        )}
      </figcaption>
    </figure>
  );
}