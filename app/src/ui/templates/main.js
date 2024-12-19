import Home from "../pages/home/Home";
import About from "../pages/about/About";
import Header from "../organism/header/Header";
import Footer from "../organism/footer/Footer";
import { Routes, Route } from "react-router-dom";
import Contact from "../pages/contact/Contact";

const Main = () => {
  
  

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
};

export default Main;
