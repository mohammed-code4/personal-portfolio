import { Container } from "@/components/shared/Container";
import { ThemeToggle } from "@/components/shared/ThemeToggle";
import { MobileNav } from "@/components/layout/MobileNav";
import { NAV_LINKS, PERSONAL_INFO } from "@/data/portfolio";

export function SiteHeader() {
  return (
    <Container className="sticky top-2 z-50 px-2! sm:px-4! lg:px-8!">
      <div className="flex px-2 h-16 items-center justify-between  w-full border border-border bg-surface/60 backdrop-blur-md rounded-2xl">
        <a href="#" className="flex items-center gap-2 group">
          <span className="text-xl font-bold tracking-tight text-foreground group-hover:text-blue-500 transition-colors">
            {PERSONAL_INFO.name.split(" ")[0]}
          </span>
        </a>
        <nav className="flex items-center gap-2 sm:gap-4 md:gap-6">
          <div className="hidden md:flex items-center  text-sm font-medium text-text-secondary">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="rounded-lg px-3.5 py-3 text-sm font-medium text-text-secondary transition-colors hover:bg-surface-hover hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
          </div>
          <ThemeToggle />
          <MobileNav />
        </nav>
      </div>
    </Container>
  );
}
