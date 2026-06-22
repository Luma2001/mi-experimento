"use client";

import React, { useState } from "react";
import Button from "../ui/Button";

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: "",
    email: "",
    mensaje: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Simular envío de formulario visual
    setSubmitted(true);
    setFormData({ nombre: "", email: "", mensaje: "" });
    setTimeout(() => {
      setSubmitted(false);
    }, 5000); // Ocultar mensaje de éxito después de 5 segundos
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contacto" className="py-16 md:py-24 bg-slate-50 border-t border-gray-100">
      <div className="max-w-xl mx-auto px-4 sm:px-6">
        
        {/* Encabezado */}
        <div className="text-center mb-12">
          <h2 className="font-atkinson font-bold text-3xl sm:text-4xl text-text-dark tracking-tight">
            Contacto
          </h2>
          <div className="w-16 h-1 bg-primary-blue mx-auto mt-4 rounded-full" />
          <p className="font-sans text-base text-text-muted mt-4 leading-relaxed">
            ¿Tenés alguna consulta, propuesta o sugerencia? Dejanos tu mensaje y nos pondremos en contacto.
          </p>
        </div>

        {/* Tarjeta del Formulario */}
        <div className="bg-white border border-gray-200/80 rounded-3xl p-6 md:p-8 shadow-sm">
          
          {submitted ? (
            <div
              className="bg-emerald-50 border border-emerald-200 text-emerald-800 rounded-2xl p-6 text-center animate-fade-in"
              role="alert"
            >
              <svg className="w-12 h-12 text-emerald-600 mx-auto mb-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <h3 className="font-atkinson font-bold text-lg mb-1">
                ¡Consulta recibida!
              </h3>
              <p className="font-sans text-sm">
                Gracias por comunicarte. Responderemos a tu correo a la brevedad.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              
              {/* Campo Nombre */}
              <div>
                <label
                  htmlFor="nombre"
                  className="block font-atkinson font-bold text-base text-text-dark mb-2"
                >
                  Nombre completo <span className="text-red-600" aria-hidden="true">*</span>
                </label>
                <input
                  type="text"
                  id="nombre"
                  name="nombre"
                  value={formData.nombre}
                  onChange={handleChange}
                  required
                  placeholder="Ej. Juan Pérez"
                  className="w-full bg-slate-50 border border-gray-200 hover:border-gray-300 rounded-xl px-4 py-3 text-base text-text-dark font-sans focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all"
                />
              </div>

              {/* Campo Correo */}
              <div>
                <label
                  htmlFor="email"
                  className="block font-atkinson font-bold text-base text-text-dark mb-2"
                >
                  Correo electrónico <span className="text-red-600" aria-hidden="true">*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="Ej. juan@correo.com"
                  className="w-full bg-slate-50 border border-gray-200 hover:border-gray-300 rounded-xl px-4 py-3 text-base text-text-dark font-sans focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all"
                />
              </div>

              {/* Campo Mensaje */}
              <div>
                <label
                  htmlFor="mensaje"
                  className="block font-atkinson font-bold text-base text-text-dark mb-2"
                >
                  Mensaje o consulta <span className="text-red-600" aria-hidden="true">*</span>
                </label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                  placeholder="Escribí aquí tu mensaje..."
                  className="w-full bg-slate-50 border border-gray-200 hover:border-gray-300 rounded-xl px-4 py-3 text-base text-text-dark font-sans focus:bg-white focus:outline-none focus:ring-2 focus:ring-primary-blue focus:border-transparent transition-all resize-y"
                />
              </div>

              {/* Botón Enviar */}
              <Button
                type="submit"
                variant="primary"
                className="w-full text-center"
                ariaLabel="Enviar formulario de consulta"
              >
                Enviar consulta
              </Button>

            </form>
          )}

        </div>

      </div>
    </section>
  );
}
