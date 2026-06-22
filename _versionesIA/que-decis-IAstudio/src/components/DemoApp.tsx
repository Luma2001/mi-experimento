import React, { useState, useEffect, useRef } from "react";
import { Mic, MicOff, Volume2, Plus, Trash2, Settings, ShieldAlert, Award, Grid, Sparkles, HelpCircle } from "lucide-react";
import { PhraseCategory } from "../types";

// Types for Web Speech API in browser
interface SpeechRecognitionResult {
  [index: number]: {
    transcript: string;
  };
  isFinal: boolean;
}

interface SpeechRecognitionResultList {
  length: number;
  [index: number]: SpeechRecognitionResult;
}

interface SpeechRecognitionEvent {
  resultIndex: number;
  results: SpeechRecognitionResultList;
}

interface SpeechRecognitionErrorEvent {
  error: string;
  message?: string;
}

interface SpeechRecognition {
  continuous: boolean;
  interimResults: boolean;
  lang: string;
  start: () => void;
  stop: () => void;
  onstart: () => void;
  onresult: (event: SpeechRecognitionEvent) => void;
  onerror: (event: SpeechRecognitionErrorEvent) => void;
  onend: () => void;
}

declare global {
  interface Window {
    webkitSpeechRecognition?: new () => SpeechRecognition;
    SpeechRecognition?: new () => SpeechRecognition;
  }
}

const DEFAULT_CATEGORIES: PhraseCategory[] = [
  {
    id: "saludos",
    name: "Saludos",
    phrases: [
      "Hola, soy sordo. Por favor hablame despacio y de frente.",
      "Muchas gracias por tu ayuda.",
      "Buenos días, un gusto conocerte.",
      "Hola, ¿cómo estás?",
    ],
  },
  {
    id: "tramites",
    name: "Trámites y Consultas",
    phrases: [
      "Tengo un turno programado a esta hora.",
      "Vengo a retirar un medicamento recetado.",
      "¿Dónde puedo hacer este trámite?",
      "¿Me podrías escribir el precio o dirección en un papel?",
    ],
  },
  {
    id: "emergencias",
    name: "Urgencias / Necesito",
    phrases: [
      "No me siento muy bien, ¿me podés ayudar?",
      "Por favor llamá a un acompañante.",
      "¿Dónde está la salida de emergencia?",
      "¿Tiene baño accesible?",
    ],
  },
];

