import { SITE } from "@/lib/site";

/** Selection-box frame with corner + edge handles, like a design-tool marquee. */
function SelectionBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      <span className="pointer-events-none absolute -inset-4 border border-purple/50" />
      {["-left-5 -top-5", "-right-5 -top-5", "-left-5 -bottom-5", "-right-5 -bottom-5"].map(
        (p) => (
          <span
            key={p}
            className={`pointer-events-none absolute ${p} h-2.5 w-2.5 border border-ink bg-pure`}
          />
        ),
      )}
      {["-top-5 left-1/2 -translate-x-1/2", "-bottom-5 left-1/2 -translate-x-1/2"].map((p) => (
        <span
          key={p}
          className={`pointer-events-none absolute ${p} h-2.5 w-2.5 border border-ink bg-pure`}
        />
      ))}
      {children}
    </div>
  );
}

export function About() {
  return (
    <section className="relative mx-auto w-[min(1240px,94vw)] py-24">
      <div className="grid gap-16 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)]">
        {/* standing pixel figure */}
        <div className="mx-auto w-full max-w-[300px]">
          <SelectionBox>
            <div className="grain relative aspect-[3/5] overflow-hidden bg-pure shadow-torn">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src="/me/back-cut.webp"
                alt="Pixel-art figure of Ameen, seen from behind"
                width={720}
                height={1582}
                loading="lazy"
                decoding="async"
                className="absolute inset-0 h-full w-full object-contain p-4"
                style={{ imageRendering: "pixelated" }}
              />
            </div>
          </SelectionBox>
          <p className="mt-8 text-center font-mono text-[10px] uppercase tracking-[0.3em] text-ink/45">
            crazy love <span className="text-yellow">✦</span>
          </p>
        </div>

        {/* copy */}
        <div>
          <h2 className="font-display text-[clamp(2.4rem,7vw,5rem)] uppercase leading-none tracking-tight">
            Hello
          </h2>

          <p className="mt-6 max-w-xl text-sm leading-relaxed text-ink/70">
            Hi, I&apos;m {SITE.name}. {SITE.heroSub}
          </p>
          <p className="mt-4 max-w-xl text-sm leading-relaxed text-ink/70">
            {SITE.creativity.body}
          </p>

          <div className="mt-12 grid gap-12 sm:grid-cols-2">
            <div>
              <h3 className="font-display text-lg uppercase tracking-tight">Education</h3>
              <span className="mt-2 block h-[2px] w-10 bg-purple" />
              <p className="mt-4 text-sm font-semibold">{SITE.education.title}</p>
              <p className="mt-1 text-xs text-ink/55">{SITE.education.school}</p>
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
        </div>
      </div>
    </section>
  );
}
