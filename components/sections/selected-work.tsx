import Link from "next/link";

type Row = { kind: string; title: string; meta: string; href: string; img: string; tag?: string };

const ROWS: Row[] = [
  { kind: "Brand Identity", title: "Auria · Nexora · Terralis · Vayora · Verdant", meta: "Identity systems / art direction", href: "/work/branding", img: "/brands/nexora-brand-visualisation.jpg" },
  { kind: "Posters", title: "Poster Archive", meta: "25 pieces / concept image-making", href: "/work/posters", img: "/posters/electronic-music-poster-afterlight.jpg" },
  { kind: "Illustration", title: "Ink & Character", meta: "25 pieces / black ink, controlled colour", href: "/work/illustration", img: "/illustration/citrus-woman-fashion-illustration.png" },
  { kind: "Logos & Marks", title: "Marks", meta: "21 marks / emblem to monogram", href: "/work/logos", img: "/logos/altivia.jpg" },
  { kind: "2D / 3D Motion", title: "Motion Studies", meta: "07 studies / type in space", href: "/work/motion", img: "/posters/abstract-wave-floating-in-void.jpg" },
  { kind: "Typography", title: "Type Has A Voice", meta: "Experiment / interactive", href: "/work/typography", img: "/posters/minimalist-art-poster-the-unseen.jpg", tag: "Experiment" },
  { kind: "Colour", title: "Colour Is A Decision", meta: "Experiment / live palettes", href: "/work/colours", img: "/posters/synesthesia-visual-music-poster.jpg", tag: "Experiment" },
];

export function SelectedWork() {
  return (
    <section id="work" className="border-b border-ink/15 px-[4vw] py-[16vh]">
      <div className="flex items-baseline justify-between font-mono text-[10px] uppercase tracking-[0.3em] text-ink/50">
        <h2 className="font-condensed text-[clamp(2.4rem,9vw,7rem)] tracking-normal text-ink">Selected Work</h2>
        <span>04 / Projects</span>
      </div>

      <ul className="mt-14 border-t border-ink/15">
        {ROWS.map((r, i) => (
          <li key={r.kind} id={r.tag && i === 5 ? "experiments" : undefined}>
            <Link
              href={r.href}
              className="group relative flex flex-col gap-1 overflow-hidden border-b border-ink/15 py-8 transition-colors hover:bg-ink hover:text-bone md:flex-row md:items-baseline md:gap-8 md:py-10"
            >
              <span className="font-mono text-[11px] text-ink/40 group-hover:text-bone/50">{String(i + 1).padStart(2, "0")}</span>
              <span className="w-44 shrink-0 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/55 group-hover:text-yellow">
                {r.kind}{r.tag && <span className="ml-2 text-purple">·{r.tag}</span>}
              </span>
              <span className="flex-1 font-condensed text-[clamp(1.6rem,5vw,3.4rem)] uppercase leading-none">{r.title}</span>
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-ink/45 group-hover:text-bone/60">{r.meta}</span>
              <span className="font-mono text-[11px] text-ink/50 group-hover:text-bone">View ↗</span>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={r.img}
                alt=""
                aria-hidden
                className="pointer-events-none absolute right-[14vw] top-1/2 hidden h-[140%] w-40 -translate-y-1/2 rotate-2 object-cover opacity-0 transition-opacity duration-300 group-hover:opacity-90 lg:block"
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SelectedWork;
