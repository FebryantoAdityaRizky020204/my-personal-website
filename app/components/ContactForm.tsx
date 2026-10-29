"use client";

import { ChangeEvent, FormEvent, useState } from "react";
import DATA from "./Data";

const focusRing =
  "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-sky-300";

interface FormState {
  name: string;
  email: string;
  message: string;
}

function ContactForm() {
  const [form, setForm] = useState<FormState>({
    name: "",
    email: "",
    message: "",
  });
  const set =
    (k: keyof FormState) =>
    (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setForm((f) => ({ ...f, [k]: e.target.value }));

  // Membuka aplikasi email dengan pesan terisi.
  // Untuk kirim langsung dari website, ganti dengan Formspree / EmailJS.
  const submit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Pesan dari ${form.name}`);
    const body = encodeURIComponent(
      `${form.message}\n\nDari: ${form.name} (${form.email})`,
    );
    window.location.href = `mailto:${DATA.contact.email}?subject=${subject}&body=${body}`;
  };

  const field =
    "mt-2 w-full rounded-xl border border-slate-700 bg-slate-900 px-4 py-3 text-white placeholder:text-slate-500 focus:border-sky-400 focus:outline-none focus:ring-2 focus:ring-sky-400/30";

  return (
    <form
      onSubmit={submit}
      className="space-y-5 rounded-2xl border border-slate-800 bg-slate-900/50 p-6 sm:p-8"
    >
      <div>
        <label htmlFor="c-name" className="text-sm font-medium text-slate-200">
          Nama
        </label>
        <input
          id="c-name"
          required
          value={form.name}
          onChange={set("name")}
          placeholder="Nama Anda"
          className={field}
        />
      </div>
      <div>
        <label htmlFor="c-email" className="text-sm font-medium text-slate-200">
          Email
        </label>
        <input
          id="c-email"
          type="email"
          required
          value={form.email}
          onChange={set("email")}
          placeholder="nama@email.com"
          className={field}
        />
      </div>
      <div>
        <label htmlFor="c-msg" className="text-sm font-medium text-slate-200">
          Pesan
        </label>
        <textarea
          id="c-msg"
          required
          rows={5}
          value={form.message}
          onChange={set("message")}
          placeholder="Ceritakan singkat tentang peluang atau pertanyaan Anda"
          className={`${field} resize-y`}
        />
      </div>
      <button
        type="submit"
        className={`w-full rounded-full bg-blue-500 px-6 py-3 font-semibold text-slate-950 transition-colors hover:bg-blue-400 ${focusRing}`}
      >
        Kirim lewat email
      </button>
      <p className="text-sm text-slate-500">
        Tombol ini membuka aplikasi email Anda dengan pesan yang sudah terisi.
      </p>
    </form>
  );
}

export default ContactForm;
