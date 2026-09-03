import { SITE } from "@/lib/site";
import { RingChain } from "./ring-chain";
import { Polaroids } from "./polaroids";

export function CreativeHead() {
  return (
    <section className="relative px-[3vw] py-[14vh]">
      {/* the title, full width, stroke over solid */}
      <h2 className="font-display text-[clamp(2.4rem,11.4vw,11rem)] uppercase leading-[0.82] tracking-[-0.035em]">
        <span className="block text-transparent [-webkit-text-stroke:clamp(1px,0.22vw,3px)_var(--color-ink)]">
          Your Creative
        </span>
        <span className="flex items-end justify-between gap-4">
          <span>Head</span>
          <span className="mb-[1.4vw] grid h-[clamp(64px,9vw,132px)] w-[clamp(64px,9vw,132px)] shrink-0 rotate-[9deg] place-items-center rounded-full border-2 border-purple text-center font-mono text-[clamp(6px,0.75vw,10px)] uppercase leading-tight tracking-[0.2em] text-purple">
            Trust
            <br />
            the
            <br />
            process
          </span>
        </span>
      </h2>

      <div className="mt-[8vh] grid items-center gap-[8vh] lg:grid-cols-[1.05fr_0.95fr] lg:gap-[5vw]">
        <Polaroids />

        <div>
          <p className="max-w-[36ch] text-[clamp(1rem,1.5vw,1.35rem)] leading-relaxed text-ink/70">
            {SITE.polaroid.info}
          </p>

          <div className="mt-10 grid gap-10 sm:grid-cols-2">
            <div>
              <h3 className="font-display text-lg uppercase tracking-tight">Education</h3>
              <span className="mt-2 block h-[2px] w-10 bg-purple" />
              <p className="mt-4 text-sm font-semibold">{SITE.education.title}</p>
              <p className="mt-1 text-xs text-ink/55">
                {SITE.education.school} · {SITE.education.when}
              </p>
            </div>
            <div>
              <h3 className="font-display text-lg uppercase tracking-tight">Experience</h3>
              <span className="mt-2 block h-[2px] w-10 bg-purple" />
              <ul className="mt-4 space-y-5">
                {SITE.experience.map((e) => (
                  <li key={e.when}>
                    <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-purple">
                      {e.when}
                    </p>
                    <p className="mt-1 text-sm font-semibold">{e.what}</p>
                    <p className="text-xs text-ink/55">{e.where}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-12 border-y border-ink/10 py-3">
            <RingChain />
          </div>

          {/* scan me, decorative */}
          <div className="mt-8 inline-block">
            <div aria-hidden className="flex h-12 items-end gap-[3px]">
              {Array.from({ length: 34 }, (_, i) => (
                <span
                  key={i}
                  className="block bg-ink"
                  style={{
                    width: (i * 7) % 3 === 0 ? 4 : 2,
                    height: `${60 + ((i * 37) % 40)}%`,
                  }}
                />
              ))}
            </div>
            <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.3em] text-ink/50">
              scan me
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
