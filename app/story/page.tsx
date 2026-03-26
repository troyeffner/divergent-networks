"use client";

import { useState } from "react";
import Link from "next/link";
import { projects } from "@/lib/projects";

interface StoryMoment {
  slug: string;
  heading: string;
  narrative: string;
  connection: string;
}

const storyMoments: StoryMoment[] = [
  {
    slug: "homeground",
    heading: "Planned to move to New York, and bought a house.",
    narrative:
      "The decision to move from San Francisco to New York started with a question that no tool could answer properly: can I afford this, can I sustain it, and does it support the life I actually want? Every home buying tool collapsed those into one number. But they are three different questions with three different shapes. The gap was personal before it was a product.",
    connection:
      "This became Home Ground: a decision toolkit that holds all three questions without collapsing them.",
  },
  {
    slug: "story-lab",
    heading: "Learned I could teach.",
    narrative:
      "Being queer in a new place meant finding community on my own terms. I started running Pride Tales, themed storytelling gatherings where people share real stories from their own lives and are genuinely witnessed. That evolved into a 90-minute workshop teaching people to write a 5-minute story from their own lived experience. Improv hangouts in my home space became another way to create connection through sharing space. The method was simple: Task is what you were doing when it happened, Zoom is what you were feeling in that moment. That combination helps people find the real story inside their experience.",
    connection:
      "This became Story Lab: storytelling workshops and gatherings where people learn to shape their stories and tell them in a space that holds what they share.",
  },
  {
    slug: "smallbiz",
    heading: "Piloted a small business offering.",
    narrative:
      "Being in a new community meant seeing the local businesses up close. The same bottlenecks kept appearing: handoffs that dropped information, steps that depended on one person's memory, decisions that stalled because the right data was in the wrong place. These are service design problems. But no one had translated service design into language a small business operator would recognize. The goal became bringing AI and agency to the people who need it most, in their own vocabulary.",
    connection:
      "This became Small Biz Operator: workflow bottleneck tools that apply service design in the operator's own language.",
  },
  {
    slug: "commons",
    heading: "Piloted a community offering.",
    narrative:
      "The community information existed, but it was scattered across platforms that did not live in the community. The people who knew what was happening had no native surface to share it. Facebook groups bury local posts in algorithmic feeds. Nextdoor treats neighborhoods as ad markets. The real knowledge was in people's heads with no place to put it.",
    connection:
      "This became The Commons: a photo-native community board where local information is discovered, not broadcast.",
  },
  {
    slug: "one-second-local",
    heading: "Photos are nouns. Videos are verbs. That is life.",
    narrative:
      "Through all of this, thousands of photos accumulated. But photos are locked. They are nouns: static, frozen, disconnected from each other. Videos are verbs: they move, they carry time. Life is a sequence, not a collection. Learning from your experience, even the hard parts, requires seeing the sequence. Take those photos too. The bad days, the uncertain moments, the transitions. Meaning lives in the pattern, not in any single frame.",
    connection:
      "This became One Second Local: a self-reflection tool that compresses each day to one moment and compiles them into a film you can traverse over time.",
  },
  {
    slug: "tyfbaf",
    heading: "Friends wanted to visit. The trust was already there.",
    narrative:
      "Once you have a home in a place worth visiting, friends want to swap. The coordination was the only friction. Every existing platform assumes strangers and adds insurance, deposits, and verification on top. Between friends, the trust already exists. The tool should honor that, not replace it.",
    connection:
      "This became tyfbaf: friend-to-friend home swaps that start from trust, not from platform guarantees.",
  },
];

