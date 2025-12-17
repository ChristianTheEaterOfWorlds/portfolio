import React, { useState } from "react"
import image from "../assets/manFace.png"
import ContactForm from "./ContactForm"

function Hero() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-purple-50 via-white to-purple-50 flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-purple-800 text-lg font-medium">Hello I'm</p>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900">
                Christian <span className="bg-gradient-to-r from-purple-800 to-purple-600 bg-clip-text text-transparent">Roque</span>
              </h1>
              <p className="text-2xl text-gray-600 font-medium">Certified Programmer</p>
            </div>
            <p className="text-gray-600 text-lg leading-relaxed">
              I am currently learning and building my skills in front-end web development using React (JSX). I'm passionate about creating practical, user-friendly websites that support real business needs. My goal is to keep improving and eventually develop scalable applications that solve real-world challenges.
            </p>
            <div className="pt-4">
              {!showForm ? (
                <button 
                  onClick={() => setShowForm(true)}
                  className="px-8 py-4 bg-purple-800 text-white rounded-lg hover:bg-purple-900 transition-all font-semibold shadow-xl hover:shadow-2xl hover:scale-105 transform"
                >
                  ✉️ Contact Me
                </button>
              ) : (
                <div className="bg-white p-6 rounded-2xl shadow-xl border border-purple-100">
                  <div className="flex justify-between items-center mb-4">
                    <h3 className="text-xl font-bold text-gray-900">Get in Touch</h3>
                    <button 
                      onClick={() => setShowForm(false)}
                      className="text-gray-500 hover:text-gray-700 text-2xl"
                    >
                      ×
                    </button>
                  </div>
                  <ContactForm />
                </div>
              )}
            </div>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-purple-400 to-purple-600 rounded-2xl blur-2xl opacity-30"></div>
              <img src={image} alt="Christian Roque" className="relative w-[450px] h-[450px] object-cover rounded-2xl shadow-2xl ring-4 ring-purple-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
