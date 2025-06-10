import type { Metadata } from "next";
import "./globals.css";
import ScrollUp from "@/components/ScrollUp";
import localFont from "next/font/local";

const cairo = localFont({
  src: "./fonts/Cairo-Bold.woff2",
  variable: "--cairo",
});

export const metadata: Metadata = {
  title: "Yahya Mohamed's Portfolio",
  description: "Yahya Mohamed's Portfolio",
  icons: ["/favicon.ico"],
  keywords: [
    "portfolio",
    "web developer",
    "frontend developer",
    "react developer",
    "next.js developer",
    "web design",
    "web development",
    "responsive design",
    "UI/UX design",
    "JavaScript",
    "HTML",
    "CSS",
    "React",
    "Next.js",
    "WordPress",
    "Yahya Mohamed",
    "Yahya Mohamed's Portfolio",
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body className={` ${cairo.variable} antialiased`}>
        <ScrollUp />
        {children}
      </body>
    </html>
  );
}
