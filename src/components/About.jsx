import React from 'react'
import './about.css'
export default function About() {
  return (
    <div className='about' id='about-me'>
        <h1>About ME</h1>
        <div className="about-box">
        <div className="left_about">
            <div className="left_img"></div>
        </div>
        <div className="right_about">
            <div className="right_about_content">
            <h1>
              Hi, i am <span>Usman Khan</span> <br />i am a 
              <span> {""}Web  Developer</span>
            </h1>
            <p>
            I am a dedicated MERN stack developer with expertise in MongoDB, Express.js, React, and Node.js. I specialize in building responsive and dynamic web applications that provide an exceptional user experience. With a strong focus on clean code and efficient solutions, I am passionate about leveraging technology to solve real-world problems.
            </p>
            </div>
        </div>
        </div>
    </div>
  )
}
