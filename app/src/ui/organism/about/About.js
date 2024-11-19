import AboutImg from "../../../assets/img/about-v02.png";
import Image from "../../atoms/image/Image";

const About = () => {
  return (
    <div className="bg-black py-20">
      <div className="grid grid-rows-1  grid-cols-2 gap-4 container">
        <Image className="w-full" src={AboutImg} />
        <div className="ms-24">
          <div className="flex items-center gap-3 text-primary border border-white rounded-full px-6 py-3 inline-flex mb-8 uppercase">
            About Company
            <span className="icon-arrow-up-left2"></span>
          </div>
          <h2 className="text-white text-6xl font-bold leading-[125%] mb-8">
            We Create Impactful <br /> Digital Experiences
          </h2>
          <div className="flex items-center justify-between mb-8 text-white">
            <div className="text-white">
              <h2 className="text-4xl font-bold">25+</h2>
              <span className="text-gray-300">Completed projects</span>
            </div>
            <p>
              Bring to the table win-win survival strategies to ensure <br />
              proactive domination. At the end of the day, going
            </p>
          </div>
          <div className="flex justify-between mb-8 text-primary text-2xl font-bold">
            <h5>2019</h5>
            <h5>2021</h5>
            <h5>2024</h5>
          </div>
          <div className="flex justify-between border-primary border-t pt-8 relative">
            <div className="before:content-[''] before:absolute before:w-0 before:h-0 before:border-l-8 before:border-r-8 before:border-t-8 before:border-l-transparent before:border-r-transparent before:border-t-primary before:top-0 before:left-0">
              <h5 className="text-white text-2xl font-bold mb-3">Awwwards</h5>
              <span className="text-gray-500">Website of the day</span>
            </div>

            <div className="before:content-[''] before:absolute before:w-0 before:h-0 before:border-l-8 before:border-r-8 before:border-t-8 before:border-l-transparent before:border-r-transparent before:border-t-primary before:top-0 before:left-64">
              <h5 className="text-white text-2xl font-bold mb-3">Awwwards</h5>
              <span className="text-gray-500">Website of the day</span>
            </div>
            <div className="before:content-[''] before:absolute before:w-0 before:h-0 before:border-l-8 before:border-r-8 before:border-t-8 before:border-l-transparent before:border-r-transparent before:border-t-primary before:top-0 before:right-35">
              <h5 className="text-white text-2xl font-bold mb-3">Awwwards</h5>
              <span className="text-gray-500">Website of the day</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
