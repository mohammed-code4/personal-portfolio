export type Experience = {
  id: string;
  title: string;
  company: string;
  employmentType: string;
  duration: string;
  location?: string;
  workplace: string;
  description?: string;
  responsibilities?: string[];
  technologies: string[];
};

export const experiences: Experience[] = [
  {
    id: "huma-volve",
    title: "Frontend Developer",
    company: "Huma Volve",
    employmentType: "Professional Training",
    duration: "September 2026 - November 2026",
    workplace: "Remote",
    description:
      "Collaborated on 4 different web applications across E-Commerce, Travel & Booking, Healthcare, and Dashboard & Analytics domains.",
    responsibilities: [
      "Developed responsive and reusable UI components using React.js, Next.js, and TypeScript.",
      "Integrated REST APIs using Axios, TanStack Query, and Next.js data-fetching capabilities.",
      "Implemented authentication flows, form validation, protected routes, and token management.",
      "Built dynamic product listing, filtering, pagination, booking, and comparison features.",
      "Developed interactive dashboards and data visualizations using Recharts.",
      "Collaborated with team members using Git and GitHub, including feature branches, pull requests, code integration, and merge conflict resolution.",
    ],
    technologies: [
      "Next.js",
      "React.js",
      "React Hook Form",
      "shadcn/ui",
      "TanStack Query",
    ],
  },
  {
    id: "route-academy",
    title: "Front-end Developer",
    company: "Route Academy",
    employmentType: "Training",
    duration: "October 2025 - March 2026",
    location: "Cairo, Egypt",
    workplace: "Hybrid",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "TypeScript",
      "Bootstrap",
      "Tailwind CSS",
      "shadcn/ui",
      "React.js",
      "Next.js",
    ],
  },
];
