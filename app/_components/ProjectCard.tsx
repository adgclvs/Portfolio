import { ProjectProps } from "../types/projectProps";
import OpenInNewIcon from "@mui/icons-material/OpenInNew";
import StackIcon from "./StackIcon";
import GithubIcon from "./icons/GithubIcon";
import {buttonVariants } from "@/components/ui/button";
import Link from "next/link";
import { cn } from "@/lib/utils";


const ProjectCard: React.FC<ProjectProps> = ({ project }) => {
  return (
    <div className="p-4 bg-background_alt rounded-lg max-w-md ">
      <div className="flex justify-between items-center">
        <h2 className="text-xl font-bold mb-2">{project.title}</h2>
        <div>
          <Link href={project.github} className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")}>
            <GithubIcon size={16} />
          </Link>

          <Link href={project.liveDemo} className={cn(buttonVariants({variant: "outline"}), "size-6 p-0")}>
            <OpenInNewIcon className="m-1" />
          </Link>
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
