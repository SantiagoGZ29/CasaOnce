export interface SiteConfig {
  name: string;
  tagline: string;
  heroHeadline: string;
  heroSubtext: string;
  address: string;
  schedule: string;
  instagramHandle: string;
  instagramUrl: string;
  menuUrl: string;
  reelUrl: string;
  googleMapsUrl: string;
  whatsappNumber: string;
  whatsappMessage: string;
  heroImage: string;
  heroImageAlt: string;
  reviewsRating: number;
  reviewsCount: number;
  reviewsUrl: string;
}

/**
 * Configuración central de Casa Once.
 * Reemplaza aquí los valores editables (dirección, URLs, WhatsApp, etc.)
 * sin necesidad de tocar los componentes visuales.
 */
export const siteConfig: SiteConfig = {
  name: "Casa Once",
  tagline: "El calor de hogar",
  heroHeadline: "Las mejores onces caseras de Puerto Montt",
  heroSubtext:
    "Desayunos, almuerzos, sándwiches, hamburguesas, tortas y mucho más, preparados con ese sabor de hogar que nos caracteriza.",
  address: "Benavente 350, Puerto Montt",
  schedule: "Lunes a sábado · 08:00 — 20:00 hrs",
  instagramHandle: "@casaoncepm",
  instagramUrl: "https://www.instagram.com/casaoncepm/",
  menuUrl: "https://toteat.app/r/cl/-Casa-Once/4160/checkin/menu",
  reelUrl:
    "https://www.instagram.com/reel/DQrgXgokbSU/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==",
  googleMapsUrl:
    "https://www.google.com/maps/search/?api=1&query=Benavente+350+Puerto+Montt",
  whatsappNumber: "",
  whatsappMessage: "Hola, Casa Once. Quisiera consultar por una reserva.",
  heroImage: "/images/placeholders/fachada.svg",
  heroImageAlt:
    "Fotografía de la fachada de Casa Once, en Benavente 350, Puerto Montt",
  reviewsRating: 4.4,
  reviewsCount: 449,
  reviewsUrl:
    "https://www.google.com/maps/search/?api=1&query=Casa+Once+O%27Higgins+233+Puerto+Montt",
};

/** Devuelve el enlace wa.me con el número y el mensaje si están disponibles. */
export function whatsappLink(): string | null {
  const { whatsappNumber, whatsappMessage } = siteConfig;
  if (!whatsappNumber) return null;
  const number = whatsappNumber.replace(/[^\d]/g, "");
  if (!number) return null;
  const text = encodeURIComponent(whatsappMessage);
  return `https://wa.me/${number}${text ? `?text=${text}` : ""}`;
}
