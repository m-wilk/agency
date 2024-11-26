import Image from "../../atoms/image/Image";
import Sun from "../../../assets/img/text-slide.png";
import Testimonial1 from "../../../assets/img/t-version01.png";
import Line from "../../../assets/img/vector01.png";

const Testimonial = () => {
  return (
    <div className="bg-black py-24">
      <div className="py-16 border-y border-gray-800 py-5 flex whitespace-nowrap  overflow-hidden gap-40 uppercase">
        <div className="flex items-center gap-10 animate-scroll w-full">
          <span className="text-white text-5xl">client's testimonial</span>
          <span className="text-yellow-300 text-5xl">client's testimonial</span>
          <Image src={Sun} />
        </div>
        <div className="flex items-center gap-10 animate-scroll w-full">
          <span className="text-white text-5xl">client's testimonial</span>
          <span className="text-yellow-300 text-5xl">client's testimonial</span>
          <Image src={Sun} />
        </div>
        <div className="flex items-center gap-10 animate-scroll w-full">
          <span className="text-white text-5xl">client's testimonial</span>
          <span className="text-yellow-300 text-5xl">client's testimonial</span>
          <Image src={Sun} />
        </div>
      </div>
      <div className="py-24 flex items-center gap-8">
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
  );
};

export default Testimonial;
