import { SectionHeading } from "@/components/section-heading";
import { steps } from "@/data/landing";

export function HowItWorksSection() {
  return (
    <section id="manual" className="bg-brand-ink py-16 text-white sm:py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Manual de Instrucciones"
          title="Cuatro pasos para empezar"
          description="Abrís, escuchás, leés y respondés."
          tone="dark"
        />
        <ol className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <li key={step} className="rounded-md border border-white/20 bg-white/10 p-5">
              <span className="grid h-12 w-12 place-items-center rounded-md bg-brand-orange text-xl font-black text-brand-ink">
                {index + 1}
              </span>
              <p className="mt-5 text-2xl font-black leading-tight">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
