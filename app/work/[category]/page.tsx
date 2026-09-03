import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MINDMAP } from "@/lib/site";

const REAL = new Set(["logos", "branding", "posters"]);

export function generateStaticParams() {
  return MINDMAP.filter((m) => !REAL.has(m.key)).map((m) => ({ category: m.key }));
}

export async function generateMetadata({ params }: PageProps<"/work/[category]">): Promise<Metadata> {
  const { category } = await params;
  const node = MINDMAP.find((m) => m.key === category);
  return { title: node ? node.label : "Work" };
}

export default async function CategoryPage({ params }: PageProps<"/work/[category]">) {
  const { category } = await params;
  const node = MINDMAP.find((m) => m.key === category);
  if (!node || REAL.has(category)) notFound();
  return (
    <main className="flex min-h-screen flex-col justify-between px-[3vw] pb-[10vh] pt-8">
      <Link href="/" className="font-mono text-[10px] uppercase tracking-[0.35em] text-bone/40 hover:text-gold">
        &larr; back
      </Link>
      <div>
        <p className="font-mono text-[11px] uppercase tracking-[0.35em] text-gold">in progress</p>
        <h1 className="mt-4 font-display text-[clamp(2.4rem,11vw,10rem)] uppercase leading-[0.82]">{node.label}</h1>
        <p className="mt-4 max-w-md text-sm text-bone/55">This set is being put together. It lands here soon.</p>
      </div>
      <Link href="/work/logos" className="font-mono text-[11px] uppercase tracking-widest text-gold">
        see logos &amp; marks &rarr;
      </Link>
    </main>
  );
}
