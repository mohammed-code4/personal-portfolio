import React from "react";
import Image from "next/image";
import { Container } from "@/components/shared/Container";
import { PERSONAL_INFO } from "@/data/portfolio";
import { Button } from "../shared/Button";

export function HeroSection() {
  return (
    <section className="relative flex min-h-128 items-center py-16 sm:py-24">
      <Container className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col items-start">
          <span className="text-sm font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400">
            {PERSONAL_INFO.role}
          </span>

          <h1 className="mt-3 text-4xl font-extrabold tracking-tight text-foreground sm:text-5xl">
            Hi, I’m {PERSONAL_INFO.name}
          </h1>

          <p className="mt-4 text-base leading-relaxed text-text-secondary">
            {PERSONAL_INFO.tagline}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            {/* <a href="#projects">
              <Button size="lg">Projects</Button>
            </a> */}
            <a
              href={PERSONAL_INFO.cv}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="primary">
                View CV
              </Button>
            </a>
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
            >
              <Button size="lg" variant="secondary">
                GitHub Profile
              </Button>
            </a>
          </div>
        </div>
        <div className="flex justify-center lg:justify-end">
          <div className="relative group">
            <div className="absolute -inset-1 rounded-3xl bg-linear-to-r from-blue-600 to-emerald-500 opacity-25 blur transition duration-500 group-hover:opacity-40" />
            <div className="relative overflow-hidden rounded-2xl border border-border bg-surface p-2 shadow-xl">
              <Image
                src={PERSONAL_INFO.avatar}
                alt={PERSONAL_INFO.name}
                width={340}
                height={340}
                priority
                className="h-72 w-72 sm:h-80 sm:w-80 rounded-xl object-cover"
              />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
