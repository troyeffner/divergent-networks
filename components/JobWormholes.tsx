"use client";

import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { productJobs, wormholes } from "@/components/InterestForm";

interface JobWormholesProps {
  slug: string;
}

export default function JobWormholes({ slug }: JobWormholesProps) {
  const searchParams = useSearchParams();
  const job = searchParams.get("job");

  if (!job) return null;

  const wormhole = wormholes[job];
  if (!wormhole || wormhole.product === slug) return null;

  // Find other jobs on the destination product that relate
  const destJobs = productJobs[wormhole.product];

  return (
    <div className="mt-8">
      <div className="h-px bg-brand-border mb-6" />
      <div className="rounded-lg border border-brand-accent-dim/40 bg-brand-accent/5 p-5">
        <p className="text-xs font-semibold tracking-widest uppercase text-brand-muted mb-2">
          You arrived here through
        </p>
        <p className="text-[0.9375rem] text-brand-text opacity-85 mb-4">
          &ldquo;{job}&rdquo;
        </p>

        <div className="h-px bg-brand-border mb-4" />

        <p className="text-xs font-semibold tracking-wider uppercase text-brand-accent mb-3">
          {wormhole.prompt}
        </p>

        {destJobs && (
          <div className="space-y-2 mb-4">
            {destJobs.jobs.map((destJob) => (
              <Link
                key={destJob}
                href={`/work/${wormhole.product}?job=${encodeURIComponent(destJob)}`}
                className="w-full text-left px-4 py-2.5 rounded border border-brand-border text-[0.875rem] text-brand-text opacity-75 hover:border-brand-accent-dim hover:opacity-100 transition-colors duration-150 flex items-center justify-between group block"
              >
                <span>{destJob}</span>
                <span className="text-xs text-brand-muted group-hover:text-brand-accent transition-colors duration-150">&rarr;</span>
              </Link>
            ))}
          </div>
        )}

        <Link
          href={`/work/${wormhole.product}`}
          className="text-sm text-brand-accent hover:text-brand-text transition-colors duration-150"
        >
          Go to {wormhole.label} &rarr;
        </Link>
      </div>
    </div>
  );
}
