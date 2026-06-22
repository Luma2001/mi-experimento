import { useState, useEffect } from "react";
import { Menu, X, MessageSquare, Volume2, Mic } from "lucide-react";
import { NavItem } from "../types";

const NAV_ITEMS: NavItem[] = [
  { label: "Inicio", href: "#inicio" },
  { label: "Cómo Funciona", href: "#manual" },
  { label: "Características", href: "#features" },
  { label: "Testimonios", href: "#testimonios" },
  { label: "Preguntas Frecuentes", href: "#faq" },
  { label: "Contacto", href: "#contacto" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeMenu = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-md border-b border-gray-100 py-3"
          : "bg-white/90 backdrop-blur-sm border-b border-gray-100 py-4"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <a
            href="#inicio"
            className="flex items-center gap-2 group focus:outline-none focus:ring-4 focus:ring-orange-500 rounded-lg p-1.5"
            aria-label="¿Qué Decís? - Ir al inicio"
          >
            {/* Comic speech bubble logo isotipo */}
            <div className="relative flex items-center justify-center p-2 bg-blue-600 rounded-2xl text-white shadow-sm transition-transform group-hover:scale-105">
              <MessageSquare className="w-8 h-8" strokeWidth={2.5} />
              <div className="absolute flex gap-0.5 mt-[-2px]">
                <Volume2 className="w-3.5 h-3.5 animate-pulse text-orange-300" />
                <Mic className="w-3.5 h-3.5 animate-bounce text-teal-300" />
              </div>
            </div>
            <div className="flex flex-col">
              <span className="text-xl font-extrabold tracking-tight text-blue-600 font-display">
                ¿Qué Decís?
              </span>
              <span className="text-[10px] font-bold tracking-wider text-orange-600 uppercase">
                Comunicación Inclusiva
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1" aria-label="Navegación principal">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="px-4 py-2 font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-lg transition-colors text-base focus:outline-none focus:ring-4 focus:ring-orange-500"
              >
                {item.label}
              </a>
            ))}
            <a
              href="#demostrador"
              className="ml-4 px-5 py-2.5 font-bold text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800 rounded-xl transition-all shadow-sm flex items-center gap-2 text-base focus:outline-none focus:ring-4 focus:ring-blue-600"
            >
              Probar Demo
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-xl text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-4 focus:ring-orange-500"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              style={{ minWidth: "44px", minHeight: "44px" }}
              aria-label={isOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            >
              {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? "max-h-screen opacity-100 pointer-events-auto"
            : "max-h-0 opacity-0 pointer-events-none overflow-hidden"
        }`}
        id="mobile-menu"
        aria-hidden={!isOpen}
      >
        <div className="px-4 pt-2 pb-6 space-y-2 bg-white border-b border-gray-200 shadow-xl">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className="block px-4 py-3 text-lg font-bold text-gray-800 hover:text-blue-600 hover:bg-gray-50 rounded-xl transition-colors focus:outline-none focus:ring-4 focus:ring-orange-500"
            >
              {item.label}
            </a>
          ))}
          <div className="pt-4 border-t border-gray-100">
            <a
              href="#demostrador"
              onClick={closeMenu}
              className="block w-full text-center py-4 px-6 text-lg font-extrabold text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800 rounded-2xl transition-all shadow-md focus:outline-none focus:ring-4 focus:ring-blue-600"
            >
              Empezar a conversar de regalo
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
