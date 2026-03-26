import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import "./globals.css";

export const metadata: Metadata = {
  title:
    "Divergent Networks — Understanding lives where the person meets the problem",
  description:
    "Organic Design applied to research, product design, and stakeholder decision-making. We build systems that hold the meeting between person and problem.",
  metadataBase: new URL("https://divergent-networks.com"),
  openGraph: {
    title:
      "Divergent Networks — Understanding lives where the person meets the problem",
    description:
      "Organic Design applied to research, product design, and stakeholder decision-making.",
    url: "/",
    siteName: "Divergent Networks",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary",
    title: "Divergent Networks",
    description:
      "Organic Design applied to research, product design, and stakeholder decision-making.",
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
