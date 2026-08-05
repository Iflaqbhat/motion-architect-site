type Props = { tone?: "light" | "dark"; className?: string };

export function Logo({ tone = "dark", className = "" }: Props) {
  const main = tone === "light" ? "text-background" : "text-ink";
  const sub = tone === "light" ? "text-background/35" : "text-ink/30";

  return (
    <span className={`flex items-baseline gap-2 leading-none ${className}`}>
      <span className={`font-display text-4xl tracking-tight ${main}`}>YUVA</span>
      <span className={`font-display text-4xl tracking-tight ${sub}`}>GROUP</span>
    </span>
  );
}
