"use client";

import { useEffect, useState } from "react";

// Garis kemajuan scroll di atas halaman
function ScrollProgress() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setP(h > 0 ? window.scrollY / h : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-0.5">
      <div
        className="h-full origin-left bg-sky-400"
        style={{ transform: `scaleX(${p})` }}
      />
    </div>
  );
}

export default ScrollProgress;
