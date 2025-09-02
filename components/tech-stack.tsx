import {
  Server,
  Database,
  Code2,
  Globe,
  Palette,
  Container,
  Cloud,
  GitBranch,
  TestTube,
} from "lucide-react";

const technologies = [
  { name: "Node.js", icon: Server, category: "Backend" },
  { name: "NestJS", icon: Server, category: "Backend" },
  { name: "TypeScript", icon: Code2, category: "Language" },
  { name: "JavaScript", icon: Code2, category: "Language" },
  { name: "MongoDB", icon: Database, category: "Database" },
  { name: "PostgreSQL", icon: Database, category: "Database" },
  { name: "React", icon: Globe, category: "Frontend" },
  { name: "Next.js", icon: Globe, category: "Frontend" },
  { name: "Tailwind CSS", icon: Palette, category: "Frontend" },
  { name: "Docker", icon: Container, category: "DevOps" },
  { name: "AWS", icon: Cloud, category: "Cloud" },
  { name: "Google Cloud", icon: Cloud, category: "Cloud" },
  { name: "Git", icon: GitBranch, category: "Tools" },
  { name: "Jest", icon: TestTube, category: "Testing" },
];

const categoryGroups = [
  { title: "Backend & Databases", categories: ["Backend", "Database"] },
  { title: "Frontend & Languages", categories: ["Frontend", "Language"] },
  {
    title: "DevOps & Tools",
    categories: ["DevOps", "Cloud", "Tools", "Testing"],
  },
];

export default function TechStack() {
  return (
    <div className="space-y-8">
      {categoryGroups.map((group) => {
        const groupTechs = technologies.filter((tech) =>
          group.categories.includes(tech.category)
        );

        return (
          <div key={group.title} className="space-y-4">
            <h3 className="text-lg font-semibold text-primary text-center">
              {group.title}
            </h3>
            <div className="flex flex-wrap justify-center items-center gap-4 max-w-5xl mx-auto">
              {groupTechs.map((tech) => {
                const IconComponent = tech.icon;
                return (
                  <div
                    key={tech.name}
                    className="flex flex-col items-center justify-center p-4 rounded-lg border bg-card hover:bg-accent/50 transition-colors group min-w-[80px]"
                  >
                    <IconComponent className="h-6 w-6 mb-1 text-primary group-hover:scale-110 transition-transform" />
                    <span className="text-xs font-medium text-center leading-tight">
                      {tech.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
}
