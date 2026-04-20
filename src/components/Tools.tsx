import { Reveal } from "./Reveal";
import { Wrench } from "lucide-react";

const tools = [
  { name: "Epic", initials: "EP" },
  { name: "HawkSoft", initials: "HS" },
  { name: "AMS360", initials: "AM" },
  { name: "EZLynx", initials: "EZ" },
];

export function Tools() {
  return (
    <section id="tools" className="relative py-28 sm:py-36 bg-gradient-soft">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="flex items-center gap-2 text-sm font-medium text-primary mb-4">
            <Wrench className="h-4 w-4" />
            <span className="uppercase tracking-widest text-xs">Tools</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight max-w-2xl">
            Tools I work with daily.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-4">
          {tools.map((t, i) => (
            <Reveal key={t.name} delay={i * 0.06}>
              <div className="group aspect-square rounded-3xl glass-strong p-6 flex flex-col items-center justify-center gap-4 shadow-soft hover:shadow-elegant transition-smooth hover:-translate-y-1">
                <div className="grid h-16 w-16 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground font-display font-bold text-xl shadow-glow group-hover:scale-110 transition-smooth">
                  {t.initials}
                </div>
                <span className="font-display font-semibold">{t.name}</span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
