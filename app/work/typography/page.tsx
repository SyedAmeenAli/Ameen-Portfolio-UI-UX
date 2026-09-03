import type { Metadata } from "next";
import Link from "next/link";
import {
  Inter, Manrope, Space_Grotesk, DM_Sans, Sora, Syne, Bebas_Neue,
  IBM_Plex_Sans, Playfair_Display, Cormorant_Garamond, Fraunces, Archivo,
} from "next/font/google";
import { WorkHero } from "@/components/sections/work-hero";
import { LineStrip } from "@/components/ui/line-strip";
import { TypeLab } from "@/components/sections/type-lab";
import { CATEGORIES } from "@/lib/site";

export const metadata: Metadata = { title: "Typography" };
const CAT = CATEGORIES.find((c) => c.key === "typography")!;

const inter = Inter({ subsets: ["latin"] });
const manrope = Manrope({ subsets: ["latin"] });
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });
const dmSans = DM_Sans({ subsets: ["latin"] });
const sora = Sora({ subsets: ["latin"] });
const syne = Syne({ subsets: ["latin"] });
const bebas = Bebas_Neue({ weight: "400", subsets: ["latin"] });
const plex = IBM_Plex_Sans({ weight: ["400", "600"], subsets: ["latin"] });
const playfair = Playfair_Display({ subsets: ["latin"] });
const cormorant = Cormorant_Garamond({ weight: ["400", "600"], subsets: ["latin"] });
const fraunces = Fraunces({ subsets: ["latin"] });
const archivo = Archivo({ subsets: ["latin"] });

const ARCHIVE = [
  { name: "Inter", cls: inter.className, tags: "Precise / Neutral / Digital" },
  { name: "Manrope", cls: manrope.className, tags: "Modern / Friendly / Minimal" },
  { name: "Space Grotesk", cls: spaceGrotesk.className, tags: "Technical / Contemporary / Experimental" },
  { name: "DM Sans", cls: dmSans.className, tags: "Clean / Geometric / Calm" },
  { name: "Sora", cls: sora.className, tags: "Structured / Technology / Sharp" },
  { name: "Syne", cls: syne.className, tags: "Experimental / Artistic / Unconventional" },
  { name: "Bebas Neue", cls: bebas.className, tags: "Bold / Loud / Athletic" },
  { name: "IBM Plex Sans", cls: plex.className, tags: "Engineered / Corporate / Reliable" },
  { name: "Playfair Display", cls: playfair.className, tags: "Editorial / Elegant / Cultural" },
  { name: "Cormorant Garamond", cls: cormorant.className, tags: "Luxury / Literary / Refined" },
  { name: "Fraunces", cls: fraunces.className, tags: "Artistic / Human / Soft" },
  { name: "Archivo", cls: archivo.className, tags: "Grotesque / Utilitarian / Strong" },
];

const VERSIONS = [
  { cls: inter.className, font: "Inter", note: "MODERN / DIGITAL" },
  { cls: playfair.className, font: "Playfair Display", note: "EDITORIAL / ELEGANT" },
  { cls: bebas.className, font: "Bebas Neue", note: "BOLD / CAMPAIGN" },
  { cls: spaceGrotesk.className, font: "Space Grotesk", note: "TECHNICAL / FUTURISTIC" },
  { cls: fraunces.className, font: "Fraunces", note: "ARTISTIC / HUMAN" },
  { cls: syne.className, font: "Syne", note: "EXPERIMENTAL / EXPRESSIVE" },
];

const WEIGHTS = [
  ["Thin", 100], ["ExtraLight", 200], ["Light", 300], ["Regular", 400], ["Medium", 500],
  ["Semibold", 600], ["Bold", 700], ["ExtraBold", 800], ["Black", 900],
] as const;

const TRACKING = ["-0.05em", "-0.02em", "0em", "0.05em", "0.12em"];

const RULES = [
  "One typeface can speak loudly.",
  "Two typefaces should have a reason to meet.",
  "Hierarchy beats decoration.",
  "Spacing is part of the typeface.",
  "Readability is never optional.",
];

