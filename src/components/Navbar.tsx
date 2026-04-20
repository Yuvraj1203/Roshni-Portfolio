import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Tools", href: "#tools" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto max-w-6xl px-4 sm:px-6 transition-smooth ${
          scrolled ? "" : ""
        }`}
      >
        <nav
          className={`flex items-center justify-between rounded-full px-5 py-3 transition-smooth ${
            scrolled ? "glass-strong shadow-soft" : "bg-transparent"
          }`}
        >
          <a href="#home" className="flex items-center gap-2 group">
            <span className="grid h-8 w-8 place-items-center rounded-full bg-gradient-primary text-primary-foreground font-display font-bold text-sm shadow-glow">
              R
            </span>
            <span className="font-display font-semibold tracking-tight">
              Roshni Gour
            </span>
          </a>

          <ul className="hidden md:flex items-center gap-1">
            {links.map((l) => (
              <li key={l.href}>
                <a
                  href={l.href}
                  className="px-3 py-1.5 rounded-full text-sm text-muted-foreground hover:text-foreground hover:bg-secondary/70 transition-smooth"
                >
                  {l.label}
                </a>
              </li>
            ))}
          </ul>

          <a
            href="#contact"
            className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-foreground text-background px-4 py-2 text-sm font-medium hover:opacity-90 transition-smooth"
          >
            Let's Talk
          </a>
        </nav>
      </div>
    </motion.header>
  );
}
