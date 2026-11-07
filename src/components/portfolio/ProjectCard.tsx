import { Card } from "@/components/shared/Card";
import type { Project } from "@/data/portfolio";
import Image from "next/image";
import { Button } from "../shared/Button";

export function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="flex flex-col justify-between h-full group transition-all duration-300 hover:border-blue-500/40 hover:shadow-md">
      <div>
        <div className="relative mb-4 h-48 w-full overflow-hidden rounded-lg border border-border/70 bg-surface-hover">
          <Image
            src={project.image || "/project-default.svg"}
            alt={project.title}
            width={800}
            height={480}
            className="h-full w-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
          />
        </div>
        <h3 className="text-xl font-semibold text-foreground group-hover:text-blue-500 transition-colors">
          {project.title}
        </h3>
        <p className="mt-3 text-sm leading-relaxed text-text-secondary">
          {project.description}
        </p>
        <div className="mt-4 flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="rounded bg-blue-500/10 px-2 py-0.5 text-xs text-blue-600 dark:text-blue-400 border border-blue-500/20"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
      <div className="mt-6 flex items-center gap-4 text-sm font-medium pt-4 border-t border-border">
        {project.link && (
          <Button variant="outline">
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-600 dark:text-blue-400 hover:underline"
            >
              Live Demo
            </a>
          </Button>
        )}
        {project.github && (
          <Button variant="secondary">
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="text-text-secondary hover:text-foreground"
            >
              Source Code
            </a>
          </Button>
        )}
      </div>
    </Card>
  );
}
