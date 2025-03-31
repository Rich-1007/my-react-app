import React, { useState, useEffect } from "react";

const slides = ["Slide 1", "Slide 2", "Slide 3", "Slide 4", "Slide 5"];

const SlidingCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === slides.length - 3 ? prevIndex : prevIndex + 1));
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? prevIndex : prevIndex - 1));
  };

  // useEffect(() => {
  //   const slideInterval = setInterval(() => {
  //     nextSlide();
  //   }, 5000);
  //   return () => clearInterval(slideInterval);
  // }, [currentIndex]);

  return (
    <div className="w-full flex flex-col items-center">
      <div className="overflow-hidden w-[300px]">
        <div
          style={{ transform: `translateX(-${currentIndex * 60}px)` }}
          className="flex transition-all duration-1000 gap-4"
        >
          {slides.map((slide, index) => (
            <div key={index} className="w-32 h-20 bg-blue-500 text-white flex items-center justify-center rounded">
              {slide}
            </div>
          ))}
        </div>
      </div>

      <div className="flex gap-4 mt-4">
        <button onClick={prevSlide} className="px-4 py-2 bg-gray-700 text-white rounded" disabled={currentIndex === 0}>Prev</button>
        <button onClick={nextSlide} className="px-4 py-2 bg-gray-700 text-white rounded" disabled={currentIndex >= slides.length - 3}>Next</button>
      </div>
    </div>
  );
};

export default SlidingCarousel;
