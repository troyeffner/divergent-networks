"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { supabase } from "@/lib/supabase";

interface StakeholderProject {
  name: string;
  tagline: string;
  stage: string;
  opportunity: string;
  approach: string;
  outcomes: string[];
  whatsNext: string;
  strategicContext: string;
  status: string;
  blockers: string[];
  url?: string;
}

const projects: Record<string, StakeholderProject> = {
  homeground: {
    name: "Home Ground",
    tagline: "Personal decision toolkit for home buyers",
    stage: "Live Alpha",
    url: "https://livability-alpha.vercel.app",
    opportunity:
      "Three questions nobody else separates: what can I afford, what can I sustain, and what supports the life I want? Home buying tools treat the transaction as the problem. The real problem is the decision.",
    approach:
      "Applied the traversal cycle to the home buying decision. Traced the live experience of how people actually navigate affordability, sustainability, and livability. Rooted the real constraints: financial capacity, ongoing cost burden, and life fit are three different questions with three different data shapes. Built a tool that holds all three without collapsing them.",
    outcomes: [
      "Three-question separation as core product differentiator",
      "Financial, sustainability, and livability assessments in one interface",
      "Drag-and-drop interaction patterns for priority weighting",
      "Decision support that starts from the person, not the listing",
    ],
    whatsNext:
      "Deeper livability scoring from local data sources and shareable decision snapshots for household coordination.",
    strategicContext:
      "Home Ground is the most mature product in the portfolio. It demonstrates the full method: research contact produced the three-question separation, which became the product thesis, which became the interface. The product validates the method at the tool layer.",
    status:
      "Live alpha deployed. Core affordability and sustainability flows functional. Livability scoring is placeholder pending local data source integration.",
    blockers: [
      "Local data API selection not finalized (census, walkability, school district sources)",
      "Shareable snapshot feature requires auth layer not yet scoped",
    ],
  },
  smallbiz: {
    name: "Small Biz Operator",
    tagline:
      "Workflow tools for how small business operators actually make daily decisions",
    stage: "Live Early",
    url: "https://smallbiz-peach.vercel.app",
    opportunity:
      "Small business operators make dozens of daily decisions that no tool is designed for. Accounting software assumes the operator thinks in ledgers. The operator thinks in workflows, rhythms, and tradeoffs.",
    approach:
      "Traced how operators actually move through their days. The signal was clear: the gap is not in bookkeeping. It is in the operational layer between the books and the decisions. Built tools that match how operators actually think about their business.",
    outcomes: [
      "Product positioning against accounting software assumptions",
      "Workflow-first interface design",
      "Daily decision support that starts from the operator's actual rhythm",
    ],
    whatsNext:
      "Deeper integration with daily operational patterns and multi-operator coordination for small teams.",
    strategicContext:
      "Small Biz Operator tests the method at the workflow layer. The research revealed that operators do not think in categories that accounting tools provide. The product opportunity is the gap between how operators think and how their tools organize information.",
    status:
      "Early build deployed. Core daily workflow interface functional. Financial health translation layer in progress.",
    blockers: [
      "Multi-operator coordination requires shared state architecture not yet designed",
      "Financial health indicator mapping needs more operator contact to ground the language",
    ],
  },
  commons: {
    name: "The Commons",
    tagline:
      "Hyperlocal community information discovered, curated, and governed fairly",
    stage: "Live Deployed",
    url: "https://uticacommunityboard.vercel.app",
    opportunity:
      "Community information is scattered, broadcast-oriented, and governed by platforms that do not live in the community. The people who know what is happening locally have no native surface to share it.",
    approach:
      "Built a photo-native community board where local information is discovered, not broadcast. The design grows from the coordination field: what happens when multiple people in a community each hold partial knowledge and need a shared surface to make the whole visible.",
    outcomes: [
      "Photo-native community board interface",
      "Moderation and governance patterns designed for fairness",
      "Community post schema designed for hyperlocal information",
      "Utica as first live instance",
    ],
    whatsNext:
      "Community governance expansion and multi-community federation.",
    strategicContext:
      "The Commons is the portfolio's community-facing surface. It tests whether the method works at the community coordination layer, not just the individual product layer. The governance design is the structural differentiator: information is governed by people who live in the community, not by a platform.",
    status:
      "Deployed and operational in Utica. Moderation active. Community adoption in early growth phase.",
    blockers: [
      "Federation architecture (multi-community) needs design before expansion",
      "Governance model needs documentation for community handoff",
    ],
  },
  tyfbaf: {
    name: "tyfbaf",
    tagline: "Trust-based home swaps between friends",
    stage: "Concept",
    opportunity:
      "Home swaps exist, but they are built on stranger-trust models with insurance, deposits, and platform guarantees. Between friends, the trust already exists. The tool should honor that trust, not replace it.",
    approach:
      "Designing for the relational fabric that already exists between friends. The product does not create trust. It provides a surface for trust that is already there to operate through.",
    outcomes: [
      "Product thesis grounded in how trust actually works between friends",
      "Trust-first design principles (no stranger-trust patterns)",
    ],
    whatsNext:
      "Core swap coordination interface and calendar matching.",
    strategicContext:
      "tyfbaf tests the method at the relational layer. The thesis is that trust-based exchange does not need platform guarantees when the relationship already carries the trust. If the thesis holds, the product is a coordination surface, not a marketplace.",
    status:
      "Concept stage. Thesis articulated. No build started.",
    blockers: [
      "Calendar matching UX not yet explored",
      "Need to assess whether the concept holds under contact with real swap pairs",
    ],
  },
  satbuttons: {
    name: "SatButtons",
    tagline: "Opinionated outfit coordination tool",
    stage: "Seed",
    opportunity:
      "Getting dressed is a daily decision with surprisingly high cognitive load. People develop personal systems for outfit coordination, but no tool supports those systems. The tools that exist treat clothing as inventory, not as a decision space.",
    approach:
      "Starting from how people actually think about getting dressed. The signal to explore: coordination is the real activity, not cataloguing. If the decision space has structure, a tool can hold that structure without reducing it to a closet database.",
    outcomes: [
      "Thesis articulated: outfit coordination as a decision space",
      "Initial signal collected from personal practice",
    ],
    whatsNext:
      "Exploring whether the coordination thesis holds under broader contact.",
    strategicContext:
      "SatButtons is the earliest-stage product. It tests whether personal daily decisions (getting dressed) have enough structural complexity to warrant a tool. The portfolio value is in the exploration, not yet in the product.",
    status:
      "Seed stage. Thesis only. No build.",
    blockers: [
      "Thesis needs contact beyond personal practice before committing to build",
    ],
  },
};

