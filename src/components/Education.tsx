import { Reveal } from "./Reveal";
import { GraduationCap, BadgeCheck, Languages } from "lucide-react";

const education = [
  {
    degree: "M.Sc. Chemistry",
    school: "Bhupal Nobles University",
    year: "2023",
  },
  {
    degree: "B.Sc. (PCM)",
    school: "Mohanlal Sukhadia University",
    year: "2019",
  },
];

const certs = ["NCC 'C' Certificate", "Voice & Accent Training"];
const languages = [
  { name: "Hindi", level: "Native" },
  { name: "English", level: "Fluent" },
  { name: "French", level: "A2" },
];

export function Education() {
  return (
    <section className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-2 gap-10">
          {/* Education */}
          <div>
            <Reveal>
              <div className="flex items-center gap-2 text-sm font-medium text-primary mb-4">
                <GraduationCap className="h-4 w-4" />
                <span className="uppercase tracking-widest text-xs">Education</span>
              </div>
              <h2 className="font-display text-3xl sm:text-4xl font-bold mb-8">
                Academic foundation.
              </h2>
            </Reveal>

            <div className="space-y-4">
              {education.map((e, i) => (
                <Reveal key={e.degree} delay={i * 0.08}>
                  <div className="rounded-2xl glass-strong p-6 shadow-soft hover:shadow-elegant transition-smooth hover:-translate-y-0.5 flex items-start gap-5">
                    <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary flex-shrink-0">
                      <GraduationCap className="h-5 w-5" />
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-wrap items-baseline justify-between gap-2">
                        <h3 className="font-display font-semibold text-lg">
                          {e.degree}
                        </h3>
                        <span className="text-xs text-muted-foreground">
                          {e.year}
                        </span>
                      </div>
                      <p className="text-muted-foreground text-sm mt-1">
                        {e.school}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>

          {/* Certifications & Languages */}
          <div className="space-y-10">
            <div>
              <Reveal>
                <div className="flex items-center gap-2 text-sm font-medium text-primary mb-4">
                  <BadgeCheck className="h-4 w-4" />
                  <span className="uppercase tracking-widest text-xs">Certifications</span>
                </div>
                <h2 className="font-display text-3xl sm:text-4xl font-bold mb-8">
                  Certified & trained.
                </h2>
              </Reveal>

              <div className="flex flex-wrap gap-3">
                {certs.map((c, i) => (
                  <Reveal key={c} delay={i * 0.06}>
                    <div className="inline-flex items-center gap-2 rounded-full glass-strong px-4 py-2.5 shadow-soft hover:shadow-elegant transition-smooth hover:-translate-y-0.5">
                      <BadgeCheck className="h-4 w-4 text-primary" />
                      <span className="text-sm font-medium">{c}</span>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>

            <div>
              <Reveal>
                <div className="flex items-center gap-2 text-sm font-medium text-primary mb-4">
                  <Languages className="h-4 w-4" />
                  <span className="uppercase tracking-widest text-xs">Languages</span>
                </div>
              </Reveal>
              <div className="grid grid-cols-3 gap-3">
                {languages.map((l, i) => (
                  <Reveal key={l.name} delay={i * 0.06}>
                    <div className="rounded-2xl glass-strong p-4 text-center shadow-soft hover:shadow-elegant transition-smooth hover:-translate-y-0.5">
                      <div className="font-display font-semibold">{l.name}</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        {l.level}
                      </div>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
