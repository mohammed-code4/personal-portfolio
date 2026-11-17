import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";
import type { Project } from "@/data/projects";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import TechBadge from "../../common/tech-badge";

type ProjectCardProps = {
  project: Project;
  onSelect: (project: Project) => void;
};

export const ProjectCard = ({ project, onSelect }: ProjectCardProps) => {
  return (
    <Card className="group  flex flex-col justify-between overflow-hidden border-border/80 bg-card shadow-xs transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
      <CardContent className="p-0">
        <div className="relative aspect-video w-full overflow-hidden bg-muted">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent" />

          <Badge
            variant="outline"
            className="absolute left-3 top-3 border-media-overlay-foreground/30 bg-media-overlay/95 text-[0.65rem] font-medium uppercase text-media-overlay-foreground backdrop-blur-md"
          >
            {project.type}
          </Badge>

          <Badge
            variant="secondary"
            className="absolute bottom-3 right-3 text-[0.7rem] font-semibold text-primary backdrop-blur-md"
          >
            {project.tech}
          </Badge>
        </div>

        <div className="p-2">
          <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
            {project.title}
          </h3>

          <p className="mt-2 text-sm leading-6 text-muted-foreground line-clamp-2">
            {project.shortDescription}
          </p>

          <div className="mt-4 flex flex-wrap gap-1.5">
            {/* tech badges  */}
            {project.technologies.slice(0, 4).map((tech) => (
              <TechBadge key={`${project.id}-${tech}`} tech={tech} />
            ))}

            {project.technologies.length > 4 && (
              <Badge
                variant="ghost"
                className="text-[0.7rem] text-muted-foreground"
              >
                +{project.technologies.length - 4} more
              </Badge>
            )}
          </div>
        </div>
      </CardContent>

      <CardFooter className="flex items-center justify-between gap-2 border-t border-border/60 p-4">
        <div className="flex items-center gap-1">
          <a
            href={project.githubUrl}
            target="_blank"
            rel="noreferrer noopener"
            aria-label={`View ${project.title} source code on GitHub`}
          >
            <Button variant="ghost" size="sm" className="gap-1.5 text-xs">
              <FaGithub className="h-3.5 w-3.5" />
              Code
            </Button>
          </a>

          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`View ${project.title} live demo`}
            >
              <Button variant="ghost" className="gap-1.5 text-xs text-primary">
                <FiExternalLink className="h-3.5 w-3.5" />
                Live
              </Button>
            </a>
          )}
        </div>

        <Button
          size="sm"
          variant="default"
          onClick={() => onSelect(project)}
          className="text-xs"
        >
          View Details
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
