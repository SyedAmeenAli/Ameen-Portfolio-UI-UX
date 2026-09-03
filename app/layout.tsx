import type { Metadata, Viewport } from "next";
import { Archivo_Black, Anton, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import { StyledRegistry } from "@/components/styled-registry";
import { SectionNoise } from "@/components/ui/section-noise";
import { SmoothScroll } from "@/components/smooth-scroll";
import { SITE } from "@/lib/site";

const display = Archivo_Black({ variable: "--font-display", weight: "400", subsets: ["latin"], display: "swap" });
const condensed = Anton({ variable: "--font-condensed", weight: "400", subsets: ["latin"], display: "swap" });
const grotesk = Space_Grotesk({ variable: "--font-grotesk", subsets: ["latin"], display: "swap" });
const mono = Space_Mono({ variable: "--font-mono", weight: ["400", "700"], subsets: ["latin"], display: "swap" });

const description =
  "Ameen Ali — UI/UX designer & illustrator. I just want my design to live out there instead of only in my head.";

export const metadata: Metadata = {
  title: { default: `${SITE.name} — ${SITE.role}`, template: `%s — ${SITE.name}` },
  description,
  openGraph: { title: `${SITE.name} — ${SITE.role}`, description, type: "website" },
};

export const viewport: Viewport = { themeColor: "#0a0a0b", colorScheme: "dark" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${condensed.variable} ${grotesk.variable} ${mono.variable} h-full`}>
      <body className="min-h-full bg-ink text-bone">
        <SectionNoise opacity={0.04} />
        <StyledRegistry>
          <SmoothScroll>
            <div className="relative z-10">{children}</div>
          </SmoothScroll>
        </StyledRegistry>
      </body>
    </html>
  );
}
