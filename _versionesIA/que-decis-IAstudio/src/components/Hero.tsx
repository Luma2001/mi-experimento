import { Mic, Volume2, Shield, Heart, HelpCircle, ArrowRight } from "lucide-react";

interface HeroProps {
  onStartConversing: () => void;
}

export default function Hero({ onStartConversing }: HeroProps) {
  return (
    <section
      id="inicio"
      className="relative pt-24 pb-16 md:pt-36 md:pb-24 overflow-hidden bg-gradient-to-b from-blue-50/60 via-white to-white"
    >
      {/* Background visual accents */}
      <div className="absolute top-0 right-0 -z-10 w-96 h-96 bg-blue-100 rounded-full filter blur-3xl opacity-40 translate-x-20 -translate-y-20"></div>
      <div className="absolute bottom-10 left-0 -z-10 w-72 h-72 bg-teal-100 rounded-full filter blur-3xl opacity-30 -translate-x-20"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Hero Content */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left motion-fade-in">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-100 border border-blue-200 text-blue-800 text-xs sm:text-sm font-bold w-fit">
              <span className="flex h-2 w-2 rounded-full bg-blue-600 animate-pulse"></span>
              Sin descargas • Gratis • 100% Accesible
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-gray-900 leading-[1.1] font-display">
              Escuchá con los <span className="text-blue-600 underline decoration-blue-200 bg-blue-50/50 rounded-lg px-1">ojos</span>. <br />
              Hablá con <span className="text-orange-600">confianza</span>.
            </h1>

            <p className="text-xl text-gray-600 leading-relaxed max-w-2xl font-sans">
              <strong>¿Qué Decís?</strong> es una herramienta digital de acceso instantáneo para personas sordas o con hipoacusia. Permite transcribir la voz humana a texto gigante en tu pantalla y leer en voz alta lo que escribas para comunicarte con total independencia en cualquier banco, médico u oficina pública.
            </p>

            {/* Accessibility Quick Badges */}
            <div className="flex flex-wrap gap-4 text-sm font-semibold text-gray-700">
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gray-100 border border-gray-200">
                <Shield className="w-4 h-4 text-teal-600" aria-hidden="true" />
                Privado y Local
              </span>
              <span className="flex items-center gap-1.5 px-3 py-1 rounded-lg bg-gray-100 border border-gray-200">
                <Heart className="w-4 h-4 text-red-500" aria-hidden="true" />
                Muy Fácil de Usar
              </span>
            </div>

            {/* Call To Actions */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={onStartConversing}
                className="inline-flex items-center justify-center px-8 py-4 text-xl font-extrabold text-white bg-orange-600 hover:bg-orange-700 active:bg-orange-800 rounded-2xl shadow-lg transition-transform hover:-translate-y-0.5 active:translate-y-0 focus:outline-none focus:ring-4 focus:ring-blue-600 cursor-pointer"
                aria-label="Empezar a conversar ahora usando el transcriptor"
              >
                Empezar a conversar
                <ArrowRight className="w-5 h-5 ml-2" strokeWidth={2.5} />
              </button>
              
              <a
                href="#manual"
                className="inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-gray-800 bg-white hover:bg-gray-50 active:bg-gray-100 rounded-2xl border-2 border-gray-200 shadow-sm transition-colors focus:outline-none focus:ring-4 focus:ring-orange-500"
              >
                Ver cómo funciona
              </a>
            </div>
          </div>

          {/* Interactive Interface Mockup */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-[340px] aspect-[9/18.5] bg-gray-900 rounded-[42px] p-3.5 shadow-2xl border-4 border-gray-800 ring-1 ring-gray-700/50">
              {/* Speaker Speaker Mesh and Camera Notch */}
              <div className="absolute top-0 left-1/2 -translate-x-1/2 h-5 w-40 bg-black rounded-b-2xl z-20 flex items-center justify-center">
                <div className="w-12 h-1 bg-gray-800 rounded-full"></div>
                <div className="w-2.5 h-2.5 bg-gray-950 rounded-full ml-3 border border-gray-900"></div>
              </div>

              {/* Inside Smartphone screen */}
              <div className="relative w-full h-full bg-gray-50 rounded-[30px] overflow-hidden flex flex-col justify-between border border-gray-200/50">
                
                {/* Mock Application Navigation */}
                <div className="bg-blue-600 text-white px-4 pt-6 pb-3 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2 h-2 rounded-full bg-green-400"></div>
                    <span className="font-extrabold text-sm tracking-tight font-display">¿Qué Decís? • Activo</span>
                  </div>
                  <HelpCircle className="w-4 h-4 opacity-80" />
                </div>

                {/* Mock Live Text Area */}
                <div className="flex-1 p-4 overflow-y-auto space-y-4 flex flex-col justify-end">
                  
                  {/* Speech Bubble: Oyente */}
                  <div className="space-y-1.5 self-start max-w-[90%] motion-fade-in">
                    <span className="text-[10px] font-bold text-blue-600 uppercase tracking-wider ml-1">Persona Oyente Habla:</span>
                    <div className="bg-blue-100 border border-blue-200 text-gray-900 p-3.5 rounded-2xl rounded-tl-sm shadow-sm">
                      <p className="text-base font-bold leading-snug">
                        "Hola, buenas tardes. ¿Tiene turno solicitado para retirar la tarjeta de débito?"
                      </p>
                      <div className="flex items-center gap-1 mt-1.5 text-blue-600 font-mono text-[9px] font-bold">
                        <Mic className="w-3 h-3 animate-pulse" />
                        <span>Voz a Texto en tiempo real</span>
                      </div>
                    </div>
                  </div>

                  {/* Speech Bubble: Sordo */}
                  <div className="space-y-1.5 self-end max-w-[90%]">
                    <div className="text-right">
                      <span className="text-[10px] font-bold text-orange-600 uppercase tracking-wider mr-1">Tú respondes con voz artificial:</span>
                    </div>
                    <div className="bg-orange-600 text-white p-3.5 rounded-2xl rounded-tr-sm shadow-md">
                      <p className="text-base font-bold leading-snug">
                        "Hola. No tengo turno, pero me enviaron un correo diciendo que ya puedo pasar."
                      </p>
                      <div className="flex items-center gap-1 mt-1.5 text-orange-200 font-mono text-[9px] font-bold justify-end">
                        <Volume2 className="w-3 h-3" />
                        <span>Texto a Voz instantáneo</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Keyboard Input Mock */}
                <div className="p-3 bg-white border-t border-gray-100 flex items-center gap-2">
                  <div className="flex-1 bg-gray-100 rounded-xl px-3 py-2 text-xs text-gray-400 font-medium">
                    Escribe tu respuesta aquí...
                  </div>
                  <div className="w-8 h-8 rounded-full bg-orange-500 flex items-center justify-center text-white shadow-sm">
                    <Volume2 className="w-4 h-4" />
                  </div>
                </div>

              </div>

              {/* Decorative Home Indicator Bar */}
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 w-28 h-1 bg-gray-800 rounded-full z-20"></div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
