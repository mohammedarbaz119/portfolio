import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <section id="projects">
      <h2 className="md:text-4xl text-3xl md:py-24 font-medium capitalize text-center text-white bg-gray-900  py-10">
        {children}
        <hr className="w-6 h-1 mx-auto my-2 bg-gray-500 border-0 rounded"></hr>
      </h2>
    </section>
  );
}
