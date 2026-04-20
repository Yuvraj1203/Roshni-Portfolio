import { Reveal } from "./Reveal";
import { Cog, Users, ShieldCheck } from "lucide-react";

const groups = [
  {
    icon: Cog,
    title: "Operations",
    skills: ["Operations Management", "Process Improvement", "Client Onboarding", "Workflow Design"],
  },
  {
    icon: Users,
    title: "Leadership",
    skills: ["Team Leadership", "Coaching & Training", "Stakeholder Coordination", "Communication"],
  },
  {
    icon: ShieldCheck,
    title: "Quality & Tools",
    skills: ["Quality Assurance", "Audits & Reviews", "Excel", "Documentation"],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="flex items-center gap-2 text-sm font-medium text-primary mb-4">
            <Cog className="h-4 w-4" />
            <span className="uppercase tracking-widest text-xs">Skills</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight max-w-2xl">
            The skills I bring to every team.
          </h2>
        </Reveal>

        <div className="mt-14 grid md:grid-cols-3 gap-5">
          {groups.map((g, i) => (
            <Reveal key={g.title} delay={i * 0.08}>
              <div className="group h-full rounded-3xl glass-strong p-7 shadow-soft hover:shadow-elegant transition-smooth hover:-translate-y-1">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow mb-5">
                  <g.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-xl font-semibold mb-4">
                  {g.title}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {g.skills.map((s) => (
                    <span
                      key={s}
                      className="rounded-full border border-border bg-background/60 px-3 py-1.5 text-sm text-foreground/80 hover:border-primary/40 hover:text-foreground hover:bg-primary-soft transition-smooth"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
