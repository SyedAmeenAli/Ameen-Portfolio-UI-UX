import type { Metadata, Viewport } from "next";
import { Fraunces, Anton, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import { StyledRegistry } from "@/components/styled-registry";
import { SmoothScroll } from "@/components/smooth-scroll";
import { PortfolioIntro } from "@/components/portfolio-intro";
import { SITE } from "@/lib/site";

const serif = Fraunces({ variable: "--font-serif", subsets: ["latin"], display: "swap", axes: ["SOFT", "WONK", "opsz"] });
const condensed = Anton({ variable: "--font-condensed", weight: "400", subsets: ["latin"], display: "swap" });
const grotesk = Space_Grotesk({ variable: "--font-grotesk", subsets: ["latin"], display: "swap" });
const mono = Space_Mono({ variable: "--font-mono", weight: ["400", "700"], subsets: ["latin"], display: "swap" });

const description =
  "Ameen Ali — UI/UX designer & illustrator. I just want my design to live out there instead of only in my head.";

export const metadata: Metadata = {
  title: { default: "Ameen Portfolio", template: "%s — Ameen Portfolio" },
  description,
  openGraph: { title: "Ameen Portfolio", description, type: "website" },
};

export const viewport: Viewport = { themeColor: "#050505", colorScheme: "dark light" };

// Applies the saved theme before first paint (no white flash, no hydration
// mismatch — a plain <script> is not hydrated). No saved value = dark.
const THEME_INIT =
  "try{if(localStorage.getItem('portfolio-theme')==='light')" +
  "document.documentElement.setAttribute('data-theme','light')}catch(e){}";

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" suppressHydrationWarning className={`${serif.variable} ${condensed.variable} ${grotesk.variable} ${mono.variable}`}>
      <head>
        {/* eslint-disable-next-line @next/next/no-sync-scripts */}
        <script>{THEME_INIT}</script>
      </head>
      <body className="grain bg-void text-bone">
        <PortfolioIntro />
        <StyledRegistry>
          <SmoothScroll>
            <div className="relative z-10">{children}</div>
          </SmoothScroll>
        </StyledRegistry>
      </body>
    </html>
  );
}
