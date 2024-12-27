type ProjectProps = {
  title: string;
  description: string;
  link: string;
  stack: string[];
};

const ProjectCard: React.FC<ProjectProps> = (project) => {
  return (
    <div>
      <h2>{project.title}</h2>
      <p>{project.description}</p>
      <a href={project.link}>Voir le projet</a>
      <ul>
        {project.stack.map((tech) => (
          <li key={tech}>{tech}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProjectCard;