export default function TypographyPage() {
  return (
    <main className="relative bg-bone text-ink">
      <WorkHero category={CAT} />

      {/* TYPE HAS A VOICE */}
      <section className="on-dark grid-lines-dark border-y border-bone/10 px-[5vw] py-[16vh]">
        <p className="font-mono text-[10px] uppercase tracking-[0.4em] text-purple">02 — Typography</p>
        <h2 className="mt-6 font-condensed text-[clamp(3rem,16vw,13rem)] uppercase leading-[0.82]">
          Type<br />has a<br /><span className="text-yellow">voice.</span>
        </h2>
        <p className="mt-8 max-w-[40ch] font-serif text-[clamp(1.1rem,2vw,1.6rem)] leading-snug text-bone/70">
          The right typeface doesn&apos;t just communicate words. It changes how those words are perceived.
        </p>
      </section>

      {/* THE TYPE ARCHIVE */}
      <section className="px-[5vw] py-[14vh]">
        <h2 className="font-condensed text-[clamp(2.4rem,8vw,5.5rem)] uppercase">The Type Archive</h2>
        <p className="mt-3 max-w-[46ch] text-sm text-ink/60">
          Twelve families I reach for to build different visual personalities. Real fonts, really rendering.
        </p>
        <div className="mt-12 grid gap-px border border-ink/15 bg-ink/15 md:grid-cols-2">
          {ARCHIVE.map((f) => (
            <div key={f.name} className="bg-bone p-6">
              <div className="flex items-baseline justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/50">{f.name}</span>
                <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-purple">{f.tags}</span>
              </div>
              <p className={`${f.cls} mt-3 text-6xl leading-none`}>Aa</p>
              <p className={`${f.cls} mt-3 text-[13px] leading-tight text-ink/60`}>
                ABCDEFGHIJKLMNOPQRSTUVWXYZ abcdefghijklmnopqrstuvwxyz 0123456789
              </p>
              <p className={`${f.cls} mt-4 text-2xl leading-tight`}>Make something people remember.</p>
            </div>
          ))}
        </div>
      </section>

      <LineStrip text="SAME WORD · DIFFERENT VOICE" />

      {/* INTERACTIVE LAB */}
      <TypeLab
        fonts={ARCHIVE.map((f) => ({ name: f.name, cls: f.cls }))}
        versions={VERSIONS}
      />

      {/* HIERARCHY */}
      <section className="px-[5vw] py-[14vh]">
        <h2 className="font-condensed text-[clamp(2.4rem,8vw,5.5rem)] uppercase">Hierarchy</h2>
        <div className="mt-10 divide-y divide-ink/12 border-y border-ink/15">
          {[
            ["Display", "120 / Black", "Build better experiences.", "text-[clamp(2.4rem,8vw,6rem)] font-condensed"],
            ["H1", "72 / Bold", "Designing for humans", "text-[clamp(1.8rem,5vw,3.5rem)] font-condensed"],
            ["H2", "48 / Semibold", "Where strategy meets experience", "text-[clamp(1.4rem,3.5vw,2.4rem)] font-semibold"],
            ["H3", "32 / Medium", "A clearer way forward", "text-[clamp(1.1rem,2.4vw,1.7rem)] font-medium"],
            ["Body", "18 / Regular / 150%", "Good typography creates structure, improves readability and guides people through an experience without demanding attention.", "text-[1.05rem] leading-[1.5] max-w-[54ch] text-ink/70"],
            ["Caption", "12 / Medium / +8% tracking", "CASE STUDY — 2026", "font-mono text-xs uppercase tracking-[0.3em] text-ink/50"],
          ].map(([role, spec, sample, cls]) => (
            <div key={role} className="grid gap-2 py-7 md:grid-cols-[140px_1fr]">
              <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-ink/45">
                <p className="text-purple">{role}</p>
                <p className="mt-1">{spec}</p>
              </div>
              <p className={cls as string}>{sample}</p>
            </div>
          ))}
        </div>
      </section>

      {/* WEIGHT */}
      <section className="on-dark border-y border-bone/10 px-[5vw] py-[14vh]">
        <h2 className="font-condensed text-[clamp(2rem,7vw,4.5rem)] uppercase text-bone">One family. Many personalities.</h2>
        <div className="mt-10 space-y-1">
          {WEIGHTS.map(([label, w]) => (
            <div key={w} className="flex items-baseline gap-6 border-b border-bone/10 pb-1">
              <span className="w-24 font-mono text-[10px] uppercase tracking-[0.2em] text-bone/40">{label} {w}</span>
              <span className={`${archivo.className} text-[clamp(2rem,7vw,4.5rem)] leading-none text-bone`} style={{ fontWeight: w }}>
                IMPACT
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* TRACKING */}
      <section className="px-[5vw] py-[14vh]">
        <h2 className="font-condensed text-[clamp(2rem,7vw,4.5rem)] uppercase">Space matters.</h2>
        <div className="mt-10 space-y-4">
          {TRACKING.map((t) => (
            <div key={t} className="flex items-baseline gap-6 border-b border-ink/12 pb-3">
              <span className="w-16 font-mono text-[10px] text-ink/40">{t}</span>
              <span className="font-condensed text-[clamp(1.6rem,6vw,3.4rem)] uppercase" style={{ letterSpacing: t }}>Typography</span>
            </div>
          ))}
        </div>
        <p className="mt-6 max-w-[44ch] text-sm text-ink/55">
          Tighter tracking creates density and impact. Looser tracking creates openness and elegance.
        </p>
      </section>

      {/* TYPE + COLOUR */}
      <section className="px-[5vw] py-[14vh]">
        <h2 className="font-condensed text-[clamp(2rem,7vw,4.5rem)] uppercase">Type × Colour</h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { bg: "#0a0a0b", fg: "#ece9e1", ac: "#ff2d1a", n: "Black + White" },
            { bg: "#7c3aed", fg: "#0a0a0b", ac: "#ffd400", n: "Purple + Black" },
            { bg: "#ffd400", fg: "#0a0a0b", ac: "#7c3aed", n: "Yellow + Black" },
            { bg: "#0a0a0b", fg: "#ffd400", ac: "#7c3aed", n: "Purple + Yellow + Black" },
          ].map((v) => (
            <div key={v.n} className="flex aspect-square flex-col justify-between p-5" style={{ background: v.bg, color: v.fg }}>
              <span className="font-mono text-[9px] uppercase tracking-[0.2em]" style={{ color: v.ac }}>{v.n}</span>
              <p className="font-condensed text-2xl uppercase leading-none">
                Make something <span style={{ color: v.ac }}>people</span> remember.
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* RULES */}
      <section className="px-[5vw] py-[14vh]">
        <h2 className="font-condensed text-[clamp(2rem,7vw,4.5rem)] uppercase">My type rules</h2>
        <ol className="mt-10 divide-y divide-ink/12 border-y border-ink/15">
          {RULES.map((r, i) => (
            <li key={r} className="flex items-baseline gap-6 py-6">
              <span className="font-mono text-sm text-purple">{String(i + 1).padStart(2, "0")}</span>
              <span className="font-serif text-[clamp(1.2rem,3vw,2rem)] leading-snug">{r}</span>
            </li>
          ))}
        </ol>
      </section>

      {/* MANIFESTO */}
      <section className="on-dark border-t border-bone/10 px-[5vw] py-[18vh] text-center">
        <h2 className="font-condensed text-[clamp(2.4rem,10vw,8rem)] uppercase leading-[0.85] text-bone">
          Words are content.<br /><span className="text-yellow">Type is experience.</span>
        </h2>
        <p className="mx-auto mt-8 max-w-[46ch] font-serif text-bone/60">
          The typeface is never just what the words look like. It&apos;s how they feel before they&apos;re even read.
        </p>
        <Link href="/work/colours" className="mt-10 inline-block font-mono text-[11px] uppercase tracking-[0.3em] text-yellow">
          Colour →
        </Link>
      </section>
    </main>
  );
}
