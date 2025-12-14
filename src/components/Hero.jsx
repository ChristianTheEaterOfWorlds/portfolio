import React from "react"
import "../Styles/Hero.css"
import image from "../assets/manFace.png"

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-text">
        <h2>Hello I'm</h2>
        <h1>Christian <span>Roque</span></h1>
        <h2>Certified Programmer</h2>
        <p>
          I am currently learning and building my skills in web development using
          Node.js, and React.js etc. I'm passionate about creating websites that are
          practical, user-friendly, and designed to support business needs. My goal is to
          keep improving and eventually develop scalable applications that solve
          real-world challenges.
        </p>
        <div className="hero-buttons">
          <a href="tel:+09693931057" className="btn-primary">Call me: 09693931057</a>
        </div>
      </div>
      <div className="hero-image">
        <img src={image} alt="Profile" />
      </div>
    </section>
  )
}

export default Hero
