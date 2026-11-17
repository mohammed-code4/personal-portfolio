import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

type TechBadgeProps = {
  tech: string;
  className?: string;
};

export const TechBadge = ({ tech, className }: TechBadgeProps) => {
  return (
    <Badge
      variant="secondary"
      className={cn(
        "border-border/60 bg-secondary/80 px-2.5 py-0.5 text-xs font-medium text-foreground",
        className,
      )}
    >
      {tech}
    </Badge>
  );
};

export default TechBadge;
