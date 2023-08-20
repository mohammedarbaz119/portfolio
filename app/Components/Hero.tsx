"use client"
// this is a client component
import React, { AnimationEvent, AnimationEventHandler, useEffect, useState } from "react"
import Image from "next/image"
import { Link } from "react-scroll/modules"
import { HiArrowDown } from "react-icons/hi"

const Hero = () => {

  const intro: string[] = [
    "Computer Science Student",
     "Web Developer",
  ]
  const [show_idx, setshowidx] = useState(0)
  const [show, setshow] = useState(intro[show_idx])

  const change_text = (event: AnimationEvent) => {
    if (event.animationName === 'typing') {
      setshowidx(p => {
        if (p === intro.length - 1) {
          return 0;
        } else {
          return p + 1;
        }
      })
      setshow(intro[show_idx])


    }

  }






  return (
    <section id="home">
      <div className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-6 py-16 sm:py-32 md:py-40 md:flex-row md:space-x-4 md:text-left">
        <div className="md:mt-2 md:w-1/2 px-1.5">
          <Image
            src={'/profile1.jpeg'}
            alt=""
            width={300}
            height={300}
            className="shadow-2xl"
          />
        </div>
        <div className="md:mt-2 md:w-1/2">
          <h2 className="text-2xl font-bold mt-6 md:mt-0 md:text-6xl ">Hi, I&#39;m Mohammed Arbaz!</h2>
          <div className="w-fit">
            <h4 className="mt-4 mb-6 md:text-2xl font-semibold text-sky-800 animate-typing overflow-hidden whitespace-nowrap border-r-4" onAnimationIteration={(e: AnimationEvent) => change_text(e)}>{show}</h4>
          </div>
  <br />
          <a
            href={"/resume.pdf"}
            className="text-neutral-100 font-semibold px-6 py-3 bg-sky-700  rounded shadow hover:bg-sky-600"
            download={"resume-1.pdf"}
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