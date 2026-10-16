"use client";

import { useEffect, useState, useSyncExternalStore } from "react";
import { SunIcon, MoonIcon } from "@radix-ui/react-icons";

export default function ThemeToggler() {
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const [globalTheme, setGlobalTheme] = useState<string>(() =>
    typeof window !== "undefined"
      ? localStorage.getItem("globalTheme") || "light"
      : "light",
  );

  const toggleDarkTheme = () => {
    const newTheme = globalTheme === "dark" ? "light" : "dark";
    localStorage.setItem("globalTheme", newTheme);
    setGlobalTheme(newTheme);
  };

  useEffect(() => {
    if (!mounted || !globalTheme) return;

    if (globalTheme === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      document.documentElement.classList.add("dark");
    }
  }, [globalTheme, mounted]);

  return (
    <button
      onClick={toggleDarkTheme}
      className="text-gray-350 ms-3 cursor-pointer"
    >
      {/* Selama SSR dan proses hidrasi, selalu tampilkan MoonIcon (light) 
          agar sama persis dengan hasil render server */}
      {!mounted ? (
        <MoonIcon />
      ) : globalTheme === "dark" ? (
        <SunIcon className="transition text-white hover:scale-125" />
      ) : (
        <MoonIcon className="transition hover:scale-125" />
      )}
    </button>
  );
}
