import {
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaBootstrap,
  FaGithub,
  FaFigma,
  FaGoogle,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiExpress,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiRedux,
  SiNestjs,
  SiMongoose,
  SiAxios,
  SiJest,
  SiPostman,
  SiTrello,
  SiClickup,
} from "react-icons/si";
import { TbBrandCypress } from "react-icons/tb";

export default function TechStack() {
  const technologies = [
    // Languages
    { name: "HTML", icon: FaHtml5, category: "Languages" },
    { name: "CSS", icon: FaCss3Alt, category: "Languages" },
    { name: "JavaScript", icon: FaJs, category: "Languages" },
    { name: "TypeScript", icon: SiTypescript, category: "Languages" },

    // Frontend
    { name: "React", icon: FaReact, category: "Frontend" },
    { name: "Redux", icon: SiRedux, category: "Frontend" },
    { name: "Next.js", icon: SiNextdotjs, category: "Frontend" },
    { name: "Bootstrap", icon: FaBootstrap, category: "Frontend" },
    { name: "Tailwind CSS", icon: SiTailwindcss, category: "Frontend" },
    { name: "Axios", icon: SiAxios, category: "Frontend" },

    // Backend
    { name: "Node.js", icon: FaNodeJs, category: "Backend" },
    { name: "Express", icon: SiExpress, category: "Backend" },
    { name: "NestJS", icon: SiNestjs, category: "Backend" },

    // Databases
    { name: "MongoDB", icon: SiMongodb, category: "Databases" },
    { name: "Mongoose", icon: SiMongoose, category: "Databases" },
    { name: "PostgreSQL", icon: SiPostgresql, category: "Databases" },

    // Testing
    { name: "Jest", icon: SiJest, category: "Testing" },
    { name: "Cypress", icon: TbBrandCypress, category: "Testing" },
    { name: "Postman", icon: SiPostman, category: "Testing" },

    // Tools
    { name: "Git", icon: FaGitAlt, category: "Tools" },
    { name: "GitHub", icon: FaGithub, category: "Tools" },

    // Project Management
    { name: "Trello", icon: SiTrello, category: "Project Management" },
    { name: "Figma", icon: FaFigma, category: "Project Management" },
    { name: "ClickUp", icon: SiClickup, category: "Project Management" },
    { name: "Google Drive", icon: FaGoogle, category: "Project Management" },
  ];

  // Ordenar las categorías en un orden específico
  const categoryOrder = [
    "Languages",
    "Frontend",
    "Backend",
    "Databases",
    "Testing",
    "Tools",
    "Project Management",
  ];

  // Obtener categorías únicas y ordenarlas según categoryOrder
  const categories = Array.from(
    new Set(technologies.map((tech) => tech.category))
  ).sort((a, b) => categoryOrder.indexOf(a) - categoryOrder.indexOf(b));

  return (
    <div className="space-y-12">
      {categories.map((category) => (
        <div key={category} className="rounded-lg border bg-card p-6 shadow-sm">
          <h3 className="mb-6 text-xl font-semibold">{category}</h3>
          <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
            {technologies
              .filter((tech) => tech.category === category)
              .map((tech) => (
                <div
                  key={tech.name}
                  className="flex flex-col items-center justify-center rounded-lg border bg-background p-4 shadow-sm transition-all hover:border-primary hover:shadow-md"
                >
                  <tech.icon className="mb-3 h-10 w-10 text-primary" />
                  <span className="text-center text-sm font-medium">
                    {tech.name}
                  </span>
                </div>
              ))}
          </div>
        </div>
      ))}
    </div>
  );
}
