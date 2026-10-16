import { motion } from "framer-motion";
import { Award, Briefcase, GraduationCap, Mail, MapPin, Phone } from "lucide-react";
import { PROFILE } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const INFO = [
  { icon: Briefcase, label: "Experience", value: "2+ Years" },
  { icon: GraduationCap, label: "Degree", value: "BS Computer Science" },
  { icon: MapPin, label: "Location", value: PROFILE.location },
  { icon: Award, label: "Focus", value: "Full-Stack Products" },
];

export default function About() {
  return (
    <section id="about" className="scroll-mt-24 py-20 md:py-28" aria-label="About me">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About Me"
          title="Developer with a taste for calm, quality software"
        />

        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Portrait / monogram card */}
          <Reveal>
            <div className="relative mx-auto max-w-md">
              <div aria-hidden className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-emerald-700/15 via-sage to-gold/10 blur-2xl" />
              <div className="relative overflow-hidden rounded-[2rem] border border-charcoal/10 bg-gradient-to-br from-cream to-sage p-10 md:p-12">
                <div className="flex h-36 w-36 items-center justify-center rounded-3xl bg-charcoal font-display text-5xl font-bold text-ivory shadow-lg">
                  MS
                </div>
                <p className="mt-8 font-display text-2xl font-semibold text-charcoal">
                  {PROFILE.name}
                </p>
                <p className="mt-1 text-[14px] font-semibold text-emerald-700">{PROFILE.role}</p>
                <div className="mt-6 space-y-2.5 border-t border-charcoal/10 pt-6 text-[14px]">
                  <p className="flex items-center gap-2.5 text-ink/75">
                    <Mail className="h-4 w-4 text-emerald-700" /> {PROFILE.email}
                  </p>
                  <p className="flex items-center gap-2.5 text-ink/75">
                    <Phone className="h-4 w-4 text-emerald-700" /> {PROFILE.phone}
                  </p>
                  <p className="flex items-center gap-2.5 text-ink/75">
                    <MapPin className="h-4 w-4 text-emerald-700" /> {PROFILE.location}
                  </p>
                </div>
                <motion.a
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  href="#contact"
                  className="mt-8 inline-flex w-full items-center justify-center rounded-2xl bg-emerald-700 px-6 py-3.5 text-[15px] font-semibold text-white transition hover:bg-charcoal"
                >
                  Let's work together
                </motion.a>
              </div>
            </div>
          </Reveal>

          {/* Text */}
          <div>
            <Reveal>
              <h3 className="display-md text-charcoal">
                Turning ideas into reliable, elegant web products
              </h3>
              <p className="mt-5 text-[15.5px] leading-relaxed text-stone-warm">{PROFILE.about}</p>
              <p className="mt-4 text-[15.5px] leading-relaxed text-stone-warm">
                My approach is simple: understand the problem deeply, design the
                simplest robust solution, and sweat the details — from API
                contracts to the last pixel of the interface.
              </p>
            </Reveal>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {INFO.map((item, i) => (
                <Reveal key={item.label} delay={i * 0.08}>
                  <div className="flex items-center gap-4 rounded-2xl border border-charcoal/10 bg-white/70 p-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-emerald-700/10 text-emerald-700">
                      <item.icon className="h-5 w-5" />
                    </span>
                    <span>
                      <span className="block text-[11.5px] font-semibold uppercase tracking-wider text-stone-warm">
                        {item.label}
                      </span>
                      <span className="block text-[14.5px] font-bold text-charcoal">
                        {item.value}
                      </span>
                    </span>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
