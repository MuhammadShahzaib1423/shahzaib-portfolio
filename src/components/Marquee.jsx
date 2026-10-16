const ITEMS = [
  "React", "Next.js", "Node.js", "Laravel", "TypeScript", "Tailwind CSS",
  "REST APIs", "MongoDB", "PostgreSQL", "Firebase", "Vercel", "Figma",
];

export default function Marquee() {
  const row = [...ITEMS, ...ITEMS];
  return (
    <div className="overflow-hidden border-y border-charcoal/10 bg-charcoal py-4" aria-hidden>
      <div className="animate-marquee flex w-max items-center gap-10 pr-10">
        {row.map((item, i) => (
          <span key={i} className="flex items-center gap-10 whitespace-nowrap">
            <span className="font-display text-lg md:text-xl font-medium tracking-wide text-ivory/90">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
          </span>
        ))}
      </div>
    </div>
  );
}
