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
    <section id="work" className="border-b border-bone/15 px-[4vw] py-[12vh]">
      <div className="flex items-baseline justify-between font-grotesk text-[10px] font-semibold uppercase tracking-[0.3em] text-bone/50">
        <h2 className="font-condensed text-[clamp(2rem,8vw,5.5rem)] tracking-normal text-bone">Selected Work</h2>
        <span className="text-yellow">04 / Projects</span>
      </div>

      <ul className="mt-10 border-t border-bone/15">
        {ROWS.map((r, i) => (
          <li key={r.kind} id={r.tag && i === 5 ? "experiments" : undefined}>
            <Link
              href={r.href}
              className="group relative flex flex-col gap-1 overflow-hidden border-b border-bone/15 py-5 transition-colors hover:bg-purple md:flex-row md:items-baseline md:gap-6 md:py-6"
            >
              <span className="font-grotesk text-[11px] font-semibold text-yellow">{String(i + 1).padStart(2, "0")}</span>
              <span className="w-40 shrink-0 font-grotesk text-[10px] font-semibold uppercase tracking-[0.2em] text-purple group-hover:text-yellow">
                {r.kind}{r.tag && <span className="ml-1 text-bone/50 group-hover:text-bone">·{r.tag}</span>}
              </span>
              <span className="flex-1 font-condensed text-[clamp(1.4rem,4.5vw,2.8rem)] uppercase leading-none text-bone">{r.title}</span>
              <span className="font-grotesk text-[10px] font-medium uppercase tracking-[0.14em] text-bone/40 group-hover:text-bone/80">{r.meta}</span>
              <span className="font-grotesk text-[11px] font-semibold text-bone/55 group-hover:text-yellow">↗</span>

              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={r.img}
                alt=""
                aria-hidden
                className="pointer-events-none absolute right-[12vw] top-1/2 hidden h-[150%] w-36 -translate-y-1/2 rotate-2 object-cover opacity-0 grayscale transition-opacity duration-300 group-hover:opacity-80 lg:block"
              />
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default SelectedWork;
