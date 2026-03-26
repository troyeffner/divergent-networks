import Link from "next/link";

interface WorkItem {
  slug: string;
  name: string;
  tagline: string;
  url?: string;
  hasDetail?: boolean;
}

interface WorkCategory {
  label: string;
  description: string;
  items: WorkItem[];
}

const categories: WorkCategory[] = [
  {
    label: "Live Projects",
    description:
      "Products in active development. Each started from research with real users and is being built based on what that research uncovered.",
    items: [
      {
        slug: "homeground",
        name: "Home Ground: Home Purchase",
        tagline:
          "Separates three questions every buyer conflates: what can I afford, what can I sustain, and what supports the life I want. Research revealed these are different problems with different data shapes.",
        url: "https://livability-alpha.vercel.app",
        hasDetail: true,
      },
      {
        slug: "smallbiz",
        name: "Small Biz Operator: Workflow Bottleneck Tools",
        tagline:
          "Finds where small business workflows break down and applies service design fixes in the operator's own language. Built from mapping where handoffs drop, steps stall, and decisions get stuck.",
        url: "https://smallbiz-peach.vercel.app",
        hasDetail: true,
      },
      {
        slug: "commons",
        name: "Common Ground: The Commons (Community Board)",
        tagline:
          "A photo-native community board where local information is discovered, not broadcast. Moderation and governance are designed into the product from the start, not added when problems appear.",
        url: "https://uticacommunityboard.vercel.app",
        hasDetail: true,
      },
      {
        slug: "story-lab",
        name: "Story Lab: Storytelling Workshops and Gatherings",
        tagline:
          "A 90-minute workshop teaching people to write a 5-minute story from their own lived experience. Grew from Pride Tales queer storytelling events. Improv hangouts and shared home space extend the practice into ongoing community.",
        hasDetail: true,
      },
    ],
  },
  {
    label: "Case Studies",
    description:
      "Products in the research and design phase, documented as they develop.",
    items: [
      {
        slug: "one-second-local",
        name: "One Second Local: Temporal Reflection Tool",
        tagline:
          "A self-reflection app that compresses photos and video into one-second moments and compiles them into a continuous film over time. Nine frameworks traced. The most fully developed case study in the portfolio.",
        hasDetail: true,
      },
    ],
  },
  {
    label: "Seeds",
    description:
      "Early-stage ideas backed by a clear thesis but not yet in development. Each includes the design thinking completed so far. If one of these fits a problem you are working on, reach out.",
    items: [
      {
        slug: "tyfbaf",
        name: "tyfbaf: Friend-to-Friend Home Swaps",
        tagline:
          "Home swap coordination that honors existing trust between friends instead of replacing it with platform guarantees, deposits, and reviews.",
        hasDetail: true,
      },
      {
        slug: "satbuttons",
        name: "SatButtons: Physical Feedback Buttons",
        tagline:
          "Physical buttons placed in real locations to capture in-context feedback at the moment it happens. Custom labels, real-time counting, zero friction for the respondent. No app, no survey, no recall bias.",
        hasDetail: true,
      },
      {
        slug: "color-coordinator",
        name: "Fashion Color Coordinator",
        tagline:
          "A tool for building personal color palettes grounded in what you actually wear, not abstract color theory. Starts from the garment, not the color wheel.",
        hasDetail: true,
      },
      {
        slug: "linkedin-research-surface",
        name: "LinkedIn Research Surface",
        tagline:
          "A layer that turns LinkedIn activity (posts, comments, reactions) into structured research data rather than social content. Observation only, no automation of social behavior.",
        hasDetail: true,
      },
    ],
  },
];

export default function Portfolio() {
  return (
    <section className="mb-16">
      <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-muted mb-10">
        Work
      </h2>

      <div className="space-y-12">
        {categories.map((cat) => (
          <div key={cat.label}>
            <h3 className="text-lg font-semibold text-brand-text mb-2">
              {cat.label}
            </h3>
            <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-65 mb-5">
              {cat.description}
            </p>

            <div className="space-y-4">
              {cat.items.map((item) => (
                <div
                  key={`${item.slug}-${item.name}`}
                  className="border border-brand-border rounded-lg p-5"
                >
                  <div className="flex items-start justify-between gap-4 mb-3">
                    {item.hasDetail ? (
                      <Link
                        href={`/work/${item.slug}`}
                        className="text-base font-semibold text-brand-text hover:text-brand-accent transition-colors duration-150"
                      >
                        {item.name}
                      </Link>
                    ) : (
                      <span className="text-base font-semibold text-brand-text">
                        {item.name}
                      </span>
                    )}
                    {item.url && (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-sm font-medium text-brand-accent border-b border-brand-accent-dim pb-px transition-colors duration-150 hover:text-brand-text hover:border-brand-muted shrink-0"
                      >
                        Visit
                      </a>
                    )}
                  </div>
                  <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-75 mb-3">
                    {item.tagline}
                  </p>
                  <div className="flex gap-4">
                    {item.hasDetail && (
                      <Link
                        href={`/work/${item.slug}`}
                        className="text-sm text-brand-muted hover:text-brand-accent transition-colors duration-150"
                      >
                        Learn more
                      </Link>
                    )}
                    {!item.hasDetail && (
                      <Link
                        href="/connect"
                        className="text-sm text-brand-muted hover:text-brand-accent transition-colors duration-150"
                      >
                        Get involved
                      </Link>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
