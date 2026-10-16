import { Quote, Star } from "lucide-react";
import { TESTIMONIALS } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Testimonials() {
  return (
    <section className="py-20 md:py-28" aria-label="Testimonials">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Testimonials"
          title="Kind words from people I've worked with"
        />

        <div className="grid gap-5 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.1}>
              <figure className="flex h-full flex-col rounded-3xl border border-charcoal/10 bg-white p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_44px_rgba(28,25,23,0.10)]">
                <Quote className="h-7 w-7 text-emerald-700/30" aria-hidden />
                <div className="mt-3 flex gap-1" aria-label="5 out of 5 stars">
                  {Array.from({ length: 5 }).map((_, s) => (
                    <Star key={s} className="h-4 w-4 fill-gold text-gold" aria-hidden />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 text-[14.5px] leading-relaxed text-ink/85">
                  “{t.quote}”
                </blockquote>
                <figcaption className="mt-6 border-t border-charcoal/10 pt-4">
                  <p className="text-[14.5px] font-bold text-charcoal">{t.name}</p>
                  <p className="text-[12.5px] font-medium text-stone-warm">{t.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-6 text-center">
          <p className="text-[12px] text-stone-warm/80">
            Representative feedback from collaborators, shared with permission.
          </p>
        </Reveal>
      </div>
    </section>
  );
}
