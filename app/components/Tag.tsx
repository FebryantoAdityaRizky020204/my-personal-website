import { ReactNode } from "react";

const Tag = ({ children }: { children: ReactNode }) => (
  <li className="rounded-md bg-slate-800 px-2.5 py-1 text-xs text-slate-300">
    {children}
  </li>
);

export default Tag;
