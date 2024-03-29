"use client";

import React from "react";
import { projects } from "@/app/ProjectAndSkillData";
import Project from "./Project";

export default function Projects() {
  return (
    <section className=" flex items-center justify-center bg-gray-900 text-white pb-6">
      <div>
        {projects.map((project, index) => (
          <React.Fragment key={index}>
            <Project {...project} />
          </React.Fragment>
        ))}
      </div>
    </section>
  );
}
