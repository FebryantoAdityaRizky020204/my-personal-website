"use client";

import { MoveUp } from "lucide-react";
import { useEffect, useState } from "react";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300";

function BackToTop() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <a
      href="#beranda"
      aria-label="Kembali ke atas"
      className={`fixed bottom-6 right-6 z-40 rounded-full border border-slate-700 bg-slate-900/90 p-3 text-slate-200 backdrop-blur transition-all duration-300 hover:border-sky-300 hover:text-sky-300 ${focusRing} ${
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0"
      }`}
    >
      <MoveUp className="h-[18px]" />
    </a>
  );
}

export default BackToTop;
