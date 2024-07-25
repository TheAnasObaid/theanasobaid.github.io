import SectionDetails from "./SectionDetails";

const Services = () => {
  const heading = "Services";
  const description =
    "My services perform exactly the functions that are needed. To create websites that are easy to navigate and manage even for inexperienced users with work functionality.";

  const services = [
    {
      number: "01",
      heading: "Content-Driven Websites",
      description: `A clean, beautiful, SEO friendly and blazingly fast website for your heavy-content`,
    },
    {
      number: "02",
      heading: "Websites Maintenance",
      description: `Maintaining your websites, so you can focus more on your goals, not on work`,
    },
  ];

  return (
    <div className="mb-20">
      <SectionDetails heading={heading} description={description} />
      {services.map((service) => (
        <div className="flex flex-col md:flex-row gap-3 md:gap-0 md:justify-between mt-10 border-t-2 pt-10 mb-20">
          <div className="text-xl w-full md:w-1/2">{service.number}</div>
          <div className="w-full md:w-1/2">
            <h3 className="text-2xl font-medium mb-3">{service.heading}</h3>
            <p className="text-xl text-neutral-400">{service.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Services;
