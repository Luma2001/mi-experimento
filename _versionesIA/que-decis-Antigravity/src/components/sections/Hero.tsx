"use client";

import React, { useState, useEffect, useRef } from "react";
import Button from "../ui/Button";

export default function Hero() {
  const [activeTab, setActiveTab] = useState<"v2t" | "t2v">("v2t");
  
  // Estados para Voz a Texto (Simulador)
  const [transcription, setTranscription] = useState("");
  const [isListening, setIsListening] = useState(false);
  const v2tTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Estados para Texto a Voz (Simulador)
  const [typedText, setTypedText] = useState("Hola, buenas tardes.");
  const [isPlayingVoice, setIsPlayingVoice] = useState(false);

  const fullDoctorText = "Hola, buenas tardes. Pasá y sentate. Hoy vamos a revisar los resultados de tu estudio médico y todo se ve muy bien.";

  // Simulador de Voz a Texto (efecto de tipeado)
  const startV2TSimulation = () => {
    if (v2tTimeoutRef.current) clearInterval(v2tTimeoutRef.current);
    setTranscription("");
    setIsListening(true);
    
    const words = fullDoctorText.split(" ");
    let currentWordIndex = 0;
    
    v2tTimeoutRef.current = setInterval(() => {
      if (currentWordIndex < words.length) {
        setTranscription((prev) => prev + (prev ? " " : "") + words[currentWordIndex]);
        currentWordIndex++;
      } else {
        setIsListening(false);
        if (v2tTimeoutRef.current) clearInterval(v2tTimeoutRef.current);
      }
    }, 350); // Velocidad de habla simulada
  };

  useEffect(() => {
    if (activeTab === "v2t") {
      startV2TSimulation();
    } else {
      if (v2tTimeoutRef.current) clearInterval(v2tTimeoutRef.current);
      setIsListening(false);
    }
    return () => {
      if (v2tTimeoutRef.current) clearInterval(v2tTimeoutRef.current);
    };
  }, [activeTab]);

  // Reproducción real de Texto a Voz usando SpeechSynthesis
  const speakText = () => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      // Detener cualquier habla anterior
      window.speechSynthesis.cancel();
      
      const utterance = new SpeechSynthesisUtterance(typedText);
      utterance.lang = "es-AR"; // Español Argentina / Neutro
      
      utterance.onstart = () => setIsPlayingVoice(true);
      utterance.onend = () => setIsPlayingVoice(false);
      utterance.onerror = () => setIsPlayingVoice(false);

      window.speechSynthesis.speak(utterance);
    } else {
      // Fallback visual si no se soporta
      setIsPlayingVoice(true);
      setTimeout(() => setIsPlayingVoice(false), 2000);
    }
  };

  const selectQuickPhrase = (phrase: string) => {
    setTypedText(phrase);
  };

  return (
    <section
      id="inicio"
      className="relative bg-gradient-to-b from-blue-50 via-white to-white pt-10 pb-20 md:pt-16 md:pb-28 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Lado Izquierdo: Información y CTAs */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 bg-blue-100/80 text-primary-blue font-sans font-bold text-sm px-4 py-1.5 rounded-full w-fit mx-auto lg:mx-0">
              <span className="flex h-2.5 w-2.5 relative">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary-blue"></span>
              </span>
              Inclusiva, accesible y local
            </div>
            
            <h1 className="font-atkinson font-bold text-4xl sm:text-5xl md:text-6xl text-text-dark leading-tight tracking-tight max-w-2xl">
              Escuchá con los ojos. <br />
              <span className="text-primary-blue">Hablá con confianza.</span>
            </h1>
            
            <p className="font-sans text-lg md:text-xl text-text-muted max-w-xl mx-auto lg:mx-0 leading-relaxed">
              La herramienta diseñada para personas con <strong>hipoacusia y sordera</strong>. Comunícate en cualquier comercio, médico o espacio público de forma fluida, privada y sin necesidad de internet.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-2">
              <Button
                variant="cta"
                size="lg"
                onClick={() => {
                  const el = document.getElementById("contacto");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                ariaLabel="Empezar a conversar ahora"
              >
                Empezar a conversar
              </Button>
              <Button
                variant="outline"
                size="lg"
                onClick={() => {
                  const el = document.getElementById("instrucciones");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
                ariaLabel="Ver instrucciones de cómo funciona"
              >
                Ver cómo funciona
              </Button>
            </div>
            
            {/* Beneficios Rápidos */}
            <div className="grid grid-cols-3 gap-2 pt-6 max-w-md mx-auto lg:mx-0 text-left border-t border-gray-100">
              <div>
                <span className="block font-atkinson font-bold text-lg text-primary-blue">100% Local</span>
                <span className="text-xs text-text-muted">No guarda conversaciones</span>
              </div>
              <div>
                <span className="block font-atkinson font-bold text-lg text-primary-teal">Sin Registro</span>
                <span className="text-xs text-text-muted">Abrís la app y ya usás</span>
              </div>
              <div>
                <span className="block font-atkinson font-bold text-lg text-cta-orange">Offline</span>
                <span className="text-xs text-text-muted">Funciona sin internet</span>
              </div>
            </div>
          </div>

          {/* Lado Derecho: Smartphone Interactivo (Simulador de Funcionalidad) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-80 sm:w-85 h-[620px] bg-gray-900 rounded-[40px] p-3 shadow-2xl border-4 border-gray-800 ring-12 ring-gray-900/5 select-none">
              {/* Parlante y Cámara del teléfono */}
              <div className="absolute top-0 left-1/2 transform -translate-x-1/2 h-5 w-32 bg-gray-900 rounded-b-2xl z-20 flex justify-center items-center gap-1.5">
                <div className="h-1.5 w-12 bg-gray-700 rounded-full" />
                <div className="h-2.5 w-2.5 bg-gray-800 rounded-full" />
              </div>
              
              {/* Pantalla del Teléfono */}
              <div className="relative w-full h-full bg-slate-50 rounded-[32px] overflow-hidden flex flex-col">
                {/* Status Bar Simulada */}
                <div className="h-8 bg-primary-blue text-white flex justify-between items-center px-6 pt-2 text-xs font-bold font-sans">
                  <span>12:00</span>
                  <div className="flex items-center gap-1.5">
                    <svg className="w-3.5 h-3.5 fill-current" viewBox="0 0 24 24">
                      <path d="M12 3c-4.97 0-9 4.03-9 9 0 2.12.74 4.07 1.97 5.61L4.35 19.4c-.39.39-.39 1.02 0 1.41.39.39 1.02.39 1.41 0l1.9-1.9C9.07 19.67 10.48 20 12 20c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 15c-3.31 0-6-2.69-6-6s2.69-6 6-6 6 2.69 6 6-2.69 6-6 6zm-1-8h2v5h-2zm0-3h2v2h-2z" />
                    </svg>
                    <span>100%</span>
                  </div>
                </div>

                {/* Header de la App */}
                <div className="bg-primary-blue text-white px-4 py-3 flex items-center justify-between shadow-sm">
                  <div className="flex items-center gap-2">
                    <div className="bg-white p-1 rounded-lg">
                      <svg className="w-5 h-5 text-primary-blue" viewBox="0 0 40 40" fill="currentColor">
                        <path d="M20 5C10.61 5 3 11.27 3 19C3 22.87 4.9 26.37 8 28.84V35L14.78 31.25C16.43 31.74 18.18 32 20 32C29.39 32 37 25.73 37 19C37 11.27 29.39 5 20 5Z" />
                      </svg>
                    </div>
                    <span className="font-atkinson font-bold text-sm tracking-tight">¿Qué Decís?</span>
                  </div>
                  <span className="text-[10px] bg-emerald-500 text-white font-bold px-2 py-0.5 rounded-full">
                    Activa (Local)
                  </span>
                </div>

                {/* Tabs del Simulador */}
                <div className="flex border-b border-gray-200 bg-white">
                  <button
                    onClick={() => setActiveTab("v2t")}
                    className={`flex-1 py-2.5 text-center text-xs font-bold font-sans transition-colors border-b-2 focus:outline-none ${
                      activeTab === "v2t"
                        ? "border-primary-blue text-primary-blue bg-blue-50/30"
                        : "border-transparent text-text-muted hover:text-text-dark"
                    }`}
                  >
                    Voz → Texto
                  </button>
                  <button
                    onClick={() => setActiveTab("t2v")}
                    className={`flex-1 py-2.5 text-center text-xs font-bold font-sans transition-colors border-b-2 focus:outline-none ${
                      activeTab === "t2v"
                        ? "border-primary-blue text-primary-blue bg-blue-50/30"
                        : "border-transparent text-text-muted hover:text-text-dark"
                    }`}
                  >
                    Texto → Voz
                  </button>
                </div>

                {/* Contenido de la Pantalla del Teléfono */}
                <div className="flex-1 p-4 flex flex-col justify-between overflow-y-auto bg-slate-50">
                  
                  {activeTab === "v2t" ? (
                    /* Pestaña: Voz a Texto */
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="bg-white border border-gray-100 rounded-2xl p-4 shadow-sm flex-1 flex flex-col justify-start">
                        <span className="text-[10px] text-primary-teal font-bold uppercase tracking-wider mb-2 block">
                          Persona oyente habla:
                        </span>
                        <div className="font-atkinson text-text-dark text-xl font-bold leading-snug flex-1">
                          {transcription || <span className="text-gray-300 italic font-normal">Presioná escuchar para iniciar la simulación...</span>}
                          {isListening && (
                            <span className="inline-block w-1.5 h-5 ml-1 bg-primary-blue animate-pulse" />
                          )}
                        </div>
                      </div>
                      
                      {/* Control del simulador */}
                      <div className="mt-4 flex flex-col items-center gap-2">
                        {isListening ? (
                          <div className="flex items-center gap-2 py-2 px-4 bg-red-50 text-red-600 rounded-full text-xs font-bold border border-red-100 animate-pulse">
                            <span className="w-2.5 h-2.5 bg-red-600 rounded-full" />
                            Capturando audio...
                          </div>
                        ) : (
                          <button
                            onClick={startV2TSimulation}
                            className="bg-primary-blue text-white rounded-full p-3 shadow-md hover:bg-blue-700 transition-colors focus:outline-none w-14 h-14 flex items-center justify-center"
                            aria-label="Iniciar simulación de Voz a Texto"
                          >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 18.5a6.5 6.5 0 01-6.5-6.5h1m11 0h1M12 3a4 4 0 00-4 4v5a4 4 0 008 0V7a4 4 0 00-4-4z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M19 12a7 7 0 01-14 0" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M12 19v3M8 22h8" />
                            </svg>
                          </button>
                        )}
                        <span className="text-[10px] text-text-muted text-center max-w-xs">
                          {isListening ? "Hablándole al micrófono" : "Tocá el micrófono para simular la transcripción médica"}
                        </span>
                      </div>
                    </div>
                  ) : (
                    /* Pestaña: Texto a Voz */
                    <div className="flex-1 flex flex-col justify-between">
                      <div className="space-y-3">
                        <label htmlFor="sim-input" className="text-[10px] text-primary-blue font-bold uppercase tracking-wider block">
                          Escribí tu respuesta:
                        </label>
                        <input
                          id="sim-input"
                          type="text"
                          value={typedText}
                          onChange={(e) => setTypedText(e.target.value)}
                          className="w-full bg-white border border-gray-200 rounded-xl px-3 py-2 text-sm text-text-dark font-sans font-bold focus:outline-none focus:border-primary-blue"
                          placeholder="Escribí aquí..."
                        />
                        
                        {/* Frases rápidas preestablecidas */}
                        <div>
                          <span className="text-[9px] text-text-muted font-bold block mb-1">Frases rápidas:</span>
                          <div className="flex flex-wrap gap-1.5">
                            {["Hola, gracias.", "Necesito ayuda.", "¿Cuánto cuesta?", "Entendido."].map((phrase) => (
                              <button
                                key={phrase}
                                onClick={() => selectQuickPhrase(phrase)}
                                className="bg-white border border-gray-200 hover:border-primary-blue text-text-dark text-[10px] font-bold py-1 px-2.5 rounded-lg transition-colors focus:outline-none"
                              >
                                {phrase}
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>

                      {/* Botón de reproducción */}
                      <div className="mt-4 flex flex-col items-center gap-2">
                        {isPlayingVoice ? (
                          <div className="flex flex-col items-center gap-1.5">
                            {/* Animación de onda de sonido simple */}
                            <div className="flex items-center gap-1 h-6">
                              <span className="w-1 bg-primary-teal rounded-full h-3 animate-bounce" />
                              <span className="w-1 bg-primary-teal rounded-full h-5 animate-bounce [animation-delay:0.15s]" />
                              <span className="w-1 bg-primary-teal rounded-full h-2 animate-bounce [animation-delay:0.3s]" />
                              <span className="w-1 bg-primary-teal rounded-full h-5 animate-bounce [animation-delay:0.45s]" />
                              <span className="w-1 bg-primary-teal rounded-full h-3 animate-bounce [animation-delay:0.6s]" />
                            </div>
                            <span className="text-[10px] text-primary-teal font-bold uppercase tracking-wider">
                              Reproduciendo voz...
                            </span>
                          </div>
                        ) : (
                          <button
                            onClick={speakText}
                            className="bg-primary-teal text-white rounded-full p-3 shadow-md hover:bg-teal-700 transition-colors focus:outline-none w-14 h-14 flex items-center justify-center"
                            aria-label="Reproducir mensaje escrito"
                          >
                            <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15.536 8.464a5 5 0 010 7.072M18.364 5.636a9 9 0 010 12.728M12 18.75V5.25L7.75 9.5H4.5v5h3.25L12 18.75z" />
                            </svg>
                          </button>
                        )}
                        <span className="text-[10px] text-text-muted text-center max-w-xs">
                          Tocá el megáfono para hablar con voz sintética real en tu navegador
                        </span>
                      </div>
                    </div>
                  )}

                  {/* Botón de barra inferior del dispositivo */}
                  <div className="mt-2 pt-2 border-t border-gray-100 flex justify-center">
                    <div className="w-20 h-1 bg-gray-300 rounded-full" />
                  </div>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
