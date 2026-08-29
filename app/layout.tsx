import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "D Product Lab — Practical AI Products for Real Business Problems",
  description: "Explore D's working software products for margin protection, documents, privacy, finance, contractors, and website operations.",
  keywords: ["AI product studio", "business software", "workflow automation", "product prototypes"],
  authors: [{ name: "D" }],
  openGraph: {
    title: "D Product Lab",
    description: "Practical products for expensive, repetitive, and frustrating business problems.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
