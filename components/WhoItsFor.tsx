const items = [
  "Teams that need user understanding at the speed of their decisions",
  "Organizations where strategy is built on assumptions rather than evidence",
  "Leaders burned by research that was too slow, too generic, or too disconnected from the real decision",
];

export default function WhoItsFor() {
  return (
    <section className="mb-16 md:mb-20">
      <div className="h-px bg-brand-border mb-10" />
      <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-muted mb-8">
        Who this is for
      </h2>
      <ul className="space-y-4">
        {items.map((item) => (
          <li key={item} className="flex items-start gap-3">
            <span className="mt-2 shrink-0 w-1.5 h-1.5 rounded-full bg-brand-accent" />
            <span className="text-[0.9375rem] leading-relaxed text-brand-text opacity-75">
              {item}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
