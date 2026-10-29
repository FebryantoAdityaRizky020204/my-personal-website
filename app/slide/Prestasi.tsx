import DATA from "../components/Data";
import Photo from "../components/Photo";
import Section from "../components/Section";
import Reveal from "../EffectsAndHook/Reveal";
import SpotlightCard from "../EffectsAndHook/SpotlightCard";

const Prestasi = () => {
  return (
    <>
      <Section
        id="prestasi"
        alt
        title="Prestasi dan rekomendasi"
        intro="Pengakuan, sertifikasi, kegiatan organisasi, dan kata orang yang pernah bekerja dengan saya."
      >
        <div className="grid gap-6 md:grid-cols-3">
          <Reveal>
            <SpotlightCard>
              <div className="w-full p-6">
                <h3 className="font-display text-lg font-semibold text-white">
                  Prestasi
                </h3>
                <ul className="mt-5 space-y-5">
                  {DATA.achievements.map((a) => (
                    <li key={a.title}>
                      <p className="font-medium text-slate-100">{a.title}</p>
                      <p className="text-sm text-blue-300">{a.meta}</p>
                      <p className="mt-1 text-sm leading-relaxed text-slate-400">
                        {a.desc}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={100}>
            <SpotlightCard>
              <div className="w-full p-6">
                <h3 className="font-display text-lg font-semibold text-white">
                  Sertifikasi
                </h3>
                <ul className="mt-5 space-y-5">
                  {DATA.certifications.map((c) => (
                    <li key={c.title}>
                      <p className="font-medium text-slate-100">{c.title}</p>
                      <p className="text-sm text-slate-400">{c.meta}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </SpotlightCard>
          </Reveal>
          <Reveal delay={200}>
            <SpotlightCard>
              <div className="w-full p-6">
                <h3 className="font-display text-lg font-semibold text-white">
                  Organisasi dan kegiatan
                </h3>
                <ul className="mt-5 space-y-5">
                  {DATA.organizations.map((o) => (
                    <li key={o.title}>
                      <p className="font-medium text-slate-100">{o.title}</p>
                      <p className="text-sm text-slate-400">{o.meta}</p>
                    </li>
                  ))}
                </ul>
              </div>
            </SpotlightCard>
          </Reveal>
        </div>

        <h3 className="font-display mb-6 mt-16 text-xl font-semibold text-white">
          Kata mereka
        </h3>
        <div className="grid gap-6 md:grid-cols-2">
          {DATA.testimonials.map((t, i) => (
            <Reveal key={t.name} delay={i * 100}>
              <SpotlightCard>
                <figure className="w-full p-6 sm:p-8">
                  <blockquote className="text-lg leading-relaxed text-slate-200">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="mt-6 flex items-center gap-4">
                    {/* Foto pemberi rekomendasi: isi `avatar` */}
                    <Photo
                      src={t.avatar}
                      alt={t.name}
                      label=""
                      className="h-12 w-12 shrink-0 rounded-full"
                    />
                    <span>
                      <span className="block font-medium text-white">
                        {t.name}
                      </span>
                      <span className="block text-sm text-slate-400">
                        {t.role}
                      </span>
                    </span>
                  </figcaption>
                </figure>
              </SpotlightCard>
            </Reveal>
          ))}
        </div>
      </Section>
    </>
  );
};

export default Prestasi;
