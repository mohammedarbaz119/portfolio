import AboutSection from "./Components/About";
import Footer from "./Components/Footer";
import HeroSection from "./Components/Hero";
import Projects from "./Components/Projects";
import SectionHeading from "./Components/SectionHeading";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <SectionHeading>My projects</SectionHeading>
      <Projects />
      <Footer />
    </>
  );
}
