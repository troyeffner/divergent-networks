"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

type FormState = "idle" | "submitting" | "success" | "error";

const audienceJobs: Record<string, { label: string; description: string; jobs: string[] }> = {
  friend: {
    label: "Friend or supporter",
    description: "You know Troy or found this through someone who does.",
    jobs: [
      "I want to support what Troy is building",
      "I want to attend a storytelling event or improv hangout",
      "I want to swap homes through tyfbaf",
      "I want to try one of these products as an early user",
      "I just want to stay in the loop",
    ],
  },
  investor: {
    label: "Investor or funder",
    description: "You are evaluating the portfolio or a specific product.",
    jobs: [
      "I want to understand the thesis behind the portfolio",
      "I want to evaluate market opportunity for a specific product",
      "I want to see the product roadmap and development plan",
      "I want to discuss funding or partnership structure",
    ],
  },
  community: {
    label: "Community builder",
    description: "You work in a community and see overlap with something here.",
    jobs: [
      "I want to pilot one of these products in my community",
      "I run a local organization and see a fit with The Commons",
      "I facilitate storytelling or community events and want to connect",
      "I want to bring Story Lab workshops to my area",
    ],
  },
  probono: {
    label: "Pro bono collaborator",
    description: "You have skills that could sharpen one of these products.",
    jobs: [
      "I have design or research expertise and want to contribute",
      "I have engineering skills that match a gap in one of these products",
      "I want to learn by building alongside a real portfolio",
      "I want to help with a specific product (I will say which below)",
    ],
  },
  consulting: {
    label: "Team or organization",
    description: "Your team needs research, product design, or stakeholder alignment.",
    jobs: [
      "Understand what users actually need",
      "Turn research into product decisions",
      "Build shared language across a team",
      "Move from concept to working product",
      "Evaluate whether a product idea has real traction",
    ],
  },
};

const productJobs: Record<string, { label: string; jobs: string[] }> = {
  homeground: {
    label: "Home Ground",
    jobs: [
      "Find a home that fits my life, not just my budget",
      "Understand what I can actually sustain long term",
      "Compare neighborhoods by how they support my daily life",
      "Coordinate a housing decision with my household",
      "See affordability, sustainability, and livability in one place",
    ],
  },
  smallbiz: {
    label: "Small Biz Operator",
    jobs: [
      "Make daily business decisions without digging through spreadsheets",
      "See my business health in language I actually use",
      "Coordinate daily operations across a small team",
      "Track what matters to my business, not what accounting software thinks matters",
    ],
  },
  commons: {
    label: "The Commons",
    jobs: [
      "Find out what is actually happening in my neighborhood",
      "Share local information without broadcasting to strangers",
      "Help govern how community information is moderated",
      "Connect with people nearby who know what I need to know",
    ],
  },
  tyfbaf: {
    label: "tyfbaf",
    jobs: [
      "Swap homes with a friend without the overhead of a platform",
      "Coordinate travel dates and availability with people I trust",
      "Find friends in my network who are open to home swaps",
    ],
  },
  "story-lab": {
    label: "Story Lab",
    jobs: [
      "Attend a Pride Tales storytelling gathering",
      "Take the Story Craft workshop to shape my own story",
      "Bring Story Lab to my community or organization",
      "Learn to facilitate storytelling gatherings",
    ],
  },
  "one-second-local": {
    label: "One Second Local",
    jobs: [
      "Turn my daily photos into a reflection I can traverse over time",
      "Build a practice of capturing one moment per day",
      "See the pattern in my own experience across months",
    ],
  },
};

