import { ReactNode } from "react";

const Chip = ({ children }: { children: ReactNode }) => (
  <li className="rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1.5 text-sm text-sky-200">
    {children}
  </li>
);

export default Chip;
