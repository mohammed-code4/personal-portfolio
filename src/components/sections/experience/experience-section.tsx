import { experiences } from "@/data/experience";
import SectionHeading from "@/components/common/section-heading";
import ExperienceCrad from "./experience-crad";

export const ExperienceSection = () => {
  return (
    <section id="experience" className="scroll-mt-20 py-12 md:py-16">
      <SectionHeading
        badgeText="Experience"
        title="My professional experience and training."
      />

      <div className="space-y-4">
        {experiences.map((experience) => {
          const details: Array<{ label: string; value: string }> = [
            { label: "Employment type", value: experience.employmentType },
            { label: "Duration", value: experience.duration },
            ...(experience.location
              ? [{ label: "Location", value: experience.location }]
              : []),
            { label: "Workplace", value: experience.workplace },
          ];

          return <ExperienceCrad experience={experience} details={details} />;
        })}
      </div>
    </section>
  );
};

export default ExperienceSection;
