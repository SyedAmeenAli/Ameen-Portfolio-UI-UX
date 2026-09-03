import Link from "next/link";
import { LineStrip } from "@/components/ui/line-strip";
import { SITE, type Category } from "@/lib/site";

const ACCENT: Record<Category["accent"], string> = {
  red: "text-red",
  yellow: "text-yellow",
  purple: "text-purple",
};

/** Full-bleed dark hero for every /work page. Matches the reference category headers. */
export function WorkHero({ category, bg }: { category: Category; bg?: string }) {
  const [l1, l2] = category.label.split(/ & | \/ /);
  return (
    <header className="relative">
      <LineStrip text={category.tag} />

      <div className="relative isolate flex min-h-[74vh] flex-col justify-between overflow-hidden bg-void px-[3vw] py-[5vh]">
        {bg && (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={bg} alt="" className="absolute inset-0 -z-10 h-full w-full object-cover opacity-25" />
        )}
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-void/40 via-void/70 to-void" />

        <div className="flex items-start justify-between font-mono text-[9px] uppercase leading-tight tracking-[0.25em] text-red sm:text-[10px]">
          <Link href="/" className="hover:text-bone">Portfolio of Ameen Ali</Link>
          <span className="text-right">
            Ultimate<br />graphic design<br />work
          </span>
        </div>

        <h1 className="my-auto py-[6vh]">
          <span
            className={`select-box inline-block max-w-full font-display uppercase leading-[0.8] ${ACCENT[category.accent]}`}
            style={{ fontSize: `clamp(2.4rem, ${Math.min(15, 82 / Math.max(l1.length, (l2 ?? "").length))}vw, 9rem)` }}
          >
            {l1}
            {l2 && <><br />{category.label.includes("&") ? "& " : ""}{l2}</>}
          </span>
        </h1>

        <div className="flex items-end justify-between font-mono text-[9px] uppercase tracking-[0.2em] text-red sm:text-[10px]">
          <span>{SITE.coords}</span>
          <span>2026 Portfolio</span>
        </div>
      </div>

      <LineStrip text={category.tag} reverse />

      <div className="mx-auto max-w-3xl px-[4vw] py-[9vh] text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.3em] text-concrete-dim">
          {category.count} pieces
        </p>
        <p className="mt-4 text-[clamp(1rem,1.7vw,1.35rem)] leading-relaxed text-bone/75">{category.blurb}</p>
      </div>
    </header>
  );
}

export default WorkHero;
