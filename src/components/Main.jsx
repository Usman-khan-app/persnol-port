import React from "react";
import "./main.css";
import { CiFacebook } from "react-icons/ci";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
// import img from '../images/hero.jpg'
import Navbar from "./Navbar";

export default function Main() {
  return (
    <div className="main w-screen">
      <Navbar />

      <div className="section">
        <div className="left">
          <div className="left_content">
            <h1>
              Hi, i am <span>usman khan</span> <br />i am a 
              <span> {""}web devoloper</span>
            </h1>
            <p>
              I am presently employed as a Frontend Web Developer at Tech
              Creator Software House, specializing in crafting fully responsive
              websites. My enthusiasm lies in embracing new technologies,
              problem-solving, and collaborating with a professional team to
              explore fresh ideas and concepts
            </p>
            <div className="left_icon">
              <a href=""><CiFacebook /></a>
              <a href=""><FaLinkedinIn /></a>
              <a href=""><FaInstagram /></a>
              <a href=""><FaGithub /></a>
            </div>
          </div>
        </div>
        <div className="right">

          <div className="img">
            {/* <img src={img} alt="" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}
