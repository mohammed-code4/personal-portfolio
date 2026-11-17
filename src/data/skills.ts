import { FaCss3Alt } from "react-icons/fa6";
import {
  SiAxios,
  SiGit,
  SiGithub,
  SiHtml5,
  SiJavascript,
  SiNextdotjs,
  SiReact,
  SiReacthookform,
  SiReactquery,
  SiReactrouter,
  SiRedux,
  SiTailwindcss,
  SiTypescript,
  SiZod,
} from "react-icons/si";
import type { IconType } from "react-icons";

export type Skill = {
  name: string;
  icon: IconType;
};

export const skills: Skill[] = [
  { name: "HTML5", icon: SiHtml5 },
  { name: "CSS3", icon: FaCss3Alt },
  { name: "JavaScript", icon: SiJavascript },
  { name: "TypeScript", icon: SiTypescript },
  { name: "React.js", icon: SiReact },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Git", icon: SiGit },
  { name: "GitHub", icon: SiGithub },
  { name: "Redux Toolkit", icon: SiRedux },
  { name: "TanStack Query", icon: SiReactquery },
  { name: "React Router", icon: SiReactrouter },
  { name: "Axios", icon: SiAxios },
  { name: "React Hook Form", icon: SiReacthookform },
  { name: "Zod", icon: SiZod },
];
