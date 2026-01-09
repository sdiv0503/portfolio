import {
  SiNextdotjs,
  SiTypescript,
  SiReact,
  SiTailwindcss,
  SiRedux,
  SiNodedotjs,
  SiExpress,
  SiPostgresql,
  SiPrisma,
  SiMongodb,
  SiDocker,
  SiAmazon,
  SiPython,
  SiCplusplus,
  SiGit,
  SiPostman,
  SiFigma,
  SiSupabase,
  SiFirebase,
} from "react-icons/si";

export const FRONTEND_SKILLS = [
  { name: "Next.js", icon: SiNextdotjs },
  { name: "React", icon: SiReact },
  { name: "TypeScript", icon: SiTypescript },
  { name: "Tailwind CSS", icon: SiTailwindcss },
  { name: "Redux", icon: SiRedux },
  { name: "Figma", icon: SiFigma },
  { name: "Chart.js", icon: SiReact }, // Using React icon as placeholder or find specific lib icon
  { name: "PDF.js", icon: SiReact }, // Placeholder
];

export const BACKEND_SKILLS = [
  { name: "Node.js", icon: SiNodedotjs },
  { name: "Express", icon: SiExpress },
  { name: "PostgreSQL", icon: SiPostgresql },
  { name: "Prisma ORM", icon: SiPrisma },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Supabase", icon: SiSupabase },
  { name: "Firebase", icon: SiFirebase },
  { name: "JWT Auth", icon: SiNodedotjs }, // Abstract concept, use Node icon
];

export const TOOLS_SKILLS = [
  { name: "Docker", icon: SiDocker },
  { name: "AWS", icon: SiAmazon },
  { name: "Git", icon: SiGit },
  { name: "Postman", icon: SiPostman },
  { name: "Python", icon: SiPython },
  { name: "Java", icon: SiPython }, // Placeholder, consider using FaJava from react-icons/fa
  { name: "C++", icon: SiCplusplus },
];
