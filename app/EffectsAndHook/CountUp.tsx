"use client";

import { useEffect, useState } from "react";
import useInView from "./useInView";

// Angka yang berhitung naik (gaya Count Up)
interface CountUpProps {
  to: number;
  decimals?: number;
  suffix?: string;
}

function CountUp({ to, decimals = 0, suffix = "" }: CountUpProps) {
  const [ref, inView] = useInView<HTMLSpanElement>(0.5);
  const [val, setVal] = useState(0);
  useEffect(() => {
    if (!inView) return undefined;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setVal(to);
      return undefined;
    }
    let raf = 0;
    let start: number | undefined;
    const tick = (t: number) => {
      if (start === undefined) start = t;
      const p = Math.min((t - start) / 1400, 1);
      setVal(to * (1 - Math.pow(1 - p, 3)));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);
  return (
    <span ref={ref}>
      {val.toLocaleString("id-ID", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}

export default CountUp;
