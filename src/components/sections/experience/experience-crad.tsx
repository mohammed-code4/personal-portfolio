import TechBadge from "@/components/common/tech-badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import type { Experience } from "@/data/experience";
type ExperienceCradProps = {
  experience: Experience;
  details: { label: string; value: string }[];
};
const ExperienceCrad = ({ experience, details }: ExperienceCradProps) => {
  return (
    <Card
      key={experience.id}
      className={"border border-primary/30  shadow-2xs"}
    >
      <CardHeader>
        <CardTitle className="text-lg font-semibold sm:text-xl">
          <h3>{experience.title}</h3>
        </CardTitle>
        <CardDescription className="text-sm font-medium text-foreground">
          {experience.company}
        </CardDescription>
      </CardHeader>

      <CardContent className="gap-4">
        <dl className="grid gap-3 border-y border-border/70 py-4 sm:grid-cols-2 lg:grid-cols-4">
          {details &&
            details?.map(({ label, value }) => (
              <div key={label}>
                <dt className="text-xs font-medium text-muted-foreground">
                  {label}
                </dt>
                <dd className="mt-1 text-sm font-medium text-foreground">
                  {value}
                </dd>
              </div>
            ))}
        </dl>

        {experience.description && (
          <p className="text-sm leading-6 text-muted-foreground">
            {experience.description}
          </p>
        )}

        {experience.responsibilities && (
          <ul className="list-disc space-y-2 pl-5 text-sm leading-6 text-muted-foreground marker:text-primary">
            {experience.responsibilities.map((responsibility) => (
              <li key={responsibility}>{responsibility}</li>
            ))}
          </ul>
        )}

        <div className="space-y-2">
          <h4 className="text-xs font-medium text-muted-foreground">
            Technologies
          </h4>
          <ul className="flex flex-wrap gap-2" aria-label="Technologies">
            {experience.technologies.map((technology) => (
              <li key={technology}>
                <TechBadge tech={technology} />
              </li>
            ))}
          </ul>
        </div>
      </CardContent>
    </Card>
  );
};

export default ExperienceCrad;
