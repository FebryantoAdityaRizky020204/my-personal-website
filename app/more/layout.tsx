import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./../globals.css";
import Footer from "@/components/ui/footer";
import Navbar from "@/components/ui/navbar";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        <div className="h-20"></div>
        {children}
        <Footer />
      </body>
    </html>
  );
}
