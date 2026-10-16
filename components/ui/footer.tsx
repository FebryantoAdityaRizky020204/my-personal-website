import Link from "next/link";
import React from "react";

export default function Footer() {
  return (
    <footer className="py-4 px-6 container-lg z-50 w-fit h-fit">
      <p className="text-sm text-gray-400 text-end font-extrabold w-full">
        <span className="bg-[#30AFFF] dark:bg-gray-900 dark:text-shadow-white px-2 py-1 text-[12px] rounded-sm text-[#E3E3E3] fixed bottom-2 right-2">
          Dev on 2026, By{" "}
          <Link href={"https://adityarizkyf.netlify.app/"}>Me</Link>
        </span>
      </p>
    </footer>
  );
}
