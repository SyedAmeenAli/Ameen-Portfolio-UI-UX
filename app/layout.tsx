import type { Metadata, Viewport } from "next";
import { Fraunces, Anton, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import { StyledRegistry } from "@/components/styled-registry";
import { SmoothScroll } from "@/components/smooth-scroll";
import { SITE } from "@/lib/site";

const serif = Fraunces({ variable: "--font-serif", subsets: ["latin"], display: "swap", axes: ["SOFT", "WONK", "opsz"] });
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

export const viewport: Viewport = { themeColor: "#ece9e1", colorScheme: "light" };

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${serif.variable} ${condensed.variable} ${grotesk.variable} ${mono.variable} h-full`}>
      <body className="grain min-h-full bg-bone text-ink">
        <StyledRegistry>
          <SmoothScroll>
            <div className="relative z-10">{children}</div>
          </SmoothScroll>
        </StyledRegistry>
      </body>
    </html>
  );
}
