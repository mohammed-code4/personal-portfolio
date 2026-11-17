import NavLogo from "./nav-logo";
import NavLinks from "./nav-links";
import MobileNav from "./mobile-nav";

export const Navbar = () => {
  return (
    <nav className="main-container py-3">
      <div className="flex items-center justify-between gap-4 rounded-2xl border border-border/70 bg-background/80 px-4 py-2.5 shadow-xs backdrop-blur-md">
        <NavLogo />
        <NavLinks />
        <MobileNav />
      </div>
    </nav>
  );
};

export default Navbar;
