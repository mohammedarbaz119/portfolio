"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { BsFillPersonLinesFill } from "react-icons/bs";
import Link from "next/link";

const Hero = () => {
  const intro = [
    "Computer Science Student",
    "Full Stack Developer",
    "Open Source Enthusiast",
  ];
  const [show, setShow] = useState(intro[0]);
  const controls = useAnimation();

  useEffect(() => {
    let index = 0;

    const interval = setInterval(() => {
      controls.start({ opacity: 0, y: -10 });
      setTimeout(() => {
        index = (index + 1) % intro.length;
        setShow(intro[index]);
        controls.start({ opacity: 1, y: 0 });
      }, 500);
    }, 3000);

    return () => clearInterval(interval);
  }, [controls]);

  return (
    <section className="text-white bg-gray-900 w-full md:h-screen text-center py-8 mt-12">
      <div
        className="container flex flex-col md:flex-row
       items-center justify-center w-full h-full mx-auto px-8 "
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className=" md:max-w-[800px] sm:pr-8 md:mx-auto text-center md:text-left"
        >
          <h2 className="text-3xl md:text-5xl md:mb-5 mb-3 md:pl-20">
            {" "}
            Hi, I&#39;m Mohammed Arbaz!
          </h2>
          <motion.h4
            className="text-xl md:text-6xl font-semibold mb-6 sm:mb-8 min-h-full text-teal-300 overflow-hidden whitespace-nowrap flex justify-center items-center"
            initial={{ opacity: 1, scale: 1 }}
            animate={controls}
          >
            {show}
          </motion.h4>
          <p className="md:text-2xl text-sm ml-4 mx-2 text-center md:mx-auto  text-gray-300 mb-6 sm:mb-8">
            I&#39;m a third-year Computer Science student and dedicated
            full-stack developer. I specialize in crafting engaging and
            user-centric web applications, utilizing technologies like React for
            the frontend and Node.js for the backend. Let&#39;s collaborate to
            bring your ideas to life!
          </p>
          <div className="flex items-center justify-between max-w-[330px] m-auto py-4">
            <a
              href="https://www.linkedin.com/in/mohammed-arbaz-551a51243/"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full shadow-lg bg-gray-800 shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaLinkedinIn />
              </div>
            </a>
            <a
              href="https://github.com/mohammedarbaz119"
              target="_blank"
              rel="noreferrer"
            >
              <div className="rounded-full bg-gray-800 shadow-lg shadow-gray-500 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <FaGithub />
              </div>
            </a>
            <Link href="/#contact">
              <div className="rounded-full shadow-lg shadow-gray-500 bg-gray-800 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <AiOutlineMail />
              </div>
            </Link>
            <Link href="/resume.pdf" download="resume.pdf">
              <div className="rounded-full shadow-lg shadow-gray-500 bg-gray-800 p-6 cursor-pointer hover:scale-110 ease-in duration-300">
                <BsFillPersonLinesFill />
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
