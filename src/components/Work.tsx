import image1 from "../assets/project1.webp";
import image2 from "../assets/project2.webp";

const Work = () => {
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
    <div className="border-t-2 pt-16 mt-20 ">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl md:text-2xl font-medium">Featured Work</h2>
        <a
          className="p-2.5 px-5 rounded-full justify-center items-center bg-neutral-100 hover:ring-neutral-900 transition-all duration-100 gap-3 ring-1 ring-white"
          href="/work"
        >
          All projects
        </a>
      </div>
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
    </div>
  );
};

export default Work;
