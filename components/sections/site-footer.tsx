import Link from "next/link";

const CONTACT = "amelio123ali@gmail.com";

const NAV = [
  { label: "Logos", href: "/work/logos" },
  { label: "Brand Identity", href: "/work/branding" },
  { label: "Posters", href: "/work/posters" },
  { label: "Illustration", href: "/work/illustration" },
  { label: "Thumbnails", href: "/work/thumbnails" },
  { label: "2D / 3D Motion", href: "/work/motion" },
  { label: "Typography", href: "/work/typography" },
  { label: "Colour", href: "/work/colours" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
];

/** Strong final footer — statement + full nav + contact. Shared everywhere. */
export function SiteFooter({ mid = "Ideas live longer ↓" }: { mid?: string }) {
  return (
    <footer className="grid-lines border-t border-purple/40 px-[4vw] pb-8 pt-[10vh]">
      <p className="font-condensed text-[clamp(2rem,9vw,7rem)] uppercase leading-[0.82] text-bone">
        Let&apos;s make something<br /><span className="text-yellow">worth remembering.</span>
      </p>

      <div className="mt-[6vh] grid gap-[4vh] border-t border-purple/25 pt-6 sm:grid-cols-[1fr_1fr_1fr]">
        <div>
          <p className="font-grotesk text-[9px] font-semibold uppercase tracking-[0.24em] text-purple">Contact</p>
          <a href={`mailto:${CONTACT}`} className="mt-2 block font-grotesk text-sm font-semibold uppercase tracking-wide text-yellow hover:underline">
            {CONTACT}
          </a>
          <p className="mt-1 font-grotesk text-[10px] font-medium uppercase tracking-[0.16em] text-bone/45">Hyderabad, India · Available for select projects</p>
        </div>
        <nav className="grid grid-cols-2 gap-x-4 gap-y-1.5">
          {NAV.map((n) => (
            <Link key={n.label} href={n.href} className="font-grotesk text-[10px] font-semibold uppercase tracking-[0.18em] text-bone/60 hover:text-yellow">
              {n.label} ↗
            </Link>
          ))}
        </nav>
        <div className="flex flex-col items-start justify-between gap-4 sm:items-end">
          <span className="font-condensed text-3xl leading-none text-yellow">AM</span>
          <span className="font-grotesk text-[9px] font-semibold uppercase tracking-[0.24em] text-bone/40 sm:text-right">
            © 2026 Ameen Ali · All rights reserved.<br />{mid}
          </span>
        </div>
      </div>
    </footer>
  );
}

export default SiteFooter;
