import React from "react";
import Button from "../util/Button";
import Circles from "../util/Circles";
import Project from "../util/Project";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <Circles indexSection={2} />
      <div className="projects-content">
        <div className="myprojects">
          <Project projectId={0} />
          <Project projectId={1} />
          <Project projectId={2} />
        </div>
        <div className="projects-button">
          <Button index={0} page={"my-projects"} />
        </div>
      </div>
    </div>
  );
};

export default Projects;
