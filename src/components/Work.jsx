import React, { useState, useEffect } from "react"
import "../styles/Work.css"

// Load initial projects from localStorage or use defaults
const getInitialProjects = () => {
  const saved = localStorage.getItem('portfolio_projects')
  if (saved) {
    return JSON.parse(saved)
  }
  return [
    {
      id: 1,
      title: "Flutter Project",
      description: "A BMI calculator app that displays accurate BMI based on the inputs.",
      image: "/src/assets/mrbmi.jpg",
    },
    {
      id: 2,
      title: "Todo App",
      description: "A simple task manager using Node.js and MongoDB.",
      image: "/src/assets/portfoliopic.png",
    },
    {
      id: 3,
      title: "Business Landing Page",
      description: "Landing page for a small business with modern UI design.",
      image: "/src/assets/manFace.png",
    },
  ]
}

// Reusable Card component
const ProjectCard = ({ title, description, image, onDelete, isAdmin }) => {
  return (
    <div className="project-card" style={{ position: 'relative' }}>
      <img src={image} alt={title} />
      <h3>{title}</h3>
      <p>{description}</p>
      {isAdmin && onDelete && (
        <button 
          onClick={onDelete}
          style={{
            position: 'absolute',
            top: 8,
            right: 8,
            padding: '4px 8px',
            fontSize: '12px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            background: '#dc3545',
            color: 'white'
          }}
        >
          Delete
        </button>
      )}
    </div>
  )
}

// Work Section
const Work = () => {
  const [projects, setProjects] = useState(getInitialProjects())
  const [isAdmin, setIsAdmin] = useState(localStorage.getItem('isAdmin') === '1')
  const [showForm, setShowForm] = useState(false)
  const [form, setForm] = useState({ title: '', description: '', image: '' })

  // Listen for admin status changes
  useEffect(() => {
    const checkAdmin = () => setIsAdmin(localStorage.getItem('isAdmin') === '1')
    const interval = setInterval(checkAdmin, 500)
    return () => clearInterval(interval)
  }, [])

  // Save projects to localStorage whenever they change
  useEffect(() => {
    localStorage.setItem('portfolio_projects', JSON.stringify(projects))
  }, [projects])

  function handleAddProject(e) {
    e.preventDefault()
    const newProject = {
      id: Date.now(),
      title: form.title,
      description: form.description,
      image: form.image
    }
    setProjects([...projects, newProject])
    setForm({ title: '', description: '', image: '' })
    setShowForm(false)
  }

  function handleDeleteProject(id) {
    if (confirm('Delete this project?')) {
      setProjects(projects.filter(p => p.id !== id))
    }
  }

  return (
    <section className="work-section">
      <h2>MY WORK</h2>
      <p>Here are some projects I've worked on recently</p>

      {isAdmin && (
        <div style={{ marginBottom: 20 }}>
          {!showForm ? (
            <button 
              onClick={() => setShowForm(true)}
              style={{
                padding: '10px 20px',
                fontSize: '14px',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                background: '#28a745',
                color: 'white'
              }}
            >
              + Add Project
            </button>
          ) : (
            <div style={{
              background: '#f8f9fa',
              padding: '20px',
              borderRadius: '8px',
              border: '1px solid #ddd'
            }}>
              <h3 style={{ marginTop: 0 }}>Add New Project</h3>
              <form onSubmit={handleAddProject}>
                <input
                  type="text"
                  placeholder="Project Title"
                  value={form.title}
                  onChange={e => setForm({ ...form, title: e.target.value })}
                  required
                  style={{
                    width: '100%',
                    padding: '10px',
                    marginBottom: '10px',
                    fontSize: '14px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    boxSizing: 'border-box'
                  }}
                />
                <input
                  type="text"
                  placeholder="Image URL (e.g., /assets/image.jpg for public folder)"
                  value={form.image}
                  onChange={e => setForm({ ...form, image: e.target.value })}
                  required
                  style={{
                    width: '100%',
                    padding: '10px',
                    marginBottom: '10px',
                    fontSize: '14px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    boxSizing: 'border-box'
                  }}
                />
                <textarea
                  placeholder="Project Description"
                  value={form.description}
                  onChange={e => setForm({ ...form, description: e.target.value })}
                  required
                  style={{
                    width: '100%',
                    padding: '10px',
                    marginBottom: '10px',
                    fontSize: '14px',
                    border: '1px solid #ddd',
                    borderRadius: '4px',
                    minHeight: '80px',
                    boxSizing: 'border-box'
                  }}
                />
                <div style={{ display: 'flex', gap: 8 }}>
                  <button 
                    type="submit"
                    style={{
                      padding: '10px 20px',
                      fontSize: '14px',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      background: '#007bff',
                      color: 'white',
                      flex: 1
                    }}
                  >
                    Add Project
                  </button>
                  <button 
                    type="button"
                    onClick={() => {
                      setShowForm(false)
                      setForm({ title: '', description: '', image: '' })
                    }}
                    style={{
                      padding: '10px 20px',
                      fontSize: '14px',
                      border: 'none',
                      borderRadius: '4px',
                      cursor: 'pointer',
                      background: '#6c757d',
                      color: 'white',
                      flex: 1
                    }}
                  >
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          )}
        </div>
      )}

      <div className="projects-grid">
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            title={project.title}
            description={project.description}
            image={project.image}
            isAdmin={isAdmin}
            onDelete={() => handleDeleteProject(project.id)}
          />
        ))}
      </div>
    </section>
  )
}

export default Work

