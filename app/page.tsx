import ProjectCard from "./components/ProjectCard";
import projects from "./data/projects";

export default function Home() {
  return (
    <main>
      {projects.map((project) => (
        <li key={project.title}>
          <ProjectCard project={project} />
        </li>
      ))}
    </main>
  );
}
