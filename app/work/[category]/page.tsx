import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CATEGORIES } from "@/lib/site";
import { POSTERS, SOCIAL, THUMBS, ILLOS, MOTION } from "@/lib/work";
import { WorkHero } from "@/components/sections/work-hero";
import { Gallery } from "@/components/sections/gallery";
import { MotionGallery } from "@/components/sections/motion-gallery";

const OWN_ROUTE = new Set(["logos", "branding", "typography", "colours", "illustration", "motion", "social", "thumbnails"]);
const SET = CATEGORIES.filter((c) => !OWN_ROUTE.has(c.key));

const DATA: Record<string, { pieces: typeof POSTERS; tile: "ink" | "paper"; fit: "cover" | "contain" }> = {
  posters: { pieces: POSTERS, tile: "ink", fit: "cover" },
  social: { pieces: SOCIAL, tile: "ink", fit: "cover" },
  thumbnails: { pieces: THUMBS, tile: "ink", fit: "cover" },
  illustration: { pieces: ILLOS, tile: "paper", fit: "contain" },
};

export function generateStaticParams() {
  return SET.map((c) => ({ category: c.key }));
}

export async function generateMetadata({ params }: PageProps<"/work/[category]">): Promise<Metadata> {
  const { category } = await params;
  const c = CATEGORIES.find((x) => x.key === category);
  return { title: c ? c.label : "Work" };
}

export default async function CategoryPage({ params }: PageProps<"/work/[category]">) {
  const { category } = await params;
  const c = CATEGORIES.find((x) => x.key === category);
  if (!c || OWN_ROUTE.has(category)) notFound();

  const idx = CATEGORIES.findIndex((x) => x.key === category);
  const next = CATEGORIES[(idx + 1) % CATEGORIES.length];

  return (
    <main className="relative bg-void">
      <WorkHero category={c} />

      {c.kind === "motion" ? (
        <MotionGallery pieces={MOTION} />
      ) : (
        <Gallery pieces={DATA[category].pieces} tile={DATA[category].tile} fit={DATA[category].fit} />
      )}

      <footer className="border-t border-purple/25 px-[4vw] py-[14vh] text-center">
        <p className="font-mono text-[10px] uppercase tracking-[0.35em] text-bone/50">next</p>
        <Link href={next.href} className="mt-4 inline-block font-display text-[clamp(1.8rem,7vw,4.5rem)] uppercase text-bone hover:text-red">
          {next.label} →
        </Link>
      </footer>
    </main>
  );
}
