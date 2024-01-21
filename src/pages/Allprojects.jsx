import React from "react";
import Button from "../components/util/Button";
import Project from "../components/util/Project";

const Allprojects = () => {
  return (
    <div className="allprojects">
      <div className="allprojects-content">
        <Project projectId={0} />
        <Project projectId={1} />
        <Project projectId={2} />
      </div>
      <Button index={1} page={"projects"} />
    </div>
  );
};

export default Allprojects;
