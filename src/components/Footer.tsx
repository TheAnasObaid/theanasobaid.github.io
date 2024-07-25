const Footer = () => {
  return (
    <div className="text-neutral-100 mx-auto flex justify-between items-center max-w-screen-xl pb-10 px-5 md:px-0">
      <span className="text-lg text-neutral-400">&copy; Copyright 2024</span>
      <a
        className="text-lg text-neutral-400 border-b-2 border-neutral-400 hover:text-neutral-200 hover:border-neutral-200 transition-all duration-100"
        href="https://www.linkedin.com/in/theanasobaid"
      >
        Linkedin
      </a>
    </div>
  );
};

export default Footer;
