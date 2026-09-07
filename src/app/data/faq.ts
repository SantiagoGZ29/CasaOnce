import { siteConfig } from "./site";

export interface FaqAction {
  label: string;
  href: string;
  external?: boolean;
}

export interface FaqItem {
  question: string;
  answer: string;
  action?: FaqAction;
}

/**
 * Preguntas frecuentes de Casa Once.
 * Solo se incluyen afirmaciones confirmadas por el negocio.
 */
export const faqItems: FaqItem[] = [
  {
    question: "¿Cuál es el horario de Casa Once?",
    answer: "Lunes a sábado de 08:00 a 20:00 hrs.",
  },
  {
    question: "¿Dónde está Casa Once?",
    answer: "Estamos en Benavente 350, Puerto Montt.",
  },
  {
    question: "¿Puedo ver la carta online?",
    answer: "Sí. Puedes revisar nuestra carta online cuando quieras.",
    action: {
      label: "Ver la carta online",
      href: siteConfig.menuUrl,
      external: true,
    },
  },
  {
    question: "¿Tienen desayunos?",
    answer: "Sí, contamos con distintas opciones de desayuno.",
  },
  {
    question: "¿Tienen almuerzos?",
    answer: "Sí, ofrecemos almuerzos y colaciones.",
  },
  {
    question: "¿Cómo puedo reservar?",
    answer: "Puedes contactarnos directamente por WhatsApp.",
  },
];