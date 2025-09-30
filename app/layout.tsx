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
  title: "Parker White - CSCI 417 Animations",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative`}
      >
        <div className="stars"></div>
        <div className="twinkling"></div>

        <nav className="absolute top-4 left-1/2 transform -translate-x-1/2 flex gap-6 z-10 bg-gray-900/70 px-6 py-2 rounded-xl shadow-md">
          <a href="/" className="hover:underline">Project 1</a>
          <a href="/project2" className="hover:underline">Project 2</a>
        </nav>

        {children}
      </body>
    </html>
  );
}
