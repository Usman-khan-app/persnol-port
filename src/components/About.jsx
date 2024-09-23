import React from 'react'
import './about.css'
export default function About() {
  return (
    <div className='about'>
        <h1>About ME</h1>
        <div className="about-box">
        <div className="left_about">
            <div className="left_img"></div>
        </div>
        <div className="right_about">
            <div className="right_about_content">
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
            </div>
        </div>
        </div>
    </div>
  )
}
