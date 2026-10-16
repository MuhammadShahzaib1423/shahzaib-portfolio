import { ArrowUp, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { NAV_LINKS, PROFILE } from "../data/portfolio";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-charcoal/10 bg-ivory" aria-label="Footer">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <a href="#home" className="flex items-center gap-2.5" aria-label="Back to top of page">
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-emerald-700 font-display text-[15px] font-bold text-ivory">
              MS
            </span>
            <span className="leading-tight">
              <span className="block text-[14px] font-bold tracking-tight text-charcoal">
                {PROFILE.name}
              </span>
              <span className="block text-[11px] font-medium text-stone-warm">{PROFILE.role}</span>
            </span>
          </a>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2">
              {NAV_LINKS.map((l) => (
                <li key={l.id}>
                  <a
                    href={`#${l.id}`}
                    className="text-[13.5px] font-semibold text-ink/65 transition hover:text-emerald-700"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </nav>

          <div className="flex items-center gap-3">
            {[
              { href: PROFILE.github, icon: GithubIcon, label: "GitHub profile" },
              { href: PROFILE.linkedin, icon: LinkedinIcon, label: "LinkedIn profile" },
              { href: `mailto:${PROFILE.email}`, icon: Mail, label: "Email me" },
            ].map((s) => (
              <a
                key={s.label}
                href={s.href}
                target={s.href.startsWith("http") ? "_blank" : undefined}
                rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
                aria-label={s.label}
                className="flex h-10 w-10 items-center justify-center rounded-xl border border-charcoal/15 text-ink/65 transition hover:-translate-y-0.5 hover:border-emerald-700 hover:text-emerald-700"
              >
                <s.icon className="h-[18px] w-[18px]" />
              </a>
            ))}
            <a
              href="#home"
              aria-label="Back to top"
              className="flex h-10 w-10 items-center justify-center rounded-xl bg-charcoal text-ivory transition hover:bg-emerald-700"
            >
              <ArrowUp className="h-[18px] w-[18px]" />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-charcoal/10 pt-6 text-[12.5px] text-stone-warm md:flex-row">
          <p>© {year} {PROFILE.name}. All rights reserved.</p>
          <p>
            Designed & built with care in {PROFILE.location}.
          </p>
        </div>
      </div>
    </footer>
  );
}
