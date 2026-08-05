import { Reveal } from "../site/Reveal";
import { TESTIMONIALS } from "@/data/site";

export function Testimonials() {
  return (
    <section className="bg-sand py-28">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="eyebrow">Testimonials</p>
          <h2 className="mt-5 text-4xl leading-tight md:text-5xl">
            Check what our <span className="text-gold">clients say</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.08}>
              <figure className="hover-tilt flex h-full flex-col bg-card p-9">
                <span className="font-display text-5xl leading-none text-gold">&ldquo;</span>
                <blockquote className="mt-4 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {t.quote}
                </blockquote>
                <figcaption className="mt-7 border-t border-border pt-5">
                  <p className="font-display text-xl text-ink">{t.name}</p>
                  <p className="mt-1 text-[0.68rem] uppercase tracking-[0.2em] text-muted-foreground">
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
