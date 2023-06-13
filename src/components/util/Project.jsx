import React, { useEffect, useState } from "react";
import { projectsData } from "../../data/projectsData";

const Project = ({ projectId }) => {
  const [currentProject] = useState(projectsData[projectId]);
  const [positionImg, setPositionImg] = useState(false);

  useEffect(() => {
    if (currentProject.id % 2 == 0) {
      setPositionImg(true);
    }
  }, []);

  return (
    <div className="project">
      {positionImg && <img src={currentProject.img} alt={`Picture of ${currentProject.title}`} />}
      <div className="project-content">
        <h1>{currentProject.title.toUpperCase()}</h1>
        <p>{currentProject.infos}</p>
        <div className="project-languages">
          {currentProject.languages.map((item) => {
            return <li key={item}>{item}</li>;
          })}
        </div>
        <div className="project-link">
          <a href={currentProject.github} target="_blank">
            Code{" "}
            <span>
              <i class="fa-brands fa-github fa-xl"></i>
            </span>
          </a>
          <a href={currentProject.link} target="_blank">
            Live Demo{" "}
            <span>
              <i class="fa-regular fa-arrow-up-right-from-square"></i>
            </span>
          </a>
        </div>
      </div>
      {!positionImg && <img src={currentProject.img} alt={`Picture of ${currentProject.title}`} />}
    </div>
  );
};

export default Project;
