function ProjectCard({ title, text }) {
  return (
    <div className="project">
      <p>
        <strong>{title} </strong> - {text}
      </p>
    </div>
  );
}

export default ProjectCard;
