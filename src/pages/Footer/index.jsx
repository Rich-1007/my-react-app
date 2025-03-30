import React from "react";
import "./style.css";

import { BsLinkedin } from "react-icons/bs";
import { VscTwitter } from "react-icons/vsc";
import { FaDiscord } from "react-icons/fa";

import Footer1 from "/t2c/footer-bg.jpg";
import startBig from "/t2c/Start-Big.png";

const Footer = () => {
  return (
    <>
      <div
        // className="bg-red-400 relative sm:h-92 h-screen overflow-hidden "
        className="footer-container"
      >
        <img
          src={Footer1}
          alt=""
          // className="object-cover h-screen sm:h-fit w-full "
          className="footer-image"
        />

        <div className="footer-content ">
          <div className="footer-links ">
            <div className="footer-column">
              <div className=" footer-logo">
                <img src={startBig} alt="" className="footer-logo-image" />
              </div>

              <div className="footer-text">
                <div className="footer-text-content">
                  <span>Want to build the future with us?</span>
                  <span>follow T²C and make an impact!</span>
                </div>
                <div className="footer-social-links">
                  <BsLinkedin size={18} color="gray" />
                  <VscTwitter size={18} color="gray" />
                  <FaDiscord size={18} color="gray" />
                </div>
              </div>
            </div>
            <div className="footer-navigation">
              <div className="footer-nav-column">
                <span className="footer-nav-item">Product</span>
                <span className="footer-nav-link">Home</span>
                <span className="footer-nav-link">About</span>
                <span className="footer-nav-link">Services</span>
                <span className="footer-nav-link">Faq</span>
                <span className="footer-nav-link">why Choose</span>
                <span className="footer-nav-link">Contact</span>
              </div>
              <div className="footer-nav-column">
                <span className="footer-nav-item">
                  Company
                </span>
                <span className="footer-nav-link">
                  Vision
                </span>
                <span className="footer-nav-link">
                  Mission
                </span>
                <span className="footer-nav-link">
                  Values
                </span>
                <span className="footer-nav-link">
                  Team
                </span>
              </div>
            </div>
          </div>
          <div className="footer-mobile-menu ">
            <div className=" footer-mobile-nav ">
              <div className="footer-nav-column">
                <span className="footer-nav-item">
                  Product
                </span>
                <span className="footer-nav-link">
                  Home
                </span>
                <span className="footer-nav-link">
                  About
                </span>
                <span className="footer-nav-link">
                  Services
                </span>
                <span className="footer-nav-link">
                  Faq
                </span>
                <span className="footer-nav-link">
                  why Choose
                </span>
                <span className="footer-nav-link">
                  Contact
                </span>
              </div>
              <div className="footer-nav-column">
                <span className="footer-nav-item">
                  Company
                </span>
                <span className="footer-nav-link">
                  Vision
                </span>
                <span className="footer-nav-link">
                  Mission
                </span>
                <span className="footer-nav-link">
                  Values
                </span>
                <span className="footer-nav-link">
                  Team
                </span>
              </div>
            </div>

            <div className="footer-contact">
              <div className="footer-image-container  ">
                <img src={startBig} alt="" className="footer-logo-image" />
              </div>

              <div className="footer-text">
                <div className="footer-info">
                  <span>TSquaredC Ltd.</span>
                  <span>161, Basavanagar</span>
                  <span>Bangalore, Karnataka</span>
                </div>
                <div className="footer-social-links">
                  <BsLinkedin size={22} color="gray" />
                  <VscTwitter size={22} color="gray" />
                  <FaDiscord size={22} color="gray" />
                </div>
              </div>
            </div>
          </div>

          <div className="footer-divider"></div>
          <div className="footer-desktop-bottom">
            <span>© 2024 TSquaredC | All Rights Reserved.</span>
            <div className="footer-links">
              <span className="footer-link-pointer">Privacy Policy</span>
              <span className="footer-link-pointer">Terms of Service</span>
            </div>
          </div>
          <div className="footer-mobile-bottom">
            <span className="footer-link-pointer">Privacy Policy</span>
            <span className="footer-link-pointer">Terms of Service</span>
            <span>© 2024 TSquaredC | All Rights Reserved.</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
