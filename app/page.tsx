import Image from "next/image";
import { Github, Linkedin, Mail } from "lucide-react";
import ProjectCard from "@/components/project-card";
import TechStack from "@/components/tech-stack";
import CertificationCard from "@/components/certification-card";
import DownloadCVButton from "@/components/download-cv-button";
import Certifications from "@/data/certifications.json";
import ContactCard from "@/components/contact-card";

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      {/* Header/Navigation */}
      <header className="sticky top-0 z-10 border-b bg-background/80 backdrop-blur-sm">
        <div className="container flex h-16 items-center justify-between">
          <div className="font-semibold">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="48px"
              viewBox="0 -960 960 960"
              width="48px"
              fill="#2563EB"
            >
              <path d="M560-160v-80h120q17 0 28.5-11.5T720-280v-80q0-38 22-69t58-44v-14q-36-13-58-44t-22-69v-80q0-17-11.5-28.5T680-720H560v-80h120q50 0 85 35t35 85v80q0 17 11.5 28.5T840-560h40v160h-40q-17 0-28.5 11.5T800-360v80q0 50-35 85t-85 35H560Zm-280 0q-50 0-85-35t-35-85v-80q0-17-11.5-28.5T120-400H80v-160h40q17 0 28.5-11.5T160-600v-80q0-50 35-85t85-35h120v80H280q-17 0-28.5 11.5T240-680v80q0 38-22 69t-58 44v14q36 13 58 44t22 69v80q0 17 11.5 28.5T280-240h120v80H280Z" />
            </svg>
          </div>
          <nav className="hidden md:block">
            <ul className="flex gap-6">
              <li>
                <a href="#about" className="hover:text-primary">
                  Sobre mí
                </a>
              </li>
              <li>
                <a href="#projects" className="hover:text-primary">
                  Proyectos
                </a>
              </li>
              <li>
                <a href="#technologies" className="hover:text-primary">
                  Tecnologías
                </a>
              </li>
              <li>
                <a href="#certifications" className="hover:text-primary">
                  Certificaciones
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-primary">
                  Contacto
                </a>
              </li>
            </ul>
          </nav>
          <div className="flex gap-4">
            <a
              href="https://github.com/DeniseAguirre"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/denise-aguirre-m/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:deniseaguirre.m@gmail.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section id="about" className="container pt-12 md:pt-12">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          <div className="flex flex-col justify-center space-y-4">
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Hola, soy <span className="text-primary">Denise</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Soy desarrolladora Full Stack con un enfoque en crear experiencias
              web y mobile intuitivas y accesibles. Trabajo con tecnologías como
              React.js, Next.js, TypeScript y React Native, y complemento mi
              stack con Node.js, Nest.js y PostgreSQL en el backend. Disfruto
              construir interfaces que no solo se vean bien, sino que realmente
              funcionen para las personas.
            </p>
            <div className="flex gap-4">
              <DownloadCVButton />
              <a
                href="#projects"
                className="inline-flex h-10 items-center justify-center rounded-md border border-input bg-background px-8 text-sm font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground"
              >
                Ver proyectos
              </a>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <div className="relative overflow-hidden">
              <Image
                src="/sinfondo.png"
                alt="DeniseAguirre"
                width={420}
                height={420}
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="bg-muted py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Proyectos
          </h2>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            <ProjectCard
              title="Task Manager API v1"
              description="Esta es una API RESTful para la gestión de tareas, desarrollada con NestJS, TypeORM y documentada con Swagger."
              tags={[
                "Nest.js",
                "Typescript",
                "Postgresql",
                "Eslint",
                "Jest",
                "Swagger",
              ]}
              imageUrl="/api-tm.png"
              demoUrl="https://task-manager-pg.onrender.com/api/docs#/"
              repoUrl="https://github.com/DeniseAguirre/task-manager-pg"
            />
            <ProjectCard
              title="Task Manager"
              description="Esta aplicación permite a los usuarios crear, ver, editar y eliminar tareas, así como marcarlas como completadas."
              tags={[
                "Next.js",
                "Tailwind CSS",
                "Typescript",
                "Sweet Alert",
                "Axios",
              ]}
              imageUrl="/home-tm.png"
              demoUrl="https://task-manager-forit.vercel.app/"
              repoUrl="https://github.com/DeniseAguirre/task-manager-frontend"
            />
            <ProjectCard
              title="El Despacho Website"
              description="El Despacho es un sitio web desarrollado con Next.js. Ofrece una experiencia intuitiva para los clientes, permitiéndoles explorar el menú, conocer la historia del emprendimiento y realizar pedidos en línea."
              tags={[
                "Next.js",
                "Tailwind CSS",
                "Typescript",
                "Redux Toolkit",
                "Formik",
                "Sweet Alert",
                "Axios",
              ]}
              imageUrl="/eldespacho.png"
              demoUrl="https://el-despacho.vercel.app/"
              repoUrl="https://github.com/DeniseAguirre/ElDespacho-Frontend"
            />
            <ProjectCard
              title="Crypto Tracker CriptoAr App"
              description="Aplicación para seguir las 10 principales criptomonedas en tiempo real con Gráficos interactivos y datos actualizados, Modo oscuro/claro.
              Cuenta con version web y apk para Android."
              tags={[
                "TypeScript",
                "React Native",
                "Expo",
                "API Coin Gecko",
                "Tailwind CSS",
                "Gluestack-ui",
              ]}
              imageUrl="/criptoar.png"
              demoUrl="https://top-crypto-gilt.vercel.app/"
              repoUrl="https://github.com/DeniseAguirre/criptoar"
            />
            <ProjectCard
              title="E-commerce MindTech App"
              description="Aplicación móvil Ecommerce sobre tecnología, desarrollado con React Native, Node.js, MongoDB e integración con MercadoPago como pasarela de pagos."
              tags={[
                "React Native",
                "Node.js",
                "MongoDB",
                "Mercado Pago",
                "Typescript",
                "Zustand",
              ]}
              imageUrl="/Mindtech.png"
              demoUrl="https://youtu.be/xN-VD-i80DA?si=r8_MduDwx7nKHWPS"
              repoUrl="https://github.com/DeniseAguirre/MindTech-App"
            />
            <ProjectCard
              title="Axees"
              description="Plataforma automatizada de marketing de influencers"
              tags={[
                "Next.js",
                "Tailwind CSS",
                "Redux Toolkit",
                "Stripe",
                "Axios",
                "Formik",
                "Chart.js",
                "Typescript",
                "Nest.js",
                "MongoDB",
              ]}
              imageUrl="/axees.png"
              demoUrl="https://www.axees.io/"
            />
            <ProjectCard
              title="DLP Manager"
              description="Plataforma de software diseñada para controlar los defectos posteriores a la construcción."
              tags={[
                "Nest.js",
                "Docker",
                "Typeorm",
                "Jest",
                "Supertest",
                "Typescript",
                "Cypress",
                "Redux Toolkit",
                "Tailwind CSS",
                "Axios",
                "React.js",
                "Formik",
              ]}
              imageUrl="/dlp.png"
              demoUrl="https://dlpmanager.com/"
            />
            <ProjectCard
              title="Portfolio Minimalista"
              description="Portfolio de diseño minimalista, refleja la simplicidad, y la elegancia en la disposición de los elementos."
              tags={["HTML", "Tailwind CSS", "Vercel"]}
              imageUrl="/portfoliominimalista.png"
              demoUrl="https://portfolio-minimalista-holajunior.vercel.app/"
              repoUrl="https://github.com/DeniseAguirre/portfolio-minimalista"
            />
            <ProjectCard
              title="Portfolio Moderno Software Developer"
              description="Portfolio de diseño moderno, en inglés y español, modo oscuro y claro."
              tags={["Nextjs", "Tailwind CSS", "Vite", "Netlify"]}
              imageUrl="/portfoliosd.png"
              demoUrl="https://denise-aguirre-m.netlify.app/"
              repoUrl="https://github.com/DeniseAguirre/my-portfolio"
            />
            <ProjectCard
              title="Mindtech E-commerce Web"
              description="Web Ecommerce sobre tecnología, desarrollado con React.js, Node.js, MongoDB e integración con MercadoPago como pasarela de pagos."
              tags={[
                "React.js",
                "Node.js",
                "MongoDB",
                "Mercado Pago",
                "Typescript",
                "Zustand",
              ]}
              imageUrl="/mindtech-web.png"
              demoUrl="https://mind-tech-web-ashen.vercel.app/"
              repoUrl="https://github.com/DeniseAguirre/Mind-Tech-Web"
            />
            <ProjectCard
              title="Minga Web App"
              description="Web app full stack para leer mangas"
              tags={[
                "Reactjs",
                "Nodejs",
                "MongoDB",
                "MercadoPago",
                "Nodemailer",
                "JWT",
                "Mongoose",
                "Figma",
              ]}
              imageUrl="/minga.png"
              demoUrl="https://minga-denise-aguirre.vercel.app/"
              repoUrl="https://github.com/DeniseAguirre/minga-violeta-front"
            />
            <ProjectCard
              title="Amazing Events Web"
              description="Sitio web de eventos permite buscar eventos pasados, futuros y estadisticas, incluye filtros de búsqueda por categorias y palabras clave"
              tags={["HTML", "Bootstrap", "Javascript"]}
              imageUrl="/aevents.png"
              demoUrl="https://amazing-events-aguirre-denise.vercel.app/"
              repoUrl="https://github.com/DeniseAguirre/Amazing-Events-Aguirre-Denise"
            />
            <ProjectCard
              title="Olympus Gym Web"
              description="Sitio web que permite conocer mas sobre Olympus, actividades, horarios, precios, con formulario de contacto"
              tags={["HTML", "Bootstrap", "Javascript"]}
              imageUrl="/olympusgym.png"
              demoUrl="https://olympusgym.vercel.app/"
              repoUrl="https://github.com/DeniseAguirre/Denise-Aguirre-Task-3"
            />
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section id="technologies" className="container py-16">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Tecnologías y Herramientas
        </h2>
        <TechStack />
      </section>

      {/* Certifications Section */}
      <section id="certifications" className="bg-muted py-16">
        <div className="container">
          <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
            Certificaciones
          </h2>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[...Certifications]
              .sort(
                (a, b) =>
                  new Date(b.date).getTime() - new Date(a.date).getTime()
              )
              .map((cert, index) => (
                <CertificationCard
                  key={index + "cert"}
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
      <section id="contact" className="container py-16">
        <h2 className="mb-12 text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Contacto
        </h2>
        <div className="space-y-12">
          {/* <ContactForm /> */}
          <ContactCard />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-background py-6">
        <div className="container flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-center text-sm text-muted-foreground">
            © {new Date().getFullYear()} Denise Aguirre. Todos los derechos
            reservados.
          </p>
          <div className="flex gap-4">
            <a
              href="https://github.com/DeniseAguirre"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <Github className="h-5 w-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/denise-aguirre-m/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="mailto:deniseaguirre.m@gmail.com" aria-label="Email">
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
}
