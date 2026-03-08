import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import type { Metadata } from "next";

const projects: Record<
  string,
  {
    name: string;
    tagline: string;
    opportunity: string;
    approach: string;
    outcomes: string[];
    stage: string[];
    future: string[];
    screenshotDesktop?: string;
    screenshotMobile?: string;
  }
> = {
  homeground: {
    name: "Home Ground",
    tagline:
      "A personal decision toolkit for the biggest purchase of your life.",
    opportunity:
      "Buying a home is one of the most consequential financial decisions a person makes — and most people navigate it with scattered tools, unclear trade-offs, and almost no reliable signal about what they can actually sustain. Mortgage calculators answer \"what can I qualify for?\" Real estate platforms answer \"what's available?\" Nobody answers the harder questions: can I sustain this month to month, and will this home support the life I want to live? The tools that exist serve the transaction. Nothing serves the decision.",
    approach:
      "Home Ground is built JTBD-first around three distinct questions that buyers conflate but shouldn't: What can I afford? What can I sustain? What supports the life I want? Each question gets its own card — a focused assessment that isolates one dimension of the decision. The Purchase Roof calculation establishes a ceiling based on real numbers, not lender maximums. Decision Rehearsal maps pressure scenarios — what happens to your monthly picture if rates shift, if income changes, if life costs adjust. Everything runs locally. No backend, no data collection. The tool serves the buyer, not the platform.",
    outcomes: [
      "Buyers see the full financial picture — not just qualification, but sustainability and livability as separate, visible dimensions",
      "Trade-offs between income, cash reserves, debt load, and lifestyle become clear before a purchase decision, not after",
      "Decision Rehearsal reveals how stable a purchase is under pressure — rate changes, income shifts, cost adjustments",
    ],
    stage: [
      "The research found that home buyers consistently conflate three distinct questions — affordability, sustainability, and livability — because every existing tool merges them into a single number. Separating them changes the decision.",
      "The three-card model is live as a working prototype: income qualification, upfront cash planning, and monthly sustainability each get their own assessment.",
      "Purchase Roof and Decision Rehearsal are actively testing with real buyer scenarios — first-time buyers, relocators, and people re-evaluating what \"affordable\" actually means for them.",
    ],
    future: [
      "A Liquidity Framework — mapping your full cash and asset position before, during, and after purchase to answer \"what does this do to my financial flexibility?\"",
      "Property-level comparison — extending the three-card model from personal assessment to side-by-side property evaluation",
      "Life-stage adaptation — testing whether the framework serves renters evaluating whether to buy, not just active buyers",
    ],
    screenshotDesktop: "/screenshots/homeground-desktop.png",
    screenshotMobile: "/screenshots/homeground-mobile.png",
  },
  smallbiz: {
    name: "Small Biz Operator",
    tagline:
      "Helping small businesses figure out what's actually broken — then build the skills to fix it.",
    opportunity:
      "The real dysfunction in small businesses isn't a technology problem — it's a people problem. Teams of 50 to 500 are large enough that communication breaks down, roles blur, and processes fracture, but too small to have an operations team diagnosing it. Leaders know something isn't working. They just can't name it precisely enough to act on it. Most business tools assume you already know the problem. Nobody helps you figure out what it actually is.",
    approach:
      "SmallBiz starts with diagnosis. A self-service tool walks leaders through four steps: discover what challenge areas are active, prioritize them on a pressure matrix, map where they compound, and generate a clear picture of what to address first. From there, the path moves to service — hands-on workshops that teach teams the communication and collaboration skills that make organizations actually work. The exercises are designed around real business friction, not abstract frameworks. Service design methodology, translated into the language of a 200-person company.",
    outcomes: [
      "Leaders can name their actual challenges instead of circling vague dysfunction",
      "Teams build practiced collaboration skills through structured exercises, not slide decks",
      "The diagnostic reveals where challenges compound — unclear roles plus handoff gaps equals work falling through cracks",
    ],
    stage: [
      "The research identified 10 distinct challenge areas that recur across small businesses — from alignment gaps to unclear roles to scaling pain. Each grounded in observable symptoms, not consulting jargon.",
      "The self-service diagnostic (\"Where to Start\") is live — four-step flow from discovery through prioritization to a compounding pattern map.",
      "In Practice workshops are actively delivering: communication and interpersonal skills training designed for teams who learn by doing, not by reading.",
    ],
    future: [
      "An Entrepreneur Story Alignment Sprint — helping founding teams of 2\u201312 clarify direction through narrative-driven coaching over three sessions",
      "Module promotion: when a service-led workshop pattern stabilizes, it becomes a self-service tool — the diagnostic path grows from practice evidence, not product roadmap assumptions",
      "Challenge taxonomy expansion — testing whether the 10 challenge areas map cleanly to businesses outside the 50\u2013500 range",
    ],
    screenshotDesktop: "/screenshots/smallbiz-desktop.png",
    screenshotMobile: "/screenshots/smallbiz-mobile.png",
  },
  tyfbaf: {
    name: "tyfbaf",
    tagline: "Free home swaps between friends — you travel, they stay. They travel, you stay.",
    opportunity:
      "Friends already swap homes. Someone's heading out of town, a friend needs a place to stay — it happens naturally. But the coordination is scattered across texts, group chats, and awkward asks. Marketplace platforms like Airbnb solved discovery for strangers, but they introduced money, reviews, and friction into something that used to be simple: a friend offering their place. There's no tool built around how friends actually share — free, trust-based, and mutual.",
    approach:
      "tyfbaf makes home swaps between friends easy. You're traveling? Mark your place available to your trust circles — small groups like your NYC friends, college crew, or work travel circle. Friends in those circles see your availability and can request a stay. You approve or decline. When they travel, the swap goes the other way. No money changes hands. No marketplace. Second-degree connections require explicit permission — your friend can introduce their friend to the circle, but only if you grant it. Blocks work at the user level, so you always control who sees your home.",
    outcomes: [
      "Friends swap homes freely — you travel, they stay at yours, and vice versa",
      "Trust circles keep it between people you actually know, not strangers on a platform",
      "Second-degree introductions expand your options without breaking trust boundaries",
      "No money, no reviews, no marketplace friction — just friends coordinating stays",
    ],
    stage: [
      "The research identified four distinct actors: the Frequent Travel Host who has an empty home regularly, the Trusted Guest looking for stays through real relationships, the Bridge Friend who connects people across circles, and the Boundary-First Member who needs user-level blocks within shared groups.",
      "Concept formation and test plan design are in progress — validating whether trust circles make free home swaps between friends easier and more comfortable than marketplace alternatives, with explicit success and failure thresholds before any production build.",
      "The core hypothesis is under test: if friends can see each other's travel windows and swap homes through trust-scoped circles, they'll do it more often and with more comfort than any platform built for strangers.",
    ],
    future: [
      "A concept test with 10 participants across all four personas — measuring trust comfort, circle comprehension, and willingness to swap for a real 3–14 day travel window",
      "Metaphor validation — testing whether the multi-circle model (NYC, College, Work) reduces swap anxiety or increases management burden compared to a single friend list",
      "If demand signal is validated: a test-ready prototype with circle management, availability publishing, swap request/approval flow, and notification-only coordination",
    ],
  },
  commons: {
    name: "The Commons",
    tagline:
      "Making hyperlocal community information discoverable, curated, and fair.",
    opportunity:
      "Physical community boards — in cafes, community centers, transit stations — remain the most hyperlocal source of what's happening in a neighborhood. But they're fragmented, ephemeral, and undiscoverable. Most people never see them. Existing tools like Nextdoor and Eventbrite operate at city scale and miss the micro-community level where real gatherings happen. For community organizers, the effort of putting up posters reaches almost nobody. For residents, it's invisible serendipity — events you'd attend if you knew they existed. The information exists. Nobody's made it findable.",
    approach:
      "The Commons starts with photos, not forms. Contributors photograph real community boards and pin items directly on the image — creating a spatial anchor grounded in real-world context. Community builders curate, tag, and publish these items into a searchable public feed filtered by neighborhood. The product is designed JTBD-first: three actor types (viewers, submitters, builders), six primary jobs, and every interaction mapped to explicit desired outcomes. Active hypotheses guide product decisions — including a fairness filter model and a venue discovery framework — each with testable metrics and fail conditions.",
    outcomes: [
      "Residents discover relevant hyperlocal events they would otherwise miss",
      "Community organizers reach beyond the physical board's foot traffic",
      "Metadata integrity means times, locations, and details are accurate and consistent",
      "Fairness governance ensures ranking reflects community values, not algorithms",
    ],
    stage: [
      "The research found that community information exists in a discovery gap: physical boards are hyperlocal but invisible at scale, while digital platforms are discoverable but miss the micro-community level. The opportunity sits in the gap between the two.",
      "The Community Board feature is live — photo-native submissions, pin-based curation, six routes active (discover, submit, browse, view, draft, curate). Supabase backend with poster uploads working.",
      "A strict release gate is enforcing quality before public launch: schema parity, vocabulary lock, and CTA canonical mapping must pass. Hypothesis testing follows immediately.",
    ],
    future: [
      "A Fairness Framework — testing whether algorithmic ranking can reflect community values instead of engagement metrics, with explicit fail conditions",
      "Venue Discovery — extending from event listings to a persistent neighborhood venue graph that grows from curated board data",
      "Photo-native evidence beyond community boards — testing whether the pin-and-curate model works for other hyperlocal information surfaces",
    ],
    screenshotDesktop: "/screenshots/commons-desktop.png",
    screenshotMobile: "/screenshots/commons-mobile.png",
  },
  ndd: {
    name: "Narrative Driven Design",
    tagline: "The intelligence layer that makes research compound.",
    opportunity:
      "Research doesn't compound in most organizations. Every project starts from scratch. Insights get written in decks that get filed away. The frameworks from one study never inform the next. Worse, the workforce doing the research — the people running studies, synthesizing evidence, making calls — operates without structured coordination. The knowledge scatters. The people scatter. The opportunity: build research infrastructure that accumulates intelligence and coordinates the workforce over time — where each study makes the next one faster, deeper, and more connected to what actually happened before.",
    approach:
      "NDD is a structured system for storing, linking, and acting on research — assumptions, hypotheses, experiments, evidence, and reconciled insights. But it's more than a knowledge store. The Workflow Builder layer adds workforce coordination: threads that organize research arcs, fractional chunks that distribute work across specialists, practitioner profiles that match capability to task, and routing intelligence that moves work to the right person at the right time. Every Divergent Networks product starts as an NDD instance — a structured set of assumptions and hypotheses about a specific actor population, with the workforce methodology to investigate them.",
    outcomes: [
      "Research intelligence compounds — each study builds on the last instead of starting from scratch",
      "Hypotheses are explicitly tracked from assumption through evidence to reconciled insight",
      "The Workflow Builder coordinates who does what — matching research tasks to specialist capability",
      "The methodology is transferable — NDD instances can be spun up for any research domain",
    ],
    stage: [
      "The core research schema is complete — assumptions, hypotheses, experiments, evidence, and reconciled insights form a linked graph that every Divergent Networks product builds on.",
      "The Workflow Builder is in active development: thread management, fractional work routing, and practitioner coordination are being tested against real project workflows.",
      "Every product in the portfolio has a traceable research lineage back to its NDD instance — Home Ground, Small Biz Operator, The Commons, and tyfbaf all run on NDD.",
    ],
    future: [
      "Cross-project pattern extraction — testing whether NDD can surface research patterns that recur across unrelated domains",
      "Self-hosted deployment — packaging NDD as infrastructure any research team can run, not just Divergent Networks",
      "Workforce intelligence — the routing layer learns from assignment patterns, building a capability graph that improves work distribution over time",
    ],
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
          <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-brand-text mb-4">
            {project.name}
          </h1>
          <p className="text-lg leading-relaxed text-brand-text opacity-85">
            {project.tagline}
          </p>
        </section>

        {/* Screenshots */}
        {(project.screenshotDesktop || project.screenshotMobile) && (
          <section className="mb-12">
            <div className="flex gap-4 items-start">
              {project.screenshotDesktop && (
                <div className="flex-1 min-w-0">
                  <div className="rounded-lg overflow-hidden border border-brand-border">
                    <Image
                      src={project.screenshotDesktop}
                      alt={`${project.name} — desktop`}
                      width={1280}
                      height={900}
                      className="w-full h-auto object-cover object-top"
                      unoptimized
                    />
                  </div>
                  <p className="text-[0.6875rem] text-brand-muted mt-2 text-center">
                    Desktop
                  </p>
                </div>
              )}
              {project.screenshotMobile && (
                <div className="w-[120px] md:w-[160px] shrink-0">
                  <div className="rounded-lg overflow-hidden border border-brand-border">
                    <Image
                      src={project.screenshotMobile}
                      alt={`${project.name} — mobile`}
                      width={390}
                      height={844}
                      className="w-full h-auto"
                      unoptimized
                    />
                  </div>
                  <p className="text-[0.6875rem] text-brand-muted mt-2 text-center">
                    Mobile
                  </p>
                </div>
              )}
            </div>
          </section>
        )}

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

        {/* Where This Is Now */}
        <section className="mb-12">
          <div className="h-px bg-brand-border mb-8" />
          <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-muted mb-4">
            Where This Is Now
          </h2>
          <ul className="space-y-3">
            {project.stage.map((narrative, i) => (
              <li key={i} className="flex gap-3 items-start">
                <span className="text-brand-accent-dim mt-1 shrink-0">—</span>
                <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-75">
                  {narrative}
                </p>
              </li>
            ))}
          </ul>
        </section>

        {/* Where Is This Going */}
        {project.future.length > 0 && (
          <section className="mb-16">
            <div className="h-px bg-brand-border mb-8" />
            <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-muted mb-4">
              Where Is This Going
            </h2>
            <ul className="space-y-3">
              {project.future.map((narrative, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-brand-muted mt-1 shrink-0">—</span>
                  <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-60 italic">
                    {narrative}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        )}

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
