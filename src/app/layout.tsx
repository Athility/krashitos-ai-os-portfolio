import type { Metadata } from "next";
import { Inter, Geist_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "KRASHITOS AI-OS | Developer Portfolio",
  description: "AI-native builder and automation-focused developer. Explore the interactive systemic portfolio of Krashitos.",
  keywords: ["Krashitos", "AI Developer", "Portfolio", "Next.js", "AI-OS"],
  authors: [{ name: "Krashitos" }],
  openGraph: {
    title: "KRASHITOS AI-OS",
    description: "Interactive AI operating system dashboard portfolio.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${geistMono.variable} antialiased bg-black min-h-screen selection:bg-primary/30 selection:text-white`}
      >
        <div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#0f172a]/40 via-background to-background pointer-events-none" />
        {children}
      </body>
    </html>
  );
}
