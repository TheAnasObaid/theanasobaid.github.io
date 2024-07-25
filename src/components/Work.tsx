import ProjectsGrid from "./ProjectsGrid";

const Work = () => {
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
      <ProjectsGrid />
    </div>
  );
};

export default Work;
