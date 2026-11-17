import { useEffect, useState } from "react";
import { FaMoon, FaSun } from "react-icons/fa6";
import { Button } from "../ui/button";

type Theme = "light" | "dark";

export const ToggleTheme = () => {
  const [theme, setTheme] = useState<Theme>(() => {
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark" || savedTheme === "light") {
      return savedTheme;
    }
    return window.matchMedia("(prefers-color-scheme: dark)").matches
      ? "dark"
      : "light";
  });

  useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const handleToggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "dark" ? "light" : "dark"));
  };

  const isDark = theme === "dark";

  return (
    <Button
      variant="outline"
      size="icon"
      onClick={handleToggleTheme}
      aria-label="Toggle theme"
      className="transition-colors hover:bg-primary/15 hover:text-primary"
    >
      {isDark ? <FaSun className="h-4 w-4" /> : <FaMoon className="h-4 w-4" />}
    </Button>
  );
};

export default ToggleTheme;
