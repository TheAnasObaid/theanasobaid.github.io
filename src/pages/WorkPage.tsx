import ProjectsGrid from "../components/ProjectsGrid";

const WorkPage = () => {
  return (
    <div className="mt-24 max-w-screen-xl mx-auto flex flex-col gap-20">
      <h1 className="text-6xl md:text-9xl font-medium text-center">Work</h1>
      <ProjectsGrid />
    </div>
  );
};

export default WorkPage;
