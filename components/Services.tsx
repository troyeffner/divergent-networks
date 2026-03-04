const services = [
  {
    title: "Research Systems Design",
    description:
      "I build the infrastructure great research actually needs. Frameworks, synthesis methods, and tools tailored to how insight actually happens in your organization — not the generic way it's taught.",
  },
  {
    title: "Rapid Qualitative Methods",
    description:
      "Deep understanding without the timeline tax. Custom protocols that surface real actor jobs and decisions in days, not months.",
  },
  {
    title: "Strategic Advisory",
    description:
      "Pattern recognition across real actors, real jobs, and real decisions. I help organizations stop guessing and start grounding strategy in what's actually true.",
  },
];

export default function Services() {
  return (
    <section className="mb-16 md:mb-20">
      <div className="h-px bg-brand-border mb-10" />
      <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-muted mb-8">
        What I do
      </h2>
      <div className="space-y-8">
        {services.map((service) => (
          <div key={service.title}>
            <h3 className="text-base font-semibold text-brand-text mb-2">
              {service.title}
            </h3>
            <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-75">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
