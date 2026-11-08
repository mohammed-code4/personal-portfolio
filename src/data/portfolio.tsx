import { ReactNode } from "react";
import {
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiReactrouter,
  SiTanstack,
  SiRedux,
  SiTailwindcss,
  SiBootstrap,
  SiVite,
  SiGithub,
  SiAxios,
  SiZod,
  SiShadcnui,
  SiReacthookform,
} from "react-icons/si";
import safarniImage from "@/assets/images/safarni.png";
import cureImage from "@/assets/images/cure.png";
import groceryImage from "@/assets/images/grocery.png";
import vestaImage from "@/assets/images/vesta.png";
import { StaticImageData } from "next/image";

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  link?: string;
  github?: string;
  image?: StaticImageData | string;
}

export interface Skill {
  name: string;
  icon: ReactNode;
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  image: string;
  credentialUrl?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: "Home", href: "home" },
  { label: "Skills", href: "skills" },
  { label: "Projects", href: "projects" },
  { label: "Contact", href: "contact" },
];

export const PERSONAL_INFO = {
  name: "Mohammed Hussein",
  role: "Front-End Developer | Next.js & React.js",
  tagline:
    " I'm a Front-End Developer focused on building modern, responsive, and user-friendly web applications using React.js, Next.js, TypeScript, and modern frontend technologies",
  about:
    "I'm a Front-End Developer focused on building modern, responsive, and user-friendly web applications using React.js, Next.js, TypeScript, and modern frontend technologies. I enjoy turning ideas and designs into clean, reusable, and scalable interfaces following clean architecture and best performance practices.",
  status: "Available for new Opportunities",
  email: "mohammed.hussein.dev4@gmail.com",
  location: "Cairo, Egypt",
  avatar: "/mohammed.png",
  github: "https://github.com/mohammed-code4",
  linkedin: "https://www.linkedin.com/in/mohammed-hussein-9503a7410/",
  whatsapp: "01141547840",
  cv: "https://drive.google.com/file/d/1McML63f3jNOe00xDcClwv38ViZZ6WfuG/view?usp=drive_link",
};

export const SKILLS: Skill[] = [
  {
    name: "JavaScript (ES6+)",
    icon: <SiJavascript className="size-8 text-[#F7DF1E]" />,
  },
  {
    name: "TypeScript",
    icon: <SiTypescript className="size-8 text-[#3178C6]" />,
  },

  {
    name: "React.js",
    icon: <SiReact className="size-8 text-[#61DAFB]" />,
  },
  {
    name: "Next.js",
    icon: <SiNextdotjs className="size-8 text-black dark:text-white" />,
  },
  {
    name: "Tailwind CSS",
    icon: <SiTailwindcss className="size-8 text-[#06B6D4]" />,
  },
  {
    name: "shadcn/ui",
    icon: <SiShadcnui className="size-8 text-black dark:text-white" />,
  },
  {
    name: "Bootstrap 5",
    icon: <SiBootstrap className="size-8 text-[#7952B3]" />,
  },
  {
    name: "React Router",
    icon: <SiReactrouter className="size-8 text-[#CA4245]" />,
  },
  {
    name: "TanStack Query",
    icon: <SiTanstack className="size-8 text-[#FF4154]" />,
  },
  {
    name: "Redux Toolkit",
    icon: <SiRedux className="size-8 text-[#764ABC]" />,
  },

  {
    name: "React Hook Form",
    icon: <SiReacthookform className="size-8 text-[#EC5990]" />,
  },
  {
    name: "Zod",
    icon: <SiZod className="size-8 text-[#3E67B1]" />,
  },
  {
    name: "Axios / REST APIs",
    icon: <SiAxios className="size-8 text-[#5A29E4]" />,
  },
  {
    name: "Vite",
    icon: <SiVite className="size-8 text-[#646CFF]" />,
  },
  {
    name: "Git & GitHub",
    icon: <SiGithub className="size-8 text-black dark:text-white" />,
  },
];

export const CERTIFICATIONS: Certification[] = [
  {
    id: "route-frontend",
    title: "Front-End Development internShip",
    issuer: "Route Academy",
    date: "May 2026",
    image: "/certificate.png",
    credentialUrl:
      "https://drive.google.com/file/d/1Rxfy_kobqXJMRhZnPKq5ZfGmkddXQYLv/view?usp=sharing",
  },
];

export const PROJECTS: Project[] = [
  {
    id: "safarni",
    title: "Safarni – Travel & Booking Platform",
    description:
      "Collaborative travel booking platform built with Next.js and TypeScript. Worked on authentication flows, OTP verification, hotel room details, image galleries, reusable profile components, and async loading experiences using React Suspense.",
    tags: [
      "Next.js",
      "TypeScript",
      "NextAuth.js",
      "Axios",
      "React Suspense",
      "Swiper",
      "Team Project",
    ],
    image: safarniImage,
    link: "https://safarni-team-2-r13.vercel.app/",
    github: "https://github.com/Abdulrahmanfawzy/safarni-team-2-R13",
  },
  {
    id: "cure",
    title: "Cure – Healthcare Web Application",
    description:
      "Collaborative healthcare web application. Contributed to authentication features, Google Login, OTP verification, password management, profile functionality, token-based session management, form validation, and API integration.",
    tags: [
      "React",
      "TypeScript",
      "TanStack Query",
      "Redux Toolkit",
      "React Hook Form",
      "Zod",
      "Tailwind CSS",
      "shadcn/ui",
      "Team Project",
    ],
    image: cureImage,
    link: "https://cure-team-1.vercel.app/",
    github: "https://github.com/Abdulrahmanfawzy/cure-team-1",
  },
  {
    id: "vesta",
    title: "Vesta – Returns Management Dashboard",
    description:
      "Collaborative returns management dashboard built with Next.js and TypeScript. Worked on reusable dashboard layouts, sidebar navigation, overview statistics, data visualization, and returns analytics.",
    tags: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Recharts",
      "Dashboard UI",
      "Team Project",
    ],
    image: vestaImage,
    github: "https://github.com/Abdulrahmanfawzy/vesta-nextjs",
  },
  {
    id: "grocery",
    title: "Grocery – E-Commerce Platform",
    description:
      "Collaborative grocery e-commerce application. Worked on product listing and details, filtering, pagination, and backend API integration using TanStack Query and Axios.",
    tags: [
      "React",
      "TypeScript",
      "Redux Toolkit",
      "TanStack Query",
      "React Router",
      "Axios",
      "Tailwind CSS",
      "shadcn/ui",
      "Team Project",
    ],
    image: groceryImage,
    link: "https://grocery-team-1.vercel.app/",
    github: "https://github.com/Abdulrahmanfawzy/Grocery-team-1",
  },
];
