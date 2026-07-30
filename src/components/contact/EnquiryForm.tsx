import { useState } from "react";
import { GoldButton } from "../site/GoldButton";
import { PROJECTS } from "@/data/site";

const field =
  "w-full border-b border-border bg-transparent py-4 text-sm outline-none transition-colors duration-400 placeholder:text-muted-foreground/70 focus:border-gold";

export function EnquiryForm() {
  const [sent, setSent] = useState(false);

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        setSent(true);
      }}
      className="ink-panel p-9 md:p-12"
    >
      <p className="eyebrow">Enquiry</p>
      <h2 className="mt-4 text-3xl text-background">Send us a note</h2>

      <div className="mt-10 space-y-6 [&_input]:text-background [&_select]:text-background [&_textarea]:text-background">
        <input required placeholder="Your name" className={`${field} border-background/25`} />
        <input
          required
          type="tel"
          placeholder="Phone number"
          className={`${field} border-background/25`}
        />
        <input
          required
          type="email"
          placeholder="Email address"
          className={`${field} border-background/25`}
        />
        <select className={`${field} border-background/25`} defaultValue="">
          <option value="" disabled className="text-ink">
            Select a project
          </option>
          {PROJECTS.map((p) => (
            <option key={p.slug} value={p.slug} className="text-ink">
              {p.name}
            </option>
          ))}
        </select>
        <textarea rows={3} placeholder="Your message" className={`${field} border-background/25`} />
      </div>

      <div className="mt-10">
        <GoldButton type="submit">{sent ? "Enquiry received" : "Submit enquiry"}</GoldButton>
      </div>

      {sent && (
        <p className="mt-5 text-sm text-gold-soft">
          Thank you — our team will reach out within one working day.
        </p>
      )}
    </form>
  );
}
