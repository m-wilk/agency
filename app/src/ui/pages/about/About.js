import Image from "../../atoms/image/Image";
import DotLeft from "../../../assets/img/dot-left.png";
import DotRight from "../../../assets/img/dot-right.png";
import Team from "../../organism/team/Team";
import AgencyBg from "../../../assets/img/04.png";
import ScrollingWidget from "../../organism/scrolling-widget/ScrollingWidget";

const About = () => {
  return (
    <div className="bg-strong-dark-gray text-white">
      <div className="py-80 bg-triangles-black bg-cover">
        <div className="container flex flex-col items-center gap-8 relative">
          <h1 className="text-6xl font-bold">About Us</h1>
          <div className="uppercase text-primary">
            <a herf="#">Home</a> &nbsp;
            <span className="icon-arrow-up-right2"></span> &nbsp;
            <a herf="#">Contact us</a>
          </div>
          <Image className="absolute  left-0 top-20" src={DotLeft} />
          <Image className="absolute  right-0 top-0" src={DotRight} />
        </div>
      </div>
      <Team mode="square"/>
      <div className="container py-24">
        <div className="grid grid-cols-1">
          <div className="flex items-center justify-between">
            <h2 className="text-6xl font-bold max-w-90">
              Best Creative & Modern Creative Agency.
            </h2>
            <div className="flex gap-10 whitespace-nowrap">
              <div className="flex flex-col item-start">
                <h2 className="text-5xl">250 +</h2>
                <span>Team member</span>
              </div>
              <div className="flex flex-col items-start">
                <h2 className="text-5xl">950 +</h2>
                <span>Project Done</span>
              </div>
              <div className="flex flex-col items-start">
                <h2 className="text-5xl">350 +</h2>
                <span>Happy Clients</span>
              </div>
            </div>
          </div>
          <div className="relative pt-10 pb-10">
            <Image className="rounded w-full" src={AgencyBg} />
            <a href="#">
              <div className="absolute backdrop-blur-md inset-0 m-auto bg-custom-radial  w-20 h-20 rounded-full border flex items-center justify-center">
                <span className="icon-play3 text-white"></span>
              </div>
            </a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 container">
          <div>
            <h3 className="text-3xl font-bold mb-4"> Our Story</h3>
            <p>
              Nam posuere mauris enim, quis pretium elit placerat id Fusce
              egestas nisi vel ipsum vehicula facilisis In pulvinar imperdiet
              venenatis Class aptent taciti sociosqu ad litora torquent per
              conubia nostra, per inceptos himenaeos. Donec eu pulvinar lorem.
            </p>
          </div>
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="flex justify-between font-bold">
                <h6>Branding Design</h6>
                <span>85%</span>
              </div>
              <div className="bg-gray-700 h-2">
                <div className="bg-primary h-2 w-4/5"></div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between font-bold">
                <h6>Branding Design</h6>
                <span>85%</span>
              </div>
              <div className="bg-gray-700 h-2">
                <div className="bg-primary h-2 w-5/6"></div>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex justify-between font-bold">
                <h6>Branding Design</h6>
                <span>85%</span>
              </div>
              <div className="bg-gray-700 h-2">
                <div className="bg-primary h-2 w-3/4"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
      <ScrollingWidget />
      </div>

    </div>
  );
};

export default About;
