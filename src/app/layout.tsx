import type { Metadata } from "next";
import { Bagel_Fat_One, Geist_Mono, Schibsted_Grotesk } from "next/font/google";

import { MotionProvider } from "@/components/shared/motion-provider";
import "./globals.css";

// Chunky, rounded display face: wordmark, headings and big numbers.
const bagel = Bagel_Fat_One({
  variable: "--font-bagel",
  weight: "400",
  subsets: ["latin"],
});

// Everything else.
const body = Schibsted_Grotesk({
  variable: "--font-body",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "MINILA | Small things, big joy",
  description:
    "MINILA is a fictional lifestyle brand for cute, useful little things. A practice project inspired by MINISO, built by ReignTek.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bagel.variable} ${body.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col">
        <MotionProvider>{children}</MotionProvider>
      </body>
    </html>
  );
}
