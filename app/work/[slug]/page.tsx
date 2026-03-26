import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";

interface Framework {
  name: string;
  samples: string[];
  pending?: boolean;
}

interface Project {
  name: string;
  tagline: string;
  stage?: "live" | "concept" | "seed";
  heroImage?: string;
  opportunity: string;
  approach: string;
  frameworks: Framework[];
  whatsNext: string;
  biggerVision?: string;
}

const projects: Record<string, Project> = {
  homeground: {
    name: "Home Ground: Home Purchase",
    tagline: "Personal decision toolkit for home buyers",
    heroImage: "/images/hero-homeground.png",
    opportunity:
      "Three questions nobody else separates: what can I afford, what can I sustain, and what supports the life I want? Home buying tools treat the transaction as the problem. The real problem is the decision.",
    approach:
      "We traced the live experience of how people actually navigate affordability, sustainability, and livability. The real constraints surfaced: financial capacity, ongoing cost burden, and life fit are three different questions with three different data shapes. The tool holds all three without collapsing them.",
    frameworks: [
      {
        name: "Jobs to Be Done",
        samples: [
          "Buyer: \"Help me see whether this place supports the life I actually want, not just whether I can sign the papers.\"",
          "Household: \"Help us make this decision together without one person holding all the information.\"",
          "First-time buyer: \"Show me what I am actually committing to, not just what the monthly payment looks like.\"",
        ],
      },
      {
        name: "Desired Outcomes",
        samples: [
          "Reduce confusion between affordability, sustainability, and livability when comparing homes",
          "Increase confidence in purchase decisions by surfacing life-fit data alongside financial data",
          "Minimize time spent reconciling information across separate budgeting, listing, and lifestyle tools",
        ],
      },
      {
        name: "Opportunity Solution Tree",
        samples: [
          "Top opportunity: buyers collapse three distinct questions (afford, sustain, want) into one",
          "Existing solutions fail: affordability calculators ignore sustainability, listing tools ignore life fit, no tool holds all three",
          "Solution path: separate assessments for each question, then a synthesis view that holds all three without forcing a single score",
        ],
      },
      {
        name: "OOUX Object Mapping",
        samples: [
          "Home, Neighborhood, Budget, Lifestyle Profile, Decision Snapshot as distinct objects with their own data shapes",
          "Each object has its own attributes, relationships, and calls to action rather than living as tabs in a listing tool",
          "Decision Snapshot captures the state of all three assessments at a point in time for household coordination",
        ],
      },
      {
        name: "Design Principles",
        samples: [
          "When affordability and livability conflict, show both clearly rather than blending them into a single recommendation",
          "The person makes the tradeoff, not the tool",
          "Financial projections always show sustained cost, not just purchase price",
        ],
      },
    ],
    whatsNext:
      "Integrating local data sources for livability scoring and building shareable decision snapshots so households can coordinate on the purchase decision together.",
  },
  smallbiz: {
    name: "Small Biz Operator: Workflow Bottleneck Tools",
    tagline:
      "Identifying where small business workflows break down and applying service design fixes in the operator's own language",
    heroImage: "/images/hero-smallbiz.png",
    opportunity:
      "Small business operators hit the same bottlenecks repeatedly: handoffs that drop information, steps that depend on one person's memory, decisions that stall because the right data is in the wrong place. These are service design problems, but no one has translated service design into language a small business operator would recognize or tools they would actually use.",
    approach:
      "We mapped how operators actually move through their days to find where work stalls, backs up, or falls through. The patterns are consistent: bottlenecks cluster around handoffs, information gaps, and decisions that require context the operator has to reconstruct from memory. The tools apply service design concepts (journey mapping, touchpoint analysis, bottleneck identification) but use the operator's own vocabulary instead of consulting language.",
    frameworks: [
      {
        name: "Jobs to Be Done",
        samples: [
          "Operator: \"Show me where my day keeps getting stuck so I can fix the process, not just push harder.\"",
          "Team lead: \"Help us see which handoffs are dropping information before it becomes a customer problem.\"",
          "Owner: \"Tell me which part of my workflow is costing me the most time and money without me realizing it.\"",
        ],
      },
      {
        name: "Desired Outcomes",
        samples: [
          "Reduce time lost to recurring workflow bottlenecks by making them visible before they cause failures",
          "Increase handoff reliability between team members by surfacing where information gets lost",
          "Minimize the gap between identifying a process problem and implementing a fix the team can sustain",
        ],
      },
      {
        name: "Opportunity Solution Tree",
        samples: [
          "Top opportunity: operators experience the same bottlenecks daily but lack the framing to diagnose them as process problems",
          "Existing solutions fail: service design consultants speak a language operators do not use, project management tools track tasks but not flow, accounting tools see money but not workflow",
          "Solution path: lightweight bottleneck mapping in the operator's vocabulary, handoff tracking that flags drops before they reach the customer, fix templates that match how small teams actually change their processes",
        ],
      },
      {
        name: "OOUX Object Mapping",
        samples: [
          "Workflow, Step, Handoff, Bottleneck, Fix as core objects organized around how work actually flows",
          "Bottleneck captures where work stalls, who it affects, and what information is missing or stuck",
          "Fix is a lightweight change proposal tied to a specific Bottleneck, with before/after states the team can evaluate",
        ],
      },
      {
        name: "Design Principles",
        samples: [
          "Use the operator's language for everything; translate service design concepts behind the scenes",
          "Make bottlenecks visible before they cause failures, not after",
          "Every fix must be something a small team can implement this week, not a six-month transformation",
        ],
      },
    ],
    whatsNext:
      "Building the bottleneck mapping tool and testing it with local businesses to see which workflow patterns surface most consistently and which fix templates operators actually adopt.",
  },
  commons: {
    name: "Common Ground: The Commons (Community Board)",
    heroImage: "/images/hero-commons.png",
    tagline:
      "Hyperlocal community information discovered, curated, and governed fairly",
    opportunity:
      "Community information is scattered, broadcast-oriented, and governed by platforms that do not live in the community. The people who know what is happening locally have no native surface to share it.",
    approach:
      "We built a photo-native community board where local information is discovered, not broadcast. The design grows from what happens when multiple people in a community each hold partial knowledge and need a shared surface to make the whole visible.",
    frameworks: [
      {
        name: "Jobs to Be Done",
        samples: [
          "Resident: \"Help me find out what is happening on my block this week.\"",
          "Contributor: \"Give me a way to share what I know without broadcasting to the whole internet.\"",
          "Neighborhood organizer: \"Show me what my community already knows so I can build on it, not duplicate it.\"",
        ],
      },
      {
        name: "Desired Outcomes",
        samples: [
          "Increase visibility of hyperlocal information for residents within their immediate geography",
          "Reduce barriers to contributing community knowledge without requiring audience building",
          "Improve fairness of content moderation through structural governance rather than gatekeeping",
        ],
      },
      {
        name: "Opportunity Solution Tree",
        samples: [
          "Top opportunity: community knowledge is fragmented across platforms that optimize for reach, not relevance",
          "Existing solutions fail: Facebook groups bury local posts in algorithmic feeds, Nextdoor treats neighborhoods as ad markets, bulletin boards do not scale",
          "Solution path: photo-native posts tied to geography, moderation through structure, discovery based on proximity",
        ],
      },
      {
        name: "OOUX Object Mapping",
        samples: [
          "Post, Place, Contributor, Community, Moderation Event as core objects tied to geography and people",
          "Information is tied to a Place rather than a feed, so discovery is spatial rather than algorithmic",
          "Moderation Event is a first-class object with its own lifecycle, not a hidden admin action",
        ],
      },
      {
        name: "Design Principles",
        samples: [
          "When reach and relevance conflict, choose relevance",
          "Information that matters to 50 neighbors is more valuable here than information that reaches 5,000 strangers",
          "Moderation scales through structure, not through requiring people to prove who they are",
        ],
      },
    ],
    whatsNext:
      "Expanding community governance tools and building federation so multiple neighborhoods can run independent boards that connect when relevant.",
  },
  tyfbaf: {
    name: "tyfbaf: Friend-to-Friend Home Swaps",
    tagline: "Trust-based home swaps between friends",
    heroImage: "/images/hero-tyfbaf.png",
    opportunity:
      "Home swaps exist, but they are built on stranger-trust models with insurance, deposits, and platform guarantees. Between friends, the trust already exists. The tool should honor that trust, not replace it.",
    approach:
      "Designing for the relational fabric that already exists between friends. The product does not create trust. It provides a surface for trust that is already there to operate through.",
    frameworks: [
      {
        name: "Jobs to Be Done",
        samples: [
          "Friend: \"I want to travel and my friend wants to travel. We trust each other. Just help us coordinate the logistics.\"",
          "Host: \"Let me share the things my guest needs to know without it feeling like a rental agreement.\"",
          "Pair: \"Help us find dates that work without a dozen back-and-forth messages.\"",
        ],
      },
      {
        name: "Desired Outcomes",
        samples: [
          "Reduce logistical friction in home swaps between people who already trust each other",
          "Eliminate stranger-trust patterns (reviews, deposits, insurance) from friend-to-friend exchanges",
          "Increase swap completion rate by simplifying calendar matching and lightweight agreements",
        ],
      },
      {
        name: "Opportunity Solution Tree",
        samples: [
          "Top opportunity: friends who want to swap homes have no tool that starts from trust",
          "Existing solutions fail: Airbnb assumes strangers, home swap platforms add insurance, group chats lose logistics in conversation",
          "Solution path: calendar matching without deposit flows, agreements that feel like a handshake, coordination that stays out of the relationship",
        ],
      },
      {
        name: "OOUX Object Mapping",
        samples: [
          "Swap, Home, Friend, Calendar, Agreement as core objects that assume trust is already present",
          "No Review, Deposit, or Insurance objects exist in the system by design",
          "Agreement is lightweight and informational, not contractual",
        ],
      },
      {
        name: "Design Principles",
        samples: [
          "When the platform could add a trust mechanism (reviews, deposits, verification), do not add it",
          "The relationship carries the trust; the tool carries the coordination",
          "Every interaction should feel lighter than a text thread, never heavier than a contract",
        ],
      },
    ],
    whatsNext:
      "Building the core swap coordination interface with calendar matching and a lightweight agreement structure that friends can use without feeling like they are signing a contract.",
    biggerVision:
      "Home swaps are the starting point, but the larger vision is a coordination layer for any resource sharing that runs on existing trust. Cars, tools, studio space, vacation gear. Anywhere that friends already lend to each other informally, the friction is not trust but logistics. The same design principles apply: do not add platform trust mechanisms to relationships that already carry trust. Build coordination tools that make the logistics invisible so the relationship stays in the foreground.",
  },
  satbuttons: {
    name: "SatButtons: Physical Feedback Buttons",
    tagline:
      "Physical buttons placed in real locations to capture in-context feedback at the moment it happens",
    stage: "seed",
    heroImage: "/images/hero-satbuttons.webp",
    opportunity:
      "Most feedback collection happens after the experience: surveys, follow-up emails, review prompts. By that point, recall bias has already distorted the response. The most honest feedback comes at the moment of the experience, in the environment where it happened, with the lowest possible friction. Physical buttons in physical spaces solve this. The respondent presses a button. That is the entire interaction.",
    approach:
      "Building on the principles of Experience Sampling Method (ESM): capture responses in context, at the moment they occur, rather than asking people to reconstruct their experience later. SatButtons makes ESM physical. Custom-labeled buttons are placed in real environments. Each press is timestamped, counted, and available in real time. No app download. No login. No survey fatigue.",
    frameworks: [
      {
        name: "Jobs to Be Done",
        samples: [
          "Business owner: \"Tell me how my customers feel about the experience right now, not two weeks later in a review.\"",
          "Field researcher: \"Give me a way to collect in-context responses without interrupting the experience.\"",
          "Product team: \"Help me run real-time satisfaction sampling in a live environment so I can see patterns as they form.\"",
        ],
      },
      {
        name: "Desired Outcomes",
        samples: [
          "Reduce respondent effort to a single physical press at the moment of experience",
          "Increase feedback volume by eliminating app downloads, logins, and survey fatigue",
          "Improve signal accuracy by capturing responses in context rather than through post-hoc recall",
        ],
      },
      {
        name: "Opportunity Solution Tree",
        samples: [
          "Top opportunity: feedback happens after the experience, distorted by recall bias and low response rates",
          "Existing solutions fail: surveys require effort, review platforms collect feedback days later, NPS asks the wrong question at the wrong time",
          "Solution path: physical one-press buttons at the point of experience, timestamped streams in real time, custom label sets per context",
        ],
      },
      {
        name: "OOUX Object Mapping",
        samples: [
          "Button, Label Set, Location, Session, Response Stream as core objects",
          "A Session is a time-bounded collection period; a Response Stream is the real-time count across all buttons at a location",
          "Label Set is configurable per deployment, allowing custom satisfaction scales beyond the standard happy/sad",
        ],
      },
      {
        name: "Design Principles",
        samples: [
          "The respondent's effort must be one press. Nothing more. No screen, no prompt, no follow-up",
          "The button is the entire interface; complexity lives in the dashboard",
          "Every deployment must work without requiring the respondent to install, register, or identify themselves",
        ],
      },
    ],
    whatsNext:
      "Prototyping the physical button hardware and the real-time counting dashboard. First deployment target: a local business willing to run a two-week satisfaction pilot at the point of service.",
    biggerVision:
      "SatButtons starts with physical feedback buttons, but the larger vision is a general-purpose in-context response capture system. Any environment where people have an experience and you want to know how they felt about it in real time. Retail, healthcare waiting rooms, event venues, public transit, co-working spaces. The physical button is the first surface. Digital surfaces (QR-triggered single-tap responses, NFC tap points) follow. The underlying system is the same: capture the response at the moment of the experience, with the lowest possible friction, and make the data available immediately. This connects directly to Organic Design: every SatButtons deployment generates structured behavioral data that feeds back into product and service decisions.",
  },
  "color-coordinator": {
    name: "Fashion Color Coordinator",
    tagline:
      "A tool for building and exploring personal color palettes grounded in what you actually wear",
    stage: "seed",
    heroImage: "/images/hero-color-coordinator.png",
    opportunity:
      "Color coordination tools exist for digital design but not for personal style. People who care about how colors work together in their wardrobe have no tool that starts from what they already own rather than abstract color theory.",
    approach:
      "Starting from how people actually think about color in their closets. Not color wheels and complementary pairs. Real decisions: does this jacket work with these pants? Can I build a week of outfits from these six pieces?",
    frameworks: [
      {
        name: "Jobs to Be Done",
        pending: true,
        samples: [
          "Not yet traced",
          "Early signal: people want confidence that what they are wearing coordinates",
          "They want a tool that starts from what they own, not a lesson in color theory",
        ],
      },
      {
        name: "Desired Outcomes",
        pending: true,
        samples: [
          "Increase confidence in daily outfit color coordination without requiring theory knowledge",
          "Reduce decision time when getting dressed by surfacing combinations from existing wardrobe",
          "Minimize wardrobe purchases that do not coordinate with what is already owned",
        ],
      },
      {
        name: "Opportunity Solution Tree",
        pending: true,
        samples: [
          "Not yet traced",
          "Needs research into how people currently make color coordination decisions when getting dressed",
          "Needs mapping of where those decisions break down and what tools people improvise",
        ],
      },
      {
        name: "OOUX Object Mapping",
        samples: [
          "Garment, Color Profile, Outfit, Palette, Wardrobe as core objects",
          "The garment is the atomic unit, not the color swatch; colors live on real objects in your closet",
          "Palette emerges from what you own rather than being imposed from abstract color theory",
        ],
      },
      {
        name: "Design Principles",
        pending: true,
        samples: [
          "Not yet traced",
          "Early instinct: the tool should feel like a mirror, not a teacher",
          "Show what works rather than explain why",
        ],
      },
    ],
    whatsNext:
      "Conducting initial research interviews with people who actively think about color coordination in their personal style to trace how they currently make these decisions.",
    biggerVision:
      "The Fashion Color Coordinator starts with clothing, but the larger vision is a personal color intelligence tool. Understanding how colors interact on real objects you own, in real lighting conditions, across different contexts. The same principles extend to interior design, event planning, and personal branding. The core insight is the same: color decisions happen on real objects in real spaces, not on color wheels or in abstract theory. The tool should meet people where those decisions actually occur.",
  },
  "linkedin-research-surface": {
    name: "LinkedIn Research Surface",
    tagline:
      "A layer that turns LinkedIn activity into structured research signal rather than broadcast content",
    stage: "seed",
    heroImage: "/images/hero-linkedin-research.png",
    opportunity:
      "LinkedIn activity generates constant signal about how professionals think, what they struggle with, and how industries are shifting. But the platform treats everything as broadcast content. There is no way to use your own LinkedIn presence as a research instrument.",
    approach:
      "Exploring how LinkedIn activity (posts, comments, reactions, connection patterns) can be structured as research data rather than social content. The signal is already there. The surface to read it is missing.",
    frameworks: [
      {
        name: "Jobs to Be Done",
        samples: [
          "Researcher: \"Help me see what my LinkedIn network is actually telling me about how this industry thinks.\"",
          "Strategist: \"Surface the patterns in my connections' activity without manually reading every post.\"",
          "Product lead: \"Show me what professionals in this space are struggling with, structured as research data.\"",
        ],
      },
      {
        name: "Desired Outcomes",
        pending: true,
        samples: [
          "Reduce time spent manually extracting research signal from LinkedIn activity",
          "Increase the proportion of professional network data structured as usable research input",
          "Improve topic-level trend detection across connection clusters without algorithmic manipulation",
        ],
      },
      {
        name: "Opportunity Solution Tree",
        pending: true,
        samples: [
          "Not yet traced",
          "Needs research into how researchers and strategists currently extract signal from LinkedIn activity",
          "Needs mapping of where manual methods break down and what signal types carry genuine research value",
        ],
      },
      {
        name: "OOUX Object Mapping",
        samples: [
          "Post, Reaction, Comment Thread, Connection Signal, Research Pattern as core objects",
          "Each LinkedIn interaction becomes a data point in a research stream, not just social engagement",
          "Research Pattern aggregates signals across interactions to surface trends that individual posts cannot show",
        ],
      },
      {
        name: "Design Principles",
        pending: true,
        samples: [
          "The tool reads the platform, never posts to it; observation surface only",
          "No automation of social behavior; research extraction must not alter the data source",
          "Signal quality over volume; one traced pattern is worth more than a thousand scraped data points",
        ],
      },
    ],
    whatsNext:
      "Mapping the data structures available through LinkedIn activity and identifying which signal types carry genuine research value versus social noise.",
    biggerVision:
      "LinkedIn is the first surface, but the larger vision is a general-purpose research input layer that works across any platform where professional behavior generates signal. The same structural approach applies to industry forums, open source communities, conference activity, and publication patterns. Each surface produces a different kind of research data, but the method is the same: treat activity as structured input rather than social content, and feed it into product and strategy decisions through the Organic Design cycle. The end state is a tool that turns any public professional surface into a research instrument.",
  },
};

