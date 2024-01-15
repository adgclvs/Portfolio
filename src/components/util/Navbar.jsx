import React, { useEffect, useState } from "react";

const Navbar = () => {
  const [indexSection, setIndexSection] = useState(0);
  const [canScroll, setCanScroll] = useState(true);
  const numberOfSections = 5;

  useEffect(() => {
    console.log(indexSection);
    const handleScroll = () => {
      if (canScroll) {
        setCanScroll(false);
        setTimeout(() => setCanScroll(true), 500);
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
    };
  }, [canScroll]);

  const handleClick = (index) => {
    setIndexSection(index);
    window.scrollTo({
      top: index * window.innerHeight,
      behavior: "smooth",
    });
  };

  const handleWheel = (event) => {
    if (!canScroll) return;
    if (event.deltaY > 0) scrollNextSection();
    else if (event.deltaY < 0) scrollPreviousSection();
  };

  const scrollNextSection = () => {
    const newSection = indexSection < numberOfSections - 1 ? indexSection + 1 : indexSection;
    setIndexSection(newSection);
    scrollToSection(newSection);
  };

  const scrollPreviousSection = () => {
    const newSection = indexSection > 0 ? indexSection - 1 : indexSection;
    setIndexSection(newSection);
    scrollToSection(newSection);
  };

  const scrollToSection = (sectionIndex) => {
    window.scrollTo({
      top: sectionIndex * window.innerHeight,
      behavior: "smooth",
    });
  };

  const renderNavigationButtons = () => {
    return Array.from({ length: numberOfSections }, (_, index) => (
      <button
        key={index}
        className={`point ${indexSection === index ? "active" : ""}`}
        onClick={() => handleClick(index)}
      >
        <i className="fa-solid fa-circle fa-2xs"></i>
      </button>
    ));
  };

  return (
    <div className="navbar">
      <div className={`top`}>
        <h3>Adrien.dev</h3>
        <ul>
          {["Home", "About", "Projects", "Skills", "Contact"].map((item, index) => (
            <li key={index} onClick={() => handleClick(index)}>
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className={`nav-point`}>
        <ul>{renderNavigationButtons()}</ul>
      </div>
    </div>
  );
};

export default Navbar;