export default function StoryPage() {
  const [expandedMoment, setExpandedMoment] = useState<string | null>(null);
  const [expandedFramework, setExpandedFramework] = useState<string | null>(null);

  return (
    <main className="min-h-screen">
      <div className="max-w-[720px] mx-auto px-6 py-16 md:py-24">
        <Link
          href="/"
          className="text-sm text-brand-muted hover:text-brand-accent transition-colors duration-150 mb-12 inline-block"
        >
          &larr; Divergent Networks
        </Link>

        <h1 className="text-2xl md:text-3xl font-bold text-brand-text mb-4">
          How this portfolio grew
        </h1>
        <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-75 mb-4">
          Every product in this portfolio started from the same root: a decision to move from San Francisco to New York and build a life from scratch. The products are not separate bets. They grew from real problems encountered in sequence. Each one was traced through the same method before anything was built.
        </p>
        <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-60 mb-12">
          At Zillow, I watched something revealing: the business resisted putting jobs-to-be-done on the surface of the product, even though everyone agreed they were the truth. When we finally listed the jobs so the person could orient themselves, it was a clear winner. The business just was not sure. That tension between knowing what works and resisting the simplicity of it runs through everything here. These products put the job on the surface.
        </p>

        <div className="h-px bg-brand-border mb-12" />

        <div className="space-y-0">
          {storyMoments.map((moment, i) => {
            const project = projects[moment.slug];
            const isExpanded = expandedMoment === moment.slug;

            return (
              <div key={moment.slug} className="relative">
                {/* Vertical connector line */}
                {i < storyMoments.length - 1 && (
                  <div className="absolute left-[11px] top-[28px] bottom-0 w-px bg-brand-border" />
                )}

                <div className="flex gap-5 pb-12">
                  {/* Timeline dot */}
                  <div className="mt-[6px] shrink-0">
                    <div className={`w-[23px] h-[23px] rounded-full border-2 ${
                      isExpanded
                        ? "border-brand-accent bg-brand-accent/20"
                        : "border-brand-border bg-brand-bg"
                    } transition-colors duration-200`} />
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <button
                      onClick={() => {
                        setExpandedMoment(isExpanded ? null : moment.slug);
                        setExpandedFramework(null);
                      }}
                      className="text-left w-full group"
                    >
                      <h2 className="text-lg font-semibold text-brand-text group-hover:text-brand-accent transition-colors duration-150 mb-2">
                        {moment.heading}
                      </h2>
                      <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-65">
                        {moment.narrative}
                      </p>
                    </button>

                    <p className="text-sm text-brand-accent opacity-80 mt-3 mb-1">
                      {moment.connection}
                    </p>

                    {/* Expanded: show product frameworks */}
                    {isExpanded && project && (
                      <div className="mt-6 border border-brand-border rounded-lg p-5 bg-brand-bg/50">
                        <div className="flex items-center justify-between mb-4">
                          <h3 className="text-sm font-semibold text-brand-text">
                            {project.name}
                          </h3>
                          {project.stage && (
                            <span className="text-xs font-semibold tracking-wider uppercase px-2 py-0.5 rounded border border-brand-border text-brand-muted">
                              {project.stage}
                            </span>
                          )}
                        </div>

                        {/* Framework accordion */}
                        <div className="space-y-1">
                          {project.frameworks.map((fw) => {
                            const fwKey = `${moment.slug}-${fw.name}`;
                            const fwExpanded = expandedFramework === fwKey;

                            return (
                              <div key={fwKey}>
                                <button
                                  onClick={() =>
                                    setExpandedFramework(fwExpanded ? null : fwKey)
                                  }
                                  className="w-full text-left py-2 flex items-center justify-between group"
                                >
                                  <span className={`text-sm ${
                                    fw.pending
                                      ? "text-brand-muted"
                                      : "text-brand-text opacity-80 group-hover:opacity-100"
                                  } transition-opacity duration-150`}>
                                    {fw.name}
                                    {fw.pending && (
                                      <span className="text-xs text-brand-muted opacity-60 ml-2">
                                        pending
                                      </span>
                                    )}
                                  </span>
                                  <span className={`text-brand-muted text-xs transition-transform duration-200 ${
                                    fwExpanded ? "rotate-90" : ""
                                  }`}>
                                    &#9654;
                                  </span>
                                </button>

                                {fwExpanded && (
                                  <ul className="pl-4 pb-3 space-y-2">
                                    {fw.samples.map((s, j) => (
                                      <li key={j} className="flex gap-3 items-start">
                                        <span className={`mt-1 shrink-0 ${
                                          fw.pending
                                            ? "text-brand-muted opacity-50"
                                            : "text-brand-accent-dim"
                                        }`}>
                                          &bull;
                                        </span>
                                        <p className={`text-[0.875rem] leading-relaxed text-brand-text ${
                                          fw.pending ? "opacity-50 italic" : "opacity-75"
                                        }`}>
                                          {s}
                                        </p>
                                      </li>
                                    ))}
                                    {!fw.pending && (
                                      <p className="text-xs text-brand-muted opacity-50 ml-6">
                                        Sample from full framework
                                      </p>
                                    )}
                                  </ul>
                                )}
                              </div>
                            );
                          })}
                        </div>

                        <div className="mt-4 pt-3 border-t border-brand-border">
                          <Link
                            href={`/work/${moment.slug}`}
                            className="text-sm text-brand-accent hover:text-brand-text transition-colors duration-150"
                          >
                            Full detail page &rarr;
                          </Link>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}

          {/* Final moment: the method itself */}
          <div className="relative">
            <div className="flex gap-5">
              <div className="mt-[6px] shrink-0">
                <div className="w-[23px] h-[23px] rounded-full border-2 border-brand-accent bg-brand-accent/30" />
              </div>
              <div className="flex-1">
                <h2 className="text-lg font-semibold text-brand-text mb-2">
                  Realized every product followed the same pattern.
                </h2>
                <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-65 mb-3">
                  Each product started from a lived experience, not a market analysis. The pattern was consistent: trace what is actually happening, find where it breaks down, build the smallest thing that holds the real shape of the problem. Trace, root, re-soil, regrow. That cycle became Organic Design, and it runs underneath everything in this portfolio.
                </p>
                <Link
                  href="/work/organic-design"
                  className="text-sm text-brand-accent hover:text-brand-text transition-colors duration-150"
                >
                  Read about Organic Design &rarr;
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Where is this going */}
        <div className="mt-16">
          <div className="h-px bg-brand-border mb-8" />
          <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-muted mb-6">
            Where is this going
          </h2>
          <ul className="space-y-4">
            <li className="flex gap-3 items-start">
              <span className="mt-1 shrink-0 text-brand-accent-dim">&bull;</span>
              <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-75">
                Each product in this portfolio is being built as a case study in Organic Design. The frameworks are not decoration. They are the working documents that drive what gets built and what gets cut.
              </p>
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-1 shrink-0 text-brand-accent-dim">&bull;</span>
              <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-75">
                The portfolio itself is becoming a live demonstration of the method. You are looking at it right now. The story you just read is the traversal. The products are the moments. The frameworks underneath are the soil.
              </p>
            </li>
            <li className="flex gap-3 items-start">
              <span className="mt-1 shrink-0 text-brand-accent-dim">&bull;</span>
              <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-75">
                If you see yourself in any of these jobs, or if you have expertise that could sharpen one of these products, that is the signal. The work is real, the method is documented, and the door is open.
              </p>
            </li>
          </ul>
        </div>

        <div className="mt-12 pt-8 border-t border-brand-border flex gap-6">
          <Link
            href="/"
            className="text-sm text-brand-muted hover:text-brand-accent transition-colors duration-150"
          >
            &larr; Home
          </Link>
          <Link
            href="/connect"
            className="text-sm font-semibold text-brand-accent hover:text-brand-text transition-colors duration-150"
          >
            I want in
          </Link>
        </div>
      </div>
    </main>
  );
}
