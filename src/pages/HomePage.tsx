import About from "../components/About";
import Contact from "../components/Contact";
import Hero from "../components/Hero";
import Services from "../components/Services";
import Work from "../components/Work";

const HomePage = () => {
  return (
    <>
      <div className="px-3 max-w-screen-xl mx-auto">
        <Hero />
        <About />
        <Work />
        <Services />
      </div>
      <div className="max-w-full bg-gray-950">
        <Contact />
      </div>
    </>
  );
};

export default HomePage;
