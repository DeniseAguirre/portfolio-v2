import {
  Github,
  Linkedin,
  Mail,
  ArrowDown,
  Code,
  Database,
  Cloud,
} from "lucide-react";
import { Button } from "@/components/ui/button";

import TechStack from "@/components/tech-stack";
import CertificationCard from "@/components/certification-card";
import DownloadCVButton from "@/components/download-cv-button";
import ContactCard from "@/components/contact-card";
import { ThemeToggle } from "@/components/theme-toggle";
import EnhancedProjectCard from "@/components/enhanced-proyect-card";

// Sample certifications data - replace with actual data
const certifications = [
  {
    title: "Desarrollador Web Full Stack MERN & Mobile Apps",
    issuer: "MindHub",
    date: "2023",
    imageUrl: "https://i.postimg.cc/yxZLtXVQ/mindhublogo.jpg",
    credentialUrl:
      "https://www.credly.com/badges/63a93c65-32bb-497f-84ef-72e2365cc131/linked_in_profile",
  },
  {
    title: "CSS a la velocidad de TailwindCSS",
    issuer: "Donweb y EducaciónIT",
    date: "2024",
    imageUrl: "https://i.postimg.cc/sDJmv2pX/donweb1.png",
    credentialUrl:
      "https://certificados.donweb.com/212/212_deniseaguirre.m@gmail.com",
  },
  {
    title: "Entrenamiento en Ciberseguridad",
    issuer: "Delta Protect",
    date: "2023",
    imageUrl: "https://i.postimg.cc/WbHqyLD4/deltalogo.jpg",
    credentialUrl:
      "https://apolo-cert.deltaprotect.com/certificate/ed55e48c-7a18-5c1a-bf02-3186d42baeea",
  },
  {
    title: "Primeros pasos del desarrollo frontend",
    issuer: "Argentina Programa 4.0",
    date: "2023",
    imageUrl: "https://i.postimg.cc/bJDwbKvG/APLOGO.png",
    credentialUrl:
      "https://drive.google.com/file/d/1TFsKkluhsz1rw9lCLM12RRDPhXvUfOph/view?usp=sharing",
  },
  {
    title: "Testing QA Manual",
    issuer: "Coder House",
    date: "2022",
    imageUrl: "https://i.postimg.cc/W3YfXdb5/coderhouselogo.png",
    credentialUrl:
      "https://pub.coderhouse.com/legacy-certificates/63176c602a3b4d00d03c9be5?lang=es",
  },
  {
    title: "Introducción a Software Testing QA",
    issuer: "Educación IT",
    date: "2022",
    imageUrl: "https://i.postimg.cc/dVTHb3pL/edIT.jpg",
    credentialUrl:
      "https://api.educacionit.com/pdf/certificados/Denise-Claribel-Aguirre-Martinez-825027/60762",
  },
  {
    title: "Programación inicial con Python",
    issuer: "Gobierno de la Ciudad de Buenos Aires",
    date: "2022",
    imageUrl:
      "https://i.postimg.cc/8PpvqzXN/124fe5d6bc38ce675e9be8d2c05fbc11.jpg",
    credentialUrl:
      "https://drive.google.com/file/d/18l7KQjtiz0aOsRJIenZVf42bPNQg7Wsc/view",
  },
  {
    title: "Resposive Web Design",
    issuer: "freeCodeCamp",
    date: "2022",
    imageUrl: "https://i.postimg.cc/wBvyGR7m/freecodecamp-logo.png",
    credentialUrl:
      "https://www.freecodecamp.org/certification/fcc41d2aa32-aa4f-4ab1-8598-993b38d0c88a/responsive-web-design",
  },
  {
    title: "Se programar",
    issuer: "Argentina Programa",
    date: "2021",
    imageUrl: "https://i.postimg.cc/4nC1QbPZ/mumuki-logo.png",
    credentialUrl:
      "https://mumuki.io/argentina-programa/certificates/verify/B3nWUlJFo6AOlTrn",
  },
  {
    title: "Diseño web y comunicación digital",
    issuer: "Universidad Nacional de José C. Paz",
    date: "2020",
    imageUrl: "https://i.postimg.cc/6Q1RWpCv/unpaz-logo.jpg",
    credentialUrl:
      "https://drive.google.com/file/d/1TNIWGfCCVYJgfovxjt_A2AwCLcRkJ5h-/view",
  },
  {
    title: "HTML Fundamentals Course",
    issuer: "Solo Learn",
    date: "2017",
    imageUrl: "https://i.postimg.cc/Nf3DQ5Gr/sololearnlogo.png",
    credentialUrl: "https://www.sololearn.com/Certificate/CT-TPNM92XO/pdf",
  },
  {
    title: "Fundamentos de Marketing Digital",
    issuer: "Google",
    date: "2017",
    imageUrl: "https://i.postimg.cc/gcC4WNKK/googlelogo.png",
    credentialUrl:
      "https://drive.google.com/file/d/0B9demP0S0Y6ZaDl5TlVUSmM5bk0/view?usp=sharing&resourcekey=0-RVo_eHq0bZJ47gtnC1cF_w",
  },
];

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Navigation */}
      <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
        <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-6">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-sm">
                DA
              </span>
            </div>
            <span className="font-serif font-bold text-lg sm:text-xl">
              Denise Aguirre
            </span>
          </div>

          <nav className="hidden lg:block">
            <ul className="flex gap-6 xl:gap-8">
              <li>
                <a
                  href="#about"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Sobre mí
                </a>
              </li>
              <li>
                <a
                  href="#projects"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Proyectos
                </a>
              </li>
              <li>
                <a
                  href="#technologies"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Tecnologías
                </a>
              </li>
              <li>
                <a
                  href="#certifications"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Certificaciones
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-sm font-medium hover:text-primary transition-colors"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </nav>

          <div className="flex gap-2 sm:gap-3">
            <ThemeToggle />
            <Button variant="ghost" size="sm" asChild>
              <a
                href="https://github.com/DeniseAguirre"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
              >
                <Github className="h-4 w-4" />
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a
                href="https://www.linkedin.com/in/denise-aguirre-m/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="sm"
              asChild
              className="hidden sm:flex"
            >
              <a href="mailto:deniseaguirre.m@gmail.com" aria-label="Email">
                <Mail className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section
        id="about"
        className="container mx-auto px-4 py-16 sm:py-20 lg:py-32"
      >
        <div className="max-w-4xl mx-auto text-center space-y-6 sm:space-y-8">
          <div className="space-y-4 sm:space-y-6">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-balance leading-tight">
              Backend Developer
              <span className="text-primary block">Semi-Senior</span>
            </h1>
            <p className="text-lg sm:text-xl lg:text-2xl text-muted-foreground text-balance leading-relaxed max-w-3xl mx-auto px-2">
              Especializada en{" "}
              <strong className="text-primary">Node.js y NestJS</strong>, con
              experiencia creando APIs escalables, integraciones y proyectos
              remotos que generan impacto real.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto">
            <div className="flex flex-col items-center p-4 sm:p-6 rounded-lg bg-card">
              <Code className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-2 sm:mb-3" />
              <h3 className="font-semibold mb-2 text-sm sm:text-base">
                APIs Escalables
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground text-center">
                Desarrollo de APIs RESTful robustas con Node.js y NestJS
              </p>
            </div>
            <div className="flex flex-col items-center p-4 sm:p-6 rounded-lg bg-card">
              <Database className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-2 sm:mb-3" />
              <h3 className="font-semibold mb-2 text-sm sm:text-base">
                Bases de Datos
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground text-center">
                Experiencia con MongoDB y PostgreSQL para soluciones óptimas
              </p>
            </div>
            <div className="flex flex-col items-center p-4 sm:p-6 rounded-lg bg-card sm:col-span-2 lg:col-span-1">
              <Cloud className="h-6 w-6 sm:h-8 sm:w-8 text-primary mb-2 sm:mb-3" />
              <h3 className="font-semibold mb-2 text-sm sm:text-base">
                Integraciones
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground text-center">
                Servicios externos, pasarelas de pago y arquitecturas cloud
              </p>
            </div>
          </div>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center items-center">
            <DownloadCVButton />
            <Button
              variant="outline"
              size="lg"
              asChild
              className="w-full sm:w-auto bg-transparent"
            >
              <a
                href="#projects"
                className="flex items-center justify-center gap-2"
              >
                Ver Proyectos
                <ArrowDown className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-muted/30 py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold mb-4">
              Proyectos Destacados
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-balance px-2">
              Cada proyecto representa un desafío técnico resuelto con
              soluciones escalables y orientadas al impacto.
            </p>
          </div>

          <div className="grid gap-6 sm:gap-8 lg:grid-cols-2 max-w-7xl mx-auto">
            <EnhancedProjectCard
              title="Task Manager API v1"
              description="API RESTful para gestión de tareas con arquitectura escalable y documentación completa."
              challenge="Desarrollar un sistema que garantizara consistencia de datos, rendimiento en consultas y soporte a futuras integraciones."
              solution="Implementé NestJS con arquitectura modular, PostgreSQL con TypeORM para optimizar consultas, y documentación Swagger para facilitar integraciones."
              result="API lista para producción con 30% de mejora en tiempos de respuesta y preparada para escalar hacia microservicios."
              tags={["NestJS", "TypeScript", "PostgreSQL", "Swagger", "Jest"]}
              imageUrl="/home-tm.png"
              demoUrl="https://task-manager-pg.onrender.com/api/docs#/"
              webUrl="https://task-manager-forit.vercel.app/"
              repoUrl="https://github.com/DeniseAguirre/task-manager-pg"
              featured
            />

            <EnhancedProjectCard
              title="El Despacho Website"
              description="Plataforma web desarrollada con Next.js y Vercel para el restaurante El Despacho. Presenta el menú digital, animaciones interactivas y pedidos exclusivos para clientes en el local."
              challenge="Transmitir la identidad gastronómica del restaurante y ofrecer un sistema de pedidos on-site ágil y atractivo."
              solution="Frontend en Next.js, desplegado en Vercel.
              Animaciones interactivas (disco de empanadas giratorio).
              Menú digital responsive con flujo de pedidos simple y directo."
              result="Experiencia de usuario dinámica y moderna.
              Proceso de pedidos más ágil en el restaurante.
              Identidad digital consistente y atractiva."
              tags={["Next.js", "React", "Tailwind CSS", "SEO", "Responsive"]}
              imageUrl="/eldespacho.png"
              demoUrl="https://el-despacho.vercel.app/"
              repoUrl="https://github.com/DeniseAguirre/ElDespacho-Frontend"
            />

            <EnhancedProjectCard
              title="Crypto Tracker CriptoAr App"
              description="Aplicación de seguimiento de criptomonedas con datos en tiempo real y análisis de mercado."
              challenge="Integrar múltiples APIs de criptomonedas para mostrar datos precisos en tiempo real con una interfaz intuitiva y responsive."
              solution="Implementé React con hooks personalizados para manejo de estado, integré CoinGecko API con manejo de errores robusto y caché local."
              result="App con actualización de precios cada 30 segundos, soporte para +100 criptomonedas y experiencia de usuario fluida en móviles."
              tags={[
                "React",
                "JavaScript",
                "API Integration",
                "Chart.js",
                "Local Storage",
              ]}
              imageUrl="/criptoar.png"
              demoUrl="https://top-crypto-gilt.vercel.app/"
              repoUrl="https://github.com/DeniseAguirre/criptoar"
            />

            <EnhancedProjectCard
              title="Axees Platform"
              description="Plataforma automatizada de marketing de influencers con integraciones complejas."
              challenge="Integrar múltiples APIs de redes sociales (Instagram, TikTok, YouTube) manteniendo sincronización de datos en tiempo real."
              solution="Desarrollé microservicios con NestJS, implementé caching con Redis y creé un sistema de webhooks para actualizaciones automáticas."
              result="Plataforma que procesa +10K influencers diarios con 99.9% de uptime y reducción del 60% en tiempo de procesamiento."
              tags={["NestJS", "MongoDB", "Redis", "Stripe", "Docker"]}
              imageUrl="/axees.png"
              demoUrl="https://www.axees.io/"
            />

            <EnhancedProjectCard
              title="DLP Manager"
              description="Software para control de defectos posteriores a la construcción con testing completo."
              challenge="Crear un sistema robusto para gestión de defectos con alta disponibilidad y testing automatizado."
              solution="Implementé arquitectura hexagonal con NestJS, testing E2E con Cypress, y CI/CD con Docker para despliegues seguros."
              result="Sistema con 95% de cobertura de testing, 0 downtime en producción y adopción del 100% por el equipo de QA."
              tags={["NestJS", "Docker", "TypeORM", "Cypress", "Jest"]}
              imageUrl="/dlp.png"
              demoUrl="https://dlpmanager.com/"
            />

            <EnhancedProjectCard
              title="E-commerce MindTech"
              description="Aplicación móvil completa con backend robusto e integración de pagos."
              challenge="Desarrollar una app móvil con sincronización offline y procesamiento seguro de pagos."
              solution="Creé APIs RESTful con Node.js, implementé Zustand para estado global y integré MercadoPago con validaciones de seguridad."
              tags={[
                "React Native",
                "Node.js",
                "MongoDB",
                "MercadoPago",
                "Zustand",
              ]}
              imageUrl="/mindtech-web.png"
              demoUrl="https://youtu.be/xN-VD-i80DA?si=r8_MduDwx7nKHWPS"
              webUrl="https://mind-tech-web-ashen.vercel.app/"
              repoUrl="https://github.com/DeniseAguirre/MindTech-App"
            />
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="py-12 sm:py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 sm:mb-12">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold mb-4">
              Stack Tecnológico
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-balance px-2">
              Herramientas y tecnologías que domino para crear soluciones
              backend robustas y escalables.
            </p>
          </div>
          <TechStack />
        </div>
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="bg-muted/30 py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold mb-4">
              Certificaciones
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-balance px-2">
              Formación continua y certificaciones que respaldan mi experiencia
              técnica.
            </p>
          </div>
          <div className="grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 max-w-7xl mx-auto">
            {certifications.map((cert, index) => (
              <CertificationCard
                key={index}
                title={cert.title}
                issuer={cert.issuer}
                date={cert.date}
                imageUrl={cert.imageUrl}
                credentialUrl={cert.credentialUrl}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-16 sm:py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12 sm:mb-16">
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold mb-4">
              Hablemos
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto text-balance px-2">
              ¿Tienes un proyecto interesante? Me encantaría conocer más sobre
              tu desafío técnico.
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <ContactCard />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background py-6 sm:py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-muted-foreground text-center sm:text-left">
              © {new Date().getFullYear()} Denise Aguirre. Desarrollado con
              Next.js y Tailwind CSS.
            </p>
            <div className="flex gap-2 sm:gap-3">
              <ThemeToggle />
              <Button variant="ghost" size="sm" asChild>
                <a
                  href="https://github.com/DeniseAguirre"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a
                  href="https://www.linkedin.com/in/denise-aguirre-m/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="ghost" size="sm" asChild>
                <a href="mailto:deniseaguirre.m@gmail.com" aria-label="Email">
                  <Mail className="h-4 w-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
