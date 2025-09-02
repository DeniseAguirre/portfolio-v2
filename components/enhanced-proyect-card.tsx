import Image from "next/image";
import { Github, ExternalLink, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EnhancedProjectCardProps {
  title: string;
  description: string;
  challenge: string;
  solution: string;
  result?: string;
  tags: string[];
  imageUrl: string;
  demoUrl?: string;
  webUrl?: string;
  repoUrl?: string;
  featured?: boolean;
}

export default function EnhancedProjectCard({
  title,
  description,
  challenge,
  solution,
  result,
  tags,
  imageUrl,
  demoUrl,
  webUrl,
  repoUrl,
  featured = false,
}: EnhancedProjectCardProps) {
  return (
    <div
      className={`group overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-lg ${
        featured ? "md:col-span-2 lg:col-span-2" : ""
      }`}
    >
      <div
        className={`relative overflow-hidden ${
          featured ? "h-64" : "h-48"
        } w-full`}
      >
        <Image
          src={imageUrl || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-serif font-bold text-balance mb-2">
            {title}
          </h3>
          <p className="text-muted-foreground text-pretty leading-relaxed">
            {description}
          </p>
        </div>

        <div className="space-y-3">
          <div>
            <h4 className="text-sm font-semibold text-primary mb-1">
              ⚡ Desafío
            </h4>
            <p className="text-sm text-muted-foreground text-pretty">
              {challenge}
            </p>
          </div>

          <div>
            <h4 className="text-sm font-semibold text-primary mb-1">
              🛠️ Solución
            </h4>
            <p className="text-sm text-muted-foreground text-pretty">
              {solution}
            </p>
          </div>
          {result && (
            <div>
              <h4 className="text-sm font-semibold text-primary mb-1">
                🚀 Resultado
              </h4>
              <p className="text-sm text-muted-foreground text-pretty">
                {result}
              </p>
            </div>
          )}
        </div>

        <div className="flex flex-wrap gap-2">
          {tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex gap-3 pt-2">
          {repoUrl && (
            <Button variant="outline" size="sm" asChild>
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <Github className="h-4 w-4" />
                Código
              </a>
            </Button>
          )}
          {demoUrl && (
            <Button size="sm" asChild>
              <a
                href={demoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                Ver Demo
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          )}
          {webUrl && (
            <Button size="sm" asChild>
              <a
                href={webUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                Ver Web
                <ArrowRight className="h-3 w-3 transition-transform group-hover:translate-x-1" />
              </a>
            </Button>
          )}
        </div>
      </div>
    </div>
  );
}
