import type { Metadata } from "next";
import { PageShell } from "@/components/sections/page-shell";
import { MediaGrid } from "@/components/sections/media-grid";
import { SOCIAL } from "@/lib/work";

export const metadata: Metadata = { title: "Social Design" };

type Campaign = { key: string; name: string; tag: string; match: RegExp };

const CAMPAIGNS: Campaign[] = [
  { key: "auren", name: "Auren", tag: "Skincare · botanical", match: /auren|botanical/ },
  { key: "koro", name: "Koro", tag: "Coffee · architectural", match: /koro|coffee|espresso|detective/ },
  { key: "orbital-house", name: "Orbital House", tag: "Hotel · space concept", match: /orbital|hotel|elevator/ },
  { key: "velora", name: "Velora", tag: "Footwear · motion", match: /velora|shoe|table-passing|giant-shoe/ },
];

const cap = (s: string) => s.replace(/-/g, " ").replace(/\b\w/g, (c) => c.toUpperCase());

export default function SocialPage() {
  const assigned = new Set<string>();
  const sections = CAMPAIGNS.map((c) => {
    const items = SOCIAL.filter((s) => !s.slug.includes("logo") && c.match.test(s.slug));
    items.forEach((s) => assigned.add(s.slug));
    return { c, items };
  }).filter((x) => x.items.length);

  const rest = SOCIAL.filter((s) => !s.slug.includes("logo") && !assigned.has(s.slug));

  return (
    <PageShell
      active="work"
      label="Social Design"
      quote={"One idea · across a feed."}
      header={{
        num: "09",
        line1: "Social",
        line2: "Systems",
        sub: ["Campaigns", "Post systems", "Ad creative", "One idea across a feed"],
        copy: "Concept campaigns — a single visual language stretched across a feed.",
      }}
    >
      {sections.map(({ c, items }, ci) => (
        <section key={c.key} className="border-b border-purple/40">
          <div className="flex items-baseline justify-between px-[4vw] py-4">
            <h2 className="font-condensed text-[clamp(1.8rem,6vw,4rem)] uppercase leading-none text-bone">
              <span className="mr-3 text-purple">{String(ci + 1).padStart(2, "0")}</span>{c.name}
            </h2>
            <span className="font-grotesk text-[10px] font-semibold uppercase tracking-[0.16em] text-yellow">{c.tag} · {items.length}</span>
          </div>
          <MediaGrid
            items={items.map((s, i) => ({ src: s.file, title: `${String(i + 1).padStart(2, "0")} / ${c.name}`, meta: cap(s.slug.replace(c.key + "-", "")) }))}
            rows="auto-rows-[64vw] sm:auto-rows-[40vw] md:auto-rows-[22vw]"
            cols="grid-cols-2 md:grid-cols-4"
          />
        </section>
      ))}

      {rest.length > 0 && (
        <section className="border-b border-purple/40">
          <div className="flex items-baseline justify-between px-[4vw] py-4">
            <h2 className="font-condensed text-[clamp(1.8rem,6vw,4rem)] uppercase leading-none text-bone">
              <span className="mr-3 text-purple">0{sections.length + 1}</span>Concept Studies
            </h2>
            <span className="font-grotesk text-[10px] font-semibold uppercase tracking-[0.16em] text-yellow">Ad direction · {rest.length}</span>
          </div>
          <MediaGrid
            items={rest.map((s) => ({ src: s.file, title: cap(s.slug), meta: "Concept" }))}
            rows="auto-rows-[64vw] sm:auto-rows-[40vw] md:auto-rows-[22vw]"
            cols="grid-cols-2 md:grid-cols-4"
          />
        </section>
      )}
    </PageShell>
  );
}
