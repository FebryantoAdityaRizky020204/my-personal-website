"use client";

import { Copy, Mail, SquareCheck } from "lucide-react";
import Section from "../components/Section";
import Reveal from "../EffectsAndHook/Reveal";
import DATA from "../components/Data";
import { useState } from "react";
import Icon from "../components/Icon";
import ContactForm from "../components/ContactForm";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300";

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

function CopyEmail() {
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(DATA.contact.email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {
      /* clipboard tidak tersedia: abaikan */
    }
  };
  return (
    <button
      type="button"
      onClick={copy}
      className={`inline-flex items-center gap-2 rounded-full border border-slate-700 px-4 py-2 text-sm text-slate-300 hover:border-sky-300 hover:text-sky-300 ${focusRing}`}
    >
      {copied ? (
        <SquareCheck className="h-[18px]" />
      ) : (
        <Copy className="h-[18px]" />
      )}
      {copied ? "Email tersalin" : "Salin email"}
    </button>
  );
}

const Contact = () => {
  return (
    <>
      <Section
        id="kontak"
        title="Mari berkenalan"
        intro="Punya peluang magang, proyek, atau sekadar ingin ngobrol? Kirim pesan kapan saja."
      >
        <div className="grid gap-10 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <ul className="space-y-4">
              <li className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
                <span className="text-sky-300">
                  <Mail className="h-[18px]" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-slate-500">Email</p>
                  <a
                    href={`mailto:${DATA.contact.email}`}
                    className={`block truncate text-slate-100 hover:text-sky-300 ${focusRing}`}
                  >
                    {DATA.contact.email}
                  </a>
                </div>
                <CopyEmail />
              </li>
              <li className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
                <span className="text-sky-300">
                  <GithubIcon />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-slate-500">GitHub</p>
                  <a
                    href={DATA.contact.github}
                    target="_blank"
                    rel="noreferrer"
                    className={`block truncate text-slate-100 hover:text-sky-300 ${focusRing}`}
                  >
                    {DATA.contact.github.replace("https://", "")}
                  </a>
                </div>
              </li>
              <li className="flex items-center gap-4 rounded-2xl border border-slate-800 bg-slate-900/50 p-5">
                <span className="text-sky-300">
                  <LinkedinIcon />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="text-sm text-slate-500">LinkedIn</p>
                  <a
                    href={DATA.contact.linkedin}
                    target="_blank"
                    rel="noreferrer"
                    className={`block truncate text-slate-100 hover:text-sky-300 ${focusRing}`}
                  >
                    {DATA.contact.linkedin.replace("https://", "")}
                  </a>
                </div>
              </li>
            </ul>
            <p className="mt-6 max-w-md leading-relaxed text-slate-400"></p>
          </Reveal>

          <Reveal delay={120}>
            <ContactForm />
          </Reveal>
        </div>
      </Section>
    </>
  );
};

export default Contact;
