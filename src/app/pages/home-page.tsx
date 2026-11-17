import Navbar from "@/components/layout/navbar";
import Footer from "@/components/layout/footer";
import HeroSection from "@/components/sections/hero/hero-section";
import AboutSection from "@/components/sections/about/about-section";
import SkillsSection from "@/components/sections/skills/skills-section";
import ProjectsSection from "@/components/sections/projects/projects-section";
import ContactSection from "@/components/sections/contact/contact-section";

export const HomePage = () => {
  return (
    <>
      <header className="sticky top-0 z-50">
        <Navbar />
      </header>

      <main id="top" className="main-container space-y-4 pb-16 pt-4 sm:pt-8">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactSection />
      </main>

      <Footer />
    </>
  );
};

export default HomePage;
