import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const projects: Record<
  string,
  {
    name: string;
    category: string;
    status: string;
    tagline: string;
    opportunity: string;
    approach: string;
    outcomes: string[];
    stage: string;
  }
> = {
  livability: {
    name: "Livability",
    category: "Research Platform",
    status: "Concept Validation",
    tagline: "Rethinking how people find places to live.",
    opportunity:
      "The rental market is designed around what landlords want to show, not what tenants actually need to know. Most people make one of their most consequential decisions — where they live — with almost no reliable signal about what the experience will actually be like. The research question: what does 'a good place to live' actually mean, for different types of renters in different life stages?",
    approach:
      "Livability is built JTBD-first. Instead of starting with a marketplace model, we started with the actor: who is making this decision, what job are they trying to do, and what information would actually change the outcome? The concept validation phase is focused on mapping those actor jobs before building anything.",
    outcomes: [
      "Tenants can accurately predict whether a place will meet their actual needs — not just their stated preferences",
      "The research methodology transfers to other high-stakes living decisions",
      "The platform creates signal that improves over time as more actors use it",
    ],
    stage:
      "Concept validation — actor jobs are being mapped. No product built yet. The research question is the product.",
  },
  smallbiz: {
    name: "Small Biz Operator",
    category: "Self-Service Tools",
    status: "In Development",
    tagline: "Workflow tools built around how operators actually work.",
    opportunity:
      "Small business operators are over-tooled and under-served. They have accounting software, CRMs, scheduling tools — none of which were designed around the actual cognitive work of running a small business. The real job: making dozens of small operational decisions every day, under time pressure, with incomplete information. That job is almost entirely invisible in the software they use.",
    approach:
      "The design starts from the operator's decision-making patterns, not from accounting categories or CRM pipeline stages. The framework: what decisions does an operator make in a given week, what information would change those decisions, and how do we surface that information at the moment of the decision — not after the fact.",
    outcomes: [
      "Operators spend less time reconstructing context before each decision",
      "Workflows adapt to how the operator actually works, not how the software assumes they do",
      "The tool generates understanding of the operator's business over time",
    ],
    stage:
      "In development — workflow builder spec is complete. Building the first operator-facing interface.",
  },
  tyfbaf: {
    name: "tyfbaf",
    category: "Trust Platform",
    status: "In Development",
    tagline: "A platform for boundaries in digital relationships.",
    opportunity:
      "Most digital platforms treat trust as binary — you either let someone in or you don't. But trust in real relationships is contextual, layered, and changes over time. The research insight: people have sophisticated mental models of trust circles, but no tools that match that sophistication. The result is either over-exposure or complete cutoff — with no middle ground.",
    approach:
      "tyfbaf is designed around the trust circle model: concentric rings of access that map to real relationship types. The platform gives people explicit control over what different people can see and do, in a way that matches how they already think about their relationships — not how most privacy settings work.",
    outcomes: [
      "People can represent their real relationship structures digitally without over-simplifying",
      "The platform reduces both over-exposure and social isolation",
      "Trust boundaries are portable — not locked into any one platform",
    ],
    stage:
      "In development — NDD visibility pilot active. Trust circles model in progress.",
  },
  ffa: {
    name: "Narrative Driven Design",
    category: "Research Infrastructure",
    status: "Active",
    tagline: "The intelligence layer that makes research compound.",
    opportunity:
      "Research doesn't compound in most organizations. Every project starts from scratch. Insights are written in decks that get filed away. The frameworks used in one project never inform the next. The opportunity: build research infrastructure that accumulates intelligence over time — where each study makes the next one faster, deeper, and more connected to what actually happened before.",
    approach:
      "Narrative Driven Design is a structured system for storing, linking, and acting on research — assumptions, hypotheses, experiments, evidence, and reconciled insights — alongside the workforce methodology needed to run rapid research at scale. It's the backbone of every Divergent Networks product. Every product we build starts as an NDD instance: a structured set of assumptions and hypotheses about a specific actor population.",
    outcomes: [
      "Research intelligence compounds — each study builds on the last",
      "Hypotheses are explicitly tracked from assumption to evidence to reconciled insight",
      "The methodology is transferable — NDD instances can be spun up for any research domain",
      "Every Divergent Networks product has a traceable research lineage",
    ],
    stage:
      "Active — schema complete, front end in design. Powers all Divergent Networks products.",
  },
};

export async function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) return {};
  return {
    title: `${project.name} — Divergent Networks`,
    description: project.tagline,
  };
}

export default async function ProjectPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = projects[slug];
  if (!project) notFound();

  return (
    <main className="min-h-screen">
      <div className="max-w-[720px] mx-auto px-6 py-16 md:py-24">
        {/* Back */}
        <Link
          href="/"
          className="inline-flex items-center gap-1.5 text-xs font-medium text-brand-muted hover:text-brand-text transition-colors duration-150 mb-12"
        >
          <span>←</span>
          <span>Divergent Networks</span>
        </Link>

        {/* Header */}
        <section className="mb-14">
          <p className="text-xs font-semibold tracking-widest uppercase text-brand-muted mb-3">
            {project.category}
          </p>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-brand-text mb-4">
            {project.name}
          </h1>
          <p className="text-lg leading-relaxed text-brand-text opacity-85">
            {project.tagline}
          </p>
        </section>

        {/* Opportunity */}
        <section className="mb-12">
          <div className="h-px bg-brand-border mb-8" />
          <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-muted mb-4">
            The Opportunity
          </h2>
          <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-75">
            {project.opportunity}
          </p>
        </section>

        {/* Approach */}
        <section className="mb-12">
          <div className="h-px bg-brand-border mb-8" />
          <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-muted mb-4">
            The Approach
          </h2>
          <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-75">
            {project.approach}
          </p>
        </section>

        {/* Desired Outcomes */}
        <section className="mb-12">
          <div className="h-px bg-brand-border mb-8" />
          <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-muted mb-4">
            Desired Outcomes
          </h2>
          <ul className="space-y-3">
            {project.outcomes.map((outcome, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="text-brand-accent-dim mt-1 shrink-0">—</span>
                <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-75">
                  {outcome}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Stage */}
        <section className="mb-16">
          <div className="h-px bg-brand-border mb-8" />
          <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-muted mb-4">
            Current Stage
          </h2>
          <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-75">
            {project.stage}
          </p>
        </section>

        {/* CTA */}
        <section className="mb-16">
          <div className="h-px bg-brand-border mb-8" />
          <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-muted mb-4">
            Interested?
          </h2>
          <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-75 mb-5">
            If this work connects with what you're building or thinking about,
            reach out.
          </p>
          <a
            href="mailto:troy@divergent-networks.com"
            className="inline-block text-sm font-medium text-brand-accent border-b border-brand-accent-dim pb-px transition-colors duration-150 hover:text-brand-text hover:border-brand-muted"
          >
            troy@divergent-networks.com
          </a>
        </section>

        {/* Footer */}
        <footer className="pt-8 border-t border-brand-border">
          <p className="text-xs text-brand-muted opacity-50">
            © 2026 Divergent Networks
          </p>
        </footer>
      </div>
    </main>
  );
}
