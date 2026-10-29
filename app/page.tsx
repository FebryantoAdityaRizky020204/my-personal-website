"use client";

import { useEffect, useState } from "react";
import ScrollProgress from "./EffectsAndHook/ScrollProgress";
import CursorGlow from "./EffectsAndHook/CursorGlow";
import Navbar from "./slide/Navbar";
import Beranda from "./slide/Beranda";
import Statistik from "./slide/Statistik";
import About from "./slide/About";
import Pendidikan from "./slide/Pendidikan";
import Pengalaman from "./slide/Pengalaman";
import Skills from "./slide/Skills";
import Proyek from "./slide/Proyek";
// import Prestasi from "./slide/Prestasi";
import Contact from "./slide/Contact";
import Footer from "./slide/Footer";
import BackToTop from "./EffectsAndHook/BactToTop";

interface NavItem {
  id: string;
  label: string;
}

/* ------------------------------ Data ------------------------------ */
const NAV: NavItem[] = [
  { id: "tentang", label: "Tentang" },
  { id: "pendidikan", label: "Pendidikan" },
  { id: "pengalaman", label: "Pengalaman" },
  { id: "skills", label: "Skills" },
  { id: "proyek", label: "Proyek" },
  { id: "prestasi", label: "Prestasi" },
  { id: "kontak", label: "Kontak" },
];

/* ------------------------------ Halaman ------------------------------ */
// interface SocialLink {
//   href: string;
//   label: string;
//   icon: ReactNode;
// }

export default function PersonalProfile() {
  const [active, setActive] = useState<string>("beranda");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    ["beranda", ...NAV.map((n) => n.id)].forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  return (
    <div className="font-body relative min-h-screen overflow-x-hidden bg-slate-950 text-slate-300 antialiased selection:bg-blue-500/30">
      <ScrollProgress />
      <CursorGlow />
      <Navbar active={active} />

      <main className="relative z-10">
        {/* ------------------------- HERO ------------------------- */}
        <Beranda />
        {/* ------------------------- STATISTIK ------------------------- */}
        <Statistik />

        {/* ------------------------- TENTANG ------------------------- */}
        <About />

        {/* ------------------------- PENDIDIKAN ------------------------- */}
        <Pendidikan />

        {/* ------------------------- PENGALAMAN ------------------------- */}
        <Pengalaman />

        {/* ------------------------- SKILLS ------------------------- */}
        <Skills />

        {/* ------------------------- PROYEK ------------------------- */}
        <Proyek />

        {/* ------------------------- PRESTASI ------------------------- */}
        {/* <Prestasi /> */}

        {/* ------------------------- KONTAK ------------------------- */}
        <Contact />
      </main>

      <Footer />

      <BackToTop />
    </div>
  );
}
