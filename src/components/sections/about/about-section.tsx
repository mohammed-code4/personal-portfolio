import SectionHeading from "@/components/common/section-heading";
import AboutStory from "./about-story";
import { profileStats } from "@/data/profile";
import { Card, CardContent } from "@/components/ui/card";

export const AboutSection = () => {
  return (
    <section id="about" className="scroll-mt-20 space-y-12 py-12 md:py-16">
      {/* About story */}
      <AboutStory />

      {/* Profile stats */}
      <div className="rounded-3xl border border-border bg-secondary/60 p-6 md:p-8">
        <SectionHeading badgeText="Quick Profile" />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {profileStats.map((stat) => (
            <Card
              key={stat.value}
              className="border-border/70 py-4! bg-background/90 shadow-2xs transition hover:border-primary/40 hover:shadow-xs"
            >
              <CardContent className="px-3 py-0!">
                <p className="text-xs uppercase text-muted-foreground">
                  {stat.label}
                </p>
                <p className="text-sm font-semibold text-foreground">
                  {stat.value}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
