const CONTACT = "amelio123ali@gmail.com";

/** Compact three-part editorial footer. Shared home + /work. */
export function SiteFooter({ mid = "Scroll to continue ↓" }: { mid?: string }) {
  return (
    <footer className="flex flex-wrap items-center justify-between gap-4 px-[4vw] py-6 font-grotesk text-[9px] font-semibold uppercase tracking-[0.24em] text-bone/45">
      <span className="flex items-center gap-3">
        <span className="font-condensed text-base text-yellow">AM</span>
        © 2026 Ameen Ali · All rights reserved.
      </span>
      <span className="text-bone/35">{mid}</span>
      <a href={`mailto:${CONTACT}`} className="text-yellow hover:underline">Work together ↗</a>
    </footer>
  );
}

export default SiteFooter;