export function generateStaticParams() {
  return Object.keys(projects).map((slug) => ({ slug }));
}

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const project = projects[params.slug];
  if (!project) return {};

  return {
    title: `${project.name} — Divergent Networks`,
    description: project.tagline,
  };
}

export default function WorkPage({ params }: { params: { slug: string } }) {
  const project = projects[params.slug];
  if (!project) notFound();

  return (
    <main className="min-h-screen">
      <div className="max-w-[720px] mx-auto px-6 py-16 md:py-24">
        <Link
          href="/"
          className="text-sm text-brand-muted hover:text-brand-accent transition-colors duration-150 mb-8 inline-block"
        >
          &larr; Back
        </Link>

        <div className="flex items-center gap-3 mb-2">
          <h1 className="text-2xl md:text-3xl font-bold text-brand-text">
            {project.name}
          </h1>
          {project.stage && (
            <span className="text-xs font-semibold tracking-wider uppercase px-2 py-1 rounded border border-brand-border text-brand-muted">
              {project.stage}
            </span>
          )}
        </div>
        <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-75 mb-6">
          {project.tagline}
        </p>

        {project.heroImage && (
          <div className="rounded-lg overflow-hidden border border-brand-border mb-6">
            <img
              src={project.heroImage}
              alt={project.name}
              className="w-full h-auto object-cover"
            />
          </div>
        )}

        <Link
          href={`/connect?product=${params.slug}`}
          className="inline-block text-sm font-semibold text-brand-accent border-b border-brand-accent-dim pb-px transition-colors duration-150 hover:text-brand-text hover:border-brand-muted mb-8"
        >
          I want in
        </Link>

        <div className="space-y-8">
          <div>
            <div className="h-px bg-brand-border mb-6" />
            <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-muted mb-4">
              Opportunity
            </h2>
            <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-85">
              {project.opportunity}
            </p>
          </div>

          <div>
            <div className="h-px bg-brand-border mb-6" />
            <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-muted mb-4">
              Approach
            </h2>
            <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-85">
              {project.approach}
            </p>
          </div>

          <div>
            <div className="h-px bg-brand-border mb-6" />
            <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-muted mb-4">
              How we built it
            </h2>
            {project.stage === "seed" && (
              <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-65 mb-5">
                Each framework is traced through the Organic Design cycle. Filled
                frameworks have been through at least one pass. Pending frameworks
                are next.
              </p>
            )}
            <div className="space-y-6">
              {project.frameworks.map((fw, i) => (
                <div key={i}>
                  <div className="flex items-center gap-2 mb-3">
                    <h3 className={`text-sm font-semibold ${fw.pending ? "text-brand-muted" : "text-brand-text"}`}>
                      {fw.name}
                    </h3>
                    {fw.pending && (
                      <span className="text-xs text-brand-muted opacity-60">
                        pending
                      </span>
                    )}
                  </div>
                  <ul className="space-y-2">
                    {fw.samples.map((s, j) => (
                      <li key={j} className="flex gap-3 items-start">
                        <span className={`mt-1 shrink-0 ${fw.pending ? "text-brand-muted opacity-50" : "text-brand-accent-dim"}`}>
                          &bull;
                        </span>
                        <p className={`text-[0.9375rem] leading-relaxed text-brand-text ${fw.pending ? "opacity-50 italic" : "opacity-75"}`}>
                          {s}
                        </p>
                      </li>
                    ))}
                  </ul>
                  {!fw.pending && (
                    <p className="text-xs text-brand-muted opacity-50 mt-2 ml-6">
                      Sample from full framework
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="h-px bg-brand-border mb-6" />
            <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-muted mb-4">
              What comes next
            </h2>
            <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-85">
              {project.whatsNext}
            </p>
          </div>

          {project.biggerVision && (
            <div>
              <div className="h-px bg-brand-border mb-6" />
              <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-muted mb-4">
                Bigger vision
              </h2>
              <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-85">
                {project.biggerVision}
              </p>
            </div>
          )}
        </div>

        <div className="mt-12 pt-8 border-t border-brand-border">
          <Link
            href="/"
            className="text-sm text-brand-muted hover:text-brand-accent transition-colors duration-150"
          >
            &larr; All work
          </Link>
        </div>
      </div>
    </main>
  );
}
