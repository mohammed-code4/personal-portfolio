import type { ReactNode } from "react";
import { Button } from "@/components/ui/button";

type SocialButtonProps = {
  href: string;
  label: string;
  icon?: ReactNode;
  variant?: "default" | "outline" | "secondary" | "ghost" | "link";
  size?: "default" | "sm" | "lg" | "icon";
};

export const SocialButton = ({
  href,
  label,
  icon,
  variant = "outline",
  size = "default",
}: SocialButtonProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noreferrer noopener"
      aria-label={label}
      className="inline-flex"
    >
      <Button variant={variant} size={size} className="gap-2">
        {icon}
        <span>{label}</span>
      </Button>
    </a>
  );
};

export default SocialButton;
