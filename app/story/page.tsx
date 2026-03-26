"use client";

import { useState } from "react";
import Link from "next/link";
import { productJobs, wormholes } from "@/components/InterestForm";

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
      "The answers were already there. Can I afford this? Can I sustain it? Does it support the life I actually want? Three questions, three different shapes. Every home buying tool collapsed them into one number. But the data to hold all three existed. It was sitting in public records, in my own spending patterns, in the shape of the neighborhoods I was considering. No one had built the surface to look at it honestly.",
    connection:
      "This became Home Ground: a decision toolkit that holds all three questions without collapsing them.",
  },
  {
    slug: "story-lab",
    heading: "Learned I could teach.",
    narrative:
      "Being queer in a new place meant finding community on my own terms. But the stories were already there. Everyone had one. They just had no method to shape it and no space where it would be held. I started running Pride Tales, themed storytelling gatherings where people share real stories and are genuinely witnessed. That evolved into a 90-minute workshop teaching people to write a 5-minute story from their own lived experience. Improv hangouts in my home space became another way of noticing what was already in the room: people who wanted to connect and just needed permission. The method was simple: Task is what you were doing when it happened, Zoom is what you were feeling. That combination helps people find the real story they were already carrying.",
    connection:
      "This became Story Lab: storytelling workshops and gatherings where people learn to shape their stories and tell them in a space that holds what they share.",
  },
  {
    slug: "smallbiz",
    heading: "Piloted a small business offering.",
    narrative:
      "The bottlenecks were right there. Handoffs that dropped information, steps that depended on one person's memory, decisions that stalled because the right data was in the wrong place. The operators were already solving these problems with workarounds, sticky notes, and gut instinct. They knew their businesses. No one had translated what they already knew into a system they could see and act on. The goal became bringing AI and agency to the people who need it most, in their own vocabulary.",
    connection:
      "This became Small Biz Operator: workflow bottleneck tools that apply service design in the operator's own language.",
  },
  {
    slug: "commons",
    heading: "Piloted a photo-native community offering.",
    narrative:
      "The community knowledge was already there. Who runs the good barber shop. When the farmers market moves indoors. Which block has parking on street cleaning day. It lived in people's heads, in conversations at the hardware store, in the posters stapled to telephone poles. Facebook groups bury it in algorithmic feeds. Nextdoor treats it as an ad market. The knowledge was real. It just had no native surface.",
    connection:
      "This became The Commons: a photo-native community board where local information is discovered, not broadcast.",
  },
  {
    slug: "one-second-local",
    heading: "Photos are nouns. Videos are verbs. That is life.",
    narrative:
      "Through all of this, thousands of photos accumulated. The record of daily life was already there, sitting in the camera roll. But photos are locked. They are nouns: static, frozen, disconnected from each other. Videos are verbs: they move, they carry time. The meaning was already in the sequence, not in any single frame. Take those photos too. The bad days, the uncertain moments, the transitions. The pattern was always there. It just needed a surface that could hold time.",
    connection:
      "This became One Second Local: a self-reflection tool that compresses each day to one moment and compiles them into a film you can traverse over time.",
  },
  {
    slug: "tyfbaf",
    heading: "Friends wanted to visit. The trust was already there.",
    narrative:
      "Once you have a home in a place worth visiting, friends want to swap. The trust was already there. Years of friendship, shared meals, standing invitations. Every existing platform assumes strangers and layers on insurance, deposits, and verification. Between friends, the relationship is the infrastructure. It was already built. The tool should honor that, not replace it.",
    connection:
      "This became tyfbaf: friend-to-friend home swaps that start from trust, not from platform guarantees.",
  },
  {
    slug: "linkedin-research-surface",
    heading: "Wanted our UX community to actually see each other.",
    narrative:
      "The signal was already there. UX practitioners post, react, comment, and share what they care about every day. But LinkedIn treats all of it as broadcast content. None of it becomes visible as a community recognizing itself. The activity is there. The connections are there. The shared concerns are there. I wanted the people in my professional community to see each other through what they actually care about, not through who the algorithm promotes. The water was right there.",
    connection:
      "This became LinkedIn Research Surface: a layer that structures LinkedIn activity as research signal so a professional community can see its own patterns.",
  },
];

