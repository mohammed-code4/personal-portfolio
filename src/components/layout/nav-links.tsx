import { navItems } from "@/data/navigation";
import { Button } from "../ui/button";
import ToggleTheme from "../common/toggle-theme";

export const NavLinks = () => {
  return (
    <div className="hidden items-center space-x-3   text-sm font-medium text-muted-foreground md:flex">
      {navItems.map((item) => (
        <a key={item.href} href={item.href}>
          <Button variant="ghost" className="transition hover:text-primary">
            {item.label}
          </Button>
        </a>
      ))}
      <ToggleTheme />
    </div>
  );
};

export default NavLinks;
