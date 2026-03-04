const cases = [
  {
    label: "SaaS / Research Practice",
    description:
      "Rebuilt a mid-size SaaS company's research practice from the ground up. Reduced time-to-insight from six weeks to five days.",
  },
  {
    label: "Fintech / Product Strategy",
    description:
      "Designed a jobs-to-be-done framework for a fintech product team. Became the decision-making foundation for three consecutive product cycles.",
  },
  {
    label: "Healthcare / Go-to-Market",
    description:
      "Led concept validation for an early-stage healthcare platform. Identified the right actor in two sessions, reshaping the entire go-to-market approach.",
  },
];

export default function Work() {
  return (
    <section className="mb-16 md:mb-20">
      <div className="h-px bg-brand-border mb-10" />
      <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-muted mb-8">
        Selected work
      </h2>
      <div className="space-y-6">
        {cases.map((item) => (
          <div
            key={item.label}
            className="border border-brand-border rounded-lg p-5"
          >
            <p className="text-xs font-semibold tracking-wider uppercase text-brand-accent mb-2">
              {item.label}
            </p>
            <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-75">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
