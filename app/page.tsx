import Hero from "@/components/Hero";
import Philosophy from "@/components/Philosophy";
import Services from "@/components/Services";
import WhoItsFor from "@/components/WhoItsFor";
import Work from "@/components/Work";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <main className="min-h-screen">
      <div className="max-w-[720px] mx-auto px-6 py-16 md:py-24">
        <Hero />
        <Philosophy />
        <Services />
        <WhoItsFor />
        <Work />
        <Contact />
        <footer className="mt-20 pt-8 border-t border-brand-border">
          <p className="text-xs text-brand-muted opacity-50">
            © 2026 Divergent Networks
          </p>
        </footer>
      </div>
    </main>
  );
}
