import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { MINDMAP } from "@/lib/site";

export function generateStaticParams() {
  return MINDMAP.filter((m) => m.key !== "logos").map((m) => ({ category: m.key }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[category]">): Promise<Metadata> {
  const { category } = await params;
  const node = MINDMAP.find((m) => m.key === category);
  return { title: node ? node.label : "Work" };
}

export default async function CategoryPage({
  params,
}: PageProps<"/work/[category]">) {
  const { category } = await params;
  const node = MINDMAP.find((m) => m.key === category);
  if (!node) notFound();

  return (
    <main className="flex-1">
      <header className="relative isolate overflow-hidden bg-ink pb-24 pt-24 text-paper">
        <div
          aria-hidden
          className="grain absolute inset-0 -z-10 opacity-70"
          style={{
            background:
              "radial-gradient(120% 80% at 50% 0%, #2a2340 0%, #14121c 45%, #0b0b0c 100%)",
          }}
        />
        <div
          aria-hidden
          className="absolute inset-x-0 bottom-0 h-10 bg-paper"
          style={{
            clipPath:
              "polygon(0 60%,3% 40%,7% 70%,12% 45%,18% 75%,24% 48%,30% 72%,37% 44%,45% 70%,52% 46%,60% 74%,68% 45%,76% 72%,84% 46%,92% 74%,100% 50%,100% 100%,0 100%)",
          }}
        />
        <div className="mx-auto w-[min(1100px,92vw)]">
          <Link
            href="/"
            className="font-mono text-[11px] uppercase tracking-[0.3em] text-paper/50 hover:text-yellow"
          >
            ← back
          </Link>
          <div className="mt-6 inline-block -rotate-2">
            <span className="grain torn inline-block bg-pure px-8 py-5 font-display text-4xl uppercase leading-[0.85] text-ink shadow-lift md:text-6xl">
              {node.label}
            </span>
          </div>
        </div>
      </header>

      <section className="mx-auto w-[min(1100px,92vw)] py-24 text-center">
        <p className="font-mono text-[11px] uppercase tracking-[0.3em] text-purple">
          in progress
        </p>
        <p className="mx-auto mt-4 max-w-md text-sm text-ink/55">
          This set is being put together. The work lands here soon.
        </p>
        <Link
          href="/work/logos"
          className="mt-8 inline-block border border-ink px-5 py-2 font-mono text-[10px] uppercase tracking-widest transition-colors hover:bg-purple hover:text-pure"
        >
          see logos &amp; marks
        </Link>
      </section>
    </main>
  );
}
