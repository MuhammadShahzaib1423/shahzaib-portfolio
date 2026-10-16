import Reveal from "./Reveal";

export default function SectionHeading({ eyebrow, title, text, align = "center", dark = false }) {
  const alignCls = align === "center" ? "text-center mx-auto" : "text-left";
  return (
    <Reveal className={`max-w-2xl ${alignCls} mb-12 md:mb-16`}>
      <p
        className={`text-xs font-bold uppercase tracking-[0.25em] mb-4 ${
          dark ? "text-emerald-300" : "text-emerald-700"
        }`}
      >
        {eyebrow}
      </p>
      <h2 className={`display-lg ${dark ? "text-ivory" : "text-charcoal"}`}>{title}</h2>
      {text && (
        <p className={`mt-4 text-[15px] leading-relaxed ${dark ? "text-stone-300" : "text-stone-warm"}`}>
          {text}
        </p>
      )}
    </Reveal>
  );
}
