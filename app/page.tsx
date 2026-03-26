import Link from "next/link";
import Portfolio from "@/components/Portfolio";
import Method from "@/components/Method";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="max-w-[720px] mx-auto px-6 py-16 md:py-24">
        {/* Hero */}
        <section className="mb-16">
          <div className="border-l-2 border-brand-accent-dim pl-6">
            <h1 className="text-2xl md:text-3xl font-bold text-brand-text mb-3">
              Your team ships features nobody asked for. I fix that.
            </h1>
            <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-75 mb-5">
              I help product and UX teams stop guessing what users need. Through
              interviews, field studies, and stakeholder sessions, I find the
              real problems behind the surface requests, then turn those findings
              into product decisions, roadmap priorities, and design direction
              your team can act on.
            </p>
            <div className="flex items-center gap-3">
              <span className="text-sm font-semibold tracking-wide text-brand-muted">
                Troy Effner
              </span>
              <span className="text-brand-border">|</span>
              <span className="text-sm text-brand-muted">
                Research + Product Design
              </span>
              <span className="text-brand-border">|</span>
              <span className="text-sm text-brand-muted">
                Divergent Networks
              </span>
            </div>
          </div>
        </section>

        {/* Story entry */}
        <section className="mb-16">
          <Link
            href="/story"
            className="block border border-brand-border rounded-lg p-6 hover:border-brand-accent-dim transition-colors duration-200 group"
          >
            <h2 className="text-sm font-semibold text-brand-accent group-hover:text-brand-text transition-colors duration-150 mb-2">
              This is water
            </h2>
            <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-65">
              Every product in this portfolio started by noticing something that was already there. A self-guided path through the story, the products, and the frameworks underneath. Find yourself in the work.
            </p>
          </Link>
        </section>

        <Method />
        <Portfolio />

        {/* Footer CTA */}
        <section className="mt-16 mb-8">
          <div className="h-px bg-brand-border mb-10" />
          <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-85 mb-4">
            If your team is building on assumptions instead of evidence, if
            research findings sit in decks nobody reads, or if you keep
            relearning the same things every quarter, that is what I fix.
          </p>
          <Link
            href="/connect"
            className="text-sm font-semibold text-brand-accent border-b border-brand-accent-dim pb-px transition-colors duration-150 hover:text-brand-text hover:border-brand-muted"
          >
            Get in touch
          </Link>
        </section>

        <footer className="mt-20 pt-8 border-t border-brand-border">
          <p className="text-sm text-brand-muted">
            &copy; 2026 Divergent Networks
          </p>
        </footer>
      </div>
    </main>
  );
}
