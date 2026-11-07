"use client";

import { useEffect, useState } from "react";
import { HiBars3, HiXMark } from "react-icons/hi2";

import { NAV_LINKS, PERSONAL_INFO } from "@/data/portfolio";
import { Button } from "../shared/Button";

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    window.addEventListener("scroll", () => setIsOpen(false));

    return () => window.removeEventListener("scroll", () => setIsOpen(false));
  }, []);

  return (
    <div className="md:hidden">
      {/* Menu Trigger */}
      <button
        type="button"
        onClick={() => setIsOpen(true)}
        aria-label="Open navigation menu"
        aria-expanded={isOpen}
        aria-controls="mobile-navigation"
        className="inline-flex size-10 items-center justify-center rounded-lg border border-border bg-surface text-foreground transition-colors hover:bg-surface-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-500"
      >
        <HiBars3 className="size-5" />
      </button>

      {/* Navigation Drawer */}
      <aside
        id="mobile-navigation"
        role="dialog"
        aria-modal="true"
        aria-label="Mobile navigation"
        aria-hidden={!isOpen}
        inert={!isOpen}
        className={`fixed rounded-xl inset-y-0 right-0 z-50 flex h-dvh w-72 flex-col justify-between border-l border-border bg-surface p-6 shadow-2xl transition-transform duration-300 ease-in-out motion-reduce:transition-none sm:w-80 ${
          isOpen ? "translate-x-4" : "translate-x-200"
        }`}
      >
        <div>
          {/* Drawer Header */}
          <div className="flex items-center justify-between border-b border-border pb-5">
            <span className="text-lg font-bold tracking-tight text-foreground">
              {PERSONAL_INFO.name.split(" ")[0]}
            </span>

            <button
              type="button"
              onClick={closeMenu}
              aria-label="Close navigation menu"
              className="inline-flex size-9 items-center justify-center rounded-lg border border-border text-foreground transition-colors hover:bg-surface-hover focus-visible:outline-2 focus-visible:outline-blue-500"
            >
              <HiXMark className="size-5" />
            </button>
          </div>

          {/* Navigation Links */}
          <nav
            aria-label="Main navigation"
            className="mt-6 flex flex-col gap-1"
          >
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={closeMenu}
                className="rounded-lg px-3.5 py-3 text-sm font-medium text-text-secondary transition-colors hover:bg-surface-hover hover:text-foreground"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-3 border-t border-border pt-6">
              <a href={PERSONAL_INFO.cv} target="_blank" onClick={closeMenu}>
                <Button className="w-full"> View CV</Button>
              </a>

              <p className="text-center text-xs text-text-muted">
                {PERSONAL_INFO.role}
              </p>
            </div>
          </nav>
        </div>
      </aside>
    </div>
  );
}
