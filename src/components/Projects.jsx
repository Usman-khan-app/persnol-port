import React from 'react'
import './project.css'
import pro1 from '../images/hipta.png'
export default function Projects() {
    let projects = [
        {
            id:1,
            img:pro1,
            title:"Hipta",
            disc:"I successfully cloned this website using HTML, CSS, and React.js,."
        },
        {
            id:2,
            img:pro1,
            title:"Estore",
            disc:"I successfully create this website using React.js  HTML,  and tailwindd CSS, .",
            url:"hipta"
        },
        {
            id:1,
            img:pro1,
            title:"Hipta",
            disc:"I successfully cloned this website using HTML, CSS, and React.js,.",
            url :"https://estore12.netlify.app/"
        },
    ]
  return (
    <div className='projects' id='pro'>
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
<button src={product.url}>vist</button>
        </div>
                </>
            )
        }
       
        </div>
    </div>
  )
}
