import Chip from "../components/Chip";
import DATA from "../components/Data";
import Section from "../components/Section";
import Marquee from "../EffectsAndHook/Marquee";
import Reveal from "../EffectsAndHook/Reveal";
import SpotlightCard from "../EffectsAndHook/SpotlightCard";
import useInView from "../EffectsAndHook/useInView";

interface TechnicalSkill {
  name: string;
  level: number; // 1 sampai 5
}

const LEVEL_LABEL: string[] = [
  "",
  "Pemula",
  "Dasar",
  "Menengah",
  "Mahir",
  "Ahli",
];

function SkillBar({ name, level }: TechnicalSkill) {
  const [ref, inView] = useInView<HTMLDivElement>(0.4);
  return (
    <div ref={ref}>
      <div className="flex items-baseline justify-between gap-3 text-sm">
        <span className="font-medium text-slate-200">{name}</span>
        <span className="text-slate-500">{LEVEL_LABEL[level]}</span>
      </div>
      <div className="mt-2 h-2 overflow-hidden rounded-full bg-slate-800">
        <div
          className="h-full rounded-full bg-blue-500 transition-[width] duration-1000 ease-out"
          style={{ width: inView ? `${level * 20}%` : "0%" }}
        />
      </div>
    </div>
  );
}

const Skills = () => {
  return (
    <>
      <Section
        id="skills"
        alt
        title="Skills"
        intro="Kemampuan teknis, cara kerja, dan alat yang biasa saya pakai."
      >
        <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
          <Reveal>
            <SpotlightCard>
              <div className="w-full p-6 sm:p-8">
                <h3 className="font-display text-lg font-semibold text-white">
                  Kemampuan teknis
                </h3>
                <div className="mt-6 grid gap-6 sm:grid-cols-2">
                  {DATA.technical.map((s) => (
                    <SkillBar key={s.name} {...s} />
                  ))}
                </div>
              </div>
            </SpotlightCard>
          </Reveal>

          <Reveal delay={120} className="space-y-6">
            <SpotlightCard>
              <div className="p-6">
                <h3 className="font-display text-lg font-semibold text-white">
                  Soft skills
                </h3>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {DATA.soft.map((s) => (
                    <Chip key={s}>{s}</Chip>
                  ))}
                </ul>
              </div>
            </SpotlightCard>
            <SpotlightCard>
              <div className="w-full p-6">
                <h3 className="font-display text-lg font-semibold text-white">
                  Bahasa
                </h3>
                <ul className="mt-4 space-y-3">
                  {DATA.languages.map((l) => (
                    <li
                      key={l.name}
                      className="flex items-baseline justify-between gap-4"
                    >
                      <span className="text-slate-200">{l.name}</span>
                      <span className="text-right text-sm text-slate-500">
                        {l.level}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>

        <div className="mt-10">
          <p className="mb-4 text-sm text-slate-500">
            Teknologi yang pernah saya pakai
          </p>
          <Marquee items={DATA.tools} />
        </div>
      </Section>
    </>
  );
};

export default Skills;
