"use client";

import { useState } from "react";
import DATA from "../components/Data";
import Icon from "../components/Icon";
import Photo from "../components/Photo";
import Section from "../components/Section";
import Tag from "../components/Tag";
import SpotlightCard from "../EffectsAndHook/SpotlightCard";

interface Project {
  title: string;
  category: string;
  featured?: boolean;
  desc: string;
  metrics?: string[];
  tags: string[];
  image: string;
  demo: string;
  repo: string;
}

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300";

const ExternalIcon = () => (
  <Icon className="h-4 w-4">
    <path d="M14 4h6v6M20 4l-9 9M18 14v5a1 1 0 01-1 1H5a1 1 0 01-1-1V7a1 1 0 011-1h5" />
  </Icon>
);

function ProjectCard({ p }: { p: Project }) {
  const featured = p.featured;

  return (
    <SpotlightCard
      className={featured ? "md:col-span-2 lg:col-span-3" : ""}
      innerClassName={featured ? "flex-col lg:flex-row" : "flex-col"}
    >
      <Photo
        src={p.image}
        alt={`Tampilan proyek ${p.title}`}
        label="Tempat gambar proyek (16:10)"
        className={
          featured
            ? "aspect-[16/10] lg:aspect-auto lg:min-h-[20rem] lg:w-1/2"
            : "aspect-[16/10]"
        }
      />
      <div className={`flex flex-1 flex-col p-6 ${featured ? "lg:p-10" : ""}`}>
        <p className="text-sm font-medium text-blue-300">
          {featured ? `Proyek unggulan, ${p.category}` : p.category}
        </p>
        <h3
          className={`font-display mt-2 font-semibold text-white ${featured ? "text-2xl lg:text-3xl" : "text-xl"}`}
        >
          {p.title}
        </h3>
        <p className="mt-3 flex-1 leading-relaxed text-slate-400">{p.desc}</p>

        {p.metrics && (
          <ul className="mt-5 grid gap-2 sm:grid-cols-3">
            {p.metrics.map((m) => (
              <li
                key={m}
                className="rounded-lg border border-slate-800 bg-slate-950/60 px-3 py-2 text-sm text-slate-300"
              >
                {m}
              </li>
            ))}
          </ul>
        )}

        <ul className="mt-5 flex flex-wrap gap-2">
          {p.tags.map((t) => (
            <Tag key={t}>{t}</Tag>
          ))}
        </ul>
        <div className="mt-6 flex gap-5 text-sm font-medium">
          {p.demo && (
            <a
              href={p.demo}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-1.5 text-sky-300 hover:text-white ${focusRing}`}
            >
              Buka demo <ExternalIcon />
            </a>
          )}
          {p.repo && (
            <a
              href={p.repo}
              target="_blank"
              rel="noreferrer"
              className={`inline-flex items-center gap-1.5 text-slate-300 hover:text-white ${focusRing}`}
            >
              Lihat kode <ExternalIcon />
            </a>
          )}
        </div>
      </div>
    </SpotlightCard>
  );
}

const Proyek = () => {
  const [filter, setFilter] = useState<string>("Semua");

  const projects = DATA.projects.filter(
    (p) => filter === "Semua" || p.category === filter,
  );
  return (
    <>
      <Section
        id="proyek"
        title="Proyek"
        intro="Beberapa hasil kerja yang ingin saya tunjukkan. Filter menurut bidang."
      >
        <div
          role="tablist"
          aria-label="Filter proyek"
          className="mb-8 flex flex-wrap gap-2"
        >
          {DATA.categories.map((c) => (
            <button
              key={c}
              type="button"
              role="tab"
              aria-selected={filter === c}
              onClick={() => setFilter(c)}
              className={`rounded-full border px-4 py-2 text-sm transition-colors ${focusRing} ${
                filter === c
                  ? "border-blue-400 bg-blue-500/15 text-sky-200"
                  : "border-slate-800 text-slate-400 hover:border-slate-600 hover:text-white"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p) => (
            <ProjectCard key={p.title} p={p} />
          ))}
        </div>
        {projects.length === 0 && (
          <p className="text-slate-500">Belum ada proyek di kategori ini.</p>
        )}
      </Section>
    </>
  );
};

export default Proyek;
