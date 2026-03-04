const beliefs = [
  {
    statement: "Users are the most under-leveraged stakeholder in product decisions.",
    expansion:
      "Not because organizations don't care — because they've never been pulled into the conversation as actors with real jobs, constraints, and decisions of their own.",
  },
  {
    statement: "The narrative is not a deliverable. It's the bridge.",
    expansion:
      "Between what users actually do and what stakeholders need to decide. Without it, the best research in the world stays in a deck.",
  },
  {
    statement: "A hypothesis is not an insight. Evidence is required.",
    expansion:
      "The work isn't done until the evidence has been found and reconciled against what you believed before you started.",
  },
  {
    statement: "Research should compound.",
    expansion:
      "Every study should make the next one faster, sharper, and more connected to what actually happened before. One-off projects are a waste of what you learned.",
  },
  {
    statement: "The right actor, the right question, the right circumstance.",
    expansion:
      "That's the protocol. Context is not noise — it's the data. Everything else is overhead.",
  },
];

export default function Philosophy() {
  return (
    <section className="mb-16 md:mb-20">
      <div className="h-px bg-brand-border mb-10" />
      <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-muted mb-8">
        How I think
      </h2>
      <div className="space-y-8">
        {beliefs.map((b) => (
          <div key={b.statement}>
            <p className="text-base font-semibold text-brand-text mb-1.5">
              {b.statement}
            </p>
            <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-75">
              {b.expansion}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
