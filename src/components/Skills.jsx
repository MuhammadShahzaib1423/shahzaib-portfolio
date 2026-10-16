import { Database, Layers, Monitor, Plug, Palette, Gauge, Server, Wrench } from "lucide-react";
import { SERVICES, SKILL_GROUPS } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const GROUP_ICONS = { Monitor, Server, Database, Wrench };
const SERVICE_ICONS = { Layers, Plug, Palette, Gauge };

export default function Skills() {
  return (
    <section id="skills" className="scroll-mt-24 bg-cream/60 py-20 md:py-28" aria-label="Skills and services">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Skills"
          title="A toolkit built for shipping"
          text="Technologies I reach for every day — chosen for reliability, performance and developer joy."
        />

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {SKILL_GROUPS.map((group, gi) => {
            const Icon = GROUP_ICONS[group.icon] || Monitor;
            return (
              <Reveal key={group.title} delay={gi * 0.08}>
                <article className="group h-full rounded-3xl border border-charcoal/10 bg-white p-6 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_40px_rgba(28,25,23,0.10)]">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-charcoal text-ivory transition group-hover:bg-emerald-700">
                    <Icon className="h-5 w-5" />
                  </span>
                  <h3 className="mt-5 text-[17px] font-bold tracking-tight text-charcoal">
                    {group.title}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.skills.map((s) => (
                      <li
                        key={s}
                        className="rounded-full border border-charcoal/12 bg-ivory px-3 py-1.5 text-[12.5px] font-semibold text-ink/80 transition hover:border-emerald-700/40 hover:text-emerald-700"
                      >
                        {s}
                      </li>
                    ))}
                  </ul>
                </article>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-20 md:mt-24">
          <SectionHeading eyebrow="Services" title="What I can do for you" />
          <div className="grid gap-5 md:grid-cols-2">
            {SERVICES.map((service, i) => {
              const Icon = SERVICE_ICONS[service.icon] || Layers;
              return (
                <Reveal key={service.title} delay={(i % 2) * 0.08}>
                  <article className="flex h-full gap-5 rounded-3xl border border-charcoal/10 bg-white p-6 md:p-7 transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_40px_rgba(28,25,23,0.10)]">
                    <span className="flex h-13 w-13 shrink-0 items-center justify-center rounded-2xl bg-emerald-700/10 p-3.5 text-emerald-700">
                      <Icon className="h-6 w-6" />
                    </span>
                    <div>
                      <h3 className="text-[17px] font-bold tracking-tight text-charcoal">
                        <span className="mr-2 font-display text-emerald-700/50">0{i + 1}</span>
                        {service.title}
                      </h3>
                      <p className="mt-2 text-[14.5px] leading-relaxed text-stone-warm">
                        {service.text}
                      </p>
                    </div>
                  </article>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
