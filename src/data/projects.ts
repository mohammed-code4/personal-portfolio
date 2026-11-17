import safarniImage from "@/assets/images/safarni.webp";
import cureImage from "@/assets/images/cure.webp";
import groceryImage from "@/assets/images/grocery.webp";
import vestaImage from "@/assets/images/vista.webp";

import authSystemImage from "@/assets/images/auth-system.webp";
import clarityImage from "@/assets/images/clarity.webp";
import contactHubImage from "@/assets/images/contact-hub.webp";
import gameArenaImage from "@/assets/images/game-arena.webp";
import postsAppImage from "@/assets/images/posts-app.webp";

export type Project = {
  id: string;
  title: string;
  type: "Team Project" | "Personal Project";
  shortDescription: string;
  overview: string;
  technologies: string[];
  contributions: string[];
  githubUrl: string;
  liveUrl?: string;
  image: string;
  tech: string;
};

export const projects: Project[] = [
  // Team Projects
  {
    id: "safarni",
    title: "Safarni",
    type: "Team Project",
    tech: "Next JS",
    shortDescription:
      "Travel and booking platform with destination exploration, hotel reservations, and checkout flows.",
    overview:
      "A travel booking platform that allows users to explore destinations, compare travel options, manage bookings, and complete reservation processes.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React.js",
      "NextAuth.js",
      "TanStack Query",
      "Zod",
      "React Hook Form",
      "Axios",
      "Swiper",
    ],
    contributions: [
      "Implemented authentication flows including login, registration, and OTP verification using NextAuth.js.",
      "Integrated authentication APIs and implemented protected routes and token handling.",
      "Developed hotel booking interfaces including room selection, booking forms, and room details.",
      "Implemented hotel reviews and booking-related components.",
      "Built reusable profile components for user information and bookings across hotels, tours, flights, and cars.",
      "Contributed to the compare feature and checkout-related UI.",
    ],
    image: safarniImage,
    githubUrl: "https://github.com/Abdulrahmanfawzy/safarni-team-2-R13",
    liveUrl: "https://safarni-team-2-r13.vercel.app/",
  },
  {
    id: "vesta",
    title: "Vesta",
    type: "Team Project",
    tech: "Next JS",
    shortDescription:
      "Returns management dashboard focused on analytics, reporting, and operational visibility.",
    overview:
      "A dashboard application designed to help teams monitor product returns, analyze performance, and manage return-related operations.",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "React Query",
      "Recharts",
      "Zod",
      "React Hook Form",
      "Axios",
      "shadcn/ui",
    ],
    contributions: [
      "Developed dashboard overview components and integrated return-related APIs.",
      "Implemented analytics charts and data visualization components using Recharts.",
      "Built returns analysis sections including returns over time and returns by product.",
      "Implemented loading skeletons for asynchronous dashboard data.",
      "Worked on shared types and API-related frontend improvements.",
      "Contributed to reusable dashboard components and responsive layouts.",
    ],
    image: vestaImage,
    githubUrl: "https://github.com/Abdulrahmanfawzy/vesta-nextjs",
    liveUrl: "https://vesta-nextjs.vercel.app",
  },
  {
    id: "cure",
    title: "Cure",
    type: "Team Project",
    tech: "React JS",
    shortDescription:
      "Healthcare platform supporting patient authentication, profiles, and healthcare services.",
    overview:
      "A healthcare application designed to support patient journeys through authentication, profile management, and healthcare-related interactions.",
    technologies: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "React Router",
      "React Query",
      "Axios",
      "React Hook Form",
      "Zod",
      "shadcn/ui",
    ],
    contributions: [
      "Developed authentication interfaces including login, registration, forgot password, and OTP verification.",
      "Integrated authentication APIs including login, registration, logout, and Google authentication.",
      "Implemented profile-related UI components and API integration.",
      "Worked on password reset functionality and authentication validation.",
      "Contributed to reusable form components and frontend architecture.",
    ],
    image: cureImage,
    githubUrl: "https://github.com/Abdulrahmanfawzy/cure-team-1",
    liveUrl: "https://cure-team-1.vercel.app/",
  },
  {
    id: "grocery",
    title: "Grocery",
    type: "Team Project",
    tech: "React JS",
    shortDescription:
      "E-commerce storefront for browsing products, filtering results, and managing shopping carts.",
    overview:
      "A grocery marketplace application focused on product discovery, product details, filtering, pagination, and shopping cart interactions.",
    technologies: [
      "React.js",
      "TypeScript",
      "Tailwind CSS",
      "Redux Toolkit",
      "React Router",
      "React Query",
      "Axios",
      "shadcn/ui",
    ],
    contributions: [
      "Implemented product listing and product details interfaces.",
      "Integrated product APIs using Axios and TanStack Query.",
      "Developed product filtering by category, price, brand, type, and availability.",
      "Implemented pagination using URL search parameters.",
      "Contributed to shopping cart functionality and reusable product components.",
      "Worked with the frontend team using Git branches and pull requests.",
    ],
    image: groceryImage,
    githubUrl: "https://github.com/Abdulrahmanfawzy/Grocery-team-1",
    liveUrl: "https://grocery-team-1.vercel.app/",
  },
  // Personal Projects
  {
    id: "posts-app",
    title: "Posts App",
    type: "Personal Project",
    tech: "React JS",
    shortDescription:
      "Social posts application for creating, managing, and interacting with posts.",
    overview:
      "A responsive React application that allows users to manage posts, interact through comments and likes, and manage their account.",
    technologies: [
      "React.js",
      "JavaScript",
      "React Router",
      "Axios",
      "CSS",
      "Bootstrap",
    ],
    contributions: [
      "Implemented post creation, editing, and deletion with API integration.",
      "Built post interaction features including likes and comments.",
      "Developed profile management features including profile photo updates and password changes.",
      "Created reusable components for posts and user interactions.",
    ],
    image: postsAppImage,
    githubUrl: "https://github.com/mohammed-code4/posts-app",
    liveUrl: "https://posts-app-vert.vercel.app/",
  },
  {
    id: "authentication-system",
    title: "Authentication System",
    type: "Personal Project",
    tech: "React JS",
    shortDescription:
      "Modern authentication application with protected routes and persistent user sessions.",
    overview:
      "A responsive authentication system featuring token-based authentication, session management, form validation, and protected application routes.",
    technologies: [
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "React Router",
      "React Hook Form",
      "Zod",
      "Axios",
      "Tailwind CSS",
    ],
    contributions: [
      "Implemented token-based authentication and persistent session management using Redux Toolkit.",
      "Built protected routes and authentication flows using React Router.",
      "Developed reusable forms with React Hook Form and Zod validation.",
      "Integrated authentication APIs using Axios.",
    ],
    image: authSystemImage,
    githubUrl: "https://github.com/mohammed-code4/authentication_system",
    liveUrl: "https://auth-system-redux.vercel.app/",
  },

  {
    id: "game-arena",
    title: "GameArena",
    type: "Personal Project",
    tech: "HTML & CSS",
    shortDescription:
      "Responsive gaming landing page showcasing games, services, and an esports brand.",
    overview:
      "A modern gaming landing page featuring game showcases, services, team members, animated partner logos, and a contact section.",
    technologies: [
      "HTML5",
      "CSS3",
      "Bootstrap 5",
      "JavaScript",
      "Font Awesome",
    ],
    contributions: [
      "Built a responsive landing page using HTML, CSS, and Bootstrap.",
      "Created game showcase sections and responsive content layouts.",
      "Implemented interactive carousels and animated partner logos.",
      "Developed reusable styling patterns for different screen sizes.",
    ],
    image: gameArenaImage,
    githubUrl: "https://github.com/mohammed-code4/game-arena-css",
    liveUrl: "https://mohammed-code4.github.io/game-arena-css/",
  },
  {
    id: "clarity",
    title: "Clarity",
    type: "Personal Project",
    tech: "HTML & CSS",
    shortDescription:
      "Modern digital agency landing page showcasing services and technology solutions.",
    overview:
      "A responsive agency website presenting digital services, technology stacks, client testimonials, FAQs, and a contact form.",
    technologies: [
      "HTML5",
      "CSS3",
      "Bootstrap 5",
      "JavaScript",
      "Font Awesome",
    ],
    contributions: [
      "Developed a responsive agency landing page with multiple content sections.",
      "Built navigation with mega menu interactions.",
      "Implemented technology stack tabs and testimonials carousel.",
      "Created FAQ accordion and contact form layouts.",
    ],
    image: clarityImage,
    githubUrl: "https://github.com/mohammed-code4/clarity-css",
    liveUrl: "https://mohammed-code4.github.io/clarity-css/",
  },
  {
    id: "contact-hub",
    title: "ContactHub",
    type: "Personal Project",
    tech: "JavaScript",
    shortDescription:
      "Simple contact management application for organizing and managing personal contacts.",
    overview:
      "A lightweight frontend application that allows users to add, search, edit, and delete contacts through a responsive interface.",
    technologies: ["HTML5", "CSS3", "JavaScript", "Bootstrap"],
    contributions: [
      "Implemented contact creation and management functionality.",
      "Built search functionality to find contacts quickly.",
      "Added editing and deleting operations for existing contacts.",
      "Created a responsive interface using Bootstrap.",
    ],
    image: contactHubImage,
    githubUrl: "https://github.com/mohammed-code4/contact-hub-js",
    liveUrl: "https://mohammed-code4.github.io/contact-hub-js/",
  },
];
