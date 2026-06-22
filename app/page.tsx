import Link from 'next/link';

export default function PortadaPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between p-6 font-sans selection:bg-teal-500 selection:text-white">
         
      {/* Contenedor Principal (Centrado y con límite de ancho para móviles/tablets) */}
      <main className="w-full max-w-md mx-auto grow flex flex-col justify-center text-center space-y-8 my-auto">
        
        {/* Encabezado Académico */}
        <header className="space-y-2">
          <h3 className="text-xs uppercase tracking-widest text-teal-600 font-bold">
            Trabajo Práctico Final - Desarrollo Frontend
          </h3>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            ¿QUÉ DECÍS?
          </h1>
        </header>

        {/* Descripción del Experimento */}
        <section className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 text-left space-y-4">
          <p className="text-sm leading-relaxed text-slate-600">
            Distintas versiones de Landing Pages para la webApp <strong>&ldquo;¿Qué Decís?&rdquo;</strong>. 
            Una web app inclusiva cuyo objetivo es derribar las barreras de comunicación entre 
            personas con distintos grados de disminución auditiva y oyentes.
          </p>
          <p className="text-sm leading-relaxed text-slate-600 border-t border-slate-100 pt-3">
            Se diseñó y estructuró un único prompt inicial de alta precisión basado en lineamientos 
            oficiales para generar una Landing Page. El objetivo es poder comparar la capacidad de 
            resolución autónoma de cada agente de desarrollo.
          </p>
        </section>

        {/* Sección de Navegación / Botones */}
        <nav className="space-y-4">
          <h2 className="text-sm font-semibold text-slate-500 uppercase tracking-wider">
            Enlaces a distintas opciones de Landing pages para la WebApp
          </h2>
          
          <div className="flex flex-col space-y-3">
            {/* Link 1: Prompt */}
            <Link 
              href="/prompt-unico" 
              className="w-full py-4 px-6 bg-slate-800 text-white font-medium rounded-xl shadow-sm hover:bg-slate-700 active:scale-[0.98] transition-all text-center border border-transparent"
            >
              PROMPT ÚNICO UTILIZADO
            </Link>

            {/* Link 2: IA Studio */}
            <Link 
              href="/landing-ia-studio" 
              className="w-full py-4 px-6 bg-teal-600 text-white font-medium rounded-xl shadow-sm hover:bg-teal-500 active:scale-[0.98] transition-all text-center"
            >
              Landing Page (Versión IA STUDIO)
            </Link>

            {/* Link 3: Antigravity */}
            <Link 
              href="/landing-antigravity" 
              className="w-full py-4 px-6 bg-white text-teal-700 font-medium rounded-xl shadow-sm border-2 border-teal-600 hover:bg-teal-50 active:scale-[0.98] transition-all text-center"
            >
              Landing Page (Versión Antigravity)
            </Link>
          </div>
        </nav>

      </main>

      {/* Footer Académico */}
      <footer className="w-full max-w-md mx-auto text-center pt-8 pb-2 border-t border-slate-200">
        <p className="text-xs font-semibold text-slate-800">
          Luciana Quilcate
        </p>
        <p className="text-[11px] text-slate-500 mt-1 leading-normal">
          Mi experimento: Comparación de la capacidad de resolución autónoma de distintos agentes de desarrollo a partir de un mismo prompt inicial de alta precisión para generar una Landing Page.
        </p>
      </footer>
    </div>
  );

  
}