import React from 'react'

import ProjectCard from "./ProjectCard";
import projects from "../data/projects";

const Projects = () => {
    return (
        <div className=' w-2/3 flex flex-col m-4 mx-auto rounded-lg'>
            <h2 className='text-center m-4 text-4xl'>Projects</h2>
            <ul className=' flex '>
            {projects.map((project) => (
                <li key={project.title} className='m-4'>
                <ProjectCard project={project} />
                </li>
            ))}
            </ul>
        </div>
    );
};

export default Projects