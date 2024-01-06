"use client";

import React, { useState, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";

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
    <section className="text-white bg-black py-8 sm:py-16 lg:py-24">
      <div
        className="container mx-auto flex flex-col-reverse sm:flex-row 
       items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="sm:w-full sm:max-w-md sm:pr-8 order-2 sm:order-1 sm:mx-auto sm:p-8 text-center sm:text-left"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4 text-gray-100">
            Hi, I&#39;m Mohammed Arbaz!
          </h2>
          <motion.h4
            className="text-2xl sm:text-3xl font-semibold mb-6 sm:mb-8 min-h-full text-teal-300 overflow-hidden whitespace-nowrap inline-block"
            initial={{ opacity: 1, scale: 1 }}
            animate={controls}
          >
            {show}
          </motion.h4>
          <p className="text-sm sm:text-base text-gray-300 mb-6 sm:mb-8">
            I&#39;m a third-year Computer Science student and dedicated
            full-stack developer. I specialize in crafting engaging and
            user-centric web applications, utilizing technologies like React for
            the frontend and Node.js for the backend. Let&#39;s collaborate to
            bring your ideas to life!
          </p>
          <div className="flex flex-col items-center sm:items-start">
            <a
              href="/resume.pdf"
              className="text-teal-300 font-semibold px-8 py-3 bg-gray-800 rounded shadow hover:bg-gray-700"
              download="resume.pdf"
            >
              Download Resume
            </a>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="sm:w-full sm:max-w-md order-1 sm:order-2 flex items-center justify-center mb-8 sm:mb-0 sm:ml-8"
        >
          <div className="relative rounded-full overflow-hidden w-40 h-40 sm:w-80 sm:h-80 shadow-2xl">
            <Image
              src="/profile1.jpeg"
              alt=""
              width={500}
              height={500}
              className="rounded-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

// import React, { useState, useEffect } from "react";
// import { motion, useAnimation } from "framer-motion";
// import Image from "next/image";

// // ... (imports remain unchanged)

// const Hero = () => {
//   const intro: string[] = [
//     "Computer Science Student",
//     "Full Stack Developer",
//     "Open Source Enthusiast",
//   ];
//   const [show, setShow] = useState(intro[0]);
//   const controls = useAnimation();

//   useEffect(() => {
//     let index = 0;

//     const interval = setInterval(() => {
//       controls.start({ opacity: 0, scale: 0.9 }); // Fade out before changing text
//       setTimeout(() => {
//         index = (index + 1) % intro.length;
//         setShow(intro[index]);
//         controls.start({ opacity: 1, scale: 1 }); // Fade in after changing text
//       }, 500); // Adjust the delay based on your preference
//     }, 2000); // Adjust the interval to 3000 milliseconds (3 seconds)

//     return () => clearInterval(interval);
//   }, [controls]);

//   return (
//     <section id="home" className="text-neutral-100">
//       <div className="flex flex-col items-center justify-center animate-fadeIn animation-delay-2 my-6 py-8 sm:py-16 md:py-20 lg:py-32 md:flex-row md:space-x-4 md:text-left">
//         <div className="md:w-1/2 px-1.5 flex items-center justify-center">
//           <div className="relative rounded-full overflow-hidden w-64 h-64 md:w-96 md:h-96 shadow-2xl">
//             <Image
//               src={"/profile1.jpeg"}
//               alt=""
//               width={500}
//               height={500}
//               className="rounded-full"
//             />
//           </div>
//           <br />
//         </div>
//         <div className="md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
//           <div className="md:mx-6">
//             <h2 className="text-4xl sm:text-2xl font-bold mt-6 md:mt-0 md:text-6xl text-black">
//               Hi, I&#39;m Mohammed Arbaz!
//             </h2>
//             <motion.h4
//               className="mt-4 mb-6 md:text-3xl min-h-full font-semibold text-sky-800 overflow-hidden whitespace-nowrap inline-block"
//               initial={{ opacity: 1, scale: 1 }} // Adjust initial properties
//               animate={controls}
//             >
//               {show}
//             </motion.h4>
//             <div className="flex flex-col items-center md:items-start mt-4 md:mt-0">
//               <a
//                 href={"/resume.pdf"}
//                 className="text-neutral-100 font-semibold px-6 py-3 bg-sky-700 rounded shadow hover:bg-sky-600 mt-2 md:mt-0"
//                 download={"resume.pdf"}
//               >
//                 Resume
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
