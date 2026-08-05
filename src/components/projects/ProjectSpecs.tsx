import { Reveal } from "../site/Reveal";
import type { Spec } from "@/data/site";

export function ProjectSpecs({ specs }: { specs: Spec[] }) {
  return (
    <section className="mx-auto max-w-7xl px-6 py-24">
      <Reveal>
        <p className="eyebrow">Specifications</p>
        <h2 className="mt-5 max-w-2xl text-4xl leading-tight md:text-5xl">
          Written down before we <span className="text-gold">pour concrete</span>
        </h2>
      </Reveal>

      <div className="mt-12 grid gap-px bg-border md:grid-cols-2">
        {specs.map((s, i) => (
          <Reveal key={s.label} delay={i * 0.04}>
            <div className="group h-full bg-background p-8 transition-colors duration-500 hover:bg-sand">
              <p className="text-[0.65rem] uppercase tracking-[0.2em] text-gold">{s.label}</p>
              <p className="mt-3 leading-relaxed text-muted-foreground transition-transform duration-500 group-hover:translate-x-1">
                {s.value}
              </p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
