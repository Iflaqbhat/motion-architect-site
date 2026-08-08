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
          <h1 className="mt-6 max-w-4xl text-5xl leading-[1.05] md:text-6xl">{title}</h1>
          <div className="mt-10 grid gap-8 border-t border-ink/15 pt-8 md:grid-cols-12">
            <p className="text-base font-medium leading-relaxed text-muted-foreground md:col-span-6 md:col-start-7">
              {intro}
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
