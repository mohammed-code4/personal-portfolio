export const NavLogo = () => {
  return (
    <a
      href="#top"
      className="group flex items-center gap-2 text-lg font-bold   text-foreground transition"
    >
      <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-primary text-xs font-extrabold text-primary-foreground shadow-xs transition group-hover:scale-105">
        MH
      </span>
      <span className="text-primary transition group-hover:text-primary/90">
        Mohammed
      </span>
    </a>
  );
};

export default NavLogo;
