import { Inter } from "next/font/google";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import ThemeWrapper from "@/components/Layout/ThemeWrapper";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import ToastNotification from "@/components/ToastNotification";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Niloy | Web Developer",
  description:
    "I'm passionate about frontend web development with React and Next.js. I'm also experienced in fullstack development using Next.js. Explore my projects.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`bg-gray-50 text-black dark:bg-custom-gray dark:text-white ${inter.className}`}
      >
        <ThemeWrapper>
          <ToastNotification duration={5000} closeButton />

          <div className="container">
            <Navbar />

            {children}

            <Footer />
          </div>
        </ThemeWrapper>

        <Analytics />
      </body>
    </html>
  );
}
