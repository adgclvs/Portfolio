import React from "react";

import ProjectCard from "./ProjectCard";
import projects from "../data/projects";
import Section from "./Section";

const Projects = () => {
  return (
    <Section className="mt-48">
    <div className=" flex flex-col m-4 mx-auto rounded-lg">
      <h2 className="text-center m-4 text-4xl">Projects</h2>
      <ul className=" flex ">
        {projects.map((project) => (
          <li key={project.title} className="m-4">
            <ProjectCard project={project} />
          </li>
        ))}
      </ul>
    </div>
    </Section>
  );
};

export default Projects;
