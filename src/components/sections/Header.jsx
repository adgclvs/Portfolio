import { default as React, useEffect, useState } from "react";
import Circles from "../util/Circles";

const Header = () => {
  const [showMain, setShowMain] = useState(false);
  const [showTech, setShowTech] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setShowMain(true);
    }, 500);
  }, [showMain]);

  useEffect(() => {
    setTimeout(() => {
      setShowTech(true);
    }, 750);
  }, [showTech]);

  return (
    <div className={`header ${showMain ? "show" : ""}`} id="header">
      <Circles indexSection={0} />
      <div className="myself">
        <div className="introduce">
          <h1>
            Student Blockchain <br /> Developer
          </h1>
          <p>
            Hello, I am Adrien Gonçalves, a 20-year-old passionate about blockchain. I am currently
            studying information technology at the University of Bordeaux, and my goal is to become
            a blockchain engineer in the future.
          </p>
          <a href="https://www.linkedin.com/in/adrien-goncalves-769043267/" target="_blank">
            <span>
              <i class="fa-brands fa-linkedin fa-xl"></i>
            </span>
          </a>
          <a href="https://github.com/adgclvs" target="_blank">
            <span>
              <i class="fa-brands fa-github fa-xl"></i>
            </span>
          </a>
        </div>
        <img
          src="../assets/img/profile-picture.png"
          alt="Photo de profile"
          width="200px"
          height="200px"
        />
      </div>

      <div className={`technologies ${showTech ? "show" : ""}`}>
        <p>Tech Stack </p>
        <div className="pipe">
          <i class="fa-solid fa-pipe"></i>
        </div>
        <ul>
          <li>
            <img src="../assets/img/icon-html.png" alt="Logo HTML" width="25px" height="25px" />
          </li>
          <li>
            <img src="../assets/img/icon-css.png" alt="Logo CSS" width="25px" height="25px" />
          </li>
          <li>
            <img src="../assets/img/icon-js.png" alt="Logo JavaScript" width="25px" height="25px" />
          </li>
          <li>
            <img src="../assets/img/icon-react.png" alt="Logo React" width="25px" height="25px" />
          </li>
          <li>
            <img src="../assets/img/icon-sass.png" alt="Logo Sass" width="25px" height="25px" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
