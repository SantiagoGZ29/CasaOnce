export interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

/**
 * Galería de la sección Instagram (placeholders).
 * Reemplaza `src` y `alt` por las fotografías reales cuando estén disponibles.
 */
export const galleryImages: GalleryImage[] = [
  {
    id: "galeria-1",
    src: "/images/placeholders/galeria-1.svg",
    alt: "Fotografía de comida de Casa Once",
  },
  {
    id: "galeria-2",
    src: "/images/placeholders/galeria-2.svg",
    alt: "Fotografía de café de Casa Once",
  },
  {
    id: "galeria-3",
    src: "/images/placeholders/galeria-3.svg",
    alt: "Ambiente de Casa Once",
  },
  {
    id: "galeria-4",
    src: "/images/placeholders/galeria-4.svg",
    alt: "Fotografía de la fachada de Casa Once",
  },
  {
    id: "galeria-5",
    src: "/images/placeholders/galeria-5.svg",
    alt: "Experiencia en Casa Once",
  },
  {
    id: "galeria-6",
    src: "/images/placeholders/galeria-6.svg",
    alt: "Fotografía de postre de Casa Once",
  },
];