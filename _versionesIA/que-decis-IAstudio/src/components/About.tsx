import { Heart, Landmark, Users } from "lucide-react";

export default function About() {
  return (
    <section
      id="sobre-nosotros"
      className="py-16 md:py-24 bg-white scroll-mt-12 text-gray-900"
      aria-labelledby="about-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-left max-w-3xl mb-12">
          <span className="text-sm font-extrabold text-blue-600 uppercase tracking-wider block mb-2">
            Sobre Nosotros
          </span>
          <h2
            id="about-heading"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-gray-950"
          >
            Nuestra razón para existir: <br />
            <span className="text-blue-600">Comunicación real, autónoma y sin barreras.</span>
          </h2>
          <p className="mt-4 text-lg text-gray-600 leading-relaxed font-sans">
            Creemos que la tecnología es verdaderamente valiosa cuando derriba obstáculos humanos. Por eso nace <strong>¿Qué Decís?</strong>, impulsado por el deseo de devolver la fluidez a esos diálogos cotidianos que la sociedad da por sentados.
          </p>
        </div>

        {/* 3 Blocks of Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Block 1: El Desafío Diario */}
          <div className="flex flex-col space-y-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm transition-transform hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-orange-100 flex items-center justify-center text-orange-600">
              <Users className="w-6 h-6" strokeWidth={2.5} />
            </div>
            <h3 className="text-xl font-extrabold font-display text-gray-900">
              El Problema Diario
            </h3>
            <p className="text-base text-gray-600 leading-relaxed font-sans">
              Para millones de personas con hipoacusia o sorderas de diversos grados, realizar trámites cotidianos, comprar remedios o interactuar en un comercio se convierte en un desafío de paciencia, señas improvisadas o papeles garabateados.
            </p>
          </div>

          {/* Block 2: Nuestra Motivación */}
          <div className="flex flex-col space-y-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm transition-transform hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-blue-600">
              <Heart className="w-6 h-6" strokeWidth={2.5} />
            </div>
            <h3 className="text-xl font-extrabold font-display text-gray-900">
              Nuestra Motivación
            </h3>
            <p className="text-base text-gray-600 leading-relaxed font-sans">
              Nos moviliza lograr la autonomía total del usuario. Que cualquier persona pueda salir a la calle sabiendo que tiene en su bolsillo una herramienta lista para transcribir y responder al instante de manera intuitiva y con una sola mano.
            </p>
          </div>

          {/* Block 3: Por Qué ¿Qué Decís? */}
          <div className="flex flex-col space-y-4 p-6 rounded-2xl bg-slate-50 border border-slate-100 shadow-sm transition-transform hover:-translate-y-1">
            <div className="w-12 h-12 rounded-xl bg-teal-100 flex items-center justify-center text-teal-600">
              <Landmark className="w-6 h-6" strokeWidth={2.5} />
            </div>
            <h3 className="text-xl font-extrabold font-display text-gray-900">
              Por qué existe la app
            </h3>
            <p className="text-base text-gray-600 leading-relaxed font-sans">
              Porque queríamos una solución robusta que no tuviera pantallas recargadas, no pida registrar cuentas obligatorias, ni requiera de descargas pesadas. ¿Qué Decís? es libre, limpia y respeta tu absoluta confidencialidad en cada palabra.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}
