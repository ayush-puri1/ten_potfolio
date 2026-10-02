import type { Metadata, Viewport } from "next";
import { Space_Grotesk, Bebas_Neue, Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

const bebasNeue = Bebas_Neue({
  variable: "--font-bebas-neue",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const viewport: Viewport = {
  themeColor: "#050505",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  title: "AYUSH PURI — Builder / Marketer / Event & Community Strategist",
  description:
    "A personal pitch at the intersection of technology, business, marketing, events, and community. Created for The Exotics Network (TEN).",
  keywords: [
    "Ayush Puri",
    "Builder",
    "Operator",
    "Community Leadership",
    "The Exotics Network",
    "DelRaw",
    "Live Events",
    "Brand Partnerships",
    "Commercial Operations",
  ],
  authors: [{ name: "Ayush Puri" }],
  openGraph: {
    title: "AYUSH PURI — TECH × BUSINESS × EVENTS × MARKETING",
    description:
      "I like building things that people can see, use, experience and remember. Personal pitch for The Exotics Network (TEN).",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "AYUSH PURI — Builder × Strategist",
    description:
      "Tech × Business × Marketing × Events. One Person. Many Builds.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${spaceGrotesk.variable} ${bebasNeue.variable} ${inter.variable} ${jetbrainsMono.variable} dark bg-[#050505] text-[#FAFAFA] antialiased selection:bg-white selection:text-black`}
    >
      <body className="min-h-screen bg-[#050505] text-[#FAFAFA] font-sans overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
