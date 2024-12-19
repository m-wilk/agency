import Image from "../../atoms/image/Image";
import Sun from "../../../assets/img/text-slide.png";

const ScrollingWidget = ({className}) => {
    return (
      <div className={`py-24 ${className}`}>
              <div className="py-16 border-y border-gray-700 py-5 flex whitespace-nowrap  overflow-hidden gap-40 uppercase">
        <div className="flex items-center gap-10 animate-scroll w-full">
          <span className="text-white text-5xl">custom's text</span>
          <span className="text-yellow-300 text-5xl">custom's text</span>
          <Image src={Sun} />
        </div>
        <div className="flex items-center gap-10 animate-scroll w-full">
          <span className="text-white text-5xl">custom's text</span>
          <span className="text-yellow-300 text-5xl">custom's text</span>
          <Image src={Sun} />
        </div>
        <div className="flex items-center gap-10 animate-scroll w-full">
          <span className="text-white text-5xl">custom's text</span>
          <span className="text-yellow-300 text-5xl"></span>
          <Image src={Sun} />
        </div>
      </div>
      </div>
  
    );
}

export default ScrollingWidget;