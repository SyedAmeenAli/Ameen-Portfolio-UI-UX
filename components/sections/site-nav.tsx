import Link from "next/link";
import { SITE } from "@/lib/site";

const LINKS = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Experiments", href: "#experiments" },
  { label: "Contact", href: "#contact" },
];

/** Compact editorial nav — metadata attached to the artwork, not a navbar. */
export function SiteNav() {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-start justify-between px-[4vw] py-4 font-grotesk text-[10px] font-semibold uppercase tracking-[0.24em] text-bone">
        <Link href="/" className="leading-tight">
          {SITE.name}
          <span className="block text-bone/45">Digital / Visual Designer</span>
        </Link>

        <ul className="hidden gap-6 sm:flex">
          {LINKS.map((l) => (
            <li key={l.label}>
              <a href={l.href} className="group inline-flex items-center gap-1 text-bone/55 transition-transform hover:translate-x-0.5 hover:text-yellow">
                {l.label}
                <span className="text-purple opacity-0 transition-opacity group-hover:opacity-100">↗</span>
              </a>
            </li>
          ))}
        </ul>

        <a href="#index" className="inline-flex items-center gap-1 text-bone/55 hover:translate-x-0.5 hover:text-yellow">
          Index <span className="text-yellow">↗</span>
        </a>
      </nav>
    </header>
  );
}

export default SiteNav;
