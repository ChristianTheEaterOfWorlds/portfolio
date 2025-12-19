import React, { useState } from "react"
import ContactForm from "./ContactForm"

function Hero() {
  const [showForm, setShowForm] = useState(false);

  return (
    <section id="home" className="min-h-screen bg-gradient-to-br from-sky-50 via-white to-blue-50 flex items-center">
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <div className="space-y-2">
              <p className="text-sky-600 text-lg font-medium tracking-wide">Hello I'm</p>
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight">
                Christian <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">Roque</span>
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
                  className="px-8 py-4 bg-gradient-to-r from-sky-600 to-blue-600 text-white rounded-lg hover:from-sky-700 hover:to-blue-700 transition-all font-semibold shadow-lg hover:shadow-xl hover:scale-105 transform"
                >
                  ✉️ Contact Me
                </button>
              ) : (
                <div className="bg-white p-6 rounded-2xl shadow-xl border border-sky-100">
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
              <div className="absolute inset-0 bg-gradient-to-br from-sky-400 to-blue-600 rounded-full blur-2xl opacity-20"></div>
              <img src="/assets/formal.png" alt="Christian Roque" className="relative w-[450px] h-[450px] object-cover rounded-full shadow-2xl ring-4 ring-sky-100" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
