import { ReactNode } from "react";

interface IconProps {
  children: ReactNode;
  className?: string;
}
const Icon = ({ children, className = "h-5 w-5" }: IconProps) => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    aria-hidden="true"
  >
    {children}
  </svg>
);

export default Icon;
