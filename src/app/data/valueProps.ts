import {
  CookingPot,
  Clock3,
  Users,
  type LucideIcon,
} from "lucide-react";

export interface ValueProp {
  title: string;
  description: string;
  icon: LucideIcon;
}

/**
 * Propuesta de valor de Casa Once.
 * Para cambiar el icono, usa cualquier icono disponible en lucide-react.
 */
export const valueProps: ValueProp[] = [
  {
    title: "Sabor casero",
    description: "Preparaciones que recuerdan al calor de hogar.",
    icon: CookingPot,
  },
  {
    title: "Para cualquier momento del día",
    description: "Desayunos, onces, almuerzos, café, postres y más.",
    icon: Clock3,
  },
  {
    title: "Para compartir",
    description: "Opciones para disfrutar solo, en pareja, con amigos o en familia.",
    icon: Users,
  },
];