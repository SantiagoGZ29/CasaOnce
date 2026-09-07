import Image from "next/image";
import { Container } from "@/app/components/layout/ui/container";
import { SectionTitle } from "@/app/components/common/section-title";
import { CTAButton } from "@/app/components/common/cta-button";
import { InstagramIcon } from "@/app/components/common/icons";
import { galleryImages } from "@/app/data/gallery";
import { siteConfig } from "@/app/data/site";

export function InstagramSection() {
  return (
    <section
      id="instagram"
      className="bg-cream"
      aria-labelledby="instagram-title"
    >
      <Container>
        <div className="py-16 sm:py-24">
          <SectionTitle
            kicker="Síguenos"
            title="El calor de hogar, día a día"
            description={`Conoce más de Casa Once a través de Instagram: ${siteConfig.instagramHandle}`}
            id="instagram-title"
          />

          <ul className="mt-12 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6 lg:gap-4">
            {galleryImages.map((image) => (
              <li key={image.id} className="group">
                <a
                  href={siteConfig.instagramUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Abrir Instagram de Casa Once"
                  className="relative block aspect-square w-full overflow-hidden rounded-2xl"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    sizes="(min-width: 1024px) 15vw, (min-width: 640px) 30vw, 48vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </a>
              </li>
            ))}
          </ul>

          <div className="mt-10 text-center">
            <CTAButton
              href={siteConfig.instagramUrl}
              external
              variant="outline"
              size="lg"
              icon={<InstagramIcon aria-hidden="true" className="size-5" />}
            >
              Seguirnos en Instagram
            </CTAButton>
          </div>
        </div>
      </Container>
    </section>
  );
}