import React from "react";
import Header from "../components/layout/Header";
import Hero from "../components/sections/Hero";
import About from "../components/sections/About";
import Features from "../components/sections/Features";
import Instructions from "../components/sections/Instructions";
import FAQ from "../components/sections/FAQ";
import Testimonials from "../components/sections/Testimonials";
import Contact from "../components/sections/Contact";
import Footer from "../components/layout/Footer";

export default function Home() {
  return (
    <>
      {/* Salto de accesibilidad para lectores de pantalla */}
      <a
        href="#contenido-principal"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 bg-primary-blue text-white px-4 py-2 rounded-xl font-sans font-bold z-100 shadow-md focus-visible:outline-none focus-visible:ring-3 focus-visible:ring-offset-2 focus-visible:ring-primary-blue"
      >
        Saltar al contenido principal
      </a>

      <Header />

      <main id="contenido-principal" className="flex-1">
        <Hero />
        <About />
        <Features />
        <Instructions />
        <FAQ />
        <Testimonials />
        <Contact />
      </main>

      <Footer />
    </>
  );
}
