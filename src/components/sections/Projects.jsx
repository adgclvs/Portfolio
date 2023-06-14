import React from "react";
import NavPoint from "../util/NavPoint";
import Project from "../util/Project";

const Projects = () => {
  return (
    <div className="myprojects" id="projects">
      <NavPoint />
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
      <Project projectId={2} />
      <Project projectId={2} />
      <Project projectId={2} />
    </div>
  );
};

export default Projects;
