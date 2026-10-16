import Link from "next/link";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { JSX, SVGProps } from "react";
import { getJSONData } from "@/lib/serverUtils";
import Image from "next/image";
import ThemeToggler from "./themeToggler";

export default async function Navbar() {
  const data = await getJSONData();

  return (
    <header className="fixed top-5 left-5 z-50 w-fit shadow-s">
      <div className="container max-w-5xl mx-auto rounded-md flex items-center gap-2 justify-between py-2 px-4 md:px-6 bg-[#c2c2c250] shadow-sm/50 shadow-[#ffffff] dark:bg-[#3a3a3a50] dark:shadow-sm/50 dark:shadow-white">
        <Link href="/" className="flex items-center me-5" prefetch={false}>
          <Image
            src="/logo/dark-logo-2.png"
            height={40}
            width={40}
            alt={"ARF LOGO LIGHT"}
            className="block dark:hidden transition hover:scale-75 hover:brightness-50"
            style={{ width: "auto", height: "auto" }}
            priority
          />

          {/* hanya muncul di mode GELAP (Dark Mode)*/}
          <Image
            src="/logo/light-logo-2.png"
            height={40}
            width={40}
            alt={"ARF LOGO DARK"}
            className="hidden dark:block transition hover:scale-75 hover:brightness-125"
            style={{ width: "auto", height: "auto" }}
            priority
          />
        </Link>
        <nav className="hidden space-x-4 lg:flex">
          {data.visual.navbar.links.map((item) => (
            <Link
              href={item.path}
              key={item.path}
              className="text-sm transition font-medium px-2 text-gray-350  hover:scale-90  dark:text-gray-50"
            >
              {item.label}
            </Link>
          ))}
          <ThemeToggler />
        </nav>
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="lg:hidden">
              <MenuIcon className="h-6 w-6" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <div className="grid gap-6 p-6">
              <ThemeToggler />
              {data.visual.navbar.links.map((item) => (
                <Link
                  href={item.path}
                  key={item.path}
                  className="text-sm transition-colors text-gray-350 hover:text-primary dark:hover:text-gray-50"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </header>
  );
}

function MenuIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  );
}
