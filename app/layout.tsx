import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500", "600", "700"] });

export const metadata: Metadata = {
  title: "R. Murali | Graphic Designer & Creative Director",
  description: "Portfolio of R. Murali — brand systems, motion, and editorial design.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    /* data-scroll-behavior="smooth" ensures Next.js 16 correctly handles GSAP overrides */
    <html lang="en" data-scroll-behavior="smooth">
      <body className={poppins.className}>
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}