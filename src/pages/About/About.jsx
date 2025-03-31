import React from "react";
import "./About.css";
import rocket from "/About_TSquaredC-pic.png";
import about_bg from "/t2c/about-bg.png";

const About = () => {
  return (
    <div className="about">
      <div className="about-content">
        <div className="about-content-inner">
          <h1>About TSquaredC</h1>
          <p>
            At T2C, we push the boundaries of technology for businesses
            worldwide by creating solutions that are both innovative and robust.
            Our focus is on seamless integration and strategic innovation,
            ensuring efficient operations and scalable growth.
          </p>
          <p className="p1">
            We are committed to empowering businesses in a digital-first world,
            simplifying complex systems to address challenges and unlock
            opportunities. Our scalable solutions are designed for high
            performance, prioritizing customer success and sustainable growth.
          </p>
        </div>
        <img src={rocket} alt="TSquaredC Rocket Launch" />
      </div>
      <img className="about_bgc" src={about_bg} alt="about bg" />
    </div>
  );
};

export default About;
