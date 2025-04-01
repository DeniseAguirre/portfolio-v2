import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Portfolio - Denise Aguirre",
  description: "Portfolio personal de desarrollo full stack",
  generator: "Denise Aguirre",
  icons: {
    icon: [
      {
        url: "/object.png",
        sizes: "32x32",
      },
      {
        url: "/object.png",
        type: "image/png",
        sizes: "192x192",
      },
    ],
    apple: {
      url: "/object.png",
      sizes: "180x180",
      type: "image/png",
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
