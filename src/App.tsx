import React, { useEffect, useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import ProjectCard from "./components/ProjectCard";

type Project = {
  title: string;
  description: string;
  url: string;
};

export default function App() {
  const [projects, setProjects] = useState<Project[]>([]);

  const navLinks: { title: string; id: string }[] = [
    { title: "Projects", id: "projects" },
    { title: "Contact", id: "contact" },
  ];

  const heroContactLinks: {
    icon: React.ReactNode;
    title: string;
    href: string;
  }[] = [
    {
      icon: <FaLinkedinIn />,
      title: "Owen Hammond",
      href: "https://www.linkedin.com/in/owen-hammond-889432274/",
    },
    {
      icon: <MdEmail />,
      title: "owenhammond8@gmail.com",
      href: "mailto:owenhammond8@gmail.com",
    },
  ];

  useEffect(() => {
    const fetchProjects = async () => {
      await fetch("./projects.json")
        .then((res) => res.json())
        .then((data) => setProjects(data))
        .catch((err) => console.error("Error fetching projects", err));
    };

    fetchProjects();
  }, []);

  return (
    <main className="w-full min-h-screen h-full py-8 flex flex-col items-center bg-background text-text">
      <nav className="px-6 pb-6 w-full flex justify-between items-center text-white">
        <h2>Owen Hammond</h2>

        <ul className="flex gap-5">
          {navLinks.map((link, i) => {
            return (
              <li key={i}>
                <a href={`#${link.id}`}>{link.title}</a>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="w-[80vw] min-w-[650px]">
        <section id="hero">
          <div className="space-y-14">
            <div className="space-y-3">
              <h3>Hello, I'm</h3>

              <h1 className="text-4xl font-semibold text-white tracking-wide">
                <span className="text-primary">Owen</span> Hammond
              </h1>

              <h2 className="text-white tracking-wide text-2xl">
                Experienced Mechanical Engineer
              </h2>
            </div>
            <p className="max-w-[550px] leading-[2] text-lg font-semibold">
              This portfolio is in progress!
            </p>
            <p className="max-w-[550px] leading-[2] text-base">
              Projects will be added soon. In the meantime, feel free to reach
              out to me on LinkedIn or via email.
            </p>

            <div className="space-y-6">
              <div className="space-x-4">
                <a
                  className="px-4 py-3 bg-primary rounded-lg text-white"
                  href="https://drive.google.com/file/d/1rBbyLEk1V8PTvswgOPoAsk-6eozsN8o9/preview"
                  download="Owen_Hammond_Mechanical_Systems_Engineering_Resume.pdf"
                >
                  Download Resume
                </a>

                <a
                  href="#contact"
                  className="px-4 py-3 border-2 border-foreground rounded-lg"
                >
                  Contact Me
                </a>
              </div>

              <ul className="flex gap-x-3">
                {heroContactLinks.map((link, i) => {
                  return (
                    <li key={i} className="bg-foreground p-2 rounded">
                      <a
                        href={link.href}
                        target="_blank"
                        className="text-primary"
                      >
                        {link.icon}
                      </a>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </section>

        <hr className="w-[75%] h-[1px] bg-text" />

        <section id="projects">
          <h2 className="text-2xl text-white tracking-wide">My Projects</h2>
          <p className="mt-2 mb-8 max-w-[500px]">
            These are some of the projects I've worked on. Click on a project to
            see more details.
          </p>

          <ul className="flex flex-col gap-y-4">
            {projects.map((project, i) => {
              return (
                <li key={i}>
                  <ProjectCard
                    title={project.title}
                    description={project.description}
                    youtubeUrl={project.url}
                  />
                </li>
              );
            })}
          </ul>
        </section>

        <section id="contact">
          <h2 className="text-2xl text-white tracking-wide">Contact me</h2>
          <p className="mt-2 mb-8 max-w-[500px]">
            You can reach me at the following links.
          </p>

          <ul className="flex flex-col gap-y-4">
            {heroContactLinks.map((link, i) => {
              return (
                <li key={i}>
                  <a
                    href={link.href}
                    target="_blank"
                    className="inline-flex items-center gap-x-3 pl-2 pr-6 py-3 border-2 rounded-lg border-foreground"
                  >
                    <span className="bg-foreground p-[6px] rounded">
                      {link.icon}
                    </span>
                    <span>{link.title}</span>
                  </a>
                </li>
              );
            })}
          </ul>
        </section>
      </div>
    </main>
  );
}
