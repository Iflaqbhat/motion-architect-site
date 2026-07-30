import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

type Variant = "gold" | "outline" | "ghostLight";

const base =
  "group relative inline-flex items-center gap-3 overflow-hidden px-7 py-3.5 text-[0.72rem] font-medium uppercase tracking-[0.2em] transition-colors duration-500";

const styles: Record<Variant, string> = {
  gold: "bg-gold text-ink hover:text-ink",
  outline: "border border-ink/25 text-ink hover:text-background",
  ghostLight: "border border-background/35 text-background hover:text-ink",
};

const fills: Record<Variant, string> = {
  gold: "bg-gold-soft",
  outline: "bg-ink",
  ghostLight: "bg-gold",
};

export function GoldButton({
  to,
  children,
  variant = "gold",
  type,
  className = "",
}: {
  to?: string;
  children: ReactNode;
  variant?: Variant;
  type?: "submit";
  className?: string;
}) {
  const inner = (
    <>
      <span
        className={`absolute inset-0 origin-left scale-x-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100 ${fills[variant]}`}
      />
      <span className="relative z-10">{children}</span>
      <span className="relative z-10 transition-transform duration-500 group-hover:translate-x-1.5">
        &#8594;
      </span>
    </>
  );

  const cls = `${base} ${styles[variant]} ${className}`;

  if (to) {
    return (
      <Link to={to} className={cls}>
        {inner}
      </Link>
    );
  }
  return (
    <button type={type ?? "button"} className={cls}>
      {inner}
    </button>
  );
}
