import DATA from "../components/Data";

const Footer = () => {
  return (
    <footer className="relative z-10 border-t border-slate-800/80 py-8">
      <p className="mx-auto max-w-6xl px-5 text-sm text-slate-500 sm:px-8">
        © {new Date().getFullYear()} dibuat oleh {DATA.name}.
      </p>
    </footer>
  );
};

export default Footer;
