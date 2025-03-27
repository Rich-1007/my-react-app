import React from "react";

import { MdOutlineArrowOutward } from "react-icons/md";

const imageUrl = "./public/t2c/Background.jpg";
const startBig = "./public/t2c/Start-Big.png";
const Hero_pics1 = "./public/t2c/Hero-pics/Group 1686550978.png";
const Hero_pics2 = "./public/t2c/Hero-pics/Frame 1686551014.png";
const Hero_pics3 = "./public/t2c/Hero-pics/Group 1686551003.png";
const Hero_pics4 = "./public/t2c/Hero-pics/Group 1686551002.png";
const Hero_logo1 = "./public/t2c/Hero-pics/Logo/logo-dark.png";
const Hero_logo2 = "./public/t2c/Hero-pics/Logo/Mask group.png";
const Hero_logo3 = "./public/t2c/Hero-pics/Logo/optimile.png";
const Hero_logo4 = "./public/t2c/Hero-pics/Logo/ts-bridge-logo.png";
const Ken1 = "./public/t2c/Action-pic/ken42 1 (1).png";
const Ken2 = "./public/t2c/Action-pic/ken42 1.png";

const Closed1 = "./public/t2c/Closed1.png";
const Closed2 = "./public/t2c/Background.png";
const Closed3 = "./public/t2c/Closed2.png";
const Closed4 = "./public/t2c/Closed.png";

