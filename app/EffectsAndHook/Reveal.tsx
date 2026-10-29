import { ReactNode } from "react";
import useInView from "./useInView";

interface RevealProps {
  children: ReactNode;
  delay?: number;
  className?: string;
}

function Reveal({ children, delay = 0, className = "" }: RevealProps) {
  const [ref, inView] = useInView<HTMLDivElement>(0.12);
  return (
    <div
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal ${inView ? "in" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

export default Reveal;
