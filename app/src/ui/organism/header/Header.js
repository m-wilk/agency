import { useState } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Image from "../../atoms/image/Image";
import LogoBlack from "../../../assets/img/logo-black.png";
import LogoWhite from "../../../assets/img/logo.png";

const Header = () => {
  const location = useLocation();
  const isHome = location.pathname === "/";

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
    <div
      className={`container py-8 flex items-center justify-between absolute left-0 right-0 ${
        isHome ? "text-black" : "text-white"
      }`}
    >
      {isHome ? <Image src={LogoBlack} /> : <Image src={LogoWhite} />}
      <nav className="flex gap-8">
        <Link to="/">
          <span className="icon-arrow-up-right2 me-2"></span>
          <span className="uppercase">Home</span>
        </Link>
        <Link to="/about">
          <span className="uppercase">About Us</span>
        </Link>
        <a href="#">
          <span className="icon-arrow-up-right2 me-2"></span>
          <span className="uppercase">Services</span>
        </a>
        <a href="#">
          <span className="icon-arrow-up-right2 me-2"></span>
          <span className="uppercase">Pages</span>
        </a>
        <a href="#">
          <span className="icon-arrow-up-right2 me-2"></span>
          <span className="uppercase">Blog</span>
        </a>
        <Link to="/contact">
          <span className="uppercase">Contact us</span>
        </Link>
      </nav>
      <div className="flex items-center gap-6">
        <div className="flex items-center gap-6">
          <a className="flex items-center gap-2" href="#">
            <span className="icon-phone1"></span>
            <span>+208-555-0112</span>
          </a>
          <a>
            <span className="icon-search"></span>
          </a>
        </div>
        <button
          onClick={toggleMenu}
          className="rounded-full h-[3rem] w-[3rem] bg-black-90 flex items-center justify-center"
        >
          <span className="icon-menu text-3xl"></span>
        </button>
        {/* sidebar */}
        <div
          className={`bg-black text-white z-50 fixed top-0 w-1/4 h-full
            ${isMenuOpen ? "right-0" : "right-[-1600px] "}`}
        >
          <div className="relative space-y-8 px-8 py-20">
            <button onClick={toggleMenu}>
              <span className="icon-cross text-primary absolute top-10 left-1/2"></span>
            </button>
            <Image src={LogoWhite} />
            <p className="text-white">
              Neque porro quisquam est, qui dolorem ipsum quia dolor sit
              consectetur, aliquam quaerats voluptatem. Ut enim ad minima
              veniam, exercitationem laboriosam, nisi ut aliquid ex ea autem
              velit esse quam nihil
            </p>
            <div className="space-y-4">
              <div className="flex flex-col">
                <span>Address</span>
                <span>Loterl Poinent k/ls United Statate.</span>
              </div>
              <div className="flex flex-col">
                <span>Email</span>
                <a href="#">Loterl Poinent k/ls United Statate.</a>
              </div>
              <div className="flex flex-col">
                <span>Call now</span>
                <a href="#">+996 1425 7471 0.2</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
