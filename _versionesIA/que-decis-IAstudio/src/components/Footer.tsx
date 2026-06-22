import { MessageSquare, Instagram, Facebook, Linkedin, Youtube, AlertCircle } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 border-t border-gray-800 pt-16 pb-8" aria-labelledby="footer-heading">
      <h2 id="footer-heading" className="sr-only">Pie de página</h2>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start mb-12">
          
          {/* Brand/Product Section */}
          <div className="md:col-span-5 space-y-4 text-left">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center p-2 bg-blue-600 rounded-xl text-white">
                <MessageSquare className="w-6 h-6" />
              </div>
              <div className="flex flex-col">
                <span className="text-lg font-extrabold text-white tracking-tight font-display">
                  ¿Qué Decís?
                </span>
                <span className="text-[9px] font-bold text-orange-400 uppercase tracking-widest leading-none">
                  Modelamiento Inclusivo
                </span>
              </div>
            </div>
            
            <p className="text-sm text-gray-400 font-sans max-w-sm leading-relaxed">
              Herramienta de asistencia auditiva y conversación directa en tiempo real. Hecha con amor y accesible para todas las personas sin distinción física.
            </p>

            {/* Social Links */}
            <div className="flex gap-4 pt-2">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-orange-500 hover:text-white flex items-center justify-center transition-colors focus:ring-4 focus:ring-yellow-500 focus:outline-none text-gray-300"
                aria-label="Seguinos en Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-600 hover:text-white flex items-center justify-center transition-colors focus:ring-4 focus:ring-yellow-500 focus:outline-none text-gray-300"
                aria-label="Seguinos en Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-blue-500 hover:text-white flex items-center justify-center transition-colors focus:ring-4 focus:ring-yellow-500 focus:outline-none text-gray-300"
                aria-label="Seguinos en LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://youtube.com"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 rounded-full bg-gray-800 hover:bg-red-600 hover:text-white flex items-center justify-center transition-colors focus:ring-4 focus:ring-yellow-500 focus:outline-none text-gray-300"
                aria-label="Seguinos en YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links Section */}
          <div className="md:col-span-4 text-left">
            <h3 className="text-sm font-extrabold text-white uppercase tracking-widest mb-4">
              Enlaces de Interés
            </h3>
            <ul className="space-y-2.5 text-sm font-semibold">
              <li>
                <a href="#inicio" className="hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 p-1">
                  Inicio del Sitio
                </a>
              </li>
              <li>
                <a href="#manual" className="hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 p-1">
                  Manual de Instrucciones
                </a>
              </li>
              <li>
                <a href="#demostrador" className="hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 p-1">
                  Probar Demostración Interactiva
                </a>
              </li>
              <li>
                <a href="#faq" className="hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 p-1">
                  Preguntas Comunes (FAQ)
                </a>
              </li>
              <li>
                <a href="#contacto" className="hover:text-blue-400 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 p-1">
                  Contacto de Soporte
                </a>
              </li>
            </ul>
          </div>

          {/* Legal Compliance Disclaimer */}
          <div className="md:col-span-3 text-left space-y-3">
            <h3 className="text-sm font-extrabold text-white uppercase tracking-widest mb-1">
              Cumplimiento Técnico
            </h3>
            <div className="flex gap-2 items-start text-xs leading-relaxed bg-gray-950/40 p-3.5 border border-gray-800 rounded-2xl text-gray-400 font-sans">
              <AlertCircle className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
              <span>
                Esta Landing Page y su MVP se encuentran auditados bajo normas de accesibilidad <strong>WCAG 2.2 Nivel AA</strong> y están totalmente preparados para agregarse en la pantalla táctil de cualquier smartphone como PWA offline.
              </span>
            </div>
          </div>

        </div>

        {/* Divider / Credits */}
        <div className="border-t border-gray-800 pt-8 mt-8 flex flex-col sm:flex-row justify-between items-center text-xs gap-4 text-gray-500 font-semibold font-sans">
          <span>
            © {currentYear} ¿Qué Decís?. Todos los derechos reservados bajo Licencia Comunitaria de Código Abierto.
          </span>
          <div className="flex gap-4">
            <a href="#inicio" className="hover:underline transition-all">Política de Privacidad</a>
            <span>•</span>
            <a href="#inicio" className="hover:underline transition-all">Condiciones de Uso</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
