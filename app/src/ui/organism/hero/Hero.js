import Image from "../../atoms/image/Image";
import BlackArrow from "../../../assets/img/black-arrow.png";
import SoftStar from "../../../assets/img/soft-star.png";
import TextCircle from "../../../assets/img/bn2-text.png";
import Banner2Thumb from "../../../assets/img/banner-2thumb.png"

const Hero = () => {
  return (
    <div className="bg-grid-yellow pt-40 pb-16">
      <div className="container">
        <div className="flex items-center justify-between">
          <h1 className="flex flex-col gap-6">
            <span className="text-8xl uppercase font-bold">
              Digital Products
            </span>
            <span className="text-8xl uppercase font-bold flex items-center gap-10 relative">
              <Image className="w-20" src={BlackArrow} />
              <span>Agency</span>
              <Image
                className="w-20 absolute bottom-0 left-[550px]"
                src={SoftStar}
              />
            </span>
          </h1>
          <a className="relative" href="#">
            <div className="w-28 h-28 rounded-full bg-black z-10  flex items-center justify-center">
              <span className="icon-play3 text-primary text-3xl z-20"></span>
            </div>
            <Image
              className="absolute inset-0 m-auto w-28 h-28 scale-150 z-0"
              src={TextCircle}
            />
          </a>
        </div>
        <div className="py-16">
            <Image src={Banner2Thumb}/>
        </div>
      </div>
    </div>
  );
};

export default Hero;
