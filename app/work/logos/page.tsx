import type { Metadata } from "next";
import Link from "next/link";
import { LogoDome } from "@/components/sections/logo-dome";
import { WorkHero } from "@/components/sections/work-hero";
import { CATEGORIES } from "@/lib/site";
import { LOGOS } from "@/lib/logos";

export const metadata: Metadata = { title: "Logos & Marks" };

const CAT = CATEGORIES.find((c) => c.key === "logos")!;

export default function LogosPage() {
  return (
    <main className="relative bg-bone">
      <WorkHero category={CAT} />

      <LogoDome />

      <section className="mx-auto max-w-5xl px-[4vw] py-[12vh]">
        <h2 className="mb-8 font-mono text-xs uppercase tracking-[0.3em] text-red">Index</h2>
        <ul className="divide-y divide-ink/12 border-y border-ink/15">
          {LOGOS.map((l) => (
            <li key={l.slug} className="flex items-baseline justify-between py-4">
              <span className="flex items-baseline gap-4">
                <span className="font-mono text-[11px] tabular-nums text-ink/30">{String(l.n).padStart(2, "0")}</span>
                <span className="font-display text-lg uppercase">{l.name}</span>
                {l.kind === "todo" && <span className="font-mono text-[9px] uppercase tracking-widest text-yellow">soon</span>}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-red">{l.type}</span>
            </li>
          ))}
        </ul>
      </section>

      <footer className="border-t border-ink/15 px-[4vw] py-[14vh] text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-ink/50">next</p>
        <Link href="/work/branding" className="mt-4 inline-block font-display text-[clamp(1.8rem,7vw,4.5rem)] uppercase text-ink hover:text-red">
          Branding →
        </Link>
      </footer>
    </main>
  );
}
