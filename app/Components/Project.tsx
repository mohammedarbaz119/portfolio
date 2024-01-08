// import React from "react";
// import Image from "next/image";
// import Link from "next/link";
// import Revealer from "./Revealer";
// import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs";

// interface ProjectDescription {
//   name: string;
//   description: string;
//   image: string;
//   tech: string[];
//   github: string;
//   link?: string;
// }

// const projects: ProjectDescription[] = [
//   {
//     name: "Prioritize Future",
//     description:
//       "Prioritizing tasks is a critical skill for effective time management. By prioritizing tasks, you can ensure that you are spending your time on the most important and urgent tasks, rather than getting bogged down in less important ones.",
//     image: "/proiritze.jpg",
//     tech: ["HTML", "CSS", "JavaScript"],
//     github: "https://github.com/Mubashir-Md/Prioritize-Future",
//     link: "https://prioritizefuture.com/",
//   },
//   {
//     name: "Blog App",
//     description:
//       "Blog App is a web app where users can share their posts and follow others to see their content.",
//     image: "/bloglite.jpg",
//     tech: ["HTML", "Jinja2", "Flask", "Bootstrap", "SQLite"],
//     github: "https://github.com/asdsyd/bloglite",
//   },
//   {
//     name: "Notes App",
//     description:
//       "Notes App is a web app where we can create notes for ourselves.",
//     image: "/notes.png",
//     tech: ["React.js", "TypeScript", "CSS"],
//     github: "https://github.com/mohammedarbaz119/Notes-App",
//   },
//   {
//     name: "Portfolio",
//     description: "This is my portfolio website",
//     image: "/portfolio.png",
//     tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
//     github: "https://github.com/mohammedarbaz119/portfolio",
//     link: "https://portfolio-mohammedarbaz119.vercel.app/",
//   },
//   {
//     name: "cropSmart",
//     description:
//       "This research project harnesses machine learning to aid Indian farmers by enhancing Crop and Fertilizer Recommendation Systems. It analyzes soil quality and mineral content data to recommend crops and fertilizers. The project also utilizes image recognition to swiftly diagnose crop diseases from user-uploaded images, ultimately boosting agricultural productivity and empowering farmers with critical decision-making insights.",
//     image: "/cropSmart.png",
//     tech: ["Flask", "Python", "HTML", "CSS", "JavaScript", "Scikit-learn"],
//     github: "https://github.com/nihal3000/harvestify",
//     link: "https://cropsmart-r9fx.onrender.com/",
//   },
//   {
//     name: "MovieReviews",
//     description:
//       "MovieReviews is a web app where users can see the reviews of the movies and can also add their reviews.",
//     image: "/rveiewsapp.png",
//     tech: ["React.js", "Spring boot", "MongoDB"],
//     github: "https://github.com/mohammedarbaz119/Spring-Boot",
//   },
// ];

// // ... (previous imports remain unchanged)

// const Projects = () => {
//   return (
//     <section
//       id="projects"
//       className="bg-gray-100 text-neutral-300 py-8 md:py-16"
//     >
//       <h1 className="my-6 text-center font-bold text-3xl text-neutral-400">
//         Projects
//         <hr className="w-6 h-1 mx-auto my-2 bg-neutral-400 border-0 rounded"></hr>
//       </h1>

//       <div className="flex flex-col items-center space-y-8 md:space-y-16">
//         {projects.map((project, idx) => {
//           return (
//             <div key={idx} className="w-full max-w-4xl mx-auto px-2">
//               <Revealer offset="-100px 0px -100px 0px">
//                 <div className="flex flex-col items-center md:flex-row md:space-x-8">
//                   <div className="w-full md:w-1/2 mb-4 md:mb-0">
//                     <div className="image-container">
//                       <Image
//                         src={project.image}
//                         alt={project.name}
//                         width={350}
//                         height={300}
//                         className="rounded-xl shadow-xl hover:opacity-70"
//                       />
//                     </div>
//                   </div>
//                   <div className="w-full md:w-1/2">
//                     <h1 className="text-xl md:text-4xl font-bold mb-4 md:mb-6 text-neutral-400">
//                       {project.name}
//                     </h1>
//                     <p className="text-base md:text-lg leading-6 mb-4 text-neutral-500 dark:text-neutral-600">
//                       {project.description}
//                     </p>
//                     <p className="text-base md:text-lg leading-6 mb-4 text-bold flex flex-wrap">
//                       {project.tech?.map((l) => (
//                         <span
//                           className="bg-gray-700 px-3 py-1 mr-2 mt-2 text-gray-300 rounded font-bold"
//                           key={l}
//                         >
//                           {l}
//                         </span>
//                       ))}
//                     </p>
//                     <div className="flex flex-row space-x-2">
//                       <a
//                         href={project.github}
//                         target="_blank"
//                         rel="noopener noreferrer"
//                       >
//                         <BsGithub
//                           size={24}
//                           className="hover:-translate-y-1 transition-transform cursor-pointer text-black"
//                         />
//                       </a>
//                       {project.link && (
//                         <a
//                           href={project.link}
//                           target="_blank"
//                           rel="noopener noreferrer"
//                         >
//                           <BsArrowUpRightSquare
//                             size={24}
//                             className=" text-black hover:-translate-y-1 transition-transform cursor-pointer"
//                           />
//                         </a>
//                       )}
//                     </div>
//                   </div>
//                 </div>
//               </Revealer>
//             </div>
//           );
//         })}
//       </div>
//     </section>
//   );
// };

