import Link from "next/link";

const branches = [
  {
    name: "Research Infrastructure",
    description:
      "Building the systems that make understanding repeatable. Interview protocols, synthesis patterns, stakeholder narrative frameworks, evidence architectures. The infrastructure survives after the project ends.",
  },
  {
    name: "Applied Research",
    description:
      "Entering the field where understanding meets the person. Rapid qualitative methods, stakeholder interviews, decision-theater facilitation, evidence-based go-to-market.",
  },
];

const products = {
  live: [
    {
      slug: "homeground",
      name: "Home Ground",
      tagline: "Personal decision toolkit for home buyers",
      url: "https://livability-alpha.vercel.app",
    },
    {
      slug: "smallbiz",
      name: "Small Biz Operator",
      tagline: "Workflow tools for how operators actually make daily decisions",
      url: "https://smallbiz-peach.vercel.app",
    },
    {
      slug: "commons",
      name: "The Commons",
      tagline:
        "Hyperlocal community information discovered, curated, and governed fairly",
      url: "https://uticacommunityboard.vercel.app",
    },
  ],
  concept: [
    {
      slug: "tyfbaf",
      name: "tyfbaf",
      tagline: "Trust-based home swaps between friends",
    },
  ],
  seed: [
    {
      name: "SatButtons",
      tagline: "Opinionated outfit coordination tool",
    },
  ],
};

export default function Work() {
  return (
    <section className="mb-16">
      <div className="h-px bg-brand-border mb-10" />
      <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-muted mb-8">
        Work
      </h2>

      <div className="space-y-6 mb-10">
        {branches.map((branch) => (
          <div key={branch.name}>
            <h3 className="text-base font-semibold text-brand-text mb-2">
              {branch.name}
            </h3>
            <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-75">
              {branch.description}
            </p>
          </div>
        ))}
      </div>

      <h3 className="text-xs font-semibold tracking-widest uppercase text-brand-muted mb-4">
        Products
      </h3>

      <div className="space-y-4 mb-6">
        {products.live.map((p) => (
          <div
            key={p.slug}
            className="border border-brand-border rounded-lg p-5"
          >
            <div className="flex items-start justify-between gap-4">
              <div>
                <Link
                  href={`/work/${p.slug}`}
                  className="text-base font-semibold text-brand-text hover:text-brand-accent transition-colors duration-150"
                >
                  {p.name}
                </Link>
                <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-75 mt-1">
                  {p.tagline}
                </p>
              </div>
              <div className="flex items-center gap-3 shrink-0">
                <span className="text-xs text-brand-accent font-medium">
                  Live
                </span>
                <a
                  href={p.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm font-medium text-brand-accent border-b border-brand-accent-dim pb-px transition-colors duration-150 hover:text-brand-text hover:border-brand-muted"
                >
                  Visit
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="space-y-4 mb-6">
        {products.concept.map((p) => (
          <div
            key={p.slug}
            className="border border-brand-border rounded-lg p-5 opacity-80"
          >
            <Link
              href={`/work/${p.slug}`}
              className="text-base font-semibold text-brand-text hover:text-brand-accent transition-colors duration-150"
            >
              {p.name}
            </Link>
            <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-75 mt-1">
              {p.tagline}
            </p>
            <span className="text-xs text-brand-muted mt-2 inline-block">
              Concept
            </span>
          </div>
        ))}
      </div>

      <div className="space-y-4">
        {products.seed.map((p) => (
          <div
            key={p.name}
            className="border border-dashed border-brand-border rounded-lg p-5 opacity-60"
          >
            <h4 className="text-base font-semibold text-brand-text">
              {p.name}
            </h4>
            <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-75 mt-1">
              {p.tagline}
            </p>
            <span className="text-xs text-brand-muted mt-2 inline-block">
              Seed
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}
