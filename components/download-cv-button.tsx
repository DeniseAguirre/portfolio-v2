"use client";

import { Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function DownloadCVButton() {
  const downloadCV = (language: string) => {
    const cvUrl = language === "es" ? "/cv-espanol.pdf" : "/cv-english.pdf";

    const link = document.createElement("a");
    link.href = cvUrl;
    link.download = language === "es" ? "CV-Español.pdf" : "CV-English.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button className="gap-2">
          <Download className="h-4 w-4" />
          Descargar CV
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start">
        <DropdownMenuItem onClick={() => downloadCV("es")}>
          Español
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => downloadCV("en")}>
          English
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
