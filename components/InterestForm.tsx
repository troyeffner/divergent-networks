"use client";

import { useState } from "react";
import { supabase } from "@/lib/supabase";

type FormState = "idle" | "submitting" | "success" | "error";

const generalJobs = [
  "Understand what users actually need",
  "Turn research into product decisions",
  "Build shared language across a team",
  "Move from concept to working product",
  "Evaluate whether a product idea has real traction",
];

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
};

interface InterestFormProps {
  product?: string | null;
}

export default function InterestForm({ product }: InterestFormProps) {
  const productConfig = product ? productJobs[product] : null;
  const jobOptions = productConfig ? productConfig.jobs : generalJobs;
  const [state, setState] = useState<FormState>("idle");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [selectedJobs, setSelectedJobs] = useState<string[]>([]);
  const [note, setNote] = useState("");

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
    });

    if (error) {
      setState("error");
    } else {
      setState("success");
      setName("");
      setEmail("");
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
