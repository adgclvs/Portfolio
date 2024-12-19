type ProjectProps = {
    title: string;
    description: string;
    link: string;
  };
  
  const ProjectCard: React.FC<ProjectProps> = ({ title, description, link }) => {
    return (
      <div>
        <h2>{title}</h2>
        <p>{description}</p>
        <a href={link}>Voir le projet</a>
      </div>
    );
  };
  
  export default ProjectCard;
  