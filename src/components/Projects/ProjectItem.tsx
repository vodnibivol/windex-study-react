interface ProjectItemProps {
  image: string;
  category: string;
  title: string;
}

const ProjectItem = ({ image, category, title }: ProjectItemProps) => {
  return (
    <div className="project-item">
      <div className="img">
        <img src={'/img/' + image + '.png'} alt="Turbines" />
      </div>
      <h3 className="category text-gray upper">{category}</h3>
      <h2 className="title">{title}</h2>
    </div>
  );
};

export default ProjectItem;
