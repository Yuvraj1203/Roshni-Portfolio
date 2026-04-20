import { Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border/60 py-10 bg-background">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="flex items-center gap-2">
          <span className="grid h-7 w-7 place-items-center rounded-full bg-gradient-primary text-primary-foreground font-display font-bold text-xs">
            R
          </span>
          <span>© {new Date().getFullYear()} Roshni Gour. Crafted with care.</span>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="mailto:gourroshni1999@gmail.com"
            aria-label="Email"
            className="grid h-9 w-9 place-items-center rounded-full hover:bg-secondary transition-smooth"
          >
            <Mail className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/roshni-gour"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid h-9 w-9 place-items-center rounded-full hover:bg-secondary transition-smooth"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
