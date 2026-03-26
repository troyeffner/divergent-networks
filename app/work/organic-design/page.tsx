import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Organic Design — Divergent Networks",
  description:
    "A methodology for research, product design, and stakeholder decision-making built on interviews, field studies, and direct stakeholder contact.",
};

interface Component {
  name: string;
  description: string;
  example: string;
}

const components: Component[] = [
  {
    name: "Research Infrastructure",
    description:
      "Interview protocols, synthesis templates, stakeholder frameworks, and structured finding repositories that persist after the project ends. Each study builds on what previous rounds already produced rather than starting from a blank research plan.",
    example:
      "In practice: a standardized interview guide, a 48-hour synthesis workflow, and a tagged finding repository that the team can query when making product decisions months later.",
  },
  {
    name: "Applied Research",
    description:
      "Qualitative interviews, stakeholder sessions, decision facilitation, and evidence-based go-to-market. This is where the method meets the person. Every engagement traces how people actually experience problems before proposing solutions.",
    example:
      "In practice: interviewing home buyers to discover that affordability, sustainability, and life fit are three separate questions, then structuring a product around that separation.",
  },
  {
    name: "Structured Work Distribution",
    description:
      "A system for dividing work into self-contained packets where each packet carries the context, references, and decision criteria needed to complete it. Work divides across people and teams without losing the knowledge that informed it.",
    example:
      "In practice: instead of a Jira ticket that says \"build onboarding flow,\" a work packet that includes the relevant research findings, the design constraints those findings produced, the specific user need it addresses, and the acceptance criteria. Anyone picking it up has what they need to make good decisions, not just a task description.",
  },
];

interface Principle {
  name: string;
  subtitle: string;
  description: string;
  example: string;
}

const principles: Principle[] = [
  {
    name: "Multi-Perspective Research",
    subtitle: "Formerly: Coordination Field",
    description:
      "The unit of analysis in any research engagement is not the individual user. It is the space where multiple perspectives on the same problem meet. A home buyer, a real estate agent, and a lender each hold part of the picture. Research designed to surface one perspective at a time misses the interactions between them.",
    example:
      "In practice: running structured sessions where different stakeholders respond to the same scenarios, then synthesizing across their accounts to find where their experiences diverge. That divergence is where the real product opportunity lives.",
  },
  {
    name: "Users as Decision-Makers",
    subtitle: "Not just research subjects",
    description:
      "Users hold governing weight in the product. They tag, vote, curate, and shape what the product becomes through direct participation. Their input does not stop at the research phase. It is built into the product as an ongoing feedback mechanism.",
    example:
      "In practice: in The Commons, community members vote on how local information is categorized and surfaced. Their curation decisions directly shape what other residents see. The product learns from use, not just from research about use.",
  },
  {
    name: "Governance as Design",
    subtitle: "Fairness is a design constraint, not a policy layer",
    description:
      "Moderation rules, content curation logic, and community structure are designed as core product surfaces from the start. They are not added when problems appear. How a product handles conflict, abuse, and edge cases is as much a design decision as the interface layout.",
    example:
      "In practice: before writing any UI code for The Commons, we designed the moderation model: who can flag content, how disputes are resolved, what constitutes removal vs. de-ranking. These decisions shaped the data model and the interface.",
  },
  {
    name: "Two Participant Types",
    subtitle: "Lived experience and professional expertise",
    description:
      "Every product is informed by two distinct groups: people who directly experience the problem (a renter navigating housing, an operator running a business) and people with professional expertise in the domain (agents, advisors, industry specialists). Both contribute real knowledge. Neither replaces the other.",
    example:
      "In practice: for Home Ground, we interview both first-time buyers navigating affordability and mortgage professionals who see patterns across hundreds of transactions. The buyer knows what it feels like. The professional knows what typically goes wrong. The product needs both.",
  },
  {
    name: "Low-Barrier Participation",
    subtitle: "Trust first, moderate structurally",
    description:
      "Participation does not require identity disclosure or credential verification upfront. The system extends access by default and manages misuse through rate limiting, content flagging, and structural constraints rather than gatekeeping who gets in. This lowers the barrier for the people whose perspectives are most often excluded.",
    example:
      "In practice: anyone can post to The Commons without creating an account. Abuse is managed through post rate limits, community flagging, and geographic scoping rather than identity verification. Moderation scales through structure, not through requiring people to prove who they are.",
  },
  {
    name: "Needs-Based Evaluation",
    subtitle: "Products measured against human needs, not feature lists",
    description:
      "Product decisions are evaluated against ten core human needs organized into four families: relational (connection, acceptance, care, honesty), orientation (awareness, meaning), agency (autonomy, play), and regulation (peace, physical well-being). This framework catches when a product serves a feature request but misses the actual need behind it.",
    example:
      "In practice: a feature request for \"better search\" might trace back to an orientation need (awareness: \"I need to know what is happening near me\") or an agency need (autonomy: \"I need to find information on my own terms\"). The need determines the design direction. The feature request alone does not.",
  },
];

