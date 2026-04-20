import { Reveal } from "./Reveal";
import { Zap, Crown, Smile, Target, Eye } from "lucide-react";

const strengths = [
  { icon: Zap, label: "Quick Learner" },
  { icon: Crown, label: "Leadership" },
  { icon: Smile, label: "Positive Attitude" },
  { icon: Target, label: "Discipline" },
  { icon: Eye, label: "Attention to Detail" },
];

export function Strengths() {
  return (
    <section className="relative py-28 sm:py-36 bg-gradient-soft">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="flex items-center gap-2 text-sm font-medium text-primary mb-4">
            <Crown className="h-4 w-4" />
            <span className="uppercase tracking-widest text-xs">Core Strengths</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight max-w-2xl">
            What I'm known for.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {strengths.map((s, i) => (
            <Reveal key={s.label} delay={i * 0.05}>
              <div className="group relative rounded-2xl glass-strong p-6 text-center shadow-soft hover:shadow-elegant transition-smooth hover:-translate-y-1 overflow-hidden h-full">
                <div className="absolute inset-0 bg-gradient-primary opacity-0 group-hover:opacity-[0.06] transition-smooth" />
                <div className="relative">
                  <div className="grid mx-auto h-12 w-12 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow group-hover:scale-110 transition-smooth">
                    <s.icon className="h-5 w-5" />
                  </div>
                  <div className="mt-4 font-display font-semibold text-sm">
                    {s.label}
                  </div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
