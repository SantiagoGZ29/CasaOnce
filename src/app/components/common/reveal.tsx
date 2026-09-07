"use client";

import { useEffect, useRef, useState } from "react";
import type { ElementType, ReactNode } from "react";

export type RevealVariant = "up" | "right" | "left" | "scale" | "img";

interface RevealProps {
  children: ReactNode;
  as?: ElementType;
  variant?: RevealVariant;
  delay?: number;
  threshold?: number;
  rootMargin?: string;
  className?: string;
}

/**
 * Reveal al hacer scroll: el contenido entra suave y una sola vez.
 * - Sin JS o con `prefers-reduced-motion: reduce` no oculta nada (CSS lo protege).
 * - `delay` permite el efecto cascada (stagger) entre tarjetas.
 * - `variant`: "up" | "right" | "left" | "scale" | "img" (recorte editorial de imagen).
 */
export function Reveal({
  children,
  as,
  variant = "up",
  delay = 0,
  threshold = 0.15,
  rootMargin = "0px 0px -8% 0px",
  className = "",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;
    if (typeof IntersectionObserver === "undefined") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInView(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold, rootMargin }
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  const Tag = (as ?? "div") as ElementType;

  return (
    <Tag
      ref={ref as never}
      className={`reveal reveal-${variant} ${inView ? "is-inview" : ""} ${className}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
    >
      {children}
    </Tag>
  );
}