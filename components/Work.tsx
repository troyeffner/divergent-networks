import Link from "next/link";

const liveProducts = [
  {
    slug: "homeground",
    name: "Home Ground",
    description:
      "A personal decision toolkit for home buyers — built around three questions nobody else separates: what can I afford, what can I sustain, and what supports the life I want?",
    liveUrl: "https://livability-alpha.vercel.app",
    hasDetailPage: true,
  },
  {
    slug: "smallbiz",
    name: "Small Biz Operator",
    description:
      "Workflow tools designed around how small business operators actually make daily decisions — not how accounting software thinks they do.",
    liveUrl: "https://smallbiz-peach.vercel.app",
    hasDetailPage: true,
  },
  {
    slug: "commons",
    name: "The Commons",
    description:
      "Hyperlocal community information — discovered, curated, and governed fairly. Starting with photo-native community boards.",
    liveUrl: "https://uticacommunityboard.vercel.app",
    hasDetailPage: true,
  },
];

const conceptProducts = [
  {
    slug: "ndd",
    name: "Narrative Driven Design",
    description:
      "Research infrastructure that accumulates intelligence and coordinates the workforce — the backbone of every Divergent Networks product.",
  },
  {
    slug: "tyfbaf",
    name: "tyfbaf",
    description:
      "Free home swaps between friends — you travel, they stay at yours, and vice versa. Trust circles, not marketplaces.",
  },
];

const seedProducts = [
  {
    name: "Color Coordination",
    description:
      "An opinionated tool for choosing outfits that actually coordinate — built around color theory and what you already own, not another app that guesses.",
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

export default function Work() {
  return (
    <section className="mb-16 md:mb-20">
      <div className="h-px bg-brand-border mb-10" />

      {/* Product Portfolio */}
      <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-muted mb-8">
        Product Portfolio
      </h2>

      {/* Live */}
      <p className="text-xs font-semibold tracking-wider uppercase text-brand-accent mb-4">
        Live
      </p>
      <div className="space-y-3 mb-10">
        {liveProducts.map((p) => (
          <div key={p.slug} className="border border-brand-border rounded-lg p-5">
            <div className="flex items-baseline justify-between gap-3 mb-1">
              {p.hasDetailPage ? (
                <Link
                  href={`/work/${p.slug}`}
                  className="text-base font-semibold text-brand-text hover:text-brand-accent transition-colors duration-150"
                >
                  {p.name}
                </Link>
              ) : (
                <h3 className="text-base font-semibold text-brand-text">{p.name}</h3>
              )}
              <a
                href={p.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-medium text-brand-accent hover:text-brand-text transition-colors duration-150 shrink-0"
              >
                View live ↗
              </a>
            </div>
            {p.hasDetailPage ? (
              <Link href={`/work/${p.slug}`} className="block">
                <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-75">
                  {p.description}
                </p>
              </Link>
            ) : (
              <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-75">
                {p.description}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Concept */}
      <p className="text-xs font-semibold tracking-wider uppercase text-brand-muted mb-4">
        Concept
      </p>
      <div className="space-y-3 mb-10">
        {conceptProducts.map((p) => (
          <Link
            key={p.slug}
            href={`/work/${p.slug}`}
            className="group block border border-brand-border rounded-lg p-5 transition-colors duration-150 hover:border-brand-accent-dim"
          >
            <h3 className="text-base font-semibold text-brand-text mb-1 group-hover:text-brand-accent transition-colors duration-150">
              {p.name}
            </h3>
            <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-75">
              {p.description}
            </p>
          </Link>
        ))}
      </div>

      {/* Seeds */}
      <p className="text-xs font-semibold tracking-wider uppercase text-brand-muted mb-4">
        Seeds
      </p>
      <div className="space-y-3 mb-14">
        {seedProducts.map((p) => (
          <div
            key={p.name}
            className="border border-brand-border border-dashed rounded-lg p-5 opacity-60"
          >
            <h3 className="text-base font-semibold text-brand-text mb-1">{p.name}</h3>
            <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-75">
              {p.description}
            </p>
          </div>
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
