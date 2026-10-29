import DATA from "../components/Data";
import CountUp from "../EffectsAndHook/CountUp";

const Statistik = () => {
  return (
    <>
      <div className="border-y border-slate-800/80 bg-slate-900/30">
        <dl className="mx-auto grid max-w-6xl grid-cols-2 gap-x-6 gap-y-8 px-5 py-10 sm:px-8">
          {DATA.stats.map((s) => (
            <div key={s.label}>
              <dd className="font-display text-4xl  font-semibold text-white">
                <CountUp to={s.value} decimals={s.decimals} suffix={s.suffix} />
              </dd>
              <dt className="mt-1 text-sm text-slate-400">{s.label}</dt>
            </div>
          ))}
        </dl>
      </div>
    </>
  );
};

export default Statistik;
