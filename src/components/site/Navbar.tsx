import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "motion/react";
import { useState } from "react";
import { Logo } from "./Logo";
import { NAV_LINKS } from "@/data/site";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useMotionValueEvent(scrollY, "change", (v) => setScrolled(v > 40));

  const links = NAV_LINKS.filter((l) => l.to !== "/contact");

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-500 ${
        scrolled
          ? "border-ink/10 bg-background/85 py-3 backdrop-blur-xl"
          : "border-transparent bg-background/60 py-6 backdrop-blur-sm"
      }`}
    >
      <nav className="mx-auto flex max-w-[110rem] items-end justify-between px-6 md:px-12">
        <Link to="/" onClick={() => setOpen(false)} className="shrink-0">
          <Logo />
        </Link>

        <ul className="hidden items-end gap-8 text-[0.62rem] font-bold uppercase tracking-[0.24em] text-ink md:flex">
          {links.map((link, i) => (
            <li key={link.to} className="flex items-baseline gap-1.5">
              <span className="font-display text-[0.65rem] text-ink/25">
                {String(i + 1).padStart(2, "0")}
              </span>
              <Link to={link.to} className="nav-link" data-active={pathname === link.to}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-4">
          <Link
            to="/contact"
            className="group relative hidden overflow-hidden bg-ink px-6 py-2.5 text-[0.62rem] font-bold uppercase tracking-[0.24em] text-background md:inline-flex"
          >
            <span className="absolute inset-0 origin-bottom scale-y-0 bg-foreground transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100" />
            <span className="relative z-10">Enquire</span>
          </Link>

          <button
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
            className="flex h-10 w-10 flex-col items-center justify-center gap-1.5 md:hidden"
          >
            <span
              className={`h-0.5 w-7 bg-ink transition-transform duration-300 ${open ? "translate-y-[4px] rotate-45" : ""}`}
            />
            <span
              className={`h-0.5 w-7 bg-ink transition-transform duration-300 ${open ? "-translate-y-[4px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-ink/10 bg-background md:hidden"
          >
            <ul className="flex flex-col px-6 py-2">
              {NAV_LINKS.map((link, i) => (
                <li key={link.to} className="border-b border-ink/10 last:border-0">
                  <Link
                    to={link.to}
                    onClick={() => setOpen(false)}
                    className="flex items-baseline gap-4 py-4"
                  >
                    <span className="font-display text-sm text-ink/25">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="font-display text-4xl text-ink">{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
