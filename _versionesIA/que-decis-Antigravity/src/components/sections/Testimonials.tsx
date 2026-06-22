import React from "react";

export default function Testimonials() {
  const testimonials = [
    {
      name: "María Laura Giménez",
      role: "Hipoacusia Bilateral",
      quote: "Ir al consultorio médico siempre me generaba ansiedad por no entender bien las indicaciones. Con esta aplicación, le pido al doctor que hable cerca de mi teléfono y puedo leer todo en letra grande sin problemas. Me cambió la vida diaria.",
      initials: "ML",
      bgColor: "bg-blue-100 text-primary-blue",
    },
    {
      name: "Juan Ignacio Costa",
      role: "Sordo Oralizado",
      quote: "Como sordo oralizado, me comunico hablando pero necesito apoyo visual para entender lo que me responden. En los comercios o bancos, esta aplicación es mi puente directo. Al no necesitar internet, la uso en cualquier lado.",
      initials: "JI",
      bgColor: "bg-teal-100 text-primary-teal",
    },
    {
      name: "Lucas Benítez",
      role: "Estudiante Universitario",
      quote: "La utilizo principalmente durante las horas de consulta con mis profesores de la facultad. Poder transcribir sus explicaciones técnicas complejas me permite concentrarme en la materia y no perder el hilo de las respuestas.",
      initials: "LB",
      bgColor: "bg-orange-100 text-cta-orange",
    },
  ];

  return (
    <section id="testimonios" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-atkinson font-bold text-3xl sm:text-4xl text-text-dark tracking-tight">
            Experiencias Reales
          </h2>
          <div className="w-16 h-1 bg-primary-blue mx-auto mt-4 rounded-full" />
          <p className="font-sans text-base text-text-muted mt-4 leading-relaxed">
            Historias de personas que utilizan la aplicación "¿Qué Decís?" para comunicarse de manera autónoma todos los días.
          </p>
        </div>

        {/* Testimonios */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((test, index) => (
            <blockquote
              key={index}
              className="flex flex-col bg-slate-50 border border-gray-100 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 relative justify-between"
            >
              {/* Comilla Decorativa */}
              <span className="absolute top-4 right-8 text-6xl text-gray-200 font-serif pointer-events-none select-none">
                “
              </span>
              
              <p className="font-sans text-text-muted text-base leading-relaxed mb-6 italic z-10">
                "{test.quote}"
              </p>

              {/* Perfil de Usuario */}
              <div className="flex items-center gap-4 border-t border-gray-100 pt-4 mt-auto">
                <div
                  className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full font-atkinson font-bold text-lg ${test.bgColor}`}
                  aria-hidden="true"
                >
                  {test.initials}
                </div>
                <div>
                  <cite className="font-atkinson font-bold text-base text-text-dark not-italic block">
                    {test.name}
                  </cite>
                  <span className="font-sans text-xs text-text-muted font-semibold">
                    {test.role}
                  </span>
                </div>
              </div>
            </blockquote>
          ))}
        </div>

      </div>
    </section>
  );
}
