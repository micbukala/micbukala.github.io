import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Michał Bukała - Geologist, Scientist, Developer",
  description: "Personal website with peer-review papers and scientific projects",
  keywords: ["science", "geology", "python", "earth", "rocks", "planet"],
  authors: [{ name: "Michał Bukała, PhD" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen bg-slate-900 text-slate-100`}
      >
        {children}
      </body>
    </html>
  );
}
