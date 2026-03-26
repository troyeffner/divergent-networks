import InterestForm from "./InterestForm";

export default function Contact() {
  return (
    <section className="mb-16">
      <div className="h-px bg-brand-border mb-10" />
      <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-muted mb-8">
        Enter the field
      </h2>

      <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-85 mb-6">
        The work starts with contact. If something here resonated, or if you
        have a problem where understanding is the missing piece, reach out.
      </p>

      <div className="space-y-3 mb-8">
        <p className="text-[0.9375rem] text-brand-text opacity-75">
          <a
            href="mailto:troy@divergent-networks.com"
            className="text-brand-accent border-b border-brand-accent-dim pb-px transition-colors duration-150 hover:text-brand-text hover:border-brand-muted"
          >
            troy@divergent-networks.com
          </a>
        </p>
        <p className="text-[0.9375rem] text-brand-text opacity-75">
          <a
            href="https://calendly.com/troyeffner/orgskillsintro"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brand-accent border-b border-brand-accent-dim pb-px transition-colors duration-150 hover:text-brand-text hover:border-brand-muted"
          >
            Schedule a conversation
          </a>
        </p>
      </div>

      <InterestForm />
    </section>
  );
}
