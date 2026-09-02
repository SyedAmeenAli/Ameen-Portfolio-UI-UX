import { SITE } from "@/lib/site";
import { Crack } from "@/components/logos/crack";
import { NameChain } from "./name-chain";

const WORD = "PORTFOLIO".split("");

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden pb-10 pt-24">
      <div className="mx-auto w-[min(1240px,94vw)]">
        <div className="flex items-start justify-between gap-4 font-mono text-[9px] uppercase tracking-[0.2em] text-ink/70 sm:text-[11px] sm:tracking-[0.35em]">
          <span className="min-w-0">
            {SITE.kicker}
            <span className="ml-2 text-purple sm:ml-3">UI / UX</span>
          </span>
          <span className="shrink-0 font-display text-xl tracking-normal text-ink/80 sm:text-2xl md:text-4xl">
            {SITE.year}
          </span>
        </div>

        {/* torn cardboard letters */}
        <h1
          className="mt-2 flex w-full flex-nowrap items-end justify-between font-display leading-none"
          aria-label="Portfolio"
        >
          {WORD.map((ch, i) => (
            <span
              key={i}
              aria-hidden
              className="torn-letter grain px-[0.7vw] py-[0.35vw] text-[clamp(1.6rem,8.4vw,7.6rem)]"
              style={
                {
                  "--tilt": `${(i % 3) - 1}deg`,
                  animationDelay: `${i * 0.28}s`,
                  clipPath:
                    i % 2
                      ? "polygon(0 6%,6% 0,22% 4%,42% 0,64% 5%,84% 0,100% 5%,97% 24%,100% 48%,98% 72%,100% 94%,82% 100%,60% 96%,38% 100%,16% 96%,0 100%,3% 76%,0 52%,2% 28%)"
                      : "polygon(2% 0,20% 5%,40% 0,60% 4%,80% 0,100% 4%,98% 26%,100% 50%,97% 74%,100% 96%,80% 100%,58% 95%,36% 100%,14% 96%,0 100%,2% 74%,0 50%,3% 26%,0 4%)",
                } as React.CSSProperties
              }
            >
              {ch}
            </span>
          ))}
        </h1>

        <p className="mt-3 text-right font-display text-[clamp(0.9rem,2.4vw,2rem)] uppercase tracking-[0.3em] text-ink/85">
          Designer
        </p>

        {/* the tear across the page — hover it to set the purple alight */}
        <div className="relative mt-10 h-12 w-full">
          <Crack className="inset-0 h-full w-full" />
        </div>

        <NameChain />

        <div className="mx-auto mt-16 max-w-3xl text-center">
          <p className="font-display text-[clamp(1.1rem,2.6vw,2rem)] leading-tight">
            {SITE.hero}
          </p>
          <p className="mt-5 text-sm leading-relaxed text-ink/60">{SITE.heroSub}</p>
          <p className="mt-6 font-mono text-[11px] uppercase tracking-[0.3em] text-purple">
            {SITE.disciplines.join("  ·  ")}
          </p>
        </div>
      </div>
    </section>
  );
}
