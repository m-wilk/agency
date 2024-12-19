import { ReactComponent as Line } from "../../../assets/img/line.svg";
import { ReactComponent as Send } from "../../../assets/img/send.svg";
import Image from "../../atoms/image/Image";
import Logo from "../../../assets/img/logo.png";

const Footer = () => {
  return (
    <div className="bg-circle-black bg-cover py-24">
      <div className="container flex gap-20 py-16">
        <div className="space-y-8">
          <h5 className="text-white text-2xl">
            About Us
            <Line />
          </h5>
          <p className="text-white">
            Phasellus ultricies aliquam volutpat ullamcorper laoreet neque, a
            lacinia curabitur lacinia mollis
          </p>
          <div className="flex gap-5">
            <div className="border border-gray-600 px-4 py-3">
              <span className="icon-facebook text-white"></span>
            </div>
            <div className="border border-gray-600 px-4 py-3">
              <span className="icon-twitter text-white"></span>
            </div>
            <div className="border border-gray-600 px-4 py-3">
              <span className="icon-linkedin2 text-white"></span>
            </div>
            <div className="border border-gray-600 px-4 py-3">
              <span className="icon-youtube text-white"></span>
            </div>
          </div>
        </div>
        <div className="space-y-8">
          <h5 className="text-white text-2xl">
            Quick Links
            <Line />
          </h5>
          <ul className="text-white text-xl space-y-4">
            <li>
              <a href="#">
                <span className="icon-forward3"></span>
                About Webgan
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon-forward3"></span>
                Web Development
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon-forward3"></span>
                Product Designe
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon-forward3"></span>
                Seo Organization
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-8">
          <h5 className="text-white text-2xl">
            Quick Links
            <Line />
          </h5>
          <ul className="text-white text-xl space-y-4">
            <li>
              <a href="#">
                <span className="icon-forward3"></span>
                UI / UX Designe
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon-forward3"></span>
                Web Development
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon-forward3"></span>
                Product Designe
              </a>
            </li>
            <li>
              <a href="#">
                <span className="icon-forward3"></span>
                Seo Organization
              </a>
            </li>
          </ul>
        </div>
        <div className="space-y-8">
          <h5 className="text-white text-2xl">
            About Us
            <Line />
          </h5>
          <p className="text-white">
            Phasellus ultricies aliquam volutpat ullamcorper laoreet neque, a
            lacinia curabitur lacinia mollis
          </p>
          <form className="p-2 border border-gray-400 rounded flex items-center justify-between gap-4">
            <input
              className="focus:outline-none bg-black px-8 py-4 w-full"
              placeholder="Email adress"
            />
            <button className="bg-primary p-4 rounded">
              <Send className="text-black" />
            </button>
          </form>
        </div>
      </div>
      <div className=" py-16 bg-gray-900">
        <div className="container flex items-center justify-between">
          <a href="#">
            <Image src={Logo} />
          </a>
          <a className="bg-primary px-4 py-3 rounded-full" href="#">
            <span className="icon-arrow-up2"></span>
          </a>
          <p className="text-gray-400">
            © All Copyright 2024 by <a href="#">Webgen</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
