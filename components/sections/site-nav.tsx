import Link from "next/link";
import { SITE } from "@/lib/site";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experiments", href: "#experiments" },
  { label: "Contact", href: "#contact" },
];

/** Editorial nav — reads as a fragment of a design system, not a navbar. */
export function SiteNav() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-start justify-between px-[4vw] py-4 font-mono text-[9px] uppercase tracking-[0.22em] text-ink sm:text-[10px]">
        <Link href="/" className="leading-tight">
          {SITE.name}
          <span className="block text-ink/55">Digital / Visual Designer</span>
        </Link>

        <ul className="hidden gap-6 sm:flex">
          {LINKS.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="group inline-flex items-center gap-1 text-ink/70 transition-transform hover:translate-x-0.5 hover:text-ink">
                {l.label}
                <span className="opacity-0 transition-opacity group-hover:opacity-100">↗</span>
              </a>
            </li>
          ))}
        </ul>

        <a href="#index" className="inline-flex items-center gap-1 text-ink/70 hover:translate-x-0.5 hover:text-ink">
          Index <span>→</span>
        </a>
      </nav>
    </header>
  );
}

export default SiteNav;
