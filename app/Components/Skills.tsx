import React from "react";
import Skill from "./Skill";
import type { AllSkill, SkillSingle as puchi } from "../ProjectAndSkillData";

// const Skills = () => {
//   return (
//     <div id="skills" className="w-full lg:h-screen p-2">
//       <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
//         <p className="text-xl tracking-widest uppercase text-[#5651e5]">
//           Skills
//         </p>
//         <h2 className="py-4">What I Can Do</h2>
//         <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
//           <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
//             <div className="grid grid-cols-2 gap-4 justify-center items-center">
//               <div className="m-auto">
//                 <Image src={Html} width={64} height={64} alt="/" />
//               </div>
//               <div className="flex flex-col items-center justify-center">
//                 <h3>HTML</h3>
//               </div>
//             </div>
//           </div>
//           <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
//             <div className="grid grid-cols-2 gap-4 justify-center items-center">
//               <div className="m-auto">
//                 <Image src={Css} width={64} height={64} alt="/" />
//               </div>
//               <div className="flex flex-col items-center justify-center">
//                 <h3>CSS</h3>
//               </div>
//             </div>
//           </div>
//           <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
//             <div className="grid grid-cols-2 gap-4 justify-center items-center">
//               <div className="m-auto">
//                 <Image src={Javascript} width={64} height={64} alt="/" />
//               </div>
//               <div className="flex flex-col items-center justify-center">
//                 <h3>JavaScript</h3>
//               </div>
//             </div>
//           </div>
//           <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
//             <div className="grid grid-cols-2 gap-4 justify-center items-center">
//               <div className="m-auto">
//                 <Image src={ReactImg} width={64} height={64} alt="/" />
//               </div>
//               <div className="flex flex-col items-center justify-center">
//                 <h3>React</h3>
//               </div>
//             </div>
//           </div>
//           <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
//             <div className="grid grid-cols-2 gap-4 justify-center items-center">
//               <div className="m-auto">
//                 <Image src={Tailwind} width={64} height={64} alt="/" />
//               </div>
//               <div className="flex flex-col items-center justify-center">
//                 <h3>Tailwind</h3>
//               </div>
//             </div>
//           </div>
//           <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
//             <div className="grid grid-cols-2 gap-4 justify-center items-center">
//               <div className="m-auto">
//                 <Image src={Firebase} width={64} height={64} alt="/" />
//               </div>
//               <div className="flex flex-col items-center justify-center">
//                 <h3>Firebase</h3>
//               </div>
//             </div>
//           </div>
//           <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
//             <div className="grid grid-cols-2 gap-4 justify-center items-center">
//               <div className="m-auto">
//                 <Image
//                   src={Github}
//                   loading="lazy"
//                   width={64}
//                   height={64}
//                   alt="/"
//                 />
//               </div>
//               <div className="flex flex-col items-center justify-center">
//                 <h3>Github</h3>
//               </div>
//             </div>
//           </div>
//           <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300">
//             <div className="grid grid-cols-2 gap-4 justify-center items-center">
//               <div className="m-auto">
//                 <Image
//                   src={NextJS}
//                   loading="lazy"
//                   width={64}
//                   height={64}
//                   alt="/"
//                 />
//               </div>
//               <div className="flex flex-col items-center justify-center">
//                 <h3>Next</h3>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Skills;
const Skills = ({ skills }: { skills: AllSkill }) => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2 bg-gray-900">
      <div className="max-w-[1240px] mx-auto flex flex-col justify-center h-full">
        <p className="text-xl md:text-4xl tracking-widest uppercase text-[#5651e5] ">
          Skills
        </p>
        <h2 className="py-4 text-white">What I Can Do</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {skills.map((skill, index) => (
            <Skill key={index} skill={skill.skill} logo={skill.logo} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;
