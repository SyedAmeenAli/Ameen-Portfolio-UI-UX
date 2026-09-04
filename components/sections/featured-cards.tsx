import Link from "next/link";
import { BRANDS } from "@/lib/work";

const BRAND_COPY: Record<string, string> = {
  nexora: "A futuristic visual identity built around technology, structure and visual experimentation.",
  verdant: "A plant-tech identity exploring nature, technology and a more sustainable visual language.",
  auria: "An immersive audio identity exploring sound, atmosphere and sensory experience.",
  terralis: "An earthy lifestyle identity combining tactile materials, natural forms and contemporary design.",
  vayora: "An experimental brand identity built around a distinctive visual language and unconventional form.",
};

type Card = { num: string; name: string; cat: string; year: string; copy: string; img: string; href: string; color?: string };

export const CARDS: Card[] = [
  ...["nexora", "verdant", "auria", "terralis", "vayora"].map((slug, i): Card => {
    const b = BRANDS.find((x) => x.slug === slug)!;
    return { num: String(i + 1).padStart(2, "0"), name: b.name, cat: "Brand Identity", year: "2026", copy: BRAND_COPY[slug], img: b.board, href: "/work/branding", color: b.color };
  }),
  { num: "06", name: "Poster Collection", cat: "Poster Design", year: "2026", copy: "A running series of experimental compositions — music, architecture, glitch, memory.", img: "/posters/electronic-music-poster-afterlight.jpg", href: "/work/posters" },
  { num: "07", name: "Illustration Collection", cat: "Illustration", year: "2026", copy: "Character work in black ink with restrained colour — food people, fashion figures, the odd bird man.", img: "/illustration/apple-princess-in-fashion-pose.png", href: "/work/illustration" },
  { num: "08", name: "Logo Collection", cat: "Logo Design", year: "2026", copy: "Twenty-one marks — emblem, monogram, negative space, heritage.", img: "/logos/altivia.jpg", href: "/work/logos" },
];

/** Featured project card grid. `limit` trims it for the homepage teaser. */
export function FeaturedCards({ limit }: { limit?: number }) {
  const list = limit ? CARDS.slice(0, limit) : CARDS;
  return (
    <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
      {list.map((p) => (
        <Link key={p.num} href={p.href} className="group flex flex-col border border-bone/15 transition-colors hover:border-purple">
          <div className="relative overflow-hidden">
            <span className="absolute left-0 top-0 z-10 bg-bone px-2 py-1 font-grotesk text-[10px] font-bold text-black">{p.num}</span>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={p.img} alt={p.name} className="aspect-[4/5] w-full object-cover transition-transform duration-500 group-hover:scale-[1.04]" />
            <span className="pointer-events-none absolute inset-0 bg-purple/0 transition-colors duration-500 group-hover:bg-purple/15" />
          </div>
          <div className="flex flex-1 flex-col gap-2 p-3">
            <h3 className="font-condensed text-lg uppercase leading-none transition-transform group-hover:translate-x-1" style={p.color ? { color: p.color } : undefined}>
              {p.name}
            </h3>
            <div className="flex justify-between font-grotesk text-[9px] font-semibold uppercase tracking-[0.16em] text-bone/45">
              <span>{p.cat}</span><span>{p.year}</span>
            </div>
            <span className="h-px w-full bg-bone/12" />
            <p className="font-grotesk text-[11px] font-medium leading-snug text-bone/65">{p.copy}</p>
            <span className="mt-auto flex items-center justify-between pt-2 font-grotesk text-[9px] font-semibold uppercase tracking-[0.18em] text-yellow">
              [ View Project ] <span className="transition-transform group-hover:translate-x-1">↗</span>
            </span>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default FeaturedCards;
