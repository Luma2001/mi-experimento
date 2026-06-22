import React from "react";

export default function Features() {
  const features = [
    {
      title: "Voz a Texto en Tiempo Real",
      description: "La persona oyente habla y sus palabras se convierten al instante en texto de gran tamaño y alta legibilidad en la pantalla.",
      icon: (
        <svg className="w-8 h-8 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
    },
    {
      title: "Texto a Voz Instantáneo",
      description: "Escribí tu mensaje y la aplicación lo reproducirá con voz alta e inteligible usando la síntesis del teléfono.",
      icon: (
        <svg className="w-8 h-8 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M12 18.75V5.25L7.75 9.5H4.5v5h3.25L12 18.75z" />
        </svg>
      ),
    },
    {
      title: "Frases Rápidas Personalizadas",
      description: "Guardá saludos, preguntas frecuentes o respuestas comunes para responder al instante con un solo toque.",
      icon: (
        <svg className="w-8 h-8 text-cta-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
        </svg>
      ),
    },
    {
      title: "Privacidad Local Absoluta",
      description: "Tus conversaciones no se guardan en ningún servidor ni se envían a internet. Todo se procesa localmente en tu celular.",
      icon: (
        <svg className="w-8 h-8 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
    {
      title: "Uso Adaptado a Una Mano",
      description: "Diseño ergonómico 'Mobile First' con controles al alcance del pulgar, ideal para interactuar mientras sostenés bolsas o mochilas.",
      icon: (
        <svg className="w-8 h-8 text-rose-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 11c0 3.517-1.009 6.799-2.753 9.571m-3.44-2.04l.054-.09A13.916 13.916 0 009 11.75c0-.776-.08-1.547-.235-2.292m0 0a5 5 0 00-3.64-3.64M12 11c0-3.517 1.009-6.799 2.753-9.571m3.44 2.04l-.054.09A13.916 13.916 0 0015 11.25c0 .776.08 1.547.235 2.292m0 0a5 5 0 003.64 3.64M12 11a4 4 0 11-8 0 4 4 0 018 0z" />
        </svg>
      ),
    },
    {
      title: "Instalable como Aplicación móvil",
      description: "Tecnología PWA que te permite instalarla al instante desde el navegador. Pesa menos de 1MB y funciona sin conexión a internet.",
      icon: (
        <svg className="w-8 h-8 text-emerald-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
        </svg>
      ),
    },
  ];

  return (
    <section id="caracteristicas" className="py-16 md:py-24 bg-slate-50 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-atkinson font-bold text-3xl sm:text-4xl text-text-dark tracking-tight">
            Diseñada para la comunicación diaria y real
          </h2>
          <div className="w-16 h-1 bg-primary-blue mx-auto mt-4 rounded-full" />
          <p className="font-sans text-base text-text-muted mt-4 leading-relaxed">
            Cada característica de "¿Qué Decís?" está pensada para agilizar el diálogo directo con personas oyentes en la calle, el médico o cualquier comercio.
          </p>
        </div>

        {/* Grid de Características */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200/60 rounded-3xl p-6 shadow-sm hover:shadow-md hover:border-gray-200 transition-all duration-300 flex flex-col space-y-4"
            >
              <div className="p-3 bg-slate-50 rounded-2xl w-fit">
                {feat.icon}
              </div>
              <h3 className="font-atkinson font-bold text-lg text-text-dark">
                {feat.title}
              </h3>
              <p className="font-sans text-text-muted text-sm leading-relaxed">
                {feat.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
