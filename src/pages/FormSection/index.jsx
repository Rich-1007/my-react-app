import React from "react";
import "./style.css";

import { IoLocationOutline } from "react-icons/io5";
import { PiHeadphones } from "react-icons/pi";
import { MdOutlineMail } from "react-icons/md";

const FormSection = () => {
  return (
    <div 
    className="body "
    
    >
      <div className="formBody">
        <div className="formBody-section">
          <div className="section-header">
            <span>Ready to Build the Future?</span>
            <span>Let's Make It Happen</span>
          </div>
          <div className="boundery"></div>

          <div className="description">
            <p className="custom-p">
              Your breakthrough idea deserves a world-class execution. Partner
              with T²C and transform your vision into reality.
            </p>
          </div>
        </div>
        <div className="form-section">
          <div className="input-group">
            <span>First Name</span>
            <input
              type="text"
              placeholder="First Name"
              className="input-field"
            />
          </div>

          <div className="input-group ">
            <span>Last Name</span>
            <input
              type="text"
              placeholder="Last Name"
              className="input-field"
            />
          </div>
        </div>

        <div className="form-section">
          <div className="input-group ">
            <span>Email Id</span>
            <input type="text" placeholder="Email ID" className="input-field" />
          </div>

          <div className="input-group ">
            <span>Phone Number</span>
            <input
              type="text"
              placeholder="+1-202-555-0174"
              className="input-field"
            />
          </div>
        </div>
        <div className="button-container">
          <button className="pointer-class">Send Now</button>
        </div>
      </div>

      <div className="detail-container">
        <div className="location-div">
          <div className="">
            <IoLocationOutline size={40} color="blue" className="" />
          </div>

          <div className="info-title">
            <p className="info-title">Location</p>
            <p className="info-description">
              <p>Turbostart Technology Development</p>
              <p>Centre Pvt Ltd </p>
              <p>CIN:U72900TZ2022PTC029746</p>
              <p>Adderss : 1st Floor, Mayflower Valencia,</p>
              <p>Avinashi Road, Coimbatore - 641004, TN, IN</p>
            </p>
          </div>
        </div>

        <div className="contact-div">
          <PiHeadphones size={40} color="blue" />
          <div>
            <p className="contact-title">Contact Number</p>
            <p className="contact-des">+91 7598 443 162</p>
          </div>
        </div>
        <div className="Email-div">
          <MdOutlineMail size={40} color="blue" />
          <div className="flex flex-col">
            <p className="Email-title">Email Address</p>
            <p className="email-des">t2c@tsquaredc.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormSection;
