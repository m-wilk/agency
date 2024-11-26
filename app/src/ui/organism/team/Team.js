import Image from "../../atoms/image/Image";
import Staff1 from "../../../assets/img/04.jpg";

const Team = () => {
  return (
    <div className="bg-pattern-black py-24">
      <div className="container">
        <div className="flex items-center justify-between mb-8">
          <div className="flex flex-col items-start gap-8">
            <div className="text-primary border border-gray-600 rounded-full px-5 py-2 uppercase">
              Our Experts
            </div>
            <h3 className="text-white text-3xl font-bold text-6xl">
              Meet Our Creative Staff
            </h3>
          </div>
          <a
            className="flex items-center gap-3 text-primary border border-gray-600 rounded-full px-7 py-4 hover:bg-primary hover:text-black"
            href="#"
          >
            View All Teams
            <span className="icon-arrow-up-left2"></span>
          </a>
        </div>
        <div className="grid grid-cols-4 gap-4 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          <div className="bg-gray-900 p-10 flex flex-col items-center gap-4">
            <Image
              className="w-60 h-60 rounded-full object-cover"
              src={Staff1}
            />
            <div className="text-white border-b border-gray-600 pb-4">
              <a className="flex flex-col items-center" href="#">
                <h6 className="text-2xl">Leslie Alexander</h6>
                <span className="text-gray-400">Programmer</span>
              </a>
            </div>
            <ul className="flex items-center gap-3">
              <li>
                <a>
                  <span className="icon-facebook text-gray-600 text-2xl"></span>
                </a>
              </li>
              <li>
                <a>
                  <span className="icon-instagram text-gray-600 text-2xl"></span>
                </a>
              </li>
              <li>
                <a>
                  <span className="icon-linkedin2  text-gray-600 text-2xl"></span>
                </a>
              </li>
              <li>
                <a>
                  <span className="icon-twitter text-gray-600 text-2xl"></span>
                </a>
              </li>
              <li>
                <a>
                  <span className="icon-pinterest2 text-gray-600 text-2xl"></span>
                </a>
              </li>
            </ul>
          </div>
          <div className="bg-gray-900 p-10 flex flex-col items-center gap-4">
            <Image
              className="w-60 h-60 rounded-full object-cover"
              src={Staff1}
            />
            <div className="text-white border-b border-gray-600 pb-4">
              <a className="flex flex-col items-center" href="#">
                <h6 className="text-2xl">Leslie Alexander</h6>
                <span className="text-gray-400">Programmer</span>
              </a>
            </div>
            <ul className="flex items-center gap-3">
              <li>
                <a>
                  <span className="icon-facebook text-gray-600 text-2xl"></span>
                </a>
              </li>
              <li>
                <a>
                  <span className="icon-instagram text-gray-600 text-2xl"></span>
                </a>
              </li>
              <li>
                <a>
                  <span className="icon-linkedin2  text-gray-600 text-2xl"></span>
                </a>
              </li>
              <li>
                <a>
                  <span className="icon-twitter text-gray-600 text-2xl"></span>
                </a>
              </li>
              <li>
                <a>
                  <span className="icon-pinterest2 text-gray-600 text-2xl"></span>
                </a>
              </li>
            </ul>
          </div>
          <div className="bg-gray-900 p-10 flex flex-col items-center gap-4">
            <Image
              className="w-60 h-60 rounded-full object-cover"
              src={Staff1}
            />
            <div className="text-white border-b border-gray-600 pb-4">
              <a className="flex flex-col items-center" href="#">
                <h6 className="text-2xl">Leslie Alexander</h6>
                <span className="text-gray-400">Programmer</span>
              </a>
            </div>
            <ul className="flex items-center gap-3">
              <li>
                <a>
                  <span className="icon-facebook text-gray-600 text-2xl"></span>
                </a>
              </li>
              <li>
                <a>
                  <span className="icon-instagram text-gray-600 text-2xl"></span>
                </a>
              </li>
              <li>
                <a>
                  <span className="icon-linkedin2  text-gray-600 text-2xl"></span>
                </a>
              </li>
              <li>
                <a>
                  <span className="icon-twitter text-gray-600 text-2xl"></span>
                </a>
              </li>
              <li>
                <a>
                  <span className="icon-pinterest2 text-gray-600 text-2xl"></span>
                </a>
              </li>
            </ul>
          </div>
          <div className="bg-gray-900 p-10 flex flex-col items-center gap-4">
            <Image
              className="w-60 h-60 rounded-full object-cover"
              src={Staff1}
            />
            <div className="text-white border-b border-gray-600 pb-4">
              <a className="flex flex-col items-center" href="#">
                <h6 className="text-2xl">Leslie Alexander</h6>
                <span className="text-gray-400">Programmer</span>
              </a>
            </div>
            <ul className="flex items-center gap-3">
              <li>
                <a>
                  <span className="icon-facebook text-gray-600 text-2xl"></span>
                </a>
              </li>
              <li>
                <a>
                  <span className="icon-instagram text-gray-600 text-2xl"></span>
                </a>
              </li>
              <li>
                <a>
                  <span className="icon-linkedin2  text-gray-600 text-2xl"></span>
                </a>
              </li>
              <li>
                <a>
                  <span className="icon-twitter text-gray-600 text-2xl"></span>
                </a>
              </li>
              <li>
                <a>
                  <span className="icon-pinterest2 text-gray-600 text-2xl"></span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
