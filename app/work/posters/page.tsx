import type { Metadata } from "next";
import Link from "next/link";
import { HorizontalScroll } from "@/components/ui/horizontal-scroll";
import { POSTERS } from "@/lib/work";

export const metadata: Metadata = { title: "Posters" };

export default function PostersPage() {
  return (
    <main className="relative">
      <header className="flex min-h-[70vh] flex-col justify-between px-[3vw] pb-[8vh] pt-8">
        <Link href="/" className="font-mono text-[10px] uppercase tracking-[0.35em] text-bone/40 hover:text-gold">
          ← back
        </Link>
        <div>
          <h1 className="font-display text-[clamp(3rem,14vw,13rem)] uppercase leading-[0.8]">
            Posters
          </h1>
          <p className="mt-4 max-w-md text-sm text-bone/55">
            {POSTERS.length} pieces — surreal, brutalist, editorial. Keep scrolling; they slide.
          </p>
        </div>
      </header>

      <HorizontalScroll
        panels={POSTERS.map((p) => ({
          heading: p.title,
          image: `/posters/${p.slug}.jpg`,
          caption: p.line,
        }))}
      />

      <footer className="px-[4vw] py-[14vh] text-center">
        <p className="font-display text-[clamp(1.4rem,5vw,3rem)] uppercase text-bone/50">end of series</p>
        <Link href="/work/branding" className="mt-6 inline-block border-b border-gold pb-0.5 font-mono text-[11px] uppercase tracking-widest text-gold">
          branding systems →
        </Link>
      </footer>
    </main>
  );
}
