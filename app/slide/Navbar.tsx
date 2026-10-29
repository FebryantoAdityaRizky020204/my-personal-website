import { Menu, X } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

interface NavItem {
  id: string;
  label: string;
}

const NAV: NavItem[] = [
  { id: "tentang", label: "Tentang" },
  { id: "pendidikan", label: "Pendidikan" },
  { id: "pengalaman", label: "Pengalaman" },
  { id: "skills", label: "Skills" },
  { id: "proyek", label: "Proyek" },
  // { id: "prestasi", label: "Prestasi" },
  { id: "kontak", label: "Kontak" },
];

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300";

function Navbar({ active }: { active: string }) {
  const [open, setOpen] = useState(false);
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-800/80 bg-slate-950/85 backdrop-blur">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <a href="#beranda" className={` ${focusRing}`}>
          <Image
            src={"/logo/light-logo-2.png"}
            alt="ADIT"
            width={50}
            height={50}
          />
        </a>

        <ul className="hidden items-center gap-0.5 md:flex">
          {NAV.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                aria-current={active === n.id ? "true" : undefined}
                className={`rounded-full px-3 py-2 text-sm transition-colors lg:px-4 ${focusRing} ${
                  active === n.id
                    ? "bg-blue-500/15 text-sky-300"
                    : "text-slate-400 hover:text-white"
                }`}
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Tutup menu" : "Buka menu"}
          className={`rounded-lg p-2 text-slate-300 hover:text-white md:hidden ${focusRing}`}
        >
          {open ? <X /> : <Menu />}
        </button>
      </nav>

      {open && (
        <ul className="border-t border-slate-800 bg-slate-950 px-5 py-3 md:hidden">
          {NAV.map((n) => (
            <li key={n.id}>
              <a
                href={`#${n.id}`}
                onClick={() => setOpen(false)}
                className={`block rounded-lg px-3 py-3 text-slate-300 hover:bg-slate-900 hover:text-white ${focusRing}`}
              >
                {n.label}
              </a>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}

export default Navbar;
