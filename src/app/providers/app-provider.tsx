import type { ReactNode } from "react";
import { TooltipProvider } from "@/components/ui/tooltip";

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => {
  return <TooltipProvider delay={200}>{children}</TooltipProvider>;
};

export default AppProvider;
