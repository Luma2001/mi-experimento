import { useState } from "react";
import { ChevronDown, ChevronUp, HelpCircle } from "lucide-react";
import { FAQItem } from "../types";

const FAQ_ITEMS: FAQItem[] = [
  {
    id: "cuenta",
    question: "¿Necesito crear una cuenta?",
    answer: "No. ¿Qué Decís? está lista para usarse desde el primer segundo. No te pedimos correos, contraseñas, ni datos personales. Entrás a la web y empezás a conversar inmediatamente.",
  },
  {
    id: "celular",
    question: "¿Funciona en cualquier celular?",
    answer: "Sí, funciona en cualquier smartphone Android o iOS (iPhone) moderno mediante Chrome o Safari. No requiere almacenamiento pesado de las tiendas de apps habituales.",
  },
  {
    id: "conversaciones",
    question: "¿Guarda mis conversaciones?",
    answer: "No guardamos absolutamente nada en ningún servidor. Todo el procesamiento de voz y el historial que ves en pantalla permanecen únicamente en la memoria de tu dispositivo local de manera confidencial.",
  },
  {
    id: "internet",
    question: "¿Necesito internet para usarla?",
    answer: "Para la síntesis de texto a voz y el reconocimiento avanzado por hardware es óptimo tener conexión a internet. Sin embargo, si instalás la app como PWA, la app cargará instantáneamente incluso si estás sin servicio o sin datos.",
  },
  {
    id: "frases",
    question: "¿Puedo usar frases rápidas?",
    answer: "Sí. Podés añadir todas las frases rápidas que uses en tu rutina diaria (médicos, trámites comunes, farmacias). Quedarán guardadas únicamente en la base de datos local de tu navegador para que las dispares con un solo toque.",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("cuenta");

  const toggleItem = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section
      id="faq"
      className="py-16 md:py-24 bg-gray-50 scroll-mt-12 text-gray-900"
      aria-labelledby="faq-heading"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center mb-16">
          <span className="text-sm font-extrabold text-blue-600 uppercase tracking-wider block mb-2">
            Preguntas Frecuentes
          </span>
          <h2
            id="faq-heading"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-gray-950"
          >
            Preguntas <span className="text-blue-600">Comunes</span>
          </h2>
          <p className="mt-3 text-lg text-gray-650 font-sans">
            Despejá todas tus dudas sobre privacidad, compatibilidad técnica y el uso de las herramientas de asistencia auditiva.
          </p>
        </div>

        {/* Accessible Accordion list */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item) => {
            const isOpen = openId === item.id;
            return (
              <div
                key={item.id}
                className="bg-white border border-gray-150 rounded-2xl shadow-sm overflow-hidden transition-all hover:border-gray-300"
              >
                <h3>
                  <button
                    type="button"
                    onClick={() => toggleItem(item.id)}
                    className="w-full flex items-center justify-between p-5 text-left font-extrabold text-base sm:text-lg text-gray-900 hover:text-blue-600 focus:outline-none transition-colors"
                    aria-expanded={isOpen}
                    aria-controls={`faq-panel-${item.id}`}
                    id={`faq-btn-${item.id}`}
                    style={{ minHeight: "44px" }}
                  >
                    <span className="flex items-center gap-2">
                      <HelpCircle className="w-5 h-5 text-blue-600 shrink-0" />
                      {item.question}
                    </span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-gray-500 shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-gray-500 shrink-0" />
                    )}
                  </button>
                </h3>
                
                <div
                  id={`faq-panel-${item.id}`}
                  role="region"
                  aria-labelledby={`faq-btn-${item.id}`}
                  className={`transition-all duration-200 ${
                    isOpen ? "max-h-96 opacity-100 border-t border-gray-100 p-5" : "max-h-0 opacity-0 overflow-hidden"
                  }`}
                >
                  <p className="text-base text-gray-600 leading-relaxed font-sans">
                    {item.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
