import Chip from "../components/Chip";
import DATA from "../components/Data";
import Photo from "../components/Photo";
import Section from "../components/Section";
import Reveal from "../EffectsAndHook/Reveal";
import SpotlightCard from "../EffectsAndHook/SpotlightCard";

const About = () => {
  return (
    <>
      <Section
        id="tentang"
        title="Tentang saya"
        intro="Sedikit lebih jauh tentang cara saya berpikir dan bekerja."
      >
        <div className="grid gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16">
          <Reveal>
            <div className="max-w-2xl space-y-5 text-lg leading-relaxed text-slate-300">
              {DATA.bio.map((para) => (
                <p key={para.slice(0, 24)}>{para}</p>
              ))}
            </div>

            <h3 className="font-display mt-10 text-xl font-semibold text-white">
              Sedang saya kerjakan
            </h3>
            <ul className="mt-4 space-y-3">
              {DATA.now.map((n) => (
                <li key={n} className="flex items-start gap-3 text-slate-300">
                  <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-blue-400" />
                  {n}
                </li>
              ))}
            </ul>

            <h3 className="font-display mt-10 text-xl font-semibold text-white">
              Di luar pekerjaan
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {DATA.interests.map((i) => (
                <Chip key={i}>{i}</Chip>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="space-y-6">
            {/* Foto kedua: isi DATA.photo2 */}
            <Photo
              src={DATA.photo2}
              alt={`${DATA.name} saat beraktivitas`}
              label="Tempat foto kegiatan atau hobi (4:3)"
              className="aspect-[4/3] rounded-2xl"
            />
            <SpotlightCard>
              <dl className="w-full divide-y divide-slate-800 p-6">
                {DATA.quickFacts.map((f) => (
                  <div
                    key={f.label}
                    className="grid grid-cols-[7rem_1fr] gap-3 py-3 first:pt-0 last:pb-0"
                  >
                    <dt className="text-sm text-slate-500">{f.label}</dt>
                    <dd className="text-slate-200">{f.value}</dd>
                  </div>
                ))}
              </dl>
            </SpotlightCard>
          </Reveal>
        </div>
      </Section>
    </>
  );
};

export default About;
