import SectionDetails from "./SectionDetails";

const About = () => {
  const heading = "About me";
  const description = `
  A multi-disciplinary freelancer with a background in web development. I've had over 2 years of experience and retain a computer science degree.`;

  return (
    <div id="work">
      <SectionDetails heading={heading} description={description} />
    </div>
  );
};

export default About;
