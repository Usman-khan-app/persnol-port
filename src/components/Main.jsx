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

      <div className="section" id="home1">
        <div className="left">
          <div className="left_content">
            <h1>
              Hi, i am <span>Usman Khan</span> <br />i am a 
              <span> {""}Web  Developer</span>
            </h1>
            <p>
            Passionate web developer skilled in creating responsive, user-friendly websites. Proficient in HTML, CSS, JavaScript, and various frameworks. Committed to delivering high-quality code and optimizing user experience. Strong problem-solver with a keen eye for design and detail.
            </p>
            <div className="left_icon">
              <a href="https://www.facebook.com/profile.php?id=61563842459927"><CiFacebook /></a>
              <a href="https://www.linkedin.com/in/usman-khan-pk898799/"><FaLinkedinIn /></a>
              <a href=""><FaInstagram /></a>
              <a href="https://github.com/Usman-khan-app"><FaGithub /></a>
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