type ViewState = "loading" | "valid" | "invalid";

export default function StakeholderView() {
  const params = useParams();
  const token = params.token as string;
  const [viewState, setViewState] = useState<ViewState>("loading");
  const [projectSlug, setProjectSlug] = useState<string | null>(null);

  useEffect(() => {
    async function checkToken() {
      const { data, error } = await supabase
        .from("stakeholder_tokens")
        .select("project_slug, active")
        .eq("token", token)
        .single();

      if (error || !data || !data.active) {
        setViewState("invalid");
        return;
      }

      setProjectSlug(data.project_slug);
      setViewState("valid");
    }

    checkToken();
  }, [token]);

  if (viewState === "loading") {
    return (
      <main className="min-h-screen">
        <div className="max-w-[720px] mx-auto px-6 py-16 md:py-24">
          <p className="text-[0.9375rem] text-brand-muted">Loading...</p>
        </div>
      </main>
    );
  }

  if (viewState === "invalid" || !projectSlug || !projects[projectSlug]) {
    return (
      <main className="min-h-screen">
        <div className="max-w-[720px] mx-auto px-6 py-16 md:py-24">
          <h1 className="text-2xl font-bold text-brand-text mb-4">
            Access required
          </h1>
          <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-75 mb-6">
            This view requires an active access link. If you believe you should have access, contact Troy directly.
          </p>
          <a
            href="mailto:troy@divergent-networks.com"
            className="text-sm font-semibold text-brand-accent border-b border-brand-accent-dim pb-px transition-colors duration-150 hover:text-brand-text hover:border-brand-muted"
          >
            troy@divergent-networks.com
          </a>
        </div>
      </main>
    );
  }

  const project = projects[projectSlug];

  function stageBadgeColor(stage: string) {
    if (stage.startsWith("Live")) return "text-brand-accent bg-brand-accent/10";
    if (stage === "Concept") return "text-brand-muted bg-brand-muted/10";
    return "text-brand-muted/70 bg-brand-muted/5";
  }

  return (
    <main className="min-h-screen">
      <div className="max-w-[720px] mx-auto px-6 py-16 md:py-24">
        <p className="text-xs font-semibold tracking-widest uppercase text-brand-muted mb-8">
          Stakeholder View
        </p>

        <h1 className="text-2xl md:text-3xl font-bold text-brand-text mb-2">
          {project.name}
        </h1>
        <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-75 mb-6">
          {project.tagline}
        </p>

        {/* Status block */}
        <div className="border border-brand-border rounded-lg p-5 mb-8">
          <div className="flex items-center gap-3 mb-3">
            <span
              className={`text-xs font-medium px-2.5 py-1 rounded ${stageBadgeColor(
                project.stage
              )}`}
            >
              {project.stage}
            </span>
            {project.url && (
              <a
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-brand-accent border-b border-brand-accent-dim pb-px transition-colors duration-150 hover:text-brand-text hover:border-brand-muted"
              >
                View live
              </a>
            )}
          </div>
          <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-85">
            {project.status}
          </p>
        </div>

        {/* Blockers */}
        {project.blockers.length > 0 && (
          <div className="border border-brand-border rounded-lg p-5 mb-8 bg-brand-bg">
            <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-muted mb-4">
              Current blockers
            </h2>
            <ul className="space-y-2">
              {project.blockers.map((b, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-brand-muted mt-1 shrink-0">
                    &bull;
                  </span>
                  <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-75">
                    {b}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="space-y-8">
          <div>
            <div className="h-px bg-brand-border mb-6" />
            <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-muted mb-4">
              Strategic context
            </h2>
            <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-85">
              {project.strategicContext}
            </p>
          </div>

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
              Outcomes
            </h2>
            <ul className="space-y-2">
              {project.outcomes.map((o, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-brand-accent-dim mt-1 shrink-0">
                    &bull;
                  </span>
                  <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-75">
                    {o}
                  </p>
                </li>
              ))}
            </ul>
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
        </div>

        <div className="mt-12 pt-8 border-t border-brand-border">
          <p className="text-xs text-brand-muted">
            This is a private view. Please do not share this link.
          </p>
        </div>
      </div>
    </main>
  );
}
