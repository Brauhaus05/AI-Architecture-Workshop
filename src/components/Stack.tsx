export function Stack() {
  const items = [
    "CHATGPT",
    "GEMINI",
    "MIDJOURNEY",
    "FLUX",
    "VEO 3",
    "KLING 3",
    "SEEEDANCE",
    "NANO BANANA PRO",
  ];

  return (
    <section
      className="py-12 border-y border-grid-line overflow-hidden bg-surface/20"
      id="stack"
    >
      <div className="flex animate-marquee whitespace-nowrap">
        <div className="flex items-center gap-24 px-12">
          {items.map((item, i) => (
            <span
              key={i}
              className="font-display text-4xl font-bold text-muted hover:text-white transition-colors cursor-default"
            >
              {item}
            </span>
          ))}
        </div>
        <div className="flex items-center gap-24 px-12">
          {items.map((item, i) => (
            <span
              key={`dup-${i}`}
              className="font-display text-4xl font-bold text-muted hover:text-white transition-colors cursor-default"
            >
              {item}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
