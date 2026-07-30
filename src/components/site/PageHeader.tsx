import { Reveal } from "./Reveal";

export function PageHeader({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro: string;
}) {
  return (
    <section className="ink-panel relative overflow-hidden pt-40 pb-24">
      <div
        aria-hidden
        className="pointer-events-none absolute -right-40 -top-24 h-[28rem] w-[28rem] rounded-full bg-gold/12 blur-3xl"
      />
      <div className="relative mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-5 max-w-3xl text-5xl leading-[1.05] text-background md:text-7xl">
            {title}
          </h1>
          <div className="gold-rule mt-8" />
          <p className="mt-8 max-w-xl text-base leading-relaxed text-background/70">{intro}</p>
        </Reveal>
      </div>
    </section>
  );
}
