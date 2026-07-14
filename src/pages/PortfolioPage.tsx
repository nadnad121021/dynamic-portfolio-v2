import { AboutSection } from "../components/portfolio/AboutSection";
import { ContactSection } from "../components/portfolio/ContactSection";
import { EducationSection } from "../components/portfolio/EducationSection";
import { ExperienceSection } from "../components/portfolio/ExperienceSection";
import { Footer } from "../components/portfolio/Footer";
import { Header } from "../components/portfolio/Header";
import { HeroSection } from "../components/portfolio/HeroSection";
import { ProjectsSection } from "../components/portfolio/ProjectsSection";
import { ReviewsSection } from "../components/portfolio/ReviewsSection";
import { SkillsSection } from "../components/portfolio/SkillsSection";

export function PortfolioPage() {
  return (
    <div className="min-h-screen overflow-x-hidden bg-[#020617] text-slate-100 selection:bg-cyan-400 selection:text-slate-950">
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(148,163,184,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(148,163,184,0.8) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10">
        <Header />

        <main>
          <HeroSection />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <ExperienceSection />
          <EducationSection />
          <ReviewsSection />
          <ContactSection />
        </main>

        <Footer />
      </div>
    </div>
  );
}
