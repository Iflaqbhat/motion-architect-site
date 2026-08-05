import { Reveal } from "../site/Reveal";
import { WHY_CHOOSE } from "@/data/site";

export function WhyChoose() {
  return (
    <section className="mx-auto max-w-[110rem] px-6 py-28 md:px-12">
      <Reveal>
        <div className="grid gap-10 border-b-2 border-ink pb-10 md:grid-cols-12">
          <h2 className="text-6xl md:col-span-7 md:text-8xl">
            Why choose
            <br />
            <span className="text-outline">Yuva Group</span>
          </h2>
          <p className="self-end text-sm leading-relaxed text-muted-foreground md:col-span-4 md:col-start-9">
            Leading builders in Bangalore for residential and commercial projects — engineered,
            approved and handed over without surprises.
          </p>
        </div>
      </Reveal>

      <div className="mt-16 grid gap-x-16 gap-y-14 md:grid-cols-3">
        {WHY_CHOOSE.map((w, i) => (
          <Reveal key={w.title} delay={i * 0.06} className={i % 3 === 1 ? "md:mt-16" : i % 3 === 2 ? "md:mt-32" : ""}>
            <div className="group">
              <span className="index-num block">{String(i + 1).padStart(2, "0")}</span>
              <h3 className="mt-4 text-3xl transition-transform duration-500 group-hover:translate-x-2">
                {w.title}
              </h3>
              <span className="mt-4 block h-px w-full bg-ink/15" />
              <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{w.copy}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
