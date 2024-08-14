import React from 'react'

export default function Technology() {
    let card = [{
        id:1,
        svg:<i className="ri-html5-fill"></i>,
        title:"Html",
    }
,
{
    id:2,
    svg:<i className="ri-css3-fill"></i>,
    title:"css"
    
},
{
    id:3,
    svg:<i className="ri-javascript-fill"></i>,
    title:"java Script"

},{
    id:4,
    svg:<i className="ri-reactjs-line"></i>,
    title:"React.js"
},
{
    id:5,
    svg:<i className="ri-bootstrap-fill"></i>,
    title:"BootStrap"
},{
    id:6,
    svg:"",
    title:"Gsap"
}
]
  return (
    <div className='technology_sec'>
            <h1>technology_sec</h1>

        <div className="sec">
            {
                card.map(x=>
                    <>
                    <div className='sec_card'>
                    <div className="svg">{x.svg}</div>
                    <h3>{x.title}</h3>
                    </div>
                    </>

                )
            }
        </div>
        
    </div>
  )
}
