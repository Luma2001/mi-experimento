import { aboutBlocks } from "@/data/landing";
import { SectionHeading } from "@/components/section-heading";

export function AboutSection() {
  return (
    <section className="bg-gray-50 py-16 sm:py-20" aria-labelledby="sobre-title">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Sobre nosotros"
          title="Nació para bajar la tensión de una conversación cotidiana"
          description="Menos espera, menos repetición, más autonomía."
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {aboutBlocks.map((block) => (
            <article key={block.title} className="rounded-md bg-white p-6 shadow-sm">
              <h3 className="text-xl font-black leading-snug text-brand-ink">
                {block.title}
              </h3>
              <p className="mt-3 text-base leading-7 text-brand-muted">{block.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
