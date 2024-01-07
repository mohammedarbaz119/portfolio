"use client";

import React from "react";
import SectionHeading from "./SectionHeading";
import { projects } from "@/app/projectdata";
import Project from "./Project";

export default function Projects() {
  return (
    <section
      id="projects"
      className="scroll-mt-28  flex items-center justify-center bg-black text-white pb-6"
    >
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
