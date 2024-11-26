import Ballon from "../../../assets/img/round.png";
import Image from "../../atoms/image/Image";
import Sun from "../../../assets/img/text-slide.png";

const Services = () => {
  return (
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
            <span className="text-yellow-300 text-5xl">creative portfolio</span>
            <Image src={Sun} />
          </div>
          <div className="flex items-center gap-10 animate-scroll w-full">
            <span className="text-white text-5xl">creative portfolio</span>
            <span className="text-yellow-300 text-5xl">creative portfolio</span>
            <Image src={Sun} />
          </div>
          <div className="flex items-center gap-10 animate-scroll w-full">
            <span className="text-white text-5xl">creative portfolio</span>
            <span className="text-yellow-300 text-5xl">creative portfolio</span>
            <Image src={Sun} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