export default function StoryPage() {
  const [expandedMoment, setExpandedMoment] = useState<string | null>(null);
  const [selectedStoryJobs, setSelectedStoryJobs] = useState<Record<string, string[]>>({});

  function toggleStoryJob(slug: string, job: string) {
    setSelectedStoryJobs((prev) => {
      const current = prev[slug] || [];
      if (current.includes(job)) {
        return { ...prev, [slug]: current.filter((j) => j !== job) };
      }
      if (current.length >= 2) return prev;
      return { ...prev, [slug]: [...current, job] };
    });
  }

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
          This is water
        </h1>
        <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-75 mb-4">
          There is a famous bit about two young fish swimming along and an older fish passes by and says, &ldquo;Morning, boys. How&rsquo;s the water?&rdquo; And one young fish turns to the other and says, &ldquo;What the hell is water?&rdquo;
        </p>
        <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-75 mb-4">
          Every product in this portfolio started the same way: by noticing what was already there. The photos already on your phone. The community knowledge already in people&rsquo;s heads. The stories you already lived. The friends you already trust. The professional signal already being generated. None of it needed to be invented. It needed a surface that could hold it.
        </p>
        <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-60 mb-12">
          At Zillow, I watched the business resist putting jobs-to-be-done on the surface of the product, even though everyone agreed they were the truth. When we finally listed the jobs so the person could orient themselves, it was a clear winner. The company just was not sure. That tension between knowing what is real and resisting the simplicity of looking at it runs through everything here. These products look at the water.
        </p>

        <div className="h-px bg-brand-border mb-12" />

        <div className="space-y-0">
          {storyMoments.map((moment, i) => {
            const isExpanded = expandedMoment === moment.slug;

            return (
              <div key={moment.slug} id={`moment-${moment.slug}`} className="relative">
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

                    {/* Expanded: show visitor jobs + wormholes */}
                    {isExpanded && productJobs[moment.slug] && (
                      <div className="mt-6 border border-brand-border rounded-lg p-5 bg-brand-bg/50">
                        <h3 className="text-xs font-semibold tracking-widest uppercase text-brand-muted mb-4">
                          Is this you?
                        </h3>

                        <div className="space-y-2">
                          {productJobs[moment.slug].jobs.map((job) => {
                            const jobsForSlug = selectedStoryJobs[moment.slug] || [];
                            const isSelected = jobsForSlug.includes(job);
                            const isDisabled = !isSelected && jobsForSlug.length >= 2;
                            return (
                              <button
                                key={job}
                                type="button"
                                onClick={() => toggleStoryJob(moment.slug, job)}
                                disabled={isDisabled}
                                className={`w-full text-left px-4 py-2.5 rounded border text-[0.875rem] transition-colors duration-150 ${
                                  isSelected
                                    ? "border-brand-accent bg-brand-accent/10 text-brand-text"
                                    : isDisabled
                                    ? "border-brand-border text-brand-muted/50 cursor-not-allowed"
                                    : "border-brand-border text-brand-text opacity-75 hover:border-brand-accent-dim hover:opacity-100"
                                }`}
                              >
                                {job}
                              </button>
                            );
                          })}
                        </div>

                        {/* Wormholes triggered by selected jobs */}
                        {(selectedStoryJobs[moment.slug] || [])
                          .filter((job) => wormholes[job] && wormholes[job].product !== moment.slug)
                          .map((job) => {
                            const w = wormholes[job];
                            return (
                              <a
                                key={w.product}
                                href={`#`}
                                onClick={(e) => {
                                  e.preventDefault();
                                  setExpandedMoment(w.product);
                                  setSelectedStoryJobs({});
                                  document.getElementById(`moment-${w.product}`)?.scrollIntoView({ behavior: "smooth", block: "start" });
                                }}
                                className="block mt-3 px-4 py-3 rounded border border-brand-accent-dim/40 bg-brand-accent/5 hover:border-brand-accent-dim transition-colors duration-150"
                              >
                                <span className="text-xs font-semibold tracking-wider uppercase text-brand-accent">
                                  {w.prompt}
                                </span>
                                <span className="block text-[0.8125rem] text-brand-muted mt-0.5">
                                  See {w.label} &rarr;
                                </span>
                              </a>
                            );
                          })}

                        <div className="mt-4 pt-3 border-t border-brand-border flex gap-4">
                          <Link
                            href={`/work/${moment.slug}`}
                            className="text-sm text-brand-accent hover:text-brand-text transition-colors duration-150"
                          >
                            Full detail page &rarr;
                          </Link>
                          <Link
                            href={`/connect?product=${moment.slug}`}
                            className="text-sm font-semibold text-brand-accent hover:text-brand-text transition-colors duration-150"
                          >
                            I want in
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
                  Every product was the same act: looking at the water.
                </h2>
                <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-65 mb-3">
                  The data was already in the public records. The stories were already in the people. The bottlenecks were already in the workflows. The community knowledge was already in people&rsquo;s heads. The photos were already in the camera roll. The trust was already in the friendships. The signal was already on LinkedIn. Every product in this portfolio started by noticing something real that was right there, then building the smallest surface that could hold it. Trace what is actually happening. Find where it breaks down. Build what holds the real shape. That cycle became Organic Design.
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

        {/* You just did it */}
        <div className="mt-16">
          <div className="h-px bg-brand-border mb-8" />
          <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-muted mb-6">
            You just did it
          </h2>
          <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-75 mb-4">
            You scrolled through this story and something caught your attention. You expanded a product, maybe looked at a framework, maybe skipped one that did not speak to you. You traced your own steps of understanding. That is the method. Not a pitch. Not a funnel. A self-guided path through what is real, where you find yourself in the work by following what resonates.
          </p>
          <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-75 mb-4">
            If one of these products connected to something you are already living, that is not a coincidence. That is the water. The thing that was right in front of you the whole time.
          </p>
          <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-60">
            The frameworks underneath each product are working documents, not decoration. The portfolio itself is a live demonstration of the method. And the door is open. If you see yourself in any of these jobs, or if you have expertise that could sharpen one of these products, that is the signal.
          </p>
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
