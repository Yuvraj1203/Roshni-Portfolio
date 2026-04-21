import { Reveal } from "./Reveal";
import { Heart, Plane, Camera, Trophy } from "lucide-react";
import { useRef } from "react";

const hobbies = [
  {
    name: "Travelling",
    icon: Plane,
    description: "Exploring new places, cultures, and cuisines.",
    href: null,
    // Soft airy ascending arpeggio
    notes: [523.25, 659.25, 783.99, 1046.5],
    waveform: "sine" as OscillatorType,
  },
  {
    name: "Photography",
    icon: Camera,
    description: "Capturing moments — see my work on Instagram.",
    href: "https://www.instagram.com/chaiparlejii?igsh=MWxhYXdzeXY3Y2JjMQ==",
    // Crisp shutter-click style: two short blips
    notes: [1760, 1320],
    waveform: "square" as OscillatorType,
  },
  {
    name: "Cricket",
    icon: Trophy,
    description: "Weekend matches and the thrill of the game.",
    href: null,
    // Bat-hit thud + cheer-like rise
    notes: [220, 440, 660],
    waveform: "triangle" as OscillatorType,
  },
];

export function Hobbies() {
  const audioCtxRef = useRef<AudioContext | null>(null);

  const getCtx = () => {
    if (!audioCtxRef.current) {
      const Ctor =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new Ctor();
    }
    return audioCtxRef.current;
  };

  const playSound = (notes: number[], waveform: OscillatorType) => {
    try {
      const ctx = getCtx();
      if (ctx.state === "suspended") ctx.resume();
      const now = ctx.currentTime;
      const noteDuration = 0.16;

      notes.forEach((freq, i) => {
        const osc = ctx.createOscillator();
        const gain = ctx.createGain();
        osc.type = waveform;
        osc.frequency.setValueAtTime(freq, now + i * noteDuration);

        const start = now + i * noteDuration;
        const end = start + noteDuration;
        gain.gain.setValueAtTime(0.0001, start);
        gain.gain.exponentialRampToValueAtTime(0.18, start + 0.02);
        gain.gain.exponentialRampToValueAtTime(0.0001, end);

        osc.connect(gain);
        gain.connect(ctx.destination);
        osc.start(start);
        osc.stop(end + 0.02);
      });
    } catch {
      // Audio is non-critical; silently ignore.
    }
  };

  return (
    <section id="hobbies" className="relative py-28 sm:py-36">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="flex items-center gap-2 text-sm font-medium text-primary mb-4">
            <Heart className="h-4 w-4" />
            <span className="uppercase tracking-widest text-xs">Hobbies</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl font-bold leading-tight max-w-2xl">
            Beyond work — what keeps me inspired.
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 sm:grid-cols-3 gap-6">
          {hobbies.map((h, i) => {
            const Icon = h.icon;
            const content = (
              <div
                onMouseEnter={() => playSound(h.notes, h.waveform)}
                className="group h-full rounded-3xl glass-strong p-8 flex flex-col items-start gap-4 shadow-soft hover:shadow-elegant transition-smooth hover:-translate-y-2 cursor-pointer"
              >
                <div className="grid h-14 w-14 place-items-center rounded-2xl bg-gradient-primary text-primary-foreground shadow-glow group-hover:scale-110 transition-smooth">
                  <Icon className="h-6 w-6" />
                </div>
                <h3 className="font-display text-2xl font-semibold">{h.name}</h3>
                <p className="text-muted-foreground leading-relaxed">{h.description}</p>
              </div>
            );

            return (
              <Reveal key={h.name} delay={i * 0.08}>
                {h.href ? (
                  <a
                    href={h.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${h.name} — open Instagram`}
                    className="block h-full"
                  >
                    {content}
                  </a>
                ) : (
                  content
                )}
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
