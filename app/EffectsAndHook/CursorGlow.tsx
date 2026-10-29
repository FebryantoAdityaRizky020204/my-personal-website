"use client";

import { useEffect, useRef } from "react";

// Cahaya halus yang mengikuti kursor di seluruh halaman (desktop saja)
function CursorGlow() {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const onMove = (e: globalThis.MouseEvent) => {
      if (ref.current) {
        ref.current.style.background = `radial-gradient(520px circle at ${e.clientX}px ${e.clientY}px, rgba(59,130,246,0.07), transparent 60%)`;
      }
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, []);
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed inset-0 z-0 hidden md:block"
    />
  );
}

export default CursorGlow;
