import { Button } from "@/components/ui/button";

type ProjectFilterBarProps = {
  options: string[];
  activeFilter: string;
  onSelectFilter: (filter: string) => void;
};

export const ProjectFilterBar = ({
  options,
  activeFilter,
  onSelectFilter,
}: ProjectFilterBarProps) => {
  return (
    <div className="mb-8 flex flex-wrap gap-2">
      {options.map((option) => (
        <Button
          key={option}
          variant={activeFilter === option ? "default" : "outline"}
          size="sm"
          onClick={() => onSelectFilter(option)}
          className="rounded-full text-xs"
        >
          {option}
        </Button>
      ))}
    </div>
  );
};

export default ProjectFilterBar;
