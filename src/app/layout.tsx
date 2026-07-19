import type { Metadata } from "next";
import type { ReactNode } from "react";
import "../styles.css";
import { Providers } from "./providers";

export const metadata: Metadata = {
  title: "ForteBethel — Capital Relocation for a Wider World",
  description:
    "ForteBethel S.A. is a Panama-based global advisory firm guiding families, founders, and investors through capital relocation, global mobility, and worldwide investment access.",
  authors: [{ name: "ForteBethel" }],
  openGraph: {
    title: "ForteBethel — Capital Relocation for a Wider World",
    description:
      "Private, relationship-led advisory across capital relocation, jurisdictional strategy, and worldwide investment opportunities.",
    type: "website",
    siteName: "ForteBethel",
  },
  twitter: {
    card: "summary",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,500;0,600;1,400&family=Inter:wght@300;400;500;600&display=swap"
        />
      </head>
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
