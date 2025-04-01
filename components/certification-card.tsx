import Image from "next/image"
import { ExternalLink } from "lucide-react"

interface CertificationCardProps {
  title: string
  issuer: string
  date: string
  imageUrl: string
  credentialUrl?: string
}

export default function CertificationCard({ title, issuer, date, imageUrl, credentialUrl }: CertificationCardProps) {
  return (
    <div className="flex overflow-hidden rounded-lg border bg-background shadow-sm transition-all hover:shadow-md">
      <div className="flex-shrink-0 p-4">
        <div className="relative h-16 w-32">
          <Image src={imageUrl || "/placeholder.svg"} alt={issuer} fill className="object-contain" />
        </div>
      </div>
      <div className="flex flex-1 flex-col justify-between p-4">
        <div>
          <h3 className="font-semibold">{title}</h3>
          <p className="text-sm text-muted-foreground">
            {issuer} • {date}
          </p>
        </div>
        {credentialUrl && (
          <a
            href={credentialUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 flex items-center gap-1 text-xs font-medium text-primary hover:underline"
          >
            Ver credencial <ExternalLink className="h-3 w-3" />
          </a>
        )}
      </div>
    </div>
  )
}

