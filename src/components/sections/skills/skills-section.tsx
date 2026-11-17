import { skills } from "@/data/skills";
import SectionHeading from "@/components/common/section-heading";
import { Card, CardContent } from "@/components/ui/card";

export const SkillsSection = () => {
  return (
    <section id="skills" className="scroll-mt-20 py-12 md:py-16">
      <SectionHeading
        badgeText="Skills"
        title="Technologies I use to build modern user experiences."
      />

      {/* skills card grid */}
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {skills.map(({ icon: Icon, name }) => (
          <Card
            key={name}
            className="group border-border/70 bg-card shadow-2xs transition-all duration-200 hover:-translate-y-1 hover:border-primary/40 hover:shadow-md"
          >
            <CardContent className="flex flex-col items-center px-3">
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                <Icon size={20} />
              </div>

              <h3 className="text-base font-semibold text-foreground group-hover:text-primary transition-colors">
                {name}
              </h3>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
