import { MouseEvent, ReactNode, useRef } from "react";

// Tombol yang tertarik ke kursor (gaya Magnet)
function Magnet({ children }: { children: ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);
  const move = (e: MouseEvent<HTMLDivElement>) => {
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const dx = e.clientX - (r.left + r.width / 2);
    const dy = e.clientY - (r.top + r.height / 2);
    el.style.transform = `translate(${dx * 0.18}px, ${dy * 0.18}px)`;
  };
  const leave = () => {
    if (ref.current) ref.current.style.transform = "";
  };
  return (
    <div
      ref={ref}
      onMouseMove={move}
      onMouseLeave={leave}
      className="inline-block transition-transform duration-200 ease-out"
    >
      {children}
    </div>
  );
}

export default Magnet;
