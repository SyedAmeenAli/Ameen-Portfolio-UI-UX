import type { Metadata } from "next";
import Link from "next/link";
import { LogoDome } from "@/components/sections/logo-dome";
import { LOGOS } from "@/lib/logos";

export const metadata: Metadata = { title: "Logos & Marks" };

export default function LogosPage() {
  const live = LOGOS.filter((l) => l.kind !== "todo");
  return (
    <main className="relative">
      <header className="px-[3vw] pb-[6vh] pt-8">
        <Link href="/" className="font-mono text-[10px] uppercase tracking-[0.35em] text-bone/40 hover:text-gold">
          ← back
        </Link>
        <h1 className="mt-[6vh] font-display text-[clamp(2.6rem,12vw,12rem)] uppercase leading-[0.8]">
          Logos
          <br />
          <span className="stroke text-gold">&amp; Marks</span>
        </h1>
        <p className="mt-4 max-w-md text-sm text-bone/55">
          {live.length} of 20 marks. Drag the sphere, click a mark to enlarge.
        </p>
      </header>

      <LogoDome />

      {/* the full index, listed */}
      <section className="mx-auto max-w-5xl px-[4vw] py-[12vh]">
        <h2 className="mb-8 font-mono text-xs uppercase tracking-[0.3em] text-gold">Index</h2>
        <ul className="divide-y divide-steel/50 border-y border-steel/50">
          {LOGOS.map((l) => (
            <li key={l.slug} className="flex items-baseline justify-between py-4">
              <span className="flex items-baseline gap-4">
                <span className="font-mono text-[11px] tabular-nums text-bone/30">{String(l.n).padStart(2, "0")}</span>
                <span className="font-display text-lg uppercase">{l.name}</span>
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em] text-gold">{l.type}</span>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