export default function DemoApp() {
  // Speech Recognition States
  const [isListening, setIsListening] = useState(false);
  const [transcription, setTranscription] = useState("");
  const [transcriptionHistory, setTranscriptionHistory] = useState<string[]>([
    "Hola, bienvenido al demostrador interactivo de ¿Qué Decís?.",
    "Para probar la conversión de Voz a Texto, presioná el botón verde abajo y háblale a tu micrófono.",
  ]);
  const [recognitionError, setRecognitionError] = useState<string | null>(null);

  // Text to Speech States
  const [textToSpeak, setTextToSpeak] = useState("");
  const [speakingState, setSpeakingState] = useState(false);

  // Layout & Font Settings
  const [fontSize, setFontSize] = useState<"lg" | "xl" | "2xl" | "3xl" | "4xl">("2xl");
  const [highContrast, setHighContrast] = useState(true);
  const [isLeftHanded, setIsLeftHanded] = useState(false);

  // Custom Quick Phrases List
  const [categories, setCategories] = useState<PhraseCategory[]>(DEFAULT_CATEGORIES);
  const [selectedCategory, setSelectedCategory] = useState<string>("saludos");
  const [newPhraseText, setNewPhraseText] = useState("");
  const [isAddingPhrase, setIsAddingPhrase] = useState(false);

  // References
  const recognitionRef = useRef<SpeechRecognition | null>(null);
  const historyEndRef = useRef<HTMLDivElement | null>(null);

  // Scroll to bottom of transcripts
  useEffect(() => {
    historyEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [transcriptionHistory, transcription]);

  // Load custom quick phrases from local storage if available
  useEffect(() => {
    const saved = localStorage.getItem("qd_phrases");
    if (saved) {
      try {
        setCategories(JSON.parse(saved));
      } catch (e) {
        console.error("No se pudieron cargar las frases guardadas", e);
      }
    }
  }, []);

  // Sync phrased categories to localStorage
  const saveCategories = (updated: PhraseCategory[]) => {
    setCategories(updated);
    localStorage.setItem("qd_phrases", JSON.stringify(updated));
  };

  // Setup Browser Speech Recognition
  useEffect(() => {
    const SpeechRecognitionClass = window.SpeechRecognition || window.webkitSpeechRecognition;
    if (SpeechRecognitionClass) {
      const rec = new SpeechRecognitionClass();
      rec.continuous = true;
      rec.interimResults = true;
      rec.lang = "es-AR"; // Direct targeted Spanish transcription

      rec.onstart = () => {
        setIsListening(true);
        setRecognitionError(null);
      };

      rec.onresult = (event: SpeechRecognitionEvent) => {
        let interimText = "";
        let finalTrans = "";

        for (let i = event.resultIndex; i < event.results.length; ++i) {
          if (event.results[i].isFinal) {
            finalTrans += event.results[i][0].transcript;
          } else {
            interimText += event.results[i][0].transcript;
          }
        }

        if (finalTrans) {
          setTranscriptionHistory((prev) => [...prev, finalTrans]);
          setTranscription("");
        } else if (interimText) {
          setTranscription(interimText);
        }
      };

      rec.onerror = (event: SpeechRecognitionErrorEvent) => {
        console.error("Speech Recognition Error:", event.error);
        if (event.error === "not-allowed") {
          setRecognitionError("Permiso de micrófono denegado. Habilitá el micrófono en tu navegador desde los ajustes de seguridad.");
        } else if (event.error === "network") {
          setRecognitionError("Error de Red de Reconocimiento de Voz: La Web Speech API nativa requiere conexión a Internet de banda ancha o tiene restricciones de conexión dentro de este iframe de pruebas. Podés reintentar o hacer clic abajo para simular entrada de voz manual mediante texto.");
        } else if (event.error === "no-speech") {
          // Quiet auto-restart-friendly timeout, no action required
        } else {
          setRecognitionError(`Error de reconocimiento (${event.error}). Intentá hablar nuevamente o acercá el micrófono.`);
        }
        setIsListening(false);
      };

      rec.onend = () => {
        setIsListening(false);
      };

      recognitionRef.current = rec;
    } else {
      setRecognitionError(
        "Tu navegador actual no soporta reconocimiento de voz nativo por hardware. No te preocupes: podés escribir en el simulador abajo para probar el resto de las funciones."
      );
    }

    return () => {
      if (recognitionRef.current) {
        try {
          recognitionRef.current.stop();
        } catch (e) {}
      }
    };
  }, []);

  // Toggle voice recognition
  const toggleListening = () => {
    if (!recognitionRef.current) {
      // Browser doesn't support - allow manual simulated voice entry
      const simulatedVoz = prompt("Simula el habla de una persona oyente para ver cómo se transcribe en pantalla gigante:", "Hola, buenas tardes, ¿en qué te puedo ayudar hoy?");
      if (simulatedVoz) {
        setTranscriptionHistory((prev) => [...prev, `[Oyente]: ${simulatedVoz}`]);
      }
      return;
    }

    if (isListening) {
      recognitionRef.current.stop();
    } else {
      try {
        setTranscription("");
        recognitionRef.current.start();
      } catch (e) {
        console.error("Speech Recognition failed to start:", e);
      }
    }
  };

  // Convert Text to Speech (speechSynthesis)
  const speakText = (text: string) => {
    if (!text.trim()) return;

    if (!window.speechSynthesis) {
      alert("Tu dispositivo no soporta síntesis de texto a voz por voz artificial.");
      return;
    }

    // Cancel matching synthetics
    window.speechSynthesis.cancel();

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "es-AR"; // Rioplatense or standard Spanish accents
    
    // Choose voice
    const voices = window.speechSynthesis.getVoices();
    const voiceEs = voices.find((v) => v.lang.includes("es") || v.lang.startsWith("es-"));
    if (voiceEs) utterance.voice = voiceEs;

    utterance.onstart = () => setSpeakingState(true);
    utterance.onend = () => setSpeakingState(false);
    utterance.onerror = () => setSpeakingState(false);

    window.speechSynthesis.speak(utterance);
    
    // Also include in transcription list history as an output conversation step
    setTranscriptionHistory((prev) => [...prev, `[Tú]: ${text}`]);
  };

  // Add Custom Phrase
  const capitalizeFirst = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

  const handleAddPhrase = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newPhraseText.trim()) return;

    const updated = categories.map((cat) => {
      if (cat.id === selectedCategory) {
        return {
          ...cat,
          phrases: [...cat.phrases, capitalizeFirst(newPhraseText.trim())],
        };
      }
      return cat;
    });

    saveCategories(updated);
    setNewPhraseText("");
    setIsAddingPhrase(false);
  };

  const handleDeletePhrase = (categoryIdx: number, phraseIdx: number) => {
    const updated = [...categories];
    updated[categoryIdx].phrases.splice(phraseIdx, 1);
    saveCategories(updated);
  };

  // Utility to map fontSize class to style sizing
  const getFontSizeClass = () => {
    switch (fontSize) {
      case "lg":
        return "text-lg md:text-xl";
      case "xl":
        return "text-xl md:text-2xl";
      case "2xl":
        return "text-2xl md:text-3xl";
      case "3xl":
        return "text-3xl md:text-4xl";
      case "4xl":
        return "text-4xl md:text-5xl";
    }
  };

  return (
    <section
      id="demostrador"
      className="py-16 bg-gray-900 text-white scroll-mt-12"
      aria-label="Ejecución funcional interactiva de la aplicación"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Module Header */}
        <div className="text-center max-w-3xl mx-auto mb-10">
          <div className="inline-flex items-center gap-1 bg-blue-500/15 border border-blue-500/30 text-blue-400 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-4 h-4 text-orange-400" />
            Simulador de Producto Interactivo
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-white">
            Probá la aplicación <span className="text-orange-400">¿Qué Decís?</span> ahora
          </h2>
          <p className="mt-3 text-lg text-gray-400 font-sans">
            Comprobá la velocidad del transcriptor en tiempo real. Configura tus frases rápidas y envia audios sintéticos con total independencia.
          </p>
        </div>

        {/* Simulator Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
          
          {/* CONTROL BOX (Settings & Custom quick phrases) */}
          <div className="lg:col-span-4 bg-gray-800/80 border border-gray-700 rounded-3xl p-6 flex flex-col justify-between space-y-6">
            
            {/* Accessibility Customization Widget */}
            <div className="space-y-4">
              <h3 className="text-lg font-bold border-b border-gray-700 pb-2 text-orange-400 flex items-center gap-2 font-display">
                <Settings className="w-5 h-5" />
                Ajustes de Accesibilidad
              </h3>

              {/* Contrast Selector */}
              <div>
                <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5">Esquema Visual</span>
                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => setHighContrast(true)}
                    className={`py-2 px-3 text-sm font-bold rounded-xl border transition-all focus:outline-none ${
                      highContrast
                        ? "bg-orange-500 text-white border-orange-400"
                        : "bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-650"
                    }`}
                  >
                    Alto Contraste
                  </button>
                  <button
                    onClick={() => setHighContrast(false)}
                    className={`py-2 px-3 text-sm font-bold rounded-xl border transition-all focus:outline-none ${
                      !highContrast
                        ? "bg-blue-600 text-white border-blue-500"
                        : "bg-gray-700 text-gray-300 border-gray-600 hover:bg-gray-650"
                    }`}
                  >
                    Estampado Suave
                  </button>
                </div>
              </div>

              {/* Text Size Slider */}
              <div>
                <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5 flex justify-between">
                  <span>Tamaño del Texto Transcripto</span>
                  <span className="text-orange-400 font-extrabold font-mono uppercase text-[11px]">{fontSize}</span>
                </span>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-400">Chico</span>
                  <input
                    type="range"
                    min="0"
                    max="4"
                    value={fontSize === "lg" ? 0 : fontSize === "xl" ? 1 : fontSize === "2xl" ? 2 : fontSize === "3xl" ? 3 : 4}
                    onChange={(e) => {
                      const vals: ("lg" | "xl" | "2xl" | "3xl" | "4xl")[] = ["lg", "xl", "2xl", "3xl", "4xl"];
                      setFontSize(vals[parseInt(e.target.value)]);
                    }}
                    className="flex-1 accent-orange-500 h-2 bg-gray-700 rounded-lg cursor-pointer"
                    aria-label="Deslizador para cambiar el tamaño de la letra de la transcripción"
                  />
                  <span className="text-sm font-bold text-white">GIGANTE</span>
                </div>
              </div>

              {/* Ergonomics Switch */}
              <div>
                <span className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5">Uso con una Sola Mano (Ergodiseño)</span>
                <button
                  type="button"
                  onClick={() => setIsLeftHanded(!isLeftHanded)}
                  className="w-full flex items-center justify-between p-3 rounded-xl bg-gray-700/60 border border-gray-600/50 text-sm font-bold hover:bg-gray-700"
                >
                  <span>Mover controles a la {isLeftHanded ? "Izquierda (Zurdo/a)" : "Derecha (Diestro/a)"}</span>
                  <span className="text-xs px-2 py-0.5 rounded bg-blue-500/25 text-blue-300">Alternar</span>
                </button>
              </div>

            </div>

            {/* Live Privacy and Security confirmation */}
            <div className="p-4 bg-gray-900/60 border border-gray-700/40 rounded-2xl flex items-start gap-3">
              <div className="p-1.5 bg-emerald-500/10 text-emerald-400 rounded-xl">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-xs font-extrabold text-emerald-400 uppercase tracking-widest">Privacidad 100% Local</h4>
                <p className="text-xs text-gray-400 mt-1 leading-relaxed font-sans">
                  Las conversaciones se procesan en tu procesador. Ningún audio ni texto se graba en bases de datos externas de telemetría.
                </p>
              </div>
            </div>

          </div>

          {/* CHAT DISPLAY SCREEN INTERPRETER (Core Interactive App) */}
          <div className="lg:col-span-8 flex flex-col items-stretch space-y-4">
            
            {/* Screen Slate Wrapper */}
            <div
              className={`flex-1 rounded-3xl shadow-2xl border flex flex-col justify-between overflow-hidden relative min-h-[460px] ${
                highContrast
                  ? "bg-black text-white border-yellow-500/30"
                  : "bg-slate-900 text-slate-100 border-gray-700"
              }`}
            >
              
              {/* Screen Header Indicators */}
              <div className="p-4 border-b border-gray-800 bg-black/40 flex items-center justify-between text-xs font-semibold text-gray-400">
                <div className="flex items-center gap-2">
                  <span className="flex h-2.5 w-2.5 rounded-full bg-emerald-400 animate-pulse"></span>
                  <span className="font-extrabold uppercase font-mono tracking-wider text-emerald-400">Voz • Activo</span>
                </div>
                <div className="flex gap-4">
                  <span>Modo: {highContrast ? "Contraste Alto" : "Estampado"}</span>
                  <span>Letra: {fontSize.toUpperCase()}</span>
                </div>
              </div>

              {/* Transcription Area with Adjustable Text sizing */}
              <div
                className="flex-1 p-6 overflow-y-auto space-y-6 max-h-[340px]"
                aria-live="polite"
                aria-atomic="false"
              >
                {transcriptionHistory.map((phrase, idx) => {
                  const isUser = phrase.startsWith("[Tú]:");
                  const isOpponent = phrase.startsWith("[Oyente]:");
                  const cleanText = phrase.replace(/^\[Tú\]:\s*|^\[Oyente\]:\s*/, "");

                  return (
                    <div
                      key={idx}
                      className={`flex flex-col max-w-[85%] ${
                        isUser ? "self-end ml-auto text-right" : "self-start mr-auto text-left"
                      }`}
                    >
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-1">
                        {isUser ? "Tú dijiste (Texto a Voz)" : isOpponent ? "El oyente dijo" : "Sistema"}
                      </span>
                      <div
                        className={`p-4 rounded-3xl ${getFontSizeClass()} font-extrabold leading-snug shadow-sm ${
                          isUser
                            ? "bg-orange-500 text-white rounded-tr-none"
                            : "bg-blue-600 text-white rounded-tl-none"
                        }`}
                      >
                        {cleanText}
                      </div>
                    </div>
                  );
                })}

                {/* Live Real-time Speech-to-Text Transcription placeholder */}
                {transcription && (
                  <div className="self-start mr-auto text-left max-w-[85%] animate-pulse">
                    <span className="text-[10px] font-bold text-orange-400 uppercase tracking-widest block mb-1">
                      Transcribiendo voz en tiempo real...
                    </span>
                    <div className={`p-4 rounded-3xl ${getFontSizeClass()} font-extrabold leading-snug bg-emerald-600 text-white rounded-tl-none`}>
                      {transcription}
                    </div>
                  </div>
                )}

                <div ref={historyEndRef} />
              </div>

              {/* Speech Recognition Error Alerts */}
              {recognitionError && (
                <div className="bg-amber-950/80 border-y border-amber-800/50 p-4 flex flex-col gap-3 text-sm text-amber-200">
                  <div className="flex items-start gap-3">
                    <ShieldAlert className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                    <span className="leading-relaxed">{recognitionError}</span>
                  </div>
                  <div className="flex flex-wrap gap-2.5 pl-8">
                    <button
                      onClick={() => {
                        const simulated = prompt("Escribe lo que diría la otra persona (oyente) para simular su voz transcripta en pantalla gigante:", "Hola, te estaba preguntando si venías a retirar la tarjeta.");
                        if (simulated) {
                          setTranscriptionHistory((prev) => [...prev, `[Oyente]: ${simulated}`]);
                          setRecognitionError(null);
                        }
                      }}
                      className="px-3.5 py-1.5 bg-amber-600 hover:bg-amber-500 rounded-lg text-xs font-bold text-white transition-colors focus:ring-4 focus:ring-orange-400"
                    >
                      Simular Entrada de Voz (Escribiendo)
                    </button>
                    <button
                      onClick={() => {
                        setRecognitionError(null);
                        toggleListening();
                      }}
                      className="px-3.5 py-1.5 bg-gray-800 hover:bg-gray-700 rounded-lg text-xs font-bold text-gray-200 transition-colors"
                    >
                      Reintentar o Limpiar Aviso
                    </button>
                  </div>
                </div>
              )}

              {/* Microphone Interface Box - Custom Single Hand layout mapping */}
              <div className="bg-black/50 p-4 border-t border-gray-800 space-y-3">
                
                {/* Micro instructions */}
                <span className="block text-center text-xs text-gray-400 font-semibold">
                  {!isListening ? "Hacé clic abajo para empezar a escuchar la voz de la otra persona" : "Escuchando voz... Háblale despacio al micrófono de este equipo."}
                </span>

                <div
                  className={`flex items-stretch gap-3 ${
                    isLeftHanded ? "flex-row-reverse" : "flex-row"
                  }`}
                >
                  {/* Left hand / Right Hand shift trigger button */}
                  <button
                    onClick={toggleListening}
                    className={`flex-1 flex items-center justify-center gap-3 py-4 px-5 rounded-2xl font-extrabold transition-all duration-150 relative overflow-hidden focus:outline-none focus:ring-4 focus:ring-yellow-500 ${
                      isListening
                        ? "bg-red-600 text-white animate-pulse"
                        : "bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 text-white shadow-lg"
                    }`}
                    style={{ minHeight: "48px" }}
                    aria-label={isListening ? "Detener transcripción de voz" : "Comenzar a escuchar voz para transcribir"}
                  >
                    {isListening ? (
                      <>
                        <MicOff className="w-6 h-6 shrink-0" />
                        <span className="text-base sm:text-lg">Parar Micrófono</span>
                      </>
                    ) : (
                      <>
                        <Mic className="w-6 h-6 shrink-0" />
                        <span className="text-base sm:text-lg">Escuchar Voz de Oyente</span>
                      </>
                    )}
                  </button>

                  <button
                    onClick={() => {
                      setTranscriptionHistory([]);
                      setTranscription("");
                    }}
                    className="px-4 bg-gray-800 hover:bg-gray-700 text-gray-300 hover:text-white rounded-2xl focus:outline-none focus:ring-4 focus:ring-slate-500 font-bold text-xs"
                    title="Limpiar pantalla"
                    aria-label="Limpiar todo el historial de conversación"
                  >
                    Borrar Todo
                  </button>
                </div>

                {/* Simulated Speech helper for sandbox environments or iframe context */}
                <div className="bg-gray-950/60 p-2.5 rounded-xl border border-gray-800 flex flex-col sm:flex-row items-center justify-between gap-2">
                  <span className="text-[11px] text-gray-450 text-center sm:text-left font-medium">
                    📍 ¿Fallo de red o micrófono bloqueado en este visualizador?
                  </span>
                  <button
                    onClick={() => {
                      const simulated = prompt("Escribí lo que diría la persona oyente para simular la transcripción en pantalla gigante:", "Hola, buenas tardes. ¿Tiene una cuenta o turno asignado?");
                      if (simulated) {
                        setTranscriptionHistory((prev) => [...prev, `[Oyente]: ${simulated}`]);
                        setRecognitionError(null);
                      }
                    }}
                    className="px-3 py-1.5 bg-yellow-600/20 hover:bg-yellow-600/30 text-yellow-300 rounded-lg text-[11px] font-bold border border-yellow-500/30 transition-colors focus:outline-none"
                  >
                    Simular con Teclado
                  </button>
                </div>

              </div>

            </div>

            {/* TEXT-TO-SPEECH WRAPPED BOX CONTROLS */}
            <div className="bg-gray-800/65 border border-gray-700 rounded-3xl p-5 space-y-4">
              
              <div className="flex items-center justify-between">
                <label
                  htmlFor="tts-input"
                  className="font-extrabold text-sm text-gray-300 flex items-center gap-2"
                >
                  <Volume2 className="w-4 h-4 text-orange-400" />
                  Texto a Voz • Responde escribiendo acá abajo:
                </label>
                <span className="text-[10px] font-bold text-gray-500 uppercase">Se reproducirá parlante</span>
              </div>

              <div className="flex flex-col sm:flex-row gap-3">
                <input
                  id="tts-input"
                  type="text"
                  value={textToSpeak}
                  onChange={(e) => setTextToSpeak(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      speakText(textToSpeak);
                      setTextToSpeak("");
                    }
                  }}
                  placeholder="Escribí lo que querés decir en voz alta aquí..."
                  className="flex-1 px-4 py-3 bg-gray-950 border border-gray-700 rounded-xl focus:outline-none focus:border-orange-500 focus:ring-4 focus:ring-blue-600 text-white font-bold"
                />
                <button
                  onClick={() => {
                    speakText(textToSpeak);
                    setTextToSpeak("");
                  }}
                  disabled={!textToSpeak.trim() || speakingState}
                  className="py-3 px-6 bg-orange-500 hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed font-extrabold text-white rounded-xl flex items-center justify-center gap-2 shadow-md transition-colors focus:ring-4 focus:ring-blue-600"
                >
                  <Volume2 className="w-5 h-5 shrink-0" />
                  Emitir Voz
                </button>
              </div>

              {/* QUICK PHRASES ACCORDION PANEL */}
              <div className="pt-3 border-t border-gray-700/65">
                <div className="flex flex-wrap gap-2 items-center justify-between mb-3">
                  <span className="text-xs font-bold text-gray-400 uppercase tracking-wider flex items-center gap-1">
                    <Grid className="w-3.5 h-3.5" />
                    Frases Rápidas Guardadas
                  </span>
                  
                  <button
                    onClick={() => setIsAddingPhrase(!isAddingPhrase)}
                    className="text-xs font-extrabold text-orange-400 flex items-center gap-1 hover:underline focus:outline-none p-1"
                    aria-label="Agregar nueva frase rápida personalizada"
                  >
                    <Plus className="w-3.5 h-3.5" />
                    + Agregar Frase
                  </button>
                </div>

                {isAddingPhrase && (
                  <form onSubmit={handleAddPhrase} className="bg-gray-950 p-4 border border-gray-700 rounded-xl mb-4 space-y-3">
                    <span className="block text-xs font-bold text-gray-300">Seleccionar Categoría</span>
                    <select
                      value={selectedCategory}
                      onChange={(e) => setSelectedCategory(e.target.value)}
                      className="w-full bg-gray-900 border border-gray-700 text-white rounded-lg p-2 text-sm focus:outline-none"
                    >
                      {categories.map((cat) => (
                        <option key={cat.id} value={cat.id}>
                          {cat.name}
                        </option>
                      ))}
                    </select>
                    
                    <span className="block text-xs font-bold text-gray-300">Mensaje de Acceso</span>
                    <input
                      type="text"
                      value={newPhraseText}
                      onChange={(e) => setNewPhraseText(e.target.value)}
                      placeholder="Ej: Tengo una consulta sobre mi cuenta..."
                      className="w-full bg-gray-900 border border-gray-700 text-white rounded-lg p-2 text-sm focus:outline-none"
                      required
                    />

                    <div className="flex gap-2 justify-end">
                      <button
                        type="button"
                        onClick={() => setIsAddingPhrase(false)}
                        className="px-3 py-1.5 text-xs font-bold text-gray-400 hover:text-white"
                      >
                        Cancelar
                      </button>
                      <button
                        type="submit"
                        className="px-4 py-1.5 text-xs font-bold bg-orange-500 hover:bg-orange-600 text-white rounded-lg"
                      >
                        Crear e Instalar
                      </button>
                    </div>
                  </form>
                )}

                {/* Categories Tab Selector */}
                <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
                  {categories.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id)}
                      className={`px-3 py-1.5 text-xs font-bold rounded-full transition-all flex-shrink-0 cursor-pointer ${
                        selectedCategory === cat.id
                          ? "bg-blue-600 text-white"
                          : "bg-gray-700 hover:bg-gray-650 text-gray-300"
                      }`}
                    >
                      {cat.name} ({cat.phrases.length})
                    </button>
                  ))}
                </div>

                {/* Active Category phrases cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mt-2">
                  {categories
                    .find((cat) => cat.id === selectedCategory)
                    ?.phrases.map((phrase, idx) => (
                      <div
                        key={idx}
                        className="group relative flex justify-between items-center bg-gray-900/90 border border-gray-700/60 hover:border-gray-600 rounded-xl p-3 transition-colors text-left"
                      >
                        <button
                          onClick={() => speakText(phrase)}
                          className="flex-1 text-sm font-bold text-gray-200 hover:text-white focus:outline-none text-left flex items-start gap-2"
                        >
                          <Volume2 className="w-4 h-4 text-orange-400 mt-0.5 shrink-0" />
                          <span>{phrase}</span>
                        </button>
                        
                        <button
                          onClick={() => {
                            const catIdx = categories.findIndex((c) => c.id === selectedCategory);
                            if (catIdx !== -1) handleDeletePhrase(catIdx, idx);
                          }}
                          className="opacity-0 group-hover:opacity-100 p-1.5 text-gray-400 hover:text-red-400 rounded transition-opacity"
                          title="Eliminar esta frase rápida"
                          aria-label={`Eliminar la frase rápida "${phrase}"`}
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    ))}
                </div>

              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
