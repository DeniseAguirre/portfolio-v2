import type React from "react";
import type { Metadata } from "next";
import { Playfair_Display, Source_Sans_3 } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { Suspense } from "react";
import "./globals.css";

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-playfair",
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-source-sans",
});

export const metadata: Metadata = {
  title: "Denise Aguirre - Backend Developer",
  description:
    "Backend Developer especializada en Node.js, NestJS, MongoDB y PostgreSQL. Creando APIs escalables y soluciones innovadoras.",
  generator: "Denise Aguirre",
  keywords: [
    "Backend Developer",
    "Node.js",
    "NestJS",
    "MongoDB",
    "PostgreSQL",
    "API Development",
  ],
  authors: [{ name: "Denise Aguirre" }],
  openGraph: {
    title: "Denise Aguirre - Backend Developer",
    description:
      "Backend Developer especializada en Node.js, NestJS, MongoDB y PostgreSQL",
    type: "website",
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`font-sans ${sourceSans.variable} ${playfairDisplay.variable} antialiased`}
      >
        <Suspense fallback={null}>
          <ThemeProvider defaultTheme="system">{children}</ThemeProvider>
        </Suspense>
      </body>
    </html>
  );
}
