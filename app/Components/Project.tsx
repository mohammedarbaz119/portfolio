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
  github,
  link,
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
      <section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:text-white">
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
            <li className="bg-gray-500 px-3 font-black py-1 text-[0.7rem]  tracking-wider text-white rounded-full dark:text-white/70">
              <a href={github} target="_blank" rel="noopener noreferrer">
                {"github"}
              </a>
            </li>
            {link && (
              <li className="bg-cyan-400 px-3 py-1 text-[0.7rem] font-black  tracking-wider text-white rounded-full dark:text-white/70">
                <a href={link} target="_blank" rel="noopener noreferrer">
                  {"live"}
                </a>
              </li>
            )}
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
