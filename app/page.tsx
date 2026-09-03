import Link from "next/link";
import DepthText from "@/components/ui/depth-text";
import RandomizedTextEffect from "@/components/ui/text-randomized";
import TextAnimation from "@/components/ui/scroll-text";
import ScrollBaseAnimation from "@/components/ui/scroll-text-marque";
import PolaroidCamera from "@/components/ui/camera";
import { SITE } from "@/lib/site";

const NAV = [
  { label: "Logos & Marks", href: "/work/logos", n: "20" },
  { label: "Branding", href: "/work/branding", n: "05" },
  { label: "Posters", href: "/work/posters", n: "25" },
];

export default function Home() {
  return (
    <main className="relative">
      {/* ---------------------------------------------------------------- HERO */}
      <section className="relative flex min-h-screen flex-col justify-between px-[3vw] pb-[6vh] pt-8">
        <div className="flex items-start justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-concrete-dim sm:text-[11px]">
          <span>{SITE.kicker}</span>
          <span className="foil font-display text-[clamp(1.1rem,3vw,2.6rem)] tracking-normal">{SITE.year}</span>
        </div>

        <div className="flex flex-1 flex-col items-center justify-center py-[6vh]">
          <DepthText text="PORTFOLIO" layers={26} depth={2.2} tilt={7} fontSize="clamp(2.6rem,13.5vw,13rem)" />

          <div className="mt-10 flex w-full max-w-4xl flex-col items-center gap-6 sm:flex-row sm:items-end sm:justify-between">
            <p className="font-mono text-[11px] uppercase tracking-[0.4em] text-gold">
              <RandomizedTextEffect text="AMEEN ALI — UI/UX DESIGNER" />
            </p>
            <p className="max-w-[26ch] text-center text-sm text-bone/55 sm:text-right">
              {SITE.polaroid.info}
            </p>
          </div>
        </div>

        <div className="rule-gold w-full" />
        <p className="mt-4 text-center font-mono text-[10px] uppercase tracking-[0.35em] text-bone/40">
          scroll ↓
        </p>
      </section>

      {/* ------------------------------------------------------------- MARQUEE */}
      <section className="border-y border-steel/60 bg-ink/60 py-8 backdrop-blur-sm">
        <ScrollBaseAnimation baseVelocity={-2.4} clasname="font-display uppercase text-[9vw] leading-[0.9] text-bone/90 tracking-[-0.04em]">
          {SITE.disciplines.join("  ·  ")}  ·&nbsp;
        </ScrollBaseAnimation>
        <ScrollBaseAnimation baseVelocity={2} clasname="font-display uppercase text-[6vw] leading-[0.9] stroke text-gold tracking-[-0.03em]">
          design louder — create endlessly —&nbsp;
        </ScrollBaseAnimation>
      </section>

      {/* ----------------------------------------------------------- MANIFESTO */}
      <section className="mx-auto max-w-[80ch] px-[4vw] py-[16vh]">
        <TextAnimation
          text={SITE.manifesto[0]}
          classname="font-display uppercase text-[clamp(1.8rem,6vw,5rem)] leading-[0.92]"
        />
        <TextAnimation
          as="p"
          text={SITE.manifesto[1]}
          classname="mt-8 max-w-[46ch] text-[clamp(1rem,1.6vw,1.4rem)] leading-relaxed text-bone/65"
        />
        <TextAnimation
          as="p"
          text={`${SITE.manifesto[2]} ${SITE.manifesto[3]}`}
          classname="mt-4 max-w-[46ch] text-[clamp(1rem,1.6vw,1.4rem)] leading-relaxed text-bone/65"
        />
        <ul className="mt-12 flex flex-wrap gap-x-8 gap-y-2 font-mono text-[10px] uppercase tracking-[0.3em] text-bone/35">
          <li className="text-ember/70">not this —</li>
          {SITE.against.map((a) => (
            <li key={a} className="line-through decoration-ember decoration-2">
              {a}
            </li>
          ))}
        </ul>
      </section>

      {/* --------------------------------------------------------------- HELLO */}
      <section className="mx-auto grid max-w-6xl gap-[8vh] px-[4vw] py-[12vh] md:grid-cols-[1fr_1fr]">
        <div>
          <TextAnimation text="Hello" classname="font-display uppercase text-[clamp(3rem,10vw,7rem)]" />
          <p className="mt-6 max-w-[38ch] text-sm leading-relaxed text-bone/65">
            {SITE.name}, {SITE.role} &amp; illustrator, based in India. {SITE.manifesto[0]}
          </p>

          <div className="mt-12 space-y-10">
            <div>
              <h3 className="foil font-display text-lg uppercase">Education</h3>
              <div className="rule-gold mt-2 w-12" />
              <p className="mt-3 text-sm font-semibold">{SITE.education.title}</p>
              <p className="mt-1 text-xs text-bone/50">
                {SITE.education.school} · {SITE.education.when}
              </p>
            </div>
            <div>
              <h3 className="foil font-display text-lg uppercase">Experience</h3>
              <div className="rule-gold mt-2 w-12" />
              <ul className="mt-3 space-y-5">
                {SITE.experience.map((e) => (
                  <li key={e.when}>
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold">{e.when}</p>
                    <p className="mt-1 text-sm font-semibold">{e.what}</p>
                    <p className="text-xs text-bone/50">{e.where}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <PolaroidCamera />
        </div>
      </section>

      {/* ---------------------------------------------------------------- WORK */}
      <section className="border-t border-steel/60 px-[4vw] py-[14vh]">
        <TextAnimation text="The Work" classname="font-display uppercase text-[clamp(2.4rem,8vw,6rem)]" />
        <ul className="mt-12 divide-y divide-steel/60 border-y border-steel/60">
          {NAV.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group flex items-center justify-between py-8 transition-colors hover:text-gold"
              >
                <span className="font-display text-[clamp(1.6rem,5vw,3.4rem)] uppercase">{item.label}</span>
                <span className="font-mono text-xs tabular-nums text-bone/40 group-hover:text-gold">
                  {item.n} →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </section>

      {/* -------------------------------------------------------------- THESIS */}
      <section className="px-[4vw] pb-[20vh] pt-[8vh]">
        <TextAnimation
          text={SITE.thesis}
          lineAnime
          classname="max-w-[16ch] font-display uppercase text-[clamp(2rem,9vw,9rem)] leading-[0.86]"
        />
        <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.35em] text-gold">
          {SITE.name} · {SITE.year}
        </p>
      </section>
    </main>
  );
}
