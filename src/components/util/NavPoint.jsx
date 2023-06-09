import React, { useEffect, useState } from "react";

const NavPoint = () => {
  const [computedStyleHeader, setComputedStyleHeader] = useState(null);
  const [computedStyleAbout, setComputedStyleAbout] = useState(null);
  const [computedStyleProjects, setComputedStyleProjects] = useState(null);
  const [computedStyleSkills, setComputedStyleSkills] = useState(null);

  const [valueScroll, setValueScroll] = useState(0);

  useEffect(() => {
    const header = document.getElementById("header");
    const computedStyleHeader = window.getComputedStyle(header);
    setComputedStyleHeader(computedStyleHeader);

    const about = document.getElementById("about");
    const computedStyleAbout = window.getComputedStyle(about);
    setComputedStyleAbout(computedStyleAbout);

    const projects = document.getElementById("projects");
    const computedStyleProjects = window.getComputedStyle(projects);
    setComputedStyleProjects(computedStyleProjects);

    const skills = document.getElementById("skills");
    const computedStyleSkills = window.getComputedStyle(skills);
    setComputedStyleSkills(computedStyleSkills);
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", () => setValueScroll(window.scrollY));
  }, []);

  return (
    <div className="nav-point">
      <ul>
        <button
          id={valueScroll < 450 ? "button" : ""}
          onClick={() => {
            window.scrollTo({
              top: 0,
              behavior: "smooth",
            });
          }}
          style={{ cursor: "pointer" }}
        >
          <i class="fa-solid fa-circle fa-2xs"></i>
        </button>
        <button
          id={valueScroll < 1400 && valueScroll > 450 ? "button" : ""}
          onClick={() => {
            window.scrollTo({
              top: parseInt(computedStyleHeader.height),
              behavior: "smooth",
            });
          }}
          style={{ cursor: "pointer" }}
        >
          <i class="fa-solid fa-circle fa-2xs"></i>
        </button>
        <button
          id={valueScroll < 2050 && valueScroll > 1400 ? "button" : ""}
          // ATTENTION ici peut-etre que lorsque la taille de myprojects sera plus grande que 100vh il faudra chager les valeur pour le scroll
          onClick={() => {
            window.scrollTo({
              top: parseInt(computedStyleHeader.height) + parseInt(computedStyleAbout.height),
              behavior: "smooth",
            });
          }}
          style={{ cursor: "pointer" }}
        >
          <i class="fa-solid fa-circle fa-2xs"></i>
        </button>
        <button
          id={valueScroll < 3500 && valueScroll > 2050 ? "button" : ""}
          onClick={() => {
            window.scrollTo({
              top:
                parseInt(computedStyleHeader.height) +
                parseInt(computedStyleAbout.height) +
                parseInt(computedStyleProjects.height),
              behavior: "smooth",
            });
          }}
          style={{ cursor: "pointer" }}
        >
          <i class="fa-solid fa-circle fa-2xs"></i>
        </button>
        <button
          id={valueScroll > 3500 ? "button" : ""}
          onClick={() => {
            window.scrollTo({
              top:
                parseInt(computedStyleHeader.height) +
                parseInt(computedStyleAbout.height) +
                parseInt(computedStyleProjects.height) +
                parseInt(computedStyleSkills.height),
              behavior: "smooth",
            });
          }}
          style={{ cursor: "pointer" }}
        >
          <i class="fa-solid fa-circle fa-2xs"></i>
        </button>
      </ul>
    </div>
  );
};

export default NavPoint;
