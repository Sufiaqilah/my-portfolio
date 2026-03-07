import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Sufi Aqilah Zuffri | IT Enthusiast",
  description: "Personal portfolio of Sufi Aqilah, an IT professional from Brunei. Specializing in web development, networking, hardware and cybersecurity.",
  keywords: ["Sufi Aqilah", "IT Brunei", "Web Developer Brunei", "Portfolio"],
  openGraph: {
    title: "Sufi Aqilah | IT Enthusiast & Developer",
    description: "Personal portfolio of Sufi Aqilah, an IT professional from Brunei.",
    url: "https://sufiaqilah.com",
    siteName: "Sufi Aqilah",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-neutral-950 text-white`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}