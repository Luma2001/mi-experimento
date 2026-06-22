import React from "react";

export default function Instructions() {
  const steps = [
    {
      num: "1",
      title: "Abrí la aplicación",
      description: "Abrila al instante desde el navegador o tocala en la pantalla de inicio de tu celular. Sin registros ni contraseñas.",
      icon: (
        <svg className="w-6 h-6 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z" />
        </svg>
      ),
    },
    {
      num: "2",
      title: "Presioná Escuchar",
      description: "Dale el teléfono a la persona oyente o sostenelo cerca de ella y tocá el botón de micrófono para transcribir su voz.",
      icon: (
        <svg className="w-6 h-6 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19 11a7 7 0 01-7 7m0 0a7 7 0 01-7-7m7 7v4m0 0H8m4 0h4m-4-8a3 3 0 01-3-3V5a3 3 0 116 0v6a3 3 0 01-3 3z" />
        </svg>
      ),
    },
    {
      num: "3",
      title: "Leé la transcripción",
      description: "La voz se convertirá en texto grande y nítido de forma inmediata. La lectura a distancia es cómoda y de alto contraste.",
      icon: (
        <svg className="w-6 h-6 text-cta-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      num: "4",
      title: "Respondé escribiendo",
      description: "Escribí tu respuesta en la pantalla o tocá una frase rápida guardada. El teléfono hablará por vos al presionar 'Hablar'.",
      icon: (
        <svg className="w-6 h-6 text-indigo-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M12 18.75V5.25L7.75 9.5H4.5v5h3.25L12 18.75z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="instrucciones" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-atkinson font-bold text-3xl sm:text-4xl text-text-dark tracking-tight">
            ¿Cómo funciona ¿Qué Decís?
          </h2>
          <div className="w-16 h-1 bg-primary-blue mx-auto mt-4 rounded-full" />
          <p className="font-sans text-base text-text-muted mt-4 leading-relaxed">
            Un diseño centrado en la inmediatez: solo 4 simples pasos para iniciar una conversación en cualquier situación cotidiana.
          </p>
        </div>

        {/* Pasos */}
        <div className="relative">
          {/* Línea conectora horizontal (oculta en móvil) */}
          <div className="hidden lg:block absolute top-1/2 left-1/8 right-1/8 h-1 bg-slate-100 -translate-y-12 -z-10" />
          
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <div
                key={index}
                className="flex flex-col items-center lg:items-start text-center lg:text-left bg-slate-50 lg:bg-transparent rounded-3xl p-6 lg:p-0 border border-gray-100 lg:border-none shadow-sm lg:shadow-none space-y-4"
              >
                {/* Indicador de número e Icono */}
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-blue text-white font-atkinson font-bold text-lg shadow-sm">
                    {step.num}
                  </div>
                  <div className="p-2.5 bg-white lg:bg-slate-100 rounded-xl shadow-sm">
                    {step.icon}
                  </div>
                </div>
                
                {/* Contenido */}
                <div className="space-y-2">
                  <h3 className="font-atkinson font-bold text-lg text-text-dark">
                    {step.title}
                  </h3>
                  <p className="font-sans text-text-muted text-sm leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
