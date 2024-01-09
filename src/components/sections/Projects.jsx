import { default as React, forwardRef } from "react";
import Project from "../util/Project";

const Projects = forwardRef((props, ref) => {
  return (
    <div className="myprojects" id="projects">
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
      <Project projectId={0} />
      <Project projectId={0} />
    </div>
  );
});

export default Projects;
