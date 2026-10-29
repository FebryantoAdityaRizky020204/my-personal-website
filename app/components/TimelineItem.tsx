import { ReactNode } from "react";

function TimelineItem({
  period,
  children,
}: {
  period: string;
  children: ReactNode;
}) {
  return (
    <li className="relative grid gap-2 md:grid-cols-[11rem_1fr] md:gap-8">
      <span className="absolute -left-[2.45rem] top-1.5 h-3 w-3 rounded-full border-2 border-blue-400 bg-slate-950" />
      <p className="text-sm font-medium text-blue-300 md:pt-1">{period}</p>
      <div>{children}</div>
    </li>
  );
}

export default TimelineItem;