// Wormholes: when a job is selected, it may bridge to another product
const wormholes: Record<string, { product: string; label: string; prompt: string }> = {
  // homeground wormholes
  "Compare neighborhoods by how they support my daily life":
    { product: "commons", label: "The Commons", prompt: "The neighborhood knowledge is already there" },
  "Coordinate a housing decision with my household":
    { product: "tyfbaf", label: "tyfbaf", prompt: "If you already have a place, friends may want to visit" },
  // story-lab wormholes
  "Bring Story Lab to my community or organization":
    { product: "commons", label: "The Commons", prompt: "Community surfaces hold what you build" },
  "Take the Story Craft workshop to shape my own story":
    { product: "one-second-local", label: "One Second Local", prompt: "Your daily photos are another way to see your own story" },
  // smallbiz wormholes
  "See my business health in language I actually use":
    { product: "commons", label: "The Commons", prompt: "Your customers are already talking about you locally" },
  // commons wormholes
  "Connect with people nearby who know what I need to know":
    { product: "story-lab", label: "Story Lab", prompt: "The stories your neighbors carry are the real signal" },
  "Find out what is actually happening in my neighborhood":
    { product: "homeground", label: "Home Ground", prompt: "That question started with a move" },
  // one-second-local wormholes
  "See the pattern in my own experience across months":
    { product: "story-lab", label: "Story Lab", prompt: "The pattern in your photos may hold a story worth telling" },
  // tyfbaf wormholes
  "Find friends in my network who are open to home swaps":
    { product: "linkedin-research-surface", label: "LinkedIn Research Surface", prompt: "Your network is already signaling who is open" },
  // linkedin wormholes
  // audience job wormholes
  "I want to attend a storytelling event or improv hangout":
    { product: "story-lab", label: "Story Lab", prompt: "The stories are already there" },
  "I want to pilot one of these products in my community":
    { product: "commons", label: "The Commons", prompt: "Start where the community knowledge already lives" },
};

interface InterestFormProps {
  product?: string | null;
}

