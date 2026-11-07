import React from "react";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const VARIANTS: Record<ButtonVariant, string> = {
  primary: "bg-blue-600 text-white hover:bg-blue-500 shadow-sm",
  secondary:
    "bg-surface text-foreground hover:bg-surface-hover border border-border shadow-sm",
  outline:
    "border border-border text-foreground hover:border-border-subtle hover:bg-surface-hover",
  ghost: "text-text-secondary hover:text-foreground hover:bg-surface-hover",
};

const SIZES: Record<ButtonSize, string> = {
  sm: "px-3 py-1.5 text-xs font-medium rounded-md",
  md: "px-4 py-2 text-sm font-medium rounded-lg",
  lg: "px-6 py-3 text-base font-semibold rounded-lg",
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: ButtonProps) {
  const base =
    "inline-flex cursor-pointer items-center justify-center transition-colors focus-visible:outline-none disabled:opacity-50 disabled:pointer-events-none cursor-pointer";
  return (
    <button
      className={`${base} ${VARIANTS[variant]} ${SIZES[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
