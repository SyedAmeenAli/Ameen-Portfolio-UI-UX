import { Cat } from "@/components/sections/cat";

/** Cat + statement band — the compact lower editorial strip. Shared home + /work. */
export function WorkBand() {
  return (
    <section className="grid border-y border-purple/40 lg:grid-cols-[0.85fr_0.95fr_0.9fr_1.4fr_0.7fr]">
      <div className="relative min-h-[22vh] border-purple/25 bg-[#0a0a0d] lg:border-r">
        <span className="absolute left-2 top-2 z-10 font-grotesk text-[9px] text-purple">/\|/\</span>
        <Cat bare />
      </div>
      <div className="flex flex-col justify-center border-t border-purple/25 p-5 lg:border-l lg:border-t-0">
        <p className="font-grotesk text-[10px] font-semibold uppercase tracking-[0.28em] text-purple">Curious cats</p>
        <p className="font-condensed text-2xl uppercase leading-none text-bone">Explore better.</p>
        <span className="mt-3 text-yellow">→</span>
      </div>
      <div className="flex flex-col justify-center border-t border-purple/25 p-5 font-grotesk text-[10px] font-semibold uppercase tracking-[0.2em] text-bone/55 lg:border-l lg:border-t-0">
        Good design,<br />better tomorrows.
        <span className="mt-3 font-condensed text-xl text-yellow">+</span>
      </div>
      <div className="flex items-center border-t border-purple/25 p-5 lg:border-l lg:border-t-0">
        <p className="font-condensed text-[clamp(1.6rem,4vw,3rem)] uppercase leading-[0.86] text-bone">
          &ldquo;Same human<br />different ideas.&rdquo;
        </p>
      </div>
      <div className="flex flex-col justify-center border-t border-purple/25 p-5 font-grotesk text-[10px] font-semibold uppercase leading-relaxed tracking-[0.2em] text-bone/50 lg:border-l lg:border-t-0">
        [<br />Create<br />Explore<br />Iterate<br />Repeat<br />]
      </div>
    </section>
  );
}

export default WorkBand;
