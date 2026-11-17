import { Badge } from "@/components/ui/badge";

type SectionHeadingProps = {
  badgeText: string;
  title?: string;
  description?: string;
  centered?: boolean;
};

export const SectionHeading = ({
  badgeText,
  title,
  centered = false,
}: SectionHeadingProps) => {
  return (
    <div className={`mb-8 ${centered ? "text-center" : "text-left"}`}>
      <Badge
        variant="secondary"
        className="mb-3 px-3 py-3 rounded-lg! text-base font-semibold uppercase   text-primary"
      >
        {badgeText}
      </Badge>
      {title && (
        <h2 className="text-lg text-muted-foreground font-semibold  sm:text-xl">
          {title}
        </h2>
      )}
    </div>
  );
};

export default SectionHeading;
