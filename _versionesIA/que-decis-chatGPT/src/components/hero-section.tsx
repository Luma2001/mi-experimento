import { SmartphoneMockup } from "@/components/smartphone-mockup";
import { siteConfig } from "@/lib/constants";

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="bg-white py-8 sm:py-12 lg:min-h-[calc(100svh-65px)] lg:py-16"
    >
      <div className="section-shell grid items-center gap-8 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="max-w-2xl">
          <p className="inline-flex rounded-md bg-teal-50 px-3 py-2 text-sm font-black text-teal-800">
            Comunicación accesible en momentos reales
          </p>
          <h1 className="mt-5 text-4xl font-black leading-[1.05] text-brand-ink sm:text-5xl lg:text-6xl">
            Escuchá con los ojos. Hablá con confianza.
          </h1>
          <p className="mt-5 max-w-xl text-xl leading-8 text-brand-muted">
            ¿Qué Decís? convierte voz en texto grande y texto en voz para conversar en
            consultorios, comercios, bancos, universidades y espacios públicos.
          </p>
          <div className="mt-7 flex flex-col gap-3 sm:flex-row">
            <a
              id="empezar"
              className="tap-target inline-flex items-center justify-center rounded-md bg-brand-orange px-6 py-4 text-lg font-black text-brand-ink shadow-lg shadow-orange-200 hover:bg-orange-500"
              href="#contacto"
            >
              {siteConfig.cta}
            </a>
            <a
              className="tap-target inline-flex items-center justify-center rounded-md border-2 border-brand-blue px-6 py-4 text-lg font-black text-brand-blue hover:bg-brand-soft"
              href="#manual"
            >
              Ver cómo funciona
            </a>
          </div>
        </div>
        <SmartphoneMockup />
      </div>
    </section>
  );
}
