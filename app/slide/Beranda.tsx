import { ReactNode } from "react";
import Icon from "../components/Icon";
import { Download, Mail, MapPin } from "lucide-react";
import BlurText from "../EffectsAndHook/BlurText";
import RotatingText from "../EffectsAndHook/RotatingText";
import DATA from "../components/Data";
import Magnet from "../EffectsAndHook/Magnet";
import Tilt from "../EffectsAndHook/Tilt";
import Photo from "../components/Photo";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300";

interface SocialLink {
  href: string;
  label: string;
  icon: ReactNode;
}

const GithubIcon = () => (
  <Icon>
    <path d="M9 19c-4 1.2-4-2-6-2.5M15 21v-3.2c0-1 .1-1.5-.5-2.1 2.7-.3 5.5-1.3 5.5-6a4.6 4.6 0 00-1.3-3.2 4.3 4.3 0 00-.1-3.2s-1-.3-3.4 1.3a11.6 11.6 0 00-6 0C6.8 2.9 5.8 3.2 5.8 3.2a4.3 4.3 0 00-.1 3.2A4.6 4.6 0 004.4 9.6c0 4.6 2.8 5.7 5.5 6-.6.6-.6 1.2-.5 2.1V21" />
  </Icon>
);
const LinkedinIcon = () => (
  <Icon>
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <path d="M8 11v5M8 8v.01M12 16v-5M12 13a2.5 2.5 0 015 0v3" />
  </Icon>
);

const Beranda = () => {
  const socials: SocialLink[] = [
    { href: DATA.contact.github, label: "GitHub", icon: <GithubIcon /> },
    { href: DATA.contact.linkedin, label: "LinkedIn", icon: <LinkedinIcon /> },
    {
      href: `mailto:${DATA.contact.email}`,
      label: "Email",
      icon: <Mail className="h-[18px]" />,
    },
  ];
  return (
    <>
      <section
        id="beranda"
        className="relative scroll-mt-16 overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40"
      >
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
        >
          <div className="aurora-a absolute -top-24 left-[15%] h-96 w-96 rounded-full bg-blue-600/25 blur-3xl" />
          <div className="aurora-b absolute right-[-4rem] top-32 h-80 w-80 rounded-full bg-sky-500/15 blur-3xl" />
          <div className="aurora-c absolute bottom-[-5rem] left-[-3rem] h-72 w-72 rounded-full bg-indigo-700/20 blur-3xl" />
          <div className="dot-grid absolute inset-0" />
        </div>

        <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-[1.15fr_0.85fr] lg:gap-20">
          <div>
            <p className="inline-flex items-center gap-2 rounded-full border border-slate-800 bg-slate-900/70 px-4 py-1.5 text-sm text-slate-300">
              <span className="h-2 w-2 animate-pulse rounded-full bg-green-400" />
              {DATA.availability}
            </p>

            <h1 className="font-display mt-6 text-4xl font-semibold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl">
              <BlurText text={DATA.headline} />
            </h1>

            <p className="mt-5 text-lg text-slate-300">
              {DATA.role}.
              <br />
              Fokus pada <RotatingText words={DATA.rotatingRoles} />.
            </p>

            <p className="mt-4 max-w-xl text-base leading-relaxed text-slate-400 sm:text-lg">
              {DATA.about}
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Magnet>
                <a
                  href="#proyek"
                  className={`inline-block rounded-full bg-blue-500 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-blue-400 ${focusRing}`}
                >
                  Lihat proyek
                </a>
              </Magnet>
              <a
                href="#kontak"
                className={`rounded-full border border-slate-700 px-6 py-3 font-semibold text-white transition-colors hover:border-sky-300 hover:text-sky-300 ${focusRing}`}
              >
                Hubungi saya
              </a>
              {DATA.cv && (
                <a
                  href={DATA.cv}
                  download
                  className={`inline-flex items-center gap-2 rounded-full px-4 py-3 font-medium text-slate-300 hover:text-sky-300 ${focusRing}`}
                >
                  <Download /> Unduh CV
                </a>
              )}
            </div>

            <ul className="mt-8 flex gap-2">
              {socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    aria-label={s.label}
                    target={s.href.startsWith("http") ? "_blank" : undefined}
                    rel="noreferrer"
                    className={`block rounded-full border border-slate-800 p-3 text-slate-400 transition-colors hover:border-sky-300 hover:text-sky-300 ${focusRing}`}
                  >
                    {s.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Foto profil: isi DATA.photo */}
          <div className="mx-auto w-full max-w-sm lg:max-w-none">
            <Tilt>
              <div className="relative">
                <div className="absolute inset-0 translate-x-4 translate-y-4 rounded-3xl border border-blue-500/50" />
                <Photo
                  src={DATA.photo}
                  alt={`Foto ${DATA.name}`}
                  label="Tempat foto profil (rasio 4:5)"
                  className="relative aspect-[4/5] rounded-3xl shadow-[0_0_80px_-24px_rgba(59,130,246,0.6)]"
                />
                {/* <div className="floaty absolute left-3 top-8 rounded-xl border border-slate-700 bg-slate-900/90 px-3.5 py-2 text-sm text-slate-200 backdrop-blur sm:-left-8">
                  <span className="mr-2 inline-block h-2 w-2 rounded-full bg-sky-400" />
                  Skripsi: deep learning
                </div> */}
                <div
                  className="floaty absolute bottom-8 right-3 flex items-center gap-1.5 rounded-xl border border-slate-700 bg-slate-900/90 px-3.5 py-2 text-sm text-slate-200 backdrop-blur sm:-right-6"
                  style={{ animationDelay: "-2.5s" }}
                >
                  <MapPin /> {DATA.location}
                </div>
              </div>
            </Tilt>
          </div>
        </div>
      </section>
    </>
  );
};

export default Beranda;
