import { ProjectProps } from "../types/projectProps";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import StackIcon from "./StackIcon";
import GithubIcon from "./icons/GithubIcon";

const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="p-4 bg-background_alt rounded-lg max-w-md ">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold mb-2">{project.title}</h2>
        <div>
          <a href={project.liveDemo} target="_blank" rel="noopener noreferrer" className="text-text-low">
            <OpenInNewIcon className="m-1" />
          </a>
          <a href={project.github} target="_blank" rel="noopener noreferrer" className="">
            <GithubIcon size={16} />
          </a>
        </div>
      </div>
      <p className="mb-4">{project.description}</p>
      <ul className="mt-4 flex space-x-4">
        {project.stacks.map((stack: string) => (
          <li key={stack} className="flex items-center">
            <StackIcon stack={stack} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
