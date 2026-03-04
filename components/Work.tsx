import Link from "next/link";

const products = [
  {
    slug: "livability",
    name: "Livability",
    category: "Research Platform",
    description:
      "Rethinking how people find places to live — built around what tenants actually need, not what listing platforms assume.",
    status: "Concept Validation",
  },
  {
    slug: "smallbiz",
    name: "Small Biz Operator",
    category: "Self-Service Tools",
    description:
      "Workflow tools designed around how small business operators actually make daily decisions — not how accounting software thinks they do.",
    status: "In Development",
  },
  {
    slug: "tyfbaf",
    name: "tyfbaf",
    category: "Trust Platform",
    description:
      "A platform for setting and communicating boundaries in digital relationships. Built from research into how trust is contextual, not binary.",
    status: "In Development",
  },
  {
    slug: "ffa",
    name: "FFA Research Platform",
    category: "Research Infrastructure",
    description:
      "The intelligence layer that powers every Divergent Networks product — a framework for accumulating, reconciling, and acting on research across time and teams.",
    status: "Active",
  },
];

const clientWork = [
  {
    label: "SaaS / Research Practice",
    description:
      "Rebuilt a mid-size SaaS company's research practice from the ground up. Reduced time-to-insight from six weeks to five days.",
  },
  {
    label: "Fintech / Product Strategy",
    description:
      "Designed a JTBD framework for a fintech product team. Became the decision-making foundation for three consecutive product cycles.",
  },
  {
    label: "Healthcare / Go-to-Market",
    description:
      "Led concept validation for an early-stage healthcare platform. Identified the right actor in two sessions, reshaping the entire go-to-market approach.",
  },
];

const statusColors: Record<string, string> = {
  "Concept Validation": "text-brand-muted",
  "In Development": "text-brand-accent",
  Active: "text-brand-accent",
};

export default function Work() {
  return (
    <section className="mb-16 md:mb-20">
      <div className="h-px bg-brand-border mb-10" />

      {/* Products */}
      <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-muted mb-8">
        Products
      </h2>
      <div className="space-y-3 mb-14">
        {products.map((p) => (
          <Link
            key={p.slug}
            href={`/work/${p.slug}`}
            className="group block border border-brand-border rounded-lg p-5 transition-colors duration-150 hover:border-brand-accent-dim"
          >
            <div className="flex items-start justify-between gap-4 mb-2">
              <div>
                <span className="text-xs font-semibold tracking-wider uppercase text-brand-muted mr-3">
                  {p.category}
                </span>
              </div>
              <span
                className={`text-xs font-medium shrink-0 ${statusColors[p.status] ?? "text-brand-muted"}`}
              >
                {p.status}
              </span>
            </div>
            <h3 className="text-base font-semibold text-brand-text mb-1 group-hover:text-brand-accent transition-colors duration-150">
              {p.name}
            </h3>
            <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-75">
              {p.description}
            </p>
          </Link>
        ))}
      </div>

      {/* Client Work */}
      <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-muted mb-8">
        Client Work
      </h2>
      <div className="space-y-6">
        {clientWork.map((item) => (
          <div key={item.label}>
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
