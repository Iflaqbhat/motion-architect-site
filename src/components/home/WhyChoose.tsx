import { Reveal } from "../site/Reveal";
import { WHY_CHOOSE } from "@/data/site";

export function WhyChoose() {
  return (
    <section className="mx-auto max-w-7xl px-6 py-28">
      <Reveal>
        <p className="eyebrow">Why choose us</p>
        <h2 className="mt-5 max-w-2xl text-4xl leading-tight md:text-5xl">
          Leading builders in Bangalore for{" "}
          <span className="italic text-gold">residential & commercial</span> projects
        </h2>
      </Reveal>

      <div className="mt-14 grid gap-px bg-border md:grid-cols-3">
        {WHY_CHOOSE.map((w, i) => (
          <Reveal key={w.title} delay={i * 0.06}>
            <div className="group h-full bg-background p-9 transition-colors duration-500 hover:bg-sand">
              <span className="font-display text-sm text-gold">0{i + 1}</span>
              <h3 className="mt-4 text-2xl transition-transform duration-500 group-hover:translate-x-1.5">
                {w.title}
              </h3>
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{w.copy}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
