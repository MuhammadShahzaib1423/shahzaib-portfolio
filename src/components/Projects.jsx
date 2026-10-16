import { ArrowUpRight, Code2, ExternalLink, FolderGit2 } from "lucide-react";
import { PROJECTS } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

function ProjectButtons({ project, large = false }) {
  const btn = large ? "px-6 py-3 text-[14.5px]" : "px-4 py-2.5 text-[13.5px]";
  return (
    <div className="flex flex-wrap gap-3">
      {project.live && (
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`Open live demo of ${project.name} in a new tab`}
          className={`inline-flex items-center gap-2 rounded-xl bg-emerald-700 font-semibold text-white transition hover:bg-charcoal ${btn}`}
        >
          <ExternalLink className="h-4 w-4" aria-hidden />
          Live Demo
        </a>
      )}
      {project.repo && (
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`View ${project.name} source code on GitHub in a new tab`}
          className={`inline-flex items-center gap-2 rounded-xl border font-semibold transition ${btn} ${
            project.live
              ? "border-charcoal/20 text-charcoal hover:border-emerald-700 hover:text-emerald-700"
              : "bg-charcoal text-ivory hover:bg-emerald-700"
          }`}
        >
          <Code2 className="h-4 w-4" aria-hidden />
          GitHub
        </a>
      )}
    </div>
  );
}

function FeaturedCard({ project, flip = false }) {
  return (
    <Reveal>
      <article className="group grid overflow-hidden rounded-[2rem] border border-charcoal/10 bg-white transition duration-300 hover:shadow-[0_28px_60px_rgba(28,25,23,0.12)] lg:grid-cols-2">
        {/* Visual panel */}
        <div
          className={`relative flex min-h-[280px] md:min-h-[340px] flex-col justify-between overflow-hidden p-8 md:p-10 ${
            flip ? "lg:order-2" : ""
          } ${project.accent === "amber" ? "bg-charcoal" : "bg-emerald-800"}`}
          aria-hidden
        >
          <div className="grain absolute inset-0" />
          <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute -bottom-24 -left-16 h-64 w-64 rounded-full bg-white/5 blur-3xl" />
          <div className="relative">
            <span className="inline-block rounded-full bg-white/15 px-4 py-1.5 text-[11.5px] font-bold uppercase tracking-[0.18em] text-white backdrop-blur">
              Featured Project
            </span>
          </div>
          <div className="relative">
            <p className="font-display text-4xl md:text-6xl font-semibold text-white/95 leading-none">
              {project.name}
            </p>
            <p className="mt-3 text-[15px] font-medium text-white/70">{project.tagline}</p>
          </div>
          <div className="relative flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span key={t} className="rounded-full bg-white/12 px-3 py-1 text-[12px] font-semibold text-white/85 backdrop-blur">
                {t}
              </span>
            ))}
          </div>
        </div>

        {/* Content panel */}
        <div className={`flex flex-col justify-center p-8 md:p-10 ${flip ? "lg:order-1" : ""}`}>
          <h3 className="display-md text-charcoal">{project.name}</h3>
          <p className="mt-1 text-[13.5px] font-semibold uppercase tracking-wider text-emerald-700">
            {project.tagline}
          </p>
          <p className="mt-4 text-[15px] leading-relaxed text-stone-warm">{project.description}</p>
          <div className="mt-6">
            <ProjectButtons project={project} large />
          </div>
          <a
            href={project.live || project.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="link-sweep mt-6 inline-flex w-fit items-center gap-1.5 text-[14px] font-semibold text-charcoal"
            aria-label={`Learn more about ${project.name}`}
          >
            Explore the project <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
        </div>
      </article>
    </Reveal>
  );
}

function GridCard({ project }) {
  return (
    <Reveal>
      <article className="group flex h-full flex-col rounded-3xl border border-charcoal/10 bg-white p-7 transition duration-300 hover:-translate-y-1.5 hover:shadow-[0_20px_44px_rgba(28,25,23,0.11)]">
        <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-sage text-emerald-700 transition group-hover:bg-emerald-700 group-hover:text-white">
          <FolderGit2 className="h-5 w-5" aria-hidden />
        </span>
        <h3 className="mt-5 text-[18px] font-bold tracking-tight text-charcoal">{project.name}</h3>
        <p className="mt-1 text-[12.5px] font-semibold uppercase tracking-wider text-emerald-700">
          {project.tagline}
        </p>
        <p className="mt-3 flex-1 text-[14.5px] leading-relaxed text-stone-warm">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tech.map((t) => (
            <span key={t} className="rounded-md bg-ivory border border-charcoal/10 px-2.5 py-1 text-[11.5px] font-semibold text-ink/70">
              {t}
            </span>
          ))}
        </div>
        <div className="mt-6 border-t border-charcoal/10 pt-5">
          <ProjectButtons project={project} />
        </div>
      </article>
    </Reveal>
  );
}

export default function Projects() {
  const featured = PROJECTS.filter((p) => p.featured);
  const rest = PROJECTS.filter((p) => !p.featured);

  return (
    <section id="projects" className="scroll-mt-24 bg-cream/60 py-20 md:py-28" aria-label="Selected projects">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Projects"
          title="Work I'm proud of"
          text="A selection of projects — from live production apps to full-stack builds. Every live project links straight to the running demo."
        />

        <div className="space-y-8 md:space-y-10">
          {featured.map((p, i) => (
            <FeaturedCard key={p.name} project={p} flip={i % 2 === 1} />
          ))}
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {rest.map((p) => (
            <GridCard key={p.name} project={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
