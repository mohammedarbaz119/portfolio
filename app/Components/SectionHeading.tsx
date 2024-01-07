import React from "react";

type SectionHeadingProps = {
  children: React.ReactNode;
};

export default function SectionHeading({ children }: SectionHeadingProps) {
  return (
    <h2 className="text-3xl font-medium capitalize text-center text-white bg-black p-5">
      {children}
    </h2>
  );
}
