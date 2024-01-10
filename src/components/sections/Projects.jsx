import React from "react";
import Circles from "../util/Circles";
import Project from "../util/Project";

const Projects = () => {
  return (
    <div className="myprojects" id="projects">
      <Circles indexSection={2} />
      {/* {valueScroll > 250 && (
        <div style={style}>
          <Project projectId={0} />
        </div>
      )}
      {valueScroll > 500 && (
        <div style={style}>
          <Project projectId={1} />
        </div>
      )}
      {valueScroll > 1000 && (
        <div style={style}>
          <Project projectId={2} />
        </div>
      )} */}
      <Project projectId={0} />
      <Project projectId={1} />
      <Project projectId={2} />
    </div>
  );
};

export default Projects;
