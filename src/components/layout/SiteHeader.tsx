"use client";
import { Container } from "@/components/shared/Container";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { MobileNav } from "@/components/layout/MobileNav";
import { NAV_LINKS, PERSONAL_INFO } from "@/data/portfolio";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { Button } from "../shared/Button";

export function SiteHeader() {
  const pathname = usePathname();

  const navigateToSection = (section: string) => {
    const targetPath = section === "home" ? "/" : `/${section}`;

    if (pathname !== targetPath) {
      window.history.pushState({}, "", targetPath);
    }

    document.getElementById(section)?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  useEffect(() => {
    const sectionId = pathname === "/" ? "home" : pathname.slice(1);

    const sectionElement = document.getElementById(sectionId);

    sectionElement?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, [pathname]);
  return (
    <Container className="sticky top-2 z-50 px-2! sm:px-4! lg:px-8!">
      <div className="flex px-2 h-16 items-center justify-between  w-full border border-border bg-surface/60 backdrop-blur-md rounded-2xl">
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-xl font-bold tracking-tight text-foreground group-hover:text-blue-500 transition-colors">
            {PERSONAL_INFO.name.split(" ")[0]}
          </span>
        </a>
        <nav className="flex items-center gap-2 sm:gap-4 md:gap-6">
          <div className="hidden md:flex items-center gap-1.5  text-sm font-medium text-text-secondary">
            {NAV_LINKS.map((link) => {
              const targetPath = link.href === "home" ? "/" : `/${link.href}`;

              return (
                <Button
                  key={link.label}
                  onClick={() => navigateToSection(link.href)}
                  variant={pathname === targetPath ? "primary" : "ghost"}
                >
                  {link.label}
                </Button>
              );
            })}
          </div>
          <ThemeToggle />
          <MobileNav />
        </nav>
      </div>
    </Container>
  );
}
