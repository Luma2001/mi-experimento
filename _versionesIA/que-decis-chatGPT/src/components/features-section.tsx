import { Icon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { features } from "@/data/landing";

export function FeaturesSection() {
  return (
    <section className="bg-white py-16 sm:py-20" aria-labelledby="servicios-title">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Servicios y características"
          title="Herramientas simples para comunicarse mejor"
          description="Cada función está pensada para lectura clara, interacción rápida y uso en movimiento."
        />
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature) => (
            <article
              key={feature.title}
              className="rounded-md border border-gray-200 bg-white p-5 shadow-sm"
            >
              <div className="grid h-12 w-12 place-items-center rounded-md bg-brand-soft text-brand-blue">
                <Icon name={feature.icon} className="h-7 w-7" />
              </div>
              <h3 className="mt-4 text-xl font-black text-brand-ink">{feature.title}</h3>
              <p className="mt-2 text-base leading-7 text-brand-muted">{feature.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
