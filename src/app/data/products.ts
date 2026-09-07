export interface ProductCategory {
  id: string;
  title: string;
  description: string;
  image: string;
  href?: string;
}

/**
 * Categorías de productos de Casa Once.
 * Reemplaza únicamente la ruta de `image` (o `href`) para cambiar cada tarjeta.
 */
export const productCategories: ProductCategory[] = [
  {
    id: "onces",
    title: "Onces",
    description: "El sabor casero que define nuestra esencia.",
    image: "/images/onces.webp",
  },
  {
    id: "desayunos",
    title: "Desayunos",
    description: "Para empezar el día con energía y buen sabor.",
    image: "/images/desayuno.webp",
  },
  {
    id: "almuerzos-colaciones",
    title: "Almuerzos y colaciones",
    description: "Comida casera para el día a día.",
    image: "/images/colaciones.webp",
  },
  {
    id: "sandwich",
    title: "Sandwich",
    description: "Preparaciones clásicas y con carácter propio.",
    image: "/images/sandwich.webp",
  },
  {
    id: "hamburguesas",
    title: "Hamburguesas",
    description: "Jugosas y con ese toque casero que nos distingue.",
    image: "/images/hamburgesa.webp",
  },
  {
    id: "jugos-y-bebidas",
    title: "Jugos y bebidas",
    description: "Para acompañar lo que más te guste.",
    image: "/images/placeholders/jugos.svg",
  },
  {
    id: "helados",
    title: "Helados",
    description: "Un dulce y fresco final para cualquier momento.",
    image: "/images/helados.webp",
  },
  {
    id: "tortas-y-postres",
    title: "Tortas y postres",
    description: "El capricho dulce con sabor a hogar.",
    image: "/images/tortas.webp",
  },
  {
    id: "ensaladas",
    title: "Ensaladas",
    description: "Frescas, simples y llenas de color.",
    image: "/images/ensalada.webp",
  },
  {
    id: "papas",
    title: "Papas",
    description: "El acompañamiento ideal para compartir.",
    image: "/images/placeholders/papas.svg",
  },
  {
    id: "cafe",
    title: "Café",
    description: "Para disfrutar sin apuro, con calidez.",
    image: "/images/cafe.webp",
  },
  {
    id: "ceviche",
    title: "Ceviche",
    description: "Frescura del mar con el sabor de la casa.",
    image: "/images/placeholders/ceviche.svg",
  },
];
