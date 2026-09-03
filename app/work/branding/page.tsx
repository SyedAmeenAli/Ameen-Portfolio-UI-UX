import type { Metadata } from "next";
import Link from "next/link";
import { StackingCards } from "@/components/ui/stacking-card";
import { BRANDS } from "@/lib/work";

export const metadata: Metadata = { title: "Branding & Visual Identity" };

export default function BrandingPage() {
  return (
    <main className="relative">
      <header className="flex min-h-[70vh] flex-col justify-between px-[3vw] pb-[8vh] pt-8">
        <Link href="/" className="font-mono text-[10px] uppercase tracking-[0.35em] text-bone/40 hover:text-gold">
          ← back
        </Link>
        <div>
          <h1 className="font-display text-[clamp(2.6rem,11vw,11rem)] uppercase leading-[0.8]">
            Branding /
            <br />
            <span className="stroke text-gold">Visual Identity</span>
          </h1>
          <p className="mt-4 max-w-md text-sm text-bone/55">
            {BRANDS.length} full identity systems — mark, type, palette, application. Scroll to stack.
          </p>
        </div>
      </header>

      <StackingCards
        items={BRANDS.map((b) => ({
          title: b.name,
          eyebrow: b.sector,
          description: `${b.tagline}. Logo exploration, mark construction, typography and rollout across stationery, packaging and environment.`,
          image: b.board,
          color: b.color,
        }))}
      />

      <footer className="px-[4vw] py-[16vh] text-center">
        <p className="font-display text-[clamp(1.4rem,5vw,3rem)] uppercase text-bone/50">five worlds, five rules</p>
        <Link href="/work/logos" className="mt-6 inline-block border-b border-gold pb-0.5 font-mono text-[11px] uppercase tracking-widest text-gold">
          logos &amp; marks →
        </Link>
      </footer>
    </main>
  );
}
