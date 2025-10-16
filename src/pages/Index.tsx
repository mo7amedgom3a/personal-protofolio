import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Certifications from "@/components/Certifications";
import Background3D from "@/components/Background3D";
import { AnimatedSection } from "@/components/AnimatedSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-primary transition-colors duration-300">
      <Background3D />
      <Header />
      <main>
        <AnimatedSection id="about" animation="fade-in" delay={200}>
          <Hero />
        </AnimatedSection>
        
        <AnimatedSection id="projects" animation="slide-in-left" delay={300}>
          <Projects />
        </AnimatedSection>
        
        <AnimatedSection id="skills" animation="slide-in-right" delay={400}>
          <Skills />
        </AnimatedSection>
        
        <AnimatedSection id="certifications" animation="scale-in" delay={500}>
          <Certifications />
        </AnimatedSection>
        
        <AnimatedSection id="contact" animation="fade-in" delay={600}>
          <Contact />
        </AnimatedSection>
      </main>
      
      <AnimatedSection animation="fade-in" delay={700}>
        <Footer />
      </AnimatedSection>
    </div>
  );
};

export default Index;