import type { Metadata, Viewport } from "next";
import { Archivo_Black, Space_Grotesk, Space_Mono } from "next/font/google";
import "./globals.css";
import { SmoothScroll } from "@/components/smooth-scroll";
import { MobileNotice } from "@/components/mobile-notice";
import { CrackDefs } from "@/components/logos/crack";
import { PaperDefs } from "@/components/paper/paper-defs";
import { SoundToggle } from "@/components/sound-toggle";
import { PageTransition } from "@/components/page-transition";
import { SITE } from "@/lib/site";

const display = Archivo_Black({
  variable: "--font-display",
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});
const sans = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});
const mono = Space_Mono({
  variable: "--font-mono",
  weight: ["400", "700"],
  subsets: ["latin"],
  display: "swap",
});

const description =
  "I turn ideas into experiences that feel as good as they look. UI/UX designer driven by curiosity, creativity, and a little controlled chaos.";

export const metadata: Metadata = {
  title: {
    default: `${SITE.name} — ${SITE.role}`,
    template: `%s — ${SITE.name}`,
  },
  description,
  applicationName: `${SITE.name} Portfolio`,
  authors: [{ name: SITE.name }],
  keywords: [
    "UI/UX designer",
    "portfolio",
    "branding",
    "visual design",
    "illustration",
    "motion design",
    SITE.name,
  ],
  openGraph: {
    title: `${SITE.name} — ${SITE.role}`,
    description,
    type: "website",
    siteName: `${SITE.name} Portfolio`,
  },
  twitter: { card: "summary_large_image", title: `${SITE.name} — ${SITE.role}`, description },
  icons: { icon: "/icon.svg" },
};

export const viewport: Viewport = {
  themeColor: "#0b0b0c",
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${sans.variable} ${mono.variable} h-full`}
    >
      <body className="min-h-full flex flex-col bg-paper text-ink">
        <PaperDefs />
        <CrackDefs />
        <MobileNotice />
        <PageTransition />
        <SmoothScroll>{children}</SmoothScroll>
        <SoundToggle />
      </body>
    </html>
  );
}
