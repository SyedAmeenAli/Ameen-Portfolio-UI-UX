import Link from "next/link";

const CATS = [
  { n: "01", t: "Brand Identity", d: "Visual systems, identities & campaigns", href: "/work/branding" },
  { n: "02", t: "Logo Design", d: "Marks, symbols & identity systems", href: "/work/logos" },
  { n: "03", t: "Posters", d: "Experimental graphic compositions", href: "/work/posters" },
  { n: "04", t: "Illustration", d: "Characters, concepts & visual art", href: "/work/illustration" },
  { n: "05", t: "UI / UX", d: "Digital experiences & interfaces", href: "/work/typography" },
  { n: "06", t: "Experimental", d: "Play, research & creative experiments", href: "/work/colours" },
];

/** The six-column editorial category grid, shared by home + /work. */
export function CategoryStrip() {
  return (
    <section className="grid border-y border-purple/40 sm:grid-cols-2 lg:grid-cols-6">
      {CATS.map((c, i) => (
        <Link
          key={c.n}
          href={c.href}
          className={`group flex flex-col justify-between gap-6 px-5 py-8 transition-colors hover:bg-purple/10 ${
            i ? "border-t border-purple/25 lg:border-l lg:border-t-0" : ""
          }`}
        >
          <div>
            <span className="block font-condensed text-[clamp(2.4rem,4vw,3.4rem)] leading-none text-purple transition-colors group-hover:text-yellow">
              {c.n}
            </span>
            <h3 className="mt-3 font-condensed text-xl uppercase leading-none text-bone transition-transform group-hover:translate-x-1">
              {c.t}
            </h3>
            <p className="mt-2 font-grotesk text-[11px] font-medium leading-snug text-bone/50">{c.d}</p>
          </div>
          <span className="inline-flex items-center gap-2 font-grotesk text-[10px] font-semibold uppercase tracking-[0.2em] text-yellow">
            <span className="transition-transform group-hover:translate-x-1">↗</span> Explore
          </span>
        </Link>
      ))}
    </section>
  );
}

export default CategoryStrip;
