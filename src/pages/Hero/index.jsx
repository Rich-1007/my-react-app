import "./style.css";

import logo from "/t2c/logo.png";
import Ken1 from "/t2c/innovation-1.png";
import Ken2 from "/t2c/innovation-2.png";

import React from "react";
import { GiHamburgerMenu } from "react-icons/gi";
import FasterBuilds from "/fasterBuilds.png";
import EndToEnd from "/e2e.png";
import aiSolution from "/ai-solution.png";
import OnDemand from "/on-demand.png";
import brand1 from "/t2c/Hero-pics/Logo/brand-1.png";
import brand2 from "/t2c/Hero-pics/Logo/brand-2.png";
import brand3 from "/t2c/Hero-pics/Logo/brand-3.png";
import brand4 from "/t2c/Hero-pics/Logo/brand-4.png";

// import logo from "/t2c/logo.png"

const HeroSection = () => {
  return (
    <>
      <div className="main-container">
        <div className="header">
          {/* Logo */}
          <div className="logo">
            {/* <img src={logo} alt="logo" className="img" /> */}
          </div>

          <ul className="navbar">
            <li className="nav-item">Home</li>
            <li className="nav-item">About</li>
            <li className="nav-item">Service</li>
            <li className="nav-item">Blogs</li>
            <li className="nav-item">News</li>
            <li className="nav-item">Content</li>
          </ul>

          <div className="hamburger-icon">
            <GiHamburgerMenu width={40} height={40} color="white" />
          </div>
          <button className="get-started-btn">Get Started</button>
        </div>




        <div className="hero-section">
        <div className="content">
          <div className="main-content">
            <div>
              <h1 className="title">The Future of Tech</h1>
              <h1 className="title gradient-text">Starts Here</h1>
            </div>

            <p className="description">
              From concept to market, T²C supercharges your tech journey with
              top-tier
              <br /> talent, cutting-edge tools, and rapid execution. Let's
              build groundbreaking
              <br /> solutions that define tomorrow.
            </p>

            <button className="btn hero-btn">
              Let’s Build Something Extraordinary
            </button>

            <div id="collabs">
              <span>TRUSTED BY THE BEST</span>

              <div className="flexRow logos">
                <div className="brand">
                  <img src={brand1} />
                </div>
                <div className="brand">
                  <img src={brand2} />
                </div>
                <div className="brand">
                  <img src={brand3} />
                </div>
                <div className="brand">
                  <img src={brand4} />
                </div>
              </div>
            </div>
          </div>

          {/* Feautres */}
          <div className="features-section flexColumn">
            <div className="box flexRow">
              <div className="img">
                <img src={FasterBuilds} />
              </div>
              <div className="flexColumn content">
                <span>Faster Builds</span>
                <p>
                  Our proprietary accelerators cut development time, helping you
                  get to market faster.
                </p>
              </div>
            </div>

            <div className="box" id="box-1">
              <div className="img">
                <img src={OnDemand} alt="" />
              </div>
              <p>ON DEMAND</p>
            </div>

            <div className="box" id="box-2">
              <div className="img">
                <img src={EndToEnd} alt="" />
              </div>
              <p>END-2-END DEV</p>
            </div>

            <div className="box" id="box-3">
              <div className="img">
                <img src={aiSolution} alt="" />
              </div>
              <p>AI SOLUTIONS</p>
            </div>

            <div className="flexRow boxes-row">
              <div className="box">
                <div className="img">
                  <img src={EndToEnd} alt="" />
                </div>
                <p>END-2-END DEV</p>
              </div>
              <div className="box" id="box-2">
                <div className="img">
                  <img src={aiSolution} alt="" />
                </div>
                <p>AI SOLUTIONS</p>
              </div>
              <div className="box" id="box-3">
                <div className="img">
                  <img src={OnDemand} alt="" />
                </div>
                <p>ON DEMAND</p>
              </div>
            </div>
          </div>
        </div>

        {/*Innovation */}
        <div className="innovation">
          <div className="heading">
            <h1 className="gradient-text">Innovation in Action</h1>

            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
              nulla velit, maximus sit amet suscipit in, fermentum id est.
            </p>
          </div>

          <div className="flexRow cards-container">
            <div className="box flexColumn">
              <img src={Ken1} alt="" />
              <h3>
                Revolutionized Kenverse’s AI <br />
                capabilities in just 6 months
              </h3>
              <p>
                From concept to deployment, T²C engineered an AI transformation
                that positioned Kenverse as a market leader.
              </p>
            </div>
            <div className="box flexColumn" id="card-2">
              <img src={Ken2} alt="" />
              <h3>
                Revolutionized Kenverse’s AI <br />
                capabilities in just 6 months
              </h3>
              <p>
                From concept to deployment, T²C engineered an AI transformation
                that positioned Kenverse as a market leader.
              </p>
            </div>
          </div>
        </div>
      </div>



        
      </div>
    </>
  )
};

export default HeroSection;
