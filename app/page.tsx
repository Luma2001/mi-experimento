import Link from 'next/link';



export default function PortadaPage() {
  return (
    <>


      
      {/* Contenedor Principal (Centrado y con límite de ancho para móviles/tablets) */}
      <main className="relative z-10 w-full max-w-md mx-auto grow flex flex-col justify-center text-center space-y-8 my-auto mt-10">
        
        {/* Encabezado Académico */}
        <header className="space-y-2">
          <h3 className="text-xs uppercase tracking-widest text-teal-600 font-bold py-4">
            Comunicación accesible en momentos reales
          </h3>
          <h1 className="text-4xl font-extrabold  text-slate-50 sm:text-5xl tracking-wide">
            ¿QUÉ DECÍS?
          </h1>
        </header>

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

            {/* Link 2: Antigravity */}
            <Link 
              href="https://resultado-antigravity.vercel.app/" 
              className="w-full py-4 px-6 bg-teal-600 text-white font-medium rounded-xl shadow-sm hover:bg-teal-500 active:scale-[0.98] transition-all text-center"
            >
              Landing Page (Versión Antigravity)
            </Link>

            {/* Link 3: CODEX */}
            <Link 
              href="https://resultado-chat.vercel.app/" 
              className="w-full py-4 px-6 bg-white text-teal-700 font-medium rounded-xl shadow-sm border-2 border-teal-600 hover:bg-teal-50 active:scale-[0.98] transition-all text-center"
            >
              Landing Page (Versión CODEX)
            </Link>
            
            {/* Link 4: IA-Studio */}
            <Link 
              href="https://resultado-ia-studio.vercel.app/" 
              className="w-full py-4 px-6 bg-teal-600 text-white font-medium rounded-xl shadow-sm hover:bg-teal-500 active:scale-[0.98] transition-all text-center"
            >
              Landing Page (Versión IA Studio)
            </Link>
          </div>
        </nav>

        {/* Descripción del Experimento */}
        <section className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 text-left space-y-4">
          <p className="text-sm leading-relaxed text-slate-600">
            Distintas versiones de Landing Pages para la webApp <strong>&ldquo;¿Qué Decís?&rdquo;</strong>. 
            Una web app inclusiva cuyo objetivo es derribar las barreras de comunicación entre 
            personas con distintos grados de disminución auditiva y oyentes.
          </p>
          <p className="text-sm leading-relaxed text-slate-600 border-t border-slate-100 pt-3">
            <span className="font-semibold text-teal-600"> El experimento: </span>
            Se diseñó y estructuró un único prompt inicial de alta precisión basado en lineamientos 
            oficiales para generar una Landing Page.
          </p>
          <p className="text-sm leading-relaxed text-slate-600 border-t border-slate-100 pt-3">
            <span className="font-semibold text-teal-600"> El objetivo: </span>
            El objetivo es poder comparar la capacidad de resolución autónoma de cada agente de desarrollo.
          </p>
          <p className="text-sm leading-relaxed text-slate-600 border-t border-slate-100 pt-3">
            <span className="font-semibold text-teal-600"> Agentes de desarrollo seleccionados: </span>
          </p>   
            <ul className="list-disc list-inside mt-2 space-y-1 text-sm leading-relaxed text-slate-600 pl-4">
              <li>Antigravity - model version 2.1.4</li>
              <li>CODEX - model version GPT-5.5</li>
              <li>IA Studio - model Gemini 3.5 Flash</li>
            </ul>
           
        </section>



      </main>

    </>
    
  );

  
}