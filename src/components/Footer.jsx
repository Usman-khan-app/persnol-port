import React from 'react'
import { IoLocation } from "react-icons/io5";
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import './footer.css'
export default function Footer() {
  return (
    <div className='footer'>
        <div className="footer_box">
            <div className="footer-b">
                <div className="loc">
                    <a href=""><IoLocation /></a>
                    <p>district Dir upper KPK Pakistan</p>
                </div>
                <div className="loc">
                    <a href=""><FaPhoneAlt /></a>
                    <p>+92348 8987996</p>
                </div>
                <div className="loc">
                    <a href=""><MdEmail /></a>
                    <p>uk8987996@gmail.com</p>
                </div>
            </div>





            <div className="footer-b">
                <div className="loc">
                    <a href="">
                    <p>Home</p>

                    </a>
                </div>
                <div className="loc">
                    <a href="">
                    <p>Privecy</p>

                    </a>
                </div>
                <div className="loc">
                    <a href="">
                    <p>Term & Condition</p>

                    </a>
                </div>
            </div>
        </div>
        <div className="fot">
            <p>Copyright &copy; By Usman Khan &reg;</p>
        </div>
    </div>
  )
}
