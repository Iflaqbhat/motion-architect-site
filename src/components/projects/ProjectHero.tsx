import { motion } from "motion/react";
import { Link } from "@tanstack/react-router";
import type { Project } from "@/data/site";

export function ProjectHero({ project }: { project: Project }) {
  return (
    <section className="relative h-[72svh] min-h-[520px] overflow-hidden">
      <img
        src={project.image}
        alt={`${project.name} exterior view`}
        width={1400}
        height={1000}
        className="absolute inset-0 -z-10 h-full w-full object-cover"
      />
      <div className="absolute inset-0 -z-10 bg-[linear-gradient(100deg,oklch(0.18_0.04_262/0.92)_0%,oklch(0.18_0.04_262/0.55)_55%,transparent_95%)]" />

      <div className="mx-auto flex h-full max-w-7xl flex-col justify-end px-6 pb-16 pt-28">
        <motion.nav
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="text-[0.65rem] uppercase tracking-[0.2em] text-background/60"
        >
          <Link to="/" className="nav-link">
            Home
          </Link>
          <span className="px-2">/</span>
          <Link to="/projects" className="nav-link">
            Projects
          </Link>
          <span className="px-2">/</span>
          <span className="text-gold">{project.name}</span>
        </motion.nav>

        <div className="mt-6 overflow-hidden">
          <motion.h1
            initial={{ y: "110%" }}
            animate={{ y: 0 }}
            transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl leading-[1.02] text-background md:text-7xl"
          >
            {project.name}
          </motion.h1>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.35 }}
          className="mt-5 max-w-xl leading-relaxed text-background/75"
        >
          {project.tagline} — {project.type} at {project.location}.
        </motion.p>
      </div>
    </section>
  );
}
