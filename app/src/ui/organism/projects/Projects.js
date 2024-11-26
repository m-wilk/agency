import Image from "../../atoms/image/Image";
import BgProject1 from "../../../assets/img/project-1.jpg";
import BgProject2 from "../../../assets/img/project-2.jpg";
import BgProject3 from "../../../assets/img/project-3.jpg";
import BgProject4 from "../../../assets/img/project-4.jpg";

const Projects = () => {
  return (
    <div className="bg-black py-24">
      <div className="container grid grid-cols-2 gap-4 sm:grid-cols-1 md:grid-cols-2">
        <div className="space-y-8 relative">
          <div className="custom-effect">
            <Image src={BgProject1} />
            <div className="px-9 py-8 rounded-lg absolute bottom-0 right-0 hover:bg-primary transition duration-500 group">
              <span className="icon-arrow-up-right2 text-primary hover:text-black transition duration-500 group-hover:rotate-45 inline-block"></span>
            </div>
          </div>
          <div className="flex flex-col items-start gap-8">
            <div className="text-primary border border-gray-600 rounded-full px-5 py-2">
              Creative
            </div>
            <div className="border-b border-gray-600 pb-4 w-full">
              <h3 className="text-white text-3xl font-bold hover:text-primary">
                A Simple Social Media Marketing Checklist
              </h3>
            </div>
          </div>
        </div>
        <div className="space-y-8 relative">
          <div className="custom-effect">
            <Image src={BgProject2} />
            <div className="px-9 py-8 rounded-lg absolute bottom-0 right-0 hover:bg-primary transition duration-500 group">
              <span className="icon-arrow-up-right2 text-primary hover:text-black transition duration-500 group-hover:rotate-45 inline-block"></span>
            </div>
          </div>
          <div className="flex flex-col items-start gap-8">
            <div className="text-primary border border-gray-600 rounded-full px-5 py-2">
              Creative
            </div>
            <div className="border-b border-gray-600 pb-4 w-full">
              <h3 className="text-white text-3xl font-bold hover:text-primary">
                Varius suscipit lectus. Suspendisse
              </h3>
            </div>
          </div>
        </div>
        <div className="space-y-8 relative">
          <div className="custom-effect">
            <Image src={BgProject3} />
            <div className="px-9 py-8 rounded-lg absolute bottom-0 right-0 hover:bg-primary transition duration-500 group">
              <span className="icon-arrow-up-right2 text-primary hover:text-black transition duration-500 group-hover:rotate-45 inline-block"></span>
            </div>
          </div>
          <div className="flex flex-col items-start gap-8">
            <div className="text-primary border border-gray-600 rounded-full px-5 py-2">
              Creative
            </div>
            <div className="border-b border-gray-600 pb-4 w-full">
              <h3 className="text-white text-3xl font-bold hover:text-primary">
                Internet tend to repeat predefined
              </h3>
            </div>
          </div>
        </div>
        <div className="space-y-8 relative">
          <div className="custom-effect">
            <Image src={BgProject4} />
            <div className="px-9 py-8 rounded-lg absolute bottom-0 right-0 hover:bg-primary transition duration-500 group">
              <span className="icon-arrow-up-right2 text-primary hover:text-black transition duration-500 group-hover:rotate-45 inline-block"></span>
            </div>
          </div>
          <div className="flex flex-col items-start gap-8">
            <div className="text-primary border border-gray-600 rounded-full px-5 py-2">
              Creative
            </div>
            <div className="border-b border-gray-600 pb-4 w-full">
              <h3 className="text-white text-3xl font-bold hover:text-primary">
                Available, but the majority have
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
