"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";
import Link from "next/link";
import InterestForm from "@/components/InterestForm";

const productNames: Record<string, string> = {
  homeground: "Home Ground",
  smallbiz: "Small Biz Operator",
  commons: "The Commons",
  tyfbaf: "tyfbaf",
};

function ConnectContent() {
  const searchParams = useSearchParams();
  const product = searchParams.get("product");
  const productName = product ? productNames[product] : null;

  return (
    <div className="max-w-[720px] mx-auto px-6 py-16 md:py-24">
      <Link
        href={product ? `/work/${product}` : "/"}
        className="text-sm text-brand-muted hover:text-brand-accent transition-colors duration-150 mb-8 inline-block"
      >
        &larr; Back
      </Link>

      {productName ? (
        <>
          <h1 className="text-2xl md:text-3xl font-bold text-brand-text mb-4">
            {productName}
          </h1>
          <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-85 mb-10">
            Tell us what you are trying to do and how you want to be involved.
          </p>
        </>
      ) : (
        <>
          <h1 className="text-2xl md:text-3xl font-bold text-brand-text mb-4">
            Get in touch
          </h1>
          <p className="text-[0.9375rem] leading-relaxed text-brand-text opacity-85 mb-10">
            For organizations ready to understand their users without guessing. For teams where the research needs to reach the decision.
          </p>
        </>
      )}

      <div className="space-y-3 mb-10">
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

      <div className="h-px bg-brand-border mb-10" />

      <h2 className="text-xs font-semibold tracking-widest uppercase text-brand-muted mb-6">
        {productName ? `What are you trying to do with ${productName}?` : "Tell me about your work"}
      </h2>

      <InterestForm product={product} />

      <div className="mt-12 pt-8 border-t border-brand-border">
        <Link
          href="/"
          className="text-sm text-brand-muted hover:text-brand-accent transition-colors duration-150"
        >
          &larr; Back to site
        </Link>
      </div>
    </div>
  );
}

export default function ConnectPage() {
  return (
    <main className="min-h-screen">
      <Suspense
        fallback={
          <div className="max-w-[720px] mx-auto px-6 py-16 md:py-24">
            <p className="text-[0.9375rem] text-brand-muted">Loading...</p>
          </div>
        }
      >
        <ConnectContent />
      </Suspense>
    </main>
  );
}
