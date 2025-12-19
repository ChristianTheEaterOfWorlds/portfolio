import React from "react"

// Initial projects data
const initialProjects = [
  {
    id: 1,
    title: "Flutter Project",
    description: "A BMI calculator app that displays accurate BMI based on the inputs.",
    image: "/assets/app.png",
  },
  {
    id: 2,
    title: "Personal Portfolio Website",
    description: "A personal portfolio website built with React to showcase projects and skills.",
    image: "/assets/portfopng.png",
  },
  {
    id: 3,
    title: "Business Landing Page",
    description: "Landing page for a small business with modern UI design.",
    image: "/assets/manFace.png",
  },
]

// Reusable Card component
const ProjectCard = ({ title, description, image }) => {
  return (
    <div className="group bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-sky-100">
      <div className="relative overflow-hidden h-56">
        <img src={image} alt={title} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
        <div className="absolute inset-0 bg-gradient-to-t from-sky-900/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-sky-600 transition-colors">{title}</h3>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  )
}

// Work Section
const Work = () => {
  return (
    <section id="work" className="py-20 bg-gradient-to-br from-sky-50 via-white to-blue-50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 tracking-tight">
            🚀 <span className="bg-gradient-to-r from-sky-600 to-blue-600 bg-clip-text text-transparent">MY WORK</span>
          </h2>
          <p className="text-gray-600 text-lg">Here are some projects I've worked on recently</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {initialProjects.map((project) => (
            <ProjectCard
              key={project.id}
              title={project.title}
              description={project.description}
              image={project.image}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Work

