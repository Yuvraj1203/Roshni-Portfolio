import { Reveal } from "./Reveal";
import { Briefcase, Trophy, Award, Rocket, Star } from "lucide-react";

const responsibilities = [
  "Managed end-to-end operations processes",
  "Led a team of 16 with daily coaching & support",
  "QA across a team of 25 — 100% accuracy focus",
  "Designed training & workflow improvements",
  "Stakeholder coordination & client onboarding",
];

const achievements = [
  { icon: Rocket, title: "Fast Track ADC", desc: "Promoted via the accelerated career program" },
  { icon: Star, title: "Early Confirmation", desc: "Confirmed within 3 months of joining" },
  { icon: Award, title: "Multiple SEOM Awards", desc: "Recognized for monthly excellence" },
  { icon: Trophy, title: "Multiple SEOQ Awards", desc: "Quarterly excellence recognition" },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-28 sm:py-36 bg-gradient-soft">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="flex items-center gap-2 text-sm font-medium text-primary mb-4">
            <Briefcase className="h-4 w-4" />
            <span className="uppercase tracking-widest text-xs">Experience</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight max-w-2xl">
            Where I've been making an impact.
          </h2>
        </Reveal>

        <div className="mt-16 relative">
          {/* Timeline line */}
          <div className="absolute left-4 sm:left-6 top-2 bottom-2 w-px bg-gradient-to-b from-primary/60 via-primary/30 to-transparent" />

          <Reveal delay={0.1}>
            <div className="relative pl-14 sm:pl-20">
              <span className="absolute left-0 sm:left-2 top-1.5 grid h-9 w-9 place-items-center rounded-full bg-gradient-primary text-primary-foreground shadow-glow">
                <Briefcase className="h-4 w-4" />
              </span>

              <div className="rounded-3xl glass-strong p-8 sm:p-10 shadow-soft hover:shadow-elegant transition-smooth hover:-translate-y-1">
                <div className="flex flex-wrap items-start justify-between gap-3">
                  <div>
                    <h3 className="font-display text-2xl font-semibold">
                      Assistant Team Lead — Operations
                    </h3>
                    <p className="text-muted-foreground mt-1">
                      Fusion Business Solutions Pvt. Ltd.
                    </p>
                  </div>
                  <span className="rounded-full bg-primary-soft text-primary px-3 py-1 text-xs font-medium">
                    May 2023 — Present
                  </span>
                </div>

                <ul className="mt-6 space-y-3">
                  {responsibilities.map((r) => (
                    <li
                      key={r}
                      className="flex items-start gap-3 text-foreground/85"
                    >
                      <span className="mt-2 h-1.5 w-1.5 rounded-full bg-gradient-primary flex-shrink-0" />
                      <span>{r}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        </div>

        {/* Key Achievements */}
        <div className="mt-20">
          <Reveal>
            <div className="flex items-center gap-3 mb-8">
              <div className="grid h-10 w-10 place-items-center rounded-xl bg-gradient-primary text-primary-foreground shadow-glow">
                <Trophy className="h-5 w-5" />
              </div>
              <h3 className="font-display text-2xl sm:text-3xl font-bold">
                Key Achievements
              </h3>
            </div>
          </Reveal>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {achievements.map((a, i) => (
              <Reveal key={a.title} delay={0.05 * i}>
                <div className="group relative h-full rounded-2xl glass-strong p-6 shadow-soft hover:shadow-elegant transition-smooth hover:-translate-y-1 overflow-hidden">
                  <div className="absolute -right-8 -top-8 h-24 w-24 rounded-full bg-gradient-primary opacity-10 group-hover:opacity-20 blur-2xl transition-smooth" />
                  <a.icon className="h-6 w-6 text-primary mb-4" />
                  <h4 className="font-display font-semibold text-lg">{a.title}</h4>
                  <p className="text-sm text-muted-foreground mt-1.5">{a.desc}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
