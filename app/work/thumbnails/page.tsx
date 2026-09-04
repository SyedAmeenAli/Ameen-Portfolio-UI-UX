import type { Metadata } from "next";
import { PageShell } from "@/components/sections/page-shell";
import { MediaGrid } from "@/components/sections/media-grid";
import { THUMBS } from "@/lib/work";

export const metadata: Metadata = { title: "Thumbnails" };

const CAT: Record<string, string> = {
  "architecture-thumbnail-design": "Architecture",
  "character-surviving-with-1-hp": "Gaming",
  "cricket-batter-hitting-last-ball": "Cricket",
  "designing-expensive-coffee-youtu": "Coffee",
  "football-player-striking-ball": "Football",
};

const items = THUMBS.map((t, i) => ({
  src: t.file,
  title: (CAT[t.slug] ?? t.title).toUpperCase(),
  meta: "16:9 · thumbnail",
  n: String(i + 1).padStart(2, "0"),
  span: i === 0 ? "md:col-span-2 md:row-span-2" : i === 3 ? "md:col-span-2" : "",
}));

export default function ThumbnailsPage() {
  return (
    <PageShell
      active="work" label="Thumbnails"
      header={{
        num: "08", line1: "Fast", line2: "Signal",
        sub: ["Architecture", "Gaming", "Cricket", "Coffee", "Football"],
        copy: "Thumbnails — stop the scroll. One face, one promise, maximum contrast.",
      }}
    >
      <MediaGrid items={items} rows="auto-rows-[52vw] sm:auto-rows-[30vw] md:auto-rows-[16vw]" cols="grid-cols-1 md:grid-cols-4" />
    </PageShell>
  );
}
