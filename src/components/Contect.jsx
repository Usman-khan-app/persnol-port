import React from 'react'
import './contect.css'
export default function Contect() {
  return (
    <div className='contect'>
      <div className="left_contect">
      <h1>Contect With Us</h1>
      <div className="form">
      <form action="">
        <input type="text" placeholder='Frist Name' />
        <input type="text" placeholder='Last Name' />
        <input type="email" placeholder='abc@gmail.com' />
        <textarea className='text' name="" id="" placeholder='write your concern'></textarea>
        <button className='btn'>Submit</button>

      </form>
      </div>

      </div>
      <div className="right_contect">
        <div className="write_img">
          
        </div>

      </div>
    </div>
  )
}
