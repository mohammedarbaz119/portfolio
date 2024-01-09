import React from "react";
import Skill from "./Skill";
import type { AllSkill, SkillSingle as puchi } from "../ProjectAndSkillData";

const Skills = ({ skills }: { skills: AllSkill }) => {
  return (
    <div id="skills" className="w-full lg:h-screen p-2 md:py-16 bg-gray-900">
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
