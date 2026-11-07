import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { ProjectCard } from "@/components/portfolio/ProjectCard";
import { PROJECTS } from "@/data/portfolio";

export function ProjectsSection() {
  return (
    <section id="projects" className="py-20 border-t border-border">
      <Container>
        <SectionHeader title="Projects" />
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          {PROJECTS.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>
      </Container>
    </section>
  );
}
