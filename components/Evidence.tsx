const returns = [
  {
    label: "SaaS / Research Practice",
    before:
      "Research happened on a per-project basis with no shared protocols. Each study started from scratch. Findings arrived after decisions had already been made.",
    changed:
      "Designed and installed a repeatable research infrastructure: standardized interview guides, a synthesis pattern that produced usable artifacts within 48 hours, and a stakeholder narrative framework that connected research output to product planning.",
    possible:
      "The team now runs its own research cycles without external support. Each round starts from the compressed knowledge of the previous rounds, not from blank assumptions.",
  },
  {
    label: "Fintech / Product Strategy",
    before:
      "Feature priorities were set by competitive benchmarking. The product team had market data and usage analytics but no direct signal on how people actually made financial decisions in their own context.",
    changed:
      "Conducted a jobs-to-be-done study grounded in direct interviews with users navigating real financial decisions. The research surfaced three decision patterns that usage data had obscured.",
    possible:
      "Roadmap restructured around decision moments rather than feature parity. Three planned features deprioritized. Two new product directions emerged from patterns that competitive analysis could not have surfaced.",
  },
  {
    label: "Healthcare / Go-to-Market",
    before:
      "Go-to-market messaging was built from the internal team's understanding of the buyer. Early campaigns produced engagement but no pipeline movement.",
    changed:
      "Ran rapid qualitative sessions with actual purchasing decision-makers. The primary constraint buyers reported was entirely different from what the team had assumed. Repositioned the narrative around the constraint buyers actually faced.",
    possible:
      "Pipeline moved within six weeks of the messaging shift. The organization now pressure-tests its own assumptions with direct buyer contact before building campaigns.",
  },
];

export default function Evidence() {
  return (
    <section className="mb-16">
      <div className="h-px bg-brand-border mb-10" />
      <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-muted mb-8">
        Evidence
      </h2>

      <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-85 mb-8">
        Client stories as return markers. What was the state before. What
        changed through contact with the method. What became possible.
      </p>

      <div className="space-y-8">
        {returns.map((r) => (
          <div
            key={r.label}
            className="border border-brand-border rounded-lg p-5"
          >
            <h3 className="text-base font-semibold text-brand-text mb-4">
              {r.label}
            </h3>

            <div className="space-y-3">
              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-brand-muted">
                  Before
                </span>
                <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-75 mt-1">
                  {r.before}
                </p>
              </div>

              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-brand-accent">
                  What changed
                </span>
                <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-75 mt-1">
                  {r.changed}
                </p>
              </div>

              <div>
                <span className="text-xs font-semibold tracking-widest uppercase text-brand-muted">
                  What became possible
                </span>
                <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-75 mt-1">
                  {r.possible}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
