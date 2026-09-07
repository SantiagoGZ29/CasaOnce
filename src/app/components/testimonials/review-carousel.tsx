"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface ReviewCarouselProps {
  slides: ReactNode[];
  className?: string;
}

/**
 * Carrusel de opiniones basado en scroll-snap: responsivo por CSS
 * (1 tarjeta en móvil, 2 en sm, 3 en lg), swipe táctil nativo y
 * flechas con estado de extremos. Sin dependencias externas.
 */
export function ReviewCarousel({ slides, className = "" }: ReviewCarouselProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(false);

  const updateArrows = () => {
    const track = trackRef.current;
    if (!track) return;
    setCanPrev(track.scrollLeft > 4);
    setCanNext(track.scrollLeft + track.clientWidth < track.scrollWidth - 4);
  };

  useEffect(() => {
    updateArrows();
    window.addEventListener("resize", updateArrows);
    return () => window.removeEventListener("resize", updateArrows);
  }, []);

  const scrollStep = () => {
    const track = trackRef.current;
    if (!track) return 0;
    const card = track.querySelector<HTMLElement>("[data-slide]");
    // 24px = ancho del gap-6 entre tarjetas.
    return card ? card.offsetWidth + 24 : track.clientWidth * 0.8;
  };

  const scrollByStep = (direction: 1 | -1) => {
    const track = trackRef.current;
    if (!track) return;
    track.scrollBy({ left: scrollStep() * direction, behavior: "smooth" });
  };

  return (
    <div className={className}>
      <div className="mb-4 flex items-center justify-end gap-2">
        <button
          type="button"
          onClick={() => scrollByStep(-1)}
          disabled={!canPrev}
          aria-label="Ver opiniones anteriores"
          className="grid size-10 place-items-center rounded-full border border-black/10 bg-white text-olive shadow-sm transition-colors hover:bg-olive hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
        >
          <ChevronLeft aria-hidden="true" className="size-5" />
        </button>
        <button
          type="button"
          onClick={() => scrollByStep(1)}
          disabled={!canNext}
          aria-label="Ver siguientes opiniones"
          className="grid size-10 place-items-center rounded-full border border-black/10 bg-white text-olive shadow-sm transition-colors hover:bg-olive hover:text-white disabled:cursor-not-allowed disabled:opacity-35"
        >
          <ChevronRight aria-hidden="true" className="size-5" />
        </button>
      </div>

      <div
        ref={trackRef}
        onScroll={updateArrows}
        tabIndex={0}
        aria-label="Carrusel de opiniones de clientes en Google"
        className="flex snap-x snap-mandatory gap-6 overflow-x-auto overscroll-x-contain scroll-smooth pb-2 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {slides.map((slide, index) => (
          <div
            key={index}
            data-slide
            className="w-full shrink-0 snap-start sm:w-[calc(50%-0.75rem)] lg:w-[calc(33.333333%-1rem)]"
          >
            {slide}
          </div>
        ))}
      </div>
    </div>
  );
}