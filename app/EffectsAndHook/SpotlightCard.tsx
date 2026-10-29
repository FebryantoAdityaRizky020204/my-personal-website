"use client";

import { MouseEvent, ReactNode } from "react";

// Kartu dengan cahaya yang mengikuti kursor (gaya Spotlight Card)
interface SpotlightCardProps {
  children: ReactNode;
  className?: string;
  innerClassName?: string;
}

function SpotlightCard({
  children,
  className = "",
  innerClassName = "flex-col",
}: SpotlightCardProps) {
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--x", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--y", `${e.clientY - r.top}px`);
  };
  return (
    <div
      onMouseMove={onMove}
      className={`spotlight relative overflow-hidden rounded-2xl border border-slate-800 bg-slate-900/50 transition-colors hover:border-blue-500/40 ${className}`}
    >
      <div className="spotlight-glow pointer-events-none absolute inset-0" />
      <div className={`relative flex h-full ${innerClassName}`}>{children}</div>
    </div>
  );
}

export default SpotlightCard;
