import React from "react";
import Image from "next/image";
import Link from "next/link";
import Revealer from "./Revealer";
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

interface ProjectDescription {
  name: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  link?: string;
}

const projects: ProjectDescription[] = [
  {
    name: "Prioritize Future",
    description:
      "Prioritizing tasks is a critical skill for effective time management. By prioritizing tasks, you can ensure that you are spending your time on the most important and urgent tasks, rather than getting bogged down in less important ones.",
    image: "/proiritze.jpg",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Mubashir-Md/Prioritize-Future",
    link: "https://prioritizefuture.com/",
  },
  {
    name: "Blog App",
    description:
      "Blog App is a web app where users can share their posts and follow others to see their content.",
    image: "/bloglite.jpg",
    tech: ["HTML", "Jinja2", "Flask", "Bootstrap", "SQLite"],
    github: "https://github.com/asdsyd/bloglite",
  },
  {
    name: "Notes App",
    description:
      "Notes App is a web app where we can create notes for ourselves.",
    image: "/notes.png",
    tech: ["React.js", "TypeScript", "CSS"],
    github: "https://github.com/mohammedarbaz119/Notes-App",
  },
  {
    name: "Portfolio",
    description: "This is my portfolio website",
    image: "/portfolio.png",
    tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/mohammedarbaz119/portfolio",
    link: "https://portfolio-mohammedarbaz119.vercel.app/",
  },
  {
    name: "cropSmart",
    description:
      "This research project harnesses machine learning to aid Indian farmers by enhancing Crop and Fertilizer Recommendation Systems. It analyzes soil quality and mineral content data to recommend crops and fertilizers. The project also utilizes image recognition to swiftly diagnose crop diseases from user-uploaded images, ultimately boosting agricultural productivity and empowering farmers with critical decision-making insights.",
    image: "/cropSmart.png",
    tech: ["Flask", "Python", "HTML", "CSS", "JavaScript", "Scikit-learn"],
    github: "https://github.com/nihal3000/harvestify",
    link: "https://cropsmart-r9fx.onrender.com/",
  },
  {
    name: "MovieReviews",
    description:
      "MovieReviews is a web app where users can see the reviews of the movies and can also add their reviews.",
    image: "/rveiewsapp.png",
    tech: ["React.js", "Spring boot", "MongoDB"],
    github: "https://github.com/mohammedarbaz119/Spring-Boot",
  },
];

// ... (previous imports remain unchanged)

const Projects = () => {
  return (
    <section
      id="projects"
      className="bg-gray-100 text-neutral-300 py-8 md:py-16"
    >
      <h1 className="my-6 text-center font-bold text-3xl text-neutral-400">
        Projects
        <hr className="w-6 h-1 mx-auto my-2 bg-neutral-400 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col items-center space-y-8 md:space-y-16">
        {projects.map((project, idx) => {
          return (
            <div key={idx} className="w-full max-w-4xl mx-auto px-2">
              <Revealer offset="-100px 0px -100px 0px">
                <div className="flex flex-col items-center md:flex-row md:space-x-8">
                  <div className="w-full md:w-1/2 mb-4 md:mb-0">
                    <div className="image-container">
                      <Image
                        src={project.image}
                        alt={project.name}
                        width={350}
                        height={300}
                        className="rounded-xl shadow-xl hover:opacity-70"
                      />
                    </div>
                  </div>
                  <div className="w-full md:w-1/2">
                    <h1 className="text-xl md:text-4xl font-bold mb-4 md:mb-6 text-neutral-400">
                      {project.name}
                    </h1>
                    <p className="text-base md:text-lg leading-6 mb-4 text-neutral-500 dark:text-neutral-600">
                      {project.description}
                    </p>
                    <p className="text-base md:text-lg leading-6 mb-4 text-bold flex flex-wrap">
                      {project.tech?.map((l) => (
                        <span
                          className="bg-gray-700 px-3 py-1 mr-2 mt-2 text-gray-300 rounded font-bold"
                          key={l}
                        >
                          {l}
                        </span>
                      ))}
                    </p>
                    <div className="flex flex-row space-x-2">
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <BsGithub
                          size={24}
                          className="hover:-translate-y-1 transition-transform cursor-pointer text-black"
                        />
                      </a>
                      {project.link && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <BsArrowUpRightSquare
                            size={24}
                            className=" text-black hover:-translate-y-1 transition-transform cursor-pointer"
                          />
                        </a>
                      )}
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
