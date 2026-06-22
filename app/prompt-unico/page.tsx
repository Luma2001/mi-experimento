import Link from "next/link";

export default function PromptUnico() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 flex flex-col justify-between p-6 font-sans selection:bg-teal-500 selection:text-white">
            <div className="flex flex-col space-y-3 mb-10">
            {/* Link: volver atrás */}
            <Link 
              href="/" 
              className="w-full py-4 px-6 bg-slate-800 text-white font-medium rounded-xl shadow-sm hover:bg-slate-700 active:scale-[0.98] transition-all text-center border border-transparent"
            >
              VOLVER AL INICIO
            </Link>
      </div>   
      {/* Contenedor Principal (Centrado y con límite de ancho para móviles/tablets) */}
      <main className="w-full max-w-md mx-auto grow flex flex-col justify-center text-center space-y-8 my-auto">
        
        {/* Encabezado Académico */}
        <header className="space-y-2">
          <h3 className="text-xs uppercase tracking-widest text-teal-600 font-bold">
            Trabajo Práctico Final - Desarrollo Frontend
          </h3>
          <h1 className="text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl">
            PROMPT ÚNICO UTILIZADO
          </h1>
        </header>

        {/* Descripción del Experimento */}
        <section className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100 text-left space-y-4">
          
          <h2 className="border-t border-slate-200 pt-3 font-bold text-center">ROL</h2>
            <p className="text-sm leading-relaxed text-slate-600">           
                Actúa como un Arquitecto Frontend Senior especializado en Next.js, TypeScript, UX/UI Mobile First, Accesibilidad Digital (WCAG 2.2 AA), Progressive Web Apps (PWA) y diseño inclusivo para personas con discapacidad auditiva.
                Tu misión es diseñar y desarrollar una Landing Page profesional de alta conversión para la aplicación &quot;¿Qué Decís?&quot;, aplicando buenas prácticas de arquitectura frontend, accesibilidad, rendimiento y experiencia de usuario.
            </p>
          <h2 className="border-t border-slate-200 pt-3 font-bold text-center">TAREA</h2>
            <p className="text-sm leading-relaxed text-slate-600 ">
                Generar el diseño completo, estructura visual, arquitectura de componentes, contenido y código de una Landing Page Mobile First utilizando:
            </p>
            <ul className="list-disc list-inside text-sm leading-relaxed text-slate-600">
                <li>Next.js 15+</li>
                <li>React</li> 
                <li>TypeScript</li>
                <li>TailwindCSS</li>
                <li>App Router</li>
                <li>Server Components cuando sea apropiado</li>
                <li>Componentes reutilizables</li>
                <li>SEO técnico</li>    
                <li>Diseño responsive</li>
                <li>Accesibilidad WCAG 2.2 AA</li>
                <li>Preparación para PWA</li>
            </ul>
            <p className="text-sm leading-relaxed text-slate-600">
                La landing debe comunicar claramente el problema que resuelve la aplicación y convertir visitantes en usuarios mediante un CTA principal: <span className="font-bold">&quot;Empezar a conversar&quot;</span>
            </p>
          <h2 className="border-t border-slate-200 pt-3 font-bold text-center">CONTEXTO</h2>
            <p className="text-sm leading-relaxed text-slate-600 ">
                <span className="font-bold">Nombre del producto:</span> ¿Qué Decís?
            </p>
            <p className="text-sm leading-relaxed text-slate-600 ">
                <span className="font-bold">Problema que resuelve:</span> La aplicación ayuda a personas con:  
            </p>
            <ul className="list-disc list-inside text-sm leading-relaxed text-slate-600">
                <li>Hipoacusia.</li>
                <li>Sordera oralizada.</li>
                <li>Sordera señante.</li>
            </ul>
            <p className="text-sm leading-relaxed text-slate-600">
                a comunicarse con personas oyentes en:
            </p>
            <ul className="list-disc list-inside text-sm leading-relaxed text-slate-600">
                <li>Consultorios médicos.</li>
                <li>Comercios.</li>
                <li>Bancos.</li>
                <li>Universidades.</li>
                <li>Espacios públicos.</li>
            </ul>
            <p className="text-sm leading-relaxed text-slate-600">
                La aplicación funciona mediante dos mecanismos principales:
            </p>
            <h3 className="text-lg font-bold text-slate-900 text-center">Voz → Texto</h3>
            <p className="text-sm leading-relaxed text-slate-600">
                Una persona oyente habla.
                La aplicación captura el audio mediante Web Speech API y lo convierte en texto grande y legible.
            </p>
            <h3 className="text-lg font-bold text-slate-900 text-center">Texto → Voz</h3>
                <p className="text-sm leading-relaxed text-slate-600">
                    La persona usuaria escribe un mensaje.
                    La aplicación utiliza <span className="font-bold">SpeechSynthesis</span> para reproducir el texto mediante voz.
                </p>

                <p className="border-t border-slate-100 pt-3 font-bold">Características clave del MVP</p>
                <ul className="list-disc list-inside text-sm leading-relaxed text-slate-600">
                    <li>Conversión Voz a Texto.</li>
                    <li>Conversión Texto a Voz.</li>
                    <li>Frases rápidas personalizables.</li>
                    <li>Diseño Mobile First.</li>
                    <li>Uso con una sola mano.</li>
                    <li>Alto contraste visual.</li>
                    <li>Tipografía extremadamente legible.</li>
                    <li>Privacidad local.</li>
                    <li>Preparación para instalación como PWA.</li>
                </ul>
                <p className="border-t border-slate-100 pt-3 font-bold">Público objetivo</p>
                <p className="text-sm leading-relaxed text-slate-600">
                    Personas con disminución auditiva que necesitan comunicarse de manera rápida y sencilla en situaciones cotidianas.
                </p>
          <h2 className="border-t border-slate-200 pt-3 font-bold text-center">RAZONAMIENTO</h2>
                <p className="text-sm leading-relaxed text-slate-600">Antes de generar cualquier código o propuesta visual debes seguir este proceso:</p>
            <h3 className="text-lg font-bold text-slate-900">Paso 1</h3>
                <p className="text-sm leading-relaxed text-slate-600">Priorizar Mobile First. Diseñar primero para pantallas:</p>  
                <ul className="list-disc list-inside text-sm leading-relaxed text-slate-600">
                    <li>320px</li>
                    <li>375px</li>
                    <li>390px</li>
                    <li>428px</li>
                </ul>
                <p className="text-sm leading-relaxed text-slate-600">y luego escalar hacia tablet y desktop.</p>
            <h3 className="text-lg font-bold text-slate-900">Paso 2</h3>
                <p className="text-sm leading-relaxed text-slate-600">Optimizar la experiencia para personas con discapacidad auditiva.</p>
                <p className="text-sm leading-relaxed text-slate-600">Por lo tanto:</p>
                <ul className="list-disc list-inside text-sm leading-relaxed text-slate-600">
                    <li>El contenido debe ser visual.</li>
                    <li>El mensaje debe ser claro.</li>
                    <li>Los textos deben ser cortos.</li>
                    <li>Los CTA deben ser evidentes.</li>
                    <li>La navegación debe ser simple.</li>
                </ul>
            <h3 className="text-lg font-bold text-slate-900">Paso 3</h3>
                <p className="text-sm leading-relaxed text-slate-600">Reducir la carga cognitiva.Evitar:</p>
                <ul className="list-disc list-inside text-sm leading-relaxed text-slate-600">
                    <li>Bloques largos de texto.</li>
                    <li>Elementos decorativos excesivos.</li>
                    <li>Animaciones agresivas.</li>
                    <li>Distracciones visuales.</li>
                </ul>
            <h3 className="text-lg font-bold text-slate-900">Paso 4</h3>
                <p className="text-sm leading-relaxed text-slate-600"><span className="font-bold">Aplicar accesibilidad.</span> Obligatorio:</p>
                <ul className="list-disc list-inside text-sm leading-relaxed text-slate-600">
                    <li>Contraste mínimo WCAG AA.</li>
                    <li>HTML semántico.</li>
                    <li>Labels accesibles.</li>
                    <li>Roles ARIA.</li>
                    <li>Navegación por teclado.</li>
                    <li>Focus visible.</li>
                    <li>Textos legibles a distancia.</li>
                </ul>
            <h3 className="text-lg font-bold text-slate-900">Paso 5</h3>
                <p className="text-sm leading-relaxed text-slate-600">Optimizar conversión.</p>
                <p className="text-sm leading-relaxed text-slate-600">Todo el recorrido debe conducir al CTA:</p>
                <p className="text-sm leading-relaxed text-slate-600"><span className="font-bold">Empezar a conversar</span></p>

          <h2 className="border-t border-slate-200 pt-3 font-bold text-center">FORMATO</h2>
            <p className="text-sm leading-relaxed text-slate-600"><span className="font-bold">Estilo visual</span></p>
            <p className="text-sm leading-relaxed text-slate-600 font-bold">Personalidad</p>
            <ul className="list-disc list-inside text-sm leading-relaxed text-slate-600">
                <li>Cercana.</li>
                <li>Humana.</li>
                <li>Inclusiva.</li>
                <li>Moderna.</li>
                <li>Tecnológica.</li>
                <li>Confiable.</li>
            </ul>
            <p className="text-sm leading-relaxed text-slate-600 font-bold">Paleta sugerida</p>
            <p className="text-sm leading-relaxed text-slate-600 ml-10">
                Primario:<br/>
                #2563EB<br/>
                Secundario:<br/>
                #14B8A6<br/>
                Fondo:<br/>
                #FFFFFF<br/>
                Texto:<br/>
                #111827<br/>
                Texto secundario:<br/>
                #4B5563<br/>
                CTA:<br/>
                #F97316<br/>
            </p>
            <p className="text-sm leading-relaxed text-slate-600 font-bold">Tipografía</p>
            <p className="text-sm leading-relaxed text-slate-600">Seleccionar tipografías altamente legibles.</p>
            <p className="text-sm leading-relaxed text-slate-600">Prioridad:</p>
            <ul className="list-disc list-inside text-sm leading-relaxed text-slate-600">
                <li>Inter.</li>
                <li>Atkinson Hyperlegible.</li>
                <li>Source Sans Pro.</li>
            </ul>
            <p className="text-sm leading-relaxed text-slate-600">Los títulos deben ser:</p>
            <ul className="list-disc list-inside text-sm leading-relaxed text-slate-600">
                <li>Grandes</li>
                <li>Claros</li>
                <li>Sans Serif</li>
                <li>Fáciles de leer</li>
                <li>Sin efectos decorativos</li>
            </ul>
          <h2 className="border-t border-slate-200 pt-3 font-bold text-center">ESTRUCTURA OBLIGATORIA DE LA LANDING</h2>
            <h3 className="text-sm leading-relaxed text-slate-600 font-bold text-center">1. HEADER</h3>
                <p className="text-sm leading-relaxed text-slate-600">Debe ocupar la menor altura posible.</p>

                <p className="text-sm leading-relaxed text-slate-600"><span className="font-bold">Logo: </span>Crear un isotipo inspirado en un globo de diálogo tipo cómic.
                Dentro del globo incluir visualmente ¿Qué Decís? y una pequeña representación gráfica de conversación.</p>
                <p className="text-sm leading-relaxed text-slate-600"><span className="font-bold">Marca: </span>¿Qué Decís?</p>
                <p className="text-sm leading-relaxed text-slate-600"><span className="font-bold">Menú:</span></p>
                    <ul className="list-disc list-inside text-sm leading-relaxed text-slate-600">
                        <li>Inicio</li>
                        <li>Manual de Instrucciones</li>
                        <li>Preguntas y Respuestas</li>
                        <li>Testimonios</li>
                        <li>Contacto</li>
                    </ul>
                <p className="text-sm leading-relaxed text-slate-600 font-bold">Comportamiento:</p>
                <p className="text-sm leading-relaxed text-slate-600"><span className="font-bold">Mobile:</span></p>
                    <ul className="list-disc list-inside text-sm leading-relaxed text-slate-600">
                        <li>Menú hamburguesa accesible.</li>
                        <li>Área táctil mínima de 44x44px.</li>
                    </ul>
                <p className="text-sm leading-relaxed text-slate-600"><span className="font-bold">Desktop:</span></p>
                    <ul className="list-disc list-inside text-sm leading-relaxed text-slate-600">
                        <li>Menú horizontal.</li>
                        <li>Header sticky.</li>
                    </ul>

            <h3 className="text-sm leading-relaxed text-slate-600 font-bold text-center">2. HERO SECTION</h3>
                <p className="text-sm leading-relaxed text-slate-600">Debe ocupar la primera pantalla visible.</p>
                <p className="text-sm leading-relaxed text-slate-600 font-bold">Objetivo</p>
                <p className="text-sm leading-relaxed text-slate-600">Explicar el beneficio principal en menos de 5 segundos.</p>
                <p className="text-sm leading-relaxed text-slate-600 font-bold">Título principal</p>
                <p className="text-sm leading-relaxed text-slate-600">Crear un titular emocional e impactante orientado a inclusión y comunicación.</p>
                <p className="text-sm leading-relaxed text-slate-600 font-bold">Ejemplo conceptual:</p>
                <p className="text-sm leading-relaxed text-slate-600">Escuchá con los ojos. Hablá con confianza.</p>
                <p className="text-sm leading-relaxed text-slate-600 font-bold">Subtítulo:</p>
                <p className="text-sm leading-relaxed text-slate-600">Explicar brevemente cómo funciona la aplicación.</p>
                <p className="text-sm leading-relaxed text-slate-600 font-bold">CTA principal:</p>
                <p className="text-sm leading-relaxed text-slate-600">Botón grande: Empezar a conversar</p>
                <p className="text-sm leading-relaxed text-slate-600 font-bold">CTA secundario:</p>
                <p className="text-sm leading-relaxed text-slate-600">Botón pequeño: Ver cómo funciona</p>
                <p className="text-sm leading-relaxed text-slate-600 font-bold">Imagen principal:</p>
                <p className="text-sm leading-relaxed text-slate-600">Mockup de smartphone mostrando:</p>
                <ul className="list-disc list-inside text-sm leading-relaxed text-slate-600">
                    <li>Conversión Voz → Texto.</li>
                    <li>Conversión Texto → Voz.</li>
                </ul>
            <h3 className="text-sm leading-relaxed text-slate-600 font-bold text-center">3. SOBRE NOSOTROS</h3>
                <p className="text-sm leading-relaxed text-slate-600">Explicar:</p>
                <ul className="list-disc list-inside text-sm leading-relaxed text-slate-600">
                    <li>El problema actual.</li>
                    <li>La motivación del proyecto.</li>
                    <li>Por qué existe ¿Qué Decís?.</li>   
                </ul>                
                <p className="text-sm leading-relaxed text-slate-600">Utilizar máximo 3 bloques de contenido.</p>
            <h3 className="text-sm leading-relaxed text-slate-600 font-bold text-center">4. SERVICIOS / CARACTERÍSTICAS</h3>
                <p className="text-sm leading-relaxed text-slate-600">Mostrar cards accesibles con iconografía clara.</p>
                <p className="text-sm leading-relaxed text-slate-600 font-bold">Característica 1</p>
                <p className="text-sm leading-relaxed text-slate-600">Voz a Texto en tiempo real.</p>
                <p className="text-sm leading-relaxed text-slate-600 font-bold">Característica 2</p>
                <p className="text-sm leading-relaxed text-slate-600">Texto a Voz instantáneo.</p>
                <p className="text-sm leading-relaxed text-slate-600 font-bold">Característica 3</p>
                <p className="text-sm leading-relaxed text-slate-600">Frases rápidas personalizables.</p>
                <p className="text-sm leading-relaxed text-slate-600 font-bold">Característica 4</p>
                <p className="text-sm leading-relaxed text-slate-600">Modo privado.</p>
                <p className="text-sm leading-relaxed text-slate-600 font-bold">Característica 5</p>
                <p className="text-sm leading-relaxed text-slate-600">Diseño pensado para una sola mano.</p>
                <p className="text-sm leading-relaxed text-slate-600 font-bold">Característica 6</p>
                <p className="text-sm leading-relaxed text-slate-600">Instalable como aplicación móvil.</p>
            <h3 className="text-sm leading-relaxed text-slate-600 font-bold text-center">5. MANUAL DE INSTRUCCIONES</h3>
                <p className="text-sm leading-relaxed text-slate-600">Sección visual en 4 pasos.</p>
                <ul className="list-disc list-inside text-sm leading-relaxed text-slate-600">
                    <li>1.	Abrí la aplicación.</li>
                    <li>2.	Presioná Escuchar.</li>
                    <li>3.	Leé la transcripción.</li>   
                    <li>4.	Respondé usando texto a voz.</li>
                </ul> 
            <h3 className="text-sm leading-relaxed text-slate-600 font-bold text-center">6. PREGUNTAS FRECUENTES</h3>
                <p className="text-sm leading-relaxed text-slate-600">Implementar acordeón accesible. Preguntas:</p>
                <ul className="list-disc list-inside text-sm leading-relaxed text-slate-600">
                    <li>¿Necesito crear una cuenta?</li>
                    <li>¿Funciona en cualquier celular?</li>
                    <li>¿Necesito internet?</li>   
                    <li>¿Puedo usar frases rápidas?</li>
                </ul> 
            <h3 className="text-sm leading-relaxed text-slate-600 font-bold text-center">7. TESTIMONIOS</h3>
                <p className="text-sm leading-relaxed text-slate-600">Diseñar 3 testimonios ficticios realistas. Perfiles:</p>
                <ul className="list-disc list-inside text-sm leading-relaxed text-slate-600">
                    <li>Persona con hipoacusia.</li>
                    <li>Persona sorda oralizada.</li>
                    <li>Estudiante universitario.</li> 
                </ul>  
            <h3 className="text-sm leading-relaxed text-slate-600 font-bold text-center">8. CONTACTO</h3>
                <p className="text-sm leading-relaxed text-slate-600">Formulario únicamente visual.</p>
                <p className="text-sm leading-relaxed text-slate-600 font-bold">Campos:</p>
                <ul className="list-disc list-inside text-sm leading-relaxed text-slate-600">
                    <li>Nombre.</li>
                    <li>Correo electrónico.</li>
                    <li>Mensaje.</li> 
                </ul> 
                <p className="text-sm leading-relaxed text-slate-600 font-bold">Botón:</p>    
                <p className="text-sm leading-relaxed text-slate-600">Enviar consulta</p>  
                <p className="text-sm leading-relaxed text-slate-600 font-bold">No implementar backend</p>     
            <h3 className="text-sm leading-relaxed text-slate-600 font-bold text-center">9. FOOTER</h3>
                <p className="text-sm leading-relaxed text-slate-600">Incluir:</p>
                <ul className="list-disc list-inside text-sm leading-relaxed text-slate-600">
                    <li>Logo</li>
                    <li>Nombre del producto</li>
                    <li>Enlaces rápidos</li> 
                    <li>Redes sociales</li>
                </ul>
                <p className="text-sm leading-relaxed text-slate-600">Redes:</p>
                <ul className="list-disc list-inside text-sm leading-relaxed text-slate-600">
                    <li>Instagram</li>
                    <li>Facebook</li>
                    <li>LinkedIn</li> 
                    <li>YouTube</li>
                </ul>  
                <p className="text-sm leading-relaxed text-slate-600">Agregar texto legal.</p>
          <h2 className="border-t border-slate-200 pt-3 font-bold text-center">REQUISITOS TÉCNICOS</h2>
            <p className="text-sm leading-relaxed text-slate-600"><span className="font-bold">Generar:</span></p>
            <p className="text-sm leading-relaxed text-slate-600 font-bold">Personalidad</p>
            <ul className="list-disc list-inside text-sm leading-relaxed text-slate-600">
                <li>Estructura completa de carpetas.</li>
                <li>Componentes desacoplados.</li>
                <li>TypeScript estricto.</li>
                <li>TailwindCSS.</li>
                <li>Metadata SEO.</li>
                <li>Responsive Design.</li>
                <li>Accesibilidad WCAG.</li>
                <li>Optimización Lighthouse.</li>
                <li>Preparación para PWA.</li>
                <li>Uso correcto de Server Components y Client Components.</li>
                <li>Código limpio siguiendo principios SOLID.</li>
                <li>Comentarios únicamente cuando aporten valor.</li>
                <li>Convenciones de nomenclatura consistentes.</li>
                <li>Sin dependencias innecesarias.</li>
                <li>README.md</li>
            </ul>
        <h2 className="border-t border-slate-200 pt-3 font-bold text-center">CONDICIONES DE PARADA</h2>
            <p className="text-sm leading-relaxed text-slate-600"><span className="font-bold">Finaliza únicamente cuando hayas generado:</span></p>
            <ul className="list-disc list-inside text-sm leading-relaxed text-slate-600">
                <li>1.	Arquitectura completa del proyecto.</li>
                <li>2.	Árbol de carpetas.</li>
                <li>3.	Todos los componentes necesarios.</li>
                <li>4.	Contenido completo de cada sección.</li>
                <li>5.	Diseño visual detallado.</li>
                <li>6.	Código listo para producción.</li>
                <li>7.	Estrategia de accesibilidad.</li>
                <li>8.	Estrategia SEO.</li>
                <li>9.	Configuración inicial PWA.</li>
                <li>10.	Recomendaciones finales de despliegue.</li>
            </ul>
            <p className="text-sm text-center leading-relaxed text-slate-600"><span className="font-bold">No omitas ninguna sección ni simplifiques la implementación.</span></p>
        
        </section>
      </main>
    </div>
  );
}