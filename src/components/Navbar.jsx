import React, { useState,useEffect } from 'react'
import './nav.css'
import logo from '../images/2.png'

export default function Navbar() {
    const links = ["Home","Contect us","services","blog","exprences","skill"]
    const [show,setShow]=useState(false)
    const toggle =()=>{
        setShow(isOpen => !isOpen)
    }
    const [isScrolled, setIsScrolled] = useState(false);

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setIsScrolled(true);
        } else {
            setIsScrolled(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

  return (
    <div className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
        <div className="logo">
            <img src={logo} alt="" />
        </div>
        <div className="nav_links">
<ul className={`nav_content ${show ?'open':'close'}`}>
    {
        links.map(link=>
            <>
             <li className='nav-item'>
        <a href="">{link}</a>

    </li>
            
            </>

        )
    }
   
    
</ul>
        </div>
        
        <div className="burger" onClick={toggle}>
            <div className={`line ${show ? 'rotate-45 translate-x translate-y-2':null}`}></div>
            <div className={`line ${show ? 'scale-0':null}`}></div>
            <div className={`line ${show ? '-rotate-45 -translate-x -translate-y-3':null}`}></div>


        </div>
        
        
    </div>
  )
}
