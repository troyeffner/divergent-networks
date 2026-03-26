import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Link from "next/link";
import { Suspense } from "react";
import { projects } from "@/lib/projects";
import JobWormholes from "@/components/JobWormholes";

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

        <Suspense fallback={null}>
          <JobWormholes slug={params.slug} />
        </Suspense>

        <div className="mt-12 pt-8 border-t border-brand-border flex gap-6">
          <Link
            href="/"
            className="text-sm text-brand-muted hover:text-brand-accent transition-colors duration-150"
          >
            &larr; All work
          </Link>
          <Link
            href="/story"
            className="text-sm text-brand-muted hover:text-brand-accent transition-colors duration-150"
          >
            &larr; Story
          </Link>
          <Link
            href={`/connect?product=${params.slug}`}
            className="text-sm font-semibold text-brand-accent hover:text-brand-text transition-colors duration-150"
          >
            I want in
          </Link>
        </div>
      </div>
    </main>
  );
}
