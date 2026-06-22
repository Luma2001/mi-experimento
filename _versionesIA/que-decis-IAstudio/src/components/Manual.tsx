import { Smartphone, Mic, Eye, Speech } from "lucide-react";

export default function Manual() {
  const steps = [
    {
      num: "01",
      title: "Abrí la aplicación",
      desc: "No necesitás registrarte ni pagar nada. Simplemente abrí ¿Qué Decís? desde tu navegador o tu pantalla de inicio en un segundo.",
      icon: Smartphone,
      color: "border-blue-500 text-blue-600 bg-blue-50",
    },
    {
      num: "02",
      title: "Presioná Escuchar",
      desc: "Dale tu teléfono a la persona oyente o apúntalo en su dirección para que empiece a capturar su voz con el micrófono.",
      icon: Mic,
      color: "border-emerald-500 text-emerald-600 bg-emerald-50",
    },
    {
      num: "03",
      title: "Leé las palabras",
      desc: "La persona oyente habla normalmente y vos leés sus palabras transcriptas en letra gigante en tiempo real.",
      icon: Eye,
      color: "border-teal-500 text-teal-600 bg-teal-50",
    },
    {
      num: "04",
      title: "Respondé con voz",
      desc: "Escribí tu respuesta rápidamente o presioná una de tus frases rápidas para que la app la hable fuerte y claro por vos.",
      icon: Speech,
      color: "border-orange-500 text-orange-600 bg-orange-50",
    },
  ];

  return (
    <section
      id="manual"
      className="py-16 md:py-24 bg-white border-y border-gray-100 scroll-mt-12 text-gray-900"
      aria-labelledby="manual-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-extrabold text-blue-600 uppercase tracking-wider block mb-2">
            Paso a Paso Infalible
          </span>
          <h2
            id="manual-heading"
            className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-gray-950"
          >
            ¿Cómo se usa? <span className="text-blue-600">Aprendelo en 10 segundos</span>
          </h2>
          <p className="mt-3 text-lg text-gray-650 font-sans">
            La interfaz está diseñada de forma ultra-estructurada para evitar la fricción técnica, facilitando la conversación cruzada inmediata entre oyentes y no oyentes.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          
          {/* Connector Line (Desktop) */}
          <div className="hidden md:block absolute top-[60px] left-[10%] right-[10%] h-0.5 bg-gray-100 -z-10"></div>

          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div key={idx} className="flex flex-col items-center text-center space-y-4 relative group">
                
                {/* Step Circle representation */}
                <div className={`w-20 h-20 rounded-full border-4 ${step.color} flex items-center justify-center shadow-md relative z-10 transition-transform group-hover:scale-110`}>
                  <Icon className="w-8 h-8" />
                  
                  {/* Floating Step Badge */}
                  <div className="absolute -top-1.5 -right-1.5 bg-gray-900 text-white text-[10px] font-extrabold w-6 h-6 rounded-full flex items-center justify-center font-mono">
                    {step.num}
                  </div>
                </div>

                <div className="space-y-2 max-w-[250px]">
                  <h3 className="text-xl font-extrabold font-display text-gray-900">
                    {step.title}
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed font-sans">
                    {step.desc}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

        {/* Action Suggestion Card */}
        <div className="mt-16 bg-blue-50 border border-blue-100 rounded-3xl p-6 md:p-8 flex flex-col md:flex-row justify-between items-center gap-6 max-w-4xl mx-auto">
          <div className="space-y-2">
            <h4 className="text-xl font-bold font-display text-blue-900">
              ¿Listo/a para comprobar la velocidad de la app?
            </h4>
            <p className="text-sm text-blue-700 font-sans max-w-xl">
              Haciendo clic abajo podés probar con tu propia voz de oyente o simular respuestas con nuestro sistema de audio interactivo.
            </p>
          </div>
          <a
            href="#demostrador"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-extrabold rounded-xl transition-all shadow-md focus:outline-none shrink-0"
          >
            Empezar a conversar gratis
          </a>
        </div>

      </div>
    </section>
  );
}
