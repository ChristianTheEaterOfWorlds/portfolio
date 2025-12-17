import React from "react"

function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-8">
            👨‍💻 <span className="bg-gradient-to-r from-purple-800 to-purple-600 bg-clip-text text-transparent">ABOUT ME</span>
          </h2>
          <div className="bg-gradient-to-br from-purple-50 to-white p-8 rounded-2xl shadow-xl border border-purple-100">
            <p className="text-gray-700 text-lg leading-relaxed text-center">
              I am a graduating IT student passionate about web development, focusing on creating responsive and user-friendly web applications using modern front-end technologies. I enjoy developing solutions that address real-world needs and enhance user experience.
            </p>
            <div className="mt-8 flex justify-center gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-800">3+</div>
                <div className="text-gray-600 mt-1">Projects</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-purple-800">17+</div>
                <div className="text-gray-600 mt-1">Skills</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
