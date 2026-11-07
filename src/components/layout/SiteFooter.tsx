import { Container } from "@/components/shared/Container";
import { NAV_LINKS, PERSONAL_INFO } from "@/data/portfolio";

export function SiteFooter() {
  return (
    <footer className="border-t border-border bg-surface/50 py-16 text-text-secondary">
      <Container className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="text-base font-semibold text-foreground">
            {PERSONAL_INFO.name}
          </p>
          <p className="mt-1 text-sm text-text-secondary">{PERSONAL_INFO.role}</p>
        </div>
        <div className="flex flex-wrap gap-6 text-sm">
          {NAV_LINKS.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="hover:text-foreground transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
      </Container>
      <Container className="mt-8 pt-8 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between text-xs text-text-muted">
        <p>&copy; 2026 {PERSONAL_INFO.name}. All rights reserved.</p>
        <p className="mt-2 sm:mt-0">Built with Next.js & Tailwind CSS.</p>
      </Container>
    </footer>
  );
}
