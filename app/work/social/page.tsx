import type { Metadata } from "next";
import { PageShell } from "@/components/sections/page-shell";
import { MediaGrid } from "@/components/sections/media-grid";
import { SOCIAL } from "@/lib/work";

export const metadata: Metadata = { title: "Social Design" };

const CAMPAIGNS = [
  { key: "auren", name: "Auren", tag: "Skincare · botanical study" },
  { key: "koro", name: "Koro", tag: "Coffee · architectural" },
  { key: "orbital-house", name: "Orbital House", tag: "Hotel · space concept" },
  { key: "velora", name: "Velora", tag: "Footwear · motion" },
];

const forCampaign = (k: string) =>
  SOCIAL.filter((s) => s.slug.startsWith(k) && !s.slug.includes("logo")).map((s, i) => ({
    src: s.file, title: `${String(i + 1).padStart(2, "0")} / Post`, meta: s.slug.replace(k + "-", "").replace(/-/g, " "),
  }));

export default function SocialPage() {
  return (
    <PageShell
      active="work" label="Social Design"
      header={{
        num: "07", line1: "Social", line2: "Systems",
        sub: ["Campaigns", "Post systems", "Ad creative", "One idea across a feed"],
        copy: "Four concept campaigns — a single visual language stretched across a feed.",
      }}
    >
      {CAMPAIGNS.map((c, ci) => {
        const items = forCampaign(c.key);
        if (!items.length) return null;
        return (
          <section key={c.key} className="border-b border-purple/40">
            <div className="flex items-baseline justify-between px-[4vw] py-4">
              <h2 className="font-condensed text-[clamp(1.8rem,6vw,4rem)] uppercase leading-none text-bone">
                <span className="mr-3 text-purple">{String(ci + 1).padStart(2, "0")}</span>{c.name}
              </h2>
              <span className="font-grotesk text-[10px] font-semibold uppercase tracking-[0.16em] text-yellow">{c.tag}</span>
            </div>
            <MediaGrid items={items} rows="auto-rows-[64vw] sm:auto-rows-[40vw] md:auto-rows-[22vw]" cols="grid-cols-2 md:grid-cols-4" />
          </section>
        );
      })}
    </PageShell>
  );
}
