import { useEffect, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowDown, ArrowRight, Mail, MapPin } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "./BrandIcons";
import { PROFILE, ROLES, STATS } from "../data/portfolio";
import AnimatedCounter from "./AnimatedCounter";

function useTypewriter(words, speed = 70, pause = 1800) {
  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const reduce = useReducedMotion();

  useEffect(() => {
    if (reduce) {
      setText(words[0]);
      return;
    }
    const word = words[index % words.length];
    let char = 0;
    let deleting = false;
    let timer;

    const tick = () => {
      if (!deleting) {
        char++;
        setText(word.slice(0, char));
        if (char === word.length) {
          deleting = true;
          timer = setTimeout(tick, pause);
          return;
        }
        timer = setTimeout(tick, speed);
      } else {
        char--;
        setText(word.slice(0, char));
        if (char === 0) {
          deleting = false;
          setIndex((i) => (i + 1) % words.length);
          timer = setTimeout(tick, 350);
          return;
        }
        timer = setTimeout(tick, speed / 2);
      }
    };
    timer = setTimeout(tick, 400);
    return () => clearTimeout(timer);
  }, [index, reduce]); // eslint-disable-line react-hooks/exhaustive-deps

  return text;
}

const ease = [0.22, 1, 0.36, 1];

export default function Hero() {
  const typed = useTypewriter(ROLES);

  return (
    <section id="home" className="grain relative overflow-hidden" aria-label="Introduction">
      {/* soft background shapes */}
      <div aria-hidden className="pointer-events-none absolute inset-0">
        <div className="absolute -top-32 -right-32 h-[480px] w-[480px] rounded-full bg-emerald-700/10 blur-3xl" />
        <div className="absolute top-1/2 -left-40 h-[420px] w-[420px] rounded-full bg-gold/10 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-32 md:pt-40 pb-16 md:pb-24">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease }}
            className="inline-flex items-center gap-2 rounded-full border border-emerald-700/25 bg-emerald-700/5 px-4 py-1.5 text-[12.5px] font-semibold text-emerald-700"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-600 opacity-60" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-600" />
            </span>
            Available for new opportunities
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="display-xl mt-6 text-charcoal"
          >
            Muhammad Shahzaib
            <span className="mt-3 block text-emerald-700">
              <span aria-live="polite">{typed}</span>
              <span className="typing-caret ml-1 inline-block h-[0.9em] w-[3px] translate-y-[0.12em] bg-emerald-700" aria-hidden />
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.22, ease }}
            className="mt-6 max-w-xl text-[16px] md:text-lg leading-relaxed text-stone-warm"
          >
            {PROFILE.tagline} Based in {PROFILE.location} — crafting calm, reliable software
            that people enjoy using.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.34, ease }}
            className="mt-8 flex flex-wrap items-center gap-4"
          >
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-2xl bg-charcoal px-7 py-3.5 text-[15px] font-semibold text-ivory transition hover:bg-emerald-700"
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-2xl border border-charcoal/20 px-7 py-3.5 text-[15px] font-semibold text-charcoal transition hover:border-emerald-700 hover:text-emerald-700"
            >
              Contact Me
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-8 flex items-center gap-3"
          >
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
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-charcoal/15 text-ink/70 transition hover:-translate-y-1 hover:border-emerald-700 hover:text-emerald-700"
              >
                <s.icon className="h-5 w-5" />
              </a>
            ))}
            <span className="ml-2 inline-flex items-center gap-1.5 text-[13px] font-medium text-stone-warm">
              <MapPin className="h-4 w-4" />
              {PROFILE.location}
            </span>
          </motion.div>
        </div>

        {/* Stats */}
        <motion.dl
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6, ease }}
          className="mt-16 md:mt-20 grid grid-cols-3 gap-4 md:gap-8 max-w-2xl"
        >
          {STATS.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-charcoal/10 bg-white/60 px-4 py-5 md:px-6 backdrop-blur-sm"
            >
              <dt className="order-2 mt-1 block text-[12px] md:text-[13px] font-medium text-stone-warm">
                {s.label}
              </dt>
              <dd className="font-display text-3xl md:text-[42px] font-semibold text-charcoal">
                <AnimatedCounter value={s.value} suffix={s.suffix} />
              </dd>
            </div>
          ))}
        </motion.dl>
      </div>

      {/* scroll cue */}
      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.8 }}
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 md:flex flex-col items-center gap-2 text-stone-warm"
      >
        <span className="flex h-10 w-6 items-start justify-center rounded-full border-2 border-current p-1.5">
          <span className="animate-scroll-dot h-2 w-2 rounded-full bg-current" />
        </span>
        <ArrowDown className="h-3.5 w-3.5" />
      </motion.a>
    </section>
  );
}
