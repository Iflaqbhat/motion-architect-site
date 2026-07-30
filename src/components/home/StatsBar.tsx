import { Reveal } from "../site/Reveal";
import { STATS } from "@/data/site";

export function StatsBar() {
  return (
    <section className="relative z-10 mx-auto -mt-16 max-w-6xl px-6">
      <Reveal>
        <div className="ink-panel grid grid-cols-2 divide-background/12 md:grid-cols-4 md:divide-x">
          {STATS.map((s) => (
            <div key={s.label} className="group px-8 py-10 transition-colors duration-500 hover:bg-background/5">
              <p className="font-display text-4xl text-gold transition-transform duration-500 group-hover:-translate-y-1">
                {s.value}
              </p>
              <p className="mt-2 text-[0.68rem] uppercase tracking-[0.2em] text-background/60">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
