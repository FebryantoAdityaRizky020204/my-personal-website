import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function MainContent() {
  return (
    <div className="relative p-0 m-0 min-h-screen w-full select-none bg-white text-black dark:bg-zinc-950 dark:text-white">
      {/* Konten Utama */}
      <div className="p-8 m-0 max-w-7xl">
        <div className="flex flex-col gap-2 font-mono">
          <h1 className="text-4xl font-bold leading-none tracking-tight">
            Hello World!!!
          </h1>
          <h2 className="text-3xl font-semibold leading-none">
            just hello now 😁
          </h2>
          <p className="text-base leading-none flex items-center gap-2">
            another steps to make a big jump
            <Link
              href="https://www.youtube.com/watch?v=dQw4w9WgXcQ"
              target="_self"
              className="relative animate-[troll_4s_infinite_linear] inline-flex items-center"
            >
              <ArrowRight className="w-4 h-4" />
            </Link>
          </p>
        </div>
      </div>

      {/* Teks "NOT YET" di Tengah Layar */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
        <p className="text-6xl font-bold font-mono text-zinc-400 dark:text-zinc-700 opacity-[0.37] tracking-wider">
          NOT YET
        </p>
      </div>
    </div>
  );
}
