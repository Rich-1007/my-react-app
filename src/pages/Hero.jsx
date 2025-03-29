import React from "react";

import { MdOutlineArrowOutward } from "react-icons/md";
import { HiOutlineFolderOpen } from "react-icons/hi2";

import { IoLocationOutline } from "react-icons/io5";
import { RiHeadphoneLine } from "react-icons/ri";
import { LuMail } from "react-icons/lu";

const imageUrTesting = "/src/assets/Background.jpg";

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

const About_TSquaredC = "./public/About_TSquaredC-pic.png";

const wc1 = "./public/t2c/why choose/wc1.png";
const wc2 = "./public/t2c/why choose/wc2.png";
const wc3 = "./public/t2c/why choose/wc3.png";
const wc4 = "./public/t2c/why choose/wc4.png";

const Frame_1 = "./public/t2c/Frame 1686551003.png";
const Frame_2 = "./public/t2c/Frame_2.png";

const Figure = "./public/t2c/Figure.png";

const Hero = () => {
  return (
    <>
      <div style={{}} className="relative flex justify-center">
        <div className="">
          <img
            className="object-contain, w-full"
            src={imageUrTesting}
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
              <span className="text-gray-300 ">TurboAuth</span>
              <span className="text-blue-100 text-[7px] font-thin">
                From Google to OAuth, we integrate every major SSO option,
                ensuring secure, seamless access for all users.
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
              <span className="text-gray-300 ">TurboStream</span>
              <span className="text-blue-100 text-[7px] font-thin">
                Deliver video content without lag or interruptions. TurboStream
                powers your platform with flawless video performance.
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
              <span className="text-gray-300 ">TurboCloud</span>
              <span className="text-blue-100 text-[7px] font-thin">
                Monitor, optimize, and scale your cloud infrastructure
                effortlessly—TurboCloud ensures your system runs at peak
                efficiency
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

        <div className="outline-4 flex px-8 py-12">
          <div className="outline-4 w-1/2">
            <span
              className="text-2xl font-bold"
              style={{
                background: "linear-gradient(to right, #909DC1, #3663DE)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              About TSquaredC
            </span>
            <div className="flex flex-col gap-4 text-xs font-thin text-blue-200">
              <span>
                At T2C, we push the boundaries of technology for businesses
                worldwide by creating solutions that are both innovative and
                robust. Our focus is on seamless integration and strategic
                innovation, ensuring efficient operations and scalable growth.
              </span>
              <span>
                We are committed to empowering businesses in a digital-first
                world, simplifying complex systems to address challenges and
                unlock opportunities. Our scalable solutions are designed for
                high performance, prioritizing customer success and sustainable
                growth.
              </span>
            </div>
          </div>
          <div>
            <img src={About_TSquaredC} alt="About_TSquaredC" />
          </div>
        </div>

        <div className="py-10 px-10 outline-orange-400 outline-4">
          <div>
            <span
              className="text-2xl font-bold"
              style={{
                background: "linear-gradient(to right, #909DC1, #3663DE)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Why Choose TSquaredC{" "}
            </span>
            <span className="flex flex-col gap-4 text-xs font-thin text-blue-200">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Phasellus nulla velit, maximus sit amet suscipit in, fermentum id
              est. Suspendisse consequat ornare elit.”
            </span>
          </div>
          <div className="flex flex-row">
            <div className="bg-blue-600 flex flex-col  p-5   w-1/5 rounded-xl">
              <div className="flex flex-col gap-3 pb-3">
                <div className="flex  items-center gap-2">
                  <HiOutlineFolderOpen className="text-gray-100 " size={18} />
                  <span className="text-gray-100">Tech & Talent Unified</span>
                </div>
                <span className="text-gray-300 font-thin text-xs">
                  Access every technology, every skill set, and every tool -
                  fully integrated and ready to execute.
                </span>
              </div>
              <div>
                <img src={wc1} alt="" />
              </div>
            </div>

            <div className="bg-blue-600 flex flex-col  p-5   w-1/5 rounded-xl">
              <div className="flex flex-col gap-3 pb-3">
                <div className="flex  items-center gap-2">
                  <HiOutlineFolderOpen className="text-gray-100 " size={18} />
                  <span className="text-gray-100">Scale Right, Scale Fast</span>
                </div>
                <span className="text-gray-300 font-thin text-xs">
                  Access every technology, every skill set, and every tool -
                  fully integrated and ready to execute.
                </span>
              </div>
              <div>
                <img src={wc2} alt="" />
              </div>
            </div>

            <div className="bg-blue-600 flex flex-col  p-5   w-1/5 rounded-xl">
              <div className="flex flex-col gap-3 pb-3">
                <div className="flex  items-center gap-2">
                  <HiOutlineFolderOpen className="text-gray-100 " size={18} />
                  <span className="text-gray-100">AI-Powered Innovation</span>
                </div>
                <span className="text-gray-300 font-thin text-xs">
                  Access every technology, every skill set, and every tool -
                  fully integrated and ready to execute.
                </span>
              </div>
              <div>
                <img src={wc3} alt="" />
              </div>
            </div>

            <div className="bg-blue-600 flex flex-col  p-5   w-1/5 rounded-xl">
              <div className="flex flex-col gap-3 pb-3">
                <div className="flex  items-center gap-2">
                  <HiOutlineFolderOpen className="text-gray-100 " size={18} />
                  <span className="text-gray-100">
                    Supercharge Your Product
                  </span>
                </div>
                <span className="text-gray-300 font-thin text-xs">
                  Access every technology, every skill set, and every tool -
                  fully integrated and ready to execute.
                </span>
              </div>
              <div>
                <img src={wc4} alt="" />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-green-300  py-10">
          <div className="flex flex-col">
            <span
              className="text-2xl font-bold"
              style={{
                background: "linear-gradient(to right, #909DC1, #3663DE)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              Choose Your SolutionFor Emerging Businesses
            </span>
            <span className="flex flex-col text-blue-100 text-sm font-thin">
              Propel your new age business forward with our Solutions:
            </span>
          </div>

          <div className="flex flex-row gap-3">
            <div className="w-1/3 bg-red-200 rounded-2xl">
              <img src={Frame_1} alt="" />

              <div className="flex flex-col h-44">
                <div>
                  <span
                    className="text-2xl font-bold px-5"
                    style={{
                      background: "linear-gradient(to right, #909DC1, #3663DE)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    Plug and Play solutions
                  </span>
                </div>

                <div className="flex flex-row  px-5 ">
                  <span className="pr-10  flex flex-col gap-4 text-xs font-thin text-blue-200">
                    Instant Integration, Immediate Impact: Dive into the market
                    without delay, utilizing our fully integrated tech stack
                    that meshes seamlessly with your operations.
                  </span>

                  <div className="  border-gray-600 border-l-2 pl-10 "></div>

                  <div className=" flex items-center  text-xs text-nowrap bg-[#2029C8] rounded-3xl py-1 px-5 text-gray-200 font-thin w-fit h-10">
                    <button>Customize Your Path</button>
                  </div>
                </div>
              </div>
            </div>

            <div className="w-3/5 bg-red-200 rounded-2xl">
              <img src={Frame_2} alt="" />

              <div className="flex flex-row px-5 ">
                <div>
                  <div>
                    <span
                      className="text-2xl font-bold "
                      style={{
                        background:
                          "linear-gradient(to right, #909DC1, #3663DE)",
                        WebkitBackgroundClip: "text",
                        WebkitTextFillColor: "transparent",
                      }}
                    >
                      Customizable Solutions
                    </span>

                    <span className="pr-10  flex flex-col gap-4 text-xs font-thin text-blue-200">
                      Customizable Solutions designed for your business's unique
                      demands & growth trajectory.
                    </span>
                  </div>

                  <div>
                    <span className="pr-10  flex flex-col gap-4 text-sm  text-gray-400">
                      Build, Expand:
                    </span>
                    <span>
                      <span className="pr-10  flex flex-col gap-4 text-xs font-thin text-blue-200">
                        Engineered for long-term evolution, these solutions
                        ensure your technology infrastructure grows as
                        dynamically as your business.
                      </span>
                    </span>
                  </div>
                </div>

                <div className="flex flex-row  px-5 ">
                  <div className="  border-gray-600 border-l-2 pl-10 "></div>

                  <div className=" flex items-center  text-xs text-nowrap bg-[#2029C8] rounded-3xl py-1 px-5 text-gray-200 font-thin w-fit h-10">
                    <button>Customize Your Path</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <span
            className="text-2xl font-bold "
            style={{
              background: "linear-gradient(to right, #909DC1, #3663DE)",
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
            }}
          >
            Testimonials
          </span>

          <div className="flex flex-row gap-3">
            <div>
              <div className="relative w-60  ">
                <img className="object-cover " src={Figure} alt="" />

                <div className="py-6 absolute top-0 left-0 px-4 flex flex-col">
                  <span className="text-[8px] text-gray-300  font-thin ">
                    “T²C turned our ambitious idea into a market-ready product
                    in record time. Their end-to-end expertise and accelerators
                    like TurboCloud streamlined our development process, saving
                    us months of work. From ideation to execution, they were the
                    perfect tech partner.”
                  </span>

                  <div className="flex flex-row items-center gap-2 pt-4">
                    <div className="bg-black h-10 w-10 rounded-full"></div>

                    <div className=" flex flex-col">
                      <span className="text-gray-300 text-sm">Ganesh Iyer</span>
                      <span className="text-gray-500 text-xs">Eyemyeye</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="relative w-60  ">
                <img className="object-cover " src={Figure} alt="" />

                <div className="py-6 absolute top-0 left-0 px-4 flex flex-col">
                  <span className="text-[8px] text-gray-300  font-thin ">
                    “We were struggling with onboarding inefficiencies until T²C
                    stepped in. Their AI-driven solutions and seamless
                    integration of TurboAuth transformed our workflows, cutting
                    onboarding time by 50%. It’s like having a powerhouse tech
                    team on demand.”
                  </span>

                  <div className="flex flex-row items-center gap-2 pt-4">
                    <div className="bg-black h-10 w-10 rounded-full"></div>

                    <div className=" flex flex-col">
                      <span className="text-gray-300 text-sm">
                        Raktim Bharatee
                      </span>
                      <span className="text-gray-500 text-xs">Pichain</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="relative w-60  ">
                <img className="object-cover " src={Figure} alt="" />

                <div className="py-6 absolute top-0 left-0 px-4 flex flex-col">
                  <span className="text-[8px] text-gray-300  font-thin ">
                    “Partnering with T²C was a game-changer. Their accelerators,
                    like TurboStream, optimized our video streaming
                    capabilities, helping us deliver a flawless user experience.
                    They didn’t just meet our expectations - they redefined
                    what’s possible in tech collaboration”
                  </span>

                  <div className="flex flex-row items-center gap-2 pt-4">
                    <div className="bg-black h-10 w-10 rounded-full"></div>

                    <div className=" flex flex-col">
                      <span className="text-gray-300 text-sm">
                        JayKanth Raj
                      </span>
                      <span className="text-gray-500 text-xs">
                        Stealth Mode Startup
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-row">
          <div className="bg-gray-900">
            <div className="flex flex-row ">
              <span className="text-gray-200 pr-3">
                Ready to Build the Future? Let's Make It Happen
              </span>

              <div className="border-l-1 border-gray-400  "></div>
              <span className="pl-3 text-[9px] text-gray-400 flex items-center">
                Your breakthrough idea deserves a world-class execution. Partner
                with T²C and transform your vision into reality.
              </span>
            </div>

            <div  className="flex ">
              <div className="  flex  flex-col text-gray-300 text-[9px] font-thin">
                <span>First Name</span>
                <input
                  className="py-1 px-2 border border-gray-300 rounded-md placeholder:text-gray-300"
                  type="text"
                  placeholder="First Name"
                />
              </div>
              <div className="  flex  flex-col text-gray-300 text-[9px] font-thin">
                <span>Last Name</span>
                <input
                  className="py-1 px-2 border border-gray-300 rounded-md placeholder:text-gray-300"
                  type="text"
                  placeholder="Last Name"
                />
              </div>
            </div>

            <div className="flex ">
              <div  className="  flex  flex-col text-gray-300 text-[9px] font-thin">
                <span>Email ID </span>
                <input
                 className="py-1 px-2 border border-gray-300 rounded-md placeholder:text-gray-300"
                type="text" placeholder="Email ID" />
              </div>
              <div  className="  flex  flex-col text-gray-300 text-[9px] font-thin">
                <span>Phone Number</span>
                <input
                 className="py-1 px-2 border border-gray-300 rounded-md placeholder:text-gray-300"
                type="text" placeholder="+1-202-555-0174" />
              </div>
            </div>

            <div className="bg-[#2029C8] text-gray-200 w-60 flex justify-center text-[9px] font-thin py-1 rounded-sm">
              <button>Send Now</button>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <div className=" h-fit w-68 py-4 rounded-xl bg-gray-950 text-gray-200 flex flex-row">
              <div className="">
                <IoLocationOutline size={36} color="blue" />
              </div>
              <div className="flex flex-col pr-3 ">
                <span>Location</span>
                <span className="text-[11px] font-thin pt-2">
                  Turbostart Technology Development Centre Pvt Ltd CIN:
                  U72900TZ2022PTC029746 Address: 1st Floor, Mayflower
                  Valencia,Avinashi Road, Coimbatore - 641004, TN, IN
                </span>
              </div>
            </div>

            <div className=" h-fit w-68 py-4 rounded-xl bg-gray-950 text-gray-200 flex flex-row">
              <RiHeadphoneLine size={36} color="blue" />

              <div className="flex flex-col pr-3 ">
                <span>Contact Number</span>
                <span className="text-[11px] font-thin pt-2">
                  +91 7598 443 162
                </span>
              </div>
            </div>

            <div className=" h-fit w-68 py-4 rounded-xl bg-gray-950 text-gray-200 flex flex-row">
              <LuMail size={36} color="blue" />
              <div>
                <span>Email Address</span>
                <span>t2c@tsquaredc.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
