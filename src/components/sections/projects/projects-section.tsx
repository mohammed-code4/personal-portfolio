import { useMemo, useState } from "react";
import { projects, type Project } from "@/data/projects";
import SectionHeading from "@/components/common/section-heading";
import ProjectFilterBar from "./project-filter-bar";
import ProjectCard from "./project-card";
import ProjectDetailsDialog from "./project-details-dialog";

const filterOptions = [
  "All",
  ...Array.from(new Set(projects.map((project) => project.tech))),
];

export const ProjectsSection = () => {
  const [activeFilter, setActiveFilter] = useState("All");

  // State for opening and closing dialog
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  //   filter projects based on the active filter
  const filteredProjects = useMemo(() => {
    if (activeFilter === "All") {
      return projects;
    }

    return projects.filter((project) => project.tech.includes(activeFilter));
  }, [activeFilter]);

  return (
    <section id="projects" className="scroll-mt-20 py-12 md:py-16">
      <SectionHeading
        badgeText="Projects"
        title="Featured work that strengthened my front-end skills."
      />

      {/* filter bar for filtering projects based on the active filter */}
      <ProjectFilterBar
        options={filterOptions}
        activeFilter={activeFilter}
        onSelectFilter={setActiveFilter}
      />

      {/* project cards */}
      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project) => (
          <ProjectCard
            key={project.id}
            project={project}
            onSelect={setSelectedProject}
          />
        ))}
      </div>

      {/* Project details dialog */}
      <ProjectDetailsDialog
        project={selectedProject}
        open={Boolean(selectedProject)}
        onOpenChange={(open) => {
          if (!open) setSelectedProject(null);
        }}
      />
    </section>
  );
};

export default ProjectsSection;