const Hero = () => {
  return (
    <>
      <div style={{}} className="relative flex justify-center">
        <div className="">
          <img
            className="object-contain, w-full"
            src={imageUrl}
            style={{}}
            alt=""
          />
        </div>

        <div className="absolute  top-8  w-full flex justify-around items-center">
          <div className="h-20">
            <img className="object-contain, h-full" src={startBig} alt="" />
          </div>

          <div className="flex bg-gray-950 items-center h-8 rounded-4xl text-gray-300 text-[10px] px-9 py-1.5 gap-5 font-thin">
            <span className="">Home</span>
            <span>About</span>
            <span>Services</span>
            <span>Blogs</span>
            <span>News</span>
            <span>Contact</span>
          </div>

          <div className="bg-[#0B43A3] rounded-4xl h-8 text-gray-300 text-[10px] font-thin px-8 flex items-center justify-center">
            <button>Get Started</button>
          </div>
        </div>

        <div className="absolute top-32 right-20  w-1/3">
          <div className="absolute right-20 w-36 h-28 ">
            <img src={Hero_pics1} alt="" className="object-contain, h-full" />
          </div>
          <div className="absolute right-0 top-32 w-36 h-28">
            <img src={Hero_pics3} alt="" className="object-contain, h-full" />
          </div>
          <div className="absolute right-20 top-64 w-36 ">
            <img src={Hero_pics4} alt="" className="object-contain, h-full" />
          </div>
          <div className="absolute left-12 top-20 w-52 h-52">
            <img src={Hero_pics2} alt="" className="object-contain, h-full" />
          </div>
        </div>

        <div className=" absolute top-52 left-14 w-1/3">
          <div className="flex flex-col font-bold text-gray-100 text-xl">
            <span>The Future of Tech </span>
            <div>
              <span>Starts </span>
              <span className="text-blue-200">Here</span>
            </div>
          </div>

          <div className="pb-5">
            <span className="text-gray-300 font-thin text-xs ">
              From concept to market, T²C supercharges your tech journey with
              top-tier talent, cutting-edge tools, and rapid execution. Let's
              build groundbreaking solutions that define tomorrow.
            </span>
          </div>
          <div className="text-gray-300 bg-[#302A2A]  rounded-3xl px-6 py-1 font-thin text-sm w-fit">
            <button>Let's build Everything Extraordinary</button>
          </div>

          <div className="flex flex-col gap-5 absolute top-62  w-full">
            <span className="text-gray-200 text-xs">TRUSTED BY THE BEST</span>
            <div className="flex flex-row w-full justify-between">
              <div className=" flex ">
                <img className="w-16" src={Hero_logo4} alt="" />
              </div>
              <div>
                <img src={Hero_logo2} className="w-24" alt="" />
              </div>
              <div>
                <img src={Hero_logo1} alt="" className="w-12" />
              </div>
              <div>
                <img src={Hero_logo3} alt="" className="w-24" />
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-[700px]  w-full flex justify-center flex-col items-center">
          <span
            style={{
              background: "linear-gradient(to right, #909DC1, #3663DE)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="text-3xl font-bold"
          >
            Innovation in Action
          </span>
          <div className="pt-4 text-sm text-gray-400 text-center flex flex-col">
            <span>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nulla velit, maximus sit amet
            </span>

            <span>
              suscipit in, fermentum id est. Suspendisse consequat ornare elit.
            </span>
          </div>

          <div className="pt-10  w-full flex flex-row justify-center gap-12">
            <div className="bg-[#173068] w-1/3 p-8 rounded-2xl border-1 border-gray-50">
              <div>
                <img src={Ken2} alt="" />
              </div>
              <div className="flex flex-col text-center">
                <span className="text-gray-200 font-bold ">
                  Revolutionized Kenverse’s AI capabilities in just 6 months
                </span>
                <span className="text-xs text-gray-300 font-thin">
                  From concept to deployment, T²C engineered an AI
                  transformation that positioned Kenverse as a market leader.
                </span>
              </div>
            </div>

            <div className="bg-[#173068] w-1/3 p-8 rounded-2xl border-1 border-gray-50">
              <div>
                <img src={Ken1} alt="" />
              </div>
              <div className="flex flex-col text-center">
                <span className="text-gray-200 font-bold ">
                  Transformed Optimile into a seamless logistics powerhouse{" "}
                </span>
                <span className="text-xs text-gray-300 font-thin">
                  Reimagined and redefined by T²C, Optimile now sets the
                  standard for seamless logistics.
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pt-32">
        <div className="flex flex-col justify-between w-full items-center">
          <span
            style={{
              background: "linear-gradient(to right, #909DC1, #3663DE)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
            className="text-2xl font-bold"
          >
            Technology, Turbocharged
          </span>

          <div className="flex flex-col text-blue-100 text-sm font-thin">
            <span>
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nulla velit, maximus sit
            </span>
            <span>
              amet suscipit in, fermentum id est. Suspendisse consequat ornare
              elit.”
            </span>
          </div>
        </div>

        <div className="flex flex-row justify-evenly">
          <div className="bg-[#171717] w-44 rounded-xl ">
            <img src={Closed1} alt="" />

            <div className="flex flex-col px-3">
              <span className="text-gray-300 ">TurboSend</span>
              <span className="text-blue-100 text-[7px] font-thin">
                Instantly deploy powerful chat functionalities built for
                scalability and real-time performance. No delays, just results.
              </span>
            </div>

            <div className="flex flex-row gap-1 py-3 px-3 hover:cursor-pointer">
              <button className="text-blue-100 text-[7px] font-thin ">
                Check Now
              </button>
              <MdOutlineArrowOutward size={9} className="text-blue-100" />
            </div>
          </div>





          <div className="bg-[#171717] w-44 rounded-xl ">
            <img src={Closed2} alt="" />

            <div className="flex flex-col px-3">
              <span className="text-gray-300 ">TurboSend</span>
              <span className="text-blue-100 text-[7px] font-thin">
                Instantly deploy powerful chat functionalities built for
                scalability and real-time performance. No delays, just results.
              </span>
            </div>

            <div className="flex flex-row gap-1 py-3 px-3 hover:cursor-pointer">
              <button className="text-blue-100 text-[7px] font-thin ">
                Check Now
              </button>
              <MdOutlineArrowOutward size={9} className="text-blue-100" />
            </div>
          </div>




          <div className="bg-[#171717] w-44 rounded-xl ">
            <img src={Closed3} alt="" />

            <div className="flex flex-col px-3">
              <span className="text-gray-300 ">TurboSend</span>
              <span className="text-blue-100 text-[7px] font-thin">
                Instantly deploy powerful chat functionalities built for
                scalability and real-time performance. No delays, just results.
              </span>
            </div>

            <div className="flex flex-row gap-1 py-3 px-3 hover:cursor-pointer">
              <button className="text-blue-100 text-[7px] font-thin ">
                Check Now
              </button>
              <MdOutlineArrowOutward size={9} className="text-blue-100" />
            </div>
          </div>





          <div className="bg-[#171717] w-44 rounded-xl ">
            <img src={Closed4} alt="" />

            <div className="flex flex-col px-3">
              <span className="text-gray-300 ">TurboSend</span>
              <span className="text-blue-100 text-[7px] font-thin">
                Instantly deploy powerful chat functionalities built for
                scalability and real-time performance. No delays, just results.
              </span>
            </div>

            <div className="flex flex-row gap-1 py-3 px-3 hover:cursor-pointer">
              <button className="text-blue-100 text-[7px] font-thin ">
                Check Now
              </button>
              <MdOutlineArrowOutward size={9} className="text-blue-100" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
