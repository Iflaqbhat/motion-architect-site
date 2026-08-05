import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import hero from "@/assets/hero-tower.jpg";
import { GoldButton } from "../site/GoldButton";

const words = ["Building", "Better", "Lives"];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "18%"]);
  const fade = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100svh] min-h-[640px] overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 -z-10">
        <img
          src={hero}
          alt="Illuminated Yuva Group residential towers at dusk"
          width={1920}
          height={1088}
          className="h-[118%] w-full object-cover"
        />
        <div className="absolute inset-0 bg-[linear-gradient(100deg,oklch(0.18_0.04_262/0.92)_0%,oklch(0.18_0.04_262/0.6)_45%,transparent_85%)]" />
      </motion.div>

      <motion.div
        style={{ opacity: fade }}
        className="mx-auto flex h-full max-w-7xl flex-col justify-center px-6 pt-24"
      >
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="eyebrow"
        >
          Welcome to Yuva Group
        </motion.p>

        <h1 className="mt-6 text-6xl leading-[0.95] text-background sm:text-7xl md:text-8xl">
          {words.map((w, i) => (
            <span key={w} className="block overflow-hidden">
              <motion.span
                className="block"
                initial={{ y: "110%" }}
                animate={{ y: 0 }}
                transition={{ duration: 1, delay: 0.25 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              >
                {i === 2 ? <span className="text-gold">{w}</span> : w}
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.7 }}
          className="mt-8 max-w-md text-base leading-relaxed text-background/75"
        >
          From premium residential projects to commercial spaces, Yuva Group is a trusted builder
          in Bangalore delivering quality construction with precision and innovation.

        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.85 }}
          className="mt-10 flex flex-wrap gap-4"
        >
          <GoldButton to="/projects">Explore Projects</GoldButton>
          <GoldButton to="/about" variant="ghostLight">
            Our Story
          </GoldButton>
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-3 md:flex"
      >
        <span className="text-[0.6rem] uppercase tracking-[0.35em] text-background/55">Scroll</span>
        <span className="h-14 w-px overflow-hidden bg-background/25">
          <motion.span
            className="block h-6 w-px bg-gold"
            animate={{ y: [-24, 56] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          />
        </span>
      </motion.div>
    </section>
  );
}
