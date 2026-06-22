import React, { useState } from "react";
import { Send, CheckCircle2, Mail, Users, MessageSquareCode } from "lucide-react";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !email || !message) return;

    // Simulate local success submission in client
    setSubmitted(true);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setMessage("");
    setSubmitted(false);
  };

  return (
    <section
      id="contacto"
      className="py-16 md:py-24 bg-gray-50 scroll-mt-12 text-gray-900"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-stretch">
          
          {/* Information Side Block */}
          <div className="lg:col-span-5 flex flex-col justify-between space-y-8">
            <div className="space-y-4 text-left">
              <span className="text-sm font-extrabold text-blue-600 uppercase tracking-wider block">
                Contacto e Incidencia
              </span>
              <h2
                id="contact-heading"
                className="text-3xl sm:text-4xl font-extrabold tracking-tight font-display text-gray-950"
              >
                ¿Querés sumarte o dejarnos tu <span className="text-blue-600">sugerencia</span>?
              </h2>
              <p className="text-base text-gray-655 leading-relaxed font-sans">
                ¿Qué Decís? es un proyecto sin fines de lucro, impulsado por el deseo de hacer la comunicación universal y libre de barreras. Si sos profesional fonoaudiólogo/a, tecnólogo/a, programador/a o simplemente tenés una sugerencia valiosa, dejanos un mensaje.
              </p>
            </div>

            {/* Quick Informative Badges */}
            <div className="space-y-4">
              <div className="flex gap-3 items-start p-4 bg-white border border-gray-150 rounded-2xl">
                <Mail className="w-5 h-5 text-blue-600 mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-sm font-bold text-gray-900">Correo Directo</h3>
                  <span className="text-xs font-semibold text-gray-500">hola@quedecis.example.com</span>
                </div>
              </div>
              
              <div className="flex gap-3 items-start p-4 bg-white border border-gray-150 rounded-2xl">
                <Users className="w-5 h-5 text-orange-600 mt-0.5 shrink-0" />
                <div>
                  <h3 className="text-sm font-bold text-gray-900">Proyecto Comunitario</h3>
                  <span className="text-xs font-semibold text-gray-500">Impulsado por activistas de la accesibilidad digital.</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Interactive Form Box */}
          <div className="lg:col-span-7">
            <div className="bg-white border border-gray-150 rounded-3xl p-6 md:p-8 shadow-sm h-full flex flex-col justify-center">
              
              {submitted ? (
                /* Success Feedback Screen */
                <div className="text-center py-12 space-y-4 motion-fade-in" aria-live="polite">
                  <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center text-emerald-600 mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-extrabold font-display text-gray-950">
                    ¡Ponte en contacto recibido!
                  </h3>
                  <p className="text-base text-gray-600 max-w-md mx-auto leading-relaxed font-sans">
                    Muchas gracias por escribirnos, <strong>{name}</strong>. Valoramos cada sugerencia para mejorar la accesibilidad de las personas hipoacúsicas.
                  </p>
                  <button
                    onClick={handleReset}
                    type="button"
                    className="mt-4 px-6 py-2.5 text-sm font-bold text-blue-600 hover:text-blue-700 bg-blue-50 hover:bg-blue-100 rounded-xl transition-colors focus:ring-4 focus:ring-blue-600"
                  >
                    Enviar otra sugerencia
                  </button>
                </div>
              ) : (
                /* Standard Contact Form */
                <form onSubmit={handleSubmit} className="space-y-5 text-left">
                  
                  {/* Nombre Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-name" className="block text-sm font-extrabold text-gray-700">
                      Nombre Completo
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="Ej: Sofía Martínez"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 font-medium focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100 placeholder:text-gray-400"
                      required
                    />
                  </div>

                  {/* Correo Electrónico Input */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-email" className="block text-sm font-extrabold text-gray-700">
                      Correo Electrónico
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="sofia@gmail.com"
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 font-medium focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100 placeholder:text-gray-400"
                      required
                    />
                  </div>

                  {/* Mensaje Textarea */}
                  <div className="space-y-1.5">
                    <label htmlFor="contact-message" className="block text-sm font-extrabold text-gray-700">
                      Mensaje o Sugerencia
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder="Dejanos tu opinión, reporte de problemas o ideas para incorporar a la app..."
                      className="w-full px-4 py-3 bg-gray-50 border border-gray-300 rounded-xl text-gray-900 font-medium focus:outline-none focus:border-blue-600 focus:bg-white focus:ring-4 focus:ring-blue-100 placeholder:text-gray-400"
                      style={{ minHeight: "80px" }}
                      required
                    ></textarea>
                  </div>

                  {/* Submit button */}
                  <button
                    type="submit"
                    className="w-full py-4 px-6 bg-blue-600 hover:bg-blue-700 active:bg-blue-800 text-white font-extrabold text-base rounded-2xl shadow-md transition-all flex items-center justify-center gap-2 focus:outline-none focus:ring-4 focus:ring-orange-500 cursor-pointer"
                  >
                    <Send className="w-5 h-5 shrink-0" />
                    Enviar consulta
                  </button>

                </form>
              )}

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
