import type { ReactNode } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type CTAButtonVariant = "solid" | "outline" | "light";
type CTAButtonSize = "md" | "lg";

interface CTAButtonProps {
  href: string;
  children: ReactNode;
  variant?: CTAButtonVariant;
  size?: CTAButtonSize;
  external?: boolean;
  icon?: ReactNode;
  className?: string;
}

const variantClasses: Record<CTAButtonVariant, string> = {
  solid:
    "bg-olive text-white hover:bg-olive-dark focus-visible:outline-olive-dark",
  outline:
    "border-2 border-olive text-olive hover:bg-olive hover:text-white focus-visible:outline-olive",
  light:
    "bg-white text-olive hover:bg-cream-dark focus-visible:outline-white",
};

const sizeClasses: Record<CTAButtonSize, string> = {
  md: "px-6 py-3 text-sm",
  lg: "px-8 py-4 text-base",
};

function ctaClasses(
  variant: CTAButtonVariant,
  size: CTAButtonSize,
  className: string
) {
  return `group inline-flex items-center justify-center gap-2 rounded-full font-sans font-bold uppercase tracking-wide transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;
}

export function CTAButton({
  href,
  children,
  variant = "solid",
  size = "md",
  external = false,
  icon,
  className = "",
}: CTAButtonProps) {
  const classes = ctaClasses(variant, size, className);
  const content = (
    <>
      {children}
      {icon ?? (
        <ArrowRight
          aria-hidden="true"
          className="size-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1"
        />
      )}
    </>
  );

  if (external || /^https?:\/\//.test(href)) {
    return (
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={classes}
      >
        {content}
      </a>
    );
  }

  return <Link href={href} className={classes}>{content}</Link>;
}