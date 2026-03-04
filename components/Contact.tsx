export default function Contact() {
  return (
    <section className="mb-16 md:mb-20">
      <div className="h-px bg-brand-border mb-10" />
      <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-muted mb-6">
        Get in touch
      </h2>
      <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-75 mb-6">
        For organizations ready to understand their users without guessing.
      </p>
      <a
        href="mailto:troy@divergent-networks.com"
        className="inline-block text-sm font-medium text-brand-accent border-b border-brand-accent-dim pb-px transition-colors duration-150 hover:text-brand-text hover:border-brand-muted"
      >
        troy@divergent-networks.com
      </a>
    </section>
  );
}
