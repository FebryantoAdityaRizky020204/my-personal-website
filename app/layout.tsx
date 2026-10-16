import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Logsfolio | Developer Portfolio",
  description:
    "A clean looking FREE portfolio template for devs. Built with NextJS & TailwindCSS",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-[#a229ff] dark:bg-gray-950 grid grid-rows-[auto_1fr_auto] min-h-screen overscroll-none relative`}
        style={{
          backgroundImage: "url('/assets/svg/circuit-board.svg')",
          // backgroundRepeat: "no-repeat",
          // backgroundPosition: "bottom",
          // backgroundSize: "120%",
        }}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
