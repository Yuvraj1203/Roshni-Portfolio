import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Experience } from "@/components/Experience";
import { Skills } from "@/components/Skills";
import { Tools } from "@/components/Tools";
import { Education } from "@/components/Education";
import { Strengths } from "@/components/Strengths";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { Hobbies } from "@/components/Hobbies";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Roshni Gour — Assistant Team Lead, Operations" },
      {
        name: "description",
        content:
          "Portfolio of Roshni Gour — Operations professional with 3+ years leading teams, driving QA, and refining processes at Fusion Business Solutions.",
      },
      { property: "og:title", content: "Roshni Gour — Operations Professional" },
      {
        property: "og:description",
        content:
          "Assistant Team Lead specializing in operations, team leadership, and quality assurance.",
      },
    ],
    links: [
      {
        rel: "preconnect",
        href: "https://fonts.googleapis.com",
      },
      {
        rel: "preconnect",
        href: "https://fonts.gstatic.com",
        crossOrigin: "anonymous",
      },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Space+Grotesk:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen overflow-x-hidden">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Tools />
        <Education />
        <Strengths />
        <Hobbies />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
