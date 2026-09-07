export interface Testimonial {
  quote: string;
  author: string;
  date?: string;
  rating?: number;
  source: "google";
}

/**
 * Reseñas reales de clientes, extraídas de Google Maps (ficha de Casa Once).
 * Todas corresponden a reseñas de 5 estrellas.
 *
 * Para actualizar: edita o agrega entradas aquí; los componentes visuales se
 * ajustan solos (reemplaza `quote`, `author`, `date` y `rating`).
 */
export const testimonials: Testimonial[] = [
  {
    quote:
      "Excelente atención del garzón, fuimos 4 personas a comer una once cerca de las 6:30pm y estaba expedita la atención. Todo lo que pedimos estaba exquisito y contundente. Las onces para dos son abundantes, me encantó el ambiente.",
    author: "Belén Maldonado",
    date: "Hace 7 meses",
    rating: 5,
    source: "google",
  },
  {
    quote:
      "Desayuno y onces caseras, contundentes y muy sabrosas. Fui para la once, pero pedí del menú desayuno. No se hicieron problemas.",
    author: "Valeria Arroyo",
    date: "Hace 4 meses",
    rating: 5,
    source: "google",
  },
  {
    quote:
      "El servicio del garzón espectacular y el ambiente muy a gusto para el momento de almorzar. Me encanta el lugar.",
    author: "Humberto Velásquez",
    date: "Hace 6 meses",
    rating: 5,
    source: "google",
  },
  {
    quote:
      "Excelente lugar para ir a compartir. Tienen ricas colaciones que incluyen proteína, acompañamiento, ensalada, postrecito y jugo por $6.500, súper económico. Muy buena la atención, súper recomendado.",
    author: "Yenifer Sandoval",
    date: "Hace 8 meses",
    rating: 5,
    source: "google",
  },
  {
    quote:
      "Excelente atención, la comida exquisita, lugar bonito, tranquilo y con un ambiente muy grato. Es nuestro lugar favorito para desayunar en Puerto Montt.",
    author: "Brenda Mondaca Izquierdo",
    date: "Hace 6 meses",
    rating: 5,
    source: "google",
  },
  {
    quote:
      "Muy buen restaurante, menú variado y todo muy rico. El ambiente muy agradable.",
    author: "Mario Pineda",
    date: "Hace 2 meses",
    rating: 5,
    source: "google",
  },
  {
    quote:
      "Un café nuevo, hermoso, con excelente música ambiental. La once sureña lo mejor del menú. Muy buena atención, mi nuevo lugar favorito.",
    author: "Jorge Fuentes",
    date: "Hace 6 meses",
    rating: 5,
    source: "google",
  },
  {
    quote:
      "Deliciosa comida, excelente servicio. Me encanta el local, uno se siente como en casa.",
    author: "Dayeise Luna",
    date: "Hace 6 meses",
    rating: 5,
    source: "google",
  },
  {
    quote:
      "Desde los $6.500 se come ensaladita, proteína, jugos, un acompañamiento y postrecito. Excelente atención. Precio acorde al mercado.",
    author: "Marynes Meléndez",
    date: "Hace 8 meses",
    rating: 5,
    source: "google",
  },
  {
    quote:
      "Comida muy deliciosa, ambiente relajado y acogedor y la atención excelente. Muy buen local y comida exquisita.",
    author: "Miguel Pinela",
    date: "Hace 6 meses",
    rating: 5,
    source: "google",
  },
  {
    quote:
      "Muy rico el almuerzo, la carne y el puré genial. Un lugar muy recomendable.",
    author: "Marcela Cárcamo",
    date: "Hace 6 meses",
    rating: 5,
    source: "google",
  },
  {
    quote:
      "Excelente lugar para compartir y disfrutar de un buen café, además de comida y postres deliciosos. Tienen opciones para compartir muy buenas.",
    author: "Andrea Rodríguez",
    date: "Hace 10 meses",
    rating: 5,
    source: "google",
  },
  {
    quote: "Un muy lindo lugar y el servicio es increíble.",
    author: "Ana Patricia Escalona",
    date: "Hace 6 meses",
    rating: 5,
    source: "google",
  },
];