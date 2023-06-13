"use client" // this is a client component
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const Hero = () => {
  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-6 py-10 sm:py-32 md:py-40 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2 px-20">
          <Image
            src={'/profile1.jpeg'}
            alt=""
            width={400}
            height={400}
            className="shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h2 className="text-2xl font-bold mt-6 md:mt-0 md:text-7xl">Hi, I&#39;m Mohammed Arbaz!</h2>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-teal-600">
             Computer Science undergrad 
            </span>
           
          </p>
          <a
           href={"/resume-arbaz.pdf"}
            className="text-neutral-100 font-semibold px-6 py-3 bg-sky-700  rounded shadow hover:bg-sky-600"
          download={"resume-arbaz.pdf"}
          >
            Resume
          </a>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center  ">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  )
}

export default Hero