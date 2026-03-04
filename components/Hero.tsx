export default function Hero() {
  return (
    <section className="mb-16 md:mb-20">
      <p className="text-xs font-semibold tracking-widest uppercase text-brand-muted mb-8">
        Divergent Networks
      </p>
      <div className="border-l-2 border-brand-accent-dim pl-6">
        <p className="text-xs font-semibold tracking-widest uppercase text-brand-accent mb-3">
          Principal Research Technologist
        </p>
        <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-brand-text">
          Troy Effner
        </h1>
      </div>
      <p className="mt-8 text-lg leading-relaxed text-brand-text opacity-85 max-w-[560px]">
        I design research systems that pull users directly into the conversation
        — as actors with real jobs and decisions, not data points to be
        summarized. Users are stakeholders. The work treats them that way.
      </p>
    </section>
  );
}
