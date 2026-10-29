import { ReactNode } from "react";
import Reveal from "../EffectsAndHook/Reveal";

interface SectionProps {
  id: string;
  title: string;
  intro?: string;
  alt?: boolean;
  children: ReactNode;
}

function Section({ id, title, intro, alt = false, children }: SectionProps) {
  return (
    <section
      id={id}
      className={`scroll-mt-16 border-t border-slate-800/80 py-20 md:py-28 ${alt ? "bg-slate-900/30" : ""}`}
    >
      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        <Reveal>
          <h2 className="font-display text-3xl font-semibold tracking-tight text-white md:text-4xl">
            {title}
          </h2>
          {intro && <p className="mt-3 max-w-xl text-slate-400">{intro}</p>}
        </Reveal>
        <div className="mt-12">{children}</div>
      </div>
    </section>
  );
}

export default Section;
