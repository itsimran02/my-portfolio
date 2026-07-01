
import Navbar from "@/components/Navbar";
import Hero from "@/components/sections/Hero";
import Profile from "@/components/sections/Profile";
import Team from "@/components/sections/Team";
import About from "@/components/sections/About";
import Services from "@/components/sections/Services";
import Projects from "@/components/sections/Projects";
import Process from "@/components/sections/Process";
import Skills from "@/components/sections/Skills";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/Footer";
import CustomCursor from "@/components/CustomCursor";

export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground selection:bg-accent selection:text-accent-foreground">
      <CustomCursor />
      <Navbar />
      <Hero />
      <Profile />
      <Team />
      <About />
      <Services />
      <Projects />
      <Skills />
      <Process />
      <Testimonials />
      <FAQ />
      <Contact />
      <Footer />
    </main>
  );
}
