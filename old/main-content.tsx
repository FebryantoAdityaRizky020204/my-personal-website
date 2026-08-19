"use client";
import React, { useEffect, useState, useRef } from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function MainContent() {
  const [num, setNum] = useState(5);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null); // Gunakan useRef untuk menyimpan ID timer

  // useEffect pertama: Khusus untuk menjalankan timer
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setNum((prevNum) => prevNum - 1);
    }, 1000);

    // Cleanup saat komponen di-unmount
    return () => {
      if (timerRef.current !== null) {
        clearInterval(timerRef.current);
      }
    };
  }, []); // Array kosong: Interval hanya dibuat sekali

  // useEffect kedua: Khusus untuk mengecek perubahan nilai num
  useEffect(() => {
    if (num === 0) {
      // Pindah ke link eksternal di client-side menggunakan window.location.href
      window.location.href = "https://www.youtube.com/watch?v=dQw4w9WgXcQ";
    }
  }, [num]); // Dijalankan setiap kali num berubah

  // Fungsi dipindah ke luar agar bisa dibaca oleh onClick
  const stopCount = () => {
    if (timerRef.current !== null) {
      clearInterval(timerRef.current);
    }
  };

  return (
    <div className="relative p-0 m-0 min-h-screen w-full select-none bg-white text-black dark:bg-zinc-950 dark:text-white">
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
          <Link href="/adit">Adit</Link>
        </div>
      </div>

      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 cursor-pointer"
        onClick={stopCount}
      >
        <p className="text-6xl font-bold font-mono text-zinc-400 dark:text-zinc-700 opacity-[0.37] tracking-wider">
          WAIT {num <= 2 && "CLICK ME 😅 "} {num == 0 && "SORRY"} {num}
        </p>
      </div>
    </div>
  );
}
