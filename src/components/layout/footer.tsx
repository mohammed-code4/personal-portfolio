import { FiArrowUp } from "react-icons/fi";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const Footer = () => {
  return (
    <footer className="main-container pb-12">
      <Separator className="mb-8" />
      <div className="flex flex-col items-center justify-between gap-4 text-center sm:flex-row sm:text-left">
        <p className="text-xs text-muted-foreground">
          © {new Date().getFullYear()} Mohammed Hussein. Built with React, TypeScript & shadcn/ui.
        </p>

        <a href="#top" aria-label="Back to top">
          <Button variant="ghost" size="sm" className="gap-1.5 text-xs text-muted-foreground hover:text-foreground">
            Back to top
            <FiArrowUp className="h-3.5 w-3.5" />
          </Button>
        </a>
      </div>
    </footer>
  );
};

export default Footer;
