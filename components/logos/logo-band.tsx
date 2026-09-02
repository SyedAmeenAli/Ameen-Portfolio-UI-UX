import Link from "next/link";

/** Shaded top band with the pinned torn "LOGOS AND MARKS" sign (sketch p.3). */
export function LogoBand({ count }: { count: number }) {
  return (
    <header className="relative isolate overflow-hidden bg-ink pb-20 pt-24 text-paper">
      {/* smudged shading */}
      <div
        aria-hidden
        className="grain absolute inset-0 -z-10 opacity-70"
        style={{
          background:
            "radial-gradient(120% 80% at 50% 0%, #2a2340 0%, #14121c 45%, #0b0b0c 100%)",
        }}
      />
      {/* torn bottom edge into the paper */}
      <div
        aria-hidden
        className="absolute inset-x-0 bottom-0 h-10 bg-paper"
        style={{
          clipPath:
            "polygon(0 60%,3% 40%,7% 70%,12% 45%,18% 75%,24% 48%,30% 72%,37% 44%,45% 70%,52% 46%,60% 74%,68% 45%,76% 72%,84% 46%,92% 74%,100% 50%,100% 100%,0 100%)",
        }}
      />

      <div className="mx-auto w-[min(1100px,92vw)]">
        <Link
          href="/"
          className="font-mono text-[11px] uppercase tracking-[0.3em] text-paper/50 hover:text-yellow"
        >
          ← back
        </Link>

        <div className="mt-6 inline-block -rotate-2">
          <span className="grain torn inline-block bg-pure px-8 py-5 font-display text-4xl uppercase leading-[0.85] text-ink shadow-lift md:text-6xl">
            Logos
            <br />
            and Marks
          </span>
        </div>

        <p className="mt-6 max-w-md text-sm text-paper/60">
          {count} marks — identities, wordmarks and emblems. Hover to bring one to
          life, click to enlarge, use ← → to move through the set.
        </p>
      </div>
    </header>
  );
}
