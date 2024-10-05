import React from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

export default function App() {
  const navLinks: { title: string; id: string }[] = [
    { title: "Projects", id: "projects" },
    { title: "Skills", id: "skills" },
    { title: "Contact", id: "contact" },
  ];

  const heroContactLinks: { icon: React.ReactNode; href: string }[] = [
    {
      icon: <FaLinkedinIn />,
      href: "https://www.linkedin.com/in/owen-hammond-889432274/",
    },
    { icon: <MdEmail />, href: "mailto:owenhammond8@gmail.com" },
  ];

  return (
    <main className="w-full h-screen bg-background text-text">
      <nav className="px-6 py-6 flex justify-between items-center text-white">
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

      <section id="hero" className="m-14">
        <div className="space-y-14">
          <div className="space-y-3">
            <h3>Hello, I'm</h3>

            <h1 className="text-4xl font-semibold text-white tracking-wide">
              <span className="text-primary">Owen</span> Hammond
            </h1>

            <h2 className="text-white tracking-wide text-2xl">
              Experienced Mechanical Engineer |
            </h2>
          </div>

          <p className="max-w-[550px] leading-[2]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum nam
            iste libero aut doloribus quis earum incidunt repudiandae quia
            asperiores vero dicta dolor sint, eius laboriosam, natus tempore
            esse voluptatem!
          </p>

          <div className="space-y-6">
            <div className="space-x-4">
              <button className="px-4 py-3 bg-primary rounded-lg text-white">
                Download Resume
              </button>

              <button className="px-4 py-3 border-2 border-primary rounded-lg">
                Contact Me
              </button>
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
    </main>
  );
}