// export default Projects;
"use client";

import { useRef } from "react";
import { projects } from "../ProjectAndSkillData";
import Image from "next/image";
import { motion, useScroll, useTransform } from "framer-motion";

type ProjectProps = (typeof projects)[number];

export default function Project({
  name,
  description,
  tech,
  imageUrl,
}: ProjectProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["0 1", "1.33 1"],
  });
  const scaleProgess = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const opacityProgess = useTransform(scrollYProgress, [0, 1], [0.6, 1]);

  return (
    <motion.div
      ref={ref}
      style={{
        scale: scaleProgess,
        opacity: opacityProgess,
      }}
      className="group mb-3 sm:mb-8 last:mb-0"
    >
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white dark:bg-white/10 dark:hover:bg-white/20">
        <div className="pt-4 pb-7 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
          <h3 className="text-2xl font-semibold">{name}</h3>
          <p className="mt-2 leading-relaxed text-gray-700 dark:text-white/70">
            {description}
          </p>
          <ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
            {tech.map((tag, index) => (
              <li
                className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full dark:text-white/70"
                key={index}
              >
                {tag}
              </li>
            ))}
          </ul>
        </div>

        <Image
          src={imageUrl}
          alt="Project I worked on"
          quality={95}
          width={300}
          loading="lazy"
          height={300}
          className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl
        transition 
        group-hover:scale-[1.04]
        group-hover:-translate-x-3
        group-hover:translate-y-3
        group-hover:-rotate-2

        group-even:group-hover:translate-x-3
        group-even:group-hover:translate-y-3
        group-even:group-hover:rotate-2

        group-even:right-[initial] group-even:-left-40"
        />
      </section>
    </motion.div>
  );
}
// const Projects = () => {
//   const textColor = "text-blue-400";

//   return (
//     <>
//       <section id="projects" className="bg-black text-white py-8 md:py-10">
//         <div className="container mx-auto">
//           <h1 className="my-6 text-center font-bold text-4xl md:text-5xl text-white">
//             My Projects
//             <hr className="w-16 h-1 mx-auto my-2 bg-white border-0 rounded"></hr>
//           </h1>

//           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {projects.map((project, idx) => (
//               <div
//                 key={idx}
//                 className={`rounded-lg p-6 border border-blue-500`}
//               >
//                 <h1
//                   className={`text-xl md:text-2xl font-bold mb-2 ${textColor}`}
//                 >
//                   {project.name}
//                 </h1>
//                 <p className="text-base leading-6 mb-4">
//                   {project.description}
//                 </p>
//                 <div className="flex flex-wrap mb-4">
//                   {project.tech?.map((tech, index) => (
//                     <span
//                       key={index}
//                       className="bg-gray-600 px-2 py-1 mr-2 mb-2 text-sm text-gray-300 rounded"
//                     >
//                       {tech}
//                     </span>
//                   ))}
//                 </div>
//                 <div className="flex space-x-2">
//                   <a
//                     href={project.github}
//                     target="_blank"
//                     rel="noopener noreferrer"
//                     className={`text-white hover:text-gray-300 ${textColor}`}
//                   >
//                     <BsGithub size={24} />
//                   </a>
//                   {project.link && (
//                     <a
//                       href={project.link}
//                       target="_blank"
//                       rel="noopener noreferrer"
//                       className={`text-white hover:text-gray-300 ${textColor}`}
//                     >
//                       <BsArrowUpRightSquare size={24} />
//                     </a>
//                   )}
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>
//     </>
//   );
// };

// export default Projects;
