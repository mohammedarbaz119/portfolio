import Html from "../public/skills/html.png";
import Css from "../public/skills/css.png";
import Javascript from "../public/skills/javascript.png";
import ReactImg from "../public/skills/react.png";
import Tailwind from "../public/skills/tailwind.png";
import Github from "../public/skills/github1.png";
import Firebase from "../public/skills/firebase.png";
import Java from "../public/skills/java.png";
import Spring from "@/public/skills/SpringBoot.jpg"
import Flask from "../public/skills/flask.jpg";
import NextJS from "../public/skills/nextjs.png";
import Python from "../public/skills/python.png";
import typescript from "../public/skills/typescript.png";
import Node from "../public/skills/node.png";
import express from "../public/skills/Express.jpg";
import Mongo from "../public/skills/mongo.png";


export type SkillSingle = typeof skills[number];
export type AllSkill = typeof skills
export const skills = [
  { skill: "HTML", logo: Html },
  { skill: "CSS", logo: Css },
  { skill: "JavaScript", logo: Javascript },
  { skill: "TypeScript", logo: typescript },
  { skill: "React", logo: ReactImg },
  { skill: "Mongodb", logo: Mongo },
  { skill: "Node.js", logo: Node },
  { skill: "Express.js", logo: express },
  { skill: "Next.js", logo: NextJS },
  // { skill: "Vue.js" },
  { skill: "Tailwind CSS", logo: Tailwind },
  { skill: "Firebase", logo: Firebase },
  // { skill: "Bootstrap" },
  // { skill: "Python" , logo:Python},
  { skill: "Flask", logo: Flask },
  { skill: "Java", logo: Java },
  { skill: "Spring Boot", logo: Spring },
  { skill: "GitHub", logo: Github },
];

interface ProjectDescription {
  name: string;
  description: string;
  imageUrl: string;
  tech: string[];
  github: string;
  link?: string;
}

export const projects: ProjectDescription[] = [
  {
    name: "MovieReviews",
    description:
      "MovieReviews is a web app where users can see the reviews of the movies and can also add their reviews.",
    imageUrl: "/reviewsapp.png",
    tech: ["React.js", "Spring boot", "MongoDB"],
    github: "https://github.com/mohammedarbaz119/Spring-Boot",
  },
  
  
  {
    name: "cropSmart",
    description:
      "Project uses machine learning for Crop and Fertilizer Recommendations using soil data. Also employs imageUrl recognition for rapid crop disease diagnosis from user-uploaded images, enhancing agricultural productivity..",
    imageUrl: "/cropsmart.png",
    tech: ["Flask", "Python", "HTML", "CSS", "JavaScript", "Scikit-learn"],
    github: "https://github.com/nihal3000/harvestify",
    link: "https://cropsmart-r9fx.onrender.com/",
  },
  {
    name: "Blog App",
    description:
      "Blog App is a web app where users can share their posts and follow others to see their content.",
    imageUrl: "/bloglite.jpg",
    tech: ["HTML", "Jinja2", "Flask", "Bootstrap", "SQLite"],
    github: "https://github.com/asdsyd/bloglite",
  },
  {
    name: "Portfolio",
    description: "This is my portfolio website",
    imageUrl: "/portfolio2.png",
    tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
    github: "https://github.com/mohammedarbaz119/portfolio",
    link: "https://portfolio-mohammedarbaz119.vercel.app/",
  },
  {
    name: "Notes App",
    description:
      "Notes App is a web app where we can create notes for ourselves.",
    imageUrl: "/notes.png",
    tech: ["React.js", "TypeScript", "CSS"],
    github: "https://github.com/mohammedarbaz119/Notes-App",
  },
  {
    name: "TicketShow",
    description:
      "TicketShow is a web app where users can book tickets for movies and can also see the reviews of the movies.",
    tech: ["Vue.js", "CSS","Flask", "SqlLite", "HTML","Redis"],
    github: "https://github.com/asdsyd/appdev2",
    imageUrl: "/TicketShow.jpeg",
  },
  
  
  {
    name: "Prioritize Future",
    description:
      "Prioritizing tasks is a critical skill for effective time management. By prioritizing tasks, you can ensure that you are spending your time on the most important and urgent tasks, rather than getting bogged down in less important ones.",
    imageUrl: "/proiritze.jpg",
    tech: ["HTML", "CSS", "JavaScript"],
    github: "https://github.com/Mubashir-Md/Prioritize-Future",
    link: "https://prioritizefuture.com/",
  },

];