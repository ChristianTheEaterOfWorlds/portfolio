import React from "react"
import Header from "./components/Header"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import About from "./components/About"
import Work from "./components/Work"
import Footer from "./components/Footer"
import AdviceCard from "./components/AdviceCard";
import "./Styles/App.css"

function App() {
  return (
    <div>
      <Header />
      <Hero />
      <Skills />
      <About />
      <Work />   
      <AdviceCard />
      <Footer />
    </div>
  )
}

export default App

