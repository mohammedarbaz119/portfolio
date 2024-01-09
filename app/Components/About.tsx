"use client";
import React from "react";
import Image from "next/image";

const AboutSection = () => {
  return (
    <section
      id="about"
      className="bg-black text-purple-300 py-8 md:py-16 lg:py-24"
    >
      <div className="container mx-auto">
        <h1 className="text-center font-bold text-4xl md:text-6xl mb-4 text-purple-400">
          About Me
          <hr className="w-6 h-1 mx-auto my-2 bg-gray-300 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-4 px-3 items-center justify-around md:space-x-4 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 text-lg md:text-2xl">
            <h2 className="text-xl md:text-3xl font-bold mb-2 text-purple-400">
              Get to know me!
            </h2>
            <p className="text-sm md:text-xl text-gray-300">
              Hey there! I&#39;m{" "}
              <span className="font-bold text-purple-400">
                Mohammed Arbazuddin Qureshi
              </span>
              , a passionate and highly ambitious Computer Science student based
              in Hyderabad, India.
            </p>
            <p className="text-sm md:text-xl text-gray-300">
              Currently in my third year at Muffakham Jah College of Engineering
              and Technology, I&#39;ve been diving deep into the world of
              technology and coding since the beginning of my academic journey.
            </p>
            <p className="text-sm md:text-xl text-gray-300">
              I specialize in building{" "}
              <span className="font-bold text-purple-400">
                Web Applications
              </span>
            </p>
            <p className="text-sm md:text-xl text-gray-300">
              Outside of coding, you can find me exploring the latest
              developments in the tech world, contributing to open-source
              projects, and enjoying a good cup of coffee while brainstorming
              innovative ideas.
            </p>
          </div>
          <div className="w-40 h-40 sm:w-80 sm:h-80">
            <Image src="/profile1.jpeg" alt="" width={500} height={600} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
