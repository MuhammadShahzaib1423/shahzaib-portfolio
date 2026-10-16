import { Briefcase } from "lucide-react";
import { EXPERIENCE } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="scroll-mt-24 py-20 md:py-28" aria-label="Work experience">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Where I've worked"
          text="A quick tour of the teams and products that shaped how I build software."
        />

        <div className="timeline-rail relative">
          <ol className="space-y-8 md:space-y-0">
            {EXPERIENCE.map((job, i) => {
              const left = i % 2 === 0;
              return (
                <li key={`${job.company}-${job.period}`} className="relative md:grid md:grid-cols-2 md:gap-16 md:pb-12 last:pb-0">
                  {/* dot */}
                  <span
                    aria-hidden
                    className="absolute left-0 md:left-1/2 top-1 z-10 flex h-4 w-4 -translate-x-[1px] md:-translate-x-1/2 items-center justify-center"
                  >
                    <span className={`h-4 w-4 rounded-full border-[3px] ${job.current ? "border-emerald-700 bg-emerald-700" : "border-emerald-700 bg-ivory"}`} />
                    {job.current && (
                      <span className="absolute h-4 w-4 animate-ping rounded-full bg-emerald-600 opacity-40" />
                    )}
                  </span>

                  <div className={`pl-8 md:pl-0 ${left ? "md:col-start-1 md:pr-4 md:text-right" : "md:col-start-2 md:pl-4"}`}>
                    <Reveal delay={0.05}>
                      <article
                        className={`rounded-3xl border p-6 md:p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(28,25,23,0.10)] ${
                          job.current
                            ? "border-emerald-700/30 bg-emerald-700/[0.04]"
                            : "border-charcoal/10 bg-white"
                        }`}
                      >
                        <div className={`flex flex-wrap items-center gap-2 ${left ? "md:justify-end" : ""}`}>
                          {job.current && (
                            <span className="rounded-full bg-emerald-700 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-white">
                              Current
                            </span>
                          )}
                          <span className="rounded-full bg-charcoal/5 px-3 py-1 text-[11.5px] font-semibold text-stone-warm">
                            {job.period}
                          </span>
                        </div>
                        <h3 className={`mt-3 flex items-center gap-2.5 text-[18px] font-bold tracking-tight text-charcoal md:text-[19px] ${left ? "md:flex-row-reverse" : ""}`}>
                          <Briefcase className="h-4.5 w-4.5 shrink-0 text-emerald-700" aria-hidden />
                          {job.title}
                        </h3>
                        <p className="mt-1 text-[14px] font-semibold text-emerald-700">{job.company}</p>
                        <p className="mt-3 text-[14.5px] leading-relaxed text-stone-warm">
                          {job.description}
                        </p>
                      </article>
                    </Reveal>
                  </div>
                  <div aria-hidden className="hidden md:block" />
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
