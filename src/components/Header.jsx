import React from "react"
import "../Styles/Header.css"

function Header() {
  return (
    <nav className="header">
      <div className="logo">Christian Roqu<a href="https://github.com" target ="_blank">e</a></div> 
      <ul className="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#mywork">My Work</a></li>
      </ul>
      <div className="nav-buttons">
        <a href="https://docs.google.com/document/d/12AScH3jLcHTt8h6miiqrYh3HuryeIIF3/edit?usp=sharing&ouid=104794617499536631306&rtpof=true&sd=true" className="btn-outline" target="_blank">My Resume</a>
        
      </div>
    </nav>
  )
}

export default Header
