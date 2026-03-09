import Link from "next/link";

const visualizations = [
  {
    category: "Compression Model",
    items: [
      { name: "Trunk Cross-Section", file: "trunk-cross-section.html" },
      { name: "Trunk Density Map", file: "trunk-density-map.html" },
      { name: "The Fractalverse", file: "fractalverse.html" },
      { name: "Term Alignment Map", file: "term-alignment-map.html" },
    ],
  },
  {
    category: "Synthesis Cycle",
    items: [
      { name: "Synthesis Cycle v5: Compression and Expansion", file: "synthesis-cycle-v5.html" },
      { name: "Synthesis Cycle v4", file: "synthesis-cycle-v4.html" },
      { name: "Synthesis Cycle v3: Breathing Nodes", file: "causal-loop-synthesis-cycle-v3.html" },
      { name: "Synthesis Cycle v2: Dual Direction", file: "causal-loop-synthesis-cycle-v2.html" },
      { name: "Synthesis Cycle: Causal Loop", file: "causal-loop-synthesis-cycle.html" },
    ],
  },
  {
    category: "Tools and Prototypes",
    items: [
      { name: "Mesh Builder: The Flower Cycle", file: "mesh-builder-flower.html" },
      { name: "NDD Prototype", file: "ndd-prototype.html" },
    ],
  },
];

export const metadata = {
  title: "Visualizations — Divergent Networks",
  description: "Framework expressions. WOW v3.60.0-troyos.",
};

export default function VisualizationsPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-[#e8e8e8]">
      <div className="max-w-[720px] mx-auto px-6 py-16 md:py-24">
        <header className="mb-12">
          <h1 className="text-xl font-semibold tracking-wide text-white">
            Visualizations
          </h1>
          <p className="mt-2 text-sm text-[#666]">
            Framework expressions — WOW v3.60.0-troyos
          </p>
        </header>

        <div className="space-y-10">
          {visualizations.map((section) => (
            <div key={section.category}>
              <p className="text-[11px] font-semibold uppercase tracking-widest text-[#444] mb-3">
                {section.category}
              </p>
              <div className="flex flex-col gap-[2px]">
                {section.items.map((item) => (
                  <a
                    key={item.file}
                    href={`/visualizations/${item.file}`}
                    className="flex justify-between items-center px-4 py-3 bg-[#111] border border-[#1c1c1c] text-[#e8e8e8] hover:bg-[#161616] hover:border-[#333] transition-colors text-sm no-underline"
                  >
                    <span>{item.name}</span>
                    <span className="text-[#444] text-xs">&#8599;</span>
                  </a>
                ))}
              </div>
            </div>
          ))}
        </div>

        <footer className="mt-16 pt-6 border-t border-[#1c1c1c]">
          <Link
            href="/"
            className="text-xs text-[#333] hover:text-[#666] transition-colors no-underline"
          >
            divergent-networks.com
          </Link>
        </footer>
      </div>
    </main>
  );
}
