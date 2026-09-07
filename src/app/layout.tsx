import type { Metadata } from "next";
import { Roboto, Roboto_Slab, Sacramento } from "next/font/google";
import "./globals.css";

const fontPrimary = Roboto({
  variable: "--font-primary",
  subsets: ["latin"],
  weight: ["300", "400", "500", "700", "900"],
});

const fontDisplay = Roboto_Slab({
  variable: "--font-display",
  subsets: ["latin"],
});

const fontAccent = Sacramento({
  variable: "--font-accent",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  title: "Casa Once | Onces caseras en Puerto Montt",
  description:
    "Casa Once en Puerto Montt. Disfruta desayunos, onces caseras, almuerzos, sándwiches, hamburguesas, café, tortas y más. Visítanos en Benavente 350.",
  openGraph: {
    title: "Casa Once | Onces caseras en Puerto Montt",
    description:
      "Desayunos, onces caseras, almuerzos, sándwiches, hamburguesas, café, tortas y más, con el calor de hogar. Benavente 350, Puerto Montt.",
    type: "website",
    locale: "es_CL",
    siteName: "Casa Once",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="es"
      className={`${fontPrimary.variable} ${fontDisplay.variable} ${fontAccent.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}