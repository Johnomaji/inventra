import type { Metadata } from "next";
import { Syne, DM_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const syne = Syne({
  variable: "--font-syne",
  subsets: ["latin"],
  weight: ["400", "700", "800"],
});

const dmSans = DM_Sans({
  variable: "--font-dm-sans",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const BASE = "https://inventra.ai";

export const metadata: Metadata = {
  metadataBase: new URL(BASE),
  title: {
    default: "Inventra — The Intelligent OS for African Commerce",
    template: "%s — Inventra",
  },
  description:
    "Inventra fuses AI, Augmented Reality, and Virtual Reality into one unified platform — giving African businesses total intelligence over their inventory, supply chain, and growth.",
  keywords: ["inventory management", "AI", "AR", "VR", "Africa", "business", "supply chain", "Nigeria", "Ghana", "Kenya"],
  openGraph: {
    type: "website",
    url: BASE,
    siteName: "Inventra",
    title: "Inventra — The Intelligent OS for African Commerce",
    description:
      "AI, AR, and VR-powered inventory intelligence built for African businesses. Total visibility over your stock, supply chain, and growth.",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Inventra — The Intelligent OS for African Commerce" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inventra — The Intelligent OS for African Commerce",
    description: "AI, AR, and VR-powered inventory intelligence built for African businesses.",
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
      className={`${syne.variable} ${dmSans.variable} ${spaceMono.variable}`}
      suppressHydrationWarning
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
