import Link from "next/link";

const CATS = [
  { n: "01", t: "Brand Identity", d: "Identity systems, sketch to application", href: "/work/branding" },
  { n: "02", t: "Logos", d: "Marks, symbols & identity studies", href: "/work/logos" },
  { n: "03", t: "Posters", d: "Experimental graphic compositions", href: "/work/posters" },
  { n: "04", t: "Illustrations", d: "Characters, concepts & visual explorations", href: "/work/illustration" },
  { n: "05", t: "YouTube Thumbnails", d: "Fast visual communication", href: "/work/thumbnails" },
  { n: "06", t: "2D / 3D Animations", d: "Kinetic type, loops, material studies", href: "/work/motion" },
  { n: "07", t: "Typography", d: "Type as a discipline — voice, pairing, system", href: "/work/typography" },
  { n: "08", t: "Colours", d: "Colour as a design decision", href: "/work/colours" },
  { n: "09", t: "Social Media", d: "Campaign systems — one idea across a feed", href: "/work/social" },
];

/** The editorial category grid, shared by home + /work. Nine disciplines, 3×3. */
export function CategoryStrip() {
  return (
    <section className="grid border-y border-purple/40 sm:grid-cols-2 lg:grid-cols-3">
      {CATS.map((c, i) => (
        <Link
          key={c.n}
          href={c.href}
          className={`group flex flex-col justify-between gap-6 border-purple/25 px-5 py-8 transition-colors hover:bg-purple/10 ${
            i % 3 !== 0 ? "lg:border-l" : ""
          } ${i % 2 !== 0 ? "sm:border-l" : ""} ${i >= 1 ? "border-t sm:border-t-0" : ""} ${
            i >= 2 ? "lg:border-t" : ""
          } ${i >= 3 ? "sm:border-t" : ""}`}
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
