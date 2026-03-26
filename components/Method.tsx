import Link from "next/link";

export default function Method() {
  return (
    <section className="mb-16">
      <div className="h-px bg-brand-border mb-10" />
      <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-muted mb-8">
        Organic Design
      </h2>

      <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-85 mb-6">
        This is the method behind the work. Four stages, each producing
        concrete outputs that feed the next round.
      </p>

      <div className="space-y-6 mb-8">
        <div>
          <h3 className="text-base font-semibold text-brand-text mb-2">
            Trace
          </h3>
          <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-75">
            Start where the person is. Observe what they actually do: the
            behaviors, decisions, frustrations, and workarounds. Document before
            interpreting.
          </p>
        </div>

        <div>
          <h3 className="text-base font-semibold text-brand-text mb-2">Root</h3>
          <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-75">
            Follow the pattern to the real constraint. Not the surface complaint
            or the feature request. The deeper need or structural gap that
            produces the visible behavior.
          </p>
        </div>

        <div>
          <h3 className="text-base font-semibold text-brand-text mb-2">
            Re-soil
            <span className="text-sm font-normal text-brand-muted ml-2">
              how research changes your roadmap
            </span>
          </h3>
          <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-75">
            Feed findings back into roadmap decisions, positioning, and
            prioritization. Research outputs become working inputs your team
            uses to make decisions, not a report that sits in a shared drive.
          </p>
        </div>

        <div>
          <h3 className="text-base font-semibold text-brand-text mb-2">
            Regrow
            <span className="text-sm font-normal text-brand-muted ml-2">
              how new product directions emerge
            </span>
          </h3>
          <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-75">
            Act on what the research revealed. Features get reprioritized.
            Positioning gets rewritten. New product directions emerge that
            competitive analysis alone could not have surfaced.
          </p>
        </div>
      </div>

      <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-70 mb-8">
        Each engagement produces reusable interview protocols, synthesis
        templates, and structured findings. The next project starts from those
        assets, not from scratch. Research gets faster. Decisions get sharper.
      </p>

      <div className="border border-brand-border rounded-lg p-5">
        <div className="flex items-start justify-between gap-4 mb-3">
          <Link
            href="/work/organic-design"
            className="text-base font-semibold text-brand-text hover:text-brand-accent transition-colors duration-150"
          >
            Organic Design
          </Link>
        </div>
        <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-75 mb-3">
          Built on a tree metaphor: raw observations are ether, compressed
          knowledge is soil, live work is the trunk, and what the world sees are
          leaves. Three components feed each other so every project strengthens
          the next: research infrastructure, applied research, and structured
          work distribution.
        </p>
        <Link
          href="/work/organic-design"
          className="text-sm text-brand-muted hover:text-brand-accent transition-colors duration-150"
        >
          Learn more
        </Link>
      </div>
    </section>
  );
}
