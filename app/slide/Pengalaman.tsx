import { useState } from "react";
import Section from "../components/Section";
import Timeline from "../components/Timeline";
import TimelineItem from "../components/TimelineItem";
import Tag from "../components/Tag";
import DATA from "../components/Data";
import Icon from "../components/Icon";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300";

const ChevronIcon = ({ open }: { open: boolean }) => (
  <Icon
    className={`h-5 w-5 shrink-0 transition-transform duration-300 ${open ? "rotate-180" : ""}`}
  >
    <path d="M6 9l6 6 6-6" />
  </Icon>
);

interface ExperienceEntry {
  period: string;
  company: string;
  title: string;
  type: string;
  points: string[];
  stack: string[];
}

function ExperienceItem({
  x,
  defaultOpen = false,
}: {
  x: ExperienceEntry;
  defaultOpen?: boolean;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const panelId = `exp-${x.company.replace(/\W+/g, "-")}`;
  return (
    <TimelineItem period={x.period}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
        aria-controls={panelId}
        className={`flex w-full items-start justify-between gap-4 rounded-lg text-left ${focusRing}`}
      >
        <span>
          <span className="block font-display text-xl font-semibold text-white">
            {x.title}
          </span>
          <span className="mt-1 flex flex-wrap items-center gap-2 text-sky-200/90">
            {x.company}
            <span className="rounded-md bg-slate-800 px-2 py-0.5 text-xs text-slate-300">
              {x.type}
            </span>
          </span>
        </span>
        <span className="mt-1 text-slate-400">
          <ChevronIcon open={open} />
        </span>
      </button>
      <div
        id={panelId}
        className={`grid transition-[grid-template-rows] duration-300 ${open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"}`}
      >
        <div className="overflow-hidden">
          <ul className="mt-4 max-w-2xl list-disc space-y-2 pl-5 leading-relaxed text-slate-400 marker:text-blue-400">
            {x.points.map((p) => (
              <li key={p}>{p}</li>
            ))}
          </ul>
          <ul className="mt-4 flex flex-wrap gap-2 pb-1">
            {x.stack.map((s) => (
              <Tag key={s}>{s}</Tag>
            ))}
          </ul>
        </div>
      </div>
    </TimelineItem>
  );
}

const Pengalaman = () => {
  return (
    <>
      <Section
        id="pengalaman"
        title="Pengalaman kerja dan magang"
        intro="Klik salah satu posisi untuk melihat detail tanggung jawab dan teknologi yang dipakai."
      >
        <Timeline>
          {DATA.experience.map((x, i) => (
            <ExperienceItem key={x.company} x={x} defaultOpen={i === 0} />
          ))}
        </Timeline>
      </Section>
    </>
  );
};

export default Pengalaman;
