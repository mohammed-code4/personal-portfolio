import React from "react";
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { SkillCard } from "@/components/portfolio/SkillCard";
import { SKILLS } from "@/data/portfolio";

export function SkillsSection() {
  return (
    <section id="skills" className="py-20 border-t border-border bg-surface/30">
      <Container>
        <SectionHeader
          title="Skills"
          description="Technologies, frameworks, and modern tools I use to craft web applications."
        />

        <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 lg:grid-cols-4">
          {SKILLS.map(({ name, icon }) => (
            <SkillCard key={name} icon={icon} name={name} />
          ))}
        </div>
      </Container>
    </section>
  );
}
