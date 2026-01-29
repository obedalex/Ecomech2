
import Hero from "@/components/sections/hero"
import About from "@/components/sections/about"
import Technology from "@/components/sections/technology"
import Projects from "@/components/sections/projects"
import Process from "@/components/sections/process"
import CTASection from "@/components/sections/cta-section"



export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <About />
      <Technology />
      <Projects />
      <Process />
      <CTASection />
    </main>
  );
}
