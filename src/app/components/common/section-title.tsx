import { Reveal } from "@/app/components/common/reveal";

interface SectionTitleProps {
  kicker?: string;
  title: string;
  description?: string;
  align?: "center" | "left";
  className?: string;
  id?: string;
}

export function SectionTitle({
  kicker,
  title,
  description,
  align = "center",
  className = "",
  id,
}: SectionTitleProps) {
  const alignClasses =
    align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignClasses} ${className}`}>
      <Reveal>
        {kicker ? (
          <p className="font-script text-3xl leading-tight text-olive">
            {kicker}
          </p>
        ) : null}
        <h2
          id={id}
          className="mt-2 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
        >
          {title}
        </h2>
        {description ? (
          <p className="mt-4 text-base leading-relaxed text-foreground/70 sm:text-lg">
            {description}
          </p>
        ) : null}
      </Reveal>
    </div>
  );
}