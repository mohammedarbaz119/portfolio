const skills = [
  { skill: "HTML" },
  { skill: "CSS" },
  { skill: "JavaScript" },
  { skill: "TypeScript" },
  { skill: "React" },
  { skill: "Mongodb" },
  { skill: "Node.js" },
  { skill: "express.js" },
  { skill: "Next.js" },
  { skill: "Vue.js" },
  { skill: "Tailwind CSS" },
  { skill: "BootStrap" },
  { skill: "Python" },
  { skill: "Flask" },
  { skill: "Java" },
  { skill: "Spring Boot" },
  { skill: "Git" },
  { skill: "Dart" },
  { skill: "GitHub" },

]

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p className="ml-2 mr-1">
              Hi,My name is Mohammed Arbazuddin Qureshi <br /> I am a{" "}
              <span className="font-bold">{"highly ambitious"}</span>{" "}
              Computer Science Student currently based in Hyderabad,India
            </p>
            <br />
            <p className="mx-1">
              I am currently in my Third year of My Computer science bachelor&apos;s degree in Muffakham Jah College 
              of Engg and Technology
            </p>
            <br />
            <p>
        
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <p
                    key={idx}
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold"
                  >
                    {item.skill}
                  </p>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection