// const skills = [
//   { skill: "HTML" },
//   { skill: "CSS" },
//   { skill: "JavaScript" },
//   { skill: "TypeScript" },
//   { skill: "React" },
//   { skill: "Mongodb" },
//   { skill: "Node.js" },
//   { skill: "Express.js" },
//   { skill: "Next.js" },
//   { skill: "Vue.js" },
//   { skill: "Tailwind CSS" },
//   { skill: "Bootstrap" },
//   { skill: "Python" },
//   { skill: "Flask" },
//   { skill: "Java" },
//   { skill: "Spring Boot" },
//   { skill: "Git" },
//   { skill: "Dart" },
//   { skill: "GitHub" },
// ];

// const AboutSection = () => {
//   return (
//     <section id="about" className="bg-teal-500 text-neutral-100">
//       <div className="my-4 pb-4 md:py-8 md:pb-16 p-2">
//         <h1 className="text-center font-bold text-2xl md:text-4xl">
//           About Me
//           <hr className="w-6 h-1 mx-auto my-2 bg-neutral-100 border-0 rounded"></hr>
//         </h1>

//         <div className="flex flex-col space-y-4 items-center justify-center md:space-x-4 md:space-y-0 md:p-4 md:flex-row md:text-left">
//           <div className="md:w-full">
//             <h1 className="text-center text-lg font-bold mb-2 md:text-left">
//               Get to know me!
//             </h1>
//             <p className="mx-2 text-sm md:text-base">
//               Hi, my name is{" "}
//               <span className="font-bold">Mohammed Arbazuddin Qureshi</span>. I
//               am a <span className="font-bold">highly ambitious</span> Computer
//               Science student currently based in Hyderabad, India.
//             </p>
//             <p className="mx-2 text-sm md:text-base">
//               I am currently in my third year of my Computer Science
//               bachelor&#39;s degree at Muffakham Jah College of Engineering and
//               Technology.
//             </p>
//             <p className="mx-2 text-sm md:text-base">
//               I am passionate about building{" "}
//               <span className="font-bold">Web Applications</span> and{" "}
//               <span className="font-bold">Mobile Applications</span> that can
//               help people in their day to day life. I am currently learning{" "}
//               <span className="font-bold">Spring Boot</span> and{" "}
//               <span className="font-bold"> Next.js</span>.
//             </p>
//           </div>
//           <div className="text-center md:w-full md:text-left">
//             <h1 className="text-lg font-bold mb-2 md:text-2xl">My Skills</h1>
//             <div className="flex flex-wrap justify-center md:justify-start">
//               {skills.map((item, idx) => {
//                 return (
//                   <p
//                     key={idx}
//                     className="bg-slate-700 px-3 py-1 mr-2 mt-2 text-neutral-100 rounded font-semibold text-sm md:text-base"
//                   >
//                     {item.skill}
//                   </p>
//                 );
//               })}
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AboutSection;
"use client";
import React from "react";
import { motion } from "framer-motion";

const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "Mongodb" },
  { skill: "Node.js" },
  { skill: "Express.js" },
  { skill: "Next.js" },
  { skill: "Vue.js" },
  { skill: "Tailwind CSS" },
  { skill: "Bootstrap" },
  { skill: "Python" },
  { skill: "Flask" },
  { skill: "Java" },
  { skill: "Spring Boot" },
  { skill: "Git" },
  { skill: "Dart" },
  { skill: "GitHub" },
];

const AboutSection = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { delay: 0.5, duration: 1.5 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <motion.section
      id="about"
      className="bg-gray-900 text-white py-8 md:py-16 lg:py-24"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <div className="container mx-auto">
        <h1 className="text-center font-bold text-4xl md:text-6xl mb-4 text-bllue">
          About Me
          <hr className="w-6 h-1 mx-auto my-2 bg-yellow-300 border-0 rounded"></hr>
        </h1>

        <motion.div
          className="flex flex-col space-y-4 items-center justify-center md:space-x-4 md:space-y-0 md:p-4 md:flex-row md:text-left"
          variants={containerVariants}
        >
          <motion.div
            className="md:w-1/2 text-lg md:text-2xl"
            variants={itemVariants}
          >
            <h2 className="text-xl md:text-3xl font-bold mb-2 text-green-400">
              Get to know me!
            </h2>
            <p className="mx-2 text-lg md:text-xl text-pink-300">
              Hey there! I&#39;m{" "}
              <span className="font-bold text-yellow-300">
                Mohammed Arbazuddin Qureshi
              </span>
              , a passionate and highly ambitious Computer Science student based
              in Hyderabad, India.
            </p>
            <p className="mx-2 text-lg md:text-xl text-pink-300">
              Currently in my third year at Muffakham Jah College of Engineering
              and Technology, I&#39;ve been diving deep into the world of
              technology and coding since the beginning of my academic journey.
            </p>
            <p className="mx-2 text-lg md:text-xl text-pink-300">
              I specialize in building and{" "}
              <span className="font-bold text-green-400">
                Mobile Applications
              </span>{" "}
              that not only meet but exceed user expectations. I believe in the
              power of technology to make a positive impact on people&#39;s
              lives.
            </p>
            <p className="mx-2 text-lg md:text-xl text-pink-300">
              Outside of coding, you can find me exploring the latest
              developments in the tech world, contributing to open-source
              projects, and enjoying a good cup of coffee while brainstorming
              innovative ideas.
            </p>
          </motion.div>
          <motion.div
            className="md:w-1/2 text-center md:text-left"
            variants={itemVariants}
          >
            <h2 className="text-xl md:text-3xl font-bold mb-2 text-green-400">
              My Skills
            </h2>
            <div className="flex flex-wrap justify-center md:justify-start">
              {skills.map((item, idx) => (
                <p
                  key={idx}
                  className="bg-blue-700 px-3 py-1 mr-2 mt-2 text-white rounded font-semibold text-lg md:text-xl"
                >
                  {item.skill}
                </p>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default AboutSection;
