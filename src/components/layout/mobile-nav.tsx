import { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { navItems } from "@/data/navigation";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Separator } from "@/components/ui/separator";
import ToggleTheme from "../common/toggle-theme";

export const MobileNav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <div className="space-x-3">
          <ToggleTheme />
          <SheetTrigger render={<Button variant="ghost" size="icon" />}>
            <Button variant="outline">
              <FiMenu className="h-5 w-5" />
              <span className="sr-only">Toggle navigation menu</span>
            </Button>
          </SheetTrigger>
        </div>

        <SheetContent side="right" className="w-72 p-6">
          <SheetHeader className="text-left">
            <SheetTitle className="text-lg font-bold text-primary">
              Mohammed Hussein
            </SheetTitle>
            <SheetDescription className="text-xs">
              Front-End Developer Portfolio
            </SheetDescription>
          </SheetHeader>

          <Separator className="my-4" />

          <nav className="flex flex-col gap-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2 text-base font-medium text-foreground transition hover:bg-muted hover:text-primary"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
