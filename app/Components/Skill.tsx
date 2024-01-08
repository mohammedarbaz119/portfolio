import Image from "next/image";
import React from "react";
import type { SkillSingle } from "@/app/ProjectAndSkillData";

const Skill = ({ skill, logo }: SkillSingle) => {
  return (
    <div className="p-6 shadow-xl rounded-xl hover:scale-105 ease-in duration-300 bg-gray-600">
      <div className="grid grid-cols-2 gap-4 justify-center items-center">
        <div className="m-auto">
          <Image
            src={logo}
            loading="lazy"
            width={64}
            height={64}
            alt="/"
            className="text-white"
          />
        </div>
        <div className="flex flex-col items-center justify-center text-white">
          <h3>{skill}</h3>
        </div>
      </div>
    </div>
  );
};

export default Skill;
