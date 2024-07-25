interface Props {
  heading: string;
  description: string;
}

const SectionDetails = ({ heading, description }: Props) => {
  return (
    <div className="flex flex-col md:flex-row items-center md:items-start justify-between border-t-2 pt-16">
      <div className="w-full md:w-1/2">
        <h2 className="text-xl md:text-2xl md:text-start font-semibold md:font-medium">
          {heading}
        </h2>
      </div>
      <div className="w-full md:w-1/2">
        <p className="text-lg mt-4 md:text-3xl leading-normal md:text-start">
          {description}
        </p>
      </div>
    </div>
  );
};

export default SectionDetails;
