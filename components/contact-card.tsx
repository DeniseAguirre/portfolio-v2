import React from "react";
import { FaLinkedinIn, FaWhatsapp } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function ContactCard() {
  return (
    <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-3 items-center">
      <a
        href="https://www.linkedin.com/in/denise-aguirre-m/"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="LinkedIn"
      >
        <div className="flex flex-col items-center justify-center rounded-lg border bg-background p-8 shadow-sm transition-all hover:border-primary hover:shadow-md">
          <FaLinkedinIn className="mb-3 h-10 w-10 text-primary" />
          <span className="text-center text-sm font-medium">LinkedIn</span>
        </div>
      </a>
      <a href="mailto:deniseaguirre.m@gmail.com" aria-label="Email">
        <div className="flex flex-col items-center justify-center rounded-lg border bg-background p-8 shadow-sm transition-all hover:border-primary hover:shadow-md">
          <SiGmail className="mb-3 h-10 w-10 text-primary" />
          <span className="text-center text-sm font-medium">Email</span>
        </div>
      </a>
      <a
        href="https://wa.me/+5491126580740"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Whatsapp"
      >
        <div className="flex flex-col items-center justify-center rounded-lg border bg-background p-8 shadow-sm transition-all hover:border-primary hover:shadow-md">
          <FaWhatsapp className="mb-3 h-10 w-10 text-primary" />
          <span className="text-center text-sm font-medium">WhatsApp</span>
        </div>
      </a>
    </div>
  );
}
