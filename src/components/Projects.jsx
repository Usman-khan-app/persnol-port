import React from 'react'
import './project.css'
export default function Projects() {
    let projects = [
        {
            id:1,
            img:"",
            title:"this is my frist project",
            disc:"this project about the same thing that you see in pic"
        },
        {
            id:1,
            img:"",
            title:"this is my frist project",
            disc:"this project about the same thing that you see in pic"
        }, {
            id:1,
            img:"",
            title:"this is my frist project",
            disc:"this project about the same thing that you see in pic"
        }
    ]
  return (
    <div className='projects'>
        <h1>Projects</h1>
        <div className="project_area">

        {
            projects.map(project =>
                <>
                <div className="projects_box" key={project.id}>
            <div className="project_img">
                <img src={project.img} alt="" />
            </div>
            <h1>{project.title}</h1>
            <p>{project.disc}</p>
<button>vist</button>
        </div>
                </>
            )
        }
       
        </div>
    </div>
  )
}
