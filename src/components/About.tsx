import { Reveal } from "./Reveal";
import { Sparkles } from "lucide-react";

export function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="flex items-center gap-2 text-sm font-medium text-primary mb-4">
            <Sparkles className="h-4 w-4" />
            <span className="uppercase tracking-widest text-xs">About</span>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-5">
            <Reveal delay={0.05}>
              <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight">
                A calm hand on <span className="text-gradient">complex operations.</span>
              </h2>
            </Reveal>
          </div>

          <div className="lg:col-span-7">
            <Reveal delay={0.15}>
              <div className="relative rounded-3xl glass-strong p-8 sm:p-10 shadow-soft">
                <div className="absolute -top-px left-10 right-10 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                <p className="text-lg leading-relaxed text-foreground/85">
                  Operations professional with{" "}
                  <span className="font-semibold text-foreground">2.5 years</span> of experience
                  managing end-to-end processes, team handling, and quality assurance. I'm skilled
                  in client onboarding, process improvement, and ensuring high accuracy across daily
                  operations.
                </p>
                <p className="mt-5 text-muted-foreground leading-relaxed">
                  I enjoy the small details — the workflows that quietly remove friction, the audits
                  that catch what others miss, and the rituals that help a team perform at its best.
                </p>

                <div className="mt-8 grid grid-cols-3 gap-4 pt-6 border-t border-border/60">
                  <Stat value="2.5+" label="Years experience" />
                  <Stat value="16" label="Team members led" />
                  <Stat value="25" label="QA coverage" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div>
      <div className="font-display text-3xl font-bold text-gradient">{value}</div>
      <div className="text-xs text-muted-foreground mt-1">{label}</div>
    </div>
  );
}
