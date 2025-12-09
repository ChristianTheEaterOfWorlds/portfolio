import React from "react"
import "../Styles/About.css"

function About() {
  return (
    <section id="about" className="about">
      <h2>ABOUT ME</h2>
      <p>
        I am a graduating IT student passionate about web development, 
        with hands-on experience in Node.js, and React.js etc. 
        I enjoy building dynamic and user-friendly web applications that 
        solve real-world problems and help businesses grow..
      </p>
      <div className="about-buttons">
        <a href="https://www.facebook.com/share/r/19bHTSYSkf/" className="btn-primary" target ="_blank">Hire Me Now</a>
      </div>
    </section>
  )
}

export default About
