import React from "react";

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: "default" | "subtle";
  children: React.ReactNode;
}

const VARIANTS: Record<"default" | "subtle", string> = {
  default: "bg-surface border border-border   ",
  subtle: "bg-surface/50 border-2 border-border/70 hover:border-border",
};

export function Card({
  variant = "default",
  className = "",
  children,
  ...props
}: CardProps) {
  return (
    <div
      className={`rounded-xl p-6 transition-all  cursor-pointer duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-inner ${VARIANTS[variant]} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
