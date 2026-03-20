import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Troy Effner — Principal Research Technologist",
  description:
    "I design and operate custom research systems — combining deep qualitative methodology with platform thinking to make the craft of understanding people fast, repeatable, and real.",
  metadataBase: new URL("https://divergent-networks.com"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Troy Effner — Principal Research Technologist",
    description:
      "Boutique research and strategy practice. Divergent Networks.",
    url: "https://divergent-networks.com",
    siteName: "Divergent Networks",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Troy Effner — Principal Research Technologist",
    description:
      "Boutique research and strategy practice. Divergent Networks.",
  },
  robots: {
    index: true,
    follow: true,
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-brand-bg text-brand-text font-sans antialiased">
        {children}
        <Analytics />
      </body>
    </html>
  );
}
