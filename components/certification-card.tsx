import { ExternalLink, Award, Calendar, Building } from "lucide-react";
import { Button } from "@/components/ui/button";

interface CertificationCardProps {
  title: string;
  issuer: string;
  date: string;
  imageUrl: string;
  credentialUrl?: string;
}

export default function CertificationCard({
  title,
  issuer,
  date,
  imageUrl,
  credentialUrl,
}: CertificationCardProps) {
  return (
    <div className="group overflow-hidden rounded-lg border bg-card shadow-sm transition-all hover:shadow-lg">
      <div className="relative h-32 w-full bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
        <Award className="h-12 w-12 text-primary" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-serif font-bold text-balance mb-2">
            {title}
          </h3>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-1">
              <Building className="h-4 w-4" />
              {issuer}
            </div>
            <div className="flex items-center gap-1">
              <Calendar className="h-4 w-4" />
              {date}
            </div>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
            Certificación
          </span>
        </div>

        {credentialUrl && (
          <div className="pt-2">
            <Button size="sm" asChild>
              <a
                href={credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2"
              >
                <ExternalLink className="h-4 w-4" />
                Ver Credencial
              </a>
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
