import heroImage from "../assets/hero.webp";

const Hero = () => {
  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="flex flex-col justify-center items-center gap-8 md:gap-10 mb-4 mt-12 md:mt-24 lg:mt-28">
        <h1 className="text-7xl md:text-9xl xl:text-[160px] text-center font-medium tracking-tight">
          Anas Obaid
        </h1>
        <p className="text-2xl tracking-wide text-center max-w-lg">
          I am web developer that helps brands fit and thrive culture. I resolve
          consumer challenges explore new creative perspectives.
        </p>
        <div className="p-3 px-6 rounded-full justify-center items-center gap-3 bg-green-100 ring-1 ring-green-200 hover:ring-green-400 transition-all duration-100 flex">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-85"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-green-500"></span>
          </span>
          <a href="mailto:anasobaidpk@gmail.com" className="text-xl">
            Available for work
          </a>
        </div>
        <div className="py-8 md:py-16">
          <img
            className="w-screen max-h-[600px] object-cover rounded-2xl"
            src={heroImage}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
