"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "./ui/container";
import { Menu, X } from "lucide-react";
import { siteConfig } from "@/app/data/site";

interface NavigationItem {
    label: string;
    href: string;
}

const navigation: NavigationItem[] = [
    {
        label: "INICIO",
        href: "/#inicio",
    },
    {
        label: "PRODUCTOS",
        href: "/#productos",
    },
    {
        label: "COMO LLEGAR",
        href: "/#como-llegar",
    },
    {
        label: "PREGUNTAS FRECUENTES",
        href: "/#preguntas-frecuentes",
    },
    {
        label: "CONTACTO",
        href: "/#contacto",
    },
];

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isMenuOpen ? "hidden" : "";

        return () => {
            document.body.style.overflow = "";
        };
    }, [isMenuOpen]);

    function closeMenu() {
        setIsMenuOpen(false);
    }

    return (
        <header className="sticky top-0 z-50 bg-olive text-white">
            <Container>
                <div className="flex min-h-24 items-center justify-between gap-5">
                    {/* Logo */}
                    <Link
                        href="/#inicio"
                        aria-label="Casa Once, ir al inicio"
                        onClick={closeMenu}
                        className="shrink-0 transition duration-300 hover:opacity-90"
                    >
                        <Image
                            src="/images/logo/logo.jpg"
                            alt="Casa Once"
                            width={428}
                            height={293}
                            priority
                            className="h-14 w-auto object-contain transition duration-300 lg:h-16"
                        />
                    </Link>

                    {/* Navegación desktop */}
                    <nav
                        className="hidden items-center gap-6 xl:flex"
                        aria-label="Navegación principal"
                    >
                        {navigation.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="group relative py-5 font-serif font-semibold text-white transition-colors duration-300 hover:text-white"
                            >
                                {item.label}

                                <span className="absolute bottom-0 left-0 h-[3px] w-0 bg-white transition-all duration-300 group-hover:w-full" />
                            </Link>
                        ))}
                    </nav>

                    {/* CTA desktop */}
                    <a
                        href={siteConfig.menuUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="hidden items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-bold uppercase tracking-wide text-olive transition-colors duration-300 hover:bg-cream-dark focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white xl:inline-flex"
                    >
                        Ver carta
                    </a>

                    {/* Botón menú móvil */}
                    <button
                        type="button"
                        className="inline-flex size-12 items-center justify-center rounded-full border border-black bg-white font-script text-black transition-colors duration-300 hover:bg-black hover:text-white xl:hidden"
                        aria-label={
                            isMenuOpen
                                ? "Cerrar menú de navegación"
                                : "Abrir menú de navegación"
                        }
                        aria-expanded={isMenuOpen}
                        aria-controls="mobile-navigation"
                        onClick={() =>
                            setIsMenuOpen((current) => !current)
                        }
                    >
                        {isMenuOpen ? <X /> : <Menu />}
                    </button>
                </div>
            </Container>

            {/* Menú móvil */}
            <div
                id="mobile-navigation"
                className={[
                    "fixed inset-x-0 top-24 z-40 h-[calc(100dvh-6rem)] bg-white transition-all duration-300 xl:hidden",
                    isMenuOpen
                        ? "visible translate-y-0 opacity-100"
                        : "invisible -translate-y-3 opacity-0",
                ].join(" ")}
            >
                <Container className="flex h-full flex-col py-7">
                    <a
                        href={siteConfig.menuUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMenu}
                        className="inline-flex items-center justify-center rounded-full bg-olive px-6 py-3.5 text-base font-bold uppercase tracking-wide text-white transition-colors duration-200 hover:bg-olive-dark"
                    >
                        Ver carta
                    </a>

                    <nav
                        className="mt-4 flex flex-col"
                        aria-label="Navegación móvil"
                    >
                        {navigation.map((item) => (
                            <Link
                                key={item.href}
                                href={item.href}
                                className="border-b border-black/10 py-5 text-lg font-bold text-black transition-colors duration-200 hover:text-olive"
                                onClick={closeMenu}
                            >
                                {item.label}
                            </Link>
                        ))}
                    </nav>
                </Container>
            </div>
        </header>
    );
}
