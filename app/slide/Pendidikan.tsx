import DATA from "../components/Data";
import Section from "../components/Section";
import Tag from "../components/Tag";
import Timeline from "../components/Timeline";
import TimelineItem from "../components/TimelineItem";
import Reveal from "../EffectsAndHook/Reveal";
import SpotlightCard from "../EffectsAndHook/SpotlightCard";

const Pendidikan = () => {
  return (
    <>
      <Section
        id="pendidikan"
        alt
        title="Pendidikan"
        intro="Latar belakang akademik dan penelitian saya."
      >
        <Timeline>
          {DATA.education.map((e) => (
            <TimelineItem key={e.school} period={e.period}>
              <Reveal>
                <h3 className="font-display text-xl font-semibold text-white">
                  {e.school}
                </h3>
                <p className="mt-1 text-sky-200/90">{e.degree}</p>
                <p className="mt-3 max-w-2xl leading-relaxed text-slate-400">
                  {e.detail}
                </p>
                {e.courses.length > 0 && (
                  <>
                    <p className="mt-4 text-sm text-slate-500">
                      Mata kuliah relevan
                    </p>
                    <ul className="mt-2 flex flex-wrap gap-2">
                      {e.courses.map((c) => (
                        <Tag key={c}>{c}</Tag>
                      ))}
                    </ul>
                  </>
                )}
              </Reveal>
            </TimelineItem>
          ))}
        </Timeline>

        <Reveal className="mt-14">
          <SpotlightCard>
            <div className="p-6 sm:p-8">
              <p className="text-sm font-medium text-blue-300">Skripsi</p>
              <h3 className="font-display mt-2 max-w-3xl text-xl font-semibold text-white sm:text-2xl">
                {DATA.thesis.title}
              </h3>
              <p className="mt-3 max-w-3xl leading-relaxed text-slate-400">
                {DATA.thesis.desc}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {DATA.thesis.tags.map((t) => (
                  <Tag key={t}>{t}</Tag>
                ))}
              </ul>
              <p className="mt-5 text-sm text-slate-500">
                {DATA.thesis.advisor}
              </p>
            </div>
          </SpotlightCard>
        </Reveal>
      </Section>
    </>
  );
};

export default Pendidikan;
