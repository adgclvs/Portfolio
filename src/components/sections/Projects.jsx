import React from "react";
import Circles from "../util/Circles";
import Project from "../util/Project";

const Projects = () => {
  return (
    <div className="myprojects" id="projects">
      <Circles indexSection={2} />
      <Project projectId={0} />
      <Project projectId={1} />
      <Project projectId={2} />
    </div>
  );
};

export default Projects;
