import { SectionHeading } from "@/components/section-heading";
import { testimonials } from "@/data/landing";

export function TestimonialsSection() {
  return (
    <section id="testimonios" className="bg-white py-16 sm:py-20">
      <div className="section-shell">
        <SectionHeading
          eyebrow="Testimonios"
          title="Historias posibles de uso cotidiano"
        />
        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <figure
              key={testimonial.name}
              className="rounded-md border border-gray-200 bg-white p-6 shadow-sm"
            >
              <blockquote className="text-xl font-bold leading-8 text-brand-ink">
                “{testimonial.quote}”
              </blockquote>
              <figcaption className="mt-5 border-t border-gray-200 pt-4">
                <p className="font-black text-brand-ink">{testimonial.name}</p>
                <p className="text-sm font-bold text-brand-muted">{testimonial.role}</p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
