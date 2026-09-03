import Link from "next/link";
import { LineStrip } from "@/components/ui/line-strip";
import { SITE, type Category } from "@/lib/site";

const ACCENT: Record<Category["accent"], string> = {
  red: "text-red",
  yellow: "text-yellow",
  purple: "text-purple",
};

/** Full-bleed header for every /work page — off-white, black hairline grid. */
export function WorkHero({ category }: { category: Category }) {
  const [l1, l2] = category.label.split(/ & | \/ /);
  const size = `clamp(2.4rem, ${Math.min(15, 82 / Math.max(l1.length, (l2 ?? "").length))}vw, 9rem)`;
  return (
    <header className="relative">
      <LineStrip text={category.tag} />

      <div className="grid-lines relative flex min-h-[70vh] flex-col justify-between border-b border-ink/15 bg-bone px-[4vw] py-[5vh]">
        <div className="flex items-start justify-between font-mono text-[9px] uppercase leading-tight tracking-[0.22em] text-ink/60 sm:text-[10px]">
          <Link href="/" className="hover:text-red">← Ameen Ali · Portfolio</Link>
          <span className="text-right">Ultimate<br />graphic design<br />work</span>
        </div>

        <h1 className="my-auto py-[6vh]">
          <span className={`select-box inline-block max-w-full font-condensed uppercase leading-[0.8] ${ACCENT[category.accent]}`} style={{ fontSize: size }}>
            {l1}
            {l2 && <><br />{category.label.includes("&") ? "& " : ""}{l2}</>}
          </span>
        </h1>

        <div className="flex items-end justify-between font-mono text-[9px] uppercase tracking-[0.2em] text-ink/60 sm:text-[10px]">
          <span>{SITE.coords}</span>
          <span>2026 Portfolio</span>
        </div>
      </div>

      <LineStrip text={category.tag} reverse />

      <div className="mx-auto max-w-3xl px-[5vw] py-[9vh] text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-red">{category.count} pieces</p>
        <p className="mt-4 font-serif text-[clamp(1.15rem,2.2vw,1.7rem)] leading-snug text-ink">{category.blurb}</p>
      </div>
    </header>
  );
}

export default WorkHero;
