import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Imran | Full Stack Developer & WordPress Expert",
  description: "Portfolio of Imran, a Full Stack Developer specializing in MERN Stack, WordPress, and high-performance web applications.",
  keywords: ["Full Stack Developer", "MERN Stack", "WordPress", "Next.js", "React", "Web Development", "Portfolio"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black text-white`}
      >
        <div className="bg-noise" />
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
