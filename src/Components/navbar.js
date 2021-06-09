import React from 'react';
import '../Styles/navbar.css'

//Navbar by Jonevinothjoseph
function Navbar(){
  //Redirect to homepage with JS. Adding HTML and CSS is too much work.
  
  return(
    <div className="nav">
        <header className="header">
      <a href="/" className="logo">Astra<span className="title-color">ck</span></a>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" htmlFor="menu-btn"><span className="navicon"></span></label>
      <ul className="menu">
        <li><a href="#work">Our Work</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#careers">Careers</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </header>
    </div>
  )
}

export default Navbar