import About from "@/components/About";
import Experience from "@/components/Experience";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";

const HomePage = () => {
  return (
    <>
      <Hero />
      <Skills></Skills>
      <Projects></Projects>
      <div className="border-b border-gray-600">
        <About></About>
      </div>
      <Experience></Experience>
    </>
  );
};

export default HomePage;
