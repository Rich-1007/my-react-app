import React, { useState } from "react";
import "./style.css";
import Figure from "/t2c/Figure.png";

const data = [
  {
    review:
      "“T²C turned our ambitious idea into a market-ready product in record time. Their end-to-end expertise and accelerators like TurboCloud streamlined our development process, saving us months of work. From ideation to execution, they were the perfect tech partner.”",
    name: "Ganesh",
    company: "Eyemyeye",
  },
  {
    review:
      "“We were struggling with onboarding inefficiencies until T²C stepped in. Their AI-driven solutions and seamless integration of TurboAuth transformed our workflows, cutting onboarding time by 50%. It’s like having a powerhouse tech team on demand.”",

    name: "Raktim Bharate",
    company: "Pichain",
  },
  {
    review:
      "“We were struggling with onboarding inefficiencies until T²C stepped in. Their AI-driven solutions and seamless integration of TurboAuth transformed our workflows, cutting onboarding time by 50%. It’s like having a powerhouse tech team on demand.”",

    name: "Jaykhant Raj",
    company: "Stealth Mode Startup",
  },
  {
    review:
      "“We were struggling with onboarding inefficiencies until T²C stepped in. Their AI-driven solutions and seamless integration of TurboAuth transformed our workflows, cutting onboarding time by 50%. It’s like having a powerhouse tech team on demand.”",

    name: "Jaykhant Raj",
    company: "Stealth Mode Startup",
  },
  {
    review:
      "“We were struggling with onboarding inefficiencies until T²C stepped in. Their AI-driven solutions and seamless integration of TurboAuth transformed our workflows, cutting onboarding time by 50%. It’s like having a powerhouse tech team on demand.”",

    name: "Jaykhant Raj",
    company: "Stealth Mode Startup",
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === slides.length - 3 ? prevIndex : prevIndex + 1
    );
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? prevIndex : prevIndex - 1
    );
  };
  return (
    <>
      <div className="relative ">
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

        <div className="overflow-hidden w-[300px]">
          <div
            style={{ transform: `translateX(-${currentIndex * 60}px)` }}
            className="flex transition-all duration-1000  flex-row gap-3 bg-red-400 "
          >
            {data.map((item, index) => (
              <div key={index} className="relative w-60 ">
                <img className="object-cover " src={Figure} alt="" />
                <div className="py-6 absolute top-0 left-0 px-4 flex flex-col">
                  <span className="text-[8px] text-gray-300  font-thin ">
                    {item.review}
                  </span>
                  <div className="flex flex-row items-center gap-2 pt-4">
                    <div className="bg-black h-10 w-10 rounded-full"></div>
                    <div className=" flex flex-col">
                      <span className="text-gray-300 text-sm">{item.name}</span>
                      <span className="text-gray-500 text-xs">
                        {item.company}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="flex gap-4 mt-4 absolute top-17  w-full  flex-row justify-between px-4 sm:px-6">
          <button
            onClick={prevSlide}
            className="w-8 h-8 bg-gray-700 text-white rounded-full"
          >
            p
          </button>
          <button
            onClick={nextSlide}
            className="w-8 h-8 bg-gray-700 text-white rounded-full"
          >
            n
          </button>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
