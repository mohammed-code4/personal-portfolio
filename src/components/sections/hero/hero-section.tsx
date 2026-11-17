import HeroIntro from "./hero-intro";
import HeroProfileCard from "./hero-profile-card";
import { Badge } from "@/components/ui/badge";
import { profileLinks } from "@/data/profile";
import { Button } from "@/components/ui/button";
import { FiArrowRight, FiFileText } from "react-icons/fi";
import TechBadge from "@/components/common/tech-badge";

const primaryTechStack = ["React.js", "Next.js", "TypeScript", "JavaScript"];

export const HeroSection = () => {
  return (
    <section className="grid scroll-mt-20 items-center gap-10 py-8 md:grid-cols-[1.2fr_0.8fr] md:py-16">
      <div>
        {/* Hero badge */}
        <Badge
          variant="secondary"
          className="mb-4 gap-2 border-primary/20 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase   text-primary"
        >
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-primary opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-primary" />
          </span>
          Front-end developer
        </Badge>

        {/*  intro title and description */}
        <HeroIntro />

        {/* Tech stack */}
        <div className="mt-6 flex flex-wrap gap-2">
          {primaryTechStack.map((tech) => (
            <TechBadge
              key={tech}
              tech={tech}
              className="bg-primary/10 text-primary "
            />
          ))}
        </div>

        {/* Hero Action */}
        <div className="mt-8 flex flex-wrap items-center gap-3">
          <a href={profileLinks.cv} target="_blank" rel="noreferrer noopener">
            <Button size="lg" className="gap-2 shadow-sm">
              <FiFileText className="h-4 w-4" />
              View CV
              <FiArrowRight className="h-4 w-4" />
            </Button>
          </a>

          <a href="#projects">
            <Button variant="outline" size="lg">
              Explore Projects
            </Button>
          </a>
        </div>
      </div>

      <HeroProfileCard />
    </section>
  );
};

export default HeroSection;
