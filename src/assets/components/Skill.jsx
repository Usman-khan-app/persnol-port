import React from 'react'

export default function Skill() {
    let skills = ["html","css","javascript","React.js"]
  return (
    <div className='skill' id='skill'>
        <h1> Skills</h1>
        <div className="skill_container">
            {
                skills.map(x=>
                    <div className='skill_card'>
                        <h1>{x}</h1>
                    </div>
                )
            }

        </div>
    </div>
  )
}
