import Header from "../../organism/header/Header";
import Hero from "../../organism/hero/Hero";
import About from "../../organism/about/About";
import Services from "../../organism/services/Services";
import Projects from "../../organism/projects/Projects";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
    </>
  );
};

export default Home;
