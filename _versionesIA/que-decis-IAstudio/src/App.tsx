/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Features from "./components/Features";
import Manual from "./components/Manual";
import DemoApp from "./components/DemoApp";
import FAQ from "./components/FAQ";
import Testimonials from "./components/Testimonials";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

export default function App() {
  // Callback to bring users directly to the live transcription simulator
  const scrollToDemo = () => {
    const target = document.getElementById("demostrador");
    if (target) {
      target.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-white text-gray-905 overflow-x-hidden antialiased selection:bg-blue-100 selection:text-blue-900">
      
      {/* Universal Skip to Main Content link (WCAG AA accessibility requirement) */}
      <a
        href="#demostrador"
        className="sr-only focus:not-sr-only focus:absolute focus:z-100 focus:bg-orange-600 focus:text-white focus:px-6 focus:py-4 focus:rounded-xl focus:m-4 focus:font-extrabold focus:outline-none"
      >
        Saltar directamente al simulador de conversación accesible
      </a>

      {/* 1. Header Navigation */}
      <Header />

      {/* Main layout container */}
      <main id="main-content">
        
        {/* 2. Hero Section */}
        <Hero onStartConversing={scrollToDemo} />

        {/* 3. About Section (Sobre Nosotros) */}
        <About />

        {/* 4. Features Section (Características Clave) */}
        <Features />

        {/* 5. Manual Section (Cómo Funciona en 4 pasos) */}
        <Manual />

        {/* 6. Live Interactive Demo & Assistive Screen */}
        <DemoApp />

        {/* 7. FAQ Sections (Acordeón accesible) */}
        <FAQ />

        {/* 8. Verified Testimonials */}
        <Testimonials />

        {/* 9. Contact / Suggestion Form */}
        <Contact />

      </main>

      {/* 10. Footer Section */}
      <Footer />

    </div>
  );
}
