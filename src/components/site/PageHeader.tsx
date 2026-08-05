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
    <section className="relative overflow-hidden bg-background pb-16 pt-40">
      <div className="mx-auto max-w-[110rem] px-6 md:px-12">
        <Reveal>
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-6 max-w-5xl text-7xl leading-[0.85] md:text-[10vw]">{title}</h1>
          <div className="mt-10 grid gap-8 border-t-2 border-ink pt-8 md:grid-cols-12">
            <p className="text-sm leading-relaxed text-muted-foreground md:col-span-5 md:col-start-7">
              {intro}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
