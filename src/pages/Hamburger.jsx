import React from "react";

const Hamburger = () => {
  return (
    <>
      <div className="bg-gray-950 h-96 w-60 rounded-xl py-6">
        <div className="   text-gray-400 flex flex-col items-center justify-evenly h-full">
          <span className="">Home</span>
          <span>About</span>
          <span>Services</span>
          <span>Blogs</span>
          <span>News</span>
          <span>Contact</span>
        </div>
      </div>
    </>
  );
};

export default Hamburger;
