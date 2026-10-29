"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

export default function ThemeToggler() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // Mencegah Hydration Mismatch (FOUC)
  useEffect(() => {
    setMounted(true);
  }, []);

  // Selama SSR, tampilkan MoonIcon secara default
  if (!mounted) {
    return (
      <button className="text-gray-350 ms-3 cursor-pointer">
        <MoonIcon />
      </button>
    );
  }

  return (
    <button
      onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      className="text-gray-350 ms-3 cursor-pointer"
    >
      {theme === "dark" ? (
        <SunIcon className="transition text-white hover:scale-125" />
      ) : (
        <MoonIcon className="transition hover:scale-125" />
      )}
    </button>
  );
}
