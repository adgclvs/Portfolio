import { useEffect, useState } from "react";
import About from "../components/sections/About";
import Contact from "../components/sections/Contact";
import Header from "../components/sections/Header";
import Projects from "../components/sections/Projects";
import Skills from "../components/sections/Skills";
import NavPoint from "../components/util/NavPoint";
import Navbar from "../components/util/Navbar";

const Home = () => {
  const [currentHeight, setCurrentHeight] = useState(0);
  const [canScroll, setCanScroll] = useState(true);
  const [currentSection, setCurrentSection] = useState(0);

  const handleScroll = () => {
    if (!canScroll) {
      return;
    }

    setCurrentHeight(window.scrollY);
    setCanScroll(false);

    setTimeout(() => {
      setCanScroll(true);
    }, 650);
  };

  const handleWheel = (event) => {
    if (event.deltaY > 0 && canScroll === true) {
      // Si la molette est descendante (scroll vers le bas)
      scrollNextSection();
    } else if (event.deltaY < 0 && canScroll === true) {
      scrollPreviousSection();
    }
  };

  const scrollNextSection = () => {
    const sectionHeight = window.innerHeight;
    const newCurrentSection = Math.floor(window.scrollY / sectionHeight);
    setCurrentSection((prevSection) => (prevSection === 4 ? prevSection : prevSection + 1));
    window.scrollTo({
      top: sectionHeight * (newCurrentSection + 1),
      behavior: "smooth",
    });
  };

  const scrollPreviousSection = () => {
    const sectionHeight = window.innerHeight;
    const newCurrentSection = Math.floor(window.scrollY / sectionHeight);
    setCurrentSection((prevSection) => (prevSection === 0 ? prevSection : prevSection - 1));
    window.scrollTo({
      top: sectionHeight * (newCurrentSection - 1),
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [currentHeight, canScroll]);

  return (
    <div className="home">
      <Navbar />
      <NavPoint sectionIndex={currentSection} />
      <Header />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </div>
  );
};

export default Home;
