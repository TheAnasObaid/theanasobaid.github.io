interface Props {
  heading: string;
  description: string;
}

const SectionDetails = ({ heading, description }: Props) => {
  return (
    <>
      <div className="w-full md:w-1/2">
        <h2 className="text-xl md:text-2xl text-center md:text-start font-medium">
          {heading}
        </h2>
      </div>
      <div className="w-full md:w-1/2">
        <p className="text-lg mt-4 md:text-3xl leading-normal text-center md:text-start">
          {description}
        </p>
      </div>
    </>
  );
};

export default SectionDetails;
