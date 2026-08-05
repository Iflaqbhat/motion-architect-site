import { Link } from "@tanstack/react-router";
import type { ReactNode } from "react";

type Variant = "gold" | "outline" | "ghostLight";

const base =
  "group relative inline-flex items-center gap-3 overflow-hidden px-7 py-3.5 text-[0.65rem] font-bold uppercase tracking-[0.24em] transition-colors duration-500";

const styles: Record<Variant, string> = {
  gold: "bg-ink text-background",
  outline: "border border-ink text-ink hover:text-background",
  ghostLight: "border border-background/40 text-background hover:text-ink",
};

const fills: Record<Variant, string> = {
  gold: "bg-foreground",
  outline: "bg-ink",
  ghostLight: "bg-background",
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
        className={`absolute inset-0 origin-bottom scale-y-0 transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-y-100 ${fills[variant]}`}
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
