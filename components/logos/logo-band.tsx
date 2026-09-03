import Link from "next/link";
import { Torn } from "@/components/paper/torn";

/** Full-bleed dark band with the torn sign pinned into it. */
export function LogoBand({ count }: { count: number }) {
  return (
    <header className="relative isolate overflow-hidden bg-ink px-[3vw] pb-[16vh] pt-[12vh] text-paper">
      <div
        aria-hidden
        className="absolute inset-0 -z-20"
        style={{
          background:
            "radial-gradient(130% 85% at 22% 0%, #2e2450 0%, #16131f 44%, #08080b 100%)",
        }}
      />
      {/* smudge */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-40 mix-blend-overlay"
        style={{ filter: "url(#fibre)" }}
      />
      {/* the paper tears open at the bottom of the band */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-[7vh] bg-paper"
        style={{ filter: "url(#tear-lift)", transform: "scaleY(-1) translateX(-6%)", width: "112%" }}
      />

      <Link
        href="/"
        className="font-mono text-[10px] uppercase tracking-[0.35em] text-paper/45 transition-colors hover:text-yellow"
      >
        ← back
      </Link>

      <div className="mt-[6vh] flex flex-wrap items-end justify-between gap-8">
        <h1 className="font-display text-[clamp(2.6rem,12vw,12rem)] uppercase leading-[0.8] tracking-[-0.04em]">
          Logos
          <br />
          <span className="text-transparent [-webkit-text-stroke:clamp(1px,0.2vw,3px)_var(--color-paper)]">
            &amp; Marks
          </span>
        </h1>

        <Torn tilt={-2.4} className="px-6 py-4" tone="pure">
          <p className="font-mono text-[10px] uppercase leading-relaxed tracking-[0.25em] text-ink">
            {count} marks
            <br />
            <span className="text-purple">hover · click · ← →</span>
          </p>
        </Torn>
      </div>
    </header>
  );
}
