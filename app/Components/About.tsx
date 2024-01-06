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
  return (
    <section
      id="about"
      className="bg-gray-900 text-white py-8 md:py-16 lg:py-24"
    >
      <div className="container mx-auto">
        <h1 className="text-center font-bold text-4xl md:text-6xl mb-4 text-blue-500">
          About Me
          <hr className="w-6 h-1 mx-auto my-2 bg-yellow-300 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-4 items-center justify-center md:space-x-4 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 text-lg md:text-2xl">
            <h2 className="text-xl md:text-3xl font-bold mb-2 text-blue-400">
              Get to know me!
            </h2>
            <p className="mx-2 text-lg md:text-xl text-gray-300">
              Hey there! I&#39;m{" "}
              <span className="font-bold text-white">
                Mohammed Arbazuddin Qureshi
              </span>
              , a passionate and highly ambitious Computer Science student based
              in Hyderabad, India.
            </p>
            <p className="mx-2 text-lg md:text-xl text-gray-300">
              Currently in my third year at Muffakham Jah College of Engineering
              and Technology, I&#39;ve been diving deep into the world of
              technology and coding since the beginning of my academic journey.
            </p>
            <p className="mx-2 text-lg md:text-xl text-gray-300">
              I specialize in building{" "}
              <span className="font-bold text-blue-400">Web Applications</span>
            </p>
            <p className="mx-2 text-lg md:text-xl text-gray-300">
              Outside of coding, you can find me exploring the latest
              developments in the tech world, contributing to open-source
              projects, and enjoying a good cup of coffee while brainstorming
              innovative ideas.
            </p>
          </div>
          <div className="md:w-1/2 text-center md:text-left">
            <h2 className="text-xl md:text-3xl font-bold mb-2 text-blue-400">
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
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
