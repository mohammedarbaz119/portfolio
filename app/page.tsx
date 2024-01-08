import AboutSection from "./Components/About";
import Footer from "./Components/Footer";
import HeroSection from "./Components/Hero";
import Projects from "./Components/Projects";
import SectionHeading from "./Components/SectionHeading";
import Skills from "./Components/Skills";
import { skills } from "./ProjectAndSkillData";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <Skills skills={skills} />
      <SectionHeading>My projects</SectionHeading>
      <Projects />
      <Footer />
    </>
  );
}
