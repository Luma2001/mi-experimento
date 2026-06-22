import { SectionHeading } from "@/components/section-heading";
import { faqs } from "@/data/landing";

export function FaqSection() {
  return (
    <section id="preguntas" className="bg-gray-50 py-16 sm:py-20">
      <div className="section-shell max-w-4xl">
        <SectionHeading
          eyebrow="Preguntas y Respuestas"
          title="Respuestas claras antes de empezar"
        />
        <div className="mt-10 space-y-3">
          {faqs.map((faq) => (
            <details
              key={faq.question}
              className="group rounded-md border border-gray-200 bg-white p-1 shadow-sm"
            >
              <summary className="tap-target flex cursor-pointer list-none items-center justify-between gap-4 rounded-md px-4 py-4 text-left text-lg font-black text-brand-ink">
                {faq.question}
                <span
                  aria-hidden="true"
                  className="grid h-8 w-8 shrink-0 place-items-center rounded-md bg-brand-soft text-brand-blue group-open:rotate-45"
                >
                  +
                </span>
              </summary>
              <p className="px-4 pb-5 text-base leading-7 text-brand-muted">{faq.answer}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}
