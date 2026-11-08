"use client";
import { useTheme } from "next-themes";
import { FaMoon, FaSun } from "react-icons/fa";

export function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={() =>
        resolvedTheme === "dark" ? setTheme("light") : setTheme("dark")
      }
      aria-label="Toggle theme"
      className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-foreground hover:bg-surface-hover transition-colors cursor-pointer"
    >
      <FaSun className="dark:block hidden" />
      <FaMoon className="dark:hidden block" />
    </button>
  );
}
