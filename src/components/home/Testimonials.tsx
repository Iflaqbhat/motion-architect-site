import { Reveal } from "../site/Reveal";
import { TESTIMONIALS } from "@/data/site";

export function Testimonials() {
  return (
    <section className="bg-card py-28">
      <div className="mx-auto max-w-[110rem] px-6 md:px-12">
      <Reveal>
          <div className="flex flex-wrap items-end justify-between gap-6 border-b border-ink/15 pb-8">
            <h2 className="text-4xl md:text-5xl">Client Voices</h2>
            <p className="text-xs font-semibold uppercase tracking-[0.2em]">
              Verified homeowners
            </p>
          </div>
        </Reveal>

        <div className="mt-16 grid gap-12 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08} className={i % 3 === 1 ? "md:mt-16" : ""}>
              <figure className="flex h-full flex-col border-t border-ink/15 pt-6">
                <span className="font-display text-2xl text-ink/25">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <blockquote className="mt-4 flex-1 text-lg font-medium leading-relaxed text-foreground">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-8">
                  <p className="font-display text-2xl text-ink">{t.name}</p>
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                    {t.company}
                  </p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
