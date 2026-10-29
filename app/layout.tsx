import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "next-themes";
import { Inter } from "next/font/google";
import { cn } from "@/lib/utils";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Aditya Rizky Febryanto | Personal Portfolio",
  description:
    "Official portfolio of Aditya Rizky Febryanto. Discover my projects, skills, experience, and work as a Fresh Graduate Informatics Engineering",

  applicationName: "Aditya Rizky Febryanto Portfolio",

  authors: [
    {
      name: "Aditya Rizky Febryanto",
    },
  ],

  openGraph: {
    title: "Aditya Rizky Febryanto | Personal Portfolio",
    description:
      "Explore the projects, skills, and experience of Aditya Rizky Febryanto.",
    type: "website",
    url: "https://adityarizkyf.netlify.app",
    siteName: "Aditya Rizky Febryanto Portfolio",
  },

  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("font-sans", inter.variable)}
    >
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[var(--bg-layout)] flex flex-col min-h-screen h-full w-full relative`}
        style={{
          backgroundImage: "url('/assets/svg/circuit-board.svg')",
        }}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <main className="flex w-full grow flex-row md:flex-col h-full ">
            {children}
          </main>
        </ThemeProvider>
      </body>
    </html>
  );
}
