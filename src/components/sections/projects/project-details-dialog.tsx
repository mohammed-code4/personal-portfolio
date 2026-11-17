import { FiExternalLink } from "react-icons/fi";
import { FaGithub } from "react-icons/fa6";
import type { Project } from "@/data/projects";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import TechBadge from "../../common/tech-badge";

type ProjectDetailsDialogProps = {
  project: Project | null;
  open: boolean;
  onOpenChange: (open: boolean) => void;
};

export const ProjectDetailsDialog = ({
  project,
  open,
  onOpenChange,
}: ProjectDetailsDialogProps) => {
  if (!project) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl  p-0 overflow-y-scroll sm:rounded-2xl border-border">
        <div className="relative  aspect-auto w-full   bg-muted">
          <img
            src={project.image}
            alt={project.title}
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-linear-to-t from-background via-background/40 to-transparent" />

          <div className="absolute bottom-4 left-6 right-6 flex items-center justify-between">
            <Badge
              variant="outline"
              className="border-media-overlay-foreground/30 bg-media-overlay/95 text-[0.65rem] font-medium uppercase text-media-overlay-foreground backdrop-blur-sm"
            >
              {project.type}
            </Badge>

            <Badge
              variant="secondary"
              className="text-xs font-semibold text-primary"
            >
              {project.tech}
            </Badge>
          </div>
        </div>

        <div className="p-6 sm:p-8 space-y-6">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold   text-foreground sm:text-3xl">
              {project.title}
            </DialogTitle>
            <DialogDescription className="text-sm text-muted-foreground mt-1">
              {project.shortDescription}
            </DialogDescription>
          </DialogHeader>

          <div className="flex flex-wrap gap-1.5">
            {project.technologies.map((tech) => (
              <TechBadge key={`${project.id}-${tech}`} tech={tech} />
            ))}
          </div>

          <div className="grid gap-6 md:grid-cols-2">
            <div>
              <h4 className="text-xs font-semibold uppercase  text-primary">
                Project overview
              </h4>
              <p className="mt-2 text-sm leading-6 text-muted-foreground">
                {project.overview}
              </p>
            </div>

            <div>
              <h4 className="text-xs font-semibold uppercase  text-primary">
                Key contributions
              </h4>
              <ul className="mt-2 space-y-2 text-sm leading-6 text-muted-foreground">
                {project.contributions.map((item) => (
                  <li key={item} className="flex items-start gap-2">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3 pt-2 border-t border-border/60">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noreferrer noopener"
            >
              <Button size="sm" className="gap-2">
                <FaGithub className="h-4 w-4" />
                GitHub Repository
              </Button>
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noreferrer noopener"
              >
                <Button variant="outline" size="sm" className="gap-2">
                  <FiExternalLink className="h-4 w-4" />
                  Live Demo
                </Button>
              </a>
            )}
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDetailsDialog;
