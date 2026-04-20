import { motion } from "framer-motion";
import { ArrowRight, Linkedin, MapPin, Mail } from "lucide-react";

export function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden bg-gradient-soft"
    >
      {/* Animated mesh background */}
      <div className="absolute inset-0 bg-gradient-mesh opacity-80" />

      {/* Floating gradient blobs */}
      <div className="absolute -top-32 -left-32 h-96 w-96 rounded-full bg-gradient-primary opacity-30 blur-3xl animate-blob" />
      <div
        className="absolute top-1/3 -right-32 h-[500px] w-[500px] rounded-full opacity-25 blur-3xl animate-blob"
        style={{
          background: "linear-gradient(135deg, oklch(0.75 0.15 250), oklch(0.78 0.18 320))",
          animationDelay: "-6s",
        }}
      />
      <div
        className="absolute bottom-0 left-1/3 h-80 w-80 rounded-full opacity-20 blur-3xl animate-blob"
        style={{
          background: "linear-gradient(135deg, oklch(0.85 0.1 200), oklch(0.8 0.15 280))",
          animationDelay: "-12s",
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(to right, currentColor 1px, transparent 1px), linear-gradient(to bottom, currentColor 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />

      <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-32 pb-20 w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full glass px-4 py-1.5 text-xs font-medium text-muted-foreground mb-8"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-60" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Available for new opportunities
        </motion.div>

        <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight max-w-4xl">
          {"Hi, I'm".split(" ").map((word, i) => (
            <motion.span
              key={i}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 + i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="inline-block mr-3"
            >
              {word}
            </motion.span>
          ))}
          <motion.span
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="inline-block text-gradient"
          >
            Roshni Gour.
          </motion.span>
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="mt-6 text-xl sm:text-2xl text-muted-foreground max-w-2xl font-light"
        >
          Assistant Team Lead — Operations. Building reliable processes, leading high-performing
          teams, and obsessing over quality.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#experience"
            className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3.5 text-sm font-medium text-primary-foreground shadow-elegant hover:shadow-glow transition-smooth hover:-translate-y-0.5"
          >
            View Experience
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full glass-strong px-6 py-3.5 text-sm font-medium hover:bg-white transition-smooth hover:-translate-y-0.5"
          >
            Contact Me
          </a>
          <a
            href="https://www.linkedin.com/in/roshni-gour"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="grid h-12 w-12 place-items-center rounded-full glass-strong hover:bg-white hover:-translate-y-0.5 transition-smooth"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-14 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground"
        >
          <span className="inline-flex items-center gap-2">
            <MapPin className="h-4 w-4" /> Udaipur, India
          </span>
          <span className="inline-flex items-center gap-2">
            <Mail className="h-4 w-4" /> gourroshni1999@gmail.com
          </span>
          <span className="hidden sm:inline-flex items-center gap-2">
            <span className="h-1 w-1 rounded-full bg-primary" /> 2.5+ years experience
          </span>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 text-xs text-muted-foreground"
      ></motion.div>
    </section>
  );
}
