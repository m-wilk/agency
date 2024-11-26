import Header from "../../organism/header/Header";
import Hero from "../../organism/hero/Hero";
import About from "../../organism/about/About";
import Services from "../../organism/services/Services";
import Projects from "../../organism/projects/Projects";
import Team from "../../organism/team/Team";
import Testimonial from "../../organism/testimonial/Testimonial";

const Home = () => {
  return (
    <>
      <Header />
      <Hero />
      <About />
      <Services />
      <Projects />
      <Team />
      <Testimonial />
    </>
  );
};

export default Home;
