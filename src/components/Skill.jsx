import React from 'react'
import './skills.css'
export default function Skill() {
    let skills = ['HTML',"CSS","Java Script","React.Js","Tailwind Css","Bootstarap","Gsap","Node.Js","Express.js","Mongo Db",'Git Hub']
  return (
    <div className='skill'>
        <h1>Skills</h1>
        <div className="skill_box">
            {
                skills.map(skill =>
                    <>
            <div className="skill-content"><h1>{skill}</h1></div>

                    </>

                )
            }
        </div>
    </div>
  )
}
