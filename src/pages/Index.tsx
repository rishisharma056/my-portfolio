import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { ThemeToggle } from "@/components/ThemeToggle";
import { StarBackground } from "@/components/StarBackground";

const Index = () => {
  return (
    <div className="min-h-screen relative">
      <StarBackground />
      <ThemeToggle />
      <Header />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
