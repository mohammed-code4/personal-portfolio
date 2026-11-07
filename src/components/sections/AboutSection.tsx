import React from "react";
import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { SectionHeader } from "@/components/shared/SectionHeader";
import { PERSONAL_INFO } from "@/data/portfolio";

export function AboutSection() {
  return (
    <section id="about" className="py-20 border-t border-border">
      <Container>
        <SectionHeader eyebrow="Background" title="About Me" description="Turning designs into performant, clean, and reusable web applications." />
        <div className="grid grid-cols-1 gap-10 md:grid-cols-3 items-center">
          <div className="flex flex-col items-center text-center p-6 rounded-2xl border border-border bg-surface shadow-sm">
            <Image src={PERSONAL_INFO.avatar} alt={PERSONAL_INFO.name} width={160} height={160} className="h-32 w-32 rounded-full border-2 border-brand object-cover shadow-md" />
            <h3 className="mt-4 font-bold text-foreground">{PERSONAL_INFO.name}</h3>
            <p className="text-xs text-text-secondary mt-1">{PERSONAL_INFO.role}</p>
            <span className="mt-3 inline-block rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-600 dark:text-emerald-400">
              {PERSONAL_INFO.status}
            </span>
          </div>
          <div className="md:col-span-2 space-y-4 text-base leading-relaxed text-text-secondary">
            <p>{PERSONAL_INFO.about}</p>
            <p>
              I specialize in React, Next.js, and TypeScript, crafting accessible components with Tailwind CSS and managing complex state with Redux Toolkit and TanStack Query.
            </p>
            <div className="pt-2 flex flex-wrap gap-3 text-xs font-semibold text-foreground">
              <span className="px-3 py-1.5 rounded-lg border border-border bg-surface">Frontend Architecture</span>
              <span className="px-3 py-1.5 rounded-lg border border-border bg-surface">API & State Management</span>
              <span className="px-3 py-1.5 rounded-lg border border-border bg-surface">Component Systems</span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
