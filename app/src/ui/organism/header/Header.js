import Image from "../../atoms/image/Image";
import Logo from "../../../assets/img/logo-black.png";

const Header = () => {
  return (
    <div className="container py-8 flex items-center justify-between absolute left-0 right-0">
      <Image src={Logo} />
      <nav className="flex gap-8">
        <a href="#">
          <span className="icon-arrow-up-right2 me-2"></span>
          <span className="uppercase">Home</span>
        </a>
        <a href="#">
          <span className="uppercase">About Us</span>
        </a>
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
        <a href="#">
          <span className="uppercase">Contact us</span>
        </a>
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
        <button className="rounded-full h-[3rem] w-[3rem] bg-black-90 flex items-center justify-center">
          <span className="icon-menu text-3xl"></span>
        </button>
      </div>
    </div>
  );
};

export default Header;
