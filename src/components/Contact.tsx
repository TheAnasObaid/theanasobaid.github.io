const Contact = () => {
  return (
    <div className="flex flex-col w-full justify-center gap-5 items-center py-36 md:py-56">
      <p className="text-xl md:text-3xl text-neutral-400 text-center">
        Have a project in mind?
      </p>
      <h2 className="text-6xl md:text-9xl text-neutral-100 hover:border-b-2 text-center transition-all duration-100">
        <a href="mailto:anasobaidpk@gmail.com">Contact me</a>
      </h2>
    </div>
  );
};

export default Contact;
