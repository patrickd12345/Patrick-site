import type { Metadata } from "next";
import { Instrument_Sans, JetBrains_Mono, Sora } from "next/font/google";

import { SiteShell } from "@/components/site-shell";
import { siteConfig } from "@/lib/site-config";

import "./globals.css";

const display = Sora({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const body = Instrument_Sans({
  variable: "--font-body",
  subsets: ["latin"],
});

const mono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: "Patrick Duchesneau | Founder-Builder and Technical Architect",
    template: "%s | Patrick Duchesneau",
  },
  description:
    "Founder-level technical operator building deterministic product systems across architecture, AI integration, and execution.",
  openGraph: {
    title: "Patrick Duchesneau",
    description:
      "Founder-builder shipping real systems with architectural rigor and production discipline.",
    url: "/",
    siteName: "Patrick Duchesneau",
    type: "website",
    locale: "en_US",
    images: [{ url: "/opengraph-image" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Patrick Duchesneau",
    description:
      "Senior technical architect and founder-builder focused on systems that ship.",
    images: ["/opengraph-image"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${display.variable} ${body.variable} ${mono.variable} h-full antialiased`}
    >
      <body className="min-h-full">
        <SiteShell>{children}</SiteShell>
      </body>
    </html>
  );
}
