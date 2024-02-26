import { default as React, useEffect, useState } from "react";
import Circles from "../util/Circles";

const technologies = [
  { src: "../assets/img/icon/icon-react.png", alt: "React" },
  { src: "../assets/img/icon/icon-solidity.png", alt: "Solidity" },
  { src: "../assets/img/icon/icon-sass.png", alt: "Sass" },
  { src: "../assets/img/icon/icon-etherscan.png", alt: "EtherScan" },
  { src: "../assets/img/icon/icon-github.png", alt: "GitHub" },
];

const TechItem = ({ src, alt }) => (
  <li>
    <img src={src} alt={alt} width="25px" height="25px" />
  </li>
);

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
      <div className="header-content">
        <div className="myself">
          <div className="introduce">
            <h1>
              Student Blockchain <br /> Developer
            </h1>
            <p>
              Hello, my name is Adrien Goncalves, and I am a 20-year-old who is passionate about
              blockchain. I am currently studying information technology at the University of
              Bordeaux, with the aim of becoming a blockchain engineer in the future.
            </p>
            <a
              href="https://www.linkedin.com/in/adrien-goncalves-769043267/"
              target="_blank"
              rel="noopener noreferrer"
            >
              {"  "}
              <span>
                <i className="fa-brands fa-linkedin fa-xl"></i>
              </span>
            </a>
            <a href="https://github.com/adgclvs" target="_blank" rel="noopener noreferrer">
              <span>
                <i className="fa-brands fa-github fa-xl"></i>
              </span>
            </a>
          </div>
          <img src="../assets/img/profile_picture.png" alt="profile" width="300px" height="300px" />
        </div>

        <div className={`technologies ${showTech ? "show" : ""}`}>
          <p>Tech Stack </p>
          <ul>
            {technologies.map((tech, index) => (
              <TechItem key={index} src={tech.src} alt={tech.alt} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
