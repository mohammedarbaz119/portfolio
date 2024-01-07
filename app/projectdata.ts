interface ProjectDescription {
    name: string;
    description: string;
    imageUrl: string;
    tech: string[];
    github: string;
    link?: string;
  }

 export  const projects: ProjectDescription[] = [
    {
      name: "Prioritize Future",
      description:
        "Prioritizing tasks is a critical skill for effective time management. By prioritizing tasks, you can ensure that you are spending your time on the most important and urgent tasks, rather than getting bogged down in less important ones.",
      imageUrl: "/proiritze.jpg",
      tech: ["HTML", "CSS", "JavaScript"],
      github: "https://github.com/Mubashir-Md/Prioritize-Future",
      link: "https://prioritizefuture.com/",
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
      name: "Notes App",
      description:
        "Notes App is a web app where we can create notes for ourselves.",
      imageUrl: "/notes.png",
      tech: ["React.js", "TypeScript", "CSS"],
      github: "https://github.com/mohammedarbaz119/Notes-App",
    },
    {
      name: "Portfolio",
      description: "This is my portfolio website",
      imageUrl: "/portfolio.png",
      tech: ["React.js", "Next.js", "TypeScript", "Tailwind CSS"],
      github: "https://github.com/mohammedarbaz119/portfolio",
      link: "https://portfolio-mohammedarbaz119.vercel.app/",
    },
    {
      name: "cropSmart",
      description:
        "This research project harnesses machine learning to aid Indian farmers by enhancing Crop and Fertilizer Recommendation Systems. It analyzes soil quality and mineral content data to recommend crops and fertilizers. The project also utilizes imageUrl recognition to swiftly diagnose crop diseases from user-uploaded imageUrls, ultimately boosting agricultural productivity and empowering farmers with critical decision-making insights.",
      imageUrl: "/cropSmart.png",
      tech: ["Flask", "Python", "HTML", "CSS", "JavaScript", "Scikit-learn"],
      github: "https://github.com/nihal3000/harvestify",
      link: "https://cropsmart-r9fx.onrender.com/",
    },
    {
      name: "MovieReviews",
      description:
        "MovieReviews is a web app where users can see the reviews of the movies and can also add their reviews.",
      imageUrl: "/rveiewsapp.png",
      tech: ["React.js", "Spring boot", "MongoDB"],
      github: "https://github.com/mohammedarbaz119/Spring-Boot",
    },
  ];