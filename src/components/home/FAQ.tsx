import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Reveal } from "../site/Reveal";
import { FAQS } from "@/data/site";

export function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section className="mx-auto max-w-5xl px-6 py-28">
      <Reveal>
        <p className="eyebrow">About flats for sale in Bangalore</p>
        <h2 className="mt-5 text-4xl leading-tight md:text-5xl">
          Frequently asked <span className="text-gold">questions</span>
        </h2>
      </Reveal>

      <div className="mt-12 divide-y divide-border border-y border-border">
        {FAQS.map((f, i) => {
          const isOpen = open === i;
          return (
            <div key={f.q}>
              <button
                onClick={() => setOpen(isOpen ? null : i)}
                aria-expanded={isOpen}
                className="group flex w-full items-start justify-between gap-8 py-6 text-left"
              >
                <span
                  className={`font-display text-xl transition-colors duration-400 md:text-2xl ${
                    isOpen ? "text-gold" : "text-ink group-hover:text-gold"
                  }`}
                >
                  {f.q}
                </span>
                <span
                  className={`mt-1 shrink-0 text-gold transition-transform duration-500 ${
                    isOpen ? "rotate-45" : ""
                  }`}
                >
                  +
                </span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
                    className="overflow-hidden"
                  >
                    <p className="max-w-3xl pb-7 leading-relaxed text-muted-foreground">{f.a}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          );
        })}
      </div>
    </section>
  );
}
