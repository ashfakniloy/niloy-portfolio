import { Montserrat, Open_Sans } from "next/font/google";
import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import ThemeWrapper from "@/components/Layout/ThemeWrapper";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import ToastNotification from "@/components/ToastNotification";
import "./globals.css";

const openSans = Open_Sans({ subsets: ["latin"] });

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
});

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
        className={`bg-gray-50 text-black dark:bg-custom-gray dark:text-white ${openSans.className} ${montserrat.variable}`}
        // className={`bg-gray-50 text-black dark:bg-custom-gray dark:text-white ${openSans.className} ${montserrat.variable} bg-[radial-gradient(circle_at_17px_17px,#DFE6EF_1px,_transparent_0)] dark:bg-[radial-gradient(circle_at_17px_17px,#1C2026_1px,_transparent_0)] bg-[size:18px_18px] bg-repeat`}
      >
        <ThemeWrapper>
          <ToastNotification duration={5000} closeButton />

          <Navbar />

          <main className="container">{children}</main>

          <Footer />
        </ThemeWrapper>

        <Analytics />
      </body>
    </html>
  );
}
