import React from "react";

export default function About() {
  const blocks = [
    {
      title: "El Problema Cotidiano",
      description: "Para las personas sordas o con hipoacusia, actividades diarias como ir al médico, hacer un trámite en el banco o comprar en un comercio se convierten en barreras de comunicación frustrantes y estresantes.",
      icon: (
        <svg className="w-10 h-10 text-cta-orange" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
    },
    {
      title: "Nuestra Motivación",
      description: "Buscamos derribar estas barreras con tecnología inclusiva. Queremos que la comunicación sea directa y sin intermediarios, permitiendo que cualquier persona se comunique con facilidad usando lo que ya tiene en su mano.",
      icon: (
        <svg className="w-10 h-10 text-primary-teal" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
        </svg>
      ),
    },
    {
      title: "¿Por Qué ¿Qué Decís?",
      description: "Porque creemos en la simplicidad y en la privacidad absoluta. Desarrollamos una aplicación web instalable que funciona al instante, de forma local (procesa la voz en el teléfono) y no requiere conexión a internet.",
      icon: (
        <svg className="w-10 h-10 text-primary-blue" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
      ),
    },
  ];

  return (
    <section id="sobre-nosotros" className="py-16 md:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Encabezado de la sección */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-atkinson font-bold text-3xl sm:text-4xl text-text-dark tracking-tight">
            Rompiendo el aislamiento de la comunicación
          </h2>
          <div className="w-16 h-1 bg-primary-blue mx-auto mt-4 rounded-full" />
          <p className="font-sans text-base text-text-muted mt-4 leading-relaxed">
            Una iniciativa creada para construir un puente de comunicación instantáneo entre personas oyentes y personas con discapacidad auditiva.
          </p>
        </div>

        {/* Bloques de Contenido */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blocks.map((block, index) => (
            <article
              key={index}
              className="flex flex-col bg-slate-50 border border-gray-100 rounded-3xl p-8 hover:shadow-lg transition-all duration-300 group"
            >
              <div className="p-3 bg-white rounded-2xl w-fit shadow-sm mb-6 group-hover:scale-110 transition-transform duration-300">
                {block.icon}
              </div>
              <h3 className="font-atkinson font-bold text-xl text-text-dark mb-4">
                {block.title}
              </h3>
              <p className="font-sans text-text-muted text-base leading-relaxed flex-1">
                {block.description}
              </p>
            </article>
          ))}
        </div>

      </div>
    </section>
  );
}
