import { Reveal } from "../site/Reveal";
import type { FloorPlanRow } from "@/data/site";

export function FloorPlanTable({ rows }: { rows: FloorPlanRow[] }) {
  return (
    <section className="ink-panel py-24">
      <div className="mx-auto max-w-7xl px-6">
        <Reveal>
          <p className="eyebrow">Typical floor plan</p>
          <h2 className="mt-5 text-3xl leading-[1.05] text-background md:text-4xl">Unit schedule</h2>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="mt-12 overflow-x-auto">
            <table className="w-full min-w-[34rem] border-collapse text-left text-base">
              <thead>
                <tr className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">
                  <th className="border-b border-background/20 py-4 pr-4 font-medium">Flat</th>
                  <th className="border-b border-background/20 py-4 pr-4 font-medium">Area</th>
                  <th className="border-b border-background/20 py-4 pr-4 font-medium">Facing</th>
                  <th className="border-b border-background/20 py-4 font-medium">Type</th>
                </tr>
              </thead>
              <tbody>
                {rows.map((r) => (
                  <tr
                    key={r.flat}
                    className="text-background/75 transition-colors duration-400 hover:bg-background/5 hover:text-gold"
                  >
                    <td className="border-b border-background/10 py-4 pr-4">{r.flat}</td>
                    <td className="border-b border-background/10 py-4 pr-4">{r.area}</td>
                    <td className="border-b border-background/10 py-4 pr-4">{r.facing}</td>
                    <td className="border-b border-background/10 py-4">{r.bhk}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
