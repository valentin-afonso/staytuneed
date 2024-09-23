import type { Metadata } from "next";
import { Inter } from "next/font/google";
import localFont from "next/font/local";
import Header from "@/ui/Header";
import Footer from "@/ui/Footer";
import ProgressBar from "@/ui/ProgressBar";
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
  openGraph: {
    title: "Staytuneed",
    description:
      "Stay ahead in tech, web development, and design with expert tips, tutorials, and insights. From JavaScript and React to Figma and AI – we cover it all. Let’s innovate together!",
    type: "article",
    url: "https://www.staytuneed.com/",
    images: [
      {
        url: "https://www.staytuneed.com/twitter-image.jpg",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Staytuneed",
    description:
      "Stay ahead in tech, web development, and design with expert tips, tutorials, and insights. From JavaScript and React to Figma and AI – we cover it all. Let’s innovate together!",
    creator: "@staytuneed_off",
    images: [
      {
        url: "https://www.staytuneed.com/twitter-image.jpg",
        width: 1200,
        height: 630,
        alt: "Staytuneed",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={satoshi.className}>
        <ProgressBar />
        <Header />
        <main className="flex min-h-screen max-w-[100vw] overflow-x-hidden flex-col items-center justify-between p-24 max-md:p-4">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
