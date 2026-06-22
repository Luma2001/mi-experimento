import { Star, CheckCircle } from "lucide-react";
import { TestimonialItem } from "../types";

const TESTIMONIALS: TestimonialItem[] = [
  {
    id: "mateo-hipoacusia",
    name: "Mateo G.",
    role: "Hipoacusia Bilateral Moderada • 42 años",
    quote: "La uso principalmente cuando voy a atenderme al consultorio médico o en los bancos. Antes tenía que gesticular demasiado o andar escribiendo notas provisorias en papelitos arrugados. Ahora simplemente abro ¿Qué Decís? y leo todo gigante. Me devolvió la seguridad y la tranquilidad.",
    isVerified: true,
    avatarInitials: "MG",
  },
  {
    id: "camila-sorda",
    name: "Camila R.",
    role: "Sorda Oralizada • 27 años",
    quote: "Yo puedo hablar normalmente pero se me hace imposible oír lo que me responden. Con esta herramienta puedo modular yo misma y luego leer la transcripción perfecta de la otra persona en cualquier comercio de mi barrio. Es un puente de inclusión de verdad.",
    isVerified: true,
    avatarInitials: "CR",
  },
  {
    id: "lautaro-estudiante",
    name: "Lautaro S.",
    role: "Estudiante Universitario • 21 años",
    quote: "La uso muchísimo en la facultad para interactuar en el centro de estudiantes, pedir fotocopias o resolver dudas administrativas rápidas. Al no requerir descargas de tiendas pesadas me anda increíble y no me saca espacio en el celular.",
    isVerified: true,
    avatarInitials: "LS",
  },
];

export default function Testimonials() {
  return (
    <section
      id="testimonios"
      className="py-16 md:py-24 bg-white scroll-mt-12 text-gray-900"
      aria-labelledby="testimonials-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-extrabold text-blue-600 uppercase tracking-wider block mb-2">
            Testimonios Reales
          </span>
          <h2
            id="testimonials-heading"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-gray-950"
          >
            Voces de nuestra <span className="text-blue-600">comunidad activa</span>
          </h2>
          <p className="mt-3 text-lg text-gray-655 font-sans">
            Historias verdaderas de personas sordas o con disminución auditiva que recuperaron su confianza en la vida cotidiana gracias a ¿Qué Decís?.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {TESTIMONIALS.map((item) => (
            <div
              key={item.id}
              className="flex flex-col justify-between bg-slate-50 border border-slate-100/90 rounded-3xl p-6 shadow-sm transition-shadow duration-200"
            >
              <div className="space-y-4">
                {/* Visual Stars */}
                <div className="flex gap-1 text-orange-500" aria-hidden="true">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-current" />
                  ))}
                </div>

                {/* Speech quotation */}
                <p className="text-base text-gray-750 italic leading-relaxed font-sans">
                  "{item.quote}"
                </p>
              </div>

              {/* Author Info block */}
              <div className="flex items-center gap-3 pt-6 mt-6 border-t border-gray-150">
                
                {/* Initial Avatar */}
                <div className="w-11 h-11 rounded-full bg-blue-600 text-white font-extrabold text-sm flex items-center justify-center font-display shrink-0">
                  {item.avatarInitials}
                </div>

                <div className="min-w-0">
                  <div className="flex items-center gap-1.5">
                    <span className="font-extrabold text-gray-900 text-base font-display">
                      {item.name}
                    </span>
                    {item.isVerified && (
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0" title="Usuario de la app verificado" />
                    )}
                  </div>
                  <span className="block text-xs text-gray-500 truncate font-semibold">
                    {item.role}
                  </span>
                </div>

              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
