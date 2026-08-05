import { Reveal } from "../site/Reveal";
import { STATS } from "@/data/site";

export function StatsBar() {
  return (
    <section className="relative mx-auto max-w-[110rem] px-6 pb-32 md:px-12">
      <span className="vertical-label absolute left-0 top-0 hidden lg:block">
        Legacy &amp; Statistics
      </span>

      <div className="flex flex-col gap-20 md:flex-row lg:pl-16">
        <Reveal className="md:w-1/2">
          <h2 className="text-6xl md:text-7xl">
            Fifteen years of
            <br />
            <span className="text-ink/35">structural craft</span>
          </h2>

          <div className="mt-12 grid grid-cols-2 gap-10 sm:grid-cols-4 md:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label}>
                <p className="font-display text-6xl leading-none text-ink">{s.value}</p>
                <span className="mt-3 block h-0.5 w-10 bg-ink" />
                <p className="mt-3 text-[0.6rem] font-bold uppercase tracking-[0.22em] text-muted-foreground">
                  {s.label}
                </p>
              </div>
            ))}
          </div>
        </Reveal>

        <Reveal delay={0.12} className="md:w-1/2">
          <div className="relative md:-translate-y-10">
            <div className="relative z-10 ink-panel p-10 lg:p-14">
              <p className="text-lg font-light leading-relaxed text-background/90">
                &ldquo;A home is the largest decision most families ever make. Our job is to make
                that decision feel safe — honest pricing, honest engineering, honest
                timelines.&rdquo;
              </p>
              <div className="mt-8 flex items-center gap-4">
                <span className="h-px w-12 bg-background" />
                <span className="text-[0.6rem] font-bold uppercase tracking-[0.24em] text-background/80">
                  Mr. Mahendra Reddy — Founder
                </span>
              </div>
            </div>
            <div className="pointer-events-none absolute inset-0 hidden border border-ink md:block md:translate-x-6 md:translate-y-6" />
          </div>
        </Reveal>

      </div>
    </section>
  );
}
