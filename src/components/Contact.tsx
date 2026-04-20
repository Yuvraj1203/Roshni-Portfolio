import { useState, type FormEvent } from "react";
import { Reveal } from "./Reveal";
import { Mail, Phone, Linkedin, Send, MapPin, ArrowUpRight } from "lucide-react";

export function Contact() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="relative py-28 sm:py-36 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-mesh opacity-50" />
      <div className="absolute -top-40 left-1/3 h-96 w-96 rounded-full bg-gradient-primary opacity-20 blur-3xl animate-blob" />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal>
          <div className="text-center mb-14">
            <div className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-4">
              <Mail className="h-4 w-4" />
              <span className="uppercase tracking-widest text-xs">Contact</span>
            </div>
            <h2 className="font-display text-4xl sm:text-5xl md:text-6xl font-bold leading-tight">
              Let's build something <span className="text-gradient">great together.</span>
            </h2>
            <p className="mt-5 text-lg text-muted-foreground max-w-xl mx-auto">
              Open to operations and leadership roles. Drop a message — I reply within a day.
            </p>
          </div>
        </Reveal>

        <div className="grid lg:grid-cols-5 gap-6">
          {/* Contact info */}
          <Reveal delay={0.1} className="lg:col-span-2">
            <div className="h-full rounded-3xl glass-strong p-8 shadow-soft space-y-5">
              <ContactRow
                icon={Phone}
                label="Phone"
                value="+91 80008 28597"
                href="tel:+918000828597"
              />
              <ContactRow
                icon={Mail}
                label="Email"
                value="gourroshni1999@gmail.com"
                href="mailto:gourroshni1999@gmail.com"
              />
              <ContactRow
                icon={Linkedin}
                label="LinkedIn"
                value="linkedin.com/in/roshni-gour"
                href="https://www.linkedin.com/in/roshni-gour"
                external
              />
              <ContactRow
                icon={MapPin}
                label="Location"
                value="Udaipur, India"
              />
            </div>
          </Reveal>

          {/* Form */}
          <Reveal delay={0.2} className="lg:col-span-3">
            <form
              onSubmit={onSubmit}
              className="rounded-3xl glass-strong p-8 shadow-soft space-y-5"
            >
              <div className="grid sm:grid-cols-2 gap-4">
                <Field label="Name">
                  <input
                    required
                    type="text"
                    placeholder="Your name"
                    className="w-full rounded-xl bg-background/70 border border-border px-4 py-3 text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-smooth"
                  />
                </Field>
                <Field label="Email">
                  <input
                    required
                    type="email"
                    placeholder="you@example.com"
                    className="w-full rounded-xl bg-background/70 border border-border px-4 py-3 text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-smooth"
                  />
                </Field>
              </div>
              <Field label="Subject">
                <input
                  type="text"
                  placeholder="What's this about?"
                  className="w-full rounded-xl bg-background/70 border border-border px-4 py-3 text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-smooth"
                />
              </Field>
              <Field label="Message">
                <textarea
                  required
                  rows={5}
                  placeholder="Tell me a little about your project or role..."
                  className="w-full rounded-xl bg-background/70 border border-border px-4 py-3 text-sm outline-none focus:border-primary/60 focus:ring-2 focus:ring-primary/20 transition-smooth resize-none"
                />
              </Field>

              <button
                type="submit"
                className="group inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-elegant hover:shadow-glow transition-smooth hover:-translate-y-0.5"
              >
                {sent ? "Message Sent ✨" : "Send Message"}
                <Send className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </button>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function Field({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <label className="block">
      <span className="text-xs font-medium text-muted-foreground uppercase tracking-wider mb-1.5 block">
        {label}
      </span>
      {children}
    </label>
  );
}

function ContactRow({
  icon: Icon,
  label,
  value,
  href,
  external,
}: {
  icon: React.ComponentType<{ className?: string }>;
  label: string;
  value: string;
  href?: string;
  external?: boolean;
}) {
  const content = (
    <div className="flex items-center gap-4 group">
      <div className="grid h-11 w-11 place-items-center rounded-xl bg-primary-soft text-primary flex-shrink-0">
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-xs uppercase tracking-wider text-muted-foreground">
          {label}
        </div>
        <div className="font-medium truncate">{value}</div>
      </div>
      {href && (
        <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 transition-smooth" />
      )}
    </div>
  );

  if (!href) return content;

  return (
    <a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noreferrer" : undefined}
      className="block"
    >
      {content}
    </a>
  );
}
