"use client";

import React, { useState, useEffect } from "react";
import Button from "../ui/Button";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  // Cerrar el menú con la tecla escape
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsOpen(false);
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden"; // Desactivar scroll al estar abierto
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const navItems = [
    { name: "Inicio", href: "#inicio" },
    { name: "Características", href: "#caracteristicas" },
    { name: "Instrucciones", href: "#instrucciones" },
    { name: "Preguntas", href: "#preguntas" },
    { name: "Testimonios", href: "#testimonios" },
    { name: "Contacto", href: "#contacto" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/95 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo y Nombre */}
          <a
            href="#inicio"
            className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue rounded-lg p-1"
            aria-label="¿Qué Decís? - Ir al inicio"
          >
            {/* Isotipo: Globo de diálogo cómic con representación gráfica */}
            <svg
              className="w-10 h-10 text-primary-blue group-hover:scale-105 transition-transform duration-200"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              {/* Globo de diálogo principal */}
              <path
                d="M20 5C10.61 5 3 11.27 3 19C3 22.87 4.9 26.37 8 28.84V35L14.78 31.25C16.43 31.74 18.18 32 20 32C29.39 32 37 25.73 37 19C37 11.27 29.39 5 20 5Z"
                fill="currentColor"
              />
              {/* Representación gráfica de conversación: Ondas de sonido y texto */}
              <path
                d="M13 16H27M13 22H23"
                stroke="white"
                strokeWidth="2.5"
                strokeLinecap="round"
              />
              {/* Ojo/Punto que simboliza 'escuchar con los ojos' */}
              <circle cx="27" cy="22" r="2" fill="#14B8A6" />
            </svg>
            <span className="font-atkinson font-bold text-xl tracking-tight text-text-dark">
              ¿Qué Decís?
            </span>
          </a>

          {/* Menú de Navegación de Escritorio */}
          <nav className="hidden md:flex items-center gap-6" role="navigation" aria-label="Menú principal">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="font-sans font-bold text-sm text-text-muted hover:text-primary-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue rounded-md px-2 py-1"
              >
                {item.name}
              </a>
            ))}
            <Button
              variant="cta"
              size="sm"
              onClick={() => {
                const el = document.getElementById("inicio");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              ariaLabel="Empezar a conversar ahora"
            >
              Empezar
            </Button>
          </nav>

          {/* Botón de Menú Hamburguesa Móvil */}
          <div className="flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-xl text-text-dark hover:text-primary-blue hover:bg-gray-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue min-w-[48px] min-h-[48px]"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            >
              {isOpen ? (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Menú Lateral/Drawer Móvil */}
      <div
        className={`fixed inset-0 z-40 md:hidden transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
      >
        {/* Backdrop */}
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm"
          onClick={() => setIsOpen(false)}
          aria-hidden="true"
        />

        {/* Contenedor del Drawer */}
        <nav
          id="mobile-menu"
          aria-label="Menú móvil"
          className={`fixed top-16 right-0 bottom-0 w-72 max-w-[80vw] bg-white shadow-xl flex flex-col p-6 space-y-6 transform transition-transform duration-300 ease-out border-l border-gray-100 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              onClick={() => setIsOpen(false)}
              className="font-sans font-bold text-lg text-text-dark hover:text-primary-blue transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-blue rounded-md py-2 block border-b border-gray-50"
            >
              {item.name}
            </a>
          ))}
          <div className="pt-4">
            <Button
              variant="cta"
              className="w-full text-center"
              onClick={() => {
                setIsOpen(false);
                const el = document.getElementById("inicio");
                el?.scrollIntoView({ behavior: "smooth" });
              }}
              ariaLabel="Empezar a conversar ahora"
            >
              Empezar a conversar
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
}
