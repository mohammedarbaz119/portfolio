import React from "react";
import Image from "next/image";
import Link from "next/link";
import Revealer from "./Revealer";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

interface project_description {
  name: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  link?: string;
}
const projects: project_description[] = [
  {
    name: "Prioritze Future",
    description:
      "Prioritizing tasks is a critical skill for effective time management. By prioritizing tasks, you can ensure that you are spending your time on the most important and urgent tasks, rather than getting bogged down in less important ones. ",
    image: "/proiritze.jpg",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Mubashir-Md/Prioritize-Future",
    link: "https://prioritizefuture.com/",
  },
  {
    name: "Blog App",
    description:
      "Blog App is an Web app where user can share their posts and follow others users to see their content",
    image: "/bloglite.jpg",
    tech: ["HTML", "Jinja2", "Flask", "BootStrap", "SQLite"],
    github: "https://github.com/asdsyd/bloglite",
  },
  {
    name: "Notes App",
    description:
      "Notes App is a Web App where we can create notes for us.",
    image: "/notes.png",
    tech:["React.js","TypeScript","CSS"],
    github: "https://github.com/mohammedarbaz119/Notes-App",
  },
];

const Projects = () => {
  return (
    <section id="projects">
      <h1 className="my-10 text-center font-bold text-4xl">
        Personal and Collaborated Projects
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {projects.map((project, idx) => {
          return (
            <div key={idx}>
              <Revealer offset="-200px 0px -200px 0px">
                <div className="flex flex-col m-6 md:flex-row md:space-x-8 mb-2">
                  <div className="ml-4 md:w-1/2 ">
                    {project.link ? (
                      <Link href={project.link}>
                        <Image
                          src={project.image}
                          alt=""
                          width={500}
                          height={500}
                          className="rounded-xl shadow-xl hover:opacity-70"
                        />
                      </Link>
                    ) : (
                      <Image
                        src={project.image}
                        alt=""
                        width={600}
                        height={600}
                        className="rounded-xl  hover:opacity-70"
                      />
                    )}
                  </div>
                  <div className="mt-8 md:w-1/2">
                    <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                    <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                      {project.description}
                    </p>
                    <p className="text-xl leading-7 mb-4 text-bold flex flex-wrap">
                      {project.tech?.map((l) => (
                        <span
                          className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-bold"
                          key={l}
                        >
                          {l}
                        </span>
                      ))}
                    </p>
                    <div className="flex flex-row align-bottom space-x-4">
                      <Link href={project.github} target="_blank">
                        <BsGithub
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>
                      {project.link&&<Link href={project.link} target="_blank">
                        <BsArrowUpRightSquare
                          size={30}
                          className="hover:-translate-y-1 transition-transform cursor-pointer"
                        />
                      </Link>}
                    </div>
                  </div>
                </div>
              </Revealer>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Projects;
