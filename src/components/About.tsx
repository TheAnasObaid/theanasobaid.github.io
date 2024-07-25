const About = () => {
  return (
    <div
      id="work"
      className="flex flex-col md:flex-row items-center md:items-start justify-between border-t-2 pt-16"
    >
      <div className="w-full md:w-1/2">
        <h2 className="text-xl md:text-2xl text-center md:text-start font-medium">
          About me
        </h2>
      </div>
      <div className="w-full md:w-1/2">
        <p className="text-lg mt-4 md:text-3xl leading-normal text-center md:text-start">
          A multi-disciplinary freelancer with a background in web development.
          I've had over 2 years of experience and retain a computer science
          degree.
        </p>
      </div>
    </div>
  );
};

export default About;
