const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "Mongodb" },
  { skill: "Node.js" },
  { skill: "Express.js" },
  { skill: "Next.js" },
  { skill: "Vue.js" },
  { skill: "Tailwind CSS" },
  { skill: "Bootstrap" },
  { skill: "Python" },
  { skill: "Flask" },
  { skill: "Java" },
  { skill: "Spring Boot" },
  { skill: "Git" },
  { skill: "Dart" },
  { skill: "GitHub" },
];

const AboutSection = () => {
  return (
    <section id="about" className="bg-teal-500 text-neutral-100">
      <div className="my-4 pb-4 md:py-8 md:pb-16 p-2">
        <h1 className="text-center font-bold text-2xl md:text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-2 bg-neutral-100 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-4 items-center justify-center md:space-x-4 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-full">
            <h1 className="text-center text-lg font-bold mb-2 md:text-left">
              Get to know me!
            </h1>
            <p className="mx-2 text-sm md:text-base">
              Hi, my name is Mohammed Arbazuddin Qureshi. I am a{" "}
              <span className="font-bold">highly ambitious</span> Computer
              Science student currently based in Hyderabad, India.
            </p>
            <p className="mx-2 text-sm md:text-base">
              I am currently in my third year of my Computer Science
              bachelor&#39;s degree at Muffakham Jah College of Engineering and
              Technology.
            </p>
          </div>
          <div className="text-center md:w-full md:text-left">
            <h1 className="text-lg font-bold mb-2 md:text-2xl">My Skills</h1>
            <div className="flex flex-wrap justify-center md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-slate-700 px-3 py-1 mr-2 mt-2 text-neutral-100 rounded font-semibold text-sm md:text-base"
                  >
                    {item.skill}
                  </p>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
