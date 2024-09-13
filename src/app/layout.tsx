import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Header from "@/ui/Header";
import Footer from "@/ui/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const satoshi = localFont({
  src: [
    {
      path: "./fonts/Satoshi-Light.woff2",
      weight: "300",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Bold.woff2",
      weight: "700",
      style: "normal",
    },
    {
      path: "./fonts/Satoshi-Black.woff2",
      weight: "900",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Staytuneed",
  description:
    "Welcome to Staytuneed, your friendly hub for everything tech, design, and web development! Whether you're diving into React, Next.js, or JavaScript, or looking for the latest design tips and tech news, we've got you covered. Our easy-to-follow tutorials, expert advice, and creative inspiration are here to help developers and designers of all levels grow their skills and stay ahead in the ever-changing world of tech. Stay tuned for content that makes learning fun and keeps you in the know!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={satoshi.className}>
        <Header />
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
