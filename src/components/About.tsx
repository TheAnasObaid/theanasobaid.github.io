import SectionDetails from "./SectionDetails";

const About = () => {
  const heading = "About me";
  const description = `
  A multi-disciplinary freelancer with a background in web development. I've had over 2 years of experience and retain a computer science degree.`;

  return <SectionDetails heading={heading} description={description} />;
};

export default About;
