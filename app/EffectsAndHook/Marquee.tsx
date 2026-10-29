// Daftar yang berjalan terus (gaya Infinite Scroll / Scroll Velocity)
function Marquee({ items }: { items: string[] }) {
  const row = [...items, ...items];
  return (
    <div className="group overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
      <div className="marquee-track flex w-max group-hover:[animation-play-state:paused]">
        {row.map((t, i) => (
          <span
            key={`${t}-${i}`}
            aria-hidden={i >= items.length}
            className="mr-4 rounded-full border border-slate-800 bg-slate-900/70 px-5 py-2.5 text-sm text-slate-300"
          >
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Marquee;
