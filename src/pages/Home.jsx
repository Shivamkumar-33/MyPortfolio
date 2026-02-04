import { Navbar } from "../components/Navbar";
import { ThemeToggle } from "../components/ThemeToggle";
import Particles from "@/components/Particles";
import { HeroSection } from "../components/HeroSection";
import { AboutSection } from "../components/AboutSection";
import { SkillsSection } from "../components/SkillsSection";
import { ProjectsSection } from "../components/ProjectsSection";
import { ContactSection } from "../components/ContactSection";
import { Footer } from "../components/Footer";
import { useEffect, useState } from "react";

export const Home = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const checkDarkMode = () => {
      setIsDark(document.documentElement.classList.contains("dark"));
    };

    checkDarkMode();
    const observer = new MutationObserver(checkDarkMode);
    observer.observe(document.documentElement, { attributes: true, attributeFilter: ["class"] });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Theme Toggle */}
      <ThemeToggle />
      {/* Background Effects - Dark Mode Only */}
      {isDark && (
        <div className="fixed inset-0 z-0 pointer-events-auto">
          <Particles
            particleColors={["#b32d2d"]}
            particleCount={600}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover
            alphaParticles={false}
            disableRotation={false}
            pixelRatio={1}
          />
        </div>
      )}

      {/* Navbar */}
      <Navbar />
      {/* Main Content */}
      <div className="relative z-10 pointer-events-none">
        <main className="pointer-events-auto">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};
