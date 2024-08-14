import React, { useState } from 'react';

export default function Navbar() {
  // Initialize the state for controlling the visibility of links
  const [open, setOpen] = useState(false);

  // Toggle function to show or hide links
  const toggleLinks = () => {
    setOpen(prevOpen => !prevOpen);
  };

  return (
    
      <div className="navbar">
        <div className="logo">
          {/* Logo here */}
        </div>

        <div className={`links ${open?'isopen':'isclose'}`}>
          <a href="#Hero">Home</a>
          <a href="#About">About</a>
          <a href="#projects">projects</a>

          <a href="#services">services</a>
          <a href="#skill">Skills</a>


          <a href="#contect">Contacts</a>
        </div>

        <div className="social_links">
          <a href="https://www.facebook.com/profile.php?id=61563842459927">
          <i className="ri-facebook-circle-fill"></i></a>
          <a href="https://www.linkedin.com/in/usman-khan-pk898799/">
          <i className="ri-linkedin-box-fill"></i> </a>
          <i className="ri-twitter-x-fill"></i>
          <i className="ri-instagram-fill"></i>
        </div>
        <div className="burger" onClick={toggleLinks}>
          <i className="ri-menu-line"></i>
        </div>
      </div>
    
  );
}