export default function InterestForm({ product }: InterestFormProps) {
  const productConfig = product ? productJobs[product] : null;
  const [state, setState] = useState<FormState>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedAudience, setSelectedAudience] = useState<string | null>(null);
  const [selectedJobs, setSelectedJobs] = useState<string[]>([]);
  const [note, setNote] = useState("");

  // Three modes: product-specific, audience-selected, or audience picker
  const jobOptions = productConfig
    ? productConfig.jobs
    : selectedAudience
    ? audienceJobs[selectedAudience].jobs
    : null;

  // Find wormholes for currently selected jobs
  const activeWormholes = selectedJobs
    .filter((job) => wormholes[job])
    .map((job) => ({ job, ...wormholes[job] }))
    // Don't show wormhole back to current product
    .filter((w) => w.product !== product);

  function toggleJob(job: string) {
    setSelectedJobs((prev) => {
      if (prev.includes(job)) {
        return prev.filter((j) => j !== job);
      }
      if (prev.length >= 3) return prev;
      return [...prev, job];
    });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setState("submitting");

    const { error } = await supabase.from("interest_submissions").insert({
      name,
      email,
      jobs: selectedJobs.length > 0 ? selectedJobs : null,
      note: note || null,
      source: "divergent-networks",
      product: product || null,
      audience: selectedAudience || null,
    });

    if (error) {
      setState("error");
    } else {
      setState("success");
      setName("");
      setEmail("");
      setSelectedAudience(null);
      setSelectedJobs([]);
      setNote("");
    }
  }

  if (state === "success") {
    return (
      <div className="border border-brand-border rounded-lg p-5">
        <p className="text-[0.9375rem] text-brand-accent">
          Received. Troy will be in touch.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <label
          htmlFor="name"
          className="block text-xs font-semibold tracking-widest uppercase text-brand-muted mb-2"
        >
          Name
        </label>
        <input
          id="name"
          type="text"
          required
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full bg-transparent border border-brand-border rounded px-4 py-2.5 text-[0.9375rem] text-brand-text focus:border-brand-accent-dim focus:outline-none transition-colors duration-150"
        />
      </div>

      <div>
        <label
          htmlFor="email"
          className="block text-xs font-semibold tracking-widest uppercase text-brand-muted mb-2"
        >
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full bg-transparent border border-brand-border rounded px-4 py-2.5 text-[0.9375rem] text-brand-text focus:border-brand-accent-dim focus:outline-none transition-colors duration-150"
        />
      </div>

      {/* Audience picker (only when no product context) */}
      {!productConfig && (
        <div>
          <label className="block text-xs font-semibold tracking-widest uppercase text-brand-muted mb-3">
            What brings you here?
          </label>
          <div className="space-y-2">
            {Object.entries(audienceJobs).map(([key, audience]) => {
              const isSelected = selectedAudience === key;
              return (
                <button
                  key={key}
                  type="button"
                  onClick={() => {
                    setSelectedAudience(isSelected ? null : key);
                    setSelectedJobs([]);
                  }}
                  className={`w-full text-left px-4 py-2.5 rounded border transition-colors duration-150 ${
                    isSelected
                      ? "border-brand-accent bg-brand-accent/10"
                      : "border-brand-border hover:border-brand-accent-dim"
                  }`}
                >
                  <span className={`text-[0.9375rem] ${isSelected ? "text-brand-text" : "text-brand-text opacity-75"}`}>
                    {audience.label}
                  </span>
                  <span className="block text-xs text-brand-muted mt-0.5">
                    {audience.description}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
      )}

      {/* Job picker (shows after audience selection or for product-specific pages) */}
      {jobOptions && (
        <div>
          <label className="block text-xs font-semibold tracking-widest uppercase text-brand-muted mb-3">
            What are you trying to do? (pick up to 3)
          </label>
          <div className="space-y-2">
            {jobOptions.map((job) => {
              const isSelected = selectedJobs.includes(job);
              const isDisabled = !isSelected && selectedJobs.length >= 3;
              return (
                <button
                  key={job}
                  type="button"
                  onClick={() => toggleJob(job)}
                  disabled={isDisabled}
                  className={`w-full text-left px-4 py-2.5 rounded border text-[0.9375rem] transition-colors duration-150 ${
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
          {selectedJobs.length > 0 && (
            <p className="text-xs text-brand-muted mt-2">
              {selectedJobs.length} of 3 selected
            </p>
          )}
        </div>
      )}

      {/* Wormholes: contextual bridges to other products */}
      {activeWormholes.length > 0 && (
        <div className="space-y-2">
          {activeWormholes.map((w) => (
            <a
              key={w.product}
              href={`/connect?product=${w.product}`}
              className="block px-4 py-3 rounded border border-brand-accent-dim/40 bg-brand-accent/5 hover:border-brand-accent-dim transition-colors duration-150"
            >
              <span className="text-xs font-semibold tracking-wider uppercase text-brand-accent">
                {w.prompt}
              </span>
              <span className="block text-[0.8125rem] text-brand-muted mt-0.5">
                See {w.label} &rarr;
              </span>
            </a>
          ))}
        </div>
      )}

      <div>
        <label
          htmlFor="note"
          className="block text-xs font-semibold tracking-widest uppercase text-brand-muted mb-2"
        >
          Note (optional)
        </label>
        <textarea
          id="note"
          value={note}
          onChange={(e) => setNote(e.target.value)}
          rows={3}
          className="w-full bg-transparent border border-brand-border rounded px-4 py-2.5 text-[0.9375rem] text-brand-text focus:border-brand-accent-dim focus:outline-none transition-colors duration-150 resize-none"
        />
      </div>

      <button
        type="submit"
        disabled={state === "submitting"}
        className="bg-brand-accent text-brand-bg px-6 py-2.5 rounded text-sm font-semibold transition-colors duration-150 hover:bg-brand-text disabled:opacity-50"
      >
        {state === "submitting" ? "Sending..." : "Reach out"}
      </button>

      {state === "error" && (
        <p className="text-[0.9375rem] text-brand-text opacity-75">
          Something went wrong. Try{" "}
          <a
            href="mailto:troy@divergent-networks.com"
            className="text-brand-accent border-b border-brand-accent-dim pb-px"
          >
            troy@divergent-networks.com
          </a>{" "}
          instead.
        </p>
      )}
    </form>
  );
}
