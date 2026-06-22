import React from "react";

export default function Footer() {
  const quickLinks = [
    { name: "Inicio", href: "#inicio" },
    { name: "Características", href: "#caracteristicas" },
    { name: "Instrucciones", href: "#instrucciones" },
    { name: "Preguntas Frecuentes", href: "#preguntas" },
    { name: "Testimonios", href: "#testimonios" },
    { name: "Contacto", href: "#contacto" },
  ];

  const socialLinks = [
    {
      name: "Instagram",
      href: "https://instagram.com/quedecisapp",
      ariaLabel: "Seguinos en Instagram (se abre en una nueva pestaña)",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
          <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
          <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
        </svg>
      ),
    },
    {
      name: "Facebook",
      href: "https://facebook.com/quedecisapp",
      ariaLabel: "Seguinos en Facebook (se abre en una nueva pestaña)",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
        </svg>
      ),
    },
    {
      name: "LinkedIn",
      href: "https://linkedin.com/company/quedecisapp",
      ariaLabel: "Conectate con nosotros en LinkedIn (se abre en una nueva pestaña)",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
          <rect x="2" y="9" width="4" height="12"></rect>
          <circle cx="4" cy="4" r="2"></circle>
        </svg>
      ),
    },
    {
      name: "YouTube",
      href: "https://youtube.com/c/quedecisapp",
      ariaLabel: "Mirá nuestros videos en YouTube (se abre en una nueva pestaña)",
      icon: (
        <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
          <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
        </svg>
      ),
    },
  ];

  return (
    <footer className="bg-gray-900 text-white pt-12 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Logo y Descripcion */}
          <div className="flex flex-col space-y-4">
            <a
              href="#inicio"
              className="flex items-center gap-3 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-teal rounded-lg w-fit p-1"
              aria-label="¿Qué Decís? - Volver arriba"
            >
              <svg
                className="w-8 h-8 text-primary-teal group-hover:scale-105 transition-transform duration-200"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M20 5C10.61 5 3 11.27 3 19C3 22.87 4.9 26.37 8 28.84V35L14.78 31.25C16.43 31.74 18.18 32 20 32C29.39 32 37 25.73 37 19C37 11.27 29.39 5 20 5Z"
                  fill="currentColor"
                />
                <path
                  d="M13 16H27M13 22H23"
                  stroke="black"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                />
                <circle cx="27" cy="22" r="2" fill="white" />
              </svg>
              <span className="font-atkinson font-bold text-xl tracking-tight text-white">
                ¿Qué Decís?
              </span>
            </a>
            <p className="text-gray-400 font-sans text-sm max-w-xs leading-relaxed">
              La aplicación móvil accesible y local que rompe barreras de comunicación para personas sordas, hipoacúsicas y oyentes.
            </p>
          </div>

          {/* Enlaces rápidos */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-base font-bold font-atkinson tracking-wide text-primary-teal uppercase">
              Enlaces rápidos
            </h2>
            <ul className="grid grid-cols-2 gap-2" role="list">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-gray-300 hover:text-white font-sans text-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-teal rounded-md px-1 py-0.5 block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Redes Sociales e Inclusividad */}
          <div className="flex flex-col space-y-4">
            <h2 className="text-base font-bold font-atkinson tracking-wide text-primary-teal uppercase">
              Redes Sociales
            </h2>
            <div className="flex space-x-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.ariaLabel}
                  className="text-gray-300 hover:text-white transition-colors p-2 bg-gray-800 hover:bg-gray-700 rounded-full focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary-teal min-w-[44px] min-h-[44px] flex items-center justify-center"
                >
                  {social.icon}
                </a>
              ))}
            </div>
            <p className="text-gray-500 font-sans text-xs pt-2">
              Comprometidos con las Pautas de Accesibilidad para el Contenido Web (WCAG 2.2 AA).
            </p>
          </div>
        </div>

        {/* Borde y Legal */}
        <div className="pt-8 mt-8 border-t border-gray-800 flex flex-col sm:flex-row items-center justify-between text-gray-500 font-sans text-xs gap-4">
          <p>© {new Date().getFullYear()} ¿Qué Decís?. Todos los derechos reservados.</p>
          <div className="flex space-x-6">
            <a href="#privacidad" className="hover:text-gray-300 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-teal rounded-sm">
              Políticas de Privacidad
            </a>
            <a href="#accesibilidad" className="hover:text-gray-300 transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-teal rounded-sm">
              Declaración de Accesibilidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
