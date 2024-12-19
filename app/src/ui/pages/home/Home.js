import Hero from "../../organism/hero/Hero";
import Team from "../../organism/team/Team";
import ScrollingWidget from "../../organism/scrolling-widget/ScrollingWidget";
import AboutImg from "../../../assets/img/about-v02.png";
import Image from "../../atoms/image/Image";
import Ballon from "../../../assets/img/round.png";
import Sun from "../../../assets/img/text-slide.png";
import BgProject1 from "../../../assets/img/project-1.jpg";
import BgProject2 from "../../../assets/img/project-2.jpg";
import BgProject3 from "../../../assets/img/project-3.jpg";
import BgProject4 from "../../../assets/img/project-4.jpg";
import Testimonial1 from "../../../assets/img/t-version01.png";
import Line from "../../../assets/img/vector01.png";

const Home = () => {
  return (
    <>
      <Hero />
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
      <div className="bg-dark-gray pt-24 flex-col">
        <div className="flex flex-col items-center justify-center mb-20">
          <div className="flex items-center gap-3 text-primary border border-white rounded-full px-6 py-3  mb-8 uppercase">
            What We Offer
            <span className="icon-arrow-up-left2"></span>
          </div>
          <h2 className="text-white text-6xl font-bold">Our Main Services</h2>
        </div>
        <div className="flex whitespace-nowrap justify-between overflow-hidden gap-8 text-white">
          <div className="opacity-25 hover:opacity-100 relative group flex flex-col  items-start justify-between animate-scroll gap-3 w-full">
            <span className="flex items-center gap-4 border border-gray-600 rounded-full px-6 py-2  mb-2">
              2<span className="icon-arrow-up-right2 text-orange-400"></span>
            </span>
            <span className="text-6xl">Product Designe</span>
            <Image
              className="absolute scale-0  group-hover:scale-100  duration-700 ease-in-out left-40"
              src={Ballon}
            />
          </div>
          <div className="opacity-25 hover:opacity-100  relative group flex flex-col  items-start justify-between animate-scroll gap-3 w-full">
            <span className="flex items-center gap-4  border border-gray-600 rounded-full px-6 py-2  mb-2">
              2<span className="icon-arrow-up-right2 text-orange-400"></span>
            </span>
            <span className="text-6xl">Product Designe</span>
            <Image
              className="absolute scale-0  group-hover:scale-100  duration-700 ease-in-out left-40"
              src={Ballon}
            />
          </div>
          <div className="opacity-25 hover:opacity-100  relative group flex flex-col  items-start justify-between animate-scroll gap-3 w-full">
            <span className="flex items-center gap-4  border border-gray-600 rounded-full px-6 py-2  mb-2">
              2<span className="icon-arrow-up-right2 text-orange-400"></span>
            </span>
            <span className="text-6xl">Product Designe</span>
            <Image
              className="absolute scale-0  group-hover:scale-100  duration-700 ease-in-out left-40"
              src={Ballon}
            />
          </div>
          <div className="opacity-25 hover:opacity-100  relative group flex flex-col  items-start justify-between animate-scroll gap-3 w-full">
            <span className="flex items-center gap-4  border border-gray-600 rounded-full px-6 py-2  mb-2">
              2<span className="icon-arrow-up-right2 text-orange-400"></span>
            </span>
            <span className="text-6xl">Product Designe</span>
            <Image
              className="absolute scale-0  group-hover:scale-100  duration-700 ease-in-out left-40"
              src={Ballon}
            />
          </div>
        </div>
        <div className="flex text-white whitespace-nowrap overflow-hidden gap-8 py-20 mb-16">
          <div className=" opacity-25 hover:opacity-100 relative group flex flex-col items-start  animate-scroll gap-3 w-full">
            <span className="flex items-center gap-4  border border-gray-600 rounded-full px-6 py-2  mb-2">
              3<span className="icon-arrow-up-right2 text-orange-400"></span>
            </span>
            <span className="text-6xl">Mobile App</span>
            <Image
              className="absolute scale-0  group-hover:scale-100  duration-700 ease-in-out left-40"
              src={Ballon}
            />
          </div>
          <div className=" opacity-25 hover:opacity-100  relative group flex flex-col  items-start  animate-scroll gap-3 w-full">
            <span className="flex items-center gap-4  border border-gray-600 rounded-full px-6 py-2 mb-2">
              3<span className="icon-arrow-up-right2 text-orange-400"></span>
            </span>
            <span className="text-6xl">Mobile App</span>
            <Image
              className="absolute scale-0  group-hover:scale-100  duration-700 ease-in-out left-40"
              src={Ballon}
            />
          </div>
          <div className=" opacity-25 hover:opacity-100  relative group flex flex-col  items-start  animate-scroll gap-3 w-full">
            <span className="flex items-center gap-4  border border-gray-600 rounded-full px-6 py-2 mb-2">
              3<span className="icon-arrow-up-right2 text-orange-400"></span>
            </span>
            <span className="text-6xl">Mobile App</span>
            <Image
              className="absolute scale-0  group-hover:scale-100  duration-700 ease-in-out left-40"
              src={Ballon}
            />
          </div>
          <div className=" opacity-25 hover:opacity-100  relative group flex flex-col  items-start  animate-scroll gap-3 w-full">
            <span className="flex items-center gap-4  border border-gray-600 rounded-full px-6 py-2 mb-2">
              3<span className="icon-arrow-up-right2 text-orange-400"></span>
            </span>
            <span className="text-6xl">Mobile App</span>
            <Image
              className="absolute scale-0  group-hover:scale-100  duration-700 ease-in-out left-40"
              src={Ballon}
            />
          </div>
        </div>
        <div className="bg-black py-24">
          <div className="py-16 border-y border-gray-800 py-5 flex whitespace-nowrap  overflow-hidden gap-40 uppercase">
            <div className="flex items-center gap-10 animate-scroll w-full">
              <span className="text-white text-5xl">creative portfolio</span>
              <span className="text-yellow-300 text-5xl">
                creative portfolio
              </span>
              <Image src={Sun} />
            </div>
            <div className="flex items-center gap-10 animate-scroll w-full">
              <span className="text-white text-5xl">creative portfolio</span>
              <span className="text-yellow-300 text-5xl">
                creative portfolio
              </span>
              <Image src={Sun} />
            </div>
            <div className="flex items-center gap-10 animate-scroll w-full">
              <span className="text-white text-5xl">creative portfolio</span>
              <span className="text-yellow-300 text-5xl">
                creative portfolio
              </span>
              <Image src={Sun} />
            </div>
          </div>
        </div>
      </div>
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
      <Team />
      <ScrollingWidget className="bg-black"/>
      <div className="bg-black pb-24">
        <div className="flex items-center gap-8">
          <Image src={Testimonial1} />
          <Image src={Line} />
          <div className="ms-5 space-y-5">
            <div className="space-y-10">
              <span className="icon-quotes-right text-primary text-6xl"></span>
              <p className="text-white">
                Posuere luctus orci. Donec vitae mattis quam, vitae tempor arcu.
              </p>
            </div>
            <div className="text-white space-y-3">
              <h6>Masued</h6>
              <p className="text-primary">Lalaver Developer</p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-2">
          <div className="p-4 border rounded-full border-gray-700 flex items-center">
            <span className="icon-circle-up text-gray-700 text-3xl"></span>
          </div>
          <div className="p-4 border rounded-full border-gray-700 flex items-center">
            <span className="icon-circle-up text-gray-700 text-3xl"></span>
          </div>
        </div>
      </div>
      <div className="bg-gray-900 py-24">
        <div className="container">
          <div className="flex items-center justify-between mb-8">
            <div className="flex flex-col items-start gap-8">
              <div className="text-primary border border-gray-600 rounded-full px-5 py-2 uppercase">
                Blog and News
                <span className="icon-arrow-up-left2 ms-3"></span>
              </div>
              <h3 className="text-white text-3xl font-bold text-6xl">
                Check Our Company Inside Story
              </h3>
            </div>
            <a
              className="text-primary border border-gray-600 rounded-full px-7 py-4 hover:bg-primary hover:text-black"
              href="#"
            >
              View All Article
            </a>
          </div>
          <div className="grid grid-cols-2 gap-8 sm:grid-cols-1 md:grid-cols-2">
            <div className="space-y-8 relative">
              <div className="custom-effect">
                <Image src={BgProject1} />
                <div className="px-9 py-8 rounded-lg absolute bottom-0 right-0 hover:bg-primary transition duration-500 group">
                  <span className="icon-arrow-up-right2 text-primary hover:text-black transition duration-500 group-hover:rotate-45 inline-block"></span>
                </div>
              </div>
              <div className="pb-10 space-y-8">
                <h3 className="text-white text-3xl font-bold hover:text-primary">
                  It is a long established fact that a reader will be distracted
                  by the readable
                </h3>
                <div className="flex items-center gap-3">
                  <div className="text-white border border-gray-600 rounded-full px-5 py-2">
                    Bussines
                    <span className="icon-arrow-up-left2 ms-3"></span>
                  </div>
                  <div className="text-white border border-gray-600 rounded-full px-5 py-2">
                    Creative
                    <span className="icon-arrow-up-left2 ms-3"></span>
                  </div>
                  <span className="text-gray-400">AUG 31, 2024</span>
                </div>
              </div>
              <div></div>
            </div>
            <div>
              <div className="py-10 space-y-8">
                <div className="border-b border-gray-600 pb-8 w-full space-y-8">
                  <h3 className="text-white text-3xl font-bold hover:text-primary">
                    Consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut
                  </h3>
                  <div className="flex items-center gap-3">
                    <div className="text-white border border-gray-600 rounded-full px-5 py-2">
                      Bussines
                      <span className="icon-arrow-up-left2 ms-3"></span>
                    </div>
                    <div className="text-white border border-gray-600 rounded-full px-5 py-2">
                      Creative
                      <span className="icon-arrow-up-left2 ms-3"></span>
                    </div>
                    <span className="text-gray-400">AUG 31, 2024</span>
                  </div>
                </div>
                <div className="border-b border-gray-600 pb-8 w-full space-y-8">
                  <h3 className="text-white text-3xl font-bold hover:text-primary">
                    Consectetur adipisicing elit, sed do eiusmod tempor
                    incididunt ut
                  </h3>
                  <div className="flex items-center gap-3">
                    <div className="text-white border border-gray-600 rounded-full px-5 py-2">
                      Bussines
                      <span className="icon-arrow-up-left2 ms-3"></span>
                    </div>
                    <div className="text-white border border-gray-600 rounded-full px-5 py-2">
                      Creative
                      <span className="icon-arrow-up-left2 ms-3"></span>
                    </div>
                    <span className="text-gray-400">AUG 31, 2024</span>
                  </div>
                </div>
                <div className="border-b border-gray-600 pb-8 w-full space-y-8">
                  <h3 className="text-white text-3xl font-bold hover:text-primary">
                    Adipisicing elit, sed do eiusmod tempor incididunt ut
                  </h3>
                  <div className="flex items-center gap-3">
                    <div className="text-white border border-gray-600 rounded-full px-5 py-2">
                      Bussines
                      <span className="icon-arrow-up-left2 ms-3"></span>
                    </div>
                    <div className="text-white border border-gray-600 rounded-full px-5 py-2">
                      Creative
                      <span className="icon-arrow-up-left2 ms-3"></span>
                    </div>
                    <span className="text-gray-400">AUG 31, 2024</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ScrollingWidget className="bg-black"/>

    </>
  );
};

export default Home;
