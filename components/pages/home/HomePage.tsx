import About from "./About/About";
import AboutMe from "./AboutMe/AboutMe";
import Courses from "./Courses/Courses";
import Discover from "./Discover/Discover";
import Hero from "./Hero/Hero";

const HomePage = () => {
  return (
    <>
      <Hero />
      <About />
      <Courses />
      <AboutMe />
      <Discover />
    </>
  );
};

export default HomePage;