export default function OrganicDesignPage() {
  return (
    <main className="min-h-screen">
      <div className="max-w-[720px] mx-auto px-6 py-16 md:py-24">
        <Link
          href="/"
          className="text-sm text-brand-muted hover:text-brand-accent transition-colors duration-150 mb-8 inline-block"
        >
          &larr; Back
        </Link>

        <h1 className="text-2xl md:text-3xl font-bold text-brand-text mb-3">
          Organic Design
        </h1>
        <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-75 mb-4">
          A methodology for research, product design, and stakeholder
          decision-making. It builds on findings from interviews, field studies,
          and direct stakeholder contact, then structures those findings so each
          project starts from what previous rounds already learned.
        </p>

        <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-75 mb-6">
          The method uses a tree as its organizing metaphor. Raw observations
          and captures are <span className="text-brand-accent">ether</span>,
          the unprocessed material waiting to be traced. When findings are
          compressed into reusable knowledge, they
          become <span className="text-brand-accent">soil</span> that feeds new
          work. The <span className="text-brand-accent">trunk</span> is the
          operational surface: live projects, active decisions, and work in
          progress. <span className="text-brand-accent">Leaves</span> are what
          the world sees: products, case studies, published work. And where
          growth was blocked or a direction did not
          work, <span className="text-brand-accent">bark</span> forms as
          protective structure that strengthens the whole system. The four
          stages of the cycle follow this
          pattern: <em>Trace</em> captures what is alive, <em>Root</em> follows
          it to the deeper constraint, <em>Re-soil</em> feeds findings back
          into the team&#39;s working knowledge,
          and <em>Regrow</em> produces new directions from what the research
          revealed.
        </p>

        <div className="rounded-lg overflow-hidden border border-brand-border mb-6">
          <img
            src="/images/hero-organic-design.png"
            alt="Organic Design"
            className="w-full h-auto object-cover"
          />
        </div>

        <Link
          href="/connect"
          className="inline-block text-sm font-semibold text-brand-accent border-b border-brand-accent-dim pb-px transition-colors duration-150 hover:text-brand-text hover:border-brand-muted mb-8"
        >
          Work with me
        </Link>

        {/* The Cycle */}
        <div className="space-y-8">
          <div>
            <div className="h-px bg-brand-border mb-6" />
            <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-muted mb-4">
              The Cycle
            </h2>
            <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-85 mb-6">
              Every engagement moves through four stages. Each pass produces
              outputs that feed the next pass, so the research gets sharper and
              the product decisions get more grounded over time.
            </p>
            <div className="space-y-5">
              <div>
                <h3 className="text-sm font-semibold text-brand-text mb-2">
                  Trace
                </h3>
                <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-75">
                  Start where the person is. Observe what they actually do: the
                  behaviors, decisions, frustrations, and workarounds. Document
                  before interpreting.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-brand-text mb-2">
                  Root
                </h3>
                <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-75">
                  Follow the pattern to the real constraint. Not the surface
                  complaint or the feature request. The deeper need or
                  structural gap that produces the visible behavior.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-brand-text mb-2">
                  Re-soil
                </h3>
                <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-75">
                  Feed findings back into the team&#39;s working knowledge.
                  Structured research outputs enter roadmap discussions,
                  positioning decisions, and prioritization frameworks. The
                  organization can now see what it could not see before the
                  research.
                </p>
              </div>
              <div>
                <h3 className="text-sm font-semibold text-brand-text mb-2">
                  Regrow
                </h3>
                <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-75">
                  Act on what the research revealed. New product directions,
                  reprioritized features, revised positioning, or entirely new
                  problem framings emerge from what the team can now see. Three
                  planned features get deprioritized. Two new directions emerge
                  that competitive analysis could not have surfaced.
                </p>
              </div>
            </div>
          </div>

          {/* Components */}
          <div>
            <div className="h-px bg-brand-border mb-6" />
            <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-muted mb-4">
              Three Components
            </h2>
            <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-85 mb-6">
              Organic Design operates through three integrated components. Each
              one feeds the others: research infrastructure makes applied
              research repeatable, applied research produces the findings that
              work distribution packages, and work distribution generates
              structured feedback that strengthens the infrastructure.
            </p>
            <div className="space-y-6">
              {components.map((comp) => (
                <div key={comp.name}>
                  <h3 className="text-sm font-semibold text-brand-text mb-2">
                    {comp.name}
                  </h3>
                  <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-75 mb-2">
                    {comp.description}
                  </p>
                  <p className="text-[0.875rem] leading-relaxed text-brand-text opacity-55">
                    {comp.example}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Operating Principles */}
          <div>
            <div className="h-px bg-brand-border mb-6" />
            <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-muted mb-4">
              Operating Principles
            </h2>
            <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-85 mb-6">
              These commitments distinguish Organic Design from conventional
              research and product methodologies. Each one governs real
              decisions in how products get built and how teams operate.
            </p>
            <div className="space-y-6">
              {principles.map((p) => (
                <div key={p.name}>
                  <h3 className="text-sm font-semibold text-brand-text mb-1">
                    {p.name}
                  </h3>
                  <p className="text-xs text-brand-muted mb-2">
                    {p.subtitle}
                  </p>
                  <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-75 mb-2">
                    {p.description}
                  </p>
                  <p className="text-[0.875rem] leading-relaxed text-brand-text opacity-55">
                    {p.example}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Compounding */}
          <div>
            <div className="h-px bg-brand-border mb-6" />
            <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-muted mb-4">
              How It Compounds
            </h2>
            <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-85">
              Each engagement produces reusable research protocols, synthesis
              templates, and structured finding repositories alongside the
              project-specific insights. The next engagement starts from those
              assets rather than from zero. Interview guides get sharper.
              Synthesis gets faster. The team&#39;s ability to act on research
              findings improves with each cycle. This is not a consulting model
              where every project resets. It is an accumulation model where
              every project makes the next one stronger.
            </p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-border flex items-center justify-between">
          <Link
            href="/"
            className="text-sm text-brand-muted hover:text-brand-accent transition-colors duration-150"
          >
            &larr; All work
          </Link>
          <Link
            href="/connect"
            className="text-sm font-semibold text-brand-accent border-b border-brand-accent-dim pb-px transition-colors duration-150 hover:text-brand-text hover:border-brand-muted"
          >
            Work with me
          </Link>
        </div>
      </div>
    </main>
  );
}
