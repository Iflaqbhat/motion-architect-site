type Props = { tone?: "light" | "dark"; className?: string };

export function Logo({ tone = "dark", className = "" }: Props) {
  const text = tone === "light" ? "text-background" : "text-ink";
  const sub = tone === "light" ? "text-gold-soft" : "text-muted-foreground";

  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <svg width="34" height="38" viewBox="0 0 34 38" fill="none" aria-hidden="true">
        <path
          d="M17 1.5 32.5 10v18L17 36.5 1.5 28V10L17 1.5Z"
          stroke="currentColor"
          className="text-gold"
          strokeWidth="1.2"
        />
        <path d="M10 24V14l7 6 7-6v10" stroke="currentColor" className="text-gold" strokeWidth="1.6" />
        <circle cx="17" cy="28" r="1.6" className="fill-gold" />
      </svg>
      <span className="leading-none">
        <span className={`block font-display text-xl tracking-[0.18em] ${text}`}>YUVA</span>
        <span className={`block text-[0.55rem] tracking-[0.42em] ${sub}`}>GROUP</span>
      </span>
    </span>
  );
}
