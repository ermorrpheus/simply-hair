import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Footer } from "./components/footer";
import { Navbar } from "./components/navbar";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Simply Hair",
  description:
    "At Simply Hair, we understand that true beauty stems from choices that resonate with your inner self.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${manrope.className} flex min-h-screen flex-col bg-white font-light`}
      >
        <Navbar />
        <main className="flex flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
