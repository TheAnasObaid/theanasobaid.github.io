import image1 from "../assets/project1.webp";
import image2 from "../assets/project2.webp";

const ProjectsGrid = () => {
  const projects = [
    {
      image: image1,
      heading: "Heading",
      subtitle: "Subtitle",
    },
    {
      image: image2,
      heading: "Heading",
      subtitle: "Subtitle",
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-y-12 gap-6 mb-20">
      {projects.map((project) => (
        <article>
          <img
            className="rounded-2xl mb-5 h-52 md:h-[420px] w-full object-cover"
            src={project.image}
            alt=""
          />
          <h3 className="text-xl md:text-2xl font-medium mb-1">
            {project.heading}
          </h3>
          <p className="text-xl md:text-2xl text-neutral-400">
            {project.subtitle}
          </p>
        </article>
      ))}
    </div>
  );
};

export default ProjectsGrid;
