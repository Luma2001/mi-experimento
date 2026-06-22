import React from "react";
import { Accordion, AccordionItem } from "../ui/Accordion";

export default function FAQ() {
  const faqs = [
    {
      id: "cuenta",
      q: "¿Necesito crear una cuenta?",
      a: "No, en absoluto. Una de nuestras prioridades es la inmediatez. No necesitas registrarte, ingresar correos electrónicos ni recordar contraseñas. Abrís la aplicación web y ya podés empezar a comunicarte de inmediato.",
    },
    {
      id: "celular",
      q: "¿Funciona en cualquier celular?",
      a: "Sí, funciona en cualquier smartphone (Android o iOS) que tenga un navegador moderno como Google Chrome, Safari o Microsoft Edge. Al ser una Aplicación Web Progresiva (PWA), podés añadirla a tu pantalla de inicio como una aplicación nativa.",
    },
    {
      id: "conversaciones",
      q: "¿Guarda mis conversaciones?",
      a: "No. Tu privacidad es sagrada. Ningún texto, transcripción o audio es enviado a servidores externos ni guardado en bases de datos. Todo el procesamiento de voz a texto y reproducción de voz ocurre de manera local y efímera en tu propio dispositivo.",
    },
    {
      id: "internet",
      q: "¿Necesito internet para usarla?",
      a: "No. Una vez que abrís e instalás la aplicación por primera vez en tu celular, el Service Worker descarga los archivos principales para que funcione completamente sin conexión a internet ni datos móviles.",
    },
    {
      id: "frases",
      q: "¿Puedo usar frases rápidas?",
      a: "Sí. Podés agregar y personalizar tus frases rápidas favoritas (por ejemplo, 'Gracias', 'Tengo hipoacusia', '¿Cuánto sale?'). Esto te permite responder a la otra persona con un solo toque, agilizando enormemente la conversación.",
    },
  ];

  return (
    <section id="preguntas" className="py-16 md:py-24 bg-slate-50 border-y border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Encabezado */}
        <div className="text-center mb-16">
          <h2 className="font-atkinson font-bold text-3xl sm:text-4xl text-text-dark tracking-tight">
            Preguntas Frecuentes
          </h2>
          <div className="w-16 h-1 bg-primary-blue mx-auto mt-4 rounded-full" />
          <p className="font-sans text-base text-text-muted mt-4 leading-relaxed">
            Resolvemos tus dudas sobre el uso de la aplicación "¿Qué Decís?".
          </p>
        </div>

        {/* Acordeón de FAQs */}
        <div className="bg-white border border-gray-200/80 rounded-3xl p-6 md:p-8 shadow-sm">
          <Accordion>
            {faqs.map((faq) => (
              <AccordionItem key={faq.id} id={faq.id} title={faq.q}>
                {faq.a}
              </AccordionItem>
            ))}
          </Accordion>
        </div>

      </div>
    </section>
  );
}
