import Link from "next/link";

const LINKS = [
  { label: "Work", href: "/work", key: "work" },
  { label: "Identity", href: "/work/branding", key: "identity" },
  { label: "Illustration", href: "/work/illustration", key: "illustration" },
  { label: "Posters", href: "/work/posters", key: "posters" },
  { label: "Experimental", href: "/experimental", key: "experimental" },
  { label: "About", href: "/about", key: "about" },
  { label: "Contact", href: "/contact", key: "contact" },
];

/** Compact editorial nav — metadata attached to the artwork, not a navbar. */
export function SiteNav({ active, label = "Portfolio" }: { active?: string; label?: string }) {
  return (
    <header className="absolute inset-x-0 top-0 z-50">
      <nav className="flex items-center justify-between border-b border-purple/40 px-[4vw] py-4 font-grotesk text-[10px] font-semibold uppercase tracking-[0.22em] text-bone">
        <Link href="/" className="flex items-baseline gap-2">
          <span className="font-condensed text-lg leading-none text-yellow">AM</span>
          <span className="text-purple">/ {label}</span>
        </Link>

        <ul className="hidden gap-4 md:flex">
          {LINKS.map((l) => (
            <li key={l.key}>
              <a
                href={l.href}
                className={`group inline-flex items-center gap-1 transition-transform hover:translate-x-0.5 ${
                  active === l.key ? "text-yellow" : "text-bone/55 hover:text-bone"
                }`}
              >
                {active === l.key && <span className="h-1.5 w-1.5 bg-purple" />}
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <span className="font-condensed text-xl leading-none text-yellow">+</span>
      </nav>
    </header>
  );
}

export default SiteNav;
