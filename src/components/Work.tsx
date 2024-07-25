import image1 from "../assets/project1.webp";
import image2 from "../assets/project2.webp";

const Work = () => {
  return (
    <div className="border-t-2 pt-16 mt-20 ">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-xl md:text-2xl font-medium">Featured Work</h2>
        <a
          className="p-2.5 px-5 rounded-full justify-center items-center bg-neutral-100 gap-3 ring-1 ring-white"
          href="/work"
        >
          All projects
        </a>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-rows-1 gap-y-12 gap-6 mb-20">
        <div>
          <img
            className="rounded-2xl mb-5 h-52 md:h-[420px] w-full object-cover"
            src={image1}
            alt=""
          />
          <h3 className="text-xl md:text-2xl font-medium mb-1">
            Project heading
          </h3>
          <p className="text-xl md:text-2xl text-neutral-400">
            Project subtitle
          </p>
        </div>
        <div>
          <img
            className="rounded-2xl mb-5 h-52 md:h-[420px] w-full object-cover"
            src={image2}
            alt=""
          />
          <h3 className="text-xl md:text-2xl font-medium mb-1">
            Project heading
          </h3>
          <p className="text-xl md:text-2xl text-neutral-400">
            Project subtitle
          </p>
        </div>
      </div>
    </div>
  );
};

export default Work;
