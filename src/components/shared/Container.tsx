import React from "react";

export type ContainerProps = React.HTMLAttributes<HTMLDivElement>;

export function Container({
  className = "",
  children,
  ...props
}: ContainerProps) {
  return (
    <div
      className={`mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-12 ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}
