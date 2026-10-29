import { ReactNode } from "react";

function Timeline({ children }: { children: ReactNode }) {
  return (
    <ol className="relative space-y-10 border-l border-slate-800 pl-8">
      {children}
    </ol>
  );
}

export default Timeline;
