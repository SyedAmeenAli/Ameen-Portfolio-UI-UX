import type { Metadata, Viewport } from "next";
import { Archivo_Black, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import { StyledRegistry } from "@/components/styled-registry";
import { SectionNoise } from "@/components/ui/section-noise";
import { SpaceBed } from "@/components/space-bed";
import { SmoothScroll } from "@/components/smooth-scroll";
import { SITE } from "@/lib/site";

const display = Archivo_Black({ variable: "--font-display", weight: "400", subsets: ["latin"], display: "swap" });
const grotesk = Space_Grotesk({ variable: "--font-grotesk", subsets: ["latin"], display: "swap" });
const mono = Space_Mono({ variable: "--font-mono", weight: ["400", "700"], subsets: ["latin"], display: "swap" });

const description =
  "Ameen Ali — UI/UX designer. Design because it's art. I just want my design to live out there instead of only in my head.";

export const metadata: Metadata = {
  title: { default: `${SITE.name} — ${SITE.role}`, template: `%s — ${SITE.name}` },
  description,
  openGraph: { title: `${SITE.name} — ${SITE.role}`, description, type: "website" },
};

export const viewport: Viewport = { themeColor: "#060507", colorScheme: "dark" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${display.variable} ${grotesk.variable} ${mono.variable} h-full`}>
      <body className="min-h-full bg-void text-bone">
        <SpaceBed />

        <SectionNoise opacity={0.045} />

        <StyledRegistry>
          <SmoothScroll>
            <div className="relative z-10">{children}</div>
          </SmoothScroll>
        </StyledRegistry>
      </body>
    </html>
  );
}
