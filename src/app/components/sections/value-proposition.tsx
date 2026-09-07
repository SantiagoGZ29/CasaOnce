import { Container } from "@/app/components/layout/ui/container";
import { valueProps } from "@/app/data/valueProps";
import { Reveal } from "@/app/components/common/reveal";

export function ValueProposition() {
  return (
    <section className="bg-white" aria-labelledby="value-title">
      <Container>
        <div className="py-16 sm:py-24">
          <div className="mx-auto max-w-2xl text-center">
            <p className="font-script text-4xl leading-tight text-olive">
              {`"El calor de hogar"`}
            </p>
            <h2
              id="value-title"
              className="mt-3 text-3xl font-extrabold tracking-tight text-foreground sm:text-4xl"
            >
              Sabor, cercanía y momentos para disfrutar
            </h2>
          </div>

          <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3 lg:gap-8">
            {valueProps.map(({ title, description, icon: Icon }, index) => (
              <Reveal
                key={title}
                variant="up"
                delay={Math.min(index * 100, 300)}
                className="h-full"
              >
                <article className="h-full rounded-3xl border border-black/10 bg-cream p-8 text-center transition-transform duration-300 hover:-translate-y-1">
                  <span className="mx-auto flex size-14 items-center justify-center rounded-full bg-olive text-white">
                    <Icon aria-hidden="true" className="size-6" />
                  </span>
                  <h3 className="mt-5 text-lg font-bold text-foreground">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-foreground/70">
                    {description}
                  </p>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}