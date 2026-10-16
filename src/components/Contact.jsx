import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { CheckCircle2, Mail, MapPin, Phone, Send } from "lucide-react";
import { PROFILE } from "../data/portfolio";
import Reveal from "./Reveal";
import SectionHeading from "./SectionHeading";

const CARDS = [
  { icon: Mail, label: "Email", value: PROFILE.email, href: `mailto:${PROFILE.email}` },
  { icon: Phone, label: "Phone", value: PROFILE.phone, href: PROFILE.phoneHref },
  { icon: MapPin, label: "Location", value: PROFILE.location, href: undefined },
];

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Portfolio enquiry from ${form.name}`);
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`);
    window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 5000);
  };

  const inputCls =
    "w-full rounded-xl border border-white/15 bg-white/5 px-4 py-3 text-[14.5px] text-ivory placeholder:text-stone-400 outline-none transition focus:border-emerald-400 focus:ring-4 focus:ring-emerald-400/15";

  return (
    <section id="contact" className="scroll-mt-24 bg-charcoal py-20 md:py-28" aria-label="Contact">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          dark
          eyebrow="Contact"
          title="Let's build something great together"
          text="Have a project in mind, a role to fill, or just want to say hello? My inbox is always open."
        />

        <div className="grid gap-10 lg:grid-cols-5 lg:gap-14">
          {/* Info cards */}
          <div className="space-y-4 lg:col-span-2">
            {CARDS.map((c, i) => (
              <Reveal key={c.label} delay={i * 0.08}>
                {c.href ? (
                  <a
                    href={c.href}
                    className="group flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5 transition hover:border-emerald-400/40 hover:bg-white/10"
                  >
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-600/20 text-emerald-300 transition group-hover:bg-emerald-600 group-hover:text-white">
                      <c.icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span>
                      <span className="block text-[11.5px] font-semibold uppercase tracking-wider text-stone-400">
                        {c.label}
                      </span>
                      <span className="block text-[15px] font-semibold text-ivory">{c.value}</span>
                    </span>
                  </a>
                ) : (
                  <div className="flex items-center gap-4 rounded-2xl border border-white/10 bg-white/5 p-5">
                    <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-600/20 text-emerald-300">
                      <c.icon className="h-5 w-5" aria-hidden />
                    </span>
                    <span>
                      <span className="block text-[11.5px] font-semibold uppercase tracking-wider text-stone-400">
                        {c.label}
                      </span>
                      <span className="block text-[15px] font-semibold text-ivory">{c.value}</span>
                    </span>
                  </div>
                )}
              </Reveal>
            ))}
            <Reveal delay={0.25}>
              <div className="rounded-2xl border border-emerald-400/25 bg-emerald-600/10 p-5">
                <p className="text-[14px] leading-relaxed text-emerald-100/90">
                  <span className="font-bold text-emerald-300">Currently open</span> to full-time
                  roles and select freelance projects. I usually reply within 24 hours.
                </p>
              </div>
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.1} className="lg:col-span-3">
            <form
              onSubmit={submit}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 md:p-8 backdrop-blur"
              aria-label="Contact form"
            >
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label htmlFor="contact-name" className="mb-2 block text-[13px] font-semibold text-stone-300">
                    Your name
                  </label>
                  <input
                    id="contact-name"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Jane Smith"
                    className={inputCls}
                    autoComplete="name"
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="mb-2 block text-[13px] font-semibold text-stone-300">
                    Your email
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="jane@example.com"
                    className={inputCls}
                    autoComplete="email"
                  />
                </div>
              </div>
              <div className="mt-5">
                <label htmlFor="contact-message" className="mb-2 block text-[13px] font-semibold text-stone-300">
                  Message
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  placeholder="Tell me about your project…"
                  className={`${inputCls} resize-none`}
                />
              </div>
              <motion.button
                whileTap={{ scale: 0.98 }}
                type="submit"
                className="mt-6 inline-flex w-full sm:w-auto items-center justify-center gap-2 rounded-2xl bg-emerald-600 px-8 py-3.5 text-[15px] font-semibold text-white transition hover:bg-emerald-500"
              >
                <Send className="h-4 w-4" aria-hidden />
                Send Message
              </motion.button>
              <AnimatePresence>
                {sent && (
                  <motion.p
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="mt-4 flex items-center gap-2 text-[14px] font-medium text-emerald-300"
                    role="status"
                  >
                    <CheckCircle2 className="h-4 w-4" aria-hidden />
                    Opening your email app — I'll get back to you soon.
                  </motion.p>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